import React, {Component} from 'react';
import {observer} from 'mobx-react';
import { Link } from 'react-router';
import { Row, Col  } from 'antd';
import LeftSider from '../Betting/LeftSider/LeftSider';
import TeamStatistics from './TeamStatistics/TeamStatistics'

import './StatementManage.scss'

@observer
export default class StatementManage extends Component {
    constructor(props){
        super(props);
        this.state = {
            navIndex: 1,
        }
    };

    render() {
        return (
            <div className="s_m_main">
                <div className="main g_r_main">
                    <Row type="flex" justify="center" align="top">
                        <Col span={1}>
                            <LeftSider/>
                        </Col>
                        <Col span={23}>
                            <div className="a_m_controler">
                                <div className="a_m_title">
                                    <span>报表管理</span>
                                    <span> > </span>
                                    <span>团队统计</span>
                                </div>
                                <div className="a_m_nav">
                                    <ul className="a_m_nav_list">
                                        <li className={1 === this.state.navIndex ? 'a_m_nav_active' : ''} onClick={()=>{this.setState({navIndex: 1})}}>
                                            <Link to="/statementManage/teamStatistics">团队统计</Link>
                                        </li>
                                        <li className={2 === this.state.navIndex ? 'a_m_nav_active' : ''} onClick={()=>{this.setState({navIndex: 2})}}>
                                            <Link to="/statementManage/selfTable">个人总表</Link>
                                        </li>
                                        <li className={3 === this.state.navIndex ? 'a_m_nav_active' : ''} onClick={()=>{this.setState({navIndex: 3})}}>
                                            <Link to="/statementManage/teamList">团队总表</Link>
                                        </li>
                                        <li className={4 === this.state.navIndex ? 'a_m_nav_active' : ''} onClick={()=>{this.setState({navIndex: 4})}}>
                                            <Link to="/statementManage/gameBill">游戏帐变</Link>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    {this.props.children}
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}
