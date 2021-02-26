/* ALTERAÇÕES INDEX - 26/02/2021 by Leonardo Meira

- index.js agora renderiza o site de acordo com o roteamento gerenciado pelo App.js

*/

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import './styles/index.css'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);