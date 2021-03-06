import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Normalize from 'normalize.css';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import App from './App';

injectTapEventPlugin();

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
