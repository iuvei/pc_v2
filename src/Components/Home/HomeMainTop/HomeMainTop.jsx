import React, {Component} from 'react';
import {observer} from 'mobx-react';
import TweenOne from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import QueueAnim from 'rc-queue-anim';

import './HomeMainTop.scss'

import home_top from '../Img/home_top.jpg';


@observer
export default class HomeMainTop extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    };

    render() {
        return (
            <OverPack
                replay
                playScale={[0.3, 0.1]}
                className="home_m_top"
            >
                <QueueAnim
                    type={['bottom', 'top']}
                    delay={200}
                    // className="home_m_banner"
                    key="text"
                >
                    <div key="OverPack01">
                        <img src={home_top} width="100%" style={{verticalAlign: 'middle'}}/>
                        <div className="home_m_top_text">
                            <h3>MOBILE PHONE CLIENT</h3>
                            <h1>恒彩手机客户端</h1>
                            <h2>随时随地随心，从此财富只在指尖流动</h2>
                            <a href="#" className="home_m_top_download">立即下载</a>
                        </div>
                    </div>
                </QueueAnim>
                <TweenOne
                    animation={{ y: '-=20', yoyo: true, repeat: -1, duration: 1000 }}
                    className="home_m_top_down_icon"
                    key="icon"
                >
                </TweenOne>
            </OverPack>
        )
    }
}
