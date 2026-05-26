<div align="center">

<!-- BANNER -->
<img width="100%" src="https://capsule-render.vercel.app/api?type=waving&color=c9a84c&height=200&section=header&text=PHOSPHOR.&fontSize=80&fontColor=ffffff&fontAlignY=38&desc=Curated%20luxury%20for%20the%20modern%20wardrobe&descAlignY=58&descAlign=50&descSize=18&animation=fadeIn" />

<br/>

<!-- BADGES -->
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-black?style=for-the-badge&logo=framer&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![Status](https://img.shields.io/badge/Status-Live%20🟢-success?style=for-the-badge)

<br/>

**[🌐 Live Demo](https://d6hs9uen.insforge.site)** &nbsp;·&nbsp; **[📸 Screenshots](#-screenshots)** &nbsp;·&nbsp; **[✨ Features](#-features)** &nbsp;·&nbsp; **[🛠 Tech Stack](#-tech-stack)** &nbsp;·&nbsp; **[🚀 Getting Started](#-getting-started)**

<br/>

> *"Fashion is not something that exists in dresses only. Fashion is in the sky, in the street — fashion has to do with ideas."*

</div>

---

## ✦ What is Phosphor?

**Phosphor** is a full-stack fashion e-commerce platform built from the ground up — designed to deliver a luxury shopping experience with a modern, minimal aesthetic. Every feature was planned, built, debugged, and deployed independently.

This is not a tutorial clone. This is a real, live product.

---

## 📸 Screenshots

<div align="center">

### 🏠 Hero — Define Your Aesthetic
<img src="https://raw.githubusercontent.com/Rakshit0229/Phosphor_Fashion_Ecommerce/main/screenshots/hero.png" width="100%" alt="Hero Section"/>

> *Full-screen editorial hero with cinematic typography and dual CTA*

<br/>

### 🛍️ Trending Now — Product Grid
<img src="https://raw.githubusercontent.com/Rakshit0229/Phosphor_Fashion_Ecommerce/main/screenshots/trending.png" width="100%" alt="Trending Products"/>

> *Dynamic product cards with NEW / TRENDING badges, category labels and pricing*

<br/>

### 🧥 Our Philosophy — Brand Story
<img src="https://raw.githubusercontent.com/Rakshit0229/Phosphor_Fashion_Ecommerce/main/screenshots/philosophy.png" width="100%" alt="Philosophy Section"/>

> *Split-screen editorial layout with lifestyle photography*

<br/>

### 📬 Newsletter — Stay In The Loop
<img src="https://raw.githubusercontent.com/Rakshit0229/Phosphor_Fashion_Ecommerce/main/screenshots/newsletter.png" width="100%" alt="Newsletter Section"/>

> *Dark-mode newsletter with early-access offer*

<br/>

### 👔 Men's Collection — Shop Page
<img src="https://raw.githubusercontent.com/Rakshit0229/Phosphor_Fashion_Ecommerce/main/screenshots/men.png" width="100%" alt="Men's Collection"/>

> *Full catalog with filters, sorting and size selectors*

</div>

---

## ✨ Features

### 🛍️ Shopping Experience
| Feature | Status |
|---|---|
| Product filtering — price, size, color, category | ✅ |
| Product sorting — recommended, newest, trending, price | ✅ |
| Product image gallery with zoom | ✅ |
| Quick view modal | ✅ |
| Size guide popup with measurement charts | ✅ |
| Stock availability indicators | ✅ |
| Recently viewed products | ✅ |
| Product reviews & ratings | ✅ |
| Wishlist with persistent storage | ✅ |
| Social sharing — Twitter, Facebook, Pinterest | ✅ |

### 🎨 UI / UX
| Feature | Status |
|---|---|
| Dark mode with localStorage persistence | ✅ |
| Multi-language support — EN / ES / FR | ✅ |
| Currency switcher — USD, EUR, GBP, JPY, CAD, AUD | ✅ |
| Live chat support widget | ✅ |
| Fully responsive design | ✅ |
| Accessibility — ARIA labels, keyboard nav, screen reader support | ✅ |
| Framer Motion animations throughout | ✅ |

### 💳 Commerce & Backend
| Feature | Status |
|---|---|
| User authentication with session persistence | ✅ |
| Cart management | ✅ |
| Order management system | ✅ |
| Payment flow integration (PayPal demo) | ✅ |
| Backend services via InsForge SDK | ✅ |
| Database architecture | ✅ |

---

## 📦 Pages

```
📁 Phosphor
├── 🏠  Home
├── 🛍️  Shop
│   ├── Women
│   ├── Men
│   └── New Arrivals
├── 👟  Product Detail
├── 🛒  Cart
├── 💳  Checkout
├── ✅  Payment Success
├── 👤  Profile
├── ❤️   Wishlist
└── 📄  Static Pages
    ├── About
    ├── Contact
    ├── Careers
    ├── FAQ
    ├── Shipping & Returns
    ├── Privacy Policy
    └── Terms of Service
```

---

## 🛠 Tech Stack

```yaml
Frontend:
  - React (Hooks + Context API)
  - React Router v6
  - Framer Motion
  - Lucide React (icons)
  - Custom CSS with CSS Variables

Backend & Data:
  - InsForge SDK (backend services)
  - LocalStorage (client-side persistence)

Deployment:
  - Live at: https://d6hs9uen.insforge.site
```

---

## 🚀 Getting Started

### Prerequisites

```bash
node >= 16.0.0
npm >= 8.0.0
```

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/Rakshit0229/Phosphor_Fashion_Ecommerce.git

# 2. Navigate into the project
cd Phosphor_Fashion_Ecommerce

# 3. Install dependencies
npm install

# 4. Start the development server
npm start
```

The app will be running at `http://localhost:3000`

### Build for Production

```bash
npm run build
```

---

## 🗂️ Project Structure

```
src/
├── components/        # Reusable UI components
│   ├── Navbar/
│   ├── ProductCard/
│   ├── Cart/
│   ├── QuickView/
│   └── ...
├── pages/             # Route-level page components
│   ├── Home/
│   ├── Shop/
│   ├── ProductDetail/
│   ├── Checkout/
│   └── ...
├── context/           # React Context (cart, auth, theme, language)
├── hooks/             # Custom hooks
├── utils/             # Helper functions
└── styles/            # Global CSS variables & base styles
```

---

## 🧠 What I Learned Building This

- How to architect a real multi-page React app from scratch
- Managing complex state across components with Context API
- Building real authentication and session persistence
- Setting up a backend, database, and deployment pipeline
- The gap between learning and building — and how to cross it
- Debugging at 1am teaches you more than any course

---

## 🔮 What's Next

- [ ] Replace InsForge with Supabase for better scalability
- [ ] Add Stripe payment integration
- [ ] Implement product search with debouncing
- [ ] Write unit tests with Vitest
- [ ] Improve Lighthouse performance score
- [ ] Add admin dashboard for product management

---

## 👨‍💻 Author

<div align="center">

**Rakshit**

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/your-profile)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Rakshit0229)

*Built with late nights, cold coffee, and a refusal to quit.*

</div>

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<div align="center">

<img width="100%" src="https://capsule-render.vercel.app/api?type=waving&color=c9a84c&height=100&section=footer&animation=fadeIn" />

**⭐ If you found this project helpful or inspiring, drop a star — it means a lot.**

</div>
