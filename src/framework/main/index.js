import React from 'react';
import * as d3 from 'd3';
import './index.less';
import { Tag } from 'antd';

export default class Main extends React.Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
        const cta = d3.select('.main-cta-modal');

        const tableTag = cta.append('table');
        const tbody = tableTag.append("tbody");
        tbody.append("tr").append("td").text("First!");
        tbody.append("tr").append("td").text("Second.");
        tbody.append("tr").append("td").text("Third.");

        cta.append('input').attr('value','谢荣康');

        

    }
    render(){
        return (
            <div className='main-cta'>
                <div className='main-cta-modal'>
                </div>
            </div>
        );
    }
}
