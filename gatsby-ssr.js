import React from 'react'
import { Provider } from 'react-redux'
import { renderToString } from 'react-dom/server'
import { extractCritical, renderStylesToString } from 'emotion-server'
import Layout from 'Containers/Layout'
import { store } from './src/store'
import { cache } from 'emotion'
import { CacheProvider } from '@emotion/core'

export const replaceRenderer = ({ setHeadComponents, bodyComponent, replaceBodyHTMLString }) => {
  const ConnectedBody = () => (
    <Provider store={store}>
      <CacheProvider value={cache}>
        {bodyComponent}
      </CacheProvider>
    </Provider>
  )

  const html = renderStylesToString(renderToString(<ConnectedBody/>))

  // const { html, ids, css } = extractCritical(renderToString(<ConnectedBody/>))

  // const criticalStyle = <style dangerouslySetInnerHTML={{ __html: css }} />
  // const criticalIds = (
  //   <script
  //     dangerouslySetInnerHTML={{
  //       __html: `window.__EMOTION_CRITICAL_CSS_IDS__ = ${JSON.stringify(ids)};`,
  //     }}
  //   />
  //   )
  // setHeadComponents([criticalIds, criticalStyle])
  replaceBodyHTMLString(html)
}

export const wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>
}