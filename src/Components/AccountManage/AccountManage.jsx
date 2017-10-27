import React, {Component} from 'react';
import {observer} from 'mobx-react';
import {Link} from 'react-router';
import { Row, Col  } from 'antd';
import QueueAnim from 'rc-queue-anim';

import './AccountManage.scss'

@observer
export default class AccountManage extends Component {
    constructor(props){
        super(props);
        this.state = {
            navIndex: 0,
        }
    };
    onChangeTitle() {
        console.log(this.state.navIndex)
        switch(this.state.navIndex)
        {
            case 0:
                return '个人信息';
                break;
            case 1:
                return '团队列表';
                break;
            case 2:
                return '市场推广';
                break;
            case 3:
                return '契约系统';
                break;
            case 4:
                return '银行卡管理';
                break;
            case 5:
                return '安全中心';
                break;
            case 6:
                return '站内信';
                break;
            default:
                return '个人信息';
        }
    };

    render() {
        return (
            <div className="a_m_main">
                <QueueAnim duration={1000}
                           animConfig={[
                               { opacity: [1, 0], translateY: [0, 50] }
                           ]}>

                    <Row type="flex" justify="center" align="top" key="accountManage">
                        <Col span={24}>
                            <div className="a_m_controler">
                                <div className="a_m_title">
                                    <span>账户管理</span>
                                    <span> > </span>
                                    <span>{this.onChangeTitle()}</span>
                                </div>
                                <div className="a_m_nav">
                                    <ul className="a_m_nav_list">
                                        <li className={0 === this.state.navIndex ? 'a_m_nav_active' : 'hvr-overline-from-left hvr-fade'} onClick={()=>{this.setState({navIndex: 0})}}>
                                            <Link to="/accountManage/selfInfo">个人信息</Link>
                                        </li>
                                        <li className={1 === this.state.navIndex ? 'a_m_nav_active' : 'hvr-overline-from-left hvr-fade'} onClick={()=>{this.setState({navIndex: 1})}}>
                                            <Link to="/accountManage/teamList">团队列表</Link>
                                        </li>
                                        <li className={2 === this.state.navIndex ? 'a_m_nav_active' : 'hvr-overline-from-left hvr-fade'} onClick={()=>{this.setState({navIndex: 2})}}>
                                            <Link to="/accountManage/marketing">市场推广</Link>
                                        </li>
                                        <li className={3 === this.state.navIndex ? 'a_m_nav_active' : 'hvr-overline-from-left hvr-fade'} onClick={()=>{this.setState({navIndex: 3})}}>
                                            <Link to="/accountManage/contract">契约系统</Link>
                                        </li>
                                        <li className={4 === this.state.navIndex ? 'a_m_nav_active' : 'hvr-overline-from-left hvr-fade'} onClick={()=>{this.setState({navIndex: 4})}}>
                                            <Link to="/accountManage/bankCardManage">银行卡管理</Link>
                                        </li>
                                        <li className={5 === this.state.navIndex ? 'a_m_nav_active' : 'hvr-overline-from-left hvr-fade'} onClick={()=>{this.setState({navIndex: 5})}}>
                                            <Link to="/accountManage/security">安全中心</Link>
                                        </li>
                                        <li className={6 === this.state.navIndex ? 'a_m_nav_active' : 'hvr-overline-from-left hvr-fade'} onClick={()=>{this.setState({navIndex: 6})}}>
                                            <Link to="/accountManage/message">站内信</Link>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    {this.props.children}
                                </div>
                            </div>
                        </Col>
                    </Row>
                </QueueAnim>
            </div>
        );
    }
}
