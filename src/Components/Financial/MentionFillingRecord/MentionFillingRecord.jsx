import React, {Component} from 'react';
import {observer} from 'mobx-react';
import { DatePicker, Radio, Button, Checkbox, Input, Select, Table, Pagination } from 'antd';
const Option = Select.Option;
const RadioGroup = Radio.Group;

import './MentionFillingRecord.scss'
@observer
export default class MentionFillingRecord extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: [],
            pagination: {},
            loading: false,
            classify: 1, // 游戏分类
            variety: 1, // 游戏种类
            timeArrIndex: '', // 时间选择按钮
            searchLoading: false,
        }
    };
    onChange(date, dateString) {
        console.log(date, dateString);
    };

    componentDidMount() {

    };

    handleChange(value) {
        console.log(`selected ${value}`);
    };
    enterLoading() {
        this.setState({ searchLoading: true });
    };

    onCheckbox(e) {
        console.log(`checked = ${e.target.checked}`);
    }
    render() {
        const arr = ['重庆时时彩1', '新疆时时彩2', '重庆时时彩3', '重庆时时彩4', '重庆时时彩', '重庆时时彩', '重庆时时彩', '重庆时时彩', '重庆时时彩', '重庆时时彩', '重庆时时彩'];
        const columns = [
            {
                title: '编号',
                dataIndex: 'name',
            }, {
                title: '用户名',
                dataIndex: 'age',
            }, {
                title: '时间',
                dataIndex: 'address',
            }, {
                title: '渠道',
                key: 'action',
            }, {
                title: '金额',
                key: 'action1',
            }, {
                title: '类型',
                key: 'action2',
            }, {
                title: '状态',
                key: 'action3',
            }, {
                title: '备注',
                key: 'action4',
            }
        ];
        const data = [{
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
        }];
        return (
            <div className="game_bill mention_filling_record">
                <div className="team_list_top">
                    <div className="t_l_time">
                        <ul className="t_l_time_row">
                            <li className="t_m_date_classify">日期：</li>
                            <li><DatePicker onChange={(date, dateString)=>{this.onChange(date, dateString)}} /></li>
                            <li style={{margin: '0 8px'}}>至</li>
                            <li><DatePicker onChange={(date, dateString)=>{this.onChange(date, dateString)}} /></li>
                        </ul>
                        <ul className="t_l_classify">
                            <li>
                                <span className="t_m_date_classify">类型：</span>
                                <Select defaultValue="lucy" style={{ width: 100 }} onChange={()=>this.handleChange()}>
                                    <Option value="jack">Jack</Option>
                                    <Option value="lucy">Lucy</Option>
                                    <Option value="disabled" disabled>Disabled</Option>
                                    <Option value="Yiminghe">yiminghe</Option>
                                </Select>
                            </li>
                            <li>
                                <span>状态：</span>
                                <Select defaultValue="lucy" style={{ width: 100 }} onChange={()=>this.handleChange()}>
                                    <Option value="jack">Jack</Option>
                                    <Option value="lucy">Lucy</Option>
                                    <Option value="disabled" disabled>Disabled</Option>
                                    <Option value="Yiminghe">yiminghe</Option>
                                </Select>
                            </li>
                            <li>
                                <span>用户名：</span>
                                <Input placeholder="请输入用户名" />
                            </li>
                            <li>
                                <Checkbox onChange={(e)=>this.onCheckbox(e)}>包含下级</Checkbox>
                            </li>
                            <li className="t_m_serch">
                                <Button type="primary" icon="search" loading={this.state.searchLoading} onClick={()=>this.enterLoading()}>
                                    搜索
                                </Button>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="t_l_table">
                    <div className="t_l_table_list">
                        <Table columns={columns}
                               dataSource={data}
                               pagination={false}
                               footer={()=>{
                                   return (
                                       <div className="mention_filling_record_footer clear">
                                           <span>
                                               总充值金额：
                                               <strong style={{color: '#E90000'}}>0</strong>
                                           </span>
                                           <span>
                                               总提款金额：
                                               <strong style={{color: '#00CD05'}}>0</strong>
                                           </span>
                                       </div>
                                   )
                               }}
                        />
                    </div>
                    <div className="t_l_page">
                        <Pagination showSizeChanger onShowSizeChange={(current, pageSize)=>{this.onShowSizeChange(current, pageSize)}} defaultCurrent={1} total={500} />
                    </div>
                </div>
            </div>
        );
    }
}
