import React, {Component} from 'react';
import {observer} from 'mobx-react';
import { InputNumber,Input, Checkbox, Button } from 'antd';

import './Marketing.scss'

@observer
export default class Marketing extends Component {

    onChange(value) {
        console.log('changed', value);
    };
    onChangeCheckbox(e) {
        console.log(`checked = ${e.target.checked}`);
    };
    render() {
        return (
            <div className="marke_k_main">
                <div>
                    <ul className="marke_k_list">
                        <li>
                            <span className="marke_k_left left">推广方式：</span>
                            <ul className="marke_k_register_link left">
                                <li className="register_link_active">注册下级</li>
                                <li>推广链接</li>
                            </ul>
                        </li>
                        <li>
                            <span className="marke_k_left">用户类型：</span>
                            <span>
                                <Checkbox onChange={this.onChangeCheckbox}>Checkbox</Checkbox>
                                <Checkbox onChange={this.onChangeCheckbox}>Checkbox</Checkbox>
                            </span>
                        </li>
                        <li>
                            <span className="marke_k_left">奖金组设置：</span>
                            <span>
                                <InputNumber min={1} max={10} defaultValue={3} onChange={this.onChange()} />
                            </span>
                        </li>
                        <li>
                            <span className="marke_k_left">备注：</span>
                            <span>
                                <Input placeholder="Basic usage" />
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}
