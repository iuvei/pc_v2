/*分红*/
import React, {Component} from 'react';
import {observer} from 'mobx-react';
import { DatePicker, Table, Pagination, Input, Button } from 'antd';
const ButtonGroup = Button.Group;
import 'whatwg-fetch'

import './Dividend.scss'

@observer
export default class teamTable extends Component {
    constructor(props){
        super(props)
        this.state = {
            data: [],
            pagination: {},
            loading: false,
            timeArrIndex: '', // 时间选择按钮
            searchLoading: false,
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
    enterLoading() {
        this.setState({ searchLoading: true });
    };
    onShowSizeChange (current, pageSize) {
        console.log(current, pageSize);
    }

    render() {
        const columns = [
             {
                title: '用户名',
                dataIndex: 'name',
                 width: 100,
            }, {
                title: '所属组',
                dataIndex: 'gender',
                width: 80,
            }, {
                title: '有效销售额',
                dataIndex: 'email',
                width: 110,
            }, {
                title: '盈亏总额',
                dataIndex: 'email6',
                width: 110,
            }, {
                title: '日工资总额',
                dataIndex: 'email7',
                width: 110,
            }, {
                title: '日亏损总额',
                dataIndex: 'email8',
                width: 110,
            }, {
                title: '分红比例',
                dataIndex: 'email9',
                width: 100,
            }, {
                title: '分红',
                dataIndex: 'email10',
                width: 100,
            }, {
                title: '操作',
                dataIndex: 'email11',
                width: 230,
                render: (text, record) => (
                   <ButtonGroup>
                      <Button>历史工资</Button>
                      <Button>修改比例</Button>
                      <Button>发放分红</Button>
                    </ButtonGroup>
                ),
            }];

        return (
            <div className="dividend_main">
                <div className="team_list_top">
                    <div className="t_l_time">
                        <ul className="t_l_time_row">
                            <li>
                                <span>用户名：</span>
                                <Input placeholder="请输入用户名" />
                            </li>
                            <li className="t_m_date_classify">日期：</li>
                            <li style={{marginLeft: '8px'}}><DatePicker onChange={(date, dateString)=>{this.onChange(date, dateString)}} /></li>
                            <li style={{margin: '0 8px'}}>至</li>
                            <li><DatePicker onChange={(date, dateString)=>{this.onChange(date, dateString)}} /></li>
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
                        <span>2017-9-26</span>
                        <span> 至 </span>
                        <span>2017-10-12</span>
                        <a className="t_l_goBack right" href="#"> &lt;&lt;返回上一层 </a>
                    </div>
                    <div className="t_l_table_list">
                        <Table columns={columns}
                               rowKey={record => record.registered}
                               dataSource={this.state.data}
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
