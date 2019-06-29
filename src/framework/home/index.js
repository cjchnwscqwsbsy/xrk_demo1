import React from 'react';
import { Carousels, Button } from 'component';
import './index.less';
import { menuData } from './mock';

export default class Home extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            dataSource:[]
        };
    }
    componentDidMount(){
        this.setState({
            dataSource:menuData
        });
    }
    render(){
        const { dataSource } = this.state;
        return (
            <div className={`framework-home`}>
                <div className={`framework-home-header`}>
                    header
                </div>
                <div className={`framework-home-content`}>
                    <div className={`framework-home-content-box`}>
                        <div className={`framework-home-content-box-menu`}>
                            {dataSource.map(item => <span key={item.key}>{item.title}</span>)}
                        </div>
                        <div className={`framework-home-content-box-showroom`}>
                            <div className={`framework-home-content-box-showroom-slide`}>
                                <Carousels/>
                            </div>
                            <div className={`framework-home-content-box-showroom-hatch`}>
                                <a href=''>下栏导航</a>
                                <Button background="red"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`framework-home-bottom`}>

                </div>
            </div>
        );
    }
}