import React from 'react';
import { Form, Icon, Input, Button, Checkbox, message } from 'antd';
import { POST } from '../lib/rest';
import './index.less';
import themecolor from "../lib/themecolor";

export default  Form.create()( class Login extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            loading:true
        };
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                loading:false
            })
        },300);
    }
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                POST();
            }
        });
    };
    handleSwitch = () => {
        themecolor.changeColor('#abc');
        // const updateTheme = newPrimaryColor => {
        //     const hideMessage = message.loading('正在切换主题！', 0)
        //     themecolor.changeColor('#abc')
        //         .finally(() => hideMessage())
        // }
    };
    render(){
        const { getFieldDecorator } = this.props.form;
        return (
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
                    <Button className="login-form-button" onClick={this.handleSwitch}>
                        switch
                    </Button>
                    Or <a href="">register now!</a>
                </Form.Item>
            </Form>
        );
    }
})
