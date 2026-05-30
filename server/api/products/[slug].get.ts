import type { Product } from '../../../app/types'
import { mockProducts } from '../../data/products'

export default defineEventHandler((event): Product => {
  const slug = getRouterParam(event, 'slug')
  const product = mockProducts.find(item => item.slug === slug)

  if (!product) {
    throw createError({
      statusCode: 404,
      statusMessage: 'Product not found'
    })
  }

  return product
})
