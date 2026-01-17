export interface MetaPage {
  title: string;
  type: 'page' | 'menu';
}

export interface MetaConfig {
  [key: string]: MetaPage;
}

const meta: MetaConfig = {
  index: {
    title: 'about',
    type: 'page',
  },
  publication: {
    title: 'publications',
    type: 'page',
  },
  experience: {
    title: 'experience',
    type: 'page',
  },
  contact: {
    title: 'contact',
    type: 'page',
  },
} as const;

export default meta;
