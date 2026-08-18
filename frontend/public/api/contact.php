<?php

/**
 * Auratek Jewels — Contact Form Handler (Core PHP)
 *
 * Endpoint : POST /api/contact.php
 * Response : JSON { success: bool, message: string }
 *
 * Flow:
 *  1. Validate request method & content type
 *  2. Sanitize and validate form fields
 *  3. Send inquiry notification to admin (auratekjewels@gmail.com)
 *  4. Send confirmation email to the user
 *  5. Return JSON response
 */

// ─── Autoload PHPMailer ───────────────────────────────────────────────────────
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception as MailException;

require_once __DIR__ . '/PHPMailer/Exception.php';
require_once __DIR__ . '/PHPMailer/PHPMailer.php';
require_once __DIR__ . '/PHPMailer/SMTP.php';

// ─── Email Templates ──────────────────────────────────────────────────────────
require_once __DIR__ . '/email-templates/inquiry.php';
require_once __DIR__ . '/email-templates/confirmation.php';

// ─── Load Config ──────────────────────────────────────────────────────────────
$cfg = require __DIR__ . '/config.php';

// ─── CORS Headers ─────────────────────────────────────────────────────────────
// Allow the React SPA (same origin on localhost, or your domain in production)
$allowedOrigins = [
    'http://localhost',
    'http://localhost:5173',
    'http://localhost:3000',
    'https://www.auratekjewels.com',
    'https://auratekjewels.com',
];

$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
if (in_array($origin, $allowedOrigins, true)) {
    header('Access-Control-Allow-Origin: ' . $origin);
} else {
    header('Access-Control-Allow-Origin: ' . ($allowedOrigins[3] ?? '*'));
}
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, X-Requested-With');
header('Access-Control-Max-Age: 86400');
header('Content-Type: application/json; charset=UTF-8');
header('X-Content-Type-Options: nosniff');

// Handle pre-flight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

// ─── Helper: JSON Response ────────────────────────────────────────────────────
function jsonResponse(bool $success, string $message, int $statusCode = 200, array $errors = []): never
{
    http_response_code($statusCode);
    $payload = ['success' => $success, 'message' => $message];
    if (!empty($errors)) {
        $payload['errors'] = $errors;
    }
    echo json_encode($payload, JSON_UNESCAPED_UNICODE);
    exit;
}

// ─── Method Guard ─────────────────────────────────────────────────────────────
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    jsonResponse(false, 'Method not allowed.', 405);
}

// ─── Parse Request Body ───────────────────────────────────────────────────────
$contentType = $_SERVER['CONTENT_TYPE'] ?? '';
$data = [];

if (str_contains($contentType, 'application/json')) {
    $raw = file_get_contents('php://input');
    $data = json_decode($raw, true) ?? [];
} elseif (str_contains($contentType, 'application/x-www-form-urlencoded') || str_contains($contentType, 'multipart/form-data')) {
    $data = $_POST;
} else {
    // Try JSON as fallback
    $raw = file_get_contents('php://input');
    $data = json_decode($raw, true) ?? [];
}

// ─── Sanitize Inputs ──────────────────────────────────────────────────────────
function sanitize(mixed $val): string
{
    return htmlspecialchars(strip_tags(trim((string)($val ?? ''))), ENT_QUOTES, 'UTF-8');
}

$name    = sanitize($data['name']    ?? '');
$email   = trim(strtolower((string)($data['email']   ?? '')));
$phone   = sanitize($data['phone']   ?? '');
$subject = sanitize($data['subject'] ?? '');
$message = sanitize($data['message'] ?? '');

// ─── Validation ───────────────────────────────────────────────────────────────
$errors = [];

if (empty($name)) {
    $errors['name'] = 'Full name is required.';
} elseif (mb_strlen($name) > 120) {
    $errors['name'] = 'Name must be 120 characters or fewer.';
}

if (empty($email)) {
    $errors['email'] = 'Email address is required.';
} elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $errors['email'] = 'Please enter a valid email address.';
} elseif (mb_strlen($email) > 254) {
    $errors['email'] = 'Email address is too long.';
}

if (empty($message)) {
    $errors['message'] = 'Message is required.';
} elseif (mb_strlen($message) < 10) {
    $errors['message'] = 'Message must be at least 10 characters.';
} elseif (mb_strlen($message) > 5000) {
    $errors['message'] = 'Message must be 5000 characters or fewer.';
}

if (!empty($phone) && !preg_match('/^[+\d\s\-().]{5,20}$/', $phone)) {
    $errors['phone'] = 'Please enter a valid phone number.';
}

if (!empty($errors)) {
    jsonResponse(false, 'Please correct the errors below.', 422, $errors);
}

// ─── Build Data Array ─────────────────────────────────────────────────────────
$ip = $_SERVER['HTTP_X_FORWARDED_FOR'] ?? $_SERVER['REMOTE_ADDR'] ?? '—';
$ip = sanitize(explode(',', $ip)[0]);

$formData = [
    'name'         => $name,
    'email'        => $email,
    'phone'        => $phone ?: '—',
    'subject'      => $subject ?: '—',
    'message'      => $message,
    'submitted_at' => date('d M Y, h:i A') . ' IST',
    'ip'           => $ip,
];

// ─── PHPMailer Helper ─────────────────────────────────────────────────────────
function createMailer(array $cfg): PHPMailer
{
    $mail = new PHPMailer(true);
    $mail->isSMTP();
    $mail->Host       = $cfg['smtp_host'];
    $mail->SMTPAuth   = true;
    $mail->Username   = $cfg['smtp_username'];
    $mail->Password   = $cfg['smtp_password'];
    $mail->SMTPSecure = $cfg['smtp_encryption'] === 'ssl' ? PHPMailer::ENCRYPTION_SMTPS : PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port       = (int)$cfg['smtp_port'];
    $mail->CharSet    = 'UTF-8';
    $mail->isHTML(true);
    return $mail;
}

// ─── Send Admin Inquiry Notification ─────────────────────────────────────────
try {
    $mail = createMailer($cfg);
    $mail->setFrom($cfg['from_email'], $cfg['from_name']);
    $mail->addAddress($cfg['admin_email'], $cfg['admin_name']);
    $mail->addReplyTo($formData['email'], $formData['name']);
    $mail->Subject = '📩 New Inquiry from ' . $name . ' — Auratek Jewels';
    $mail->Body    = buildInquiryEmailHtml($formData);
    $mail->AltBody = buildInquiryEmailText($formData);
    $mail->send();
} catch (MailException $e) {
    // Log but don't expose details to client
    error_log('[Auratek] Admin email failed: ' . $e->getMessage());
    jsonResponse(false, 'We encountered an issue sending your inquiry. Please try again or contact us directly.', 500);
}

// ─── Send User Confirmation Email ─────────────────────────────────────────────
try {
    $mail = createMailer($cfg);
    $mail->setFrom($cfg['from_email'], $cfg['from_name']);
    $mail->addAddress($formData['email'], $formData['name']);
    $mail->Subject = '✉️ We\'ve received your inquiry — Auratek Jewels';
    $mail->Body    = buildConfirmationEmailHtml($formData);
    $mail->AltBody = buildConfirmationEmailText($formData);
    $mail->send();
} catch (MailException $e) {
    // Admin email already sent — log but don't fail the overall request
    error_log('[Auratek] Confirmation email failed: ' . $e->getMessage());
}

// ─── Success ──────────────────────────────────────────────────────────────────
jsonResponse(true, 'Thank you, ' . $name . '! Your inquiry has been sent. We\'ll be in touch within 24 hours.');
