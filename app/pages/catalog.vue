<script setup lang="ts">
import type { AcceptableValue } from 'reka-ui'
import type { ProductCategory, ProductSortKey } from '@/types'

const productCategories: ProductCategory[] = ['sneakers', 'streetwear', 'accessories']
const productSortKeys: ProductSortKey[] = ['featured', 'newest', 'price-asc', 'price-desc', 'brand']
const catalogQueryKeys = ['search', 'category', 'brand', 'sale', 'sort']
const allCategoriesValue = '__all-categories__'
const allBrandsValue = '__all-brands__'

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

function getSelectStringValue(value: AcceptableValue) {
  return typeof value === 'string' ? value : ''
}

function onCategoryChange(value: AcceptableValue) {
  const selectedValue = getSelectStringValue(value)

  catalogStore.setSelectedCategory(isProductCategory(selectedValue) ? selectedValue : null)
}

function onBrandChange(value: AcceptableValue) {
  const selectedValue = getSelectStringValue(value)

  catalogStore.setSelectedBrand(selectedValue && selectedValue !== allBrandsValue ? selectedValue : null)
}

function onSortChange(value: AcceptableValue) {
  const selectedValue = getSelectStringValue(value)

  if (isProductSortKey(selectedValue)) {
    catalogStore.setSortKey(selectedValue)
  }
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
          <UiSelect
            :model-value="catalogStore.selectedCategory ?? allCategoriesValue"
            @update:model-value="onCategoryChange"
          >
            <UiSelectTrigger
              aria-label="Filter by category"
              class="bg-card"
            >
              <UiSelectValue />
            </UiSelectTrigger>
            <UiSelectContent>
              <UiSelectItem :value="allCategoriesValue">
                All categories
              </UiSelectItem>
              <UiSelectItem
                v-for="category in catalogStore.categories"
                :key="category"
                :value="category"
              >
                {{ formatCategory(category) }}
              </UiSelectItem>
            </UiSelectContent>
          </UiSelect>

          <UiSelect
            :model-value="catalogStore.selectedBrand ?? allBrandsValue"
            @update:model-value="onBrandChange"
          >
            <UiSelectTrigger
              aria-label="Filter by brand"
              class="bg-card"
            >
              <UiSelectValue />
            </UiSelectTrigger>
            <UiSelectContent>
              <UiSelectItem :value="allBrandsValue">
                All brands
              </UiSelectItem>
              <UiSelectItem
                v-for="brand in catalogStore.brands"
                :key="brand"
                :value="brand"
              >
                {{ brand }}
              </UiSelectItem>
            </UiSelectContent>
          </UiSelect>

          <UiButton
            type="button"
            :variant="catalogStore.saleOnly ? 'default' : 'outline'"
            class="w-fit"
            @click="catalogStore.setSaleOnly(!catalogStore.saleOnly)"
          >
            Sale only
          </UiButton>

          <UiSelect
            :model-value="catalogStore.sortKey"
            @update:model-value="onSortChange"
          >
            <UiSelectTrigger
              aria-label="Sort products"
              class="bg-card"
            >
              <UiSelectValue />
            </UiSelectTrigger>
            <UiSelectContent>
              <UiSelectItem
                v-for="option in sortOptions"
                :key="option.value"
                :value="option.value"
              >
                Sort: {{ option.label }}
              </UiSelectItem>
            </UiSelectContent>
          </UiSelect>

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
