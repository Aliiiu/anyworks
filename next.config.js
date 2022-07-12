const withPlugins = require('next-compose-plugins')
const withImages = require('next-images')

module.exports = withPlugins([withImages], {
  reactStrictMode: true,
  // publicRuntimeConfig: {
  //   // Will be available on both server and client
  //   APP_NAME: process.env.APP_NAME,
  // },
  images: {
    loader: 'akamai',
    path: '/',
  },
  exportPathMap: function () {
    return {
      '/': { page: '/' },
      '/about': { page: '/about' },
      '/services': { page: '/services' },
      '/faq': { page: '/faq' },
      '/contact-us': { page: '/contact-us' },
      '/privacy-policy': { page: '/privacy-policy' },
      '/terms-of-use': { page: '/terms-of-use' },
    }
  },
})
