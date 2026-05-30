# Looma Design Notes

`design.pen` is the local, ignored Pencil source for current Looma UI exploration. It uses the `shadcn: design system components` layer and should guide implementation, but it is not an app runtime dependency.

## Product Direction

- Curated sneakers and streetwear storefront.
- Premium product discovery with editorial merchandising and clean ecommerce flows.
- Desktop-first concepts with responsive-friendly structure for later Nuxt implementation.

## Tech Stack

- Nuxt 4 with Vue 3, SSR, and SEO-first rendering.
- Nuxt server API for backend-facing routes.
- Tailwind CSS v4 for styling and tokenized spacing/color/radius.
- shadcn-vue via `shadcn-nuxt` for UI primitives.
- Pinia for client-side catalog, cart, wishlist, and checkout shell state.

## Data Architecture

External API -> Nuxt server -> normalization -> DB -> frontend.

Frontend components should consume normalized Looma data models, not external API response shapes.

## Visual Direction

- Premium, minimal, editorial, and clean ecommerce.
- Warm neutral surfaces, restrained borders, subtle shadows, sharp hierarchy, and product-first imagery.
- Use shadcn-compatible primitives: cards, buttons, badges, inputs, radio-style options, accordions, alerts, and icon buttons.

## Designed Screens

- Homepage/catalog: editorial hero, header navigation, search, wishlist/cart actions, filter/sort bar, featured product grid, reusable product card states.
- Cart page: cart item list, quantity controls, remove actions, order summary, filled and empty cart states.
- Product detail page: product gallery, product info panel, sale state, size selector, metadata, add-to-cart/wishlist actions, accordions, related products.
- Wishlist page: saved product grid, item count, sort/filter controls, quick add/select-size actions, filled and empty wishlist states.
- Checkout shell: UI-only checkout structure with contact, shipping, delivery, payment placeholder, validation examples, order summary, and success-state concept.

## Reusable UI Components

- `AppHeader`: standard storefront header plus simplified checkout header variant.
- `ProductCard`: fixed visual rhythm with product image, brand, name, price, sale badge, wishlist/remove action, and consistent height.
- `ProductGrid`: responsive-friendly rows/grid using normalized product cards.
- `FilterBar` / `SortControl`: shadcn badge/button-based catalog controls.
- `ProductGallery`: primary image with thumbnail list and consistent aspect ratio.
- `SizeSelector`: available, selected, and unavailable size states.
- `CartItem`: thumbnail, product metadata, size, unit price, quantity control, remove action, subtotal.
- `OrderSummary`: compact item list, subtotal, shipping, promo row, total, primary CTA.
- Wishlist actions: remove saved item, select size, quick add.
- Checkout form sections: contact, shipping address, delivery method, payment placeholder.
- Empty states: cart and wishlist empty cards with catalog CTA.

## Product/Catalog Data Expectations

Product data implied by the designs:

- `id`
- `slug`
- `brand`
- `name`
- `description`
- `category`
- `colorway`
- `images`
- `price`
- `originalPrice`
- `currency`
- sale state
- sizes with availability
- SKU/style code
- release date/year
- source/import metadata

## State/Store Expectations

- Catalog/filter state: active category, filters, sort, search query, product list/loading state.
- Cart state: items, quantities, selected sizes, subtotals, shipping estimate, promo placeholder, total.
- Wishlist state: saved product IDs/items, remove action, quick-add/select-size state.
- Checkout form state: contact fields, address fields, delivery selection, validation errors, payment placeholder state, shell success state.

## shadcn-vue Implementation Notes

- Prefer shadcn-vue components before creating custom primitives.
- Map Pencil cards, buttons, badges, inputs, radio-style delivery options, accordions, alerts, and icon buttons to shadcn-vue equivalents.
- Keep Tailwind spacing/radius/border tokens aligned with the design rhythm: compact controls, 24-32px section gaps, subtle card borders, minimal shadows.
- Checkout remains a UI/UX shell only; do not add real payment provider fields or backend/payment scope from the design.
- Preserve SSR/SEO-friendly structure for catalog, product detail, and ecommerce content.
