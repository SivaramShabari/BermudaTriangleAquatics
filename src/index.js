import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBPImRxBI2OiZqUzeRiPYNNPjWVW1KCm3M",
  authDomain: "bermuda-triangle-aquatics.firebaseapp.com",
  projectId: "bermuda-triangle-aquatics",
  storageBucket: "bermuda-triangle-aquatics.appspot.com",
  messagingSenderId: "119735933143",
  appId: "1:119735933143:web:7a5d9238299199706ff892",
  measurementId: "G-C5K4JVXW58"
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
