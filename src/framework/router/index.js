import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from '../home';
import PersonaManager from '../personalManager';
import Login from '../login';
import VideoShow from '../videoShow';

const Router = () => {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Home} />
            <Route path="/reset_password" component={PersonaManager} />
            <Route path="/video" component={VideoShow} />
            <Route path="/login" component={Login} />
        </BrowserRouter>
    );
};

export default Router;
