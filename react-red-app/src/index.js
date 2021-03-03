import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { compose, createStore } from 'redux';
import App from './components/App';
import './index.css';
import RootReducer from './reducers';
import reportWebVitals from './reportWebVitals';

const finalCreateStore = compose(
	window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore); //enable redux dev tool

const store = finalCreateStore(RootReducer);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
