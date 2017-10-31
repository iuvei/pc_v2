import React, {Component} from 'react';
import {observer} from 'mobx-react';
import { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

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
    state = {
        collapsed: false,
    }
    handleClick(e) {
        console.log('click', e);
    }
    render() {
        return (
            <div className="left_sider">
                <Menu onClick={()=>{this.handleClick()}}
                      mode="vertical"
                      theme="dark"
                >
                    <SubMenu key="sub1" title={<span><img src={left_1} alt=""/></span>}>
                        <MenuItemGroup title="Item 1">
                            <Menu.Item key="1">Option 1</Menu.Item>
                            <Menu.Item key="2">Option 2</Menu.Item>
                        </MenuItemGroup>
                        <MenuItemGroup title="Iteom 2">
                            <Menu.Item key="3">Option 3</Menu.Item>
                            <Menu.Item key="4">Option 4</Menu.Item>
                        </MenuItemGroup>
                    </SubMenu>
                    <SubMenu key="sub2" title={<span><img src={left_2_active} alt=""/></span>}>
                        <MenuItemGroup title="Item 1">
                            <Menu.Item key="5">Option 5</Menu.Item>
                            <Menu.Item key="6">Option 6</Menu.Item>
                        </MenuItemGroup>
                    </SubMenu>
                    <SubMenu key="sub3" title={<span><img src={left_3} alt=""/></span>}>
                        <MenuItemGroup title="Item 1">
                            <Menu.Item key="9">Option 9</Menu.Item>
                            <Menu.Item key="10">Option 10</Menu.Item>
                            <Menu.Item key="11">Option 11</Menu.Item>
                            <Menu.Item key="12">Option 12</Menu.Item>
                        </MenuItemGroup>
                    </SubMenu>
                    <SubMenu key="sub4" title={<span><img src={left_4} alt=""/></span>}>
                        <MenuItemGroup title="Item 1">
                            <Menu.Item key="111">Option 1</Menu.Item>
                            <Menu.Item key="211">Option 2</Menu.Item>
                        </MenuItemGroup>
                        <MenuItemGroup title="Iteom 2">
                            <Menu.Item key="31">Option 3</Menu.Item>
                            <Menu.Item key="41">Option 4</Menu.Item>
                        </MenuItemGroup>
                    </SubMenu>
                    <SubMenu key="sub5" title={<span><img src={left_5} alt=""/></span>}>
                        <MenuItemGroup title="Item 1">
                            <Menu.Item key="1111">Option 1</Menu.Item>
                            <Menu.Item key="2111">Option 2</Menu.Item>
                        </MenuItemGroup>
                    </SubMenu>
                </Menu>
            </div>
        );
    }
}

