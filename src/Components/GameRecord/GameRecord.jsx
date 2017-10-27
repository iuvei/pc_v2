import React, {Component} from 'react';
import {observer} from 'mobx-react';
import { Row, Col  } from 'antd';
import QueueAnim from 'rc-queue-anim';

import './GameRecord.scss'
import LotteryBet from './LotteryBet/LotteryBet'

@observer
export default class GameRecord extends Component {
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
        const navList = ['彩票投注', '追号记录', '真人投注', '体育投注', 'PT投注', '博饼投注'];
        return (
            <div className="g_r_main mix_height">
                <QueueAnim duration={1000}
                animConfig={[
                { opacity: [1, 0], translateY: [0, 50] }
                ]}>
                    <Row type="flex" justify="center" align="top" key="GameRecord">
                        <Col span={24}>
                            <div className="a_m_controler">
                                <div className="a_m_title">
                                    <span>游戏记录</span>
                                    <span> > </span>
                                    <span>彩票投注</span>
                                </div>
                                <div className="a_m_nav">
                                    <ul className="a_m_nav_list a_m_nav_list_p">
                                        {
                                            navList.map((value, index)=>{
                                                return (
                                                    <li className={index === this.state.navIndex ? 'a_m_nav_active' : 'hvr-overline-from-left hvr-fade'} onClick={()=>{this.toggleNav(index)}} key={index}>{value}</li>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                                <div>
                                    <LotteryBet navIndex={this.state.navIndex}/>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </QueueAnim>
            </div>
        );
    }
}
