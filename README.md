# 🚀 Portfolio Website - Aravindhghosh P

A modern, responsive portfolio website built with React.js featuring a beautiful glassmorphism design inspired by iOS aesthetics. This portfolio showcases professional experience, skills, projects, certifications, and more in an elegant and interactive interface.

![Portfolio Preview](https://img.shields.io/badge/React-19.0.0-blue) ![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3.4.17-38B2AC) ![License](https://img.shields.io/badge/license-MIT-green)

---
**For Sample Click Here ->** **[Live URL](https://aravindhghosh.github.io/MyPortfolio/)**

---

## ✨ Features

- 🎨 **Modern Glassmorphism Design** - iOS-inspired frosted glass effects
- 📱 **Fully Responsive** - Works seamlessly on mobile, tablet, and desktop
- ⚡ **Fast Performance** - Optimized React components with smooth animations
- 🎯 **Easy to Customize** - All content in a single data file
- 🚀 **GitHub Pages Ready** - Deploy in minutes
- ♿ **Accessible** - Built with Shadcn UI accessible components
- 🎭 **Smooth Animations** - Engaging hover effects and transitions
- 🌗 **Dark Mode** - Toggle with system default support
- 🎮 **Hidden Mini Games** - Draggable game launcher (Snake, 2048, Tic‑Tac‑Toe, Memory)
- 📧 **Contact Form** - EmailJS-powered contact form with toast notifications
- 📱 **Social Integration** - LinkedIn, GitHub, and email links
- 📄 **Resume Download** - Direct resume download button

---

## 🛠️ Built With

### **Core Technologies**
- **[React.js 19](https://react.dev/)** - JavaScript library for building user interfaces
- **[JavaScript (ES6+)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)** - Primary programming language
- **[JSX](https://react.dev/learn/writing-markup-with-jsx)** - JavaScript XML for React components
- **[HTML5](https://developer.mozilla.org/en-US/docs/Web/HTML)** - Markup language
- **[CSS3](https://developer.mozilla.org/en-US/docs/Web/CSS)** - Styling with custom animations

### **Styling & UI**
- **[Tailwind CSS 3.4.17](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Shadcn UI](https://ui.shadcn.com/)** - Re-usable accessible component library
- **[Radix UI](https://www.radix-ui.com/)** - Unstyled, accessible component primitives
- **[Lucide React](https://lucide.dev/)** - Beautiful & consistent icon library
- **[Tailwind Animate](https://github.com/jamiebuilds/tailwindcss-animate)** - Animation utilities

### **Build Tools & Configuration**
- **[Create React App](https://create-react-app.dev/)** - React application setup
- **[CRACO](https://craco.js.org/)** - Create React App Configuration Override
- **[Webpack](https://webpack.js.org/)** - Module bundler (via CRA)
- **[Babel](https://babeljs.io/)** - JavaScript compiler
- **[PostCSS](https://postcss.org/)** - CSS transformation tool
- **[Autoprefixer](https://github.com/postcss/autoprefixer)** - CSS vendor prefixing

### **Package Management**
- **[Yarn](https://yarnpkg.com/)** - Fast, reliable dependency management

### **Additional Libraries**
- **[React Router DOM](https://reactrouter.com/)** - Navigation (if needed)
- **[Axios](https://axios-http.com/)** - HTTP client
- **[Class Variance Authority](https://cva.style/)** - Component variants
- **[clsx](https://github.com/lukeed/clsx)** - Conditional className utility
- **[Tailwind Merge](https://github.com/dcastil/tailwind-merge)** - Merge Tailwind classes

---

## 📂 Project Structure

```
./
├── public/
│   ├── index.html                 # HTML entry point
│   └── portfolio-aravindhghosh.zip # Downloadable portfolio
│
├── src/
│   ├── components/               # React components
│   │   ├── Navbar.jsx           # Navigation bar
│   │   ├── Hero.jsx             # Hero section with profile
│   │   ├── About.jsx            # About section
│   │   ├── Experience.jsx       # Work experience timeline
│   │   ├── Skills.jsx           # Skills & technologies
│   │   ├── Projects.jsx         # Featured projects
│   │   ├── Certifications.jsx   # Certifications & achievements
│   │   ├── Testimonials.jsx     # Client testimonials
│   │   ├── Blog.jsx             # Blog articles
│   │   ├── Contact.jsx          # Contact form
│   │   ├── Footer.jsx           # Footer section
│   │   ├── GamesLauncher.jsx    # Hidden mini games
│   │   └── ui/                  # Shadcn UI components
│   │       ├── button.jsx
│   │       ├── card.jsx
│   │       ├── input.jsx
│   │       ├── textarea.jsx
│   │       ├── toast.jsx
│   │       └── ... (50+ components)
│   │
│   ├── data/
│   │   └── portfolioData.js     # ⭐ EDIT THIS FILE - All content
│   │
│   ├── hooks/
│   │   ├── use-toast.js         # Toast notification hook
│   │   └── useTheme.js          # Dark mode hook
│   │
│   ├── lib/
│   │   └── utils.js             # Utility functions
│   │
│   ├── App.js                   # Main App component
│   ├── App.css                  # Custom animations
│   ├── index.js                 # React entry point
│   └── index.css                # Global styles + Tailwind
│
├── package.json                 # Dependencies & scripts
├── tailwind.config.js           # Tailwind configuration
├── craco.config.js              # CRACO configuration
├── postcss.config.js            # PostCSS configuration
├── jsconfig.json                # JavaScript configuration
├── README.md                    # This file
├── README_PORTFOLIO.md          # Content editing guide
└── GITHUB_DEPLOYMENT.md         # Deployment instructions
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v14 or higher) - [Download](https://nodejs.org/)
- **Yarn** (recommended) or npm

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/aravindhghosh/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   yarn install
   # or
   npm install
   ```

3. **Start the development server**
   ```bash
   yarn start
   # or
   npm start
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

---

## ✏️ Customization

### Edit Your Content

All portfolio content is centralized in **one file** for easy editing:

**File:** `src/data/portfolioData.js`

Update the following sections:
- ✅ Personal Information (name, title, contact)
- ✅ About section (summary, highlights)
- ✅ Work Experience
- ✅ Skills & Technologies
- ✅ Projects
- ✅ Certifications
- ✅ Education
- ✅ Achievements
- ✅ Testimonials
- ✅ Blog Posts

**Example:**
```javascript
export const personalInfo = {
  name: "Your Name",
  title: "Your Job Title",
  email: "your@email.com",
  // ... more fields
};
```

📖 **Detailed Guide:** See `README_PORTFOLIO.md` for complete customization instructions.

---

## ✉️ EmailJS Setup (Contact Form)

Create a `.env` file in the project root:

```
REACT_APP_EMAILJS_SERVICE_ID=your_service_id
REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key
```

Restart the dev server after updating `.env`.

---

## 🎨 Design Customization

### Color Scheme

Edit colors in `src/index.css`:

```css
:root {
  --primary: 0 0% 9%;           /* Primary color */
  --secondary: 0 0% 96.1%;      /* Secondary color */
  --accent: 0 0% 96.1%;         /* Accent color */
  /* ... more CSS variables */
}
```

### Fonts

Current font: System fonts (-apple-system, BlinkMacSystemFont, Segoe UI, Roboto)

To change, update in `src/index.css`:
```css
body {
  font-family: 'Your Font', sans-serif;
}
```

### Animations

Custom animations are in `src/App.css`:
- Blob animations (background blobs)
- Fade-in animations
- Custom scrollbar
- Hero orbit ring and planet motion

---

## 📦 Build for Production

```bash
yarn build
# or
npm run build
```

This creates an optimized production build in the `build/` folder.

---

## 🌐 Deployment

### Deploy to GitHub Pages

1. **Install gh-pages**
   ```bash
   yarn add gh-pages
   ```

2. **Add to package.json**
   ```json
   {
     "homepage": "https://yourusername.github.io/repository-name",
     "scripts": {
       "predeploy": "yarn build",
       "deploy": "gh-pages -d build"
     }
   }
   ```

3. **Deploy**
   ```bash
   yarn deploy
   ```

4. **Enable GitHub Pages**
   - Go to repository Settings → Pages
   - Select `gh-pages` branch
   - Save

📖 **Complete Deployment Guide:** See `GITHUB_DEPLOYMENT.md`

---

## 📱 Sections Included

1. **Hero Section** - Name, title, profile image, CTA buttons
2. **About** - Professional summary with highlights
3. **Experience** - Timeline of work history
4. **Skills** - Categorized skill cards
5. **Projects** - Featured project showcase
6. **Certifications** - Professional certifications & achievements
7. **Testimonials** - Client/colleague recommendations
8. **Blog** - Latest articles and insights
9. **Contact** - Contact form with social links
10. **Footer** - Quick links and additional info
11. **Mini Games** - Hidden draggable launcher with 4 games

---

## 🎯 Key Features Breakdown

---

## Recent UI Updates

- Added a live date/time widget in the navbar that updates every second.
- Navbar responsiveness updated:
  - Menu links show at `1200px` and above.
  - Hamburger menu is used below `1200px`.
- Added touch interaction effect for dark mode:
  - Meteor/comet trail follows finger drag.
  - Sparkles emit while dragging and fade on touch release.

### Glassmorphism Design
- Semi-transparent backgrounds with `bg-white/70`
- Backdrop blur effects with `backdrop-blur-md`
- Subtle borders with `border border-gray-200`
- Smooth shadows for depth

### Responsive Design
- Mobile-first approach
- Breakpoints: `sm:`, `md:`, `lg:`, `xl:`
- Hamburger menu for mobile
- Adaptive layouts

### Animations
- Smooth scroll behavior
- Hover effects on cards and buttons
- Animated background blobs
- Fade-in animations on load
- Custom scrollbar
- Orbiting hero ring and planets

### Accessibility
- Semantic HTML
- ARIA labels
- Keyboard navigation
- Screen reader support (via Radix UI)

---

## 🧪 Available Scripts

```bash
# Start development server
yarn start

# Build for production
yarn build

# Run tests
yarn test

# Deploy to GitHub Pages
yarn deploy
```

---

## 📊 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 👨‍💻 Author

**Aravindhghosh P**
- 🌐 Portfolio: [Your Portfolio URL]
- 💼 LinkedIn: [linkedin.com/in/aravindhghosh](https://linkedin.com/in/aravindhghosh)
- 📧 Email: aravindhghosh@outlook.com
- 📱 Phone: -

---

## 🙏 Acknowledgments

- [React.js](https://react.dev/) - UI Framework
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Shadcn UI](https://ui.shadcn.com/) - Component Library
- [Lucide Icons](https://lucide.dev/) - Icon Library
- [Unsplash](https://unsplash.com/) - Images
- [Emergent AI](https://emergent.sh/) - AI Development Assistant

---

## 📞 Support

Having issues? Need help customizing?

1. Check `README_PORTFOLIO.md` for content editing
2. Check `GITHUB_DEPLOYMENT.md` for deployment help
3. Open an issue on GitHub
4. Contact: aravindhghosh@outlook.com

---

## 🚀 Future Enhancements

- [ ] Blog with CMS integration
- [ ] Multi-language support
- [ ] Analytics integration
- [ ] SEO optimization
- [ ] Progressive Web App (PWA)
- [ ] Blog article detail pages
- [ ] Project detail pages

---

## ⭐ Show Your Support

If you like this portfolio template, please give it a star ⭐ on GitHub!

---

<div align="center">

**Built with ❤️ using React.js and Tailwind CSS**

Made by [Aravindhghosh P](https://linkedin.com/in/aravindhghosh)

</div>
