import React from 'react';
import echarts from 'echarts/lib/echarts';
import  'echarts/lib/chart/radar';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import 'echarts/lib/component/legend';
import './index.less';

export default class Radar extends React.Component{
    constructor(props){
        super(props);
        this.myCharts = null;
    }
    componentDidMount(){
        this.myChart = echarts.init(document.getElementById('radarId'));
        this.myChart.setOption({
            title: {
                text: '基础雷达图'
            },
            tooltip: {},
            legend: {
                data: ['预算分配（Allocated Budget）', '实际开销（Actual Spending）']
            },
            radar: {
                // shape: 'circle',
                name: {
                    textStyle: {
                        color: '#fff',
                        backgroundColor: '#999',
                        borderRadius: 3,
                        padding: [3, 5]
                    }
                },
                indicator: [
                    { name: '销售（sales）', max: 6500},
                    { name: '管理（Administration）', max: 16000},
                    { name: '信息技术（Information Techology）', max: 30000},
                    { name: '客服（Customer Support）', max: 38000},
                    { name: '研发（Development）', max: 52000},
                    { name: '市场（Marketing）', max: 25000}
                ]
            },
            series: [{
                name: '预算 vs 开销（Budget vs spending）',
                type: 'radar',
                // areaStyle: {normal: {}},
                data: [
                    {
                        value: [4300, 10000, 28000, 35000, 50000, 19000],
                        name: '预算分配（Allocated Budget）'
                    },
                    {
                        value: [5000, 14000, 28000, 31000, 42000, 21000],
                        name: '实际开销（Actual Spending）'
                    }
                ]
            }]
        });
    }

    _calcuPercent = (value) => {
        const a = Math.floor(value);
        const b = value - a;
        return {a,b};
    };

    _renderProgress = (value) => {
        const { a, b } = this._calcuPercent(value);
        const result = [];
        for(let i = 0; i < 5; i ++){
            if(i < a){
                result.push(<span className={`ro-progress-item ro-progress-itemtrue${i}`}></span>);
            }else if((i === a) && b !== 0){
                result.push(<span className={`ro-progress-item ro-progress-itemfalse${i}`}>
                    <span
                        style={{width:`${b * 100}%`}}
                        className={`ro-progress-item-inner${i === 0 ? 0 : ''}`}
                    />
                </span>);
            }else{
                result.push(<span className={`ro-progress-item ro-progress-itemfalse${i}`}></span>);
            }
        }
        return result;
    };

    render(){
        const _v = 2.83;
        return (
            <React.Fragment>
                <div className={`ro-progress`}>
                    {this._renderProgress(_v)}
                </div>
                <div id='radarId' style={{ width: '100%', height: 800 }}></div>
            </React.Fragment>
        );
    }
}

