import React from 'react';
import { Avatar, Icon } from 'antd';
import { Carousels } from 'component';
import { get } from '../lib/rest';
import './index.less';
import ro_logo from './ro_logo.jpg';

export default class Home extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            dataSource:[]
        };
    }
    componentDidMount(){
        get(`/app/home/menu`).then(ret => {
            this.setState({
                dataSource:ret.data
            });
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
                    <div className={`${prefix}-framework-header-users`}>
                        <Avatar style={{cursor:'pointer'}} size="large" icon={<Icon type="user" />} />
                        <span>谢荣康</span>
                    </div>
                </div>
                <div className={`${prefix}-framework-content`}>
                    <div className={`${prefix}-framework-box`}>
                        <div className={`${prefix}-framework-box-menu`}>
                            {dataSource.length > 0 && dataSource.map(item => <span key={item.key}>{item.title}</span>)}
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
