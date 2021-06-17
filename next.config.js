const withSass = require('@zeit/next-sass');
// const gsap = require('gsap');
module.exports = {
  env: {
    RAPID_API_KEY: process.env.RAPID_API_KEY,
    RAPID_API_HOST: process.env.RAPID_API_HOST,
    APP_API_HOST: process.env.APP_API_HOST,
    RAPID_API_CORONAVIRUS_STATISTICS: process.env.RAPID_API_CORONAVIRUS_STATISTICS,
    APP_API_HOST_CORONAVIRUS_STATISTICS: process.env.APP_API_HOST_CORONAVIRUS_STATISTICS,
  },
};
