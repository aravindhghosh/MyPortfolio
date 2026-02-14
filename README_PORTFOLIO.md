# Portfolio Website - Easy Edit Guide

## 🎯 How to Update Your Portfolio

This portfolio is designed to be **super easy to edit** - even if you have minimal coding experience! All your content is in **ONE FILE**: `src/data/portfolioData.js`

### 📝 Editing Your Content

1. **Open the data file**: `src/data/portfolioData.js`
2. **Edit the values** in the JavaScript object (it's just text!)
3. **Save the file** - Changes will appear automatically!

---

## 📋 What You Can Edit

### 1. Personal Information
```javascript
export const personalInfo = {
  name: "Your Name",              // Change to your full name
  title: "Your Job Title",        // Your professional title
  tagline: "Your tagline",        // Brief description
  email: "your@email.com",        // Your email
  phone: "+91 1234567890",        // Your phone
  location: "Your City, Country", // Your location
  linkedin: "https://linkedin.com/in/yourprofile",  // Your LinkedIn
  github: "https://github.com/yourusername",        // Your GitHub
  profileImage: "image-url-here"  // Your profile photo URL
};
```

### 2. About Section
```javascript
export const about = {
  summary: "Your professional summary here...",
  highlights: [
    "First highlight point",
    "Second highlight point",
    // Add more highlights
  ]
};
```

### 3. Work Experience
```javascript
export const experience = [
  {
    id: 1,
    company: "Company Name",
    currentRole: "Your Current Role",
    duration: "Start Date - End Date",
    location: "City, Country",
    description: "Short summary of your role and impact",
    roleProgression: [
      {
        title: "Role Title",
        duration: "Month YYYY - Month YYYY",
        responsibilities: [
          "First responsibility",
          "Second responsibility"
        ]
      }
    ]
  },
  // Add more jobs by copying the structure
];
```

### 4. Skills
```javascript
export const skills = {
  "Category Name": ["Skill 1", "Skill 2", "Skill 3"],
  "Another Category": ["Skill A", "Skill B"],
  // Add more categories and skills
};
```

### 5. Projects
```javascript
export const projects = [
  {
    id: 1,
    title: "Project Name",
    description: "Project description...",
    technologies: ["Tech1", "Tech2"],
    image: "project-image-url"  // Optional
  },
  // Add more projects
];
```

### 6. Certifications
```javascript
export const certifications = [
  {
    id: 1,
    name: "Certification Name",
    code: "Cert Code",
    issuer: "Issuer Name",
    icon: "Award"  // Icon name from lucide-react
  },
];
```

### 7. Blog Posts
```javascript
export const blogPosts = [
  {
    id: 1,
    title: "Article Title",
    excerpt: "Brief description...",
    date: "2024-01-15",
    readTime: "5 min read",
    category: "Category"
  },
];
```

### 8. Testimonials
```javascript
export const testimonials = [
  {
    id: 1,
    name: "Person Name",
    role: "Their Role",
    company: "Their Company",
    text: "What they said about you...",
    image: "their-photo-url"
  },
];
```

---

## 🎨 Design Customization

### Change Colors
Open `src/index.css` and modify the CSS variables:

```css
:root {
  --primary: your-color-here;
  --secondary: your-color-here;
  /* etc */
}
```

### Glassmorphism Effect
The glass effect is built-in! Components use:
- `bg-white/70` - Semi-transparent white background
- `backdrop-blur-md` - Blur effect
- `border border-gray-200` - Subtle borders

---

## ✉️ Contact Form (EmailJS)

If you want the form to send real emails, add a `.env` file in the project root:

```
REACT_APP_EMAILJS_SERVICE_ID=your_service_id
REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key
```

Restart the dev server after updating `.env`.

---

## 🚀 Deployment to GitHub Pages

### Step 1: Update package.json
Add your GitHub repository URL:
```json
{
  "homepage": "https://yourusername.github.io/your-repo-name"
}
```

### Step 2: Install gh-pages
```bash
yarn add gh-pages
```

### Step 3: Add deploy scripts to package.json
```json
{
  "scripts": {
    "predeploy": "yarn build",
    "deploy": "gh-pages -d build"
  }
}
```

### Step 4: Deploy
```bash
yarn deploy
```

### Step 5: Enable GitHub Pages
1. Go to your repository on GitHub
2. Settings → Pages
3. Select `gh-pages` branch
4. Save!

Your site will be live at: `https://yourusername.github.io/your-repo-name`

---

## 📦 Available Icons

Icons are from [Lucide React](https://lucide.dev/icons). Common ones:
- Award, Brain, Target, Trophy
- Code2, Database, Cloud, GitBranch
- Mail, Phone, MapPin, Linkedin, Github
- Calendar, Clock, Briefcase
- And 1000+ more!

To use: Import and add to your data:
```javascript
icon: "IconName"  // e.g., "Award", "Code2", "Database"
```

---

## 🔧 Troubleshooting

### Changes not showing?
1. Save the file
2. Refresh browser (Ctrl+R or Cmd+R)
3. Clear cache (Ctrl+Shift+R or Cmd+Shift+R)

### Images not loading?
- Use direct image URLs (like Unsplash)
- Format: `https://images.unsplash.com/photo-xxxxx`

### Want to add a new section?
1. Create component in `src/components/`
2. Add data to `portfolioData.js`
3. Import and add to `App.js`

---

## 📚 Resources

- **Tailwind CSS Docs**: https://tailwindcss.com/docs
- **Lucide Icons**: https://lucide.dev/icons
- **React Docs**: https://react.dev
- **Unsplash (Free Images)**: https://unsplash.com

---

## ✨ Tips for Best Results

1. **Keep it concise**: Short, impactful descriptions work best
2. **Use high-quality images**: 1200px+ width recommended
3. **Update regularly**: Keep your experience and projects current
4. **Test on mobile**: Make sure it looks good on phones too
5. **Proofread**: Check for typos and grammar

---

## 🆘 Need Help?

If you need help:
1. Check the component files in `/app/frontend/src/components/`
2. Each component has clear structure and comments
3. Google: "React component example" or "Tailwind CSS [what you want]"

**Remember**: All content updates happen in `portfolioData.js` - that's your main file! 🎯
