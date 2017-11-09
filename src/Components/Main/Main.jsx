import { observer } from 'mobx-react';
import React, { Component } from 'react';
import { hashHistory } from 'react-router';
import { Row, Col  } from 'antd';
import HeaderNav from '../Common/HeaderNav/headerNav'
import Footer from '../Common/Footer/Footer'
import LeftSider from '../Lottery/LeftSider/LeftSider';
import RightPlug from '../Common/RightPlug/RightPlug'
import './Main.scss';

@observer
export default class Main extends Component {
    showLeftSider() {
        if (hashHistory.getCurrentLocation().pathname === '/home' || hashHistory.getCurrentLocation().pathname === '/activity' || hashHistory.getCurrentLocation().pathname === '/activity/activityDetails') {
            return true
        } else {
            return false
        }
    };
    render() {
        return (
            <div>
                <header>
                    <HeaderNav/>
                </header>
                <div className="berCenter_bg" style={{display: this.showLeftSider() ? 'none' : '' }}>
                    <Row type="flex" justify="center" align="top" className="main_width" >
                        <Col span={1} style={{zIndex: '1'}}>
                            <LeftSider/>
                        </Col>
                        <Col span={23}>
                            {this.props.children}
                        </Col>
                    </Row>
                </div>
                <div style={{display: this.showLeftSider() ? '' : 'none' }}>
                    {this.props.children}
                </div>
                <RightPlug/>
                <footer>
                    <Footer/>
                </footer>
            </div>
        );
    }
}


