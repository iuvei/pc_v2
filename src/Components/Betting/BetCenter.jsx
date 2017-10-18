import React, {Component} from 'react';
import {observer} from 'mobx-react';
import { Row, Col } from 'antd';

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
                <div className="b_c_left_sider">
                    <LeftSider/>
                </div>
                <Row type="flex" justify="center" align="top">
                    <Col span={1}>

                    </Col>
                    <Col span={19}>
                        <ContentTop/>
                        <ContentMian/>
                    </Col>
                    <Col span={4}>
                        <RightSider/>
                    </Col>
                </Row>
            </div>
        );
    }
}
