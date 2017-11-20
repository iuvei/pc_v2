import React, {Component} from 'react';
import {observer} from 'mobx-react';
import { Table, Button, Popconfirm, Pagination, Icon,Modal,Select,Input,Slider,InputNumber  } from 'antd';
const Option=Select.Option
const modal=Modal

import './Contract.scss'

@observer
export default class Contract extends Component {
    constructor(props){
        super(props);
        this.state = {
            selectedRowKeys: [], // Check here to configure the default column
            loading: false,
            ModalTitle: false,
            visible:false,
            navListIndex:3,
            modalClass:"center-modal-c",
            slider:{
                sliderValue: 1850,
                disabledMinus: false,
                sliderMin: 1800,
                sliderMax:1956,
            },
        }
    };
    onCancel(){
       // this.refs.myModal.focus();

        console.log(this.refs.myModal);
        this.setState({
            visible:false,
            navListIndex:3,
            modalClass:"center-modal-c",
        })
    }
    onSelectSys(value){
        console.log(value);
        this.setState({
            navListIndex: value,
            modalClass:"center-modal-c"+value,

        })

    };
    contractType() {
        const ul_0 =<div>
            <ul className="c_speci_contract0">
                <li>
                    契约内容：
                </li>
                <li>
                    <span>第一档：日销量≥1万元时，且活跃用户≥0人时，日工资为</span>
                    <Input size="small" placeholder="" />
                    <span>元/万；</span>
                </li>
                <li>
                    <span>第二档：日销量≥10万元时，且活跃用户≥5人时，日工资为</span>
                    <Input size="small" placeholder="" />
                    <span>元/万；</span>
                </li>
                <li>
                    <span>第三档：日销量≥30万元时，且活跃用户≥10人时，日工资为</span>
                    <Input size="small" placeholder="" />
                    <span>元/万；</span>
                </li>
                <li>
                    <span>第四档：日销量≥50万元时，且活跃用户≥20人时，日工资为</span>
                    <Input size="small" placeholder="" />
                    <span>元/万；</span>
                </li>
                <li>
                    <span>第五档：日销量≥70万元时，且活跃用户≥30人时，日工资为</span>
                    <Input size="small" placeholder="" />
                    <span>元/万；</span>
                </li>
                <li>
                    <span>第六档：日销量≥1万元时，且活跃用户≥40人时，日工资为</span>
                    <Input size="small" placeholder="" />
                    <span>元/万；</span>
                </li>
            </ul>
            <div className="c_b_user0">
                <p>supervip</p>
                <p>2017.11.14</p>
            </div>
            <div className='c_btn0'>
                <Button type="primary">提交契约</Button>
                <Button type="primary" className='c_btn_cancel0'onClick={()=>this.onCancel()}>取消</Button>
            </div>

        </div>;
        const ul_1 =<div>
            <ul className="c_speci_contract1">
                <li>契约内容：</li>
                <li>如该用户每半月结算净盈亏总值时为负数，可获得分红，金额为亏</li>
                <li>
                    <span>损值的</span>
                    <Input size="small" placeholder="" />
                    <span>%。</span>
                </li>
            </ul>
            <div className="c_b_user1">
                <p>supervip</p>
                <p>2017.11.14</p>
            </div>
            <div className='c_btn1'>
                <Button type="primary">提交契约</Button>
                <Button type="primary" className='c_btn_cancel1' onClick={()=>this.onCancel()}>取消</Button>
            </div>

        </div>;
        const ul_2 =<div>
            <ul className="c_speci_contract2">
                <li className='c-title'>契约内容：</li>
                <li>
                    <span>该用户的奖金组级别为</span>
                    <InputNumber
                        min={1800}
                        max={1968}
                        style={{ marginLeft: 16 }}
                        value={this.state.slider.sliderValue}
                        onChange={(value)=>this.onChangeSlider(value)}
                    />
                </li>
                <li>该奖金组剩余配额：无限</li>
                <li>
                    <ul className="c_k_slider">
                        <li>
                            <Icon type="left" onClick={()=>{
                                this.setState(preState => (
                                    preState.slider.sliderValue--
                                ))
                            }}/>
                        </li>
                        <li style={{width: '290px'}}>
                            <Slider min={this.state.slider.sliderMin} tipFormatter={null}
                                    max={this.state.slider.sliderMax}
                                    onChange={(value)=>{this.onChangeSlider(value)}}
                                    value={this.state.slider.sliderValue} />

                        </li>
                        <li>
                            <Icon type="right" onClick={()=>{
                                this.setState(preState => {
                                    console.log(typeof preState.slider.sliderValue)
                                    return {sliderValue: preState.slider.sliderValue++}
                                })
                            }}/>
                        </li>
                    </ul>
                    <div className='c-s-extent'>{this.state.slider.sliderMin}-{this.state.slider.sliderMax}</div>
                </li>
            </ul>
            <div className="c_b_user2">
                <p>supervip</p>
                <p>2017.11.14</p>
            </div>
            <div className='c_btn2'>
                <Button type="primary">提交契约</Button>
                <Button type="primary" className='c_btn_cancel2' onClick={()=>this.onCancel()}>取消</Button>
            </div>
        </div>;
        switch (parseInt(this.state.navListIndex)) {
            case 0:
                return ul_0;
                break;
            case 1:
                return ul_1;
                break;
            case 2:
                return ul_2;
                break;
        }
    }
    onShowSizeChange(current, pageSize) {
        console.log(current, pageSize);
        this.setState({pagination: current})
    };
    showModal() {
        this.setState({
            visible: true,
        });
    };
    // 滑动条
    onChangeSlider(value) {
        let slider = this.state.slider;
        slider.sliderValue = value;
        this.forceUpdate();

    };
    render() {
        const columns = [{
            title: '用户名',
            dataIndex: 'name',
            key: 'name',
            width: 107,
        }, {
            title: '奖金组',
            dataIndex: 'award',
            key: 'award',
            width: 80,
            },{
            title: '分红比例',
            dataIndex: 'portion',
            key: 'portion',
            width: 80,
        }, {
                title: '日工资协议',
                children: [{
                    title: '日销量1万',
                    dataIndex: 'day1',
                    key: 'day1',
                    width: 80,

                }, {
                    title: '日销量10万',
                    dataIndex: 'day10',
                    key: 'day10',
                    width: 80,

                }, {
                    title: '日销量30万',
                    dataIndex: 'day30',
                    key: 'day30',
                    width: 80,

                }, {
                    title: '日销量50万',
                    dataIndex: 'day50',
                    key: 'day50',
                    width: 80,

                }, {
                    title: '日销量70万',
                    dataIndex: 'day70',
                    key: 'day70',
                    width: 80,

                }, {
                    title: '日销量100万',
                    dataIndex: 'day100',
                    key: 'day100',
                    width: 80,

                }]
            },{
                title: '配置管理',
                children: [{
                    title: '1956',
                    dataIndex: 'deal0',
                    key: 'deal0',
                    width: 80,
                },{
                    title: '1954',
                    dataIndex: 'deal1',
                    key: 'deal1',
                    width: 80,
                },{
                    title: '1952',
                    dataIndex: 'deal2',
                    key: 'deal2',
                    width: 80,
                },{
                    title: '1950',
                    dataIndex: 'deal3',
                    key: 'deal3',
                    width: 80,
                }]
        }];
        const data = [];
        for (let i = 0; i < 10; i++) {
            data.push({
                key: i,
                name: 'supervip',
                award: i + 1,
                portion: '7%',
                day1: '2%',
                day10: '39%',
                day30: '4%',
                day50: '59%',
                day70: '69%',
                day100:'7%',
                deal0:'5',
                deal1:'4',
                deal2:'8',
                deal3:'9',
            });
        }
        return (
            <div className='contract_main'>
                <div className='contract_top'onClick={()=>{this.showModal()}}>
                </div>
                <div>
                    <Modal ref="myModal"
                        title=""
                        wrapClassName={this.state.modalClass}
                        visible={this.state.visible}
                        footer={null}
                        closable={false}
                    >
                        <div className="c_aa_form">
                            <ul className="c_aa_list">
                                <li>
                                    <span className="c_aa_left_text">用户名：</span>
                                    <Select size="large" style={{ width: 280 }} onChange={(value)=>{this.onSelectUser(value)}} placeholder="请选择需要创建契约的用户">
                                        <Option value="jack">Jack</Option>
                                        <Option value="lucy">Lucy</Option>
                                        <Option value="disabled" disabled>Disabled</Option>
                                        <Option value="Yiminghe">yiminghe</Option>
                                    </Select>
                                </li>
                                <li>
                                    <span className="c_aa_left_text">契约类型：</span>
                                    <Select className="c_aa_marg" size="large" style={{ width: 280 }} onChange={(value)=>{this.onSelectSys(value)}} placeholder="请选择需要创建契约的系统">
                                       <Option value="0">日工资契约</Option>
                                        <Option value="1">分红契约</Option>
                                        <Option value="2">奖金组契约</Option>
                                    </Select>
                                </li>

                            </ul>
                            {this.contractType()}
                        </div>
                    </Modal>
                </div>

                <div className="c_table">
                    <Table columns={columns} dataSource={data} bordered={true} pagination={false}/>
                </div>
                <div className="right">
                    <Pagination showSizeChanger onShowSizeChange={(current, pageSize)=>{this.onShowSizeChange(current, pageSize)}} defaultCurrent={1} total={500} />
                </div>
                <div className='c_foot'>
                    <p>恒彩日工资：</p>
                    <p>发放时间：每日10:00由系统自动发放上一日工资；</p><br/>
                    <p>日工资规则：</p>
                    <p>1、非同IP、非同银行卡会员</p>
                    <p>2、参与投注的流水统计限彩票，且玩法投注不得超过该玩法70%（不包含70%），即定位胆必须小于7住，二码必须小于69注，三码必须小于6999注，
                    五星必须小于69999注。如发现违规投注情况，均视作放弃日工资；恒彩娱乐保留最终解释权，并持有终止、修改等权利</p>
                </div>
            </div>
        );
    }
}
