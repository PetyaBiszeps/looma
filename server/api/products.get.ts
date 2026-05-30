import type { Product } from '../../app/types'
import { mockProducts } from '../data/products'

interface ProductsResponse {
  items: Product[]
  total: number
}

export default defineEventHandler((): ProductsResponse => ({
  items: mockProducts,
  total: mockProducts.length
}))
