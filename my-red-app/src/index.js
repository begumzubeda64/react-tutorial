import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Counter from './components/Counter';
import counter from './reducers/index';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux';

const store = createStore(counter); //creates store with counter reducer
console.log(store.getState());

function render() {
  ReactDOM.render(
    <Counter
      value={store.getState()} //since only one state available will return count value
      onIncrement={() => store.dispatch({ type: 'INCREMENT' })} //looks for action on the reducer function
      onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
    />,
    document.getElementById('root')
  );
}

render();
store.subscribe(render); //called when store updated, this re renders each time store updates

reportWebVitals();
