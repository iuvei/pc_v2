import React, {Component} from 'react';
import {observer} from 'mobx-react';
import { hashHistory } from 'react-router';
import { Input,Button,Icon } from 'antd';
import onCanvas from './convas'

import './Login.scss'
@observer
export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            account: '',
            password: '',
            aptchac: '',
            stopAnimation: '',
        }
    };
    enterLogin() {
        this.setState({ loading: true });
        hashHistory.push('/lottery')
    };
    onAccount(value) {
        console.log(value);
        this.setState({account: value});
    }
    componentDidMount() {
        let indx = Math.floor(Math.random()*(onCanvas.length-1));
        onCanvas[indx]();
    };
    componentWillUnmount(){
        console.log(this.state.stopAnimation);
        window.cancelAnimationFrame(this.state.stopAnimation);
    };

    render() {
        return (
            <div className="login">
                <canvas id="canvas"></canvas>
                <div className="login_main">
                    <Input size="large" value={this.state.account} onChange={(value)=>{this.onAccount(value)}} placeholder="用户名"/>
                    <Input size="large" value={this.state.password} placeholder="密码" />
                    <Input size="large" value={this.state.aptchac} placeholder="验证码" />
                    <Button type="primary" icon="right-circle" loading={this.state.loading} onClick={()=>{this.enterLogin()}}>
                        登录
                    </Button>
                </div>
            </div>
        )
    }
}
