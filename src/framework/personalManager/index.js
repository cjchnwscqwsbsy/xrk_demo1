import React from 'react';
import './index.less';

export default class PersonaManager extends React.Component{
    componentDidMount(){

        this.forbid.onkeydown = (e) => {
            e.preventDefault();
        };
        this.forbid.focus();
    }
    handleContextMenu = (e) => {
        e.preventDefault()
    };
    render(){
        return (
            <div
                style={{width:'100%',height:'100vh',margin:'50px',background:'#bbb',outline: 'none'}}
                ref={instance => this.forbid = instance}
                tabIndex="1"
                onContextMenu={this.handleContextMenu}
            >
                PersonaManager
            </div>
        );
    }
}