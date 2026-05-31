<script setup lang="ts">
import type { CartItem } from '@/types'

const cartStore = useCartStore()

useSeoMeta({
  title: 'Cart | Looma',
  description: 'Review your Looma cart before checkout.'
})

function formatPrice(amount: number, currency: string) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
    maximumFractionDigits: 0
  }).format(amount)
}

function getItemSubtotal(item: CartItem) {
  return item.unitPrice.amount * item.quantity
}

function increaseQuantity(item: CartItem) {
  cartStore.updateQuantity(item.id, item.quantity + 1)
}

function decreaseQuantity(item: CartItem) {
  cartStore.updateQuantity(item.id, item.quantity - 1)
}
</script>

<template>
  <section class="mx-auto w-full max-w-screen-2xl px-6 py-10 lg:px-8 lg:py-14 xl:px-12">
    <div class="mb-8 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
      <div class="max-w-2xl space-y-3">
        <p class="text-xs font-bold tracking-[0.18em] text-muted-foreground uppercase">
          Bag review
        </p>
        <h1 class="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          Your cart
        </h1>
        <p class="text-base leading-7 text-muted-foreground">
          Confirm sizing, quantities, and delivery estimates before moving to checkout.
        </p>
      </div>

      <UiButton
        as-child
        variant="outline"
        class="w-fit bg-card"
      >
        <NuxtLink to="/catalog">
          <Icon
            name="lucide:arrow-left"
            class="h-4 w-4"
            aria-hidden="true"
          />
          Continue shopping
        </NuxtLink>
      </UiButton>
    </div>

    <UiCard
      v-if="cartStore.isEmpty"
      class="items-center rounded-lg border-border bg-card px-6 py-10 text-center shadow-xs"
    >
      <Icon
        name="lucide:shopping-bag"
        class="h-8 w-8 text-muted-foreground"
        aria-hidden="true"
      />
      <div class="max-w-md space-y-2">
        <h2 class="text-2xl font-bold tracking-tight text-foreground">
          Your cart is empty
        </h2>
        <p class="text-sm leading-6 text-muted-foreground">
          Start with the latest curated sneakers, outerwear, and everyday streetwear essentials.
        </p>
      </div>
      <UiButton as-child>
        <NuxtLink to="/catalog">
          Back to catalog
          <Icon
            name="lucide:arrow-right"
            class="h-4 w-4"
            aria-hidden="true"
          />
        </NuxtLink>
      </UiButton>
    </UiCard>

    <div
      v-else
      class="grid gap-8 lg:grid-cols-[minmax(0,1fr)_24.5rem]"
    >
      <div class="space-y-4">
        <UiCard
          v-for="item in cartStore.items"
          :key="item.id"
          class="rounded-lg border-border bg-card p-4 shadow-xs sm:p-5"
        >
          <div class="grid gap-4 sm:grid-cols-[7rem_minmax(0,1fr)] lg:grid-cols-[7rem_minmax(0,1fr)_auto] lg:items-center">
            <div class="aspect-square overflow-hidden rounded-md bg-muted">
              <NuxtImg
                v-if="item.image"
                :src="item.image.src"
                :alt="item.image.alt"
                :width="item.image.width"
                :height="item.image.height"
                sizes="112px"
                class="h-full w-full object-cover"
              />
              <div
                v-else
                class="flex h-full w-full items-center justify-center text-xs font-medium text-muted-foreground"
              >
                No image
              </div>
            </div>

            <div class="min-w-0 space-y-3">
              <div class="space-y-1">
                <p class="text-xs font-bold tracking-[0.14em] text-muted-foreground uppercase">
                  {{ item.brand }}
                </p>
                <NuxtLink
                  :to="`/products/${item.slug}`"
                  class="block text-lg font-bold leading-tight text-foreground transition-colors hover:text-muted-foreground"
                >
                  {{ item.name }}
                </NuxtLink>
              </div>

              <div class="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                <UiBadge
                  variant="outline"
                  class="rounded-full bg-card"
                >
                  Size {{ item.size.label }}
                </UiBadge>
                <span>{{ formatPrice(item.unitPrice.amount, item.unitPrice.currency) }} each</span>
              </div>
            </div>

            <div class="flex flex-wrap items-center justify-between gap-4 sm:col-start-2 lg:col-start-auto lg:justify-end">
              <div class="flex items-center rounded-md border border-border bg-background p-1">
                <UiButton
                  type="button"
                  variant="ghost"
                  size="icon-sm"
                  :aria-label="`Decrease quantity for ${item.name}`"
                  @click="decreaseQuantity(item)"
                >
                  <Icon
                    name="lucide:minus"
                    class="h-4 w-4"
                    aria-hidden="true"
                  />
                </UiButton>
                <span class="min-w-8 text-center text-sm font-semibold text-foreground">
                  {{ item.quantity }}
                </span>
                <UiButton
                  type="button"
                  variant="ghost"
                  size="icon-sm"
                  :aria-label="`Increase quantity for ${item.name}`"
                  @click="increaseQuantity(item)"
                >
                  <Icon
                    name="lucide:plus"
                    class="h-4 w-4"
                    aria-hidden="true"
                  />
                </UiButton>
              </div>

              <div class="min-w-24 text-right">
                <p class="text-xs text-muted-foreground">
                  Subtotal
                </p>
                <p class="text-base font-bold text-foreground">
                  {{ formatPrice(getItemSubtotal(item), item.unitPrice.currency) }}
                </p>
              </div>

              <UiButton
                type="button"
                variant="outline"
                size="icon-lg"
                class="bg-card text-muted-foreground hover:text-foreground"
                :aria-label="`Remove ${item.name} from cart`"
                @click="cartStore.removeItem(item.id)"
              >
                <Icon
                  name="lucide:trash-2"
                  class="h-4 w-4"
                  aria-hidden="true"
                />
              </UiButton>
            </div>
          </div>
        </UiCard>
      </div>

      <UiCard class="h-fit rounded-lg border-border bg-card p-6 shadow-xs lg:sticky lg:top-24">
        <div class="space-y-1">
          <h2 class="text-xl font-bold tracking-tight text-foreground">
            Order summary
          </h2>
          <p class="text-sm text-muted-foreground">
            {{ cartStore.summary.itemCount }} item{{ cartStore.summary.itemCount === 1 ? '' : 's' }} in cart
          </p>
        </div>

        <dl class="space-y-4 border-y border-border py-5 text-sm">
          <div class="flex items-center justify-between gap-4">
            <dt class="text-muted-foreground">
              Subtotal
            </dt>
            <dd class="font-medium text-foreground">
              {{ formatPrice(cartStore.summary.subtotal, cartStore.summary.currency) }}
            </dd>
          </div>
          <div class="flex items-center justify-between gap-4">
            <dt class="text-muted-foreground">
              Estimated shipping
            </dt>
            <dd class="font-medium text-foreground">
              Calculated at checkout
            </dd>
          </div>
          <div class="flex items-center justify-between gap-4 text-base">
            <dt class="font-bold text-foreground">
              Total
            </dt>
            <dd class="font-bold text-foreground">
              {{ formatPrice(cartStore.summary.total, cartStore.summary.currency) }}
            </dd>
          </div>
        </dl>

        <UiButton
          type="button"
          class="w-full"
          disabled
        >
          Checkout coming soon
        </UiButton>
      </UiCard>
    </div>
  </section>
</template>
