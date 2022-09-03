const withPWA = require('next-pwa')({
  dest: 'public'
})
module.exports = withPWA({
  reactStrictMode: true,
  images: {
    loader: 'imgix',
    path: '/',
  },
})
