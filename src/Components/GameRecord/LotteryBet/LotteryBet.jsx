/*彩票投注*/
import React, {Component} from 'react';
import {observer} from 'mobx-react';
import { DatePicker, Checkbox, Radio, Table, Select } from 'antd';
import 'whatwg-fetch'

import './LotteryBet.scss'

import t_m_serch from './Img/t_m_serch.png'

@observer
export default class LotteryBet extends Component {
    constructor(props){
        super(props)
        this.state = {
            data: [],
            pagination: {},
            loading: false,
            radioValue: 1,
            timeIndex: 1,// 近三天，近七天
        }
    };
    componentDidMount() {
        console.log(this.props.navIndex);
        this.fetch();
    };
    onChange(date, dateString) {
        console.log(date, dateString);
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
        fetch('https://randomuser.me/api',{
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
    };

    // 玩法群
    handleChangeMethod(value) {
        console.log(`selected ${value}`);
    };
    // 包含下级
    selectSubordinate(e) {
        console.log(`checked = ${e.target.checked}`);
    };
    // 彩种名称
    onChangeRadio(e) {
        console.log('radio checked', e.target.value);
        this.setState({
            radioValue: e.target.value,
        });
    };
    // 总计
    c_p_t_z_tabelFooter() {
      return (
          <div className="l_b_tabel_footer">
              <span>总计</span>
              <span>
                  总投注额：
                  <strong>0.00</strong>
              </span>
              <span>
                  总奖金：
                  <strong>10.00</strong>
              </span>
          </div>
      )
    };
    // 选择时间确认
    onOk(value) {
        console.log('onOk: ', value);
    };

    render() {
        const Option = Select.Option;
        const RadioGroup = Radio.Group;
        // 单选彩种名称
        const arr = ['重庆时时彩', '新疆时时彩', '重庆时时彩', '重庆时时彩', '重庆时时彩', '重庆时时彩', '重庆时时彩', '重庆时时彩', '重庆时时彩', '重庆时时彩', '重庆时时彩'];

        let columns = [];
        if(this.props.navIndex === 0) { // 0:彩票投注；1:追号记录；2:真人投注；3:体育投注；4:PT投注；5:博饼投注
            columns = [
                {
                    title: '订单号',
                    dataIndex: 'email',
                }, {
                    title: '用户名',
                    dataIndex: 'gender',
                }, {
                    title: '彩种与玩法',
                    dataIndex: 'email3',
                }, {
                    title: '投注时间',
                    dataIndex: 'email4',
                }, {
                    title: '期号',
                    dataIndex: 'email5',
                }, {
                    title: '投注内容',
                    dataIndex: 'email6',
                }, {
                    title: '投注倍数',
                    dataIndex: 'email7',
                }, {
                    title: '投注模式',
                    dataIndex: 'email8',
                }, {
                    title: '开奖号码',
                    dataIndex: 'email9',
                }, {
                    title: '投注金额',
                    dataIndex: 'email11',
                    sorter: (a, b) => a.age - b.age,
                }, {
                    title: '奖金',
                    dataIndex: 'email10',
                    sorter: (a, b) => a.age - b.age,
                }, {
                    title: '状态',
                    dataIndex: 'email12',
                }]
        } else if(this.props.navIndex === 1) {
            columns = [
                {
                    title: '订单号',
                    dataIndex: 'email',
                }, {
                    title: '追号时间',
                    dataIndex: 'gender',
                }, {
                    title: '彩种与玩法',
                    dataIndex: 'email3',
                }, {
                    title: '追号进度',
                    dataIndex: 'email4',
                }, {
                    title: '追号内容',
                    dataIndex: 'email5',
                }, {
                    title: '追号总金额',
                    dataIndex: 'email6',
                    sorter: (a, b) => a.age - b.age,
                }, {
                    title: '完成金额',
                    dataIndex: 'email7',
                    sorter: (a, b) => a.age - b.age,
                }, {
                    title: '取消金额',
                    dataIndex: 'email8',
                    sorter: (a, b) => a.age - b.age,
                }, {
                    title: '中奖后终止',
                    dataIndex: 'email9',
                }, {
                    title: '状态',
                    dataIndex: 'email11',
                }]
        } else if(this.props.navIndex === 2) {
            columns = [
                {
                    title: '用户名',
                    dataIndex: 'email',
                }, {
                    title: '时间',
                    dataIndex: 'gender',
                }, {
                    title: '游戏名称',
                    dataIndex: 'email3',
                }, {
                    title: '牌局号',
                    dataIndex: 'email4',
                }, {
                    title: '投注金额',
                    dataIndex: 'email5',
                    sorter: (a, b) => a.age - b.age,
                }, {
                    title: '奖金',
                    dataIndex: 'email6',
                    sorter: (a, b) => a.age - b.age,
                }, {
                    title: '盈亏',
                    dataIndex: 'email7',
                    sorter: (a, b) => a.age - b.age,
                }, {
                    title: '状态',
                    dataIndex: 'email8',
                }]
        } else if(this.props.navIndex === 3) {
            columns = [
                {
                    title: '用户名',
                    dataIndex: 'email',
                }, {
                    title: '时间',
                    dataIndex: 'gender',
                }, {
                    title: '游戏名称',
                    dataIndex: 'email3',
                }, {
                    title: '注单号',
                    dataIndex: 'email4',
                }, {
                    title: '投注金额',
                    dataIndex: 'email5',
                }, {
                    title: '有效投注金额',
                    dataIndex: 'email53',
                    sorter: (a, b) => a.age - b.age,
                }, {
                    title: '奖金',
                    dataIndex: 'email6',
                    sorter: (a, b) => a.age - b.age,
                }, {
                    title: '盈亏',
                    dataIndex: 'email7',
                    sorter: (a, b) => a.age - b.age,
                }, {
                    title: '金额',
                    dataIndex: 'email17',
                    sorter: (a, b) => a.age - b.age,
                }, {
                    title: '状态',
                    dataIndex: 'email8',
                }]
        } else if(this.props.navIndex === 4) {
            columns = [
                {
                    title: '用户名',
                    dataIndex: 'email',
                }, {
                    title: '时间',
                    dataIndex: 'gender',
                }, {
                    title: '游戏名称',
                    dataIndex: 'email3',
                }, {
                    title: '牌局号',
                    dataIndex: 'email4',
                }, {
                    title: '投注金额',
                    dataIndex: 'email5',
                    sorter: (a, b) => a.age - b.age,
                }, {
                    title: '奖金',
                    dataIndex: 'email6',
                    sorter: (a, b) => a.age - b.age,
                }, {
                    title: '盈亏',
                    dataIndex: 'email7',
                    sorter: (a, b) => a.age - b.age,
                }, {
                    title: '状态',
                    dataIndex: 'email8',
                }]
        } else if(this.props.navIndex === 5) {
            columns = [
                {
                    title: '用户名',
                    dataIndex: 'email',
                }, {
                    title: '游戏时间',
                    dataIndex: 'gender',
                }, {
                    title: '投注内容',
                    dataIndex: 'email3',
                }, {
                    title: '博饼投注金额',
                    dataIndex: 'email5',
                    sorter: (a, b) => a.age - b.age,
                }, {
                    title: '加倍总投注额',
                    dataIndex: 'email6',
                    sorter: (a, b) => a.age - b.age,
                }, {
                    title: '返点总额',
                    dataIndex: 'email7',
                    sorter: (a, b) => a.age - b.age,
                }, {
                    title: '中奖金额',
                    dataIndex: 'email8',
                    sorter: (a, b) => a.age - b.age,
                }, {
                    title: '奖池金额',
                    dataIndex: 'email81',
                    sorter: (a, b) => a.age - b.age,
                }, {
                    title: '盈亏',
                    dataIndex: 'email82',
                    sorter: (a, b) => a.age - b.age,
                }, {
                    title: '加倍详情',
                    dataIndex: 'email83',
                }]
        }
        return (
            <div className="team_list">
                <div className="team_list_top">
                    <div className="t_l_time" style={{borderBottom: this.props.navIndex === 5 ? '0' : '1px dotted #8B8D92'}}>
                        <ul className="t_l_time_row">
                            <li className="t_m_date_classify">投注时间：</li>
                            <li style={{marginLeft: '8px'}}>
                                <DatePicker
                                    showTime
                                    format="YYYY-MM-DD HH:mm:ss"
                                    placeholder="请选择开始时间"
                                    onChange={(date, dateString)=>{this.onChange(date, dateString)}}
                                    onOk={this.onOk}
                                />
                            </li>
                            <li style={{margin: '0 8px'}}>至</li>
                            <li>
                                <DatePicker
                                    showTime
                                    format="YYYY-MM-DD HH:mm:ss"
                                    placeholder="请选择结束时间"
                                    onChange={(date, dateString)=>{this.onChange(date, dateString)}}
                                    onOk={(date)=>{this.onOk(date)}}
                                />
                            </li>
                            <li className="t_m_line"></li>
                            <li>
                                <ul className="t_l_time_btn clear">
                                    <li className={1 === this.state.timeIndex ? 't_l_time_btn_active' : ''} onClick={()=>{this.setState({timeIndex: 1})}}>近三天</li>
                                    <li className={2 === this.state.timeIndex ? 't_l_time_btn_active' : ''} onClick={()=>{this.setState({timeIndex: 2})}}>近七天</li>
                                </ul>
                            </li>
                        </ul>
                        <ul className="t_l_classify">
                            <li style={{display: this.props.navIndex === 5 ? 'none' : 'block'}}>
                                <span className="t_m_date_classify">{this.props.navIndex === 4 ? '游戏分类：' : '彩种名称：'}</span>
                                <span className="t_l_border">重庆时时彩</span>
                            </li>
                            <li style={{display: this.props.navIndex === 2 ||
                                                this.props.navIndex === 3 ||
                                                this.props.navIndex === 5 ? 'none' : 'block'}}>
                                <span>{this.props.navIndex === 4 ? '游戏名称：' : '玩法群：'}</span>
                                <Select defaultValue="lucy" style={{ minWidth: 80 }} onChange={(value)=>{this.handleChangeMethod(value)}}>
                                  <Option value="jack">Jack</Option>
                                  <Option value="lucy">Lucy</Option>
                                  <Option value="Yiminghe">yiminghe</Option>
                                </Select>
                            </li>
                            <li style={{display: this.props.navIndex === 2 ||
                                                this.props.navIndex === 3 ||
                                                this.props.navIndex === 4 ||
                                                this.props.navIndex === 5 ? 'none' : 'block'}}>
                                <span>玩法：</span>
                                <Select defaultValue="lucy" style={{ minWidth: 80 }} onChange={(value)=>{this.handleChangeMethod(value)}}>
                                    <Option value="jack">Jack</Option>
                                    <Option value="lucy">Lucy</Option>
                                    <Option value="Yiminghe">yiminghe</Option>
                                </Select>
                            </li>
                            <li style={{display: this.props.navIndex === 5 ? 'none' : 'block'}}>
                                <span>状态：</span>
                                <Select defaultValue="lucy" style={{ minWidth: 80 }} onChange={(value)=>{this.handleChangeMethod(value)}}>
                                    <Option value="jack">Jack</Option>
                                    <Option value="lucy">Lucy</Option>
                                    <Option value="Yiminghe">yiminghe</Option>
                                </Select>
                            </li>
                            <li style={{display: this.props.navIndex === 1 ? 'none' : 'block'}}>
                                <span className={this.props.navIndex === 5 ? 'l_b_acount' : ''}>用户名：</span>
                                <input className="l_b_user_name" type="text"/>
                            </li>
                            <li style={{marginRight: 0, display: this.props.navIndex === 1 ? 'none' : 'block'}}>
                                <Checkbox onChange={(e)=>{this.selectSubordinate(e)}}>包含下级</Checkbox>
                            </li>
                            <li className="t_m_serch">
                                <img src={t_m_serch} alt="搜索"/>
                            </li>
                        </ul>
                    </div>
                    <div className="l_b_radio_lottery" style={{display: this.props.navIndex === 5 ? 'none' : 'block'}}>
                        <RadioGroup onChange={(e)=>{this.onChangeRadio(e)}} value={this.state.radioValue}>
                            {
                                arr.map((value,index)=>{
                                    return (
                                        <Radio value={index} key={index}>{value}</Radio>
                                    )
                                })
                            }
                        </RadioGroup>
                    </div>
                </div>
                <div className="t_l_table">
                    <div className="t_l_table_list">
                        <Table columns={columns}
                               rowKey={record => record.registered}
                               dataSource={this.state.data}
                               pagination={this.state.pagination}
                               loading={this.state.loading}
                               footer={this.props.navIndex === 0 ? this.c_p_t_z_tabelFooter : ()=>{return '123546'}}
                               onChange={this.handleTableChange}
                        />
                    </div>
                </div>
            </div>

        );
    }
}

