import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@pinia/nuxt',
    '@nuxt/fonts',
    '@nuxtjs/color-mode',
    '@nuxtjs/i18n',
    '@nuxt/image',
    '@nuxt/icon',
    'shadcn-nuxt'
  ],
  devtools: {
    enabled: true
  },
  app: {
    head: {
      title: 'TEMPLATE',
      link: [{
        rel: 'icon', type: 'image/png', href: '/favicon.ico'
      }]
    },
    pageTransition: {
      // name: 'slide-up', mode: 'out-in'
    }
  },
  css: ['~/assets/css/main.css'],
  colorMode: {
    storage: 'cookie',
    preference: 'system',
    fallback: 'light',
    classSuffix: ''
  },
  compatibilityDate: '2025-07-15',
  vite: {
    plugins: [tailwindcss()],
    optimizeDeps: {
      include: [
        'clsx',
        'reka-ui',
        '@lucide/vue',
        '@vueuse/core',
        'tailwind-merge',
        'class-variance-authority'
      ]
    }
  },
  eslint: {
    config: {
      stylistic: true,
      standalone: true
    }
  },
  fonts: {
    defaults: {
      weights: [400, 500, 600, 700, 800],
      styles: ['normal'],
      subsets: ['latin', 'cyrillic']
    }
  },
  i18n: {
    restructureDir: 'app/',
    locales: [{
      code: 'en', name: 'English', language: 'en-US', file: 'en.json'
    }, {
      code: 'uk', name: 'Українська', language: 'uk-UA', file: 'uk.json'
    }],
    defaultLocale: 'en',
    strategy: 'no_prefix'
  },
  icon: {
    cssLayer: 'components',
    customCollections: [{
      dir: '~/app/assets/svgs',
      prefix: 'local'
    }]
  },
  shadcn: {
    prefix: 'Ui'
    // componentDir: '@/components/ui'
  }
})
