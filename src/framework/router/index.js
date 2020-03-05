import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from '../home';
import PersonaManager from '../personalManager';
import Login from '../login';
import { UploadF } from '../../component/index';
import Main from '../../framework/main';

const Router = () => {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Main} />
            <Route path="/home" component={Home} />
            <Route path="/reset_password" component={PersonaManager} />
            <Route path="/login" component={Login} />
            <Route path="/upload" component={UploadF} />
        </BrowserRouter>
    );
};

export default Router;
