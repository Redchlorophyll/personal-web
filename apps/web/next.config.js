const withTM = require('next-transpile-modules')(['ui']);

module.exports = withTM({
  reactStrictMode: true,
  images: {
    domains: ['i.pinimg.com', 'lh3.googleusercontent.com', 'media.licdn.com'],
  },
});
