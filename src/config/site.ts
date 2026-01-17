export interface SiteConfig {
  name: string;
  title: string;
  description: string;
  url: string;
  author: {
    name: string;
    email: string;
  };
  social: {
    linkedin: string;
    github: string;
  };
  banner: {
    storageKey: string;
    defaultMessage: string;
  };
  theme: {
    defaultTheme: 'system' | 'light' | 'dark';
    themes: ('light' | 'dark' | 'system')[];
  };
  repository: {
    base: string;
  };
}

export const siteConfig: SiteConfig = {
  name: 'Caleb J. Wang',
  title: 'Caleb J. Wang',
  description:
    'Ph.D. student at Northwestern University researching Internet Measurement, network Infrastructure, and Internet Resilience.',
  url: 'https://cjwang.io',
  author: {
    name: 'Caleb J. Wang',
    email: 'caleb.wang@northwestern.edu',
  },
  social: {
    linkedin: 'https://www.linkedin.com/in/hyes92121/',
    github: 'https://github.com/theheokboi',
  },
  banner: {
    storageKey: 'cjwang-site-banner',
    defaultMessage: 'New site is up 🎉',
  },
  theme: {
    defaultTheme: 'system',
    themes: ['light', 'dark', 'system'],
  },
  repository: {
    base: 'https://github.com/theheokboi/cjwang.io',
  },
} as const;
