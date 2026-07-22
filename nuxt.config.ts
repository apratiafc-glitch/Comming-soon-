// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // Runtime config — server-side secrets read from .env
  runtimeConfig: {
    hrPasswordHash: process.env.HR_PASSWORD_HASH || '$2b$12$zy90hILEip9BVblNO8H0zuBAzH.wZpgqANwZcNkZQsSEzwImO.UvK',
  },



  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },

  // Modules
  modules: [
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt'
  ],

  // Tailwind CSS configuration
  tailwindcss: {
    cssPath: '~/assets/css/main.css',
    configPath: 'tailwind.config',
    exposeConfig: {
      level: 2
    }
  },

  // Vite configuration
  vite: {
    optimizeDeps: {
      include: [
        '@heroicons/vue/24/outline'
      ]
    }
  },

  // App configuration
  app: {
    head: {
      title: 'Coming Soon - Aprati Foods Cambodia',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Coming Soon - Aprati Foods Cambodia. We are preparing something special for you.' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/images/web.ico' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap' }
      ]
    }
  }
})
