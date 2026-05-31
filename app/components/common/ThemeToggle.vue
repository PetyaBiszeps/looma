<script setup lang="ts">
import { Button } from '~/components/ui/button'

const { toggleTheme } = useTheme()
</script>

<template>
  <Button
    type="button"
    variant="outline"
    size="icon-lg"
    class="h-10 w-10 bg-card text-muted-foreground hover:bg-card hover:text-foreground"
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
  </Button>
</template>
