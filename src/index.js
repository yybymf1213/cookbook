import React from 'react';
import ReactDOM from 'react-dom';
import 'antd-mobile/dist/antd-mobile.css';
import './assets/style/common.css'
import App from './App';
import {LocationProvider} from 'context/LocationContext'

ReactDOM.render(
  <LocationProvider>
    <App />
  </LocationProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
