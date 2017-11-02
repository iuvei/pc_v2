import React, {Component} from 'react';
import {observer} from 'mobx-react';
import TweenOne from 'rc-tween-one';

import { stateVar } from '../../../State/Index';
import './HomeMainLeft.scss'

import active_close from'../Img/active_close.png'

@observer
export default class HomeMainLeft extends Component {
    constructor(props) {
        super(props);
        this.state = {
            noticePosition: 0,// 列表位置
            leftActive: stateVar.homeMainLeftActive,
            repeat: -1,
            infoList: [
                {
                    text: '恭喜',
                    name: 'vips45646',
                    lotteryName: '重庆时时彩',
                    status: '中奖',
                    money: '5000元',
                },{
                    text: '恭喜',
                    name: 'vips45646',
                    lotteryName: '重庆时时彩',
                    status: '中奖',
                    money: '5000元',
                },{
                    text: '恭喜',
                    name: 'vips45646',
                    lotteryName: '重庆时时彩',
                    status: '中奖',
                    money: '5000元',
                },{
                    text: '恭喜',
                    name: 'vips45646',
                    lotteryName: '重庆时时彩',
                    status: '中奖',
                    money: '5000元',
                },{
                    text: '恭喜',
                    name: 'vips45646',
                    lotteryName: '重庆时时彩',
                    status: '中奖',
                    money: '5000元',
                },{
                    text: '恭喜',
                    name: 'vips45646',
                    lotteryName: '重庆时时彩',
                    status: '中奖',
                    money: '5000元',
                },{
                    text: '恭喜',
                    name: 'vips45646',
                    lotteryName: '重庆时时彩',
                    status: '中奖',
                    money: '5000元',
                },{
                    text: '恭喜',
                    name: 'vips45646',
                    lotteryName: '重庆时时彩',
                    status: '中奖',
                    money: '5000元',
                },{
                    text: '恭喜',
                    name: 'vips45646',
                    lotteryName: '重庆时时彩',
                    status: '中奖',
                    money: '5000元',
                }
            ],
        }
    };
    handclick() {
        stateVar.homeMainLeftActive = false;
        this.setState({leftActive: false});
        this.setState({repeat: 0});
    };
    render() {
        return (
            <div className="home_main_left" style={{display:  this.state.leftActive ? 'block' : 'none'}}>
                <img className="home_m_close" onClick={()=>{this.handclick()}} src={active_close} alt=""/>
                <div className="home_m_info_controler">
                    <TweenOne
                        animation={{ y: '-=60', yoyo: false, repeat: this.state.repeat, duration: 8000 }}
                        key="icon"
                    >
                        <ul className="home_m_info_list">
                            {
                                this.state.infoList.map((item,index)=>{
                                    return (
                                        <li key={index}>
                                            <span>{item.text}</span>
                                            <i className="ellipsis">{index}</i>
                                            <span className="home_m_lottery_name ellipsis">{item.lotteryName}</span>
                                            <span>{item.status}</span>
                                            <em>{item.money}</em>
                                        </li>
                                    )
                                })
                            }

                        </ul>
                    </TweenOne>
                </div>
            </div>
        )
    }
}
