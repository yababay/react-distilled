import React from 'react'
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App who="World"/>
  </React.StrictMode>,
  document.querySelector('main')
);

