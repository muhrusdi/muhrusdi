import React from 'react'
import { GlobalStyles } from 'Components'
import Layout from 'Containers/layout'
import { ThemeContextProvider } from 'Hooks'

export const wrapRootElement = ({ element }) => {
  return (
    <ThemeContextProvider>
      {element}
    </ThemeContextProvider>
  )
}

export const wrapPageElement = ({element}) => {
  return (
    <Layout>
      { element }
    </Layout>
  )
}