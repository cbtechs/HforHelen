# 🚀 Deployment Guide for HforHelen Website

## Vercel Deployment (Recommended)

### Prerequisites
- GitHub repository with the code
- Vercel account (free tier available)
- Domain name (optional)

### Quick Deploy to Vercel

#### Option 1: One-Click Deploy
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/mohashyne/HforHelen)

#### Option 2: Manual Setup

1. **Connect Repository**
   - Go to [vercel.com](https://vercel.com)
   - Sign in with GitHub
   - Click "New Project"
   - Import `mohashyne/HforHelen` repository

2. **Configure Project**
   - Framework Preset: **Next.js**
   - Root Directory: `./` (default)
   - Build Command: `npm run build` (auto-detected)
   - Output Directory: `.next` (auto-detected)
   - Install Command: `npm install` (auto-detected)

3. **Environment Variables**
   Add these in Vercel dashboard:
   ```
   NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app
   NEXT_PUBLIC_SITE_NAME=The Structure Police - Helen
   NEXT_PUBLIC_CONTACT_EMAIL=info@samogaconsult.com
   NEXT_PUBLIC_WHATSAPP_NUMBER=2348036814141
   NEXT_PUBLIC_CALENDLY_URL=https://calendly.com/appointmentrequest/1hour?month=2023-03
   NEXT_PUBLIC_FACEBOOK_URL=https://www.facebook.com/h4helen
   NEXT_PUBLIC_INSTAGRAM_URL=https://instagram.com/H4orHelen
   ```

4. **Deploy**
   - Click "Deploy"
   - Wait for build to complete (~2-3 minutes)
   - Your site will be live at `https://your-project.vercel.app`

### Custom Domain Setup

1. **In Vercel Dashboard**
   - Go to your project
   - Click "Settings" → "Domains"
   - Add your custom domain

2. **DNS Configuration**
   - Add CNAME record: `www` → `cname.vercel-dns.com`
   - Add A record: `@` → `76.76.19.61`
   - Or follow Vercel's specific instructions for your domain provider

### Performance Optimizations

The project includes:
- ✅ **Image Optimization**: Next.js automatic image optimization
- ✅ **Code Splitting**: Automatic route-based code splitting
- ✅ **Static Generation**: Pre-rendered pages for better performance
- ✅ **Caching Headers**: Optimized cache control for assets
- ✅ **Compression**: Automatic gzip compression
- ✅ **SEO**: Sitemap, robots.txt, and meta tags

### Monitoring & Analytics

#### Built-in Vercel Analytics
- Automatically enabled for all deployments
- View in Vercel dashboard under "Analytics"

#### Google Analytics (Optional)
1. Create Google Analytics property
2. Add `NEXT_PUBLIC_GA_MEASUREMENT_ID` environment variable
3. Uncomment analytics code in layout.tsx

#### Performance Monitoring
- Vercel provides automatic performance insights
- Core Web Vitals tracking included
- Real User Monitoring available

## Alternative Deployment Options

### Netlify
1. Connect GitHub repository
2. Build command: `npm run build`
3. Publish directory: `.next`
4. Add environment variables

### Railway
1. Connect GitHub repository
2. Select Next.js template
3. Configure environment variables
4. Deploy

### Self-Hosted (VPS/Server)
1. Clone repository
2. Install dependencies: `npm install`
3. Build project: `npm run build`
4. Start production server: `npm start`
5. Use PM2 or similar for process management

## Environment Variables Reference

### Required
- `NEXT_PUBLIC_SITE_URL`: Your website URL
- `NEXT_PUBLIC_CONTACT_EMAIL`: Contact email address
- `NEXT_PUBLIC_WHATSAPP_NUMBER`: WhatsApp number for contact

### Optional
- `NEXT_PUBLIC_GA_MEASUREMENT_ID`: Google Analytics ID
- `NEXT_PUBLIC_HOTJAR_ID`: Hotjar tracking ID
- `NEXT_PUBLIC_GOOGLE_VERIFICATION`: Google Search Console verification

## Post-Deployment Checklist

- [ ] Website loads correctly
- [ ] All navigation links work
- [ ] Contact forms submit properly
- [ ] WhatsApp links open correctly
- [ ] Calendly booking works
- [ ] Mobile responsiveness verified
- [ ] SEO meta tags present
- [ ] Sitemap accessible at `/sitemap.xml`
- [ ] Robots.txt accessible at `/robots.txt`
- [ ] Performance score > 90 (check with PageSpeed Insights)

## Troubleshooting

### Build Failures
- Check Node.js version (18+ recommended)
- Verify all dependencies are installed
- Check for TypeScript errors
- Review build logs in Vercel dashboard

### Runtime Errors
- Check environment variables are set
- Verify external API endpoints are accessible
- Check browser console for JavaScript errors

### Performance Issues
- Enable Vercel Analytics
- Use Next.js Image component for images
- Implement lazy loading for heavy components
- Optimize bundle size with webpack-bundle-analyzer

## Support

- **Vercel Documentation**: https://vercel.com/docs
- **Next.js Documentation**: https://nextjs.org/docs
- **Project Repository**: https://github.com/mohashyne/HforHelen
