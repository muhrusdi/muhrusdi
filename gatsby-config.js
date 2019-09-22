require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: `Muhammad Rusdi`,
    description: `A Front End Engineer, building web with modern stack. Care about design and new technology.`,
    author: `https://twitter.com/muhrusdiid`,
    siteUrl: "https://muhrusdi.com",
    fbId: process.env.FB_ID,
    gaId: process.env.GA_ID
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
    // `gatsby-plugin-emotion`,
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
    {
      resolve: "gatsby-source-graphql",
      options: {
        // This type will contain remote schema Query type
        typeName: "WPGRAPHQLCMS",
        // This is field under which it's accessible
        fieldName: "wpgraphql",
        // Url to query from
        url: process.env.HOST_PROD,
      },
    },
    `gatsby-plugin-netlify`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GA_ID,
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        exclude: ["/preview/**"],
        // Delays sending pageview hits on route update (in milliseconds)
        pageTransitionDelay: 0,
        // Enables Google Optimize using your container Id
        // optimizeId: "YOUR_GOOGLE_OPTIMIZE_TRACKING_ID",
        // Enables Google Optimize Experiment ID
        // experimentId: "YOUR_GOOGLE_EXPERIMENT_ID",
        // Set Variation ID. 0 for original 1,2,3....
        // variationId: "YOUR_GOOGLE_OPTIMIZE_VARIATION_ID",
        // Any additional optional fields
        sampleRate: 5,
        siteSpeedSampleRate: 10,
        cookieDomain: "muhrusdi.com",
      },
    },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: process.env.GTAG_ID,
  
        // Include GTM in development.
        // Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: false,
  
        // datalayer to be set before GTM is loaded
        // should be an object or a function that is executed in the browser
        // Defaults to null
        defaultDataLayer: function() {
          return {
            pageType: window.pageType,
          }
        },
  
        // Specify optional GTM environment details.
        // gtmAuth: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_AUTH_STRING",
        // gtmPreview: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_PREVIEW_NAME",
        // dataLayerName: "YOUR_DATA_LAYER_NAME",
      },
    },
    {
      resolve: `gatsby-plugin-gtag`,
      options: {
        // your google analytics tracking id
        trackingId: process.env.GA_ID,
        // Puts tracking script in the head instead of the body
        head: false,
        // enable ip anonymization
        anonymize: true,
      },
    },
    {
      resolve: `gatsby-plugin-advanced-sitemap`,
      options: {
           // 1 query for each data type
          query: `
          {
            wpgraphql {
              posts {
                edges {
                  node {
                    title
                    excerpt
                    date
                    modified
                    slug
                    author {
                      username
                    }
                    content
                  }
                }
              }
              pages {
                edges {
                  node {
                    title
                  }
                }
              }
              categories {
                edges {
                  node {
                    name
                  }
                }
              }
              tags {
                edges {
                  node {
                    name
                  }
                }
              }
            }
          }`,
          mapping: {
            // Each data type can be mapped to a predefined sitemap
            // Routes can be grouped in one of: posts, tags, authors, pages, or a custom name
            // The default sitemap - if none is passed - will be pages
            allPost: {
                sitemap: `posts`,
            },
            allTag: {
                sitemap: `tags`,
            },
            allCategory: {
                sitemap: `categories`,
            },
          },
          exclude: [
            `/dev-404-page`,
            `/404`,
            `/404.html`,
            `/offline-plugin-app-shell-fallback`,
            /(\/)?hash-\S*/, // you can also pass valid RegExp to exclude internal tags for example
          ],
          createLinkInHead: true, // optional: create a link in the `<head>` of your site
          addUncaughtPages: true, // optional: will fill up pages that are not caught by queries and mapping and list them under `sitemap-pages.xml`
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
    // `gatsby-plugin-remove-serviceworker`,
  ],
}
