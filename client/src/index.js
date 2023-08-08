// index.js

import React from 'react';
import ReactDOM from 'react-dom';
import './App.css'; // Hubungkan file CSS di sini
import App from './App';
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    {/* <BrowserRouter /> */}
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
