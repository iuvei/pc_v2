import React, {Component} from 'react';
import {observer} from 'mobx-react';
import { Link } from 'react-router';

import { Menu, Icon } from 'antd';
import './headerNav.scss';

import logoSrc from '../../../Images/logo.png'

@observer
export default class HeaderNav extends Component {
    constructor(props) {
        super(props);
        this.state = {current: 'mail',};
    };
    handleClick = (e) => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    };
    render() {
        const SubMenu = Menu.SubMenu;
        const menu = (
            <Menu>
                <Menu.Item key="1">1st menu item</Menu.Item>
                <Menu.Item key="2">2nd memu item</Menu.Item>
                <Menu.Item key="3">3d menu item</Menu.Item>
            </Menu>
        );
        return (
            <div>
                <nav className="nav">
                    <div className="nav-content">
                        <img className="logo" src={logoSrc} alt="logo"/>
                        <div className="menus">
                            <Menu
                                // onClick={this.handleClick}
                                selectedKeys={[this.state.current]}
                                mode="horizontal"
                            >
                                <Menu.Item key="1">
                                    <div className="nav-text">
                                        <p>首页</p>
                                        <p>Home</p>
                                    </div>
                                </Menu.Item>
                                <SubMenu
                                    title={
                                        <div className="nav-text">
                                            <Link to={`/betCenter`}>
                                                <p>彩票游戏</p>
                                                <p>Lottery</p>
                                            </Link>
                                        </div>
                                    }>
                                    <Menu.Item key="firmInfo:1">
                                        <Link to="/firmIntroduce">公司介绍</Link>
                                    </Menu.Item>
                                    <Menu.Item key="firmInfo:2">
                                        <Link to="/journalism">公司新闻</Link>
                                    </Menu.Item>
                                    <Menu.Item key="firmInfo:3">联系我们</Menu.Item>
                                </SubMenu>
                                <SubMenu
                                    title={
                                    <div className="nav-text">
                                        <p>综合游戏</p>
                                        <p>Other Games</p>
                                    </div>
                                }>
                                    <Menu.Item key="solution:1">Option 1</Menu.Item>
                                    <Menu.Item key="solution:2">Option 2</Menu.Item>
                                </SubMenu>
                                <Menu.Item key="2">
                                    <div className="nav-text">
                                        <p>优惠活动</p>
                                        <p>Activity</p>
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
                                        <p>财务中心</p>
                                        <p>Finacial</p>
                                    </div>
                                </Menu.Item>
                                <Menu.Item key="5">
                                    <div className="nav-text">
                                        <Link to={`/statementManage`}>
                                            <p>报表管理</p>
                                            <p>Report</p>
                                        </Link>
                                    </div>
                                </Menu.Item>
                                <Menu.Item key="6">
                                    <div className="nav-text">
                                        <Link to={`/accountManage`}>
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
