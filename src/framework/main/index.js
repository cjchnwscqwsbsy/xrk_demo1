import React from 'react';
import * as d3 from 'd3';
import { Tag } from 'antd';
import './index.less';

export default class Main extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            dataSource: {
                "downward": {
                    "direction": "downward",
                    "name": "origin",
                    "children": [
                        {
                            "name": "AAAAAAAAAAA",
                            "amount": "100",
                            "ratio": "55%",
                            "hasHumanholding":true,
                            "hasChildren":true,
                            "isExpand": false,
                            "children": [
                                {
                                    "name": "公司名字",
                                    "hasHumanholding":false,
                                    "hasChildren":true,
                                    "amount": "100",
                                    "ratio": "55%",
                                    "children": []
                                },
                                {
                                    "name": "公司名字",
                                    "hasHumanholding":false,
                                    "hasChildren":true,
                                    "amount": "100",
                                    "ratio": "55%",
                                    "children": []
                                }
                            ]
                        },
                        {
                            "name": "BBBBBBBBBB",
                            "amount": "100",
                            "ratio": "55%",
                            "hasHumanholding":true,
                            "hasChildren":true,
                            "isExpand": false,
                            "children": [
                                {
                                    "name": "公司名字",
                                    "hasHumanholding":false,
                                    "hasChildren":true,
                                    "amount": "100",
                                    "ratio": "55%",
                                    "children": []
                                },
                                {
                                    "name": "公司名字",
                                    "hasHumanholding":false,
                                    "hasChildren":true,
                                    "amount": "100",
                                    "ratio": "55%",
                                    "children": []
                                }
                            ]
                        },
                        {
                            "name": "CCCCCCCCCC",
                            "amount": "100",
                            "ratio": "55%",
                            "hasHumanholding":true,
                            "hasChildren":true,
                            "isExpand": false,
                            "children": [
                                {
                                    "name": "公司名字",
                                    "hasHumanholding":false,
                                    "hasChildren":true,
                                    "amount": "100",
                                    "ratio": "55%",
                                    "children": []
                                },
                                {
                                    "name": "公司名字",
                                    "hasHumanholding":false,
                                    "hasChildren":true,
                                    "amount": "100",
                                    "ratio": "55%",
                                    "children": []
                                }
                            ]
                        },
                        {
                            "name": "DDDDDDDDDD",
                            "hasHumanholding":false,
                            "hasChildren":true,
                            "amount": "100",
                            "ratio": "55%",
                            "children": []
                        },
                        {
                            "name": "EEEEEEEEE",
                            "hasHumanholding":false,
                            "hasChildren":true,
                            "isExpand": false,
                            "amount": "100",
                            "ratio": "55%",
                            "children": [
                                {
                                    "name": "公司或股东名字",
                                    "hasHumanholding":false,
                                    "amount": "100",
                                    "ratio": "55%",
                                    "children": []
                                },
                                {
                                    "name": "公司或股东名字",
                                    "hasHumanholding":false,
                                    "amount": "100",
                                    "ratio": "55%",
                                    "children": []
                                },
                                {
                                    "name": "公司或股东名字",
                                    "hasHumanholding":false,
                                    "amount": "100",
                                    "ratio": "55%",
                                    "children": []
                                },
                                {
                                    "name": "公司或股东名字",
                                    "hasHumanholding":false,
                                    "amount": "100",
                                    "ratio": "55%",
                                    "children": []
                                }
                            ]
                        }
                    ]
                },
                "upward": {
                    "direction": "upward",
                    "name": "origin",
                    "children": [
                        {
                            "name": "6666666666666",
                            "hasHumanholding":false,
                            "amount": "100",
                            "ratio": "55%",
                            "children": [
                                {
                                    "name": "公司或股东名字",
                                    "hasHumanholding":false,
                                    "amount": "100",
                                    "ratio": "55%",
                                    "children": []
                                },
                                {
                                    "name": "公司或股东名字",
                                    "hasHumanholding":false,
                                    "isExpand": false,
                                    "amount": "100",
                                    "ratio": "55%",
                                    "children": [
                                        {
                                            "name": "公司或股东名字",
                                            "hasHumanholding":false,
                                            "amount": "100",
                                            "ratio": "55%",
                                            "children": []
                                        },
                                        {
                                            "name": "公司或股东名字",
                                            "hasHumanholding":false,
                                            "amount": "100",
                                            "ratio": "55%",
                                            "children": []
                                        }
                                    ]
                                },
                                {
                                    "name": "公司或股东名字",
                                    "hasHumanholding":false,
                                    "amount": "100",
                                    "ratio": "55%",
                                    "children": []
                                }
                            ]
                        }
                    ]
                }
            }
        };
    }
    componentDidMount(){
        this.graphTree(this.getTreeConfig);
    }
    getTreeConfig = () => {
        const treeConfig = {
            'margin': {
                'top': 10,
                'right': 5,
                'bottom': 0,
                'left': 30
            }
        }
        treeConfig.chartWidth = (1100 - treeConfig.margin.right - treeConfig.margin.left);
        treeConfig.chartHeight = (600 - treeConfig.margin.top - treeConfig.margin.bottom);
        treeConfig.centralHeight = treeConfig.chartHeight / 2;
        treeConfig.centralWidth = treeConfig.chartWidth / 2;
        treeConfig.linkLength = 120;
        treeConfig.duration = 500;
        return treeConfig;
    };
    graphTree = (config) => {
        const linkLength = config.linkLength;
        const duration = config.duration;
        const hasChildNodeArr = [];
        const id = 0;

        let forUpward = true;

        //对角线，首位节点坐标
        const diagonal = d3.svg.diagonal()
            .source(function(d) {
                return {
                    "x": d.source.x,
                    "y": d.source.name == 'origin' ? (forUpward ? d.source.y -20 :d.source.y + 20) : (forUpward ? d.source.y - 60 : d.source.y + 60)
                };
            }).target(function(d) {
                return {
                 "x": d.target.x,
                 "y": d.target.y
                };
            }).projection(function(d) {
                return [d.x, d.y];
            });

        //缩放行为
        const zoom = d3.behavior.zoom()
            .scaleExtent([0.5, 2])
            .on('zoom', redraw);

        //创建svg容器
        const svg = d3.select('main-cta-modal')
            .append('svg')
            .attr('width', config.chartWidth + config.margin.right + config.margin.left)
            .attr('height', config.chartHeight + config.margin.top + config.margin.bottom)
            .attr('xmlns','http://www.w3.org/2000/svg')
            .on('mousedown', disableRightClick)
            .call(zoom)
            .on('dblclick.zoom', null);

        //创建，添加或选择新的元素g，添加属性
        const treeG = svg.append('g')
            .attr('class', 'gbox')
            .attr('transform', 'translate(' + config.margin.left + ',' + config.margin.top + ')');

        //绘制箭头
        const markerDown = svg.append("marker")
            .attr("id", "resolvedDown")
            .attr("markerUnits", "strokeWidth") //设置为strokeWidth箭头会随着线的粗细发生变化
            .attr("markerUnits", "userSpaceOnUse")
            .attr("viewBox", "0 -5 10 10") //坐标系的区域
            .attr("refX", 0) //箭头坐标
            .attr("refY", 0)
            .attr("markerWidth", 12) //标识的大小
            .attr("markerHeight", 12)
            .attr("orient", "90") //绘制方向，可设定为：auto（自动确认方向）和 角度值
            .attr("stroke-width", 2) //箭头宽度
            .append("path")
            .attr("d", "M0,-5L10,0L0,5") //箭头的路径
            .attr('fill', '#000'); //箭头颜色


    };
    render(){
        return (
            <div className='main-cta'>
                <div className='main-cta-modal'>
                </div>
            </div>
        );
    }
}
