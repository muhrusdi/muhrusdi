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
    },
  })
}

exports.onCreateWebpackConfig = ({
  stage, getConfig, rules, loaders, actions
 }) => {
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
 }