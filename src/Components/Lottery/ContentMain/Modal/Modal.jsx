import React, {Component} from 'react';
import {observer} from 'mobx-react';
import { Table, Button, Modal, Select, InputNumber, Checkbox } from 'antd';
import ModelView from '../../../Common/ChildNav/ChildNav'

import './Modal.scss'

@observer
export default class ModalView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            chaseLoading: false,
            periodsIndex: null,
        }
    };
    componentDidMount() {
        // console.log(this.state.visible)
    };
    enterLoading() {
        this.setState({ loading: true });
    };
    onChange(value) {
        console.log('changed', value);
    };
    enterChaseLoading() {
        this.setState({ chaseLoading: true });
    };
    render() {
        const navList = [
            {
                link: '',
                text: '同倍追号'
            },{
                link: '',
                text: '利润率追号'
            },{
                link: '',
                text: '翻倍追号'
            }
        ];
        const periodsList = ['10期', '20期', '50期', '全部'];

        const columns = [
            {
                title: '序号',
                dataIndex: 'name',
                width: 50,
            }, {
                title: '期数',
                dataIndex: 'age',
                width: 150,
            }, {
                title: '倍率',
                dataIndex: 'address',
                width: 200,
                render: (text, record) => (
                    <span>
                        <InputNumber min={1} max={10} defaultValue={1} onChange={()=>this.onChange()} />&nbsp;倍
                    </span>
                ),
            }, {
                title: '金额',
                dataIndex: 'address1',
                width: 150,
                render: (text) => (
                    <span style={{color: '#CB1313'}}>{text}元</span>
                ),
            }, {
                title: '开奖时间',
                dataIndex: 'address2',
                width: 200,
            }
        ];
        const data = [
            {
                key: '1',
                name: '1',
                age: 32,
                address: 'New',
                address1: 888.30,
                address2: '2014-05-22 15:22:33',
            }, {
                key: '2',
                name: '2',
                age: 42,
                address: 'London',
                address1: 888.08,
                address2: '2014-05-22 15:22:33',
            }, {
                key: '3',
                name: '3',
                age: 32,
                address: 'Sidney',
                address1: 888.00,
                address2: '2014-05-22 15:22:33',
            }, {
                key: '4',
                name: '4',
                age: 99,
                address: 'ney',
                address1: 888.00,
                address2: '2014-05-22 15:22:33',
            }
        ];
        const rowSelection = {
            onChange: (selectedRowKeys, selectedRows) => {
                console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
            },
            getCheckboxProps: record => ({
                disabled: record.name === '4', // Column configuration not to be checked
            }),
        };
        return (
            <Modal
                width='865px'
                visible={this.props.visible}
                title= {<ModelView navList = {navList}/>}
                onCancel={()=>{this.props.onSuperaddition()}}
                maskClosable={false}
                footer={null}
                className="modal_content"
            >
                <div className="modal_main">
                    <div className="m_m_content clear">
                        <div className="modal_periods left">
                            <p className="m_p_text left">追号期数</p>
                            <ul className="m_periods_list left">
                                {
                                    periodsList.map((value, index)=>{
                                        return <li className={this.state.periodsIndex === index ? 'm_periods_active' : ''} onClick={()=>this.setState({periodsIndex: index})} key={index}>{value}</li>
                                    })
                                }
                            </ul>
                        </div>
                        <div className="periods_input left">
                            <span>手动输入</span>
                            <InputNumber min={1} max={10} defaultValue={1} onChange={(value)=>{this.onChange(value)}} />
                            <span>期</span>
                        </div>
                        <div className="multiple_input left">
                            <span>倍数</span>
                            <InputNumber min={1} max={10} defaultValue={1} onChange={(value)=>{this.onChange(value)}} />
                            <span>倍</span>
                        </div>
                        <Button type="primary" className="m_m_btn" loading={this.state.loading} onClick={()=>this.enterLoading()}>
                            生成
                        </Button>
                    </div>
                    <div className="m_m_table">
                        <Table rowSelection={rowSelection}
                               columns={columns}
                               dataSource={data}
                               pagination={false}
                               scroll={{ y: 240 }}
                               size="middle"
                        />
                    </div>
                    <div className="m_m_footer clear">
                        <div className="m_m_left_btn left">
                            <Checkbox onChange={()=>this.onChange()}>中奖后停止追号</Checkbox>
                            <Button type="primary">清空号码</Button>
                        </div>
                        <ul className="m_m_footer_info right">
                            <li>
                                <span>总期数：</span>
                                <em>0</em>
                                <span>期，</span>
                            </li>
                            <li>
                                <span>追号总金额：</span>
                                <em>0.00</em>
                                <span>元</span>
                            </li>
                            <li>
                                <Button type="primary"
                                        loading={this.state.chaseLoading}
                                        onClick={()=>this.enterChaseLoading()}
                                        size="large"
                                >
                                    确定追号投注
                                </Button>
                            </li>
                        </ul>
                    </div>
                </div>

                        {/*<ModelView navList = {navList}/>*/}
                        {/*<Button className="a_aa_btn" type="primary" loading={this.state.loading} onClick={()=>{this.enterLoading()}}>*/}
                            {/*下一步*/}
                        {/*</Button>*/}

            </Modal>
        )
    }
}
