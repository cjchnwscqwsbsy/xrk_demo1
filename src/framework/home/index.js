import React from 'react';
import { Carousels } from 'component';
import './index.less';
import ro_logo from './ro_logo.jpg';
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
            <section className={`${prefix}-framework`}>
                <div className={`${prefix}-framework-header`}>
                    <img src={ro_logo}/>
                    <div className={`${prefix}-framework-header-menu`}>菜单</div>
                    <div className={`${prefix}-framework-header-users`}>用户</div>
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
                                <a href=''>下栏content</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
