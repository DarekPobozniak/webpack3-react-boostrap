import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App';

const root = document.getElementById('app');
console.log('process', process.env.NODE_ENV);
ReactDOM.render(<App />, root);
