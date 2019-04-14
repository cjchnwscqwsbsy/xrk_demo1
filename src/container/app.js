import React from 'react';
import ReactRouter from 'react-router';
import ReactRouterDom from 'react-router-dom';

export default  class App extends React.Component {
    constructor(props){
        super(props);
        this.myRef = React.createRef();
    }
    componentDidMount(){
        console.log('xrk:',this.myRef,this.myRef.current);
    }
    render() {
        return (
            <div
                className={`app-container`}
                ref={this.myRef}
            >
                4567890
            </div>
        );
    }
}