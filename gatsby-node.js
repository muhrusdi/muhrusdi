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