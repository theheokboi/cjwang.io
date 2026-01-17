import type { Metadata } from 'next';
import type { ComponentType } from 'react';

/**
 * Nextra page metadata structure
 */
export interface NextraPageMetadata extends Metadata {
  title?: string;
  description?: string;
  [key: string]: unknown;
}

/**
 * Table of contents item from Nextra
 */
export interface NextraTOCItem {
  id: string;
  depth: number;
  title: string;
}

/**
 * Result of importing a Nextra page
 */
export interface NextraPageResult {
  default: ComponentType<Record<string, unknown>>;
  toc: NextraTOCItem[];
  metadata: NextraPageMetadata;
  sourceCode?: string;
}

/**
 * Page map item structure from Nextra
 */
export interface NextraPageMapItem {
  name: string;
  route: string;
  children?: NextraPageMapItem[];
  frontMatter?: Record<string, unknown>;
}

declare module 'nextra/pages' {
  /**
   * Generate static params for MDX pages
   */
  export function generateStaticParamsFor(
    paramName: string
  ): () => Promise<Array<{ [key: string]: string | string[] }>>;

  /**
   * Import a Nextra page by path
   */
  export function importPage(
    path?: string[]
  ): Promise<NextraPageResult>;
}

declare module 'nextra/page-map' {
  /**
   * Get the page map for navigation
   */
  export function getPageMap(): Promise<NextraPageMapItem[]>;
}
