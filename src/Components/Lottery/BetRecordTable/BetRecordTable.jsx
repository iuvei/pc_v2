import React, {Component} from 'react';
import {observer} from 'mobx-react';
import { Table } from 'antd';
import './BetRecordTable.scss'

@observer
export default class BetRecordTable extends Component {

    render() {
        const columns = [
            { title: '订单号', dataIndex: 'name', key: 'name',width: 150 },
            { title: '期号', dataIndex: 'age', key: 'age',width: 110 },
            { title: '玩法', dataIndex: 'address', key: 'addr2ess',width: 110 },
            { title: '投注内容', dataIndex: 'betContent', key: 'add2ress',width: 110 },
            { title: '开奖号', dataIndex: 'lotteryNumber', key: 'addre2ss',width: 85 },
            { title: '投注金额', dataIndex: 'betMoney', key: 'a2ddress',width: 85 },
            { title: '奖金', dataIndex: 'bonus', key: 'a2ddres2s',width: 85 },
            { title: '状态', dataIndex: 'status', key: 'a2ddres22s',width: 85 },
            { title: '操作', dataIndex: '', key: 'x', render: () => <a href="#">再次购买</a> }
        ];

        const data = [
            { key: 1, name: 'John Brown', age: '2015456-456', address: '后三直选',  betContent: '015646789', lotteryNumber: '45646', betMoney: '2.0000', bonus: '0.0000', status: '未中奖'},
            { key: 2, name: 'John4535 Brown', age: '2015456-456', address: '后三直选', betContent: '015646789', lotteryNumber: '45646', betMoney: '2.0000', bonus: '0.0000', status: '未中奖'},
            { key: 3, name: 'John4535 Brown', age: '2015456-456', address: '后三直选', betContent: '015646789', lotteryNumber: '45646', betMoney: '2.0000', bonus: '0.0000', status: '未中奖'},
            { key: 4, name: 'John4535 Brown', age: '2015456-456', address: '后三直选', betContent: '015646789', lotteryNumber: '45646', betMoney: '2.0000', bonus: '0.0000', status: '未中奖'},
            { key: 5, name: 'John4535 Brown', age: '2015456-456', address: '后三直选', betContent: '015646789', lotteryNumber: '45646', betMoney: '2.0000', bonus: '0.0000', status: '未中奖'},
            { key: 6, name: 'John4535 Brown', age: '2015456-456', address: '后三直选', betContent: '015646789', lotteryNumber: '45646', betMoney: '2.0000', bonus: '0.0000', status: '未中奖'},
            { key: 7, name: 'John4535 Brown', age: '2015456-456', address: '后三直选', betContent: '015646789', lotteryNumber: '45646', betMoney: '2.0000', bonus: '0.0000', status: '未中奖'},
            { key: 8, name: 'John4535 Brown', age: '2015456-456', address: '后三直选', betContent: '015646789', lotteryNumber: '45646', betMoney: '2.0000', bonus: '0.0000', status: '未中奖'},
            { key: 9, name: 'John4535 Brown', age: '2015456-456', address: '后三直选', betContent: '015646789', lotteryNumber: '45646', betMoney: '2.0000', bonus: '0.0000', status: '未中奖'},
        ];
        return (
            <div className="bet_record_table">
                <div className="b_r_top">重庆时时彩&nbsp;最近20期投注记录</div>
                <Table columns={columns} dataSource={data} pagination={ false } scroll={{ y: 240 }} size="small" loading={false}/>
            </div>
        );
    }
}
