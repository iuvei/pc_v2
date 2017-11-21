import React, {Component} from 'react';
import {observer} from 'mobx-react';

import './PT.scss'

@observer
export default class PT extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    };

    render() {
        return (
            <div className="pt">

            </div>
        )
    }
}
