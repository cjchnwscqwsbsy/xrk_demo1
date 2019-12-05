import React from 'react';
import { Carousels } from 'component';
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
        const { prefix = 'ro' } = this.props;
        return (
            <div className={`${prefix}-framework`}>
                <aside className={`${prefix}-framework-left`}>
                    left menu
                </aside>
                <section className={`${prefix}-framework-right`}>
                    <div className={`${prefix}-framework-header`}>
                        header
                    </div>
                    <div className={`${prefix}-framework-content`}>
                        <div className={`${prefix}-framework-box`}>
                            <div className={`${prefix}-framework-box-menu`}>
                                {dataSource.map(item => <span key={item.key}>{item.title}</span>)}
                            </div>
                            <div className={`${prefix}-framework-box-showroom`}>
                                <div className={`${prefix}-framework-box-showroom-slide`}>
                                    <Carousels/>
                                </div>
                                <div className={`${prefix}-framework-box-showroom-hatch`}>
                                    <a href=''>下栏导航</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}