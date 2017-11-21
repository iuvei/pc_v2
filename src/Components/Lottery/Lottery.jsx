import React, {Component} from 'react';
import {observer} from 'mobx-react';
import { Row, Col } from 'antd';

import './Lottery.scss';

import ContentTop from './ContentTop/ContentTop';
import RightSider from './RightSider/RightSider';
import ContentMian from './ContentMain/ContentMian';

@observer
export default class Lottery extends Component {

    render() {
        return (
            <div>
                <Row type="flex" justify="center" align="top" key="betcenter">
                    <Col span={20}>
                        <ContentTop key="ContentTop"/>
                        <ContentMian key="ContentMian"/>
                    </Col>
                    <Col span={4}  >
                        <RightSider/>
                    </Col>
                </Row>
            </div>
        );
    }
}
