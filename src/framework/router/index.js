import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from '../home';
import PersonaManager from '../personalManager';
import { UploadF } from '../../component/index';
import Main from '../../framework/main';
import Radar from '../radar';

const Router = () => {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Radar} />
            <Route path="/Main" exact component={Main} />
            <Route path="/home" component={Home} />
            <Route path="/reset_password" component={PersonaManager} />
            <Route path="/upload" component={UploadF} />
        </BrowserRouter>
    );
};

export default Router;
