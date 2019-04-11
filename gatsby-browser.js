import React from 'react'
import { Provider } from 'react-redux'
import { TOGGLE, PATHNAME, SHOW_ABOUT } from 'Types/globalnavType'
import Layout from 'Containers/Layout'
import { store } from 'Store'
import { GlobalStyles } from 'reus'

export const wrapRootElement = ({ element }) => {
  const ConnectedRootElement = (
    <Provider store={store}>
      <>
        <GlobalStyles/>
        { element }
      </>
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