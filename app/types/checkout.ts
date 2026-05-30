import type { CartItem, CartSummary } from './cart'

export type DeliveryMethod = 'standard' | 'express' | 'pickup'

export type CheckoutStep = 'contact' | 'delivery' | 'payment' | 'review' | 'success'

export interface CheckoutContact {
  email: string
  firstName: string
  lastName: string
  phone?: string
}

export interface CheckoutAddress {
  line1: string
  line2?: string
  city: string
  region?: string
  postalCode: string
  country: string
}

export interface CheckoutDraft {
  contact: CheckoutContact
  shippingAddress: CheckoutAddress
  billingAddress?: CheckoutAddress
  deliveryMethod?: DeliveryMethod
  items: CartItem[]
  summary: CartSummary
  currentStep: CheckoutStep
}

export type CheckoutValidationErrors = Partial<Record<keyof CheckoutContact | keyof CheckoutAddress | 'deliveryMethod' | 'payment', string>>
