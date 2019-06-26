import React from 'react';
import outerClose from '../compose';
import './index.less';

@outerClose
export default class Button extends React.Component{
    constructor(props){
        super(props);

    }
    render(){
        return (
            <div className="test-cta">
                <div className="test-cat-inner">
                    <div className="test-cat-inner-content">

                    </div>
                </div>
            </div>
        );
    }
}

