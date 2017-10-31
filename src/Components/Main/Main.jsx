import { observer } from 'mobx-react';
import React, { Component } from 'react';
import { hashHistory } from 'react-router';
import { Row, Col  } from 'antd';
import QueueAnim from 'rc-queue-anim';
import HeaderNav from '../Common/HeaderNav/headerNav'
import Footer from '../Common/Footer/Footer'
import LeftSider from '../Lottery/LeftSider/LeftSider';
import './Main.scss';

@observer
export default class Main extends Component {
    render() {
        return (
            <div className="berCenter">
                <div className="berCenter_bg">
                    <header>
                        <HeaderNav/>
                    </header>
                    <Row style={{display: hashHistory.getCurrentLocation().pathname === '/home' ? 'none' : '' }} type="flex" justify="center" align="top" className="main_width" >
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
                    <div style={{display: hashHistory.getCurrentLocation().pathname === '/home' ? '' : 'none' }}>
                        {this.props.children}
                    </div>
                    <footer>
                        <Footer/>
                    </footer>
                </div>
            </div>
        );
    }
}


