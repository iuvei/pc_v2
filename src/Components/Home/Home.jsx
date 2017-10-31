import React, {Component} from 'react';
import {observer} from 'mobx-react';
import TweenOne from 'rc-tween-one';
import './Home.scss'

import home_top from './Img/home_top.jpg';
import home_lottery01 from './Img/home_lottery01.jpg';
import home_lottery02 from './Img/home_lottery02.jpg';
import home_lottery03 from './Img/home_lottery03.jpg';
import home_active01 from './Img/home_active01.png'
import home_active02 from './Img/home_active02.png'
import home_active03 from './Img/home_active03.png'
import home_active04 from './Img/home_active04.png'
import hzyh_icon from './Img/hzyh_icon.png'
import active_close from'./Img/active_close.png'

@observer
export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            noticePosition: 0,// 列表位置
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
        };
    };
    move (destination, duration) { // 实现滚动动画
        let speed = ((destination - this.state.noticePosition) * 1000) / (duration * 60);
        console.log(speed)
        let count = 0;
        let step = () => {
            this.setState({noticePosition: this.state.noticePosition + speed});
            count++;
            window.requestAnimationFrame(() => {
                if (this.state.noticePosition < destination) {
                    step();
                } else {
                    this.setState({noticePosition: destination})
                }
            })
        };
        step()
    };
    componentWillMount(){
        // let destination = 0.53;
        // setInterval(() => {
        //     if (destination / 0.53 < this.state.infoList.length) {
        //         this.move(destination, 500);
        //         destination += 0.53;
        //     } else { // 列表到底
        //         this.setState({noticePosition: 0});  // 设置列表为开始位置
        //         destination = 0.53;
        //         this.move(destination, 500);
        //         destination += 0.53;
        //     }
        // }, 3000)
    };
    render() {
        return (
            <div className="home_main">
                <div className="home_m_top">
                    <img src={home_top} width="100%" style={{verticalAlign: 'middle'}}/>
                    <div className="home_m_top_text">
                        <h3>MOBILE PHONE CLIENT</h3>
                        <h1>恒彩手机客户端</h1>
                        <h2>随时随地随心，从此财富只在指尖流动</h2>
                        <p className="home_m_top_download">立即下载</p>
                    </div>
                    <TweenOne
                        animation={{ y: '-=20', yoyo: true, repeat: -1, duration: 1000 }}
                        className="home_m_top_down_icon"
                        key="icon"
                    >
                    </TweenOne>
                </div>
                <ul className="home_m_lottery clear">
                    <li>
                        <img src={home_lottery01} width="100%" alt=""/>

                        <div className="home_m_lottery_type">
                            <h3>重庆时时彩</h3>
                            <h4>重庆市福利彩票发行中心承销的福彩快开彩票</h4>
                            <a href="javascript:void(0)" className="home_m_gaming">立即游戏</a>
                        </div>
                    </li>
                    <li>
                        <img src={home_lottery02} width="100%" alt=""/>
                    </li>
                    <li>
                        <img src={home_lottery03} width="100%" alt=""/>
                    </li>
                </ul>
                <div className="home_m_active">
                    <div className="home_favourable_active">
                        <p><i style={{color:'#BC0000'}}>优惠</i>活动</p>
                        <h5>FAVOURABLE ACTIVITY</h5>
                    </div>
                    <ul className="home_m_active_list clear">
                        <li>
                            <a href="#">
                                <img src={home_active01} alt=""/>
                                <p className="home_m_active_type">每日签到</p>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src={home_active02} alt=""/>
                                <p className="home_m_active_type">周反水</p>
                            </a>
                        </li><li>
                        <a href="#">
                            <img src={home_active03} alt=""/>
                            <p className="home_m_active_type">天天领红包</p>
                        </a>
                    </li><li>
                        <a href="#">
                            <img src={home_active04} alt=""/>
                            <p className="home_m_active_type">投注有礼</p>
                        </a>
                    </li>
                    </ul>
                </div>
                <div className="home_m_bottom">
                    <ul className="home_m_bottom_list clear">
                        <li>
                            <div className="home_m_recharge_top clear">
                                <div className="home_m_top_left left">
                                    <h3>充值</h3>
                                    <h4>到账时间</h4>
                                </div>
                                <div className="home_m_top_right left">
                                    <span className="home_m_time">0.3</span>
                                    <span>秒</span>
                                </div>
                            </div>
                            <p>平台支持超过28家银行充值，可24小时在线充值。充值平均每笔到账时间为0.3秒，充值贴心不收手续费。</p>
                        </li>
                        <li>
                            <div className="home_m_recharge_top clear">
                                <div className="home_m_top_left left">
                                    <h3>提款</h3>
                                    <h4>到账时间</h4>
                                </div>
                                <div className="home_m_top_right left">
                                    <span className="home_m_time">30</span>
                                    <span>秒</span>
                                </div>
                            </div>
                            <p>平台拥有自主研发全自动审核及付款系统，提款平均每笔到账时间为30秒，提款极速到账，无需更多等待。</p>
                        </li>
                        <li>
                            <div className="home_m_recharge_top clear">
                                <div className="home_m_top_left left">
                                    <h3>平台</h3>
                                    <h4>最新加密技术</h4>
                                </div>
                                <div className="home_m_top_right left">
                                    <span className="home_m_time">1024</span>
                                </div>
                            </div>
                            <p>采用最先进的数据加密技术。交易信息以非明文方式传输和存储，即使外部入侵，数据也不可读，万无一失，固若金汤。</p>
                        </li>
                        <li>
                            <div className="home_m_recharge_top clear">
                                <div className="home_m_top_left left">
                                    <h3>合作</h3>
                                    <h4>提供安全保障</h4>
                                </div>
                                <div className="home_m_top_right left">
                                    <span className="home_m_time">28</span>
                                    <span>家</span>
                                </div>
                            </div>
                            <img style={{marginLeft: 10}} src={hzyh_icon} alt=""/>
                        </li>
                    </ul>
                </div>
                <div className="home_main_left">
                    <img className="home_m_close" src={active_close} alt=""/>
                    <div className="home_m_info_controler">
                        <TweenOne
                            animation={{ y: '-=20', yoyo: false, repeat: -1, duration: 3000 }}
                            key="icon"
                        >

                            <ul className="home_m_info_list" style={{transform: 'translateY(-'+this.state.noticePosition+'px) translateZ(0px)'}}>
                                {
                                    this.state.infoList.map((item,index)=>{
                                        return (
                                            <li key={index}>
                                                <span>{item.text}</span>
                                                <i className="ellipsis">{item.name}</i>
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
            </div>
        )
    }
}
