import type { Product, ProductCategory, ProductSortKey } from '@/types'

interface ProductsResponse {
  items: Product[]
  total: number
}

interface FetchProductsOptions {
  force?: boolean
}

interface FetchProductOptions {
  force?: boolean
}

function normalizeSearchValue(value: string) {
  return value.trim().toLowerCase()
}

function getProductReleaseTime(product: Product) {
  if (product.releaseDate) {
    return new Date(product.releaseDate).getTime()
  }

  return product.releaseYear ?? 0
}

export const useCatalogStore = defineStore('catalog', () => {
  const items = ref<Product[]>([])
  const itemsBySlug = ref<Record<string, Product>>({})
  const selectedProduct = ref<Product | null>(null)
  const searchQuery = ref('')
  const selectedCategory = ref<ProductCategory | null>(null)
  const selectedBrand = ref<string | null>(null)
  const saleOnly = ref(false)
  const sortKey = ref<ProductSortKey>('featured')
  const total = ref(0)
  const pending = ref(false)
  const error = ref<string | null>(null)
  const detailPending = ref(false)
  const detailError = ref<string | null>(null)

  const hasProducts = computed(() => items.value.length > 0)
  const hasSelectedProduct = computed(() => selectedProduct.value !== null)
  const featuredProducts = computed(() => items.value.slice(0, 4))
  const saleProducts = computed(() => items.value.filter(product => product.saleState === 'sale'))
  const categories = computed(() => {
    return Array.from(new Set(items.value.map(product => product.category))).sort()
  })
  const brands = computed(() => {
    return Array.from(new Set(items.value.map(product => product.brand))).sort((brandA, brandB) => {
      return brandA.localeCompare(brandB)
    })
  })
  const hasActiveFilters = computed(() => {
    return searchQuery.value.trim() !== ''
      || selectedCategory.value !== null
      || selectedBrand.value !== null
      || saleOnly.value
      || sortKey.value !== 'featured'
  })
  const filteredProducts = computed(() => {
    const normalizedQuery = normalizeSearchValue(searchQuery.value)
    const filteredItems = items.value.filter((product) => {
      const matchesSearch = !normalizedQuery || [
        product.name,
        product.brand,
        product.category,
        product.colorway
      ].some(value => value.toLowerCase().includes(normalizedQuery))

      return matchesSearch
        && (!selectedCategory.value || product.category === selectedCategory.value)
        && (!selectedBrand.value || product.brand === selectedBrand.value)
        && (!saleOnly.value || product.saleState === 'sale')
    })

    return filteredItems
      .map((product, index) => ({ product, index }))
      .sort((itemA, itemB) => {
        if (sortKey.value === 'price-asc') {
          return itemA.product.price.amount - itemB.product.price.amount || itemA.index - itemB.index
        }

        if (sortKey.value === 'price-desc') {
          return itemB.product.price.amount - itemA.product.price.amount || itemA.index - itemB.index
        }

        if (sortKey.value === 'newest') {
          return getProductReleaseTime(itemB.product) - getProductReleaseTime(itemA.product) || itemA.index - itemB.index
        }

        if (sortKey.value === 'brand') {
          return itemA.product.brand.localeCompare(itemB.product.brand) || itemA.index - itemB.index
        }

        return itemA.index - itemB.index
      })
      .map(item => item.product)
  })
  const filteredCount = computed(() => filteredProducts.value.length)

  function getProductBySlug(slug: string) {
    return itemsBySlug.value[slug] ?? items.value.find(product => product.slug === slug)
  }

  function setSearchQuery(value: string) {
    searchQuery.value = value
  }

  function setSelectedCategory(value: ProductCategory | null) {
    selectedCategory.value = value
  }

  function setSelectedBrand(value: string | null) {
    selectedBrand.value = value
  }

  function setSaleOnly(value: boolean) {
    saleOnly.value = value
  }

  function setSortKey(value: ProductSortKey) {
    sortKey.value = value
  }

  function resetFilters() {
    searchQuery.value = ''
    selectedCategory.value = null
    selectedBrand.value = null
    saleOnly.value = false
    sortKey.value = 'featured'
  }

  async function fetchProducts(options: FetchProductsOptions = {}) {
    if (pending.value || (!options.force && hasProducts.value)) {
      return
    }

    pending.value = true
    error.value = null

    try {
      const response = await $fetch<ProductsResponse>('/api/products')

      items.value = response.items
      total.value = response.total
    } catch (value) {
      error.value = value instanceof Error ? value.message : 'Failed to fetch products'
    } finally {
      pending.value = false
    }
  }

  async function fetchProductBySlug(slug: string, options: FetchProductOptions = {}) {
    const productFromItems = items.value.find(product => product.slug === slug)

    if (productFromItems) {
      itemsBySlug.value[slug] = productFromItems
      selectedProduct.value = productFromItems
      return
    }

    const cachedProduct = itemsBySlug.value[slug]

    if (cachedProduct && !options.force) {
      selectedProduct.value = cachedProduct
      return
    }

    detailPending.value = true
    detailError.value = null

    try {
      const product = await $fetch<Product>(`/api/products/${slug}`)

      itemsBySlug.value[slug] = product
      selectedProduct.value = product
    } catch (value) {
      detailError.value = value instanceof Error ? value.message : 'Failed to fetch product'
      selectedProduct.value = null
    } finally {
      detailPending.value = false
    }
  }

  function reset() {
    items.value = []
    itemsBySlug.value = {}
    selectedProduct.value = null
    total.value = 0
    pending.value = false
    error.value = null
    detailPending.value = false
    detailError.value = null
    resetFilters()
  }

  return {
    items,
    itemsBySlug,
    selectedProduct,
    searchQuery,
    selectedCategory,
    selectedBrand,
    saleOnly,
    sortKey,
    total,
    pending,
    error,
    detailPending,
    detailError,
    hasProducts,
    hasSelectedProduct,
    featuredProducts,
    saleProducts,
    categories,
    brands,
    filteredProducts,
    filteredCount,
    hasActiveFilters,
    getProductBySlug,
    setSearchQuery,
    setSelectedCategory,
    setSelectedBrand,
    setSaleOnly,
    setSortKey,
    resetFilters,
    fetchProducts,
    fetchProductBySlug,
    reset
  }
})
