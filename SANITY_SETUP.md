# SportsNest Sanity CMS Setup

This document explains how to set up and use the Sanity CMS for the SportsNest website.

## Initial Setup

### 1. Create a Sanity Account
1. Go to [sanity.io](https://sanity.io)
2. Create a free account
3. Create a new project called "SportsNest CMS"

### 2. Get Project Credentials
After creating your project, you'll get:
- **Project ID**: Found in your Sanity dashboard
- **Dataset**: Use "production"

### 3. Configure Environment Variables
Create a `.env.local` file in the root directory:

```bash
cp .env.local.example .env.local
```

Update the values:
```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your-actual-project-id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
```

### 4. Update Sanity Config
Edit `sanity.config.ts` and replace `your-project-id` with your actual project ID.

### 5. Deploy Sanity Studio
```bash
# Login to Sanity
npx sanity login

# Deploy the studio
npm run studio:deploy
```

Your CMS will be available at: `https://sportsnest.sanity.studio`

## Content Management

### Content Types Available

1. **Homepage** (`/structure/homepage`)
   - Hero section content
   - Statistics
   - About section
   - Founder quote

2. **Contact Information** (`/structure/contact`)
   - Company details
   - Contact information
   - Business hours
   - Page content

3. **About Us** (`/structure/about`)
   - Founder information
   - Company description
   - Mission and values

4. **Projects** (`/structure/project`)
   - Project gallery
   - Client information
   - Sport types
   - Images and descriptions

### How to Edit Content

1. Go to your Sanity Studio URL
2. Login with your Sanity account
3. Navigate to the content type you want to edit
4. Make your changes
5. Click "Publish"
6. Your website will automatically update!

## Development

### Local Development
```bash
# Run Next.js development server
npm run dev

# Run Sanity Studio locally (optional)
npm run studio
```

### Adding New Content Types
1. Create a new schema file in `sanity/schemas/`
2. Add it to the `schemaTypes` array in `sanity/schemas/index.ts`
3. Create corresponding queries in `lib/sanity.queries.ts`
4. Update your React components to fetch the new data

## Deployment

### Sanity Studio
```bash
npm run studio:deploy
```

### Website (Vercel)
The website will automatically rebuild when you publish content changes in Sanity.

## Troubleshooting

### Common Issues

1. **"Project not found" error**
   - Check your project ID in `.env.local`
   - Make sure you're using the correct dataset name

2. **Content not updating**
   - Clear your browser cache
   - Check if you clicked "Publish" in Sanity Studio

3. **Studio not loading**
   - Make sure you're logged in: `npx sanity login`
   - Check your internet connection

### Support
- [Sanity Documentation](https://www.sanity.io/docs)
- [Next.js + Sanity Guide](https://www.sanity.io/guides/nextjs-app-router-live-preview)

## CMS Access URL

Once deployed, your CMS will be accessible at:
**https://sportsnest.sanity.studio**

Login with your Sanity account to manage all website content!