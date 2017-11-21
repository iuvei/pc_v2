import React, {Component} from 'react';
import {observer} from 'mobx-react';

import './EA.scss';

import ea from './Img/ea.png';
@observer
export default class EA extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    };

    render() {
        return (
            <div className="ea">
                <div className="ea_content">
                    <img className="ea_img" src={ea} alt=""/>

                </div>
            </div>
        )
    }
}
