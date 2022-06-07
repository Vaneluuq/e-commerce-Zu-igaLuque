import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBmVnj2GIcr1bsw02Vg08kfZhU3Dlv7Cjk",
  authDomain: "e-commerce-dulcetarde.firebaseapp.com",
  projectId: "e-commerce-dulcetarde",
  storageBucket: "e-commerce-dulcetarde.appspot.com",
  messagingSenderId: "11003428840",
  appId: "1:11003428840:web:2dfe03403a3354ce8cae5d",
};

initializeApp(firebaseConfig);

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<App />);

reportWebVitals();
