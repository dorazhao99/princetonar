
module.exports = {
  siteMetadata: {
    title: `Princeton AR Project`,
    description: `Princeton AR project`,
    author: `@princetonar`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/src/markdown-pages`,
      },
    },
    `gatsby-transformer-remark`,
  ],
  pathPrefix: "/princetonar",
}
