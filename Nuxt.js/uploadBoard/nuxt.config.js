import path from 'path'

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  static: { prefix: false },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'uploadBoard',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: 'http://localhost:3000/',
  },

  srcDir: 'frontend/',

  // 8/4 일 테스트 image upload 관련 테스트
  // alias: {
  //   uploadPath: path.resolve(__dirname, './FileStorage/upload'),
  //   'static/upload': path.resolve(__dirname, './FileStorage/upload'),
  // },
  // build: {
  //   publicPath: '/public/',
  // },
  serverMiddleware: [
    { path: '/test', handler: path.join(__dirname, '/backend/test.js') },
    { path: '/Storage', handler: path.join(__dirname, '/backend/Storage.js') },
    {
      path: '/sendData',
      handler: path.join(__dirname, '/backend/sendData.js'),
    },
  ],
}
