# Hotel Shiv International — React Website

Live Demo -- https://manav0344.github.io/hotel-shiv-international/

A modern, responsive hotel website built with **React (Vite)**, **React Router**, **Tailwind CSS**, and **AOS animations**.

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| React 18 + Vite | Frontend framework & build tool |
| React Router v6 | Client-side routing |
| Tailwind CSS v3 | Utility-first styling |
| AOS (Animate On Scroll) | Scroll animations |
| React Icons | Icon library |

---

## 📁 Project Structure

```
hotel-shiv-international/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Sticky navbar with mobile menu & theme toggle
│   │   ├── Footer.jsx          # Site-wide footer
│   │   ├── Gallery.jsx         # Masonry image gallery
│   │   ├── RoomCard.jsx        # Room listing card
│   │   ├── MenuCard.jsx        # Food menu card
│   │   └── ThemeToggle.jsx     # Light/Dark toggle button
│   ├── data/
│   │   ├── rooms.js            # Room data
│   │   └── menu.js             # Menu data with categories
│   ├── pages/
│   │   ├── Home.jsx            # Landing page
│   │   ├── About.jsx           # About & history
│   │   ├── Rooms.jsx           # All rooms listing
│   │   ├── Menu.jsx            # Restaurant menu
│   │   └── Contact.jsx         # Contact form & map
│   ├── App.jsx                 # Router + theme setup
│   ├── main.jsx                # React entry point
│   └── index.css               # Global styles + Tailwind
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── vite.config.js
```

---

## 🚀 Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Start development server
```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Build for production
```bash
npm run build
```

### 4. Preview production build
```bash
npm run preview
```

---

## 🌐 Pages & Routes

| Route | Page | Description |
|---|---|---|
| `/` | Home | Hero, intro, gallery, rooms preview, reviews, CTA |
| `/about` | About | Hotel story, timeline, facilities, stats |
| `/rooms` | Rooms | All 6 room types with booking cards |
| `/menu` | Dining Menu | Tabbed menu: Breakfast, Lunch, Dinner, Beverages |
| `/contact` | Contact | Form, address, phone, email, Google Maps |

---

## 🎨 Features

- ✅ **Light / Dark Theme** — toggle saved to `localStorage`
- ✅ **Fully Responsive** — mobile, tablet, desktop
- ✅ **AOS Scroll Animations** — `fade-up`, `fade-left`, `fade-right`
- ✅ **Sticky Navbar** — transparent on top, frosted glass on scroll
- ✅ **Mobile Hamburger Menu** — fullscreen overlay nav
- ✅ **Image Gallery** — CSS grid masonry layout with hover effects
- ✅ **Contact Form** — with loading state and success confirmation
- ✅ **Google Maps Embed** — with grayscale → colour hover effect
- ✅ **Unsplash Images** — high-quality hotel, room, and food photography

---

## 🎨 Design System

### Fonts (Google Fonts)
- **Playfair Display** — serif headings (`font-serif`)
- **Cormorant Garamond** — italic accents (`font-accent`)
- **DM Sans** — body text (`font-sans`)

### Colors
- **Gold** (`#d4891f`) — primary accent, buttons, highlights
- **Stone** — neutral backgrounds and text
- **Charcoal** (`#1a1a2e`) — dark mode backgrounds

---

## 📦 Dependencies

```json
{
  "aos": "^2.3.4",
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "react-router-dom": "^6.22.0",
  "react-icons": "^5.0.1"
}
```

---

## 🏨 Hotel Details

**Hotel Shiv International**  
Near Sardar Patel Stadium, Navrangpura,  
Ahmedabad – 380009, Gujarat, India  
📞 +91 79 2642 3456  
✉️ reservations@hotelshiv.com

---

*Built with ❤️ for exceptional hospitality*
