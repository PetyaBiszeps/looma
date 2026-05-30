import type { Product } from '@/types'

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

export const useCatalogStore = defineStore('catalog', () => {
  const items = ref<Product[]>([])
  const itemsBySlug = ref<Record<string, Product>>({})
  const selectedProduct = ref<Product | null>(null)
  const total = ref(0)
  const pending = ref(false)
  const error = ref<string | null>(null)
  const detailPending = ref(false)
  const detailError = ref<string | null>(null)

  const hasProducts = computed(() => items.value.length > 0)
  const hasSelectedProduct = computed(() => selectedProduct.value !== null)
  const featuredProducts = computed(() => items.value.slice(0, 4))
  const saleProducts = computed(() => items.value.filter(product => product.saleState === 'sale'))

  function getProductBySlug(slug: string) {
    return itemsBySlug.value[slug] ?? items.value.find(product => product.slug === slug)
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
  }

  return {
    items,
    itemsBySlug,
    selectedProduct,
    total,
    pending,
    error,
    detailPending,
    detailError,
    hasProducts,
    hasSelectedProduct,
    featuredProducts,
    saleProducts,
    getProductBySlug,
    fetchProducts,
    fetchProductBySlug,
    reset
  }
})
