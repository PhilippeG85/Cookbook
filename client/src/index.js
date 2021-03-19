import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.scss';
import App from './App';
import { IsLoggedInProvider } from './logInContext';
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(
    <IsLoggedInProvider>
        <App />
    </IsLoggedInProvider>
, document.getElementById('root'));
