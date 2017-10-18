import React, {Component} from 'react';
import {observer} from 'mobx-react';
import './LeftSider.scss'

import Transform from '../../../CommonJs/transform.react.js';

import left_1 from './Img/left_1.png'
import left_2_active from './Img/left_2_active.png'
import left_3 from './Img/left_3.png'
import left_4 from './Img/left_4.png'
import left_5 from './Img/left_5.png'
import triangle_right from './Img/triangle_right.png'

@observer
export default class LeftSider extends Component {
    constructor(props){
        super(props)
        this.state = {
            visible : 0,
        }
    };
    render() {
        return (
            <div className="left_sider">
                <ul className="left_sider_list">
                    <li>
                        <img src={left_1} alt=""/>
                        {/*<span>24小时系列</span>*/}
                    </li>
                    <li>
                        <img src={left_2_active} alt=""/>
                        {/*<span>时时彩系列</span>*/}
                    </li>
                    <li>
                        <img src={left_3} alt=""/>
                        {/*<span>11选5系列</span>*/}
                    </li>
                    <li>
                        <img src={left_4} alt=""/>
                        {/*<span>快三系列</span>*/}
                    </li>
                    <li>
                        <img src={left_5} alt=""/>
                        {/*<span>其他系列</span>*/}
                    </li>
                    <li>
                        <img src={triangle_right} alt=""/>
                    </li>
                </ul>
            </div>
        );
    }
}
