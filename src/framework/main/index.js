import React from 'react';
import * as d3 from 'd3';
import { Tag } from 'antd';
import './index.less';

export default class Main extends React.Component{
    constructor(props){
        super(props);
        this.id = 0;
        this.rootRectWidth = 300;
        this.state = {
            dataSource: {
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
                                    "children": [
                                        {
                                            "name": "公司名字depth3",
                                            "hasHumanholding":false,
                                            "hasChildren":true,
                                            "amount": "100",
                                            "ratio": "55%",
                                            "children": []
                                        },
                                        {
                                            "name": "公司名字depth3",
                                            "hasHumanholding":false,
                                            "hasChildren":true,
                                            "amount": "100",
                                            "ratio": "55%",
                                            "children": []
                                        },
                                        {
                                            "name": "公司名字depth3",
                                            "hasHumanholding":false,
                                            "hasChildren":true,
                                            "amount": "100",
                                            "ratio": "55%",
                                            "children": []
                                        },
                                        {
                                            "name": "公司名字depth3",
                                            "hasHumanholding":false,
                                            "hasChildren":true,
                                            "amount": "100",
                                            "ratio": "55%",
                                            "children": []
                                        },
                                        {
                                            "name": "公司名字depth3",
                                            "hasHumanholding":false,
                                            "hasChildren":true,
                                            "amount": "100",
                                            "ratio": "55%",
                                            "children": []
                                        },
                                        {
                                            "name": "公司名字depth3",
                                            "hasHumanholding":false,
                                            "hasChildren":true,
                                            "amount": "100",
                                            "ratio": "55%",
                                            "children": []
                                        }
                                    ]
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
            }
        };
    }
    componentDidMount(){
        this.treeConfig = {
            'margin': {
                'top': 10,
                'right': 5,
                'bottom': 0,
                'left': 30
            }
        }
        this.treeConfig.chartWidth = (1100 - this.treeConfig.margin.right - this.treeConfig.margin.left);
        this.treeConfig.chartHeight = (600 - this.treeConfig.margin.top - this.treeConfig.margin.bottom);
        this.treeConfig.centralHeight = this.treeConfig.chartHeight / 3;
        this.treeConfig.centralWidth = this.treeConfig.chartWidth / 2;
        this.treeConfig.linkLength = 110;
        this.treeConfig.duration = 500;
        this.graphTree(this.treeConfig);
    }
    graphTree = () => {
        this.hasChildNodeArr = [];

        //对角线，首尾节点坐标
        this.diagonal = d3.svg.diagonal()
            .source((d) => {
                return {
                    "x": d.source.x,
                    "y": d.source.name == 'origin' ? (d.source.y + 20) : (d.source.y + 60)
                };
            }).target(function(d) {
                return {
                 "x": d.target.x,
                 "y": d.target.y
                };
            }).projection(function(d) {
                return [d.x, d.y];
            });

        //创建块容器
        this.treeGraph = d3.select('.tree-graph');

        //创建svg容器
        const svgCta = this.treeGraph
            .append('svg')
            // .style('position', 'absolute')
            .attr('width', this.treeConfig.chartWidth + this.treeConfig.margin.right + this.treeConfig.margin.left)
            .attr('height', this.treeConfig.chartHeight + this.treeConfig.margin.top + this.treeConfig.margin.bottom)
            .style('border', '1px solid #cd0000')
            .attr('xmlns','http://www.w3.org/2000/svg')
            .on('mousedown', this.disableRightClick)
            .call(this.custZoom())
            .on('dblclick.zoom', null);

        //创建，添加或选择新的元素g，添加属性
        this.treeG = svgCta.append('g')
            .attr('class', 'gbox')
            .attr('transform', 'translate(' + this.treeConfig.margin.left + ',' + this.treeConfig.margin.top + ')');

        //绘制箭头
        const markerDown = svgCta.append("marker")
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

        // 临时数据
        this.data = this.state.dataSource;
        this.data.x0 = this.treeConfig.centralWidth;
        this.data.y0 = this.treeConfig.centralHeight;
        this.data.children.forEach(this.collapse);
        this.update(this.data, this.data, this.treeG);
    };
    update = (source, originalData, g) => {
        const self_diagonal = this.diagonal;
        const node_class = 'direction' + 'Node';
        const link_class = 'direction' + 'Link';
        const downwardSign = 1;
        const nodeSpace = 250;

        const tree = d3.layout.tree().sort(this.sortByDate).nodeSize([nodeSpace, 0]);
        const nodes = tree.nodes(originalData);
        const links = tree.links(nodes);
        const offsetX = -this.treeConfig.centralWidth;
        nodes.forEach((d) => {
            d.y = downwardSign * (d.depth * this.treeConfig.linkLength) + this.treeConfig.centralHeight;
            d.x = d.x - offsetX;
            if(d.name === 'origin'){
                d.x = this.treeConfig.centralWidth;
                d.y += downwardSign * 0;
            }
        });

        //update the node
        const node = g.selectAll('g.' + node_class)
            .data(nodes, (d) => {
                return d.id || (d.id = ++this.id);
            });
        const nodeEnter = node.enter().append('g')
            .attr('class', node_class)
            .attr('transform', (d) => {
                return 'translate(' + source.x0 + ',' + source.y0 + ')';
            })
            .style('cursor', (d) => {
                return(d.name == 'origin') ? '' : (d.children || d._children) ? 'pointer' : '';
            });

        nodeEnter.append('circle')
            .attr('r', 1e-6);

            //添加DOM元素
            const node_item = nodeEnter.append('foreignObject')
                .attr('x', (d) => {
                    return(d.name == 'origin') ? -(this.rootRectWidth / 2) : -120;
                })
                .attr('y', (d) => {
                    return(d.name == 'origin') ? -20 : 12;
                })
                .attr('width', (d) => {
                    return(d.name == 'origin') ? this.rootRectWidth : 230;
                })
                .attr('height', 40)
                .attr('style','border:1px solid #1078AF; background:#FFF;border-radius:10px')

                .attr('x', (d) => {
                    return(d.name == 'origin') ? -(this.rootRectWidth / 2) : -120;
                })
                .attr('y', (d) => {
                    return(d.name == 'origin') ? -20 : 12;
                })
                .attr('width', (d) => {
                    return(d.name == 'origin') ? this.rootRectWidth : 230;
                })
                node_item
                    .append('xhtml:input')
                    .text((d) => {
                        return d.name;
                    })

            //原有的节点更新到新位置
            const nodeUpdate = node.transition()
                .duration(this.treeConfig.duration)
                .attr('transform', (d) => {
                    return `translate(${d.x}, ${d.y})`
                });

            nodeUpdate.select('circle')
                .attr('r', (d) => {
                    return(d.name == 'origin') ? 0 : (this.hasChildNodeArr.indexOf(d) === -1) ? 0 : 6;
                })
                .attr('cy', (d) => {
                    return(d.name == 'origin') ? -20 : 59;
                })
                .style('fill', (d) => {
                    return this.hasChildNodeArr.indexOf(d) !== -1 ? "#fff" : "";
                })
                .style('stroke', (d) => {
                    return this.hasChildNodeArr.indexOf(d) !== -1 ? "#8b4513" : "";
                })
                .style('fill-opacity', (d) => {
                    if(d.children){
                        return 0.35;
                    }
                })
                .style('stroke-width', (d) => {
                    if(d.repeated) {
                        return 5;
                      }
                });

            //代表是否展开的加减号
            nodeEnter.append('svg:text')
                .attr('class', 'isExpand')
                .attr('x', '0')
                .attr('dy', 62)
                .attr('text-anchor', 'middle')
                .style("fill", "#000")
                .text((d) => {
                    if(d.name === 'origin'){
                        return '';
                    }
                    return this.hasChildNodeArr.indexOf(d) !== -1 ? '+' : ''
                })
                .on('click', this.click)

            nodeUpdate.select('text').style('fill-opacity', 1)

            const nodeExit = node.exit().transition()
                .duration(this.treeConfig.duration)
                .attr('transform', (d) => {
                    return 'translate(' + source.x + ',' + source.y + ')';
                })
                .remove();

            nodeExit.select('circle')
                .attr('r', 1e-6)
            nodeExit.select('text')
                .attr('fill-opacity', 1e-6)

            const link = g.selectAll('path.' + link_class)
                .data(links, function(d) {
                    return d.target.id;
                });
            link.enter().insert('path', 'g')    
                .attr('class', link_class)
                .attr('stroke', '#8b4513')
                .attr('fill', 'none')
                .attr('stroke-width','1px')
                .attr('opacity', 0.5)
                .attr('d', function(d) {
                    var o = {
                        x: source.x0,
                        y: source.y0
                    };
                    return self_diagonal({
                        source: o,
                        target: o
                    });
                })
                .attr('marker-end', 'url(#resolvedDown)')
                .attr('id', (d, i) => {
                    return 'mypath' + i;
                })
            link.transition()
                .duration(this.treeConfig.duration)
                .attr('d', self_diagonal);
            link.exit()
                .transition()
                .duration(this.treeConfig.duration)
                .attr('d', function(d) {
                    var o = {
                        x: source.x,
                        y: source.y
                    };
                    return self_diagonal({
                        source: o,
                        target: o
                    });
                })
                .remove();
            
            nodes.forEach((d) => {
                d.x0 = d.x;
                d.y0 = d.y;
            });
    };
    //缩放行为
    custZoom = () => {
        return d3.behavior.zoom()
            .scaleExtent([0.5, 2])
            .on('zoom', this.redraw);
    };
    collapse = (d) => {
        if(d.children && d.children.length != 0) {
            d._children = d.children;
            d._children.forEach(this.collapse);
            d.children = null;
            this.hasChildNodeArr.push(d);
        }
    }
    redraw = () => {
        this.treeG.attr('transform', `translate(${d3.event.translate})scale(${d3.event.scale})`);
    }
    disableRightClick = () => {
        // stop zoom
        if(d3.event.button == 2) {
            console.log('No right click allowed');
            d3.event.stopImmediatePropagation();
        }
    }
    sortByDate = (a, b) => {
        const aNum = a.name.substr(a.name.lastIndexOf('(') + 1, 4);
        const bNum = b.name.substr(b.name.lastIndexOf('(') + 1, 4);
        return d3.ascending(aNum, bNum) || d3.ascending(a.name, b.name) || d3.ascending(a.id, b.id);
    };
    Change_modal = (c) => {
        console.log('点击svg >> g事件')
    }
    click = (d,num) => {
        if(d.name === 'origin') {
            return;
        }
        const touchedText = d3.selectAll('.isExpand')[0][num];
        touchedText.textContent = touchedText.textContent !== '+' ? '+' : '-';
        if(d.children) {
            d._children = d.children;
            d.children = null;
            // touchedText.text((item) => {
            //     if(item.name === 'origin'){
            //         return '';
            //     }
            //     return '+';
            // })
        } else {
            d.children = d._children;
            d._children = null;
            // expand all if it's the first node
            if(d.name === 'origin') {
                d.children.forEach(this.expand);
            }
            // touchedText.text((d) => {
            //     if(d.name === 'origin'){
            //         return '';
            //     }
            //     return '-';
            // })
        }
        this.update(d, this.data, this.treeG);
    }
    expand = (d) => {
        if(d._children) {
            d.children = d._children;
            d.children.forEach(this.expand);
            d._children = null;
          }
    };
    render(){
        return (
            <div className='tree-graph'></div>
        );
    }
}
