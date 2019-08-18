import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

firebase.initializeApp({
    apiKey: "AIzaSyDOPhjnlVCT7MuquMGxdPQL0zlD1a3jm9E",
    authDomain: "examen1ux-f9cde.firebaseapp.com",
    databaseURL: "https://examen1ux-f9cde.firebaseio.com",
    projectId: "examen1ux-f9cde",
    storageBucket: "",
    messagingSenderId: "361950530595",
    appId: "1:361950530595:web:1040618732739c2a"
});

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
