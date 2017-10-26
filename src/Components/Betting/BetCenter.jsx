import React, {Component} from 'react';
import {observer} from 'mobx-react';
import { Row, Col } from 'antd';
import QueueAnim from 'rc-queue-anim';

import './BetCenter.scss';

import LeftSider from './LeftSider/LeftSider';
import ContentTop from './ContentTop/ContentTop';
import RightSider from './RightSider/RightSider';
import ContentMian from './ContentMain/ContentMian';

@observer
export default class BetCenter extends Component {

    render() {
        return (
            <div className="main">
                <QueueAnim>
                    <div key="div">
                        <div className="b_c_left_sider" >
                            <QueueAnim  duration={1000}
                                        animConfig={[
                                                        { opacity: [1, 0], translateX: [0, -100] }
                                                    ]}
                                        key="QueueAnim_LeftSider">
                                <LeftSider key="LeftSider"/>
                            </QueueAnim>
                        </div>
                        <Row type="flex" justify="center" align="top">
                            <Col span={1}></Col>
                            <Col span={19}>
                                <ContentTop key="ContentTop"/>
                                <ContentMian key="ContentMian"/>
                            </Col>
                            <Col span={4}>
                                <QueueAnim duration={1000}
                                animConfig={[
                                                { opacity: [1, 0], translateX: [0, 100] }
                                            ]}
                                key="QueueAnim_RightSider">
                                    <RightSider key="RightSider"/>
                                </QueueAnim>
                            </Col>
                        </Row>
                    </div>
                </QueueAnim>
            </div>
        );
    }
}
