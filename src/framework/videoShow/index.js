import React from 'react';
import { Form, Icon, Input, Button, Checkbox, Spin } from 'antd';
import { Link } from 'react-router-dom';
import { POST } from '../lib/rest';
import './index.less';

export default  Form.create()( class Login extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            loading:true,
            classNameCal: 0
        };
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                loading:false
            })
        },300);
        this.interValTimer();
    }

    interValTimer = () => {
        setInterval(() => {
            const { classNameCal } = this.state;
            console.log(classNameCal);
            this.setState({
                classNameCal: classNameCal + 1 > 2 ? 0 : classNameCal + 1,
            });
        }, 3000);
    };
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                POST();
            }
        });
    };
    render(){
        const { classNameCal } = this.state;
        const { getFieldDecorator } = this.props.form;
        return (
          <div style={{ overflow: 'hidden' }}>
              <video
                // controls
                id="J_video_player"
                muted
                className="video-player"
                // data-height="1080"
                // data-width="1920"
                height={document.body.clientHeight + 10}
                width={document.body.clientWidth + 10}
                autoPlay
                loop
                style={{ padding: 0, margin: 0, overflow: 'hidden' }}
              >
                  <source src="https://t.alipayobjects.com/images/T1T78eXapfXXXXXXXX.mp4" type="video/mp4" />
              </video>
              <div style={{ position: 'absolute', top: 300, left: 600, zIndex: 999 }}>
                  <Link to={'/login'}>跳转...</Link>
              </div>
          </div>
        );
    }
})
