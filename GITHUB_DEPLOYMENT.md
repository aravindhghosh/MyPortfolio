# 🚀 Deploy Your Portfolio to GitHub Pages

## Quick Deployment Guide

### Step 1: Prepare Your Repository

1. Create a new repository on GitHub (e.g., `my-portfolio`)
2. Initialize git in your frontend folder:
   ```bash
   cd path/to/your/portfolio
   git init
   git add .
   git commit -m "Initial portfolio commit"
   ```

### Step 2: Update package.json

Add this line to your `package.json` (replace with your username/repo):
```json
{
  "homepage": "https://your-username.github.io/your-repo-name",
}
```

### Step 3: Install gh-pages

```bash
yarn add gh-pages
```

### Step 4: Add Deploy Scripts

Add these scripts to your `package.json`:
```json
{
  "scripts": {
    "predeploy": "yarn build",
    "deploy": "gh-pages -d build",
    "start": "craco start",
    "build": "craco build",
    "test": "craco test"
  }
}
```

### Step 5: Connect to GitHub

```bash
git remote add origin https://github.com/your-username/your-repo-name.git
git branch -M main
git push -u origin main
```

### Step 6: Deploy!

```bash
yarn deploy
```

This will:
1. Build your production site
2. Create a `gh-pages` branch
3. Push the build to GitHub
4. Your site will be live in 1-2 minutes!

### Step 7: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings**
3. Scroll to **Pages** (left sidebar)
4. Under **Source**, select **gh-pages** branch
5. Click **Save**

Your portfolio will be live at: `https://your-username.github.io/your-repo-name`

---

## 📝 Updating Your Portfolio

### After Making Changes:

```bash
cd path/to/your/portfolio
git add .
git commit -m "Update portfolio content"
git push origin main
yarn deploy
```

---

## 🎨 Custom Domain (Optional)

Want to use a custom domain like `yourname.com`?

1. Add a `CNAME` file in `public/` with your domain:
   ```
   yourname.com
   ```

2. In your domain registrar (Namecheap, GoDaddy, etc.), add these DNS records:
   ```
   Type: A
   Host: @
   Value: 185.199.108.153
   
   Type: A
   Host: @
   Value: 185.199.109.153
   
   Type: A
   Host: @
   Value: 185.199.110.153
   
   Type: A
   Host: @
   Value: 185.199.111.153
   
   Type: CNAME
   Host: www
   Value: your-username.github.io
   ```

3. In GitHub Settings → Pages, add your custom domain
4. Enable "Enforce HTTPS"

---

## 🔧 Troubleshooting

### Blank Page After Deployment?

Add this to `package.json`:
```json
{
  "homepage": "."
}
```

Then rebuild and deploy:
```bash
yarn deploy
```

### Images Not Loading?

- Use absolute URLs for images
- Check that all paths start with `/` or `https://`

### 404 Errors?

- GitHub Pages only supports the homepage by default
- This portfolio is a single-page app, so it works perfectly!

---

## ✅ Checklist Before Deployment

- [ ] Updated all content in `portfolioData.js`
- [ ] Replaced placeholder images with your own
- [ ] Updated GitHub and LinkedIn URLs
- [ ] Added your actual email and phone
- [ ] Added `.env` EmailJS keys (if using contact form email)
- [ ] Tested locally (`yarn start`)
- [ ] Added `homepage` to `package.json`
- [ ] Committed all changes to git
- [ ] Ran `yarn deploy`

---

## 🎯 Next Steps

1. **Share your portfolio**: LinkedIn, Twitter, Email signature
2. **Keep it updated**: Add new projects and experiences regularly
3. **Monitor analytics**: Add Google Analytics to track visitors
4. **SEO optimization**: Add meta tags for better search visibility

---

## 📚 Additional Resources

- **GitHub Pages Docs**: https://pages.github.com
- **Custom Domain Setup**: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site
- **React Deployment**: https://create-react-app.dev/docs/deployment

---

**Need Help?** Check the main `README_PORTFOLIO.md` for content editing instructions!
