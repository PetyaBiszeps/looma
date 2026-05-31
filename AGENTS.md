# Looma Project Rules

## Product Direction
- Looma is a curated sneakers and streetwear storefront.
- Use `docs/design-notes.md` as the source for product and design direction.

## Stack
- Nuxt 4 with Vue 3, SSR, and SEO-first rendering.
- Nuxt server API for backend-facing routes.
- Tailwind CSS v4 for styling and tokens.
- shadcn-vue via `shadcn-nuxt` for UI components.
- Pinia for client-side state.
- Package manager: pnpm.

## Architecture
- Target data flow: External API → Nuxt server → normalization → DB → frontend.
- Frontend code should consume normalized app data instead of external API response shapes.
- Do not introduce backend services outside Nuxt server unless explicitly requested.

## Working Rules
- Keep tasks small, focused, and token-efficient.
- Use shadcn-vue primitives for visible base UI controls.
- Use UiSelect for value selection, UiDropdownMenu for action menus.
- Avoid native select/button/input in app UI unless intentionally needed.
- Prefer shadcn-vue components and Tailwind tokens for UI work.
- Do not modify `design.pen`; it is local design exploration only.
- Do not add dependencies without explaining why.
- Do not implement app features unless explicitly requested.

## Project Structure
- `app/app.vue`: root app shell.
- `app/layouts/default.vue`: default layout.
- `app/pages/index.vue`: main page.
- `app/error.vue`: error page.
- `app/assets/css/main.css`: Tailwind entry.
- `app/components/ui/`: shadcn-vue component location.
- `public/`: static assets.
- `server/`: Nuxt server API location when backend-facing routes are added.

## Scripts
- `pnpm dev`: Nuxt dev server.
- `pnpm build`: production build.
- `pnpm generate`: static generation.
- `pnpm preview`: preview build.
- `pnpm lint`: ESLint.
- `pnpm lint:fix`: ESLint auto-fix.

## Configuration Notes
- Nuxt modules are configured in `nuxt.config.ts`.
- i18n uses `restructureDir: 'app/'` and `strategy: 'no_prefix'`.
- Icon collection uses `app/assets/svgs` with the `local` prefix.
