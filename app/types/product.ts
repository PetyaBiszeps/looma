export type ProductCategory = 'sneakers' | 'streetwear' | 'accessories'

export type ProductSortKey = 'featured' | 'newest' | 'price-asc' | 'price-desc' | 'brand'

export type ProductSaleState = 'regular' | 'sale' | 'sold-out'

export interface ProductImage {
  id: string
  src: string
  alt: string
  width?: number
  height?: number
  position?: number
  isPrimary?: boolean
}

export interface ProductSize {
  id: string
  label: string
  value: string
  available: boolean
  stock?: number
}

export interface ProductPrice {
  amount: number
  originalAmount?: number
  currency: string
}

export interface ProductSource {
  provider: string
  externalId: string
  externalUrl?: string
  importedAt: string
  lastSyncedAt?: string
}

export interface Product {
  id: string
  slug: string
  brand: string
  name: string
  description: string
  category: ProductCategory
  colorway: string
  images: ProductImage[]
  price: ProductPrice
  saleState: ProductSaleState
  sizes: ProductSize[]
  sku?: string
  styleCode?: string
  releaseDate?: string
  releaseYear?: number
  source?: ProductSource
}
