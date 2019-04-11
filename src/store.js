import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import promise from 'redux-promise-middleware'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'

import reducer from './redux/reducers'

const composeEnhancers = composeWithDevTools({})

const _middlewares = [];

if (process.env.NODE_ENV === `development`) {
  const { createLogger } = require(`redux-logger`)
  _middlewares.push(createLogger())
}

const middlewares = applyMiddleware(promise, thunk, ..._middlewares)
const enhancer = composeEnhancers(middlewares)

export const store = createStore(reducer, enhancer)