import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const libraries = [
  { name: 'Backbone.js', url: 'https://backbonejs.org/' },
  { name: 'AngularJS', url: 'https://angularjs.org/' },
  { name: 'jQuery', url: 'https://jquery.com/' },
  { name: 'Prototype', url: 'http://prototypejs.org/' },
  { name: 'React', url: 'https://reactjs.org/' },
  { name: 'Ember', url: 'https://emberjs.com/' },
  { name: 'Knockout.js', url: 'https://knockoutjs.com/' },
  { name: 'Dojo', url: 'https://dojotoolkit.org/' },
  { name: 'Mootools', url: 'https://mootools.net/' },
  { name: 'Underscore', url: 'https://underscorejs.org/' },
  { name: 'Loadlash', url: 'https://lodash.com/' },
  { name: 'Moment', url: 'https://momentjs.com/' },
  { name: 'Express', url: 'https://expressjs.com/' },
  { name: 'Koa', url: 'https://koajs.com/' }
]

ReactDOM.render(
    <App libraries={libraries} />,
  document.getElementById('root')
);

reportWebVitals();
