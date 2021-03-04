import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import ReduxPromise from 'redux-promise'; 
import { applyMiddleware, compose, createStore } from 'redux';
import { Provider } from 'react-redux';
import RootReducer from './reducers';

const finalCreateStore = compose(
  applyMiddleware(ReduxPromise),
  window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
)(createStore);

const store = finalCreateStore(RootReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
