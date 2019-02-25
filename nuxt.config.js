module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'GeoJSON',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
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
  ** CSS
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
    ['nuxt-fontawesome', {
      imports: [{
        set: '@fortawesome/free-solid-svg-icons',
        icons: ['faEdit', 'faTrash','faMapPin', 'faPlus', 'faEyeSlash', 'faEye']
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
