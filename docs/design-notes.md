# Looma Design Notes

Looma is a curated sneakers and streetwear storefront focused on premium product discovery, clean ecommerce flows, and an editorial shopping experience.

## Product Direction

- Curated sneakers and streetwear storefront.
- Premium, minimal, editorial, and clean visual direction.
- Strong emphasis on product presentation, trustworthy details, and fast browsing.

## Stack

- Nuxt 4 with SSR and SEO-first rendering.
- Nuxt server API for backend-facing routes.
- Tailwind CSS for styling and design tokens.
- shadcn-vue for UI components.
- Pinia for client-side state.

## Architecture

External API -> Nuxt server -> normalization -> DB -> frontend.

The frontend should consume normalized application data rather than binding directly to external API response shapes.

## Design Source

`design.pen` is a local, ignored Pencil file used for design exploration and iteration. It is the working design source, not an application runtime dependency.

## UI Implementation

Build UI with shadcn-vue components and Tailwind tokens. Keep implementation aligned with the premium, minimal ecommerce direction while preserving accessibility, SSR compatibility, and SEO-friendly structure.
