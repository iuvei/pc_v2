import React, {Component} from 'react';
import {observer} from 'mobx-react';

@observer
export default class SelfInfo extends Component {
    render() {
        return (
            <div>
                个人信息
            </div>
        );
    }
}
