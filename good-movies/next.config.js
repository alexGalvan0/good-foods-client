const withPWA = require("next-pwa")({
  dest: "public",
});

module.exports = withPWA({
  images: {
    domains: ["m.media-amazon.com"],

    distDir: "build",
  },
});
