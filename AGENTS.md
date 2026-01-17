# Agent Verification Guide

Minimal verification steps for code changes. Run in order, stop on failure.

## Standard Verification (All Changes)

### 1. Lint Changed Files
```bash
npx eslint <changed-files>
```
**Time**: ~2-5s | **Catches**: Syntax errors, unused imports, style issues

### 2. Type Check Changed Files
```bash
npx tsc --noEmit <changed-files>
```
**Time**: ~3-8s | **Catches**: Type errors, interface mismatches

### 3. Build Project

**IMPORTANT**: Check if dev server is running first:
```bash
ps aux | grep -E "next dev" | grep -v grep
```

**Default behavior**: If dev server is running, skip build check (dev server already validates changes).

**Alternative**: If you need to run build while dev server is running:
1. Stop dev server: `pkill -f "next dev"`
2. Run build: `npm run build`
3. Restart dev server: `npm run dev`

If dev server is NOT running:
```bash
npm run build
```
**Time**: ~10-30s | **Catches**: Runtime errors, Next.js config issues, build failures

**Stop here if any step fails.**

---

## Change-Specific Checks

### Component Changes
- Verify affected routes appear in build output
- Check for missing imports/exports

### Image/Asset Changes
- Verify paths start with `/` for public assets
- Ensure `width` and `height` props for Next.js `Image`

### Config Changes (`next.config.mjs`, `tsconfig.json`)
- Run full type check: `npx tsc --noEmit`
- Verify build succeeds (critical)

### Type Definition Changes
- Run full type check: `npx tsc --noEmit`
- Verify all affected files compile

---

## Quick Reference

**Minimum for every change:**
1. Lint changed files
2. Type check changed files  
3. Build project

**Total time**: ~15-45 seconds

**Parallel execution** (optional):
```bash
npx eslint <files> & npx tsc --noEmit <files> & wait
# Only run build if dev server is not running
ps aux | grep -E "next dev" | grep -v grep || npm run build
```

---

## Dev Server Issues

### 500 Error After Build

**Problem**: Running `npm run build` while the dev server (`npm run dev`) is running causes a 500 error with React version mismatch.

**Cause**: Production build artifacts in `.next` conflict with dev server's development React version.

**Solution**: 
1. Stop the dev server: `pkill -f "next dev"` or `Ctrl+C`
2. Clear build artifacts: `rm -rf .next`
3. Restart dev server: `npm run dev`

**Prevention**: 
- Don't run `npm run build` while dev server is running, OR
- Always restart dev server after running `npm run build`

---

## Styling Guide

### Alignment Patterns

**Vertical Alignment in Flex Containers**
- Use `items-center` (not `items-start`) for vertical centering
- Applies to: news items, publication badges, experience logos

**Avoid Misalignment Causes**
- Don't use `mt-0.5` or similar small top margins on aligned elements
- Don't use `align-middle` in flex contexts (only works in tables)
- Use `items-center` for consistent vertical alignment

### Component Patterns

**NewsItem Component**
```tsx
<article className="news-item">  // flex items-center
  <time className="news-badge">  // No mt-0.5
  <div className="basis-3/4 text-left">  // No align-middle
```

**PublicationEntry Component**
```tsx
<div className="flex items-center">  // Not items-start, no mt-0.5
  <ConferenceBadge />
</div>
```

**ExperienceCard Component**
```css
.experience-logo {
  @apply flex items-center justify-center;  // items-center, not items-start
}
```

### Steps Component Spacing

First items in Steps need top margin to prevent offset:
```css
.steps > .news-item:first-child,
.steps > .publication-entry:first-child,
.steps > .experience-card:first-child {
  @apply mt-2;
}
```

Apply this pattern to any new component used within Steps.

### Best Practices

1. **Vertical alignment**: Use `items-center` in flex containers for badge/text/logo alignment
2. **First-item spacing**: Add `mt-2` to first children in Steps components
3. **Avoid offsets**: Don't add small margins (`mt-0.5`) to aligned elements
4. **Flex context**: Don't use table-specific classes like `align-middle` in flex containers
5. **Consistency**: Use the same alignment patterns across similar components

### Verification Checklist

When adding new timeline/list components:
- [ ] Use `items-center` for vertical alignment
- [ ] No small top margins on aligned elements
- [ ] First item has proper spacing from heading
- [ ] Badges/logos align with first line of text content
- [ ] Dark mode variants are defined
