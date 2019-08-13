import { BrowserRouter, Route } from 'react-router-dom';
import React from 'react';

import Login from './pages/Login.js'
import Main from './pages/Main.js'

export default function Routes() {
    return (
        <BrowserRouter>
        <Route path='/' exact component={Login}/>
        <Route path='/main' component={Main}/>
        </BrowserRouter>
    );
}