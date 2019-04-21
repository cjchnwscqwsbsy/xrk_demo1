import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { DemoComponent } from 'component';
import './index.less';

const PrimaryLayout = () => (
    <div className="primary-layout">
        <header>
            Our React Router 4 App
        </header>
        <main>
            <Route path="/" exact component={HomePage} />
            <Route path="/users" component={UsersPage} />
        </main>
    </div>
);

const HomePage =() => <div>Home Page</div>;
const UsersPage = () => <div>Users Page</div>;

export default  class Home extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <BrowserRouter>
                <div
                    className={`app-container`}
                >
                    <PrimaryLayout/>
                </div>
            </BrowserRouter>
        );
    }
}