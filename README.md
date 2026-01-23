# cjwang.io

Personal academic website built with [Next.js](https://nextjs.org) and [Nextra](https://nextra.site).

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

- `src/content/` - MDX content files for pages
- `src/components/` - React components
- `public/` - Static assets (images, PDFs, etc.)
- `src/app/` - Next.js App Router pages and layouts

## Routing

### Static Files (PDFs, Images)

Static files in the `public/` directory (e.g., `/pdf/cv.pdf`) are handled specially:

- The catch-all route `[[...mdxPath]]` skips `/pdf/` paths to avoid routing conflicts

## Deploy on Vercel

The site is deployed on [Vercel](https://vercel.com). The deployment is automatic on push to the main branch.

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Nextra Documentation](https://nextra.site/docs)
