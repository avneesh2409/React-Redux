import React from 'react';
import {render} from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import combineReducer from './reducers'
import App from './App'
import * as serviceWorker from './serviceWorker'

// ReactDOM.render(<App />, document.getElementById('root'));



const store = createStore(combineReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
