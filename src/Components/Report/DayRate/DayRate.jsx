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
            table_1: {
                dayRateList_1: [], // 日工资列表
                tfootSum_1: {},
                total_1: 0, // 日工资记录条数
                history: [],
            },
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

    componentDidMount() {
        this.getDayRateList();
    };
    enterLoading() {
        this.setState({ searchLoading: true });
        this.getDayRateList();
    };
    /*切换每页显示条数*/
    onShowSizeChange (current, pageSize) {
        console.log(current, pageSize);
    }
    /*获取日工资列表*/
    getDayRateList() {
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
                let table_1 = this.state.table_1;
                table_1.dayRateList_1 = data.repsoneContent.results;
                table_1.tfootSum_1 = data.repsoneContent.sum;
                table_1.total_1 = parseInt(data.repsoneContent.affects);
                this.setState({table_1: table_1});
            }
        })
    };
    /*点击用户名*/
    onClickUserName(name) {
        console.log(this.state.userName);
        this.setState({userName: name}, ()=> this.getDayRateList());
    };
    render() {
        const columns = [
            {
                title: '用户名',
                dataIndex: 'username',
                key: 'username',
                render: text => <a href="javascript:void(0)" onClick={()=>this.onClickUserName(text)} style={{color: '#0088DE'}}>{text}</a>,
                width: 130,
            }, {
                title: '所属组',
                dataIndex: 'usergroup_name',
                key: 'usergroup_name',
                width: 130,
            }, {
                title: '日销量',
                dataIndex: 'sale',
                key: 'sale',
                width: 130,
            }, {
                title: '日有效量',
                dataIndex: 'effective_sale',
                key: 'effective_sale',
                width: 130,
            }, {
                title: '日工资比例',
                dataIndex: 'salary_ratio',
                key: 'salary_ratio',
                width: 130,
            }, {
                title: '团队日工资',
                dataIndex: 'allsalary',
                key: 'allsalary',
                width: 130,
            }, {
                title: '日工资',
                dataIndex: 'salary',
                key: 'salary',
                width: 130,
            }, {
                title: '操作',
                dataIndex: 'buttons',
                key: 'buttons',
                width: 200,
                render: (text, record) => (
                    <ButtonGroup>
                        {
                            text.map((item, index)=>{
                                return <Button style={{color: item.color}} key={index}>{item.text}</Button>
                            })
                        }
                    </ButtonGroup>
                ),
            }
        ];
        const tfoot = <ul className="tfoot_list clear">
            <li>合计</li>
            <li>{this.state.table_1.tfootSum_1.total_sale === null ? '-' : this.state.table_1.tfootSum_1.total_sale}</li>
            <li>{this.state.table_1.tfootSum_1.total_effective_sale === null ? '-' : this.state.table_1.tfootSum_1.total_effective_sale}</li>
            <li>-</li>
            <li>-</li>
            <li>{this.state.table_1.tfootSum_1.total_salary === null ? '-' : this.state.table_1.tfootSum_1.total_salary}</li>
            <li>-</li>
        </ul>;

        return (
            <div className="dayRate_main">
                <div className="team_list_top">
                    <div className="t_l_time">
                        <ul className="t_l_time_row">
                            <li>
                                <span>用户名：</span>
                                <Input placeholder="请输入用户名" onChange={(e)=>this.onUserName(e)} value={this.state.userName}/>
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
                        <a className="t_l_goBack right" href="javascript:void(0)"> &lt;&lt;返回上一层 </a>
                    </div>
                    <div className="t_l_table_list">
                        <Table columns={columns}
                               rowKey={record => record.registered}
                               dataSource={this.state.table_1.dayRateList_1}
                               pagination={false}
                               loading={this.state.loading}
                               footer={() => tfoot}
                               onChange={this.handleTableChange}
                               scroll={{y: 300}}
                               size="middle"
                        />
                    </div>
                    <div className="t_l_page right">
                        <Pagination showSizeChanger
                                    onShowSizeChange={(current, pageSize)=>this.onShowSizeChange(current, pageSize)}
                                    defaultCurrent={1}
                                    total={this.state.total_1}
                                    pageSizeOptions={['10', '25', '50']}
                        />
                    </div>
                </div>
            </div>
        );
    }
}
