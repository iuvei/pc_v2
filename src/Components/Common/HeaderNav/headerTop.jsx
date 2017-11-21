import React, {Component} from 'react';
import {observer} from 'mobx-react';
import { Link } from 'react-router';
import { Icon, Badge } from 'antd';
import { stateVar } from '../../../State'
import './headerTop.scss'
import name_icon from './Img/name_icon.png'
import email_icon from './Img/email_icon.png'
import off_icon from './Img/off_icon.png'
import on_icon from './Img/on_icon.png'
@observer
export default class HeaderTop extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    };

    render() {
        return (
            <div className="nav_top">
                <div className="nav_top_content">
                    <div className="n_t_lt left">
                        <span>支付宝快充渠道维&nbsp;</span>
                        <a href="javascript: void(0)">[点击查看]</a>
                    </div>
                    <ul className="n_t_list right">
                        <li className="n_t_cursor n_t_position">
                            <img src={name_icon} style={{verticalAlign: 'middle',marginRight: 5}}/>
                            {stateVar.userName}
                            <Icon type="caret-down" style={{marginLeft: '5px'}}/>
                            <div className="n_t_controler">
                                <div className="n_t_drop_down">
                                    <ul className="n_t_down_list">
                                        <li>
                                            <span className="left">用户类型</span>
                                            <span className="right color_DFC674">代理</span>
                                        </li>
                                        <li>
                                            <span className="left">奖金组</span>
                                            <span className="right color_DFC674">1956</span>
                                        </li>
                                        <li>
                                            <span className="left">上次登录地点</span>
                                            <span className="right color_DFC674">菲律宾</span>
                                        </li>
                                        <li>
                                            <span className="left">上次登录时间</span>
                                            <span className="right">2018-08-09&nbsp;12:55:00</span>
                                        </li>
                                        <li>
                                            <p className="n_t_exit">退出登录</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <li className="n_t_message n_t_cursor">
                            <Badge count={119} overflowCount={99}>
                                <img src={email_icon} alt="站内信"/>
                            </Badge>
                        </li>
                        <li className="n_t_balance_p">
                            <span>余额：</span>
                            <span className="n_t_balance">
                                    <i>￥</i>
                                    <i>{this.state.hideBalance ? '6666.6666' : '******'}</i>
                                    <img src={this.state.hideBalance ? on_icon : off_icon} onClick={()=>{this.setState({hideBalance: this.state.hideBalance ? false : true})}} className="n_t_hide_balance"/>
                                </span>
                            <div className="n_t_controler">
                                <div className="n_t_drop_down">
                                    <ul className="n_t_down_list">
                                        <li>
                                            <span className="left">彩票余额：</span>
                                            <span className="right color_DFC674">￥00.00</span>
                                        </li>
                                        <li>
                                            <span className="left">EA余额：</span>
                                            <span className="right color_DFC674">￥00.00</span>
                                        </li>
                                        <li>
                                            <span className="left">PT余额：</span>
                                            <span className="right color_DFC674">￥00.00</span>
                                        </li>
                                        <li>
                                            <span className="left">GT余额：</span>
                                            <span className="right color_DFC674">￥00.00</span>
                                        </li>
                                        <li>
                                            <span className="left">博饼余额：</span>
                                            <span className="right color_DFC674">￥00.00</span>
                                        </li>
                                        <li>
                                            <span className="left">体育余额：</span>
                                            <span className="right color_DFC674">￥00.00</span>
                                        </li>
                                        <li>
                                            <p className="n_t_exit">刷新余额</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <li className="n_t_cursor_color">
                            <Link to={
                                {
                                    pathname: '/financial/recharge',
                                    query: {navIndex: 0}
                                }
                            }>
                                充值
                            </Link>
                        </li>
                        <li className="n_t_cursor_color">
                            <Link to={
                                {
                                    pathname: '/financial/withdraw',
                                    query: {navIndex: 1}
                                }
                            }>
                                提款
                            </Link>
                        </li>
                        <li className="n_t_cursor_color">
                            <Link to={
                                {
                                    pathname: '/financial/transfer',
                                    query: {navIndex: 3}
                                }
                            }>
                                转账
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}
