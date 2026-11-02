# Melisen Courts Hotel Website

A modern, responsive website for **Melisen Courts**, a standard 3-star hotel located in Uyo, Akwa Ibom State, Nigeria.

## Project Overview

Melisen Courts is a hospitality website built to showcase the hotel's accommodation, facilities, and contact information. The website provides potential guests with details about rooms, amenities, location, and easy ways to make inquiries or bookings.

## Hotel Information

- **Hotel Name:** Melisen Courts
- **Classification:** Standard 3-Star Hotel
- **Address:** 39 Okokon Udounwa Drive, Akpasak Estate Phase III, Ifatai, Off Oron Road, Uyo (Transformer Bustop), Akwa Ibom State, Nigeria
- **Phone:** 07039056805
- **Email:** tobyjrsamuel1@gmail.com
- **WhatsApp:** [https://wa.me/2347039056805](https://wa.me/2347039056805)

## Technologies Used

- **[React](https://react.dev/)** - JavaScript library for building user interfaces
- **[Vite](https://vitejs.dev/)** - Fast build tool and development server
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework for styling
- **[React Icons](https://react-icons.github.io/react-icons/)** - Icon library

## Project Structure

```
melisen-courts/
├── public/              # Static assets (images)
├── src/
│   ├── components/      # Reusable React components
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Rooms.jsx
│   │   ├── Facilities.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.jsx          # Main application component
│   ├── main.jsx         # Application entry point
│   └── index.css        # Global styles with Tailwind directives
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── vite.config.js
```

## Features

### Website Sections

1. **Header** - Fixed navigation bar with mobile-responsive menu, hotel branding, and quick call button
2. **Hero Section** - Eye-catching banner with hotel name, tagline, call-to-action buttons, and contact information
3. **About Section** - Hotel description, history, location details, and key features
4. **Rooms & Suites** - Showcase of Standard Room, Deluxe Room, and Executive Suite with amenities
5. **Facilities** - Grid display of hotel amenities (parking, dining, 24/7 reception, security, Wi-Fi, etc.)
6. **Contact Section** - Complete contact information, WhatsApp booking link, and Google Maps integration
7. **Footer** - Quick links, contact details, social links, and copyright

### Responsive Design

- Fully responsive across mobile, tablet, and desktop devices
- Mobile-friendly navigation menu
- Optimized layouts for all screen sizes

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. Navigate to the project directory:
```bash
cd melisen-courts
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit the URL shown in the terminal (typically `http://localhost:5173`)

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## Design Choices

- **Color Scheme:** Primary color (#1a4d2e - deep green), Secondary color (#d4af37 - gold) to reflect elegance and hospitality
- **Typography:** Inter font family for clean, modern readability
- **Icons:** React Icons for consistent iconography
- **Images:** Hero image stored in `public/` directory for optimal loading

## Contact

For inquiries about this project or the hotel, please use the contact information provided above.

---

*Built with React, Tailwind CSS, and Vite*
