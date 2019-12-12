import React from 'react';
import { Form, Icon, Input, Button, Checkbox, Spin } from 'antd';
import { POST } from '../lib/rest';
import './index.less';
import {get} from "mobx";

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
            <Spin spinning={this.state.loading}>
                <div
                  // className="login-cta1"
                  className={`login-cta login-cta-background-${classNameCal}`}
                  style={{
                    visibility: this.state.loading ? 'hidden' : 'visible',
                }}>
                    {/*<video*/}
                      {/*// controls*/}
                      {/*id="J_video_player"*/}
                      {/*muted*/}
                      {/*className="video-player"*/}
                      {/*data-height="1080"*/}
                      {/*data-width="1920" height={document.body.clientHeight} width={document.body.clientWidth}*/}
                      {/*autoPlay*/}
                      {/*loop*/}
                    {/*>*/}
                        {/*<source src="https://t.alipayobjects.com/images/T1T78eXapfXXXXXXXX.mp4" type="video/mp4" />*/}
                    {/*</video>*/}
                    <Form onSubmit={this.handleSubmit} className="login-form">
                        <Form.Item>
                            {getFieldDecorator('username', {
                                rules: [{ required: true, message: 'Please input your username!' }],
                            })(
                                <Input
                                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    placeholder="Username"
                                />,
                            )}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('password', {
                                rules: [{ required: true, message: 'Please input your Password!' }],
                            })(
                                <Input
                                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    type="password"
                                    placeholder="Password"
                                />,
                            )}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('remember', {
                                valuePropName: 'checked',
                                initialValue: true,
                            })(<Checkbox>Remember me</Checkbox>)}
                            <a className="login-form-forgot" href="" style={{color:'red'}}>
                                Forgot password
                            </a>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                Log in
                            </Button>
                            Or <a href="">register now!</a>
                        </Form.Item>
                    </Form>
                </div>
            </Spin>
        );
    }
})
