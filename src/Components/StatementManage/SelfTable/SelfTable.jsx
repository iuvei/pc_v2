import React, {Component} from 'react';
import {observer} from 'mobx-react';

@observer
export default class SelfTable extends Component {
    render() {
        return (
            <div className="self_ta_main">
                个人总表
            </div>
        );
    }
}
