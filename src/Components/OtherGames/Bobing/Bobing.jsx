import React, {Component} from 'react';
import {observer} from 'mobx-react';
import { Button } from 'antd';

import bobing_01 from './Img/bobing_01.png'
import './Bobing.scss'

@observer
export default class Bobing extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    };

    render() {
        return (
            <div className="bo_bing">
                <div className="b_b_content">
                    <img src={bobing_01} alt=""/>
                    <p className="b_b_bonus_pool">￥123,456,789</p>
                    <i className="bobing_btn"></i>
                    <p className="account_money">账号金额：10000.00元</p>
                    <Button className="transfer_btn" type="primary">转账</Button>
                </div>
            </div>
        )
    }
}
