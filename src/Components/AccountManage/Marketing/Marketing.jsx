import React, {Component} from 'react';
import {observer} from 'mobx-react';
import { InputNumber,Input, Checkbox, Button, Table } from 'antd';

import './Marketing.scss'

@observer
export default class Marketing extends Component {
    constructor(props){
      super(props);
      this.state = {
          iconLoading: false,
          data: [],
          pagination: {},
          loading: false,
      }
    };
    enterIconLoading() {
        this.setState({ iconLoading: true });
    }
    onChange(value) {
        console.log('changed', value);
    };
    onChangeCheckbox(e) {
        console.log(`checked = ${e.target.checked}`);
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
                title: '链接地址',
                dataIndex: 'name2121',// 列数据在数据项中对应的 key，支持 a.b.c 的嵌套写法
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
        return (
            <div className="marke_k_main">
                <div className="marke_k_main_top">
                    <ul className="marke_k_list">
                        <li>
                            <span className="marke_k_left left">推广方式：</span>
                            <ul className="marke_k_register_link left">
                                <li className="register_link_active">注册下级</li>
                                <li>推广链接</li>
                            </ul>
                        </li>
                        <li>
                            <span className="marke_k_left">用户类型：</span>
                            <span>
                                <Checkbox onChange={this.onChangeCheckbox}>代理</Checkbox>
                                <Checkbox onChange={this.onChangeCheckbox}>会员</Checkbox>
                            </span>
                        </li>
                        <li>
                            <span className="marke_k_left">奖金组设置：</span>
                            <span>
                                <InputNumber min={1} max={10} defaultValue={3} size="large" onChange={this.onChange()} />
                            </span>
                        </li>
                        <li>
                            <span className="marke_k_left">备注：</span>
                            <span>
                                <Input size="large" placeholder="备注" />
                            </span>
                        </li>
                        <li>
                            <span className="marke_k_left"></span>
                            <Button type="primary" size="large" icon="plus" loading={this.state.iconLoading} onClick={()=>{this.enterIconLoading()}}>
                                生成推广链接
                            </Button>
                        </li>
                    </ul>
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
