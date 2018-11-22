import React from 'react';
import { Provider } from 'react-redux';
import { renderToString } from 'react-dom/server';
import { extractCritical } from 'emotion-server';
import { store } from './src/store';

export const replaceRenderer = ({
  bodyComponent,
  replaceBodyHTMLString,
  setHeadComponents
}) => {

  const App = () => (
    <Provider store={store}>{bodyComponent}</Provider>
  )

  replaceBodyHTMLString(renderToString(<App/>))
}