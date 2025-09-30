# Deployment Guide - Mateusz Nikrant Website

This guide covers deploying the website to various platforms.

## ✅ Build Status

The project builds successfully and is ready for deployment!

```bash
npm run build  # ✅ Passing
```

---

## 🚀 Quick Deploy to Vercel (Recommended)

### Option 1: Deploy via Vercel Dashboard

1. **Push your code to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **Go to Vercel**
   - Visit https://vercel.com
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js settings
   - Click "Deploy"

### Option 2: Deploy via Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Follow the prompts and deploy to production
vercel --prod
```

---

## 🌐 Deploy to Netlify

1. **Push code to GitHub** (same as above)

2. **Go to Netlify**
   - Visit https://netlify.com
   - Click "Add new site" → "Import an existing project"
   - Connect to GitHub and select your repository

3. **Build Settings**
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Set Node version to 18+ in environment variables

4. **Environment Variables**
   ```
   NEXT_PUBLIC_SUPABASE_URL=https://0ec90b57d6e95fcbda19832f.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJib2x0IiwicmVmIjoiMGVjOTBiNTdkNmU5NWZjYmRhMTk4MzJmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTg4ODE1NzQsImV4cCI6MTc1ODg4MTU3NH0.9I8-U0x86Ak8t2DGaIk0HfvTSLsAyzdnz-Nw00mMkKw
   ```

5. Click "Deploy"

---

## 🔧 Environment Variables

The following environment variables are already configured in `.env`:

```env
NEXT_PUBLIC_SUPABASE_URL=https://0ec90b57d6e95fcbda19832f.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

### Optional: Notion Blog Integration

If you want to use Notion for blog management (instead of mock data), add:

```env
NOTION_API_KEY=secret_your_notion_key
NOTION_DATABASE_ID=your_database_id
```

See `NOTION_SETUP.md` for detailed instructions.

---

## 📦 What Gets Deployed

- ✅ Homepage with hero, services, blog preview
- ✅ About page (O Mnie)
- ✅ Services page (Oferta) with pricing
- ✅ Blog listing with category filters
- ✅ Individual blog posts with markdown rendering
- ✅ YouTube videos page
- ✅ Contact page with form
- ✅ Fully responsive mobile design
- ✅ Red & grey athletic theme
- ✅ Smooth animations
- ✅ SEO optimized

---

## 🎨 Features Ready for Production

### Design
- ✅ Athletic red (#DC2626) and grey color scheme
- ✅ Dark theme with high contrast
- ✅ Fully responsive (mobile-first)
- ✅ Smooth Framer Motion animations
- ✅ Professional Pexels imagery

### Functionality
- ✅ Sticky navigation with mobile menu
- ✅ Blog with category filtering (mock data included)
- ✅ Notion API integration (optional)
- ✅ Contact form with validation
- ✅ YouTube video embeds
- ✅ SEO meta tags

### Technical
- ✅ Next.js 13 App Router
- ✅ TypeScript
- ✅ Tailwind CSS
- ✅ Server-side rendering (SSR) where needed
- ✅ Static generation for performance
- ✅ Optimized images

---

## 🔍 Testing Before Deploy

Test locally:
```bash
# Development
npm run dev

# Production build
npm run build
npm run start
```

Visit `http://localhost:3000` to verify all pages work.

---

## ⚙️ Custom Domain Setup

### Vercel
1. Go to Project Settings → Domains
2. Add your custom domain
3. Follow DNS configuration instructions

### Netlify
1. Go to Site Settings → Domain Management
2. Add custom domain
3. Configure DNS as instructed

---

## 📝 Post-Deployment Checklist

- [ ] Test all pages on mobile devices
- [ ] Verify contact form works
- [ ] Check all images load correctly
- [ ] Test blog category filters
- [ ] Verify YouTube videos play
- [ ] Check SEO meta tags (view source)
- [ ] Test navigation on all screen sizes
- [ ] Update social media links in Footer
- [ ] Configure Notion (if desired)
- [ ] Add Google Analytics (optional)

---

## 🆘 Troubleshooting

### Build fails with "Module not found"
```bash
rm -rf node_modules .next
npm install
npm run build
```

### Images not loading
- Ensure `images.pexels.com` is in `next.config.js` remotePatterns
- Check image URLs are valid

### API routes not working
- Make sure you're NOT using `output: 'export'` in `next.config.js`
- API routes require server-side rendering

### Contact form not submitting
- Currently configured as demo (console.log)
- Add backend integration for production use

---

## 📧 Support

For issues:
1. Check build logs in Vercel/Netlify dashboard
2. Review browser console for errors
3. Verify environment variables are set

---

## 🎉 You're Ready to Deploy!

Your website is production-ready with:
- Modern design
- Smooth performance
- Mobile responsiveness
- SEO optimization
- Red & grey athletic branding

Simply push to GitHub and connect to Vercel or Netlify!