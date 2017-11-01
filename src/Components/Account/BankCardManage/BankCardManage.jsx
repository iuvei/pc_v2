/*账户管理 > 银行卡管理*/
import React, {Component} from 'react';
import {observer} from 'mobx-react';
import { Table, Button, Modal, Select, Input } from 'antd';
import { hashHistory } from 'react-router'

import './BankCardManage.scss'

@observer
export default class BankCardManage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            visible: false,
            ModalTitle: true,
        }
    };

    // 申请删除
    showDeleteConfirm() {
        confirm({
            title: '申请删除',
            content: '确定要删除吗?',
            okText: 'Yes',
            okType: 'danger',
            cancelText: 'No',
            onOk() {
                console.log('OK');
            },
            onCancel() {
                console.log('Cancel');
            },
        });
    };
    // 增加修改银行卡号
    showModal(value) {
        if (value === 'add') {
            this.setState({
                visible: true,
                ModalTitle: true,
            });
        } else {
            this.setState({
                visible: true,
                ModalTitle: false,
            });
        }

    };

    onSelectBank(value) {
        console.log('changed', value);
    };
    // 下一步
    enterLoading() {
        this.setState({ loading: true });
    };
    render() {
        const columns = [
            {
                title: '姓名',
                dataIndex: 'name',
                key: 'name',
                render: text => <a href="#">{text}</a>,
            }, {
                title: '银行名',
                dataIndex: 'age',
                key: 'age',
            }, {
                title: '开户行',
                dataIndex: 'address',
                key: 'address',
            },{
                title: '卡号',
                dataIndex: 'address1',
                key: 'address1',
            },{
                title: '绑定时间',
                dataIndex: 'address2',
                key: 'address2',
            }, {
                title: '操作',
                key: 'action',
                render: (text, record) => (
                    <span>
                      <a href="javascript:void(0)" onClick={()=>{this.showModal('amend')}} style={{color: '#CB1313'}}>修改</a>
                      <span className="ant-divider" />
                      <a href="javascript:void(0)" onClick={()=>{this.showDeleteConfirm()}} style={{color: '#3C77CB'}}>申请删除</a>
                    </span>
                ),
            }
        ];
        const data = [
            {
                key: '1',
                name: 'John Brown',
                age: 32,
                address: 'New York No. 1 Lake Park',
            }, {
                key: '2',
                name: 'Jim Green',
                age: 42,
                address: 'London No. 1 Lake Park',
            }, {
                key: '3',
                name: 'Joe Black',
                age: 32,
                address: 'Sidney No. 1 Lake Park',
            }
        ];
        return (
            <div className="b_cm_main">
                <div className="b_cm_text_explain">
                    <p>1、一个账户最多只能绑定5张银行卡，你当前绑定<i> (2) </i>张，还能绑定<i> (3) </i>张。</p>
                    <p>2、如需删除已绑定的银行卡，请点击“申请删除”，之后会有客服人员主动与您连续进行确认。</p>
                    <p>3、为了您的账户资金安全，银行卡“新增”和“修改”将在操作完成2小时0分后，新卡才能发起“向平台提现”。</p>
                </div>
                <div className="b_cm_table">
                    <Table columns={columns} dataSource={data} pagination={false}/>
                </div>

                <Button className="b_cm_btn" type="primary" size="large" icon="plus" onClick={()=>{this.showModal('add')}}>
                    增加绑定
                </Button>
                <Modal
                    width='865px'
                    // bodyStyle={padding:'0'}
                    visible={this.state.visible}
                    title={this.state.ModalTitle === true ? '新增银行卡' : '修改银行卡'}
                    onCancel={()=>{this.setState({ visible: false })}}
                    footer={null}
                >
                    <div className="a_aa_main">
                        <div className="a_aa_form">
                            <ul className="a_aa_list">
                                <li>
                                    <span className="a_aa_left_text">开户银行：</span>
                                    <Select size="large" style={{ width: 280 }} onChange={(value)=>{this.onSelectBank(value)}} placeholder="请选择开户银行">
                                        <Option value="jack">Jack</Option>
                                        <Option value="lucy">Lucy</Option>
                                        <Option value="disabled" disabled>Disabled</Option>
                                        <Option value="Yiminghe">yiminghe</Option>
                                    </Select>
                                </li>
                                <li>
                                    <span className="a_aa_left_text">开户银行区域：</span>
                                    <Select className="a_aa_marg" size="large" style={{ width: 280 }} onChange={(value)=>{this.onSelectBank(value)}} placeholder="请选择省份">
                                        <Option value="jack">Jack</Option>
                                        <Option value="lucy">Lucy</Option>
                                        <Option value="disabled" disabled>Disabled</Option>
                                        <Option value="Yiminghe">yiminghe</Option>
                                    </Select>
                                    <Select size="large" style={{ width: 280 }} onChange={(value)=>{this.onSelectBank(value)}} placeholder="请选择城市">
                                        <Option value="jack">Jack</Option>
                                        <Option value="lucy">Lucy</Option>
                                        <Option value="disabled" disabled>Disabled</Option>
                                        <Option value="Yiminghe">yiminghe</Option>
                                    </Select>
                                </li>
                                <li>
                                    <span className="a_aa_left_text">支行名称：</span>
                                    <Input className="a_aa_marg" size="large" style={{width: 280}} placeholder="请输入支行名称" />
                                    <span className="a_aa_right_text">由1至20个字符或汉字组成，不能使用特殊字符</span>
                                </li>
                                <li>
                                    <span className="a_aa_left_text">开户人姓名：</span>
                                    <Input className="a_aa_marg" size="large" style={{width: 280}} placeholder="请输入开户人姓名" />
                                    <span className="a_aa_right_text" style={{verticalAlign: 'bottom'}}>请填写您的真实姓名，只能是中文字符，支持以 下姓名分隔符"·"".""。"</span>
                                </li>
                                <li>
                                    <span className="a_aa_left_text">银行卡号：</span>
                                    <Input className="a_aa_marg" size="large" style={{width: 280}} placeholder="请输入银行卡号" />
                                    <span className="a_aa_right_text">银行卡卡号由16位或19位数字组成</span>
                                </li>
                                <li>
                                    <span className="a_aa_left_text">确认卡号：</span>
                                    <Input className="a_aa_marg" size="large" style={{width: 280}} placeholder="请输入确认卡号" />
                                    <span className="a_aa_right_text">银行账号只能手动输入，不能粘贴</span>
                                </li>
                                <li>
                                    <span className="a_aa_left_text">验证资金密码：</span>
                                    <Input className="a_aa_marg" type="password" size="large" style={{width: 280}} placeholder="请输入验证资金密码" />
                                    <a href="javascript:void(0)" style={{textDecoration:'underline', color:'#0393EF', display: this.state.ModalTitle ? 'none' : 'inline-block'}}>忘记资金密码？</a>
                                </li>
                            </ul>
                            <Button className="a_aa_btn" type="primary" loading={this.state.loading} onClick={()=>{this.enterLoading()}}>
                                下一步
                            </Button>
                        </div>
                    </div>
                </Modal>
            </div>
        );
    }
}
