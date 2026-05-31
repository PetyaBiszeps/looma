<script setup lang="ts">
import type { Product } from '@/types'

defineProps<{
  products: Product[]
}>()
</script>

<template>
  <div>
    <ul
      v-if="products.length > 0"
      class="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 md:grid-cols-3 xl:grid-cols-4"
    >
      <li
        v-for="product in products"
        :key="product.id"
        class="min-w-0"
      >
        <ProductCard :product="product" />
      </li>
    </ul>

    <UiCard
      v-else
      class="items-center gap-3 rounded-lg border-border bg-card px-6 py-14 text-center text-card-foreground shadow-xs"
    >
      <p class="text-sm font-semibold">
        No products found
      </p>
      <p class="max-w-sm text-sm text-muted-foreground">
        Try adjusting your filters or check back for the next Looma drop.
      </p>
    </UiCard>
  </div>
</template>
