import { Footer, Layout, Navbar } from 'nextra-theme-docs';
import { Banner, Head } from 'nextra/components';
import { getPageMap } from 'nextra/page-map';
import './globals.css';
import 'nextra-theme-docs/style.css';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Logo } from '@/components/Logo';
import { siteConfig } from '@/config/site';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import type { NextraPageMapItem } from '@/types/nextra';

export const metadata: Metadata = {
  title: {
    default: 'Caleb J. Wang',
    template: '%s | Caleb J. Wang',
  },
  description:
    'Ph.D. student at Northwestern University researching Internet Measurement, network Infrastructure, and Internet Resilience. Working with Prof. Fabián E. Bustamante at AquaLab.',
  keywords: [
    'Caleb J. Wang',
    'Northwestern University',
    'Computer Science',
    'Internet Measurement',
    'Network Infrastructure',
    'Internet Resilience',
    'AquaLab',
    'Research',
    'PhD',
  ],
  authors: [{ name: 'Caleb J. Wang' }],
  creator: 'Caleb J. Wang',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://cjwang.io',
    siteName: 'Caleb J. Wang',
    title: 'Caleb J. Wang',
    description:
      'Ph.D. student at Northwestern University researching Internet Measurement, network Infrastructure, and Internet Resilience.',
    images: [
      {
        url: '/me/headshot.jpg',
        width: 128,
        height: 128,
        alt: 'Caleb J. Wang',
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: 'Caleb J. Wang',
    description:
      'Ph.D. student at Northwestern University researching Internet Measurement, network Infrastructure, and Internet Resilience.',
    images: ['/me/headshot.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add verification codes if needed
  },
};

const banner = (
  <Banner storageKey={siteConfig.banner.storageKey}>
    {siteConfig.banner.defaultMessage}
  </Banner>
);
const navbar = <Navbar logo={<Logo />} />;
const footer = (
  <Footer>MIT {new Date().getFullYear()} © caleb j. wang</Footer>
);

interface RootLayoutProps {
  children: ReactNode;
}

export default async function RootLayout({ children }: RootLayoutProps) {
  let pageMap: NextraPageMapItem[] = [];
  try {
    pageMap = await getPageMap();
  } catch (error) {
    console.error('Error loading page map:', error);
    pageMap = [];
  }

  return (
    <html
      // Not required, but good for SEO
      lang="en"
      // Required to be set
      dir="ltr"
      // Suggested by `next-themes` package https://github.com/pacocoursey/next-themes#with-app
      suppressHydrationWarning
    >
      <Head
      // ... Your additional head options
      >
        {/* Your additional tags should be passed as `children` of `<Head>` element */}
      </Head>
      <body>
        <Layout
          banner={banner}
          navbar={navbar}
          pageMap={pageMap}
          docsRepositoryBase={siteConfig.repository.base}
          footer={footer}
          // ... Your additional layout options
        >
          {children}
          <SpeedInsights />
        </Layout>
      </body>
    </html>
  );
}
