import React, {Component} from 'react';
import {observer} from 'mobx-react';
import { InputNumber,Input, Slider, Button, Table, Radio } from 'antd';

import './Marketing.scss'

@observer
export default class Marketing extends Component {
    constructor(props){
      super(props);
      this.state = {
          count: 90,

          iconLoadingLink: false,
          iconLoadingRegister: false,
          data: [],
          pagination: {},
          loading: false,
          radioMemberValue: 1, //默认选中代理
          registerLink: 0, // 默认选中注册下级
          slider:{
              sliderValue: 1850,
              disabledMinus: false,
              sliderMin: 1800,
              sliderMax:1956,
          },
      }
    };

    // 生成推广链接
    enterIconLoadingLink() {
        this.setState({ iconLoadingLink: true });
    };
    // 注册下级
    enterIconLoadingRegister() {
        this.setState({ iconLoadingRegister: true });
    };
    // 奖金组设置
    onSetBonus(value) {
        console.log('changed1111', value);
    };
    // 选择代理或会员
    onChangeMember(e) {
        console.log('radio checked', e.target.value);
        this.setState({
            radioMemberValue: e.target.value,
        });
    };
    handleTableChange = (pagination, filters, sorter) => {
        const pager = { ...this.state.pagination };
        pager.current = pagination.current;
        this.setState({
            pagination: pager,
        });
        this.fetch({
            results: pagination.pageSize,
            page: pagination.current,
            sortField: sorter.field,
            sortOrder: sorter.order,
            ...filters,
        });
    };
    fetch = (params = {}) => {
        console.log('params:', params);
        this.setState({ loading: true });
        fetch('https://randomuser.me/api?results=5',{
            // body: JSON.stringify({
            //             results: 10,
            //             ...params,
            // })
        }) .then(function(response) {
            return response.json()
        }).then((json) => {
            console.log(json)
            const pagination = { ...this.state.pagination };
            // Read total count from server
            // pagination.total = data.totalCount;
            pagination.total = 200;
            this.setState({
                loading: false,
                data: json.results,
                pagination,
            });
        }).catch((ex) => {
            console.log('parsing failed', ex)
        })
    };

    componentDidMount() {
        // this.fetch();
    };
    // 滑动条
    onChangeSlider(value) {
        let slider = this.state.slider;
        slider.sliderValue = value;
        // this.setState();
        this.forceUpdate();
        if(this.state.slider.sliderValue <= this.state.slider.sliderMin) {
            // this.setState(preState=>{
            //     preState.slider.disabledMinus = true
            // })
        } else {
            // this.setState(preState=>{
            //     preState.slider.disabledMinus = false
            // })
        }
    };

    render() {
        const columns = [
            {
                title: '链接地址',
                dataIndex: 'name2121',
                // width: '20%',
            }, {
                title: '用户类型',
                dataIndex: 'name323',
            }, {
                title: '返点级别',
                dataIndex: 'email',
            }, {
                title: '时间',
                dataIndex: 'gender',
            }, {
                title: '注册数',
                dataIndex: 'name',
            }, {
                title: '备注',
                dataIndex: 'email4',
            }, {
                title: '启用/禁止',
                dataIndex: 'email5',
            }, {
                title: '操作',
                dataIndex: 'email6',
            }];
        const RadioGroup = Radio.Group;

        return (
            <div className="marke_k_main">
                <div className="marke_k_main_top">
                    {
                        this.state.registerLink === 0 ?
                            <ul className="marke_k_list">
                                <li>
                                    <span className="marke_k_left left">推广方式：</span>
                                    <ul className="marke_k_register_link left">
                                        <li className={this.state.registerLink === 0 ? 'register_link_active' : ''} onClick={()=>{this.setState({registerLink: 0})}}>注册下级</li>
                                        <li className={this.state.registerLink === 1 ? 'register_link_active' : ''} onClick={()=>{this.setState({registerLink: 1})}}>推广链接</li>
                                    </ul>
                                </li>
                                <li>
                                    <span className="marke_k_left">用户类型：</span>
                                    <span>
                                            <RadioGroup onChange={(e)=>{this.onChangeMember(e)}} value={this.state.radioMemberValue}>
                                                <Radio value={1}>代理</Radio>
                                                <Radio value={0}>会员</Radio>
                                              </RadioGroup>
                                        </span>
                                </li>
                                <li>
                                    <span className="marke_k_left">用户名：</span>
                                    <Input size="large" placeholder="请输入您的用户名" />
                                    <span className="inputText">由字母或数字组成6-16，首字不能以0或者o开头</span>
                                </li>
                                <li>
                                    <span className="marke_k_left">密码：</span>
                                    <Input size="large" placeholder="请输入您的密码" />
                                    <span className="inputText">由字母和数字组成6-16字符</span>
                                </li>
                                <li>
                                    <span className="marke_k_left">昵称：</span>
                                    <Input size="large" placeholder="请输入您的昵称" />
                                    <span className="inputText">由2-6个字符组成</span>
                                </li>
                                <li>
                                    <span className="marke_k_left">奖金组：</span>
                                    <InputNumber min={1} max={10} defaultValue={3} size="large" onChange={(value)=>{this.onSetBonus(value)}} />
                                    <span className="inputText" style={{color: '#444'}}>
                                        自身返点：12.5 &nbsp;&nbsp;
                                        用户返点：12.5 &nbsp;&nbsp;
                                        <strong>保留返点：0.3%</strong>
                                    </span>
                                </li>
                                <li>
                                    <span className="marke_k_left"></span>
                                    <span>该奖金组剩余配额：无限</span>
                                </li>
                                <li>
                                    <span className="marke_k_left"></span>
                                    <ul className="m_k_slider">
                                        <li>{this.state.slider.sliderMin}</li>
                                        <li>
                                            <Button disabled={this.state.slider.disabledMinus}
                                                    onClick={()=>{
                                                        this.setState(preState => (
                                                            preState.slider.sliderValue--
                                                        ))
                                                    }}>减</Button>
                                        </li>
                                        <li style={{width: '400px'}}>
                                            <Slider min={this.state.slider.sliderMin}
                                                    max={this.state.slider.sliderMax}
                                                    onChange={(value)=>{this.onChangeSlider(value)}}
                                                    value={this.state.slider.sliderValue} />
                                        </li>
                                        <li>
                                            <Button disabled={this.state.slider.disabledMinus}
                                                    onClick={()=>{
                                                        this.setState(preState => (
                                                            preState.slider.sliderValue++
                                                        ))
                                                    }}>加</Button>
                                        </li>
                                        <li>{this.state.slider.sliderMax}</li>
                                    </ul>
                                </li>
                                <li>
                                    <span className="marke_k_left"></span>
                                    <Button type="primary" size="large" loading={this.state.iconLoadingRegister} onClick={()=>{this.enterIconLoadingRegister()}}>
                                        提交用户
                                    </Button>
                                </li>
                            </ul>:
                            <ul className="marke_k_list">
                                <li>
                                    <span className="marke_k_left left">推广方式：</span>
                                    <ul className="marke_k_register_link left">
                                        <li className={this.state.registerLink === 0 ? 'register_link_active' : ''} onClick={()=>{this.setState({registerLink: 0})}}>注册下级</li>
                                        <li className={this.state.registerLink === 1 ? 'register_link_active' : ''} onClick={()=>{this.setState({registerLink: 1})}}>推广链接</li>
                                    </ul>
                                </li>
                                <li>
                                    <span className="marke_k_left">用户类型：</span>
                                    <span>
                                        <RadioGroup onChange={(e)=>{this.onChangeMember(e)}} value={this.state.radioMemberValue}>
                                            <Radio value={1}>代理</Radio>
                                            <Radio value={0}>会员</Radio>
                                          </RadioGroup>
                                    </span>
                                </li>
                                <li>
                                    <span className="marke_k_left">奖金组设置：</span>
                                    <span>
                                        <InputNumber min={1} max={10} defaultValue={3} size="large" onChange={(value)=>{this.onSetBonus(value)}} />
                                    </span>
                                </li>
                                <li>
                                    <span className="marke_k_left"></span>
                                    <span>该奖金组剩余配额：无限</span>
                                </li>
                                <li>
                                    <span className="marke_k_left"></span>
                                    <ul className="m_k_slider">
                                        <li>{this.state.slider.sliderMin}</li>
                                        <li>
                                            <Button disabled={this.state.slider.disabledMinus}
                                                    onClick={()=>{
                                                        this.setState(preState => (
                                                            preState.slider.sliderValue--
                                                        ))
                                                    }}>减</Button>
                                        </li>
                                        <li style={{width: '400px'}}>
                                            <Slider min={this.state.slider.sliderMin}
                                                    max={this.state.slider.sliderMax}
                                                    onChange={(value)=>{this.onChangeSlider(value)}}
                                                    value={this.state.slider.sliderValue} />
                                        </li>
                                        <li>
                                            <Button disabled={this.state.slider.disabledMinus}
                                                    onClick={()=>{
                                                        this.setState(preState => (
                                                            preState.slider.sliderValue++
                                                        ))
                                                    }}>加</Button>
                                        </li>
                                        <li>{this.state.slider.sliderMax}</li>
                                    </ul>
                                </li>
                                <li>
                                    <span className="marke_k_left">备注：</span>
                                    <Input size="large" placeholder="备注" />
                                    <span className="inputText">最多可输入六个汉字</span>
                                </li>
                                <li>
                                    <span className="marke_k_left"></span>
                                    <Button type="primary" size="large" icon="plus" loading={this.state.iconLoadingLink} onClick={()=>{this.enterIconLoadingLink()}}>
                                        生成推广链接
                                    </Button>
                                </li>
                            </ul>
                    }
                </div>
                <p className="marke_k_register_site">您的推广注册地址</p>
                <div className="t_l_table_list">
                    <Table columns={columns}
                           rowKey={record => record.registered}
                           dataSource={this.state.data}
                           pagination={this.state.pagination}
                           loading={this.state.loading}
                           onChange={this.handleTableChange}
                    />
                </div>
            </div>
        );
    }
}
