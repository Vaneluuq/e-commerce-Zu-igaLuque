import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBmVnj2GIcr1bsw02Vg08kfZhU3Dlv7Cjk",
  authDomain: "e-commerce-dulcetarde.firebaseapp.com",
  projectId: "e-commerce-dulcetarde",
  storageBucket: "e-commerce-dulcetarde.appspot.com",
  messagingSenderId: "11003428840",
  appId: "1:11003428840:web:2dfe03403a3354ce8cae5d"
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
