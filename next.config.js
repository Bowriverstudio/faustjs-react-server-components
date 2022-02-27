const { withFaust } = require("@faustjs/next");

/**
 * @type {import('next').NextConfig}
 **/
module.exports = withFaust({
  experimental: {
    runtime: "nodejs",
    serverComponents: true,
  },
});
