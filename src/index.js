import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain:process.env.REACT_APP_AUTHDOMAIN ,
  projectId: process.env.REACT_APP_PROYECTID ,
  storageBucket: process.env.REACT_APP_STORAGEBICKET,
  messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID ,
  appId: process.env.REACT_APP_APPID
};

const app = initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
