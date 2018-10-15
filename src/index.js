import React from 'react';
import ReactDOM from 'react-dom';
import './reset.css';
import './global.styl';
import App from './App.jsx';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render( <App /> , document.getElementById('root'));
registerServiceWorker();