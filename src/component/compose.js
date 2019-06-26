import React from 'react';

const outerClose = (WrappedCom) => {
    return class extends React.Component{
        render(){
            console.log('props:',this.props);
            return <WrappedCom {...this.props}/>;
        }
    }
};

export default outerClose;