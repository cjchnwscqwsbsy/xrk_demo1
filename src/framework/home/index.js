import React from 'react';
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
                            <div className={`framework-home-content-box-showroom-slide`}>轮播图</div>
                            <div className={`framework-home-content-box-showroom-hatch`}>下栏导航</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}