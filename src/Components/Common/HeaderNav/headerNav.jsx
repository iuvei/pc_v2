import React, {Component} from 'react';
import {observer} from 'mobx-react';
import { Link } from 'react-router';

import { Menu, Dropdown, Icon, Badge } from 'antd';
import './headerNav.scss';

import logoSrc from '../../../Images/logo.png'
import name_icon from './Img/name_icon.png'
import email_icon from './Img/email_icon.png'
import off_icon from './Img/off_icon.png'
import on_icon from './Img/on_icon.png'

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
    render() {
        const SubMenu = Menu.SubMenu;
        const MenuItemGroup = Menu.ItemGroup;
        const menu = (
            <Menu>
                <Menu.Item key="0">
                    <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">1st menu item</a>
                </Menu.Item>
                <Menu.Item key="1">
                    <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">2nd menu item</a>
                </Menu.Item>
                <Menu.Divider />
                <Menu.Item key="3" disabled>3rd menu item（disabled）</Menu.Item>
            </Menu>
        );
        return (
            <div>
                <div className="nav_top">
                    <div className="nav_top_content">
                        <div className="n_t_lt left">
                            <span>支付宝快充渠道维&nbsp;</span>
                            <a href="javascript: void(0)">[点击查看]</a>
                        </div>
                        <ul className="n_t_list right">
                            <li className="n_t_cursor">
                                <Dropdown overlay={menu}>
                                    <a className="ant-dropdown-link" href="javascript: void(0)">
                                        <img src={name_icon} style={{verticalAlign: 'middle',marginRight: 5}}/>
                                        supervip01
                                        <Icon type="caret-down" />
                                    </a>
                                </Dropdown>
                            </li>
                            <li className="n_t_message n_t_cursor">
                                <Badge count={119} overflowCount={99}>
                                    <img src={email_icon} alt="站内信"/>
                                </Badge>
                            </li>
                            <li>
                                <span>余额：</span>
                                <span className="n_t_balance">
                                    <i>￥</i>
                                    <i>{this.state.hideBalance ? '6666.6666' : '******'}</i>
                                    <img src={this.state.hideBalance ? on_icon : off_icon} onClick={()=>{this.setState({hideBalance: this.state.hideBalance ? false : true})}} className="n_t_hide_balance"/>
                                </span>
                            </li>
                            <li className="n_t_cursor">
                                充值
                            </li>
                            <li className="n_t_cursor">
                                提款
                            </li>
                            <li className="n_t_cursor">
                                转账
                            </li>
                        </ul>
                    </div>
                </div>
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
                                        <Link to={`/betCenter`}>
                                            <p>首页</p>
                                            <p>Home</p>
                                        </Link>
                                    </div>
                                </Menu.Item>
                                <SubMenu className="c_p_game"
                                         title={
                                                    <div className="nav-text">
                                                        <p>彩票游戏</p>
                                                        <p>Lottery</p>
                                                    </div>
                                                }>
                                    <MenuItemGroup title="Item 1">
                                        <Menu.Item key="setting:1">
                                            <Link to={`/betCenter`}>
                                                Option 1
                                            </Link>
                                        </Menu.Item>
                                        <Menu.Item key="setting:2">
                                            <Link to={`/gameRecord`}>
                                                Option 2
                                            </Link>
                                        </Menu.Item>
                                    </MenuItemGroup>
                                    <MenuItemGroup title="Item 2">
                                        <Menu.Item key="setting:3">Option 3</Menu.Item>
                                        <Menu.Item key="setting:4">Option 4</Menu.Item>
                                    </MenuItemGroup>
                                </SubMenu>
                                <SubMenu
                                    title={
                                    <div className="nav-text">
                                        <Link to={`/betCenter`}>
                                            <p>综合游戏</p>
                                            <p>Other Games</p>
                                        </Link>
                                    </div>
                                }>
                                    <Menu.Item key="solution:1">Option 1</Menu.Item>
                                    <Menu.Item key="solution:2">Option 2</Menu.Item>
                                </SubMenu>
                                <Menu.Item key="2">
                                    <div className="nav-text">
                                        <Link to={`/betCenter`}>
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
                                        <Link to={`/financingCenter`}>
                                            <p>财务中心</p>
                                            <p>Finacial</p>
                                        </Link>
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
