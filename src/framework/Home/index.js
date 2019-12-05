import React from 'react';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import {CartoDB, OSM} from 'ol/source';
import './index.less';

export default class Home extends React.Component{
    constructor(props){
        super(props);

    }
    componentDidMount(){
        this.mapConfig = {
            'layers': [{
                'type': 'cartodb',
                'options': {
                    'cartocss_version': '2.1.1',
                    'cartocss': '#layer { polygon-fill: #F00; }',
                    'sql': 'select * from european_countries_e where area > 0'
                }
            }]
        };
        this.cartoDBSource = new CartoDB({
            account: 'documentation',
            config: this.mapConfig
        });
        this.map = new Map({
            layers: [
                new TileLayer({
                    source: new OSM()
                }),
                new TileLayer({
                    source: this.cartoDBSource
                })
            ],
            target: 'home_map',
            view: new View({
                center: [0, 0],
                zoom: 2
            })
        });
    }
    render(){
        const { prefix = 'ro' } = this.props;
        return (
            <div id='home_map' className={`${prefix}-framework-home`}>

            </div>
        );
    }
}
