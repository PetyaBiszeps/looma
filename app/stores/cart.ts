import type { CartItem, CartSummary, Product, ProductSize } from '@/types'

const DEFAULT_CART_CURRENCY = 'USD'
const CART_STORAGE_KEY = 'looma:cart'

function createCartItemId(productId: Product['id'], sizeId: ProductSize['id']) {
  return `${productId}:${sizeId}`
}

export const useCartStore = defineStore('cart', () => {
  const items = ref<CartItem[]>([])

  if (import.meta.client) {
    onNuxtReady(() => {
      hydrateItems()
      watch(items, persistItems, { deep: true })
    })
  }

  const itemCount = computed(() => items.value.reduce((total, item) => total + item.quantity, 0))
  const subtotal = computed(() => items.value.reduce((total, item) => {
    return total + item.unitPrice.amount * item.quantity
  }, 0))
  const isEmpty = computed(() => items.value.length === 0)
  const summary = computed<CartSummary>(() => {
    const shipping = 0
    const discount = 0

    return {
      itemCount: itemCount.value,
      subtotal: subtotal.value,
      shipping,
      discount,
      total: subtotal.value + shipping - discount,
      currency: items.value[0]?.unitPrice.currency ?? DEFAULT_CART_CURRENCY
    }
  })

  function addItem(product: Product, selectedSize: ProductSize) {
    const itemId = createCartItemId(product.id, selectedSize.id)
    const existingItem = items.value.find(item => item.id === itemId)

    if (existingItem) {
      existingItem.quantity += 1
      return
    }

    items.value.push({
      id: itemId,
      productId: product.id,
      slug: product.slug,
      brand: product.brand,
      name: product.name,
      image: product.images[0],
      size: selectedSize,
      unitPrice: product.price,
      quantity: 1
    })
  }

  function removeItem(itemId: CartItem['id']) {
    items.value = items.value.filter(item => item.id !== itemId)
  }

  function updateQuantity(itemId: CartItem['id'], quantity: number) {
    if (quantity <= 0) {
      removeItem(itemId)
      return
    }

    const item = items.value.find(item => item.id === itemId)

    if (item) {
      item.quantity = quantity
    }
  }

  function clearCart() {
    items.value = []
  }

  function hydrateItems() {
    try {
      const storedItems = localStorage.getItem(CART_STORAGE_KEY)

      if (!storedItems) {
        return
      }

      const parsedItems: unknown = JSON.parse(storedItems)

      if (Array.isArray(parsedItems)) {
        items.value = parsedItems as CartItem[]
      }
    } catch {
      localStorage.removeItem(CART_STORAGE_KEY)
    }
  }

  function persistItems() {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items.value))
  }

  return {
    items,
    itemCount,
    subtotal,
    summary,
    isEmpty,
    addItem,
    removeItem,
    updateQuantity,
    clearCart
  }
})
