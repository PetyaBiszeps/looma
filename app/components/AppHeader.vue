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
        <label class="relative hidden w-full max-w-xs items-center sm:flex">
          <span class="sr-only">Search products</span>
          <Icon
            name="lucide:search"
            class="pointer-events-none absolute left-3 h-4 w-4 text-muted-foreground"
            aria-hidden="true"
          />
          <UiInput
            id="site-search"
            name="search"
            type="search"
            aria-label="Search products"
            placeholder="Search sneakers, apparel"
            class="h-10 bg-card pl-9 pr-3 text-sm text-foreground hover:border-foreground/30 focus-visible:border-foreground focus-visible:ring-foreground/10"
          />
        </label>

        <UiButton
          as-child
          variant="outline"
          size="icon-lg"
          class="h-10 w-10 bg-card text-muted-foreground hover:bg-card hover:text-foreground"
        >
          <NuxtLink
            to="/wishlist"
            aria-label="Wishlist"
          >
            <Icon
              name="lucide:heart"
              class="h-4 w-4"
              aria-hidden="true"
            />
          </NuxtLink>
        </UiButton>

        <UiButton
          as-child
          variant="outline"
          size="icon-lg"
          class="h-10 w-10 bg-card text-muted-foreground hover:bg-card hover:text-foreground"
        >
          <NuxtLink
            to="/cart"
            aria-label="Cart"
          >
            <Icon
              name="lucide:shopping-bag"
              class="h-4 w-4"
              aria-hidden="true"
            />
          </NuxtLink>
        </UiButton>

        <ThemeToggle />
      </div>
    </div>
  </header>
</template>
