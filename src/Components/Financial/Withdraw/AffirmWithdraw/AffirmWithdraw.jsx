import React, {Component} from 'react';
import {observer} from 'mobx-react';
import { Button, Input } from 'antd';

import './AffirmWithdraw.scss';

@observer
export default class AffirmWithdraw extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    };
    // 确认提款
    onRecharge() {
        this.setState({ iconLoadingRecharge: true });
    };
    render() {
        return (
            <div className="affirm_withdraw">
                <ul className="r_m_list">
                    <li>
                        <span className="r_m_li_w">用户名：</span>
                        <span className="r_m_qq">supervips01</span>
                    </li>
                    <li>
                        <span className="r_m_li_w">可提款金额：</span>
                        <span className="r_m_qq">￥50000.00</span>
                    </li>
                    <li>
                        <span className="r_m_li_w">提款金额：</span>
                        <span className="r_m_qq">￥50000.00</span>
                    </li>
                    <li>
                        <span className="r_m_li_w">开户行银行：</span>
                        <span className="r_m_qq">中国银行</span>
                    </li>
                    <li>
                        <span className="r_m_li_w">开户行地址：</span>
                        <span className="r_m_qq">广东 广州</span>
                    </li>
                    <li>
                        <span className="r_m_li_w">提款银行卡账号：</span>
                        <span className="r_m_qq">45678913456781234</span>
                    </li>
                    <li>
                        <span className="r_m_li_w">请验证资金密码：</span>
                        <Input type="password" size="large" placeholder="请输入资金密码" />
                        <a href="#" className="a_m_password">忘记资金密码？</a>
                    </li>
                    <li className="r_m_primary_btn">
                        <span className="r_m_li_w"></span>
                        <Button type="primary" size="large" loading={this.state.iconLoadingRecharge} onClick={()=>{this.onRecharge()}}>
                            确认提款
                        </Button>
                    </li>
                </ul>
            </div>
        )
    }
}
