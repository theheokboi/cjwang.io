import { generateStaticParamsFor, importPage } from 'nextra/pages';
import { useMDXComponents as getMDXComponents } from '../../../mdx-components';
import type { NextraPageResult } from '@/types/nextra';
import type { Metadata } from 'next';
import type { ComponentType } from 'react';

export const generateStaticParams = generateStaticParamsFor('mdxPath');

interface GenerateMetadataProps {
  params: Promise<{ mdxPath?: string[] }>;
}

export async function generateMetadata(
  props: GenerateMetadataProps
): Promise<Metadata> {
  const params = await props.params;
  // Skip Vercel internal routes, static file paths, and other non-MDX routes
  if (params.mdxPath && (params.mdxPath[0] === '_vercel' || params.mdxPath[0] === 'pdf')) {
    return {};
  }
  try {
    const { metadata } = await importPage(params.mdxPath);
    return metadata;
  } catch (error) {
    // Return empty metadata for routes that can't be loaded
    return {};
  }
}

interface WrapperProps {
  toc: NextraPageResult['toc'];
  metadata: NextraPageResult['metadata'];
  sourceCode?: string;
  children: React.ReactNode;
}

const components = getMDXComponents();
const Wrapper = (components.wrapper ?? (({ children }: WrapperProps) => <>{children}</>)) as ComponentType<WrapperProps>;

interface PageProps {
  params: Promise<{ mdxPath?: string[] }>;
}

export default async function Page(props: PageProps) {
  const params = await props.params;
  // Skip Vercel internal routes, static file paths, and other non-MDX routes
  if (params.mdxPath && (params.mdxPath[0] === '_vercel' || params.mdxPath[0] === 'pdf')) {
    return null;
  }
  try {
    const pageResult: NextraPageResult = await importPage(params.mdxPath);
    const { default: MDXContent, toc, metadata, sourceCode } = pageResult;
    return (
      <Wrapper toc={toc} metadata={metadata} sourceCode={sourceCode}>
        <MDXContent {...props} params={params} />
      </Wrapper>
    );
  } catch (error) {
    console.error('Error loading page:', error);
    throw error;
  }
}
