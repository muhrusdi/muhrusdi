<<<<<<< HEAD
const path = require('path')

exports.onCreateBabelConfig = ({ actions, stage }) => {
  actions.setBabelPlugin({
    name: 'babel-plugin-emotion',
    stage,
    options: {
      sourceMap: stage === 'develop'
    }
  })
  actions.setBabelPreset({
    name: `@emotion/babel-preset-css-prop`,
    options: {
      sourceMap: process.env.NODE_ENV !== `production`,
      autoLabel: process.env.NODE_ENV !== `production`
=======
require('dotenv').config()

const path = require('path')
const Dotenv = require('dotenv-webpack')

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
>>>>>>> f8988be5cfedc7fe74eeb838cb82a8757968ad4a
    },
  })
}

exports.onCreateWebpackConfig = ({
  stage, getConfig, rules, loaders, actions
 }) => {
<<<<<<< HEAD
  actions.setWebpackConfig({
    resolve: {
      alias: {
        Components: path.resolve(__dirname, 'src/components/'),
        Containers: path.resolve(__dirname, 'src/containers/'),
        Images: path.resolve(__dirname, 'src/images/'),
        Actions: path.resolve(__dirname, 'src/redux/actions'),
        Store: path.resolve(__dirname, 'src/store.js'),
        Reducers: path.resolve(__dirname, 'src/redux/reducers'),
        Types: path.resolve(__dirname, 'src/redux/types')
      }
    }
  });
=======
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
>>>>>>> f8988be5cfedc7fe74eeb838cb82a8757968ad4a
 }