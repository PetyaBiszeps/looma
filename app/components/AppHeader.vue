<script setup lang="ts">
const route = useRoute()
const router = useRouter()
const cartStore = useCartStore()
const wishlistStore = useWishlistStore()
const headerSearchQuery = ref('')

const wishlistLabel = computed(() => {
  if (wishlistStore.itemCount === 0) {
    return 'Wishlist'
  }

  return `Wishlist, ${wishlistStore.itemCount} saved ${wishlistStore.itemCount === 1 ? 'item' : 'items'}`
})

const cartLabel = computed(() => {
  if (cartStore.itemCount === 0) {
    return 'Cart'
  }

  return `Cart, ${cartStore.itemCount} ${cartStore.itemCount === 1 ? 'item' : 'items'}`
})

function getQueryValue(value: unknown) {
  return Array.isArray(value) ? value[0] ?? '' : typeof value === 'string' ? value : ''
}

function submitHeaderSearch() {
  const search = headerSearchQuery.value.trim()
  const query = route.path === '/catalog' ? { ...route.query } : {}

  if (search) {
    query.search = search
  } else {
    delete query.search
  }

  router.push({
    path: '/catalog',
    query
  })
}

watch(() => route.query.search, (search) => {
  headerSearchQuery.value = getQueryValue(search)
}, { immediate: true })
</script>

<template>
  <header class="border-b border-border bg-background text-foreground">
    <div class="mx-auto flex min-h-20 w-full max-w-screen-2xl flex-wrap items-center justify-between gap-4 px-6 py-4 lg:min-h-22 lg:px-8 xl:px-12">
      <div class="flex min-w-0 items-center gap-6 lg:gap-10">
        <NuxtLink
          to="/"
          class="group flex items-center gap-3"
          aria-label="Looma home"
        >
          <span
            class="h-7 w-7 rounded-md bg-foreground transition-transform group-hover:-rotate-3"
            aria-hidden="true"
          />
          <span class="text-lg font-bold tracking-[0.18em] text-foreground uppercase">Looma</span>
        </NuxtLink>

        <nav
          class="hidden items-center gap-1 md:flex"
          aria-label="Primary navigation"
        >
          <NuxtLink
            to="/catalog"
            class="rounded-md px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-card hover:text-foreground"
          >
            Catalog
          </NuxtLink>
        </nav>
      </div>

      <div class="flex flex-1 basis-full items-center justify-end gap-3 sm:basis-auto">
        <form
          class="relative hidden w-full max-w-xs items-center sm:flex"
          role="search"
          @submit.prevent="submitHeaderSearch"
        >
          <label
            for="site-search"
            class="sr-only"
          >Search products</label>
          <Icon
            name="lucide:search"
            class="pointer-events-none absolute left-3 h-4 w-4 text-muted-foreground"
            aria-hidden="true"
          />
          <UiInput
            v-model="headerSearchQuery"
            id="site-search"
            name="search"
            type="search"
            aria-label="Search products"
            placeholder="Search sneakers, apparel"
            class="h-10 bg-card pl-9 pr-3 text-sm text-foreground hover:border-foreground/30 focus-visible:border-foreground focus-visible:ring-foreground/10"
          />
        </form>

        <UiButton
          as-child
          variant="outline"
          size="icon-lg"
          class="relative h-10 w-10 bg-card text-muted-foreground hover:bg-card hover:text-foreground"
        >
          <NuxtLink
            to="/wishlist"
            :aria-label="wishlistLabel"
          >
            <Icon
              name="lucide:heart"
              class="h-4 w-4"
              aria-hidden="true"
            />
            <span
              v-if="wishlistStore.itemCount > 0"
              class="absolute -right-1 -top-1 flex min-h-5 min-w-5 items-center justify-center rounded-full bg-primary px-1.5 text-[11px] font-bold leading-none text-primary-foreground shadow-xs tabular-nums"
              aria-hidden="true"
            >
              {{ wishlistStore.itemCount }}
            </span>
          </NuxtLink>
        </UiButton>

        <UiButton
          as-child
          variant="outline"
          size="icon-lg"
          class="relative h-10 w-10 bg-card text-muted-foreground hover:bg-card hover:text-foreground"
        >
          <NuxtLink
            to="/cart"
            :aria-label="cartLabel"
          >
            <Icon
              name="lucide:shopping-bag"
              class="h-4 w-4"
              aria-hidden="true"
            />
            <span
              v-if="cartStore.itemCount > 0"
              class="absolute -right-1 -top-1 flex min-h-5 min-w-5 items-center justify-center rounded-full bg-primary px-1.5 text-[11px] font-bold leading-none text-primary-foreground shadow-xs tabular-nums"
              aria-hidden="true"
            >
              {{ cartStore.itemCount }}
            </span>
          </NuxtLink>
        </UiButton>

        <ThemeToggle />
      </div>
    </div>
  </header>
</template>
