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
        if (hashHistory.getCurrentLocation().pathname === '/home' ||
            hashHistory.getCurrentLocation().pathname === '/activity' ||
            hashHistory.getCurrentLocation().pathname === '/activity/activityDetails' ||
            hashHistory.getCurrentLocation().pathname === '/bobing' ||
            hashHistory.getCurrentLocation().pathname === '/tendency') {
            return true
        } else {
            return false
        }
    };
    showFooter() {
        if (hashHistory.getCurrentLocation().pathname === '/tendency' ) {
            return true
        } else {
            return false
        }
    };
    render() {
        const contain = <div>
            <div className="berCenter_bg">
                <Row type="flex" justify="center" align="top" className="main_width" >
                    <Col span={1} style={{zIndex: '1'}}>
                        <LeftSider/>
                    </Col>
                    <Col span={23}>
                        {this.props.children}
                    </Col>
                </Row>
            </div>
            <RightPlug/>
        </div>;
        return (
            <div>
                <header>
                    <HeaderNav/>
                </header>
                {
                    this.showLeftSider() ? this.props.children : contain
                }
                <footer style={{display: this.showFooter ? 'none' : ''}}>
                    <Footer/>
                </footer>
            </div>
        );
    }
}


