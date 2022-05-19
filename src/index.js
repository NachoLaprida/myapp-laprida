
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import { CartContextProvider } from './store/CartContextProvider';
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyATbg3gBmvAM05_-yPSg7pM1rEIflV8Tt0",
  authDomain: "myapp-laprida-d5961.firebaseapp.com",
  projectId: "myapp-laprida-d5961",
  storageBucket: "myapp-laprida-d5961.appspot.com",
  messagingSenderId: "16919283676",
  appId: "1:16919283676:web:646c4d5c9cade1e8b5f119"
};

initializeApp(firebaseConfig)

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <CartContextProvider>
        <App />
      </CartContextProvider>
    </BrowserRouter>  
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
