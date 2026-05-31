<script setup lang="ts">
import heroStillLife from '@/assets/images/FWIlU.png'
</script>

<template>
  <section class="mx-auto w-full max-w-screen-2xl px-6 py-8 sm:py-12 lg:px-8 lg:py-14 xl:px-12">
    <div class="grid overflow-hidden rounded-lg bg-[#11110f] text-[#fdfcf9] md:min-h-[clamp(32.5rem,42vw,44rem)] md:grid-cols-[minmax(28rem,0.85fr)_minmax(0,1fr)] md:gap-8 md:p-[clamp(3rem,4vw,5rem)]">
      <div class="flex max-w-xl flex-col justify-center gap-6 px-6 py-10 sm:px-8 md:px-0 md:py-0">
        <div class="space-y-5">
          <p class="text-xs font-bold tracking-[0.18em] text-accent uppercase">
            Curated sneakers &amp; streetwear
          </p>

          <h1 class="text-5xl font-bold leading-[0.95] tracking-tight text-balance sm:text-6xl lg:text-[clamp(4.25rem,5vw,6rem)]">
            The clean edit of future classics.
          </h1>

          <p class="max-w-md text-base leading-7 text-[#cfc6b7] sm:text-[17px]">
            Premium silhouettes, limited runs, and everyday uniform pieces selected for material, proportion, and cultural staying power.
          </p>
        </div>

        <div class="flex flex-wrap items-center gap-3">
          <UiButton
            as-child
            class="bg-background text-foreground hover:bg-background/90"
          >
            <NuxtLink to="/catalog">
              Shop catalog
              <Icon
                name="lucide:arrow-right"
                class="h-4 w-4"
                aria-hidden="true"
              />
            </NuxtLink>
          </UiButton>

          <UiButton
            as-child
            variant="outline"
            class="border-[#e5e0d6]/25 bg-[#fdfcf9] text-[#11110f] shadow-xs hover:bg-[#eee9df] hover:text-[#11110f]"
          >
            <NuxtLink to="/catalog?edit=drop-01">
              Read edit
            </NuxtLink>
          </UiButton>
        </div>
      </div>

      <div class="relative min-h-80 overflow-hidden bg-[#1b1a18] sm:min-h-110 md:min-h-0">
        <img
          :src="heroStillLife"
          alt="Editorial still life featuring a sneaker silhouette and drop label"
          class="h-full w-full object-cover"
          width="1368"
          height="848"
        >
      </div>
    </div>
  </section>
</template>
