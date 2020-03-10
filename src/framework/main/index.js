import React from 'react';
import * as d3 from 'd3';
import './index.less';
import { Tag } from 'antd';

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
        const cta = d3.select('.main-cta-modal')
            .append('svg')
            .attr('width', 700).attr('height', 700)
            .attr('g')
            .attr('transform', 'translate(50, 0)');
        
        const tree = d3.tree().size([700, 500]);

        const diagonal = d3.svg.diagonal().projection(d => [d.y, d.x]);

        d3.json('./flare.json', function(error, root){
            
            const nodes = tree.nodes(root);
            const links = tree.nodes(nodes);

            const link = svg.selectAll('.link')
                .data(links)
                .enter()
                .append('path')
                .attr('class', 'link')
                .attr('d', diagonal)

            const node = svg.selectAll('.node')
                .data(nodes)
                .enter()
                .append('g')
                .attr('class', 'node')
                .attr('transform', function(d){
                    return `translate(${d.y}, ${d.y})`;
                })

            node.append('text')
                .attr('dx', function(d){
                    return d.children ? -15 : 15;
                })
                .attr('dy', 10)
                .style('text-anchor', (d) => {
                    return d.children ? 'end' : 'start';
                })
                .attr('class', 'text')
                .text((d) => {return d.name})
        });
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
