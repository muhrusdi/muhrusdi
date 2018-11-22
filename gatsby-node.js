const path = require('path')

// exports.onCreateBabelConfig = ({ actions }) => {
//   // actions.setBabelPlugin({
//   //   name: `babel-plugin-import`,
//   //   options: {
//   //     libraryName: 'antd',
//   //     style: "css",
//   //   },
//   // })

//   if (process.env.NODE_ENV !== `production`) {
//     actions.setBabelPlugin({
//       name: 'babel-plugin-emotion',
//       options: {
//         sourceMap: true
//       }
//     })
//   } else {
//     actions.setBabelPlugin({
//       name: 'babel-plugin-emotion'
//     })
//   }
  
// }

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