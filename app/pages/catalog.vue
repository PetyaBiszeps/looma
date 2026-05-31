<script setup lang="ts">
const catalogStore = useCatalogStore()

await callOnce('catalog-products', () => {
  return catalogStore.fetchProducts()
})
</script>

<template>
  <section class="mx-auto w-full max-w-360 px-4 py-10 sm:px-6 lg:px-16">
    <div class="mb-8">
      <p class="text-sm font-medium text-muted-foreground">
        Curated catalog
      </p>
      <h1 class="mt-2 text-3xl font-semibold tracking-tight text-foreground">
        Sneakers & streetwear
      </h1>
      <p class="mt-3 max-w-2xl text-sm text-muted-foreground">
        Explore selected sneakers, apparel, and accessories for the Looma demo storefront.
      </p>
    </div>

    <CatalogGrid :products="catalogStore.items" />
  </section>
</template>
