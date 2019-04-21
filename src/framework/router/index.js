import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from '../home';
import PersonaManager from '../personalManager';

export default  class Router extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <BrowserRouter>
                <div
                    className={`framework-router`}
                >
                    <header>
                        工具集
                    </header>
                    <main>
                        <Route path="/" exact component={Home} />
                        <Route path="/reset_password" component={PersonaManager} />
                    </main>
                </div>
            </BrowserRouter>
        );
    }
}