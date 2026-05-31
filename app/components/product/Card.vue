<script setup lang="ts">
import type { Product } from '@/types'

const props = defineProps<{
  product: Product
}>()

const wishlistStore = useWishlistStore()

const primaryImage = computed(() => {
  return props.product.images.find(image => image.isPrimary) ?? props.product.images[0]
})

const hasOriginalPrice = computed(() => {
  const originalAmount = props.product.price.originalAmount

  return typeof originalAmount === 'number' && originalAmount > props.product.price.amount
})

const isOnSale = computed(() => props.product.saleState === 'sale' || hasOriginalPrice.value)
const isSoldOut = computed(() => props.product.saleState === 'sold-out')
const isWishlisted = computed(() => wishlistStore.isWishlisted(props.product.id))
const wishlistLabel = computed(() => {
  return isWishlisted.value ? `Remove ${props.product.name} from wishlist` : `Save ${props.product.name} to wishlist`
})

const price = computed(() => formatPrice(props.product.price.amount))
const originalPrice = computed(() => {
  if (!hasOriginalPrice.value || props.product.price.originalAmount === undefined) {
    return null
  }

  return formatPrice(props.product.price.originalAmount)
})

function formatPrice(amount: number) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: props.product.price.currency,
    maximumFractionDigits: 0
  }).format(amount)
}
</script>

<template>
  <UiCard class="group h-full gap-0 overflow-hidden rounded-lg border-border bg-card p-0 text-card-foreground shadow-xs transition-colors hover:border-foreground">
    <div class="relative aspect-square overflow-hidden bg-muted">
      <NuxtLink
        :to="`/products/${product.slug}`"
        class="block h-full w-full"
        :aria-label="`View ${product.name}`"
      >
        <NuxtImg
          v-if="primaryImage"
          :src="primaryImage.src"
          :alt="primaryImage.alt"
          :width="primaryImage.width"
          :height="primaryImage.height"
          sizes="sm:50vw md:33vw lg:25vw"
          class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
        />
        <div
          v-else
          class="flex h-full w-full items-center justify-center text-sm font-medium text-muted-foreground"
        >
          No image
        </div>
      </NuxtLink>

      <div class="absolute left-4 top-4 flex items-center gap-2">
        <UiBadge
          v-if="isSoldOut"
          variant="secondary"
          class="border-border bg-card text-card-foreground shadow-xs"
        >
          Sold out
        </UiBadge>
        <UiBadge
          v-else-if="isOnSale"
          class="bg-primary text-primary-foreground shadow-xs"
        >
          Sale
        </UiBadge>
      </div>

      <UiButton
        type="button"
        variant="outline"
        size="icon-sm"
        class="absolute right-4 top-4 h-8 w-8 rounded-full border-border bg-card shadow-xs hover:bg-card hover:text-foreground"
        :class="isWishlisted ? 'border-destructive/40 text-destructive' : 'text-card-foreground'"
        :aria-label="wishlistLabel"
        :aria-pressed="isWishlisted"
        @click.stop="wishlistStore.toggleItem(product)"
      >
        <Icon
          name="lucide:heart"
          class="h-4 w-4"
          :class="{ 'fill-destructive': isWishlisted }"
          aria-hidden="true"
        />
      </UiButton>
    </div>

    <div class="flex min-h-32 flex-1 flex-col gap-2 px-4 pb-4 pt-4">
      <p class="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
        {{ product.brand }}
      </p>

      <h3 class="line-clamp-2 min-h-10 text-sm font-semibold leading-5 text-card-foreground">
        <NuxtLink
          :to="`/products/${product.slug}`"
          class="transition-colors hover:text-foreground hover:underline"
        >
          {{ product.name }}
        </NuxtLink>
      </h3>

      <div class="mt-auto flex items-end justify-between gap-3 pt-2">
        <div class="flex flex-wrap items-baseline gap-x-2 gap-y-1">
          <span class="text-sm font-semibold text-card-foreground">{{ price }}</span>
          <span
            v-if="originalPrice"
            class="text-xs text-muted-foreground line-through"
          >
            {{ originalPrice }}
          </span>
        </div>

        <span class="text-xs text-muted-foreground">{{ product.colorway }}</span>
      </div>
    </div>
  </UiCard>
</template>
