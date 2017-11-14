import React, {Component} from 'react';
import {observer} from 'mobx-react';
import { Row, Col, Button, Table  } from 'antd';

import active_detaile from './Img/active_detaile.png';
import './ActivityDetails.scss'
@observer
export default class ActivityDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
        };
    };
    enterLoading() {
        this.setState({ loading: true });
    };
    render() {
        const columns = [
            { title: '序号', dataIndex: 'key', width: 50 },
            { title: '充值金额', dataIndex: 'age', width: 100 },
            { title: '充值奖金', dataIndex: 'address', width: 100 },
            { title: '流水金额', dataIndex: 'address1', width: 100 },
            { title: '流水奖金', dataIndex: 'name', width: 100 },
            { title: '奖金分数', dataIndex: 'address3', width: 100 },
            { title: '可领次数', dataIndex: 'address4', width: 70 },
            { title: '备注', dataIndex: 'address5', width: 100 },
            { title: '操作', dataIndex: '', width: 100,
                render: (text, record) => <Button type="primary" disabled={record.key === 2 ? true : false}>立即领取</Button>
            },
        ];

        const data = [
            { key: 1, name: 'John Brown', age: 32, address: 'New York '},
            { key: 2, name: 'Jim Green', age: 42, address: 'Londrk' },
            { key: 3, name: 'Joe Black', age: 32, address: 'ake Park' },
        ];
        return (
            <Row type="flex" justify="center" align="top" className="a_d_main main_width" >
                <Col span={24}>
                    <img className="a_d_activeImg" src={active_detaile} alt=""/>
                    <h3 className="a_d_activeName">泰国幸运金</h3>
                    <div className="a_d_active_introduce">
                        <div className="left">
                            <div className="a_d_active_time clear">
                                <ul className="a_d_list left">
                                    <li>
                                        <span>活动时间：</span>
                                        <span>2017年11月01日02:00至2017年11月11日02:00</span>
                                    </li>
                                    <li>
                                        <span>活动限额：</span>
                                        <span>每日限额500名</span>
                                    </li>
                                    <li>
                                        <span>参与平台：</span>
                                        <span>PC客户端</span>
                                    </li>
                                </ul>
                                <div className="a_d_apply right">
                                    <Button type="primary" className="a_d_apply_btn" loading={this.state.loading} onClick={()=>this.enterLoading()}>
                                        立刻报名
                                    </Button>
                                    <p className="a_d_residue_number">（限额剩余20人）</p>
                                </div>
                            </div>
                            <div className="a_d_explain">
                                <p className="a_d_explain_text">奖金说明：</p>
                                <div className="a_d_table">
                                    <Table
                                        columns={columns}
                                        dataSource={data}
                                        scroll={{ y: 240 }}
                                        size="small"
                                        pagination={false}
                                    />
                                </div>
                            </div>

                        </div>
                        <div className="right"></div>
                    </div>
                </Col>
            </Row>
        )
    }
}
