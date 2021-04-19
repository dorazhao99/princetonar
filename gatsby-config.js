
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
    {
      resolve: `gatsby-plugin-env-variables`,
      options: {
        allowList: ["MAPBOX"]
      },
    },
    `gatsby-transformer-remark`,
  ],
  pathPrefix: "/princetonar",
}
