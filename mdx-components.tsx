import { useMDXComponents as getThemeComponents } from 'nextra-theme-docs';
import type { MDXComponents } from 'mdx/types';
import type { ComponentProps } from 'react';

// Get the default MDX components
const themeComponents = getThemeComponents();
const BaseLink = themeComponents.a ?? ((props: ComponentProps<'a'>) => <a {...props} />);

// Merge components and ensure all MDX links pick up the glide hover animation
export function useMDXComponents(components?: MDXComponents): MDXComponents {
  const customLink = components?.a;
  return {
    ...themeComponents,
    ...components,
    a: ({ className = '', href, ...props }: ComponentProps<'a'>) => {
      const LinkComponent = customLink ?? BaseLink;
      const combined = className
        ? `${className} glide-animation`
        : 'glide-animation';
      
      // Open CV PDF link in a new tab
      if (href === '/pdf/cv.pdf') {
        return (
          <LinkComponent
            {...props}
            href={href}
            className={combined}
            target="_blank"
            rel="noopener noreferrer"
          />
        );
      }
      
      return <LinkComponent {...props} href={href} className={combined} />;
    },
  };
}
