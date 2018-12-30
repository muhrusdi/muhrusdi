import React from 'react'
import { hydrate } from 'emotion'
import { Provider } from 'react-redux'
import { TOGGLE, PATHNAME, SHOW_ABOUT } from 'Types/globalnavType'
import Layout from 'Containers/Layout'
import { store } from 'Store'
import { cache } from 'emotion'
import { CacheProvider } from '@emotion/core'

export const wrapRootElement = ({ element }) => {
  const ConnectedRootElement = (
    <Provider store={store}>
      {/* <CacheProvider value={cache}> */}
        {element}
      {/* </CacheProvider> */}
    </Provider>  
  )
  return ConnectedRootElement
}

export const wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>
}

export const onRouteUpdate = ({location}) => {
  store.dispatch({type: TOGGLE, toggle: false})
  store.dispatch({type: SHOW_ABOUT, showAbout: false})
  store.dispatch({type: PATHNAME, pathname: location.pathname})
}

export const onClientEntry = () => {
  if (
    /* eslint-disable no-underscore-dangle */
    typeof window !== `undefined` &&
    typeof window.__EMOTION_CRITICAL_CSS_IDS__ !== `undefined`
  ) {
    hydrate(window.__EMOTION_CRITICAL_CSS_IDS__);
  }
};
