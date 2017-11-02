import React, {Component} from 'react';
import {observer} from 'mobx-react';

import './HomeMainActive.scss'

import home_active01 from '../Img/home_active01.png'
import home_active02 from '../Img/home_active02.png'
import home_active03 from '../Img/home_active03.png'
import home_active04 from '../Img/home_active04.png'

@observer
export default class HomeMainActive extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    };

    render() {
        return (
            <div className="home_m_active">
                <div className="home_favourable_active">
                    <p><i style={{color:'#BC0000'}}>优惠</i>活动</p>
                    <h5>FAVOURABLE ACTIVITY</h5>
                </div>
                <ul className="home_m_active_list clear">
                    <li>
                        <a href="#">
                            <img src={home_active01} alt=""/>
                            <p className="home_m_active_type">每日签到</p>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src={home_active02} alt=""/>
                            <p className="home_m_active_type">周反水</p>
                        </a>
                    </li><li>
                    <a href="#">
                        <img src={home_active03} alt=""/>
                        <p className="home_m_active_type">天天领红包</p>
                    </a>
                </li><li>
                    <a href="#">
                        <img src={home_active04} alt=""/>
                        <p className="home_m_active_type">投注有礼</p>
                    </a>
                </li>
                </ul>
            </div>
        )
    }
}
