<?php

/**
 * Auratek Jewels – Inquiry Notification Email Template
 * Sent to auratekjewels@gmail.com when a contact form is submitted.
 *
 * @param array $data  Sanitized form fields: name, email, phone, subject, message, submitted_at, ip
 * @return string      Full HTML email body
 */
function buildInquiryEmailHtml(array $data): string
{
    $name       = htmlspecialchars($data['name']       ?? '', ENT_QUOTES, 'UTF-8');
    $email      = htmlspecialchars($data['email']      ?? '', ENT_QUOTES, 'UTF-8');
    $phone      = htmlspecialchars($data['phone']      ?? '—', ENT_QUOTES, 'UTF-8');
    $subject    = htmlspecialchars($data['subject']    ?? '—', ENT_QUOTES, 'UTF-8');
    $message    = nl2br(htmlspecialchars($data['message']  ?? '', ENT_QUOTES, 'UTF-8'));
    $submittedAt = htmlspecialchars($data['submitted_at'] ?? date('d M Y, h:i A T'), ENT_QUOTES, 'UTF-8');
    $ip         = htmlspecialchars($data['ip']         ?? '—', ENT_QUOTES, 'UTF-8');

    // Inline SVG logo – white version (st1 → white, st0 → gold #B39260)
    $logoSvg = <<<'SVG'
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2000 2000" width="80" height="80" style="display:block;margin:0 auto;">
<style>.ak0{fill:#B39260;}.ak1{fill:#ffffff;}</style>
<g>
  <path class="ak0" d="M961.18,772.65v0.58c-0.01-0.1-0.01-0.2-0.02-0.28C961.17,772.75,961.18,772.65,961.18,772.65z"/>
  <path class="ak0" d="M961.16,772.94c-0.01,0.08-0.01,0.18-0.02,0.28v-0.58C961.13,772.65,961.14,772.75,961.16,772.94z"/>
  <path class="ak0" d="M636.73,969.42h0.02l-0.01,0.01C636.75,969.42,636.73,969.42,636.73,969.42z"/>
  <path class="ak1" d="M534.76,1207.84c-6.31,0.57-12.36,1.22-18.37,0.26c-14.74-2.35-25.06-10.72-31.56-23.92c-5.48-11.13-10.8-22.35-16.1-33.57c-4.51-9.53-4.47-9.76-14.74-9.12c-24.51,1.52-47.37,8.47-68.14,21.74c-7.21,4.61-13.73,10.11-17.51,18.07c-4.17,8.79-2.21,14.63,6.39,19.07c-12,0-23.71,0-35.41,0c11.53-3.37,16.97-12.31,21.65-22.26c18.9-40.18,37.89-80.31,57.04-120.37c1.76-3.68,1.53-6.38-0.27-9.89c-6.32-12.31-14.85-21.76-29.29-24.65c1.1-1.56,2.67-0.89,3.93-0.9c7.94-0.07,15.94,0.57,23.8-0.22c7.36-0.74,11.99,2.22,16.22,7.65c6.33,8.13,10.24,17.54,14.73,26.62c19.59,39.65,39.03,79.38,58.43,119.13C512.17,1189.04,519.64,1201.72,534.76,1207.84z M423.25,1058.27c-17.04,36.58-33.57,72.07-50.11,107.56c25.34-23.28,54.86-32.14,89.5-28.4C449.27,1110.56,436.52,1084.94,423.25,1058.27z"/>
  <path class="ak1" d="M1568.06,1058.3c7.68,0,14.59,0,21.31,0c-18.73,16.35-35.9,34.42-53.7,51.83c-1.55,1.51-3.41,2.56-0.91,5.36c25.62,28.78,49.85,58.85,78.24,85.07c13.01,12.02,27.59,21.61,45.36,25.29c0.67,0.14,1.23,0.77,2.32,1.48c-27.62,0.48-51.27-8.48-71.79-25.91c-21.86-18.56-39.15-41.45-58.53-62.36c-2.31-2.49-4.93-4.8-6.78-7.61c-3.52-5.33-5.78-3.73-10.01-0.15c-7.28,6.17-10.25,12.96-9.48,22.52c0.86,10.71,0.16,21.53,0.27,32.31c0.05,4.51,0.23,9.08,5.39,12.71c-10.82,0-20.29,0-30.52,0c5.41-4.16,5.62-9.87,5.64-15.44c0.1-36.67,0.1-73.35,0.04-110.02c-0.01-5.07-0.25-10.22-4.77-14.63c9.53,0,18.61,0,28.32,0c-4.21,4.08-4.22,9.28-4.22,14.5c0.01,19.99,0.01,39.97,0.01,61.37c4.48-4.35,8.09-7.77,11.6-11.28c17.09-17.12,34.2-34.23,51.2-51.44C1572.57,1066.31,1572.69,1063.91,1568.06,1058.3z"/>
  <path class="ak1" d="M775.66,1058.17c24.58,1.12,48.17-1.53,71.66,1.62c6.37,0.86,12.41,3.14,17.9,6.58c22.25,13.94,21.29,44.49-1.83,56.98c-5.78,3.12-11.93,5.31-19.11,6.22c15.32,17.79,26.77,37.55,40.81,55.43c5.25,6.68,11.85,11.29,20.99,12.71c-15.71,5.36-33.77,2.26-42.3-9.57c-10.58-14.67-20.84-29.59-30.9-44.63c-4.29-6.41-8.37-12.49-17.02-13.07c-1.51-0.1-2.96-1.11-5.88-2.27c8.31-0.83,15.03,0.07,21.73-1.09c18.38-3.18,29.49-15.48,29.3-33.06c-0.19-17.26-11.42-29.5-30.05-31.49c-9.35-1-18.88-0.25-28.32-0.49c-3.67-0.09-2.64,2.39-2.65,4.21c-0.06,20.22-0.06,40.45-0.06,60.67c0,19.09,0.05,38.18,0.01,57.27c-0.01,5.36,0.37,10.51,5.77,14.68c-10.55,0-20.06,0-30.33,0c6.16-5.64,5.34-12.86,5.34-19.91c-0.01-34.78,0-69.56,0.01-104.33C780.75,1069.02,780.68,1063.43,775.66,1058.17z"/>
  <path class="ak1" d="M1388.64,1112.36c0,9.31,0,17.05,0,26.48c-3.8-9.48-10.63-11.23-18.3-11.31c-9.64-0.1-19.28-0.05-28.92-0.25c-2.98-0.06-4.41,0.5-4.39,3.96c0.12,19.84,0.04,39.69-0.04,59.53c-0.01,2.22,0.33,3.56,3,3.5c16.24-0.32,32.53,0.96,48.72-0.73c10.52-1.1,19.06-5.83,23.83-17.85c0.55,8.24-0.98,14.74-1.78,21.28c-0.36,2.98-2.65,2.11-4.35,2.12c-22.3,0.05-44.61,0.06-66.91,0.07c-8.81,0-17.62,0-27.25,0c4.85-4.36,5.34-9.51,5.34-14.83c-0.04-37.23-0.08-74.46-0.08-111.7c0-4.98-0.42-9.76-5.07-14.25c7.92,0,14.84,0,21.75,0c22.3-0.01,44.61,0.04,66.91-0.1c3.47-0.02,5.01,0.61,4.92,4.55c-0.1,4.68,0.71,9.38,0.8,14.46c-6.87-14.25-19.94-14.5-32.75-14.88c-10.95-0.32-21.92,0.05-32.88-0.12c-3.2-0.05-4.21,0.85-4.18,4.11c0.14,17.39,0.14,34.77-0.02,52.16c-0.03,3.29,1.06,4.16,4.18,4.11c9.83-0.16,19.66,0.04,29.48-0.12C1377.84,1122.45,1384.43,1120.82,1388.64,1112.36z"/>
  <path class="ak1" d="M1023.09,1050.1c14.56,32.48,29.03,64.74,43.47,97.01c4.69,10.47,9.35,20.96,13.98,31.46c3.84,8.69,7.61,17.42,18.43,20.02c-5.84,0.96-11.24,2.12-16.87,1.51c-9.87-1.06-16.12-6.6-19.98-15.35c-5.08-11.53-10.12-23.07-15.19-34.6c-0.83-1.88-1.42-3.61-4.31-3.45c-25.07,1.37-47.71,8.68-66.11,26.56c-3.41,3.31-6.12,7.14-7.57,11.77c-1.96,6.24-0.78,9.47,5.65,13.73c-9.49,0-18.28,0-28.64,0c11.81-4.06,14.93-13.79,19-22.69c15.04-32.82,29.98-65.68,44.94-98.54c0.62-1.36,1.89-3.29,1.41-4.15c-3.34-5.97,1.78-7.88,4.61-11.29C1018.76,1058.68,1020.58,1054.41,1023.09,1050.1z M1014.7,1077.72c-13.56,30.38-26.52,59.44-39.49,88.49c0.19,0.54,0.39,1.07,0.58,1.61c18.54-19.39,41.27-27,68.12-24.69C1034,1120.94,1024.6,1099.89,1014.7,1077.72z"/>
  <path class="ak1" d="M686.81,1058.45c6.93,0,13.87,0,22.17,0c-8.16,4.1-8.73,10.84-8.76,17.57c-0.12,23.43,0,46.86-0.05,70.29c-0.07,32.18-19.07,52.39-51.19,54.41c-10.03,0.63-20.03,0.18-29.69-2.9c-25.68-8.18-38.79-26.16-38.97-53.74c-0.15-22.86,0.05-45.72-0.01-68.59c-0.02-5.8,0.4-11.86-5.23-16.76c10.23,0,19.84,0,30.03,0c-4.59,3.47-5.22,8.24-5.22,13.11c0.04,26.26-0.35,52.54,0.41,78.78c0.78,26.84,19.73,44.15,46.71,44.04c26.7-0.11,46.64-18.41,47.31-44.65c0.64-25.11,0.31-50.26,0.05-75.38C694.3,1068.47,693.32,1062.06,686.81,1058.45z"/>
  <path class="ak1" d="M1130.14,1074.03c0.46-5.05-0.85-11.69,1.87-14.71c2.81-3.12,9.59-0.88,14.63-0.9c32.33-0.09,64.67,0.06,97-0.25c5.34-0.05,6.95,1.7,6.64,6.58c-0.2,3.16-0.04,6.34-0.04,10.64c-5.65-10.67-15.13-12.21-24.79-12.82c-7.35-0.46-14.75,0.05-22.12-0.16c-3.08-0.09-3.81,1.01-3.81,3.9c0.08,39.52,0,79.04,0.15,118.55c0.02,4.98,0.36,10.25,6.16,13.99c-10.8,0-20.49,0-30.92,0c5.62-4.45,5.56-10.44,5.56-16.42c0-38.19-0.09-76.39,0.11-114.58c0.02-4.52-1.17-5.8-5.6-5.5c-7.91,0.54-15.87,0.32-23.79,0.82C1142.82,1063.7,1135.39,1066.4,1130.14,1074.03z"/>
  <g>
    <path class="ak0" d="M961.16,893.43c0-0.31,0.01-0.6,0.02-0.9v2.25C961.18,894.33,961.18,893.87,961.16,893.43z"/>
    <path class="ak0" d="M961.13,892.53c0.01,0.3,0.02,0.59,0.02,0.9c-0.02,0.44-0.02,0.9-0.02,1.35V892.53z"/>
    <path class="ak1" d="M960.67,954.28c0,0-42.42-44.48-74.78-50.99c2.13,40.09,17.18,73.21,45.95,100.27c-6.87-3.56-12.97-7.91-18.72-12.73c-5.94-4.98-11.76-10.1-16.86-15.96c-26.23-30.1-41.55-65.12-47.13-104.56c-0.6-4.24,1.96-3.18,4.04-2.99c27.42,2.53,51.17,13.44,71.63,31.66c15.59,13.89,27.22,30.68,35.8,50.41c2.3-4.67,4.17-8.93,6.41-12.97c20.07-36.11,49.66-59.55,90.61-67.73c3.69-0.74,7.49-0.92,11.21-1.55c3.39-0.57,3.8,1.07,3.37,3.82c-8.48,54.54-33.36,99.16-79.22,131.1c-1.58,1.1-3.04,3.08-5.37,1.95c25.17-22,40.09-49.75,46.09-82.49c0.89-4.84,1.26-9.72,1.35-14.64c0.05-2.76-0.38-3.44-3.44-2.81c-19.15,3.97-35.53,13.19-50.1,25.91C973.93,936.59,960.67,954.28,960.67,954.28z"/>
    <path class="ak0" d="M1018.77,862.95c0,0-55.81-1.88-57.59,43.46c-0.01,0.3-0.02,0.59-0.02,0.9c0-0.31-0.01-0.6-0.02-0.9c-1.78-45.34-57.59-43.46-57.59-43.46c50.19-8.85,56.99-69.26,57.59-75.85c0.01-0.1,0.01-0.2,0.02-0.28c0.01,0.08,0.01,0.18,0.02,0.28C961.78,793.69,968.58,854.1,1018.77,862.95z"/>
    <path class="ak0" d="M983.2,983.39h-0.01c-20.58,12.39-22.15,29.24-22.15,29.24h-0.06c0,0-1.58-16.85-22.15-29.24h-0.01l0.01-0.01c20.57-12.4,22.15-29.24,22.15-29.24h0.06c0,0,1.57,16.84,22.15,29.24L983.2,983.39z"/>
    <circle class="ak0" cx="961.02" cy="1026.28" r="6.04"/>
  </g>
</g>
</svg>
SVG;

    return <<<HTML
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>New Inquiry — Auratek Jewels</title>
</head>
<body style="margin:0;padding:0;background-color:#0d0d0d;font-family:Arial,Helvetica,sans-serif;">

  <!-- Wrapper -->
  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#0d0d0d;padding:40px 20px;">
    <tr>
      <td align="center">

        <!-- Card -->
        <table width="600" cellpadding="0" cellspacing="0" border="0" style="max-width:600px;width:100%;background-color:#1a1a1a;border-radius:8px;overflow:hidden;border-top:4px solid #B39260;">

          <!-- Header -->
          <tr>
            <td align="center" style="padding:40px 40px 24px;border-bottom:1px solid #2a2a2a;">
              $logoSvg
              <h1 style="color:#B39260;font-size:22px;font-weight:700;letter-spacing:4px;text-transform:uppercase;margin:20px 0 4px;">AURATEK JEWELS</h1>
              <p style="color:#888;font-size:12px;letter-spacing:2px;text-transform:uppercase;margin:0;">Fine Jewelry for the Modern Connoisseur</p>
            </td>
          </tr>

          <!-- Alert Banner -->
          <tr>
            <td style="padding:24px 40px 0;">
              <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#1e1a13;border:1px solid #B39260;border-radius:6px;">
                <tr>
                  <td style="padding:16px 20px;">
                    <p style="color:#B39260;font-size:13px;font-weight:700;letter-spacing:2px;text-transform:uppercase;margin:0 0 4px;">&#9993; New Inquiry Received</p>
                    <p style="color:#ccc;font-size:13px;margin:0;">A customer has submitted an inquiry through the Auratek Jewels website.</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:32px 40px;">

              <!-- Section: Customer Details -->
              <h2 style="color:#fff;font-size:13px;font-weight:700;letter-spacing:2px;text-transform:uppercase;margin:0 0 16px;padding-bottom:8px;border-bottom:1px solid #2a2a2a;">Customer Details</h2>

              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td width="130" style="padding:10px 0;color:#888;font-size:13px;vertical-align:top;">Full Name</td>
                  <td style="padding:10px 0;color:#fff;font-size:14px;font-weight:600;vertical-align:top;">$name</td>
                </tr>
                <tr style="border-top:1px solid #222;">
                  <td width="130" style="padding:10px 0;color:#888;font-size:13px;vertical-align:top;">Email Address</td>
                  <td style="padding:10px 0;vertical-align:top;">
                    <a href="mailto:$email" style="color:#B39260;font-size:14px;text-decoration:none;">$email</a>
                  </td>
                </tr>
                <tr style="border-top:1px solid #222;">
                  <td width="130" style="padding:10px 0;color:#888;font-size:13px;vertical-align:top;">Phone Number</td>
                  <td style="padding:10px 0;color:#fff;font-size:14px;vertical-align:top;">$phone</td>
                </tr>
                <tr style="border-top:1px solid #222;">
                  <td width="130" style="padding:10px 0;color:#888;font-size:13px;vertical-align:top;">Subject</td>
                  <td style="padding:10px 0;color:#fff;font-size:14px;vertical-align:top;">$subject</td>
                </tr>
              </table>

              <!-- Section: Message -->
              <h2 style="color:#fff;font-size:13px;font-weight:700;letter-spacing:2px;text-transform:uppercase;margin:28px 0 16px;padding-bottom:8px;border-bottom:1px solid #2a2a2a;">Message</h2>

              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td style="background-color:#111;border:1px solid #2a2a2a;border-radius:6px;padding:20px;color:#ddd;font-size:14px;line-height:1.7;">
                    $message
                  </td>
                </tr>
              </table>

              <!-- Section: Meta -->
              <h2 style="color:#fff;font-size:13px;font-weight:700;letter-spacing:2px;text-transform:uppercase;margin:28px 0 16px;padding-bottom:8px;border-bottom:1px solid #2a2a2a;">Submission Details</h2>

              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td width="130" style="padding:8px 0;color:#888;font-size:12px;vertical-align:top;">Submitted At</td>
                  <td style="padding:8px 0;color:#aaa;font-size:12px;vertical-align:top;">$submittedAt</td>
                </tr>
                <tr>
                  <td width="130" style="padding:8px 0;color:#888;font-size:12px;vertical-align:top;">IP Address</td>
                  <td style="padding:8px 0;color:#aaa;font-size:12px;vertical-align:top;">$ip</td>
                </tr>
              </table>

              <!-- CTA -->
              <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-top:32px;">
                <tr>
                  <td align="center">
                    <a href="mailto:$email?subject=Re: Your Inquiry — Auratek Jewels" style="display:inline-block;background-color:#B39260;color:#0d0d0d;font-size:13px;font-weight:700;letter-spacing:2px;text-transform:uppercase;text-decoration:none;padding:14px 32px;border-radius:3px;">Reply to Customer</a>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding:24px 40px;border-top:1px solid #2a2a2a;text-align:center;">
              <p style="color:#555;font-size:12px;margin:0 0 8px;">
                <a href="https://www.auratekjewels.com" style="color:#B39260;text-decoration:none;">www.auratekjewels.com</a>
                &nbsp;&bull;&nbsp;
                <a href="https://www.auratekjewels.com/terms" style="color:#555;text-decoration:none;">Terms &amp; Conditions</a>
                &nbsp;&bull;&nbsp;
                <a href="https://www.auratekjewels.com/privacy" style="color:#555;text-decoration:none;">Privacy &amp; Cookies</a>
              </p>
              <p style="color:#333;font-size:11px;margin:0;">3rd Floor, Office No. 307, Maldeep Apartment, Mahidharpura, Surat, Gujarat 395003, India</p>
              <p style="color:#333;font-size:11px;margin:8px 0 0;">Powered by <a href="https://synovix.com" style="color:#444;text-decoration:none;">Synovix</a></p>
            </td>
          </tr>

        </table>
        <!-- /Card -->

      </td>
    </tr>
  </table>
  <!-- /Wrapper -->

</body>
</html>
HTML;
}

/**
 * Plain-text fallback for the inquiry notification email.
 */
function buildInquiryEmailText(array $data): string
{
    $name    = $data['name']    ?? '';
    $email   = $data['email']   ?? '';
    $phone   = $data['phone']   ?? '—';
    $subject = $data['subject'] ?? '—';
    $message = $data['message'] ?? '';
    $at      = $data['submitted_at'] ?? date('d M Y, h:i A T');

    return <<<TEXT
NEW INQUIRY — AURATEK JEWELS
==============================

A new inquiry has been submitted through the Auratek Jewels website.

CUSTOMER DETAILS
----------------
Name    : $name
Email   : $email
Phone   : $phone
Subject : $subject

MESSAGE
-------
$message

SUBMISSION INFO
---------------
Submitted At : $at

---
www.auratekjewels.com | auratekjewels@gmail.com
Powered by Synovix
TEXT;
}
