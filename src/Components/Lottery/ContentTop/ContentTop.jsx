import React, {Component} from 'react';
import {observer} from 'mobx-react';
import { Row, Col, Switch } from 'antd';
import QueueAnim from 'rc-queue-anim';
import './ContentTop.scss'

import cz_logo_11_5 from './Img/cz_logo_11_5.png'

@observer
export default class ContentTop extends Component {
    constructor(props) {
        super(props);
    }
    // 音效开关
    onChanges(checked) {
        console.log(`switch to ${checked}`);
    };

    render() {
        return (
            <QueueAnim duration={1000}
                       animConfig={[
                           { opacity: [1, 0], translateY: [0, 20] }
                       ]}>
                <div className="bet_content" key="ContentTop">
                    <div className="content_title">
                        <ul className="title_list clear">
                            <li>
                                <div className="content_cz_logo">
                                    <img src={cz_logo_11_5} alt=""/>
                                </div>
                            </li>
                            <li>
                                <ul className="content_center">
                                    <li className="content_cz_text">
                                        <div className="cz_name m_bottom">
                                            <span>加拿大11选5</span>
                                            <span className="c_t_facade">官网</span>
                                        </div>
                                        <div className="cz_periods m_bottom">
                                            <span style={{color:'#FFE38E'}}>20170811-056</span>
                                            <span>期</span>
                                        </div>
                                        <div className="voice_switch m_bottom">
                                            <span>音效</span>
                                            <Switch size="small" defaultChecked={false} onChange={(checked) => this.onChanges(checked)} />
                                        </div>
                                    </li>
                                    <li className="abort_time">
                                        <p className="abort_time_text">投注截止还有</p>
                                        <div className="c_m_count_down">
                                            <Row type="flex" align="bottom">
                                                <Col span={6}>
                                                    <div className="item_text">00</div>
                                                </Col>
                                                <Col span={2}>
                                                    <div className="item_type">时</div>
                                                </Col>
                                                <Col span={6}>
                                                    <div className="item_text">00</div>
                                                </Col>
                                                <Col span={2}>
                                                    <div className="item_type">分</div>
                                                </Col>
                                                <Col span={6}>
                                                    <div className="item_text">00</div>
                                                </Col>
                                                <Col span={2}>
                                                    <div className="item_type">秒</div>
                                                </Col>
                                            </Row>
                                        </div>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <div className="praise_mark">
                                    <div className="praise_mark_text">
                                        <span>第<span style={{color:'#FFE38E'}}>20170811-055</span>期&nbsp;开奖号码</span>
                                        <span className="method_introduce right">玩法介绍</span>
                                    </div>
                                    <ul className="ball_number clear">
                                        <li>5</li>
                                        <li>5</li>
                                        <li>5</li>
                                        <li>5</li>
                                        <li>5</li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </QueueAnim>
        );
    }
}
