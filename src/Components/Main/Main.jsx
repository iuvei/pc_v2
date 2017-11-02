import { observer } from 'mobx-react';
import React, { Component } from 'react';
import { hashHistory } from 'react-router';
import { Row, Col  } from 'antd';
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
                            <LeftSider/>
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


