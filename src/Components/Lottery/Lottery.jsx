import React, {Component} from 'react';
import {observer} from 'mobx-react';
import { Row, Col } from 'antd';
import QueueAnim from 'rc-queue-anim';

import './Lottery.scss';

import ContentTop from './ContentTop/ContentTop';
import RightSider from './RightSider/RightSider';
import ContentMian from './ContentMain/ContentMian';

@observer
export default class Lottery extends Component {

    render() {
        return (
            <div>
                <QueueAnim duration={1000}
                    animConfig={[
                    { opacity: [1, 0], translateY: [0, 50] }
                    ]}>
                    <Row type="flex" justify="center" align="top" key="betcenter">
                        <Col span={20}>
                            <ContentTop key="ContentTop"/>
                            <ContentMian key="ContentMian"/>
                        </Col>
                        <Col span={4}  >
                            <QueueAnim duration={1000}
                                       animConfig={[
                                           { opacity: [1, 0], translateX: [0, 80] }
                                       ]} key="RightSiderCol">
                                <RightSider key="RightSider"/>
                            </QueueAnim>
                        </Col>
                    </Row>
                </QueueAnim>
            </div>
        );
    }
}
