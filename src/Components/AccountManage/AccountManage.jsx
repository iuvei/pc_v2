import React, {Component} from 'react';
import {observer} from 'mobx-react';
import { Row, Col  } from 'antd';

import LeftSider from '../Betting/LeftSider/LeftSider';

import './AccountManage.scss'
import TeamList from './TeamList/TeamList'

@observer
export default class AccountManage extends Component {

    render() {
        return (
            <div className="main">
                <Row type="flex" justify="center" align="top">
                    <Col span={1}>
                        <LeftSider/>
                    </Col>
                    <Col span={23}>
                        <div className="a_m_controler">
                            <div className="a_m_title">
                                <span>账户管理</span>
                                <span> > </span>
                                <span>团队列表</span>
                            </div>
                            <div className="a_m_nav">
                                <ul className="a_m_nav_list">
                                    <li>个人信息</li>
                                    <li className="a_m_nav_active">团队列表</li>
                                    <li>市场推广</li>
                                    <li>契约系统</li>
                                    <li>银行卡管理</li>
                                    <li>安全中心</li>
                                    <li>站内信</li>
                                </ul>
                            </div>
                            <div>
                                <TeamList/>
                            </div>
                        </div>
                    </Col>

                </Row>
            </div>
        );
    }
}
