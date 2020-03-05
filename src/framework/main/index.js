import React from 'react';
import './index.less';

export default class Main extends React.Component{
    render(){
        return (
            <div className='main-cta'>
                <div className='main-cta-header'>
                    header
                </div>
                <div className='main-cta-body'>
                    <div style={{height:'900px',width:'100%', background:'#234'}}>
                        BODY
                    </div>
                </div>
            </div>
        );
    }
}
