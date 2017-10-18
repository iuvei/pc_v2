import React, {Component} from 'react';
import {observer} from 'mobx-react';
import { Row, Col  } from 'antd';
import LeftSider from '../Betting/LeftSider/LeftSider';

import './StatementManage.scss'

@observer
export default class StatementManage extends Component {
    constructor(props){
        super(props)
        this.state = {
            navIndex: 0,
        }
    };
    toggleNav(index) {
        this.setState({navIndex: index})
        // return index === this.state.navIndex ? 'a_m_nav_active' : '';
    };
    render() {
        const navList = ['团队统计', '个人总表', '团队总表', '游戏帐变'];
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
                                        {
                                            navList.map((value, index)=>{
                                                return (
                                                    <li className={index === this.state.navIndex ? 'a_m_nav_active' : ''} onClick={()=>{this.toggleNav(index)}} key={index}>{value}</li>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                                <div>

                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}
