import React from 'react';
import './index.less';

export default class Home extends React.Component{
    render(){
        return (
            <div className={`framework-home`}>
                <div className={`framework-home-header`}>
                    header
                </div>
                <div className={`framework-home-content`}>
                    <div className={`framework-home-content-box`}>theme</div>
                </div>
            </div>
        );
    }
}