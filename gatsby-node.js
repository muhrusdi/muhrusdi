require('dotenv').config()

const path = require('path')
const Dotenv = require('dotenv-webpack')
const { createRemoteFileNode } = require(`gatsby-source-filesystem`)

const aliases = {
  Containers: path.resolve(__dirname, "src/containers"),
  Components: path.resolve(__dirname, "src/components"),
  Templates: path.resolve(__dirname, "src/templates"),
  Images: path.resolve(__dirname, "src/images"),
  Utils: path.resolve(__dirname, "src/components/utilities"),
  Layout: path.resolve(__dirname, "src/containers/layouts"),
  Hocs: path.resolve(__dirname, "src/hocs"),
  Hooks: path.resolve(__dirname, "src/hooks"),
  Contexts: path.resolve(__dirname, "src/contexts"),
  Config: path.resolve(__dirname, "config"),
}

exports.onCreateBabelConfig = ({ actions, stage }) => {
  actions.setBabelPreset({
    name: `@emotion/babel-preset-css-prop`,
    options: {
      sourceMap: stage === 'develop',
      autoLabel: stage === 'develop'
    },
  })
}

exports.createResolvers = ({
  actions,
  cache,
  createNodeId,
  createResolvers,
  store,
  reporter,
}) => {
  const { createNode } = actions
  createResolvers({
    WPGRAPHQLCMS_MediaItem: {
      imageFile: {
        type: `File`,
        resolve(source, args, context, info) {
          return createRemoteFileNode({
            url: source.sourceUrl,
            store,
            cache,
            createNode,
            createNodeId,
            reporter,
          })
        },
      },
    },
  })
}

exports.onCreateWebpackConfig = ({
  stage, getConfig, rules, loaders, actions
 }) => {
   actions.setWebpackConfig({
     resolve: {
       alias: aliases
     },
     plugins: [
      new Dotenv({
        path: path.join(__dirname, '.env'),
        systemvars: true
      })
     ]
   });
 }

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(
    `
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
        }
      }
    `
  )

  if (result.errors) {
    throw result.errors
  }
  
  const posts = result.data.wpgraphql.posts.edges
  const blogDetail = path.resolve(`./src/containers/blog-detail/index.jsx`)

  posts.forEach((post, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node
    const next = index === 0 ? null : posts[index - 1].node

    createPage({
      path: `/blog/${post.node.slug}`,
      component: blogDetail,
      context: {
        slug: post.node.slug,
        previous,
        next,
      },
    })
  })
}

