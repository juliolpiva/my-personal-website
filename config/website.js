const tailwind = require('../tailwind')

module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"

  siteTitle: 'JulioLP', // Navigation and Site Title
  siteTitleAlt: 'JulioLP', // Alternative Site title for SEO
  siteTitleShort: 'JulioLP', // short_name for manifest
  siteUrl: 'https://juliolp.com', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  siteLogo: '/logo.png', // Used for SEO and manifest
  siteDescription: 'Im the web developer who will create your next generation web platform!',

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  userTwitter: '@_JulioLP_', // Twitter Username
  ogSiteName: 'JulioLPiva', // Facebook Site Name
  ogLanguage: 'en_US', // Facebook Language

  // Manifest and Progress color
  themeColor: tailwind.colors.blue,
  backgroundColor: tailwind.colors.black,
}
