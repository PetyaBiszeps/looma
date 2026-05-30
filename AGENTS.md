# Project Context

## Summary
- Nuxt 4 application using Vue 3.
- Shadcn component library used.
- Template/boilerplate repository used to create new projects.
- App source lives in `app/` (Nuxt app directory).
- Tailwind CSS v4 for styling.

## Tech Stack
- Framework: Nuxt 4
- UI: Vue 3, Vue Router 5, Shadcn
- Styling: Tailwind CSS v4
- State: Pinia (`@pinia/nuxt`)
- i18n: `@nuxtjs/i18n`
- Themes: `@nuxtjs/color-mode`
- Media: `@nuxt/image`, `@nuxt/icon`, `@nuxt/fonts`
- Tooling: ESLint (`@nuxt/eslint`), TypeScript
- Package manager: pnpm

## Project Structure
- `app/app.vue`: root app shell
- `app/layouts/default.vue`: default layout
- `app/pages/index.vue`: main page
- `app/error.vue`: error page
- `app/assets/css/main.css`: Tailwind entry
- `public/`: static assets

## Scripts
- `dev`: Nuxt dev server
- `build`: production build
- `generate`: static generation
- `preview`: preview build
- `lint`: ESLint
- `lint:fix`: ESLint auto-fix

## Configuration Notes
- Nuxt modules configured in `nuxt.config.ts`.
- i18n uses `restructureDir: 'app/'` and `strategy: 'no_prefix'`.
- Icon collection uses `app/assets/svgs` with `local` prefix.

## Environments
- Example env file: `.env.example` with `VITE_APP_API_URL`, `VITE_APP_WS_URL`.
