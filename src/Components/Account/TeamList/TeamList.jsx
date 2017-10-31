/*团队列表*/
import React, {Component} from 'react';
import {observer} from 'mobx-react';
import { DatePicker, Table, Input, InputNumber } from 'antd';
import 'whatwg-fetch'

import './TeamList.scss'

import t_m_serch from './Img/t_m_serch.png'

@observer
export default class TeamList extends Component {
    constructor(props){
        super(props)
        this.state = {
            data: [],
            pagination: {},
            loading: false,
            classify: 1, // 游戏分类
            variety: 1, // 游戏种类
            timeArrIndex: '', // 时间选择按钮
        }
    };
    onChange(date, dateString) {
        console.log(date, dateString);
    }

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
    }
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
    }
    componentDidMount() {
        this.fetch();
    };

    render() {
        const columns = [
            {
            title: '用户名',
            dataIndex: 'name2121',// 列数据在数据项中对应的 key，支持 a.b.c 的嵌套写法
            // width: '20%',
            }, {
                title: '用户类型',
                dataIndex: 'name323',
            }, {
                title: '团队人数',
                dataIndex: 'email',
                onFilter: (value, record) => record.name.indexOf(value) === 0,// 本地模式下，确定筛选的运行函数
                sorter: (a, b) => a.email.length - b.email.length,
            }, {
                title: '团队余额',
                dataIndex: 'gender',
                sorter: true, // 排序函数，本地排序使用一个函数(参考 Array.sort 的 compareFunction)，需要服务端排序可设为 true
                render: name => `${name.first} ${name.last}`,// 生成复杂数据的渲染函数，参数分别为当前行的值，当前行数据，行索引，@return里面可以设置表格行/列合并 Function(text, record, index) {}
            }, {
                title: '奖金组',
                dataIndex: 'name',
                sorter: (a, b) => a.age - b.age,
            }, {
                title: '注册时间',
                dataIndex: 'email4',
                sorter: (a, b) => a.age - b.age,
            }, {
                title: '日工资',
                dataIndex: 'email5',
            }, {
                title: '分红',
                dataIndex: 'email6',
            }, {
                title: '配额',
                dataIndex: 'email7',
            }, {
                title: '在线状态',
                dataIndex: 'email8',
            }, {
                title: '操作',
                dataIndex: 'email9',
            }];

        return (
            <div className="team_list">
                <div className="team_list_top">
                    <div className="t_l_time">
                        <ul className="t_l_time_row">
                            <li>
                                <span>用户名：</span>
                                <Input placeholder="请输入用户名" />
                            </li>
                            <li className="t_m_date_classify">余额：</li>
                            <li style={{marginLeft: '8px'}}>
                                <InputNumber min={1} max={100000} defaultValue={3} onChange={()=>{this.onChange()}} />
                            </li>
                            <li style={{margin: '0 8px'}}>至</li>
                            <li>
                                <InputNumber min={1} max={100000} defaultValue={3} onChange={()=>{this.onChange()}} />
                            </li>
                            <li className="t_m_date_classify">注册时间：</li>
                            <li style={{marginLeft: '8px'}}><DatePicker onChange={(date, dateString)=>{this.onChange(date, dateString)}} /></li>
                            <li style={{margin: '0 8px'}}>至</li>
                            <li><DatePicker onChange={(date, dateString)=>{this.onChange(date, dateString)}} /></li>
                            <li className="t_m_serch">
                                <img src={t_m_serch} alt="搜索"/>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="t_l_table">
                    <div className="t_l_location_name">
                        <span>当前位置：</span>
                        <span>sfhwofha</span>
                        <span> > </span>
                        <span>happy (每日数据)</span>
                    </div>
                    <div className="t_l_table_list">
                        <Table columns={columns}
                               rowKey={record => record.registered}
                               dataSource={this.state.data}
                               pagination={this.state.pagination}
                               loading={this.state.loading}
                               footer={() => 'Footer'}
                               onChange={this.handleTableChange}
                               scroll={{y: 300}}
                        />
                    </div>
                </div>
            </div>

        );
    }
}
