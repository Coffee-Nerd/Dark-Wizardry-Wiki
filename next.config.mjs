import nextra from 'nextra'

const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  search: {
    codeblocks: true,
    indexContent: true  // Ensure all content is indexed for search
  }
})

export default withNextra({
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  basePath: '',
  assetPrefix: ''
})
