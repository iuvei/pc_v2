import React, {Component} from 'react';
import {observer} from 'mobx-react';
import echarts from 'echarts'
// const LineReact = asyncComponent(() => import('./EchartsDemo/LineReact'))  //折线图组件

import './TeamStatistics.scss'

@observer
export default class TeamStatistics extends Component {
    constructor(props){
        super(props);
        this.state={
            selectDayIndex: 0, // 选择天数
        }
    };
    componentDidMount() {
        this.brokenLine()
    };
    // 折线图
    brokenLine(){
        // 基于准备好的dom，初始化echarts实例
        let myChart = echarts.init(document.getElementById('main'));
        let option = {
            tooltip: {
                trigger: 'axis' // tooltip 的配置项显示提示框,axis 的时候可选
            },
            legend: {
                data:['总人数','总金额','注册人数','登陆人数','充值人数','投注人数']
            },
            grid: {
                left: '3%',
                right: '4%',
                top: '25%',
                bottom: '3%',// 控制图表上下左右的空白尺寸
                containLabel: true
            },
            // toolbox: {
            //     feature: {
            //         saveAsImage: {} // 下载图
            //     }
            // },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['10/10','10/11','10/12','10/13','10/14','10/15','10/16']
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                    name:'总人数',
                    type:'line',
                    stack: '总量',
                    data:[120, 132, 101, 134, 90, 230, 210],
                    itemStyle : {
                        normal : {
                            color:'#6D69E2', // 折点
                            lineStyle:{
                                color:'#6D69E2' // 折线
                            }
                        }
                    },
                },
                {
                    name:'总金额',
                    type:'line',
                    stack: '总量',
                    data:[220, 182, 191, 234, 290, 330, 310],
                    itemStyle : {
                        normal : {
                            color:'#8F46DD', // 折点
                            lineStyle:{
                                color:'#8F46DD' // 折线
                            }
                        }
                    },
                },
                {
                    name:'注册人数',
                    type:'line',
                    stack: '总量',
                    data:[150, 232, 201, 154, 190, 330, 410],
                    itemStyle : {
                        normal : {
                            color:'#20C68E', // 折点
                            lineStyle:{
                                color:'#20C68E' // 折线
                            }
                        }
                    },
                },
                {
                    name:'登陆人数',
                    type:'line',
                    stack: '总量',
                    data:[320, 332, 301, 334, 390, 330, 320],
                    itemStyle : {
                        normal : {
                            color:'#F58B63', // 折点
                            lineStyle:{
                                color:'#F58B63' // 折线
                            }
                        }
                    },
                },
                {
                    name:'充值人数',
                    type:'line',
                    stack: '总量',
                    data:[820, 932, 901, 934, 1290, 1330, 1320],
                    itemStyle : {
                        normal : {
                            color:'#27AAE6', // 折点
                            lineStyle:{
                                color:'#27AAE6' // 折线
                            }
                        }
                    },
                },
                {
                    name:'投注人数',
                    type:'line',
                    stack: '总量',
                    data:[420, 932, 501, 934, 1290, 1730, 620],
                    itemStyle : {
                        normal : {
                            color:'#FF5757', // 折点
                            lineStyle:{
                                color:'#FF5757' // 折线
                            }
                        }
                    },
                }
            ]
        };
        // 绘制图表
        myChart.setOption(option);
    };
    // 选择天数
    onSelectDay(index) {
        this.setState({selectDayIndex: index})
        console.log(this.state.option.xAxis.data)
        if(index === 0) {
            // let data = this.setState({xAxis: ['10/10','10/11','10/12','10/13','10/14','10/15','10/16']});
            // this.brokenLine(data);
        } else if(index === 1) {
            // let data = this.setState({xArr: ['10/10','10/11','10/12','10/13','10/14','10/15','10/16','10/17','10/16','10/18','10/19','10/20']});
            // this.brokenLine(data);
        }
    }
    render() {
        const selectDayArr = ['七天','十五天','三十天'];

        return (
            <div className="t_st_main">
                <ul className="t_st_people_num clear">
                    <li>
                        <div className="t_st_sum_preple">
                            <p>团队总人数</p>
                            <p>10人</p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <p>团队总金额</p>
                            <p>1000.00元</p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <p>今日注册人数</p>
                            <p>10人</p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <p>今日登陆人数</p>
                            <p>10人</p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <p>今日充值人数</p>
                            <p>10人</p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <p>今日投注人数</p>
                            <p>10人</p>
                        </div>
                    </li>
                </ul>
                <div className="t_st_broken_line">
                    <ul className="t_st_select_day">
                        {
                            selectDayArr.map((value,index)=>{
                                return (
                                    <li className={this.state.selectDayIndex === index ? 'select_day_active' : ''} onClick={()=>{this.onSelectDay(index)}} key={index}>{value}</li>
                                )
                            })
                        }
                    </ul>
                    <div id="main" style={{ width: 1066, height: 400 }}></div>
                </div>
            </div>
        );
    }
}
