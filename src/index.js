import React from 'react';
import ReactDOM from 'react-dom';
import Game from './Game';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <h1>4 in a row</h1>
    <Game />
  </React.StrictMode>,
  document.getElementById('root')
);
