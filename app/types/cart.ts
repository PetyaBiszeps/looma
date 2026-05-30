import type { Product, ProductImage, ProductPrice, ProductSize } from './product'

export type CartQuantityChange = 'increase' | 'decrease' | 'set'

export interface CartItem {
  id: string
  productId: Product['id']
  slug: Product['slug']
  brand: Product['brand']
  name: Product['name']
  image?: ProductImage
  size: ProductSize
  unitPrice: ProductPrice
  quantity: number
}

export interface CartSummary {
  itemCount: number
  subtotal: number
  shipping: number
  discount: number
  total: number
  currency: string
}
