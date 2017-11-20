/*安全中心*/
import React, {Component} from 'react';
import {observer} from 'mobx-react';
import { Select,Input,Button,Modal } from 'antd';

import   './Security.scss'

@observer
export default class Security extends Component {
    constructor(props){
        super(props);
        this.state = {
            iconLoadingRecharge: false,
            navListIndex: 3,
            visible1: false,
            visible2: false,
        }
    };

    handleChange(value) {
        console.log(`selected ${value}`);
    }
    onOk() {
        this.setState({ iconLoadingSecurity: true });
    }
    showModal(value) {
        if (value === 'forget_m_pwd') {
            this.setState({
                visible1: true,
            });
        }

    };

    // 不同选项间切换

    securityMain() {
        const ul_0 = <div  className="sec_k_main clear">
            <ul className="sec_k_list" style={{paddingBottom:226}}>
                <li >
                    <span className="sec_k_left">输入旧登陆密码：</span>
                    <Input size="large" placeholder="" />
                </li>
                <li>
                    <span className="sec_k_left">输入新登陆密码：</span>
                    <Input size="large" placeholder="" />
                </li>
                <li>
                    <span className="sec_k_left">确定新登陆密码：</span>
                    <Input size="large" placeholder="" />
                </li>
                <li className='s_advice' style={{color:'#85888D'}}>
                    由字母和数字组成6-16个字符
                </li>
                <li className="s_m_primary_btn">
                    <span className="sec_k_left"></span>
                    <Button type="primary" size="large" loading={this.state.iconLoadingSecurity} onClick={()=>{this.onOk()}}>
                        确认修改
                    </Button>
                </li>
            </ul>
        </div>;
        const ul_1 = <div  className="sec_k_main clear">
            <ul className="sec_k_list" style={{paddingBottom:226}}>
                <li style={{marginLeft:108}}>
                    <span className="sec_k_left">输入旧资金密码：</span>
                    <Input size="large" placeholder="" />
                    <a className='forget_m_pwd'  onClick={()=>{this.showModal('forget_m_pwd')}}>忘记资金密码？</a>
                </li>
                <li>
                    <span className="sec_k_left">输入新资金密码：</span>
                    <Input size="large" placeholder="" />
                </li>
                <li>
                    <span className="sec_k_left">确定新资金密码：</span>
                    <Input size="large" placeholder="" />
                </li>
                <li className='s_advice' style={{color:'#85888D'}}>
                    由字母和数字组成6-16个字符,资金密码不能与登录密码相同
                </li>
                <li className="s_m_primary_btn">
                    <span className="sec_k_left"></span>
                    <Button type="primary" size="large" loading={this.state.iconLoadingSecurity} onClick={()=>{this.onOk()}}>
                        确认修改
                    </Button>
                </li>
            </ul>
            <div>
                <Modal
                    title="忘记资金密码"
                    wrapClassName="center-modal-sec"
                    visible={this.state.visible1}
                    onCancel={()=>{this.setState({ visible1: false })}}
                    footer={null}
                >
                    <div className="sec_k_main clear">
                        <ul className="sec_k_list">
                            <li>
                                <span className="sec_k_left">安全问题1：</span>
                                <Select defaultValue="lucy" style={{ width: 320 }} onChange={(value)=>{this.handleChange(value)}}>
                                    <Option value="a">您的小学班主任名字是？</Option>
                                    <Option value="lucy">您的小学班主任名字是</Option>
                                    <Option value="disabled" disabled>您的小学班主任名字是</Option>
                                    <Option value="Yiminghe">您的小学班主任名字是</Option>
                                </Select>

                            </li>
                            <li>
                                <span className="sec_k_left">输入答案1：</span>
                                <Input size="large" placeholder="" />
                            </li>
                            <li>
                                <span className="sec_k_left">安全问题2：</span>
                                <Select defaultValue="lucy" style={{ width: 320}} onChange={(value)=>{this.handleChange(value)}}>
                                    <Option value="jack">对您影响最大的人名字是？</Option>
                                    <Option value="lucy">对您影响最大的人名字是？</Option>
                                    <Option value="disabled" disabled>对您影响最大的人名字是？</Option>
                                    <Option value="Yiminghe">对您影响最大的人名字是？</Option>
                                </Select>
                            </li>
                            <li>
                                <span className="sec_k_left">输入答案2：</span>
                                <Input size="large" placeholder="" />
                            </li>
                            <li>
                                <span className="sec_k_left">重置资金密码：</span>
                                <Input size="large" placeholder="" />
                            </li>
                            <li className="s_m_primary_btn">
                                <span className="sec_k_left"></span>
                                <Button type="primary" size="large" loading={this.state.iconLoadingSecurity} onClick={()=>{this.onOk()}}>
                                    确定
                                </Button>
                            </li>

                        </ul>
                    </div>


                </Modal>
            </div>
        </div>;
        const ul_2 = <div  className="sec_k_main clear">
            <ul className="sec_k_list" style={{paddingBottom:316}}>
                <li >
                    <span className="sec_k_left">输入您的邮箱：</span>
                    <Input size="large" placeholder="" />
                </li>
                <li>
                    <span className="sec_k_left">确认邮箱地址：</span>
                    <Input size="large" placeholder="" />
                </li>
                <li className="s_m_primary_btn">
                    <span className="sec_k_left"></span>
                    <Button type="primary" size="large"  className='sec_m_btn' loading={this.state.iconLoadingSecurity} onClick={()=>{this.onOk()}}>
                       提交
                    </Button>
                </li>
            </ul>
        </div>;
        const ul_3 = <div  className="sec_k_main clear">
            <ul className="sec_k_list" style={{paddingBottom:181}}>
            <li>
                <span className="sec_k_left">安全问题1：</span>
                <Select defaultValue="lucy" style={{ width: 320 }} onChange={(value)=>{this.handleChange(value)}}>
                    <Option value="a">您的小学班主任名字是？</Option>
                    <Option value="lucy">您的小学班主任名字是</Option>
                    <Option value="disabled" disabled>您的小学班主任名字是</Option>
                    <Option value="Yiminghe">您的小学班主任名字是</Option>
                </Select>

            </li>
            <li>
                <span className="sec_k_left">输入答案1：</span>
                <Input size="large" placeholder="" />
            </li>
            <li>
                <span className="sec_k_left">安全问题2：</span>
                <Select defaultValue="lucy" style={{ width: 320}} onChange={(value)=>{this.handleChange(value)}}>
                    <Option value="jack">对您影响最大的人名字是？</Option>
                    <Option value="lucy">对您影响最大的人名字是？</Option>
                    <Option value="disabled" disabled>对您影响最大的人名字是？</Option>
                    <Option value="Yiminghe">对您影响最大的人名字是？</Option>
                </Select>
            </li>
            <li>
                <span className="sec_k_left">输入答案2：</span>
                <Input size="large" placeholder="" />
            </li>
            <li>
                <span className="sec_k_left">验证资金密码：</span>
                <Input size="large" placeholder="" />
            </li>
            <li className="s_m_primary_btn">
                <span className="sec_k_left"></span>
                <Button type="primary" size="large" loading={this.state.iconLoadingSecurity} onClick={()=>{this.onOk()}}>
                    确认修改
                </Button>
            </li>

        </ul>
        </div>;

        switch (this.state.navListIndex) {
            case 0:
                return ul_0;
                break;
            case 1:
                return ul_1;
                break;
            case 2:
                return ul_2;
                break;
            case 3:
                return ul_3;
                break;
        }
    }
    render() {
        const navList = ['修改登录密码', '修改资金密码', '绑定邮箱', '设置密保问题'];
        return (
            <div className="security_main">
                <ul className="s_m_select_list">
                    {
                        navList.map((value, index)=>{
                            return <li className={this.state.navListIndex === index ? 's_m_select_list_active' : ''}
                                       onClick={() => {this.setState({navListIndex: index})}} key={index}>{value}</li>
                        })
                    }

                </ul>
                { this.securityMain() }
            </div>
        );
    }
}
