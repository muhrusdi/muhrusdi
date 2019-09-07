require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: `Muhammad Rusdi`,
    description: `A Front End Engineer, building web with modern stack. Care about design and new technology.`,
    author: `https://twitter.com/muhrusdi`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800
            }
          }
        ]
      }
    },
    `gatsby-plugin-sharp`,
    // '@contentful/gatsby-transformer-contentful-richtext',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `muhrusdi.com`,
        short_name: `muhrusdi`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `minimal-ui`,
        icon: `src/images/muhrusdi.png`, // This path is relative to the root of the site.
      },
    },
    // {
    //   resolve: "gatsby-source-graphql",
    //   options: {
    //     // This type will contain remote schema Query type
    //     typeName: "MRGRAPH",
    //     // This is field under which it's accessible
    //     fieldName: "mrgraph",
    //     // Url to query from
    //     url: "http://localhost:1337/graphql",
    //   },
    // },
    // {
    //   resolve: 'gatsby-source-contentful',
    //   options: {
    //     spaceId: process.env.CONTENTFUL_SPACE_ID,
    //     // Learn about environment variables: https://gatsby.dev/env-vars
    //     accessToken: process.env.CONTENTFUL_AT,
    //   },
    // },
    {
      resolve: "gatsby-source-graphql",
      options: {
        // This type will contain remote schema Query type
        typeName: "WPGRAPHQLCMS",
        // This is field under which it's accessible
        fieldName: "wpgraphql",
        // Url to query from
        url: process.env.HOST_DEV,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
