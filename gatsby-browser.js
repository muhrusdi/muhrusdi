import React from 'react';
import { hydrate } from 'emotion';
import { Provider } from 'react-redux';

import { store } from './src/store';

export const wrapRootElement = ({ element }) => {
  const ConnectedRootElement = (
    <Provider store={store}>
      {element}
    </Provider>  
  )
  return ConnectedRootElement
}

// exports.onClientEntry = () => {
//   if (
//     /* eslint-disable no-underscore-dangle */
//     typeof window !== `undefined` &&
//     typeof window.__EMOTION_CRITICAL_CSS_IDS__ !== `undefined`
//   ) {
//     hydrate(window.__EMOTION_CRITICAL_CSS_IDS__);
//   }
// };