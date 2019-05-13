module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'GeoJSON',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'description', content: 'Application permettant de visualiser des données géospatiales au format GeoJSON' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** CSS
  */
  css: [
    '@/assets/main.scss'
  ],
  /*
  ** Router
  */
  router: {
    linkActiveClass: 'active'
  },
  /*
  ** CSS
  */
  plugins: [
    { src: '~/plugins/localStorage.js', ssr: false }
  ],
  /*
  ** Modules
  */
  modules: [
    ['nuxt-leaflet'],
    ['bootstrap-vue/nuxt', {
      bootstrapCSS: false,
      bootstrapVueCSS: false
    }],
    ['@nuxtjs/google-analytics', {
      id: 'UA-134146097-2'
    }],
    ['nuxt-fontawesome', {
      imports: [{
        set: '@fortawesome/free-solid-svg-icons',
        icons: [
          'faPencilAlt', 'faTrash','faMapPin',
          'faPlus', 'faEyeSlash', 'faEye'
        ]
      }]
    }]
  ],
  /*
  ** Customize the progress bar color
  */
  loading: false,
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
