export default {
  mode: 'spa',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['@/node_modules/element-ui/lib/theme-chalk/index.css'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module',
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
    ['@/modules/i18n.js', { defaultLocale: 'zh' }]
  ],
  /*
   ** Nuxt.js modules
   */
  modules: ['nuxt-element-ui'],

  elementUI: {
    components: [
      'Button',
      'Row',
      'Col',
      // 'Card',
      'Form',
      'Input',
      'FormItem',
      'Select',
      'Option',
      'Icon',
      'Image',
      'Dropdown',
      'DropdownMenu',
      'DropdownItem'
    ]
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  },
  generate: {
    // routes: ['/', '/about', '/en', '/en/about']
  },
  router: {
    middleware: 'i18n',
    mode: 'hash',
    scrollBehavior: () => {}
  }
}
