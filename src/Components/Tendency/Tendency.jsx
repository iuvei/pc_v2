/*走势图*/
import React, {Component} from 'react';
import {observer} from 'mobx-react';
import { DatePicker, Checkbox, Table, Select, Input,  Button, Icon } from 'antd';
import './Tendency.scss'
const Option = Select.Option;

@observer
export default class Tendency extends Component {
    constructor(props) {
        super(props);
        this.state = {
            startValue: null,
            endValue: null,
            endOpen: false,

        }
    };

    disabledStartDate = (startValue) => {
        const endValue = this.state.endValue;
        if (!startValue || !endValue) {
            return false;
        }
        return startValue.valueOf() > endValue.valueOf();
    }

    disabledEndDate = (endValue) => {
        const startValue = this.state.startValue;
        if (!endValue || !startValue) {
            return false;
        }
        return endValue.valueOf() <= startValue.valueOf();
    }

    onChange = (field, value) => {
        this.setState({
            [field]: value,
        });
    }

    onStartChange = (value) => {
        this.onChange('startValue', value);
    }

    onEndChange = (value) => {
        this.onChange('endValue', value);
    }

    handleStartOpenChange = (open) => {
        if (!open) {
            this.setState({ endOpen: true });
        }
    }

    handleEndOpenChange = (open) => {
        this.setState({ endOpen: open });
    }

    render() {
        const columns = [
            {
                title: '期号',
                dataIndex: 'periodIndex',
            }, {
                title: '开奖号码',
                dataIndex: 'num',
            }, {
                title: '万位',
                children:[{
                    title: '0',
                    dataIndex: 'num',
                },{
                }]
            }, {
                title: '期号',
                key: 'action',
            }, {
                title: '投注模式',
                key: 'action1',
            }, {
                title: '帐变类型',
                key: 'action2',
            }, {
                title: '变动金额',
                key: 'action3',
            }, {
                title: '余额',
                key: 'action4',
            }
        ];
        const { startValue, endValue, endOpen } = this.state;
        return (
            <div className='tendency-main'>
                <ul className='t-top'>
                    <li>
                        <Select defaultValue="重庆时时彩" style={{ minWidth: 160 }} onChange={(value)=>{this.handleChangeMethod(value)}}>
                            <Option value="jack">重庆时时彩</Option>
                            <Option value="lucy">重庆时时彩</Option>
                            <Option value="Yiminghe">重庆时时彩</Option>
                        </Select>
                    </li>
                    <li>
                        <Select defaultValue="五星基本走势图" style={{ minWidth: 160 }} onChange={(value)=>{this.handleChangeMethod(value)}}>
                            <Option value="jack">五星基本走势图</Option>
                            <Option value="lucy">五星基本走势图</Option>
                            <Option value="Yiminghe">五星基本走势图</Option>
                        </Select>
                    </li>
                    <li>
                        <Checkbox >显示走势折线</Checkbox>
                    </li>
                    <li>
                        <a className='t-r-table' href="javascript:void(0)">表格上下转换</a>
                    </li>
                    <li></li>
                    <li>当前统计期数：100</li>
                    <li>
                        <ul className='t-period clear'>
                            <li>最近30期</li>
                            <li>最近50期</li>
                            <li>最近100期</li>
                        </ul>
                    </li>

                    <li>日期：
                        <DatePicker
                            disabledDate={this.disabledStartDate}
                            showTime
                            format="YYYY-MM-DD HH:mm:ss"
                            value={startValue}
                            placeholder="Start"
                            onChange={this.onStartChange}
                            onOpenChange={this.handleStartOpenChange}
                        />至
                        <DatePicker
                            disabledDate={this.disabledEndDate}
                            showTime
                            format="YYYY-MM-DD HH:mm:ss"
                            value={endValue}
                            placeholder="End"
                            onChange={this.onEndChange}
                            open={endOpen}
                            onOpenChange={this.handleEndOpenChange}
                        />
                    </li>
                    <li>
                        <Button type="primary" className=''  onClick={()=>{this.search()}}>
                          查询
                        </Button>
                    </li>
                </ul>
            </div>
        );
    }
}
