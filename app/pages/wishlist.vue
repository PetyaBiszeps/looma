<script setup lang="ts">
import type { Product, WishlistItem } from '@/types'

const wishlistStore = useWishlistStore()

const wishlistProducts = computed<Product[]>(() => wishlistStore.items.map(createWishlistProduct))

useSeoMeta({
  title: 'Wishlist | Looma',
  description: 'Review your saved Looma sneakers and streetwear.'
})

function createWishlistProduct(item: WishlistItem): Product {
  return {
    id: item.productId,
    slug: item.slug,
    brand: item.brand,
    name: item.name,
    description: '',
    category: 'sneakers',
    colorway: '',
    images: item.image ? [item.image] : [],
    price: item.price,
    saleState: 'regular',
    sizes: item.selectedSize ? [item.selectedSize] : []
  }
}
</script>

<template>
  <section class="mx-auto w-full max-w-360 px-4 py-10 sm:px-6 lg:px-16">
    <div class="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
      <div class="max-w-2xl space-y-3">
        <p class="text-sm font-medium tracking-[0.18em] text-muted-foreground uppercase">
          Saved Pieces
        </p>
        <h1 class="text-4xl font-semibold tracking-tight text-foreground">
          Wishlist
        </h1>
        <p class="text-base leading-7 text-muted-foreground">
          Keep track of the Looma sneakers and streetwear you want to revisit.
        </p>
      </div>

      <p class="text-sm font-medium text-muted-foreground">
        {{ wishlistStore.itemCount }} saved item{{ wishlistStore.itemCount === 1 ? '' : 's' }}
      </p>
    </div>

    <CatalogGrid
      v-if="!wishlistStore.isEmpty"
      :products="wishlistProducts"
    />

    <UiCard
      v-else
      class="items-center gap-4 rounded-lg border-border bg-card px-6 py-14 text-center text-card-foreground shadow-xs"
    >
      <Icon
        name="lucide:heart"
        class="h-8 w-8 text-muted-foreground"
        aria-hidden="true"
      />
      <div class="max-w-md space-y-2">
        <h2 class="text-2xl font-semibold tracking-tight text-foreground">
          Your wishlist is empty
        </h2>
        <p class="text-sm leading-6 text-muted-foreground">
          Save products from the catalog or product detail pages and they will appear here.
        </p>
      </div>
      <UiButton as-child>
        <NuxtLink to="/catalog">
          Back to catalog
          <Icon
            name="lucide:arrow-right"
            class="h-4 w-4"
            aria-hidden="true"
          />
        </NuxtLink>
      </UiButton>
    </UiCard>
  </section>
</template>
