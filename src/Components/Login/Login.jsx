import React, {Component} from 'react';
import {observer} from 'mobx-react';
import { Input,Button } from 'antd';

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
        }
    };
    enterLogin() {
        this.setState({ loading: true });
    }
    render() {
        return (
            <div className="login">
                <Input size="large" value={this.state.account} placeholder="用户名"/>
                <br/><br/>
                <Input size="large" value={this.state.password} placeholder="密码" />
                <br/><br/>
                <Input size="large" value={this.state.aptchac} placeholder="验证码" />
                <br/><br/>
                <Button type="primary" loading={this.state.loading} onClick={()=>{this.enterLogin()}}>
                    登录
                </Button>
            </div>
        )
    }
}
