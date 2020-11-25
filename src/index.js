import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Home from './screens/home/Home';

ReactDOM.render(
  <Home />,
  document.getElementById('root')
);

registerServiceWorker();
