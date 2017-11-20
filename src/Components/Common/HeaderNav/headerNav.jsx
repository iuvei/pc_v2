import React, {Component} from 'react';
import {observer} from 'mobx-react';
import { Link } from 'react-router';

import { Menu } from 'antd';
import HeaderTop from './HeaderTop'
import './headerNav.scss';

import logoSrc from '../../../Images/logo.png'

@observer
export default class HeaderNav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            current: 'mail',
            hideBalance : true,
        };
    };
    handleClick = (e) => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    };
    componentDidMount() {
        // 给彩票游戏下拉框获取body宽度
        // this.refs.lotteryNameType.style.width = document.body.clientWidth+'px';
    };
    render() {
        const SubMenu = Menu.SubMenu;
        const MenuItemGroup = Menu.ItemGroup;

        return (
            <div className="header_main">
                <HeaderTop/>
                <nav className="nav">
                    <div className="nav-content">
                        <img className="logo" src={logoSrc} alt="logo"/>
                        <div className="menus">
                            <Menu
                                onClick={this.handleClick}
                                selectedKeys={[this.state.current]}
                                mode="horizontal"
                            >
                                <Menu.Item key="1">
                                    <div className="nav-text">
                                        <Link to={`/home`}>
                                            <p>首页</p>
                                            <p>Home</p>
                                        </Link>
                                    </div>
                                </Menu.Item>
                                <Menu.Item key="123" className="lottery_name">
                                    <div className="nav-text" ref="lotteryName">
                                        <Link to={`/lottery`}>
                                            <p>彩票游戏</p>
                                            <p>Lottery</p>
                                        </Link>
                                    </div>
                                    <div className="lottery_name_type" ref="lotteryNameType">
                                        <div className="l_n_t_p clear">
                                            <ul className="l_n_list">
                                                <li>44556</li>
                                                <li>44556</li>
                                                <li>44556</li>
                                                <li>44556</li>
                                            </ul>
                                            <ul className="l_n_list">
                                                <li>44556</li>
                                                <li>44556</li>
                                                <li>44556</li>
                                                <li>44556</li>
                                            </ul>
                                            <ul className="l_n_list">
                                                <li>44556</li>
                                                <li>44556</li>
                                                <li>44556</li>
                                                <li>44556</li>
                                            </ul>
                                        </div>
                                    </div>
                                </Menu.Item>
                                <SubMenu
                                    title={
                                    <div className="nav-text">
                                        <a href="javascript:void(0)">
                                            <p>综合游戏</p>
                                            <p>Other Games</p>
                                        </a>
                                    </div>
                                }>
                                    <Menu.Item key="solution:1">PT游戏</Menu.Item>
                                    <Menu.Item key="solution:2">体育竞技</Menu.Item>
                                    <Menu.Item key="solution:3">EA娱乐城</Menu.Item>
                                    <Menu.Item key="solution:4">GT娱乐</Menu.Item>
                                    <Menu.Item key="solution:5">
                                        <Link to={`/bobing`}>
                                            博饼
                                        </Link>
                                    </Menu.Item>
                                </SubMenu>
                                <Menu.Item key="2">
                                    <div className="nav-text">
                                        <Link to={`/activity`}>
                                            <p>优惠活动</p>
                                            <p>Activity</p>
                                        </Link>
                                    </div>
                                </Menu.Item>
                                <Menu.Item key="3">
                                    <div className="nav-text">
                                        <Link to={`/gameRecord`}>
                                            <p>游戏记录</p>
                                            <p>Game Records</p>
                                        </Link>
                                    </div>
                                </Menu.Item>
                                <Menu.Item key="4">
                                    <div className="nav-text">
                                        <Link to={`/financial`}>
                                            <p>财务中心</p>
                                            <p>Financial</p>
                                        </Link>
                                    </div>
                                </Menu.Item>
                                <Menu.Item key="5">
                                    <div className="nav-text">
                                        <Link to={`/report`}>
                                            <p>报表管理</p>
                                            <p>Report</p>
                                        </Link>
                                    </div>
                                </Menu.Item>
                                <Menu.Item key="6">
                                    <div className="nav-text">
                                        <Link to={`/account`}>
                                            <p>账户管理</p>
                                            <p>Account</p>
                                        </Link>
                                    </div>
                                </Menu.Item>
                            </Menu>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

