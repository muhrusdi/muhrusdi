import React from 'react'
import { Provider } from 'react-redux'
import { renderToString } from 'react-dom/server'
import { extractCritical } from 'emotion-server'
import Layout from 'Containers/Layout'
import { store } from './src/store'
import { cache } from 'emotion'
import { CacheProvider } from '@emotion/core'

export const replaceRenderer = ({bodyComponent, replaceBodyHTMLString }) => {
  const ConnectedBody = () => (
    <Provider store={store}>
      <CacheProvider value={cache}>
        {bodyComponent}
      </CacheProvider>
    </Provider>
  )
  replaceBodyHTMLString(<ConnectedBody/>)
}

export const wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>
}