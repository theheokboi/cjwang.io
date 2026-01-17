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
npm run build
```
