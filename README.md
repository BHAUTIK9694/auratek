# Auratek - Premium Luxury Jewelry

A modern, full-stack luxury jewelry e-commerce platform built with React and Laravel.

## Project Structure

```
auratek/
├── frontend/          # React (Vite) - Client Application
│   ├── public/        # Static assets
│   └── src/
│       ├── assets/        # Images, icons, fonts
│       ├── components/
│       │   ├── layout/    # Header, Footer, Layout
│       │   └── ui/        # Reusable UI components
│       ├── hooks/         # Custom React hooks
│       ├── pages/         # Page-level components
│       ├── styles/        # Global CSS, variables, reset
│       └── utils/         # Utilities, API client
│
├── backend/           # Laravel - API Backend
│   ├── app/
│   │   ├── Http/Controllers/Api/V1/
│   │   └── Models/
│   ├── config/
│   ├── database/
│   │   ├── migrations/
│   │   └── seeders/
│   └── routes/
│
├── logo.jpeg          # Brand logo
└── auratek.pdf        # Brand reference
```

## Design System

### Color Palette
- **Brand Primary**: `#C9A96E` (Gold / Champagne)
- **Brand Secondary**: `#1A1A1A` (Rich Black)
- **Accent**: `#8B7355` (Warm Bronze)
- **Neutrals**: White, Off-white, Cream, Grey scale

### Typography
- **Display**: Playfair Display (hero headings)
- **Heading**: Cormorant Garamond (section titles)
- **Body**: Inter (content, UI)

### Architecture
- CSS Modules for component-scoped styling
- CSS Variables for design tokens
- Reusable component-based structure
- Mobile-first responsive design

## Getting Started

### Frontend
```bash
cd frontend
npm install
npm run dev    # Starts at http://localhost:5173
```

### Backend
```bash
cd backend
composer install
cp .env.example .env
php artisan key:generate
php artisan migrate --seed
php artisan serve    # Starts at http://localhost:8000
```

## Tech Stack

| Layer     | Technology                         |
|-----------|------------------------------------|
| Frontend  | React 18, Vite, React Router, CSS Modules |
| Backend   | Laravel 11, PHP 8.2, MySQL        |
| Auth      | Laravel Sanctum (SPA)              |
| Fonts     | Google Fonts (Playfair, Cormorant, Inter) |

---

*Crafted with precision for Auratek Luxury Jewelry.*
