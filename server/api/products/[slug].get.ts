import { mockProducts } from '../../data/products'
import type { Product } from '~/types'

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
