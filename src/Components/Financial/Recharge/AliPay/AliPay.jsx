/*支付宝*/
import React, {Component} from 'react';
import {observer} from 'mobx-react';

@observer
export default class AliPay extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    };

    render() {
        return (
            <div>
                AliPay
            </div>
        )
    }
}
