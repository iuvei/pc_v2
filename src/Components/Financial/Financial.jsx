import React, {Component} from 'react';
import {observer} from 'mobx-react';
import {Link} from 'react-router';
import { Row, Col } from 'antd';
import QueueAnim from 'rc-queue-anim';
import ModelView from '../Common/ChildNav/ChildNav'

import './Financial.scss';
@observer
export default class Financial extends Component {
    constructor(props){
        super(props);
        this.state = {
            navIndex: 0,
        }
    };
    onChangeTitle() {
        switch(this.state.navIndex)
        {
            case 0:
                return '充值';
                break;
            case 1:
                return '提现';
                break;
            case 2:
                return '充提记录';
                break;
            case 3:
                return '转账';
                break;
            case 4:
                return '转账记录';
                break;
            case 5:
                return '资金账变';
                break;
            default:
                return '充值';
        }
    };
    componentWillMount() {
    };
    componentDidMount() {
    };

    render() {
        const navList = [
            {
                link: '/financial/recharge',
                text: '充值'
            },{
                link: '/financial/withdraw',
                text: '提现'
            },{
                link: '/financial/mentionFillingRecord',
                text: '充提记录'
            },{
                link: '/financial/transfer',
                text: '转账'
            },{
                link: '/financial/transferRecord',
                text: '转账记录'
            },{
                link: '/financial/accountChange',
                text: '资金账变'
            }
        ];
        return (
            <div className="financing_c_main">
                <QueueAnim duration={1000}
                           animConfig={[
                               { opacity: [1, 0], translateY: [0, 50] }
                           ]}>
                    <Row type="flex" justify="center" align="top" key="financingCenter">
                        <Col span={24}>
                            <div className="a_m_controler">
                                <div className="a_m_title">
                                    <span>财务中心</span>
                                    <span> > </span>
                                    <span>{this.onChangeTitle()}</span>
                                </div>
                                <ModelView navList={navList}/>
                                <div>
                                    {this.props.children}
                                </div>
                            </div>
                        </Col>
                    </Row>
                </QueueAnim>
            </div>
        );
    }
}
