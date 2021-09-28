module.exports = {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'JSConf Mexico 2021',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'November 2021 - Online. JSConf MX is a platform created for all the Javascript community. Everybody has a story, we are also a place to share ideas, knowledge and experiences.'
      },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: 'JSConf Mexico 2021'
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content: 'November 2021 - Online. JSConf MX is a platform created for all the Javascript community. Everybody has a story, we are also a place to share ideas, knowledge and experiences.'
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: '/seo-image.png'
      },
      {
        hid: 'twitter:image:alt',
        name: 'twitter:image:alt',
        content: 'JSConf Mexico 2021'
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'JSConf Mexico 2021'
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: 'November 2021 - Online. JSConf MX is a platform created for all the Javascript community. Everybody has a story, we are also a place to share ideas, knowledge and experiences.'
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: '/seo-image.png'
      },
      {
        hid: 'og:image:secure_url',
        property: 'og:image:secure_url',
        content: '/seo-image.png'
      },
      {
        hid: 'og:image:alt',
        property: 'og:image:alt',
        content: 'JSConf Mexico 2021'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/fonts.css',
    '~/assets/scss/fonts.scss',
    '~/assets/scss/colors.scss',
    '~/assets/scss/breaks.scss',
    '~/assets/scss/general.scss',
    '~/assets/scss/grid.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/style-resources',
    'nuxt-i18n'
  ],

  i18n: {
    lazy: true,
    langDir: 'lang/',
    locales: [
      {
        code: 'es',
        file: 'es'
      },
      {
        code: 'en',
        file: 'en'
      }
    ],
    defaultLocale: 'es'
  },

  styleResources: {
    scss: ['./assets/scss/*.scss']
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
