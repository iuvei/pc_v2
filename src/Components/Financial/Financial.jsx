import React, {Component} from 'react';
import {observer} from 'mobx-react';
import {Link} from 'react-router';
import { Row, Col } from 'antd';
import QueueAnim from 'rc-queue-anim';

import './Financial.scss';
@observer
export default class Financial extends Component {
    constructor(props){
        super(props);
        this.state = {
            navIndex: 0,
        }
    };
    onChangeTitle() {
        switch(this.state.navIndex)
        {
            case 0:
                return '充值';
                break;
            case 1:
                return '提现';
                break;
            case 2:
                return '充提记录';
                break;
            case 3:
                return '转账';
                break;
            case 4:
                return '转账记录';
                break;
            case 5:
                return '资金账变';
                break;
            default:
                return '充值';
        }
    };
    componentWillMount() {
    };
    componentDidMount() {
    };

    render() {
        return (
            <div className="financing_c_main">
                <QueueAnim duration={1000}
                           animConfig={[
                               { opacity: [1, 0], translateY: [0, 50] }
                           ]}>
                    <Row type="flex" justify="center" align="top" key="financingCenter">
                        <Col span={24}>
                            <div className="a_m_controler">
                                <div className="a_m_title">
                                    <span>财务中心</span>
                                    <span> > </span>
                                    <span>{this.onChangeTitle()}</span>
                                </div>
                                <div className="a_m_nav">
                                    <ul className="a_m_nav_list">
                                        <li className={0 === this.state.navIndex ? 'a_m_nav_active' : 'hvr-overline-from-left hvr-fade'} onClick={()=>{this.setState({navIndex: 0})}}>
                                            <Link to="/financial/recharge">充值</Link>
                                        </li>
                                        <li className={1 === this.state.navIndex ? 'a_m_nav_active' : 'hvr-overline-from-left hvr-fade'} onClick={()=>{this.setState({navIndex: 1})}}>
                                            <Link to="/financial/withdraw">提现</Link>
                                        </li>
                                        <li className={2 === this.state.navIndex ? 'a_m_nav_active' : 'hvr-overline-from-left hvr-fade'} onClick={()=>{this.setState({navIndex: 2})}}>
                                            <Link to="/financial/mentionFillingRecord">充提记录</Link>
                                        </li>
                                        <li className={3 === this.state.navIndex ? 'a_m_nav_active' : 'hvr-overline-from-left hvr-fade'} onClick={()=>{this.setState({navIndex: 3})}}>
                                            <Link to="/financial/transfer">转账</Link>
                                        </li>
                                        <li className={4 === this.state.navIndex ? 'a_m_nav_active' : 'hvr-overline-from-left hvr-fade'} onClick={()=>{this.setState({navIndex: 4})}}>
                                            <Link to="/financial/transferRecord">转账记录</Link>
                                        </li>
                                        <li className={5 === this.state.navIndex ? 'a_m_nav_active' : 'hvr-overline-from-left hvr-fade'} onClick={()=>{this.setState({navIndex: 5})}}>
                                            <Link to="/financial/accountChange">资金账变</Link>
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
