import React, {Component} from 'react';
import {observer} from 'mobx-react';

import './ActivityDetails.scss'
@observer
export default class ActivityDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    };

    render() {
        return (
            <div>
                ActivityDetails
            </div>
        )
    }
}
