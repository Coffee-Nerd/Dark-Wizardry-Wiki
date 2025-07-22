const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  search: {
    codeblocks: true,
    indexContent: true  // Ensure all content is indexed for search
  }
})

module.exports = withNextra({
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  basePath: process.env.NODE_ENV === 'production' ? '/Dark-Wizardry-Wiki' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/Dark-Wizardry-Wiki/' : ''
})
