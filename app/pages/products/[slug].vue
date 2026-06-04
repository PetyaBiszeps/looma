<script setup lang="ts">
import type { Product, ProductSize } from '@/types'

const route = useRoute()
const catalogStore = useCatalogStore()
const cartStore = useCartStore()
const wishlistStore = useWishlistStore()
const selectedSize = ref<ProductSize | null>(null)
const addedToCart = ref(false)
let feedbackTimeout: ReturnType<typeof setTimeout> | undefined

const slug = Array.isArray(route.params.slug) ? route.params.slug[0] : route.params.slug

if (!slug) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Product not found'
  })
}

await callOnce(`product-${slug}`, () => {
  return catalogStore.fetchProductBySlug(slug)
})

const product = computed(() => catalogStore.selectedProduct)

if (!product.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Product not found'
  })
}

const primaryImage = computed(() => {
  return product.value?.images.find(image => image.isPrimary) ?? product.value?.images[0]
})

const productImages = computed(() => product.value?.images ?? [])

const hasOriginalPrice = computed(() => {
  const currentProduct = product.value

  return currentProduct?.price.originalAmount !== undefined && currentProduct.price.originalAmount > currentProduct.price.amount
})

const price = computed(() => {
  const currentProduct = product.value

  return currentProduct ? formatPrice(currentProduct.price.amount, currentProduct.price.currency) : ''
})

const originalPrice = computed(() => {
  const currentProduct = product.value

  if (!currentProduct || !hasOriginalPrice.value || currentProduct.price.originalAmount === undefined) {
    return null
  }

  return formatPrice(currentProduct.price.originalAmount, currentProduct.price.currency)
})

const salePercent = computed(() => {
  const currentProduct = product.value

  if (!currentProduct || !hasOriginalPrice.value || currentProduct.price.originalAmount === undefined) {
    return null
  }

  return Math.round((1 - currentProduct.price.amount / currentProduct.price.originalAmount) * 100)
})

const selectedSizeLabel = computed(() => {
  return selectedSize.value?.label ?? 'Select size'
})

const canAddToCart = computed(() => selectedSize.value?.available === true)
const isWishlisted = computed(() => {
  return product.value ? wishlistStore.isWishlisted(product.value.id) : false
})
const wishlistLabel = computed(() => {
  const currentProduct = product.value

  if (!currentProduct) {
    return 'Save product to wishlist'
  }

  return isWishlisted.value ? `Remove ${currentProduct.name} from wishlist` : `Save ${currentProduct.name} to wishlist`
})

const metadata = computed(() => {
  const currentProduct = product.value

  if (!currentProduct) {
    return []
  }

  return [
    ['SKU / style code', [currentProduct.sku, currentProduct.styleCode].filter(Boolean).join(' / ') || 'Not specified'],
    ['Category', formatCategory(currentProduct.category)],
    ['Colorway', currentProduct.colorway],
    ['Release', currentProduct.releaseDate ?? (currentProduct.releaseYear ? String(currentProduct.releaseYear) : 'Not specified')]
  ]
})

useSeoMeta({
  title: () => product.value ? `${product.value.name} | Looma` : 'Product | Looma',
  description: () => product.value?.description
})

onBeforeUnmount(() => {
  if (feedbackTimeout) {
    clearTimeout(feedbackTimeout)
  }
})

function formatPrice(amount: number, currency: string) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
    maximumFractionDigits: 0
  }).format(amount)
}

function formatCategory(category: Product['category']) {
  return category.charAt(0).toUpperCase() + category.slice(1)
}

function selectSize(size: ProductSize) {
  if (!size.available) {
    return
  }

  selectedSize.value = size
  addedToCart.value = false
}

function addToCart() {
  const currentProduct = product.value

  if (!currentProduct || !selectedSize.value?.available) {
    return
  }

  cartStore.addItem(currentProduct, selectedSize.value)
  addedToCart.value = true

  if (feedbackTimeout) {
    clearTimeout(feedbackTimeout)
  }

  feedbackTimeout = setTimeout(() => {
    addedToCart.value = false
  }, 2200)
}

function toggleWishlist() {
  if (!product.value) {
    return
  }

  wishlistStore.toggleItem(product.value)
}
</script>

<template>
  <section
    v-if="product"
    class="mx-auto w-full max-w-screen-2xl px-6 py-10 lg:px-8 lg:py-14 xl:px-12"
  >
    <nav
      class="mb-6 flex items-center gap-2 text-sm text-muted-foreground"
      aria-label="Breadcrumb"
    >
      <NuxtLink
        to="/catalog"
        class="font-medium transition-colors hover:text-foreground"
      >
        Catalog
      </NuxtLink>
      <Icon
        name="lucide:chevron-right"
        class="h-3.5 w-3.5"
        aria-hidden="true"
      />
      <NuxtLink
        :to="{ path: '/catalog', query: { category: product.category } }"
        class="transition-colors hover:text-foreground"
      >
        {{ formatCategory(product.category) }}
      </NuxtLink>
      <Icon
        name="lucide:chevron-right"
        class="h-3.5 w-3.5"
        aria-hidden="true"
      />
      <span class="font-medium text-foreground">{{ product.name }}</span>
    </nav>

    <div class="grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(24rem,0.85fr)]">
      <UiCard class="gap-4 rounded-lg border-border bg-card p-5 shadow-xs">
        <div class="relative aspect-4/3 overflow-hidden rounded-lg bg-muted">
          <NuxtImg
            v-if="primaryImage"
            :src="primaryImage.src"
            :alt="primaryImage.alt"
            :width="primaryImage.width"
            :height="primaryImage.height"
            sizes="lg:60vw xl:50vw"
            class="h-full w-full object-cover"
          />
          <div
            v-else
            class="flex h-full w-full items-center justify-center text-sm font-medium text-muted-foreground"
          >
            No image
          </div>

          <UiBadge
            v-if="product.saleState === 'sale' || hasOriginalPrice"
            class="absolute left-5 top-5 rounded-full bg-primary text-primary-foreground"
          >
            Sale
          </UiBadge>
        </div>

        <div
          v-if="productImages.length > 1"
          class="grid grid-cols-4 gap-3"
        >
          <div
            v-for="image in productImages.slice(0, 4)"
            :key="image.id"
            class="aspect-square overflow-hidden rounded-md border border-border bg-muted first:border-foreground"
          >
            <NuxtImg
              :src="image.src"
              :alt="image.alt"
              :width="image.width"
              :height="image.height"
              sizes="10vw"
              class="h-full w-full object-cover"
            />
          </div>
        </div>
      </UiCard>

      <UiCard class="rounded-lg border-border bg-card p-0 shadow-xs">
        <div class="space-y-4 px-6 pb-4 pt-6">
          <div class="flex items-center justify-between gap-4">
            <p class="text-xs font-bold tracking-[0.14em] text-muted-foreground uppercase">
              {{ product.brand }}
            </p>

            <UiBadge
              v-if="product.source"
              variant="outline"
              class="rounded-full"
            >
              API imported
            </UiBadge>
          </div>

          <h1 class="text-4xl font-bold leading-tight tracking-tight text-foreground">
            {{ product.name }}
          </h1>

          <div class="flex flex-wrap items-center gap-3">
            <span class="text-2xl font-bold text-foreground">{{ price }}</span>
            <span
              v-if="originalPrice"
              class="text-base font-medium text-muted-foreground line-through"
            >
              {{ originalPrice }}
            </span>
            <UiBadge
              v-if="salePercent"
              class="rounded-full bg-primary text-primary-foreground"
            >
              {{ salePercent }}% off
            </UiBadge>
          </div>
        </div>

        <div class="space-y-5 px-6 py-4">
          <p class="text-sm leading-6 text-muted-foreground">
            {{ product.description }}
          </p>

          <div class="space-y-3">
            <div class="flex items-center justify-between gap-4">
              <p class="text-sm font-semibold text-foreground">
                Selected size
              </p>
              <p class="text-sm font-medium text-muted-foreground">
                {{ selectedSizeLabel }}
              </p>
            </div>

            <div class="grid grid-cols-4 gap-2.5">
              <UiButton
                v-for="size in product.sizes"
                :key="size.id"
                type="button"
                :variant="selectedSize?.id === size.id ? 'default' : 'outline'"
                :class="{ 'opacity-40 line-through': !size.available }"
                :disabled="!size.available"
                :aria-pressed="selectedSize?.id === size.id"
                @click="selectSize(size)"
              >
                {{ size.label }}
              </UiButton>
            </div>
          </div>

          <dl class="space-y-3 border-t border-border pt-4">
            <div
              v-for="([label, value]) in metadata"
              :key="label"
              class="flex items-center justify-between gap-4 text-sm"
            >
              <dt class="text-muted-foreground">
                {{ label }}
              </dt>
              <dd class="text-right font-medium text-foreground">
                {{ value }}
              </dd>
            </div>
          </dl>
        </div>

        <div class="flex items-center gap-3 px-6 pb-6 pt-4">
          <UiButton
            type="button"
            class="flex-1"
            :disabled="!canAddToCart"
            @click="addToCart"
          >
            <Icon
              name="lucide:shopping-bag"
              class="h-4 w-4"
              aria-hidden="true"
            />
            Add to cart
          </UiButton>

          <UiButton
            type="button"
            variant="outline"
            size="icon-lg"
            class="bg-card hover:bg-card hover:text-foreground"
            :class="isWishlisted ? 'border-primary text-primary' : 'text-muted-foreground'"
            :aria-label="wishlistLabel"
            :aria-pressed="isWishlisted"
            @click="toggleWishlist"
          >
            <Icon
              name="lucide:heart"
              class="h-4 w-4"
              :class="{ 'fill-current': isWishlisted }"
              aria-hidden="true"
            />
          </UiButton>
        </div>

        <p
          v-if="addedToCart"
          class="px-6 pb-6 text-sm font-medium text-primary"
        >
          Added to cart
        </p>
      </UiCard>
    </div>
  </section>
</template>
