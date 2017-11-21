import React, {Component} from 'react';
import {observer} from 'mobx-react';
import { Menu, Affix } from 'antd';
import QueueAnim from 'rc-queue-anim';
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
    constructor(props){
      super(props);
      this.state = {

      };
    };
    handleClick(e) {
        console.log('click', e);
    }
    render() {
        return (
            <Affix offsetTop={120}>
                <QueueAnim duration={1000}
                           animConfig={[
                               { opacity: [1, 0], translateX: [0, -100] }
                           ]}>
                    <div className="left_sider" key="LeftSider">
                        <Menu onClick={()=>{this.handleClick()}}
                              mode="vertical"
                              theme="dark"
                        >
                            <SubMenu key="sub1"  title={<span className="l_s_bg_01"></span>}>
                                <MenuItemGroup title="24小时">
                                    <Menu.Item key="24_1">泰国秒秒彩</Menu.Item>
                                    <Menu.Item key="24_2">泰国300秒</Menu.Item>
                                    <Menu.Item key="24_3">泰国60秒</Menu.Item>
                                    <Menu.Item key="24_4">泰国11选5</Menu.Item>
                                    <Menu.Item key="24_5">河内五分彩</Menu.Item>
                                </MenuItemGroup>
                            </SubMenu>
                            <SubMenu key="sub2" title={<span className="l_s_bg_02"></span>}>
                                <MenuItemGroup title="时时彩系列">
                                    <Menu.Item key="ss_1">重庆时时彩</Menu.Item>
                                    <Menu.Item key="ss_2">新疆时时彩</Menu.Item>
                                    <Menu.Item key="ss_3">天津时时彩</Menu.Item>
                                    <Menu.Item key="ss_4">腾讯分分彩</Menu.Item>
                                    <Menu.Item key="ss_5">北京五分彩</Menu.Item>
                                </MenuItemGroup>
                            </SubMenu>
                            <SubMenu key="sub3" title={<span className="l_s_bg_03"></span>}>
                                <MenuItemGroup title="11选5系列">
                                    <Menu.Item key="11_1">江西11选5</Menu.Item>
                                    <Menu.Item key="11_2">重庆11选5</Menu.Item>
                                    <Menu.Item key="11_3">云南11选5</Menu.Item>
                                    <Menu.Item key="11_4">山东11选5</Menu.Item>
                                    <Menu.Item key="11_5">广东11选5</Menu.Item>
                                </MenuItemGroup>
                            </SubMenu>
                            <SubMenu key="sub4" title={<span className="l_s_bg_04"></span>}>
                                <MenuItemGroup title="快三系列">
                                    <Menu.Item key="ks_1">江苏快三</Menu.Item>
                                    <Menu.Item key="ks_2">北京快三</Menu.Item>
                                    <Menu.Item key="ks_3">黑龙江快三</Menu.Item>
                                    <Menu.Item key="ks_4">泰国快三</Menu.Item>
                                </MenuItemGroup>
                            </SubMenu>
                            <SubMenu key="sub5" title={<span className="l_s_bg_05"></span>}>
                                <MenuItemGroup title="其他系列">
                                    <Menu.Item key="qt_1">排列三</Menu.Item>
                                    <Menu.Item key="qt_2">福彩3D</Menu.Item>
                                    <Menu.Item key="qt_3">北京快乐8</Menu.Item>
                                    <Menu.Item key="qt_4">北京PK10</Menu.Item>
                                    <Menu.Item key="qt_5">香港六合彩</Menu.Item>
                                    <Menu.Item key="qt_6">幸运28</Menu.Item>
                                    <Menu.Item key="qt_7">河南481</Menu.Item>
                                    <Menu.Item key="qt_8">急速赛车</Menu.Item>
                                    <Menu.Item key="qt_9">加拿大赛车</Menu.Item>
                                </MenuItemGroup>
                            </SubMenu>
                        </Menu>
                    </div>
                </QueueAnim>
            </Affix>
        );
    }
}

