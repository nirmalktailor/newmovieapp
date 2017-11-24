import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from 'react-router-dom';

const getLoginStatus = localStorage.getItem("loginStatus");


ReactDOM.render(
<BrowserRouter>
    <App loginStatus = {getLoginStatus}/>
</BrowserRouter>, document.getElementById('root'));
