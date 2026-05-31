<script setup lang="ts">
import type { ProductCategory, ProductSortKey } from '@/types'

const productCategories: ProductCategory[] = ['sneakers', 'streetwear', 'accessories']
const productSortKeys: ProductSortKey[] = ['featured', 'newest', 'price-asc', 'price-desc', 'brand']
const catalogQueryKeys = ['search', 'category', 'brand', 'sale', 'sort']

const route = useRoute()
const router = useRouter()
const catalogStore = useCatalogStore()

applyFiltersFromQuery(route.query)

await callOnce('catalog-products', () => {
  return catalogStore.fetchProducts()
})

const sortOptions: { label: string, value: ProductSortKey }[] = [
  { label: 'Featured', value: 'featured' },
  { label: 'Newest', value: 'newest' },
  { label: 'Price: Low to high', value: 'price-asc' },
  { label: 'Price: High to low', value: 'price-desc' },
  { label: 'Brand', value: 'brand' }
]

function formatCategory(category: ProductCategory) {
  return category.charAt(0).toUpperCase() + category.slice(1)
}

function getQueryValue(value: unknown) {
  return Array.isArray(value) ? value[0] ?? '' : typeof value === 'string' ? value : ''
}

function isProductCategory(value: string): value is ProductCategory {
  return productCategories.includes(value as ProductCategory)
}

function isProductSortKey(value: string): value is ProductSortKey {
  return productSortKeys.includes(value as ProductSortKey)
}

function applyFiltersFromQuery(query: typeof route.query) {
  const search = getQueryValue(query.search)
  const category = getQueryValue(query.category)
  const brand = getQueryValue(query.brand)
  const sale = getQueryValue(query.sale)
  const sort = getQueryValue(query.sort)

  catalogStore.setSearchQuery(search)
  catalogStore.setSelectedCategory(isProductCategory(category) ? category : null)
  catalogStore.setSelectedBrand(brand || null)
  catalogStore.setSaleOnly(sale === 'true' || sale === '1')
  catalogStore.setSortKey(isProductSortKey(sort) ? sort : 'featured')
}

function getCatalogQuery() {
  const query: Record<string, string> = {}

  if (catalogStore.searchQuery.trim()) {
    query.search = catalogStore.searchQuery.trim()
  }

  if (catalogStore.selectedCategory) {
    query.category = catalogStore.selectedCategory
  }

  if (catalogStore.selectedBrand) {
    query.brand = catalogStore.selectedBrand
  }

  if (catalogStore.saleOnly) {
    query.sale = 'true'
  }

  if (catalogStore.sortKey !== 'featured') {
    query.sort = catalogStore.sortKey
  }

  return query
}

function catalogQueryMatchesStore() {
  const nextQuery = getCatalogQuery()

  return catalogQueryKeys.every((key) => {
    const hasCurrentValue = Object.prototype.hasOwnProperty.call(route.query, key)
    const hasNextValue = Object.prototype.hasOwnProperty.call(nextQuery, key)

    if (hasCurrentValue !== hasNextValue) {
      return false
    }

    return getQueryValue(route.query[key]) === (nextQuery[key] ?? '')
  })
}

function syncQueryFromStore() {
  if (catalogQueryMatchesStore()) {
    return
  }

  router.replace({ query: getCatalogQuery() })
}

watch(() => route.query, (query) => {
  applyFiltersFromQuery(query)
})

watch(() => [
  catalogStore.searchQuery,
  catalogStore.selectedCategory,
  catalogStore.selectedBrand,
  catalogStore.saleOnly,
  catalogStore.sortKey
], () => {
  syncQueryFromStore()
})

onMounted(() => {
  syncQueryFromStore()
})

function onSearchInput(event: Event) {
  catalogStore.setSearchQuery((event.target as HTMLInputElement).value)
}

function onCategoryChange(event: Event) {
  const value = (event.target as HTMLSelectElement).value

  catalogStore.setSelectedCategory(value ? value as ProductCategory : null)
}

function onBrandChange(event: Event) {
  const value = (event.target as HTMLSelectElement).value

  catalogStore.setSelectedBrand(value || null)
}

function onSortChange(event: Event) {
  catalogStore.setSortKey((event.target as HTMLSelectElement).value as ProductSortKey)
}
</script>

<template>
  <section class="mx-auto w-full max-w-360 px-4 py-10 sm:px-6 lg:px-16">
    <div class="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
      <div>
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

      <p class="text-sm text-muted-foreground">
        {{ catalogStore.filteredCount }} of {{ catalogStore.total }} products
      </p>
    </div>

    <div class="mb-7 flex min-h-16 flex-col gap-4 border-y border-border py-3">
      <div class="grid gap-3 lg:grid-cols-[minmax(16rem,1fr)_auto] lg:items-center lg:justify-between">
        <label class="relative block">
          <span class="sr-only">Search catalog</span>
          <Icon
            name="lucide:search"
            class="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
            aria-hidden="true"
          />
          <UiInput
            type="search"
            placeholder="Search name, brand, category, colorway"
            :model-value="catalogStore.searchQuery"
            class="bg-card pl-9"
            @input="onSearchInput"
          />
        </label>

        <div class="flex flex-wrap items-center gap-2.5">
          <select
            aria-label="Filter by category"
            class="h-9 rounded-md border border-border bg-card px-3 text-sm font-medium text-foreground shadow-xs outline-none transition-colors hover:border-foreground/30 focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50"
            :value="catalogStore.selectedCategory ?? ''"
            @change="onCategoryChange"
          >
            <option value="">
              All categories
            </option>
            <option
              v-for="category in catalogStore.categories"
              :key="category"
              :value="category"
            >
              {{ formatCategory(category) }}
            </option>
          </select>

          <select
            aria-label="Filter by brand"
            class="h-9 rounded-md border border-border bg-card px-3 text-sm font-medium text-foreground shadow-xs outline-none transition-colors hover:border-foreground/30 focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50"
            :value="catalogStore.selectedBrand ?? ''"
            @change="onBrandChange"
          >
            <option value="">
              All brands
            </option>
            <option
              v-for="brand in catalogStore.brands"
              :key="brand"
              :value="brand"
            >
              {{ brand }}
            </option>
          </select>

          <UiButton
            type="button"
            :variant="catalogStore.saleOnly ? 'default' : 'outline'"
            class="w-fit"
            @click="catalogStore.setSaleOnly(!catalogStore.saleOnly)"
          >
            Sale only
          </UiButton>

          <select
            aria-label="Sort products"
            class="h-9 rounded-md border border-border bg-card px-3 text-sm font-medium text-foreground shadow-xs outline-none transition-colors hover:border-foreground/30 focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50"
            :value="catalogStore.sortKey"
            @change="onSortChange"
          >
            <option
              v-for="option in sortOptions"
              :key="option.value"
              :value="option.value"
            >
              Sort: {{ option.label }}
            </option>
          </select>

          <UiButton
            v-if="catalogStore.hasActiveFilters"
            type="button"
            variant="ghost"
            @click="catalogStore.resetFilters()"
          >
            Reset filters
          </UiButton>
        </div>
      </div>
    </div>

    <CatalogGrid :products="catalogStore.filteredProducts" />
  </section>
</template>
