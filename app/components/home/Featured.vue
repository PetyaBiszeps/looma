<script setup lang="ts">
import type { Product } from '@/types'

defineProps<{
  products: Product[]
}>()

const filterLinks = [{
  label: 'All',
  to: '/catalog',
  variant: 'default'
}, {
  label: 'Sneakers',
  to: { path: '/catalog', query: { category: 'sneakers' } },
  variant: 'outline'
}, {
  label: 'Apparel',
  to: { path: '/catalog', query: { category: 'streetwear' } },
  variant: 'outline'
}, {
  label: 'Accessories',
  to: { path: '/catalog', query: { category: 'accessories' } },
  variant: 'outline'
}, {
  label: 'Under $200',
  to: { path: '/catalog', query: { sort: 'price-asc' } },
  variant: 'outline'
}] as const
</script>

<template>
  <section class="mx-auto w-full max-w-screen-2xl px-6 pb-16 pt-6 lg:px-8 lg:pb-20 xl:px-12">
    <div class="mb-7 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
      <div class="space-y-2">
        <p class="text-xs font-bold tracking-[0.15em] text-muted-foreground uppercase">
          Featured edit
        </p>

        <h2 class="text-3xl font-bold tracking-tight text-foreground sm:text-[38px]">
          Built for sharp rotations.
        </h2>
      </div>

      <p class="text-sm text-muted-foreground">
        {{ products.length }} curated pieces
      </p>
    </div>

    <div class="mb-7 flex min-h-16 flex-col gap-4 border-y border-border py-3 md:flex-row md:items-center md:justify-between">
      <div class="flex flex-wrap items-center gap-2.5">
        <UiBadge
          v-for="link in filterLinks"
          :key="link.label"
          as-child
          :variant="link.variant"
          class="rounded-full px-3 py-1 text-xs font-semibold"
        >
          <NuxtLink :to="link.to">
            {{ link.label }}
          </NuxtLink>
        </UiBadge>
      </div>

      <UiButton
        as-child
        variant="outline"
        class="w-fit bg-card"
      >
        <NuxtLink :to="{ path: '/catalog', query: { sort: 'newest' } }">
          Sort: Newest
          <Icon
            name="lucide:chevron-down"
            class="h-4 w-4"
            aria-hidden="true"
          />
        </NuxtLink>
      </UiButton>
    </div>

    <CatalogGrid :products="products" />
  </section>
</template>
