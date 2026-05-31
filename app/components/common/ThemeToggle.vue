<script setup lang="ts">
const { toggleTheme } = useTheme()
</script>

<template>
  <button
    type="button"
    class="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border bg-card text-muted-foreground transition-colors hover:text-foreground focus-visible:ring-2 focus-visible:ring-foreground/10 focus-visible:outline-none"
    aria-label="Toggle color mode"
    @click="toggleTheme"
  >
    <Icon
      name="lucide:sun"
      class="hidden h-4 w-4 dark:block"
      aria-hidden="true"
    />
    <Icon
      name="lucide:moon"
      class="h-4 w-4 dark:hidden"
      aria-hidden="true"
    />
  </button>
</template>
