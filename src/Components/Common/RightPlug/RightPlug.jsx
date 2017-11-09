import { observer } from 'mobx-react';
import React, { Component } from 'react';

import right01 from './Img/right01.png'
import right02 from './Img/right02.png'
import right03 from './Img/right03.png'
import right04 from './Img/right04.png'
import right05 from './Img/right05.png'
import right06 from './Img/right06.png'
import right07 from './Img/right07.png'
import './Rightplug.scss'

@observer
export default class RightPlug extends Component {

    render() {
        const rightArr = [right01, right02, right03, right04, right05, right06, right07];
        return (
            <div className="right_plug">
                <ul className="right_list">
                    {
                        rightArr.map((item, index)=> {
                            return (
                                <li key={index}>
                                    <img src={item} alt=""/>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        );
    }
}
