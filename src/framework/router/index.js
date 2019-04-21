import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from '../home';
import PersonaManager from '../personalManager';

const Router = () => {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Home} />
            <Route path="/reset_password" component={PersonaManager} />
        </BrowserRouter>
    );
};

export default Router;
