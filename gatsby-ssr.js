// import React from 'react'
// import { GlobalStyles } from 'Components'
// import Layout from 'Containers/layout'
// import { ThemeContextProvider } from 'Hooks'

// export const wrapRootElement = ({ element }) => {
//   return (
//     <ThemeContextProvider>
//       {element}
//     </ThemeContextProvider>
//   )
// }

// export const wrapPageElement = ({element}) => {
//   return (
//     <Layout>
//       { element }
//     </Layout>
//   )
// }

import React from "react"
import { renderToString } from "react-dom/server"
import Layout from 'Containers/layout'
import { ThemeContextProvider } from 'Hooks'

export const replaceRenderer = ({ bodyComponent, replaceBodyHTMLString }) => {
  const ConnectedBody = () => (
    <ThemeContextProvider>
        {bodyComponent}
    </ThemeContextProvider>
  );
  replaceBodyHTMLString(renderToString(<ConnectedBody />));
};

export const wrapPageElement = ({element}) => {
  return (
    <Layout>
      { element }
    </Layout>
  )
}