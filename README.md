# 🌟 Personal Portfolio Website

<div align="center">

![Portfolio](https://img.shields.io/badge/Portfolio-Live-00d4ff?style=for-the-badge)
![React](https://img.shields.io/badge/React-19.x-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![Material-UI](https://img.shields.io/badge/Material--UI-7.x-007FFF?style=for-the-badge&logo=mui&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7.x-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-Deployed-000000?style=for-the-badge&logo=vercel&logoColor=white)

**A modern, responsive portfolio showcasing my projects, experience, and achievements**

[🌐 Live Demo](https://fjiolla.vercel.app) • [📧 Contact](mailto:shah.leena.287@gmail.com)

</div>

---

## ✨ Features

- 🎨 **Modern UI/UX** — clean dark theme with subtle gradients and glassmorphism
- 📱 **Fully Responsive** — seamless across mobile, tablet, and desktop
- ⌨️ **Animated Hero** — rotating role typewriter and waving intro
- 🧩 **Rich Sections** — Home, About, Experience, Projects, Achievements, Resume, Contact
- 📊 **Live Coding Stats** — Codeforces rating fetched live via the official API
- 📄 **Embedded Resume** — view the PDF inline or download it
- ✉️ **Working Contact Form** — powered by Web3Forms (no backend required)
- ⚡ **Fast** — built with Vite and deployed on Vercel

---

## 🚀 Tech Stack

**Frontend**
- React 19 — component-based UI
- React Router 7 — client-side routing
- Material-UI (MUI) 7 — component library and responsive `sx` system
- Lucide React — icon system

**Styling**
- MUI System + custom keyframe animations
- Tailwind CSS v4 (via `@tailwindcss/vite`)
- Dark theme with glassmorphism accents

**Tooling & Services**
- Vite 7 — build tool and dev server
- Biome — linting and formatting
- Web3Forms — contact form submissions
- Codeforces public API — live competitive programming rating

**Deployment**
- Vercel

---

## 📂 Project Structure

```
portfolio/
│
├── src/
│   ├── components/
│   │   ├── Home.jsx          # Landing page with animated hero
│   │   ├── About.jsx         # Bio, tech stack, tools
│   │   ├── About2.jsx        # Competitive programming stats
│   │   ├── Experience.jsx    # Work & leadership experience
│   │   ├── Projects.jsx      # Project showcase
│   │   ├── Achievements.jsx  # Awards, research & community involvement
│   │   ├── Resume.jsx        # Embedded resume viewer & download
│   │   ├── Contact.jsx       # Contact form (Web3Forms)
│   │   ├── Navbar.jsx        # Navigation bar
│   │   └── Footer.jsx        # Footer with social links
│   │
│   ├── assets/
│   │   ├── Icons/            # Tool icons
│   │   ├── Projects/         # Project screenshots
│   │   ├── achievements/     # Award & involvement images
│   │   ├── experience/       # Experience images
│   │   └── ...               # Resume PDF, avatars, logo
│   │
│   ├── App.jsx               # Routes & layout
│   ├── main.jsx              # Entry point
│   └── index.css             # Global styles
│
├── .env.example              # Environment variable template
└── package.json
```

---

## 🛠️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/fjiolla/My-Portfolio.git
   cd My-Portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables** (see below)

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Build for production**
   ```bash
   npm run build
   ```

---

## 🔑 Environment Variables

The contact form uses [Web3Forms](https://web3forms.com) — no backend needed.

1. Create a free access key at [web3forms.com](https://web3forms.com) (just enter your email).
2. Create a `.env` file in the project root:
   ```bash
   VITE_WEB3FORMS_ACCESS_KEY=your_access_key_here
   ```
3. Restart the dev server.

For production on **Vercel**, add the same variable under
**Project Settings → Environment Variables**, then redeploy (Vite bakes env vars
in at build time). The `VITE_` prefix is required, and the Web3Forms key is safe
to expose on the frontend.

---

## 📱 Responsive Breakpoints

| Breakpoint | Width      |
| ---------- | ---------- |
| `xs`       | < 600px    |
| `sm`       | ≥ 600px    |
| `md`       | ≥ 900px    |
| `lg`       | ≥ 1200px   |
| `xl`       | ≥ 1536px   |

---

## 🔗 Connect With Me

<div align="center">

[![GitHub](https://img.shields.io/badge/GitHub-fjiolla-181717?style=for-the-badge&logo=github)](https://github.com/fjiolla)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-fjiolla-0A66C2?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/fjiolla/)
[![Twitter](https://img.shields.io/badge/Twitter-fji0lla-1DA1F2?style=for-the-badge&logo=x)](https://x.com/fji0lla)
[![Email](https://img.shields.io/badge/Email-shah.leena.287-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:shah.leena.287@gmail.com)

</div>

---

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🙏 Acknowledgments

- UI components from [Material-UI](https://mui.com/)
- Icons from [Lucide React](https://lucide.dev/) and [Simple Icons](https://simpleicons.org/)
- Contact form by [Web3Forms](https://web3forms.com/)
- Deployed on [Vercel](https://vercel.com/)

---

<div align="center">

**⭐ If you like this portfolio, consider giving it a star!**

Made with ❤️ by [Leena Shah](https://fjiolla.vercel.app)

</div>
