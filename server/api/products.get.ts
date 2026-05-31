import { mockProducts } from '../data/products'
import type { Product } from '~/types'

interface ProductsResponse {
  items: Product[]
  total: number
}

export default defineEventHandler((): ProductsResponse => ({
  items: mockProducts,
  total: mockProducts.length
}))
