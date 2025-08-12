# CityGuard Deployment Guide

## Vercel Deployment Steps

### 1. Prerequisites
- Node.js 18+ installed
- Vercel CLI installed (`npm i -g vercel`)

### 2. Local Build Test
```bash
npm install
npm run build
npm run start
```

### 3. Deploy to Vercel

#### Option A: Using Vercel CLI
```bash
# Login to Vercel
vercel login

# Deploy
vercel --prod
```

#### Option B: Using GitHub Integration
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Vercel will auto-deploy on push

### 4. Environment Variables (if needed)
Add these in Vercel dashboard:
- `NODE_ENV=production`

### 5. Build Settings in Vercel
- **Framework Preset**: Next.js
- **Build Command**: `npm run build`
- **Output Directory**: `.next`
- **Install Command**: `npm install`

### 6. Troubleshooting 404 Errors

If you get 404 errors:

1. **Check Build Logs**: Look for build errors in Vercel dashboard
2. **Verify Routes**: Ensure all pages are in `app/` directory
3. **Clear Cache**: Redeploy with "Clear Cache" option
4. **Check Node Version**: Ensure Node.js 18+ is used

### 7. Available Routes
- `/` - Main Dashboard
- `/transparency` - Transparency Dashboard  
- `/mobile` - Mobile App Interface
- `/rural-protection` - Rural Land Protection

### 8. Common Issues
- **404 on all routes**: Check if `app/page.tsx` exists
- **Build fails**: Check TypeScript errors
- **Styling issues**: Ensure Tailwind CSS is configured

## Support
If issues persist, check Vercel build logs for specific error messages.
