import { useMDXComponents as getThemeComponents } from "nextra-theme-docs"; // nextra-theme-blog or your custom theme

// Get the default MDX components
const themeComponents = getThemeComponents();
const BaseLink = themeComponents.a ?? ((props) => <a {...props} />);

// Merge components and ensure all MDX links pick up the glide hover animation
export function useMDXComponents(components) {
  const customLink = components?.a;
  return {
    ...themeComponents,
    ...components,
    a: ({ className = "", ...props }) => {
      const LinkComponent = customLink ?? BaseLink;
      const combined = className
        ? `${className} glide-animation`
        : "glide-animation";
      return <LinkComponent {...props} className={combined} />;
    },
  };
}
