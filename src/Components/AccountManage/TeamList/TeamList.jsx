/*团队列表*/
import React, {Component} from 'react';
import {observer} from 'mobx-react';
import { DatePicker, Checkbox, Table, Badge, Menu, Dropdown, Icon } from 'antd';
import 'whatwg-fetch'

import './TeamList.scss'

import t_m_serch from './Img/t_m_serch.png'
import t_m_icon from './Img/t_m_icon.png'
import t_m_icon2 from './Img/t_m_icon2.png'


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
        }
    };
    onChange(date, dateString) {
        console.log(date, dateString);
    }
    onSelectLottery(e) {
        console.log(`checked = ${e.target.checked}`);
    }
    onChangeTable(pagination, filters, sorter) {
        console.log('params', pagination, filters, sorter);
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
    // 游戏分类
    classify_index(index) {
        return index === this.state.classify ? "t_l_border t_l_active" : "t_l_border"
    };
    // 游戏种类
    variety_index(index) {
        return index === this.state.variety ? "t_l_border t_l_active" : "t_l_border"
    };

    expandedRowRender() {
        const columns = [
            { title: 'Date', dataIndex: 'date', key: 'date' },
            { title: 'Name', dataIndex: 'name', key: 'name' },
            { title: 'Status', key: 'state', render: () => <span><Badge status="success" />Finished</span> },
            { title: 'Upgrade Status', dataIndex: 'upgradeNum', key: 'upgradeNum' },
            {
                title: 'Action',
                dataIndex: 'operation',
                key: 'operation',
                render: () => (
                    <span className="table-operation">
                        <a href="#">Pause</a>
                        <a href="#">Stop</a>
                    </span>
                ),
            },
        ];

            const data = [];
            for (let i = 0; i < 3; ++i) {
                data.push({
                    key: i,
                    date: '2014-12-24 23:12:00',
                    name: 'This is production name',
                    upgradeNum: 'Upgraded: 56',
                });
            }
            return (
                <div className="t_l_child_table">
                    <Table
                        columns={columns}
                        showHeader={false}
                        dataSource={data}
                        pagination={false}
                    />
                </div>
            );
        };


    render() {
        const arr = ['重庆时时彩', '新疆时时彩', '重庆时时彩', '重庆时时彩', '重庆时时彩', '重庆时时彩', '重庆时时彩', '重庆时时彩', '重庆时时彩', '重庆时时彩', '重庆时时彩'];

        const columns = [
            {
            title: '日期',
            dataIndex: 'name2121',// 列数据在数据项中对应的 key，支持 a.b.c 的嵌套写法
            render: text => <a href="#">{text}</a>,
            filterDropdown: (
                <div className="t_l_prompt">
                    <div>
                        8979845646<br/>
                        faweawf
                    </div>
                </div>
            ),// 可以自定义筛选菜单，此函数只负责渲染图层，需要自行编写各种交互
            filterIcon: <img style={{verticalAlign: 'sub', marginLeft: '4px'}} src={t_m_icon} alt="提示" title="提示"/>, // 自定义 fiter 图标。
            // width: '20%',
            }, {
                title: '用户名',
                dataIndex: 'name323',
                filterDropdown: (
                    <div className="t_l_prompt">
                        <div>
                            8979845646<br/>
                            faweawf
                        </div>
                    </div>
                ),// 可以自定义筛选菜单，此函数只负责渲染图层，需要自行编写各种交互
                filterIcon: <img className="" style={{verticalAlign: 'inherit', marginLeft: '4px'}} src={t_m_icon2} alt="提示" title="提示"/>, // 自定义 fiter 图标。
            }, {
                title: '投注',
                dataIndex: 'email',
                render: text => <a href="http://www.baidu.com/">{text}</a>,
                onFilter: (value, record) => record.name.indexOf(value) === 0,// 本地模式下，确定筛选的运行函数
                sorter: (a, b) => a.email.length - b.email.length,
            }, {
                title: '中奖',
                dataIndex: 'gender',
                sorter: true, // 排序函数，本地排序使用一个函数(参考 Array.sort 的 compareFunction)，需要服务端排序可设为 true
                render: name => `${name.first} ${name.last}`,// 生成复杂数据的渲染函数，参数分别为当前行的值，当前行数据，行索引，@return里面可以设置表格行/列合并 Function(text, record, index) {}
            }, {
                title: '返点',
                dataIndex: 'name',
                sorter: (a, b) => a.age - b.age,
            }, {
                title: '毛收入',
                dataIndex: 'email4',
                sorter: (a, b) => a.age - b.age,
            }, {
                title: '日工资',
                dataIndex: 'email5',
                sorter: (a, b) => a.age - b.age,
            }, {
                title: '日亏损',
                dataIndex: 'email6',
                sorter: (a, b) => a.age - b.age,
            }, {
                title: '活动',
                dataIndex: 'email7',
                sorter: (a, b) => a.age - b.age,
            }, {
                title: '净收入',
                dataIndex: 'email8',
                sorter: (a, b) => a.age - b.age,
            }, {
                title: '分红',
                dataIndex: 'email9',
                sorter: (a, b) => a.age - b.age,
            }, {
                title: '总盈亏',
                dataIndex: 'email10',
                sorter: (a, b) => a.age - b.age,
            }];

        return (
            <div className="team_list">
                <div className="team_list_top">
                    <div className="t_l_time">
                        <ul className="t_l_time_row">
                            <li className="t_m_date_classify">日期：</li>
                            <li style={{marginLeft: '8px'}}><DatePicker onChange={(date, dateString)=>{this.onChange(date, dateString)}} /></li>
                            <li style={{margin: '0 8px'}}>至</li>
                            <li><DatePicker onChange={(date, dateString)=>{this.onChange(date, dateString)}} /></li>
                            <li className="t_m_line"></li>
                            <li>
                                <ul className="t_l_time_btn clear">
                                    <li>上周</li>
                                    <li className="t_l_time_btn_active">上半月</li>
                                    <li>下半月</li>
                                    <li>本月</li>
                                </ul>
                            </li>
                        </ul>
                        <ul className="t_l_classify">
                            <li>
                                <span className="t_m_date_classify">游戏分类：</span>
                                <span className={this.classify_index(1)} onClick={()=>{this.setState({classify: 1})}}>彩票</span>
                                <span className={this.classify_index(2)} onClick={()=>{this.setState({classify: 2})}}>其他</span>
                            </li>
                            <li>
                                <span>游戏种类：</span>
                                <span className={this.variety_index(1)} onClick={()=>{this.setState({variety: 1})}}>全彩种</span>
                                <span className={this.variety_index(2)} onClick={()=>{this.setState({variety: 2})}}>单彩种(复选)</span>
                            </li>
                            <li>
                                <span>用户名：</span>
                                <input className="l_b_user_name" type="text"/>
                            </li>
                            <li className="t_m_serch">
                                <img src={t_m_serch} alt="搜索"/>
                            </li>
                        </ul>
                    </div>
                    <ul className="t_m_select_lottery clear">
                        {
                            arr.map((value,index)=>{
                                return (
                                    <li key={index}><Checkbox onChange={(e)=>{this.onSelectLottery(e)}}>{value}</Checkbox></li>
                                )
                            })
                        }
                    </ul>
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
                               expandedRowRender={this.expandedRowRender}
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
