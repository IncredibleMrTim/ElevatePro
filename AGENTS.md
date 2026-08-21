# ElevatePro Surveys

Next.js (App Router) + Tailwind CSS v4 marketing site for ElevatePro Surveys, a UK aerial drone survey company. Migrated from a Figma Make Vite scaffold — no Figma Make integration remains.

## Development Server

Not running automatically. Start it with `pnpm dev` (Next.js on `http://localhost:3000` by default).

## Project Structure

This is the canonical project structure. Start with task-relevant files below. Only follow imports or inspect other files when required, when a documented path is missing, or when the repository contradicts this guide.

- `src/app/layout.tsx` - Root layout; loads fonts via `next/font/google`, sets metadata, wraps every page in `Nav` and `Footer`
- `src/app/page.tsx` - Home page (`/`)
- `src/app/services/page.tsx`, `compliance/page.tsx`, `sectors/page.tsx`, `gallery/page.tsx`, `contact/page.tsx` - one route each, matching the top-level nav
- `src/app/globals.css` - Tailwind v4 import, `@theme` color/font/text-size tokens, and small custom utilities (`.bg-grid-pattern`, `.max-h-lightbox`) for effects that don't fit a first-class Tailwind utility
- `src/components/Nav.tsx` - Client component (scroll state, mobile menu, active-route highlighting via `usePathname`)
- `src/components/Footer.tsx` - Server component
- `src/imports/*.jpeg` - Static image assets, imported directly and rendered via `next/image`
- `next.config.ts` - Next.js configuration (currently defaults)
- `package.json` - Project dependencies and scripts (`dev`, `build`, `start`, `lint`, `format`)
- `.mise.toml` - Toolchain versions for Node.js and pnpm

## Dependencies

- Runtime: Next.js 16, React 19, React DOM 19
- Styling: Tailwind CSS v4 via `@tailwindcss/postcss`
- Formatting: oxfmt
- Linting: ESLint 9 with `eslint-config-next`

## Styling

This project uses **Tailwind CSS v4** through the `@tailwindcss/postcss` PostCSS plugin (see `postcss.config.mjs`). `src/app/globals.css` imports Tailwind with `@import "tailwindcss";` and defines all design tokens (colors, fonts, custom text sizes) in an `@theme` block. There is no `tailwind.config.js` — theme customization lives entirely in CSS.

**Do not use Tailwind arbitrary-value syntax** (e.g. `p-[24px]`, `min-w-[160px]`, `text-[15px]`). Always use predefined scale utilities (`p-6`, `min-w-40`, `text-sm`) or, for values with no scale equivalent (fluid clamp() type sizes, decorative gradients, glow effects), add a named token to the `@theme` block in `globals.css` and reference it via a generated utility class (e.g. `text-hero`, `drop-shadow-glow`) — never inline the raw value in a component.

Fonts (Barlow, Barlow Condensed, Space Mono) are loaded once in `src/app/layout.tsx` via `next/font/google` and exposed as CSS variables (`--font-barlow`, etc.), which `globals.css` maps to the `font-sans`, `font-display`, and `font-mono-label` Tailwind utilities.

## Code quality

- Use double quotes for strings containing apostrophes (`"We're here to help"`), or escape them in single-quoted strings. An unescaped apostrophe in a single-quoted string breaks the build.
- Ensure JSX tags are closed and braces are balanced.
- Export page and layout components as default exports (required by Next.js); shared components use named exports.
- Client components (state, effects, browser APIs, `next/navigation` hooks) need `"use client"` at the top of the file; everything else should stay a Server Component.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
