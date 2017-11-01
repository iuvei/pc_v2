import React, {Component} from 'react';
import {observer} from 'mobx-react';
import { Table, Button, Popconfirm, Pagination } from 'antd';

import './Message.scss'
@observer
export default class Message extends Component {
    constructor(props){
        super(props);
        this.state = {
            selectedRowKeys: [], // Check here to configure the default column
            loading: false,
        }
    };
    start = () => {
        this.setState({ loading: true });
        // ajax request after empty completing
        setTimeout(() => {
            this.setState({
                selectedRowKeys: [],
                loading: false,
                pagination: {},
            });
        }, 1000);
    };
    onSelectChange = (selectedRowKeys) => {
        console.log('selectedRowKeys changed: ', selectedRowKeys);
        this.setState({ selectedRowKeys });
    };
    onDelete(key) {
        console.log(key);
        // const dataSource = [...this.state.data];
        // this.setState({ dataSource: dataSource.filter(item => item.key !== key) });
    };
    onShowSizeChange(current, pageSize) {
        console.log(current, pageSize);
        this.setState({pagination: current})
    };
    render() {
        const columns = [
                {
                    title: '发件人',
                    dataIndex: 'name',
                }, {
                    title: '消息标题',
                    dataIndex: 'age',
                }, {
                    title: '时间',
                    dataIndex: 'address',
                }, {
                    title: '用户操作',
                    dataIndex: 'action',
                    render: (text, record) => {
                        return (
                            data.length > 1 ?
                                (
                                    <Popconfirm title="确定要删除?" onConfirm={() => this.onDelete(record.key)}>
                                        <a href="#" style={{textDecoration: 'underline'}}>删除</a>
                                    </Popconfirm>
                                ) : null
                        );
                    },
                }
            ];

        const data = [];
        for (let i = 0; i < 10; i++) {
            data.push({
                key: i,
                name: `Edward King ${i}`,
                age: 32,
                address: `London, Park Lane no. ${i}`,
                action: `delete`,
            });
        }
        const { loading, selectedRowKeys } = this.state;
        const rowSelection = {
            selectedRowKeys,
            onChange: this.onSelectChange,
        };
        const hasSelected = selectedRowKeys.length > 0;
        return (
            <div className="message_main">
                <Table rowSelection={rowSelection} columns={columns} dataSource={data} bordered={true} pagination={false}/>
                <div className="message_m_page">
                    <Button
                        type="primary"
                        onClick={this.start}
                        disabled={!hasSelected}
                        loading={loading}
                    >
                        删除选中
                    </Button>
                    <span style={{ marginLeft: 8 }}>
                        {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
                    </span>
                    <div className="message_m_pageSize right">
                        <Pagination showSizeChanger onShowSizeChange={(current, pageSize)=>{this.onShowSizeChange(current, pageSize)}} defaultCurrent={1} total={500} />
                    </div>
                </div>

            </div>
        );
    }
}
