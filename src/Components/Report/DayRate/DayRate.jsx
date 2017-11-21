/*日工资*/
import React, {Component} from 'react';
import {observer} from 'mobx-react';
import Fatch from '../../../Utils'
import { DatePicker, Table, Pagination, Input, Button } from 'antd';
import moment from 'moment';
const ButtonGroup = Button.Group;
import 'whatwg-fetch'
import { stateVar } from '../../../State'
import common from '../../../CommonJs/common'

import './DayRate.scss'

@observer
export default class DayRate extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: [],
            pagination: {},
            loading: false,
            timeArrIndex: '', // 时间选择按钮
            searchLoading: false,

            userName: stateVar.userName,// 查询用户名
            startDate: common.setDateTime(-1),// 查询日期
            dayRateList: [], // 日工资列表
        }
    };
    /*获取查询日期*/
    onChangeDate(date, dateString) {
        this.setState({startDate: dateString})
    };
    /*获取查询用户名*/
    onUserName(e) {
        this.setState({userName: e.target.value})
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
        this.dayRateList();
        // this.fetch();
    };
    enterLoading() {
        this.setState({ searchLoading: true });
        this.dayRateList();
    };
    onShowSizeChange (current, pageSize) {
        console.log(current, pageSize);
    }
    dayRateList() {
        this.setState({ loading: true });
        Fatch.dailysalary({
            method: "POST",
            body: JSON.stringify({
                username: this.state.userName,
                starttime: this.state.startDate,
                p: 1,
            })
        }).then((data)=>{
            console.log(data);
            this.setState({
                loading: false,
                searchLoading: false,
            });
            if(data.status === 200){
                this.setState({dayRateList: data.repsoneContent.results})
            }
        })
    };
    render() {
        const columns = [
            {
                title: '用户名',
                dataIndex: 'username',
                width: 100,
            }, {
                title: '所属组',
                dataIndex: 'usergroup_name',
                width: 80,
            }, {
                title: '日销量',
                dataIndex: 'sale',
                width: 110,
            }, {
                title: '日有效量',
                dataIndex: 'effective_sale',
                width: 110,
            }, {
                title: '日工资比例',
                dataIndex: 'salary_ratio',
                width: 110,
            }, {
                title: '团队日工资',
                dataIndex: 'allsalary',
                width: 110,
            }, {
                title: '日工资',
                dataIndex: 'salary',
                width: 100,
            }, {
                title: '操作',
                dataIndex: 'buttons',
                width: 150,
                render: (text, record) => (
                    <ButtonGroup>
                        <Button>历史工资</Button>
                        <Button>签到协议</Button>
                    </ButtonGroup>
                ),
            }];

        return (
            <div className="dayRate_main">
                <div className="team_list_top">
                    <div className="t_l_time">
                        <ul className="t_l_time_row">
                            <li>
                                <span>用户名：</span>
                                <Input placeholder="请输入用户名" onChange={(e)=>this.onUserName(e)} defaultValue={this.state.userName}/>
                            </li>
                            <li className="t_m_date_classify">日期：</li>
                            <li style={{marginLeft: '8px'}}>
                                <DatePicker onChange={(date, dateString)=>{this.onChangeDate(date, dateString)}}
                                            defaultValue={moment(common.setDateTime(-1), 'YYYY-MM-DD')}/></li>
                            <li>
                                <Button type="primary"
                                        icon="search"
                                        loading={this.state.searchLoading}
                                        onClick={()=>this.enterLoading()}
                                >
                                    搜索
                                </Button>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="t_l_table">
                    <div className="t_l_location_name">
                        <span>当前位置：</span>
                        <a href="#">supervips</a>
                        <span> > </span>
                        <span>supervips02</span>
                        <a className="t_l_goBack right" href="#"> &lt;&lt;返回上一层 </a>
                    </div>
                    <div className="t_l_table_list">
                        <Table columns={columns}
                               rowKey={record => record.registered}
                               dataSource={this.state.dayRateList}
                               pagination={false}
                               loading={this.state.loading}
                               footer={() => 'Footer'}
                               onChange={this.handleTableChange}
                               scroll={{y: 300}}
                        />
                    </div>
                    <div className="t_l_page right">
                        <Pagination showSizeChanger onShowSizeChange={()=>this.onShowSizeChange()} defaultCurrent={3} total={500} />
                    </div>
                </div>
            </div>
        );
    }
}
