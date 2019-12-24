import React from 'react';
import { Select } from 'antd';
import './index.less';

const { Option } = Select;
export default class PersonaManager extends React.Component{
    componentDidMount() {
        this.secideNode = document.querySelector('.ant-select-selection');
    }

    handleChange = (value) => {
        console.log(`selected ${value}`);
    };
    switchParentNode = (triggerNode, flag = false) => {
        return flag ? triggerNode.parentElement : document.body;
        // return this.secideNode;
    };
    render(){
        return (
            <div style={{height:'1200px',width:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}>
                <div style={{height:'76px', background:'#666',padding:'10px',overflow:'hidden'}}>
                    <Select
                        defaultValue="lucy"
                        style={{ width: 120 }}
                        onChange={this.handleChange}
                        // getPopupContainer={this.switchParentNode}
                    >
                        <Option value="jack">Jack</Option>
                        <Option value="lucy">Lucy</Option>
                        <Option value="disabled" disabled>
                            Disabled
                        </Option>
                        <Option value="Yiminghe">yiminghe</Option>
                    </Select>
                </div>
            </div>
        );
    }
}
