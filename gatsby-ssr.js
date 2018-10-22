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

  const { html, ids, css } = extractCritical(renderToString(<App/>))

  const criticalStyle = <style dangerouslySetInnerHTML={{ __html: css }} />
  const criticalIds = (
    <script
      dangerouslySetInnerHTML={{
        __html: `window.__EMOTION_CRITICAL_CSS_IDS__ = ${JSON.stringify(ids)};`,
      }}
    />
  )

  setHeadComponents([criticalIds, criticalStyle])
  replaceBodyHTMLString(html)
}