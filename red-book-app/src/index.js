import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { compose, createStore } from 'redux';
import RootReducer from './reducers';

const finalCreateStore = compose(
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
