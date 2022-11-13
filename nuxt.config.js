
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || 'FIN BLockchain Blog',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || 'Blockchain news updates for financial advisors and other financial service providers.' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'assets/images/favicons/favicon.ico' },
      { rel: 'apple-touch-icon', sizes: '180x180', href: 'assets/images/favicons/apple-touch-icon.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: 'assets/images/favicons/favicon-96x96.png' },    
      { rel: "stylesheet", href: "assets/css/bootstrap.min.css" },
      { rel: "stylesheet", href: "assets/css/font-awesome.min.css" },
      { rel: "stylesheet", href: "assets/css/owl.carousel.min.css" },
      { rel: "stylesheet", href: "assets/css/magnific-popup.css" },
      { rel: "stylesheet", href: "assets/css/custom-style.css" },

    ],

    script: [
      { src: "assets/js/jquery.min.js", type: "text/javascript", body: true },
      { src: "assets/js/bootstrap.bundle.min.js", type: "text/javascript", body: true },
      { src: "assets/js/select2.min.js", type: "text/javascript", body: true },
      { src: "assets/js/owl.carousel.min.js", type: "text/javascript", body: true },
      { src: "assets/js/jquery.magnific-popup.min.js", type: "text/javascript", body: true },
      { src: "assets/js/jquery.easing.min.js", type: "text/javascript", body: true },
      { src: "assets/js/custom.js", type: "text/javascript", body: true },
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  
  /*
  ** Nuxt.js modules
  */
  modules: ['@nuxt/content'
  ],
  content: {
    // Options
  },
  /*
  ** optimizedImages
  */
  optimizedImages: {
  },
  target: 'static',
  generate: {
    async routes() {
      const { $content } = require('@nuxt/content')
      const files = await $content().only(['path']).fetch()

      return files.map(file => file.path === '/index' ? '/' : file.path)
    }
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
