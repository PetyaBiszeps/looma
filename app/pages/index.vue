<script setup lang="ts">
const catalogStore = useCatalogStore()

await callOnce('catalog-products', () => {
  return catalogStore.fetchProducts()
})
</script>

<template>
  <div>
    <HomeHero />

    <HomeFeatured :products="catalogStore.featuredProducts" />
  </div>
</template>
