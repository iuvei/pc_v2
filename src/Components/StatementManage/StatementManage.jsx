import React, {Component} from 'react';
import {observer} from 'mobx-react';
import { Link } from 'react-router';
import { Row, Col  } from 'antd';
import QueueAnim from 'rc-queue-anim';

import './StatementManage.scss'

@observer
export default class StatementManage extends Component {
    constructor(props){
        super(props);
        this.state = {
            navIndex: 1,
        }
    };
    onChangeTitle() {
        switch(this.state.navIndex)
        {
            case 1:
                return '团队统计';
                break;
            case 2:
                return '个人总表';
                break;
            case 3:
                return '团队总表';
                break;
            case 4:
                return '游戏帐变';
                break;
            default:
                return '团队统计';
        }
    };
    render() {
        return (
            <div className="s_m_main">
                <QueueAnim duration={1000}
                           animConfig={[
                               { opacity: [1, 0], translateY: [0, 50] }
                           ]}>
                    <div className="g_r_main" key="statementManage">
                        <Row type="flex" justify="center" align="top">
                            <Col span={24}>
                                <div className="a_m_controler">
                                    <div className="a_m_title">
                                        <span>报表管理</span>
                                        <span> > </span>
                                        <span>{this.onChangeTitle()}</span>
                                    </div>
                                    <div className="a_m_nav">
                                        <ul className="a_m_nav_list">
                                            <li className={1 === this.state.navIndex ? 'a_m_nav_active' : 'hvr-overline-from-left hvr-fade'} onClick={()=>{this.setState({navIndex: 1})}}>
                                                <Link to="/statementManage/teamStatistics">团队统计</Link>
                                            </li>
                                            <li className={2 === this.state.navIndex ? 'a_m_nav_active' : 'hvr-overline-from-left hvr-fade'} onClick={()=>{this.setState({navIndex: 2})}}>
                                                <Link to="/statementManage/selfTable">个人总表</Link>
                                            </li>
                                            <li className={3 === this.state.navIndex ? 'a_m_nav_active' : 'hvr-overline-from-left hvr-fade'} onClick={()=>{this.setState({navIndex: 3})}}>
                                                <Link to="/statementManage/teamTable">团队总表</Link>
                                            </li>
                                            <li className={4 === this.state.navIndex ? 'a_m_nav_active' : 'hvr-overline-from-left hvr-fade'} onClick={()=>{this.setState({navIndex: 4})}}>
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
                </QueueAnim>
            </div>
        );
    }
}
