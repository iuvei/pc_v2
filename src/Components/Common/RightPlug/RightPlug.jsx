import React, {Component} from 'react';

import backOld from './backOld.png'

export default class RightPlug extends Component {

    render() {
        return (
            <div>
                <ul className="right_list">
                    <li>
                        <p><img src={backOld} alt="返回旧版"/></p>
                        <p>返回旧版</p>
                    </li>
                    <li>
                        <p><img src={backOld} alt="返回旧版"/></p>
                        <p>返回旧版</p>
                    </li>
                    <li>
                        <p><img src={backOld} alt="返回旧版"/></p>
                        <p>返回旧版</p>
                    </li>
                    <li>
                        <p><img src={backOld} alt="返回旧版"/></p>
                        <p>返回旧版</p>
                    </li>
                    <li>
                        <p><img src={backOld} alt="返回旧版"/></p>
                        <p>返回旧版</p>
                    </li>
                </ul>
            </div>
        );
    }
}
