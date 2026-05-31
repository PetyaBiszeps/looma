export function useTheme() {
  // Init
  const colorMode = useColorMode()

  // Constants
  const isDark = computed(() => colorMode.value === 'dark')

  // Methods
  function toggleTheme() {
    if (isDark.value) {
      return colorMode.preference === 'dark'
    }
    return colorMode.preference === 'light'
  }

  return {
    isDark,
    colorMode,
    toggleTheme
  }
}
