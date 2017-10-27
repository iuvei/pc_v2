import { observer } from 'mobx-react';
import React, { Component, PropTypes } from 'react';
import { Row, Col  } from 'antd';
import QueueAnim from 'rc-queue-anim';
import HeaderNav from '../Common/HeaderNav/headerNav'
import Footer from '../Common/Footer/Footer'
import LeftSider from '../Betting/LeftSider/LeftSider';
import './Home.scss';

@observer
export default class Home extends Component {
    render() {
        return (
            <div className="berCenter">
                <div className="berCenter_bg">
                    <header>
                        <HeaderNav/>
                    </header>
                    <Row type="flex" justify="center" align="top" className="main_width">
                        <Col span={1} style={{zIndex: '1'}}>
                            <QueueAnim duration={1000}
                                       animConfig={[
                                           { opacity: [1, 0], translateX: [0, -100] }
                                       ]}>
                                <LeftSider key="LeftSider"/>
                            </QueueAnim>
                        </Col>
                        <Col span={23}>
                            {this.props.children}
                        </Col>
                    </Row>
                    <footer>
                        <Footer/>
                    </footer>
                </div>
            </div>
        );
    }
}


