import type { Product, ProductImage, ProductPrice, ProductSize } from './product'

export interface WishlistItem {
  id: string
  productId: Product['id']
  slug: Product['slug']
  brand: Product['brand']
  name: Product['name']
  image?: ProductImage
  price: ProductPrice
  selectedSize?: ProductSize
  savedAt: string
}
