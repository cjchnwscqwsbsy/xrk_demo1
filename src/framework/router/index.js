import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from '../home';
import PersonaManager from '../personalManager';
import Login from '../login';
import { UploadF } from '../../component/index';

const Router = () => {
    return (
        <BrowserRouter>
            <Route path="/" exact component={UploadF} />
            <Route path="/reset_password" component={PersonaManager} />
            <Route path="/login" component={Login} />
            <Route path="/home" component={Home} />
        </BrowserRouter>
    );
};

export default Router;
