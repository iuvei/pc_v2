import React, {Component} from 'react';
import {observer} from 'mobx-react';
import { Row, Col  } from 'antd';

import './GameRecord.scss'
import LeftSider from '../Betting/LeftSider/LeftSider';
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
            <div className="main g_r_main">
                <Row type="flex" justify="center" align="top">
                    <Col span={1}>
                        <LeftSider/>
                    </Col>
                    <Col span={23}>
                        <div className="a_m_controler">
                            <div className="a_m_title">
                                <span>游戏记录</span>
                                <span> > </span>
                                <span>彩票投注</span>
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
                                <LotteryBet navIndex={this.state.navIndex}/>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}
