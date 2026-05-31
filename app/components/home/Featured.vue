<script setup lang="ts">
import type { Product } from '@/types'

defineProps<{
  products: Product[]
}>()

const filterChips = ['All', 'Sneakers', 'Apparel', 'Accessories', 'Under $200']
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
          v-for="chip in filterChips"
          :key="chip"
          :variant="chip === 'All' ? 'default' : 'outline'"
          class="rounded-full px-3 py-1 text-xs font-semibold"
        >
          {{ chip }}
        </UiBadge>
      </div>

      <UiButton
        type="button"
        variant="outline"
        class="w-fit bg-card"
        aria-disabled="true"
      >
        Sort: Newest
        <Icon
          name="lucide:chevron-down"
          class="h-4 w-4"
          aria-hidden="true"
        />
      </UiButton>
    </div>

    <CatalogGrid :products="products" />
  </section>
</template>
