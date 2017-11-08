import React, {Component} from 'react';
import {observer} from 'mobx-react';
import { hashHistory } from 'react-router';

import './Withdraw.scss';
import { InputNumber, Button } from 'antd';

import nongye from './Img/nongye.png'

@observer
export default class Withdraw extends Component {
    constructor(props){
        super(props);
        this.state = {
            iconLoadingRecharge: false,
        }
    };
    onRechargeAmount(value) {
        console.log('changed', value);
    }
    // 提现下一步
    onRecharge() {
        this.setState({ iconLoadingRecharge: true });
        hashHistory.push('/financial/withdraw/affirmWithdraw')
    };
    render() {
        return (
            <div className="withdraw_main">
                <div className="tr_m_text">
                    <h4>
                        温馨提示：提款时间00：00：00至23：59：59，全天候为您服务！每天限提<i>10</i>次，今天您已经成功发起了<em>0</em>次提现申请
                    </h4>
                </div>
                <ul className="r_m_list">
                    <li>
                        <span className="r_m_li_w">用户名：</span>
                        <span className="r_m_qq">supervips01</span>
                    </li>
                    <li>
                        <span className="r_m_li_w">可提款金额：</span>
                        <span className="r_m_qq">￥500.00</span>
                    </li>
                    <li className="clear">
                        <span className="r_m_li_w">提款银行卡：</span>
                        <span className="r_m_qq_controler r_m_active">
                            <img src={nongye} alt=""/>
                            <span className="r_m_qq">中国农业银行：*4488[**飞]</span>
                        </span>
                    </li>
                    <li>
                        <span className="r_m_li_w">提款金额：</span>
                        <InputNumber min={1} max={100000}
                                     defaultValue={1}
                                     size="large"
                                     onChange={(value)=>{this.onRechargeAmount(value)}}
                        />
                        <span style={{margin: '0 15px 0 3px'}}>元</span>
                        <span className="r_m_recharge_text">
                            单笔充值限额：最低
                            <strong style={{color: '#CB1313',fontWeight: 'normal'}}>100</strong>
                            ，最高
                            <strong style={{color: '#CB1313',fontWeight: 'normal'}}>500000</strong>
                        </span>
                    </li>
                    <li className="r_m_primary_btn">
                        <span className="r_m_li_w"></span>
                        <Button type="primary" size="large" loading={this.state.iconLoadingRecharge} onClick={()=>{this.onRecharge()}}>
                           下一步
                        </Button>
                    </li>
                </ul>
            </div>
        );
    }
}
