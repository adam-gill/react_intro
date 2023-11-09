import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'; // import our js app to execute
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App /> // removed strict mode so props don't print twice
); // strict mode helps for debugging

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// first thing that executes in the browser
