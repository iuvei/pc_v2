import React, {Component} from 'react';
import {observer} from 'mobx-react';

import './HomeMainLottery.scss'

import home_lottery01 from '../Img/home_lottery01.jpg';
import home_lottery02 from '../Img/home_lottery02.jpg';
import home_lottery03 from '../Img/home_lottery03.jpg';

@observer
export default class HomeMainLottery extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    };

    render() {
        return (
            <ul className="home_m_lottery clear">
                <li>
                    <img src={home_lottery01} width="100%" alt=""/>
                    <div className="home_m_lottery_type home_m_lottery_type_hover">
                        <h3>重庆时时彩</h3>
                        <h4>重庆市福利彩票发行中心承销的福彩快开彩票</h4>
                        <a href="javascript:void(0)" className="home_m_gaming">立即游戏</a>
                    </div>
                </li>
                <li>
                    <img src={home_lottery02} width="100%" alt=""/>
                    <div className="home_m_lottery_type home_m_lottery_type_hover">
                        <h3>腾讯分分彩</h3>
                        <h4>重庆市福利彩票发行中心承销的福彩快开彩票</h4>
                        <a href="javascript:void(0)" className="home_m_gaming">立即游戏</a>
                    </div>
                </li>
                <li>
                    <img src={home_lottery03} width="100%" alt=""/>
                    <div className="home_m_lottery_type home_m_lottery_type_hover">
                        <h3>泰国300秒</h3>
                        <h4>重庆市福利彩票发行中心承销的福彩快开彩票</h4>
                        <a href="javascript:void(0)" className="home_m_gaming">立即游戏</a>
                    </div>
                </li>
            </ul>
        )
    }
}
