const { withPlausibleProxy } = require("next-plausible");

module.exports = withPlausibleProxy()({
  images: {
    domains: ["cdn.sanity.io"],
  },
  experimental: { images: { allowFutureImage: true }, appDir: true },
});
