import type { Product, WishlistItem } from '@/types'

const WISHLIST_STORAGE_KEY = 'looma:wishlist'

export const useWishlistStore = defineStore('wishlist', () => {
  const items = ref<WishlistItem[]>([])

  if (import.meta.client) {
    onNuxtReady(() => {
      hydrateItems()
      watch(items, persistItems, { deep: true })
    })
  }

  const itemCount = computed(() => items.value.length)
  const isEmpty = computed(() => items.value.length === 0)
  const isWishlisted = computed(() => {
    return (productId: Product['id']) => items.value.some(item => item.productId === productId)
  })

  function addItem(product: Product) {
    if (isWishlisted.value(product.id)) {
      return
    }

    items.value.push({
      id: product.id,
      productId: product.id,
      slug: product.slug,
      brand: product.brand,
      name: product.name,
      image: product.images[0],
      price: product.price,
      savedAt: new Date().toISOString()
    })
  }

  function removeItem(productId: Product['id']) {
    items.value = items.value.filter(item => item.productId !== productId)
  }

  function toggleItem(product: Product) {
    if (isWishlisted.value(product.id)) {
      removeItem(product.id)
      return
    }

    addItem(product)
  }

  function clearWishlist() {
    items.value = []
  }

  function hydrateItems() {
    try {
      const storedItems = localStorage.getItem(WISHLIST_STORAGE_KEY)

      if (!storedItems) {
        return
      }

      const parsedItems: unknown = JSON.parse(storedItems)

      if (Array.isArray(parsedItems)) {
        items.value = parsedItems as WishlistItem[]
      }
    } catch {
      localStorage.removeItem(WISHLIST_STORAGE_KEY)
    }
  }

  function persistItems() {
    localStorage.setItem(WISHLIST_STORAGE_KEY, JSON.stringify(items.value))
  }

  return {
    items,
    itemCount,
    isEmpty,
    isWishlisted,
    addItem,
    removeItem,
    toggleItem,
    clearWishlist
  }
})
