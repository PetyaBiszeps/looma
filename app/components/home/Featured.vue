<script setup lang="ts">
import type { Product } from '@/types'

defineProps<{
  products: Product[]
}>()
</script>

<template>
  <section class="mx-auto w-full max-w-screen-2xl px-6 pb-16 pt-6 lg:px-8 lg:pb-20 xl:px-12">
    <div class="mb-7 flex flex-col gap-5 border-b border-t border-border py-6 md:flex-row md:items-end md:justify-between">
      <div class="max-w-2xl space-y-3">
        <p class="text-xs font-bold tracking-[0.16em] text-muted-foreground uppercase">
          Featured edit
        </p>

        <div class="space-y-2">
          <h2 class="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Built for sharp rotations.
          </h2>

          <p class="max-w-xl text-sm leading-6 text-muted-foreground">
            A tight selection of sneakers and streetwear chosen for everyday wear, limited runs, and lasting shape.
          </p>
        </div>
      </div>

      <div class="flex flex-wrap items-center gap-3 md:justify-end">
        <p class="text-sm text-muted-foreground">
          {{ products.length }} curated pieces
        </p>

        <UiButton
          as-child
          variant="outline"
          class="bg-card"
        >
          <NuxtLink to="/catalog">
            View catalog
          </NuxtLink>
        </UiButton>
      </div>
    </div>

    <CatalogGrid :products="products" />
  </section>
</template>
