import React, {Component} from 'react';
import {observer} from 'mobx-react';
import { Select, Row, Col, Button, Radio } from 'antd';
import './ContentMain.scss'

import BetRecordTable from '../BetRecordTable/BetRecordTable'

import minus_multiple from './Img/minus_multiple.png';
import add_multiple from './Img/add_multiple.png';
import close from './Img/close.png';

import Transform from '../../../CommonJs/transform.react.js';

@observer
export default class ContentMian extends Component {
    constructor(props){
        super(props)
        this.state = {
            navIndex : 0,
            hotIndex : 0,
            hotSwitch : false, // 冷热遗漏开关
            multipleValue : 1, // 倍数
            selectYjf: 0, // 选择元角分模式
        }
    };
    check_nav_index( index ){
        return index === this.state.navIndex ? "nav_list_active hvr-float" : "hvr-float"
    };
    handleChange( value ) {
        console.log(value);
    };
    handleChangeRatio(value) {
        console.log(value);
    };
    handleSizeChange(e) {
        console.log(e.target.value)
    }
    // 监听输入倍数
    multipleValue(event) {
        console.log(event.target.value)
        let value = event.target.value;
        if ( value === '' || parseInt(value) <= 1 ) {
            value = 1
        } else {
            value = parseInt(value)
        }
        this.setState({multipleValue: value});
    };
    // 减少倍数
    minusMultiple() {
        this.state.multipleValue <= 1 ? this.setState({multipleValue: 1}) : this.setState({multipleValue: this.state.multipleValue - 1})
    };
    // 增加倍数
    addMultiple() {
        this.setState({multipleValue: this.state.multipleValue + 1})
    };
    // 选择元角分模式
    selectYjf() {

    }
    render() {
        const Option = Select.Option;
        const arr = ['五星','五星','五星','五星','五星'];
        const yjf = ['元','角','分'];
        return (
            <div className="content_main">
                <div className="c_m_nav">
                    <ul className="c_m_nav_list left">
                        {
                            arr.map(( element,index ) => {
                                return(
                                    <li onClick={ () => { this.setState({ navIndex : index }) } } className={ this.check_nav_index( index ) } key={index}>{element}</li>
                                )
                            })
                        }
                    </ul>
                    <div className="c_m_select right">
                        <div className="c_m_select_method_text hvr-back-pulse">任选玩法</div>
                        <ul className="c_m_select_list clear">
                            <li>任选二</li>
                            <li>任选二</li>
                            <li>任选二</li>
                        </ul>
                    </div>
                </div>
                <div className="c_m_controler">
                    <div className="c_m_controler_method">
                        <div className="c_m_metho_type clear">
                            <span className="left">后三直选</span>
                            <ul className="c_m_method_details left">
                                <li className="method_details_active">复式</li>
                                <li>复式</li>
                                <li>复式</li>
                                <li>复式</li>
                                <li>复式</li>
                            </ul>
                        </div>
                        <div className="c_m_metho_type clear">
                            <span className="left">后三直选</span>
                            <ul className="c_m_method_details left">
                                <li>复式</li>
                                <li>复式</li>
                                <li>复式</li>
                                <li>复式</li>
                                <li>复式</li>
                            </ul>
                        </div>
                        <div className="c_m_metho_type clear">
                            <span className="left">后三直选</span>
                            <ul className="c_m_method_details left">
                                <li>复式</li>
                                <li>复式</li>
                                <li>复式</li>
                                <li>复式</li>
                                <li>复式</li>
                            </ul>
                        </div>
                        <div className="c_m_bonus_ratio">
                            <span>单注奖金</span>
                            <span>
                                <Select defaultValue="1" style={{ width: 100 }} onChange={(value)=>{this.handleChangeRatio(value)}}>
                                    <Option value="1">1950-0</Option>
                                    <Option value="2">1950-8</Option>
                                </Select>
                            </span>
                        </div>
                    </div>
                    <div className="c_m_select_number">
                        <div className="c_m_select_title">
                            <div className="c_m_select_name">
                                前三组选复式
                            </div>
                            <ul className="c_m_select_hot">
                                <li onClick={()=>{this.setState({hotIndex : 0})}} className={this.state.hotIndex === 0 ? 'active' : ''} >冷热</li>
                                <li onClick={()=>{this.setState({hotIndex : 1})}} className={this.state.hotIndex === 1 ? 'active' : ''}>遗漏</li>
                            </ul>
                            <Button className="c_m_btn" onClick={()=>{this.setState({hotSwitch : !this.state.hotSwitch})}}>
                                {this.state.hotSwitch ? '开' : '关'}
                            </Button>
                            <Radio.Group  onChange={(e)=>{this.handleSizeChange(e)}}>
                                <Radio.Button value="30期">30期</Radio.Button>
                                <Radio.Button value="60期">60期</Radio.Button>
                                <Radio.Button value="100期">100期</Radio.Button>
                            </Radio.Group>
                            <span className="c_m_select_title_right right">
                                <span>从万、千、百位各选一个号码组成一注</span>
                                <span className="c_m_lottery_explain">中奖说明</span>
                            </span>
                        </div>
                        <div className="c_m_select_body">
                            <div className="c_m_select_body_number">
                                <p className="c_m_select_places">万位</p>
                                <ul className="c_m_number_list">
                                    <li>1<p className="omit">3</p></li>
                                    <li className="number_active">0<p className="omit">3</p></li>
                                    <li>0<p className="omit">3</p></li>
                                    <li>0<p className="omit">3</p></li>
                                    <li>0<p className="omit">3</p></li>
                                    <li>0<p className="omit">3</p></li>
                                    <li>0<p className="omit">3</p></li>
                                    <li>0<p className="omit">3</p></li>
                                    <li>0<p className="omit">3</p></li>
                                </ul>
                                <ul className="c_m_number_select right">
                                    <li>全</li>
                                    <li>大</li>
                                    <li>小</li>
                                    <li>奇</li>
                                    <li>偶</li>
                                    <li>清</li>
                                </ul>
                            </div>
                            <div className="c_m_select_body_number">
                                <p className="c_m_select_places">万位</p>
                                <ul className="c_m_number_list">
                                    <li>0<p className="omit">3</p></li>
                                    <li className="number_active">0<p className="omit">3</p></li>
                                    <li>0<p className="omit">3</p></li>
                                    <li>0<p className="omit">3</p></li>
                                    <li>0<p className="omit">3</p></li>
                                    <li>0<p className="omit">3</p></li>
                                    <li>0<p className="omit">3</p></li>
                                    <li>0<p className="omit">3</p></li>
                                    <li>0<p className="omit">3</p></li>
                                </ul>
                                <ul className="c_m_number_select right">
                                    <li>全</li>
                                    <li>大</li>
                                    <li>小</li>
                                    <li>奇</li>
                                    <li>偶</li>
                                    <li>清</li>
                                </ul>
                            </div>
                            <div className="c_m_select_body_number">
                                <p className="c_m_select_places">万位</p>
                                <ul className="c_m_number_list">
                                    <li>0<p className="omit">3</p></li>
                                    <li className="number_active">0<p className="omit">3</p></li>
                                    <li>0<p className="omit">3</p></li>
                                    <li>0<p className="omit">3</p></li>
                                    <li>0<p className="omit">3</p></li>
                                    <li>0<p className="omit">3</p></li>
                                    <li>0<p className="omit">3</p></li>
                                    <li>0<p className="omit">3</p></li>
                                    <li>0<p className="omit">3</p></li>
                                </ul>
                                <ul className="c_m_number_select right">
                                    <li>全</li>
                                    <li>大</li>
                                    <li>小</li>
                                    <li>奇</li>
                                    <li>偶</li>
                                    <li>清</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="c_m_select_operate">
                        <div className="c_m_select_operate_text">
                            <span className="c_m_select_money">您选择了<strong>10</strong>注，共<strong>200.0</strong>元</span>
                            <span className="c_m_select_multiple">
                                <span>倍数：</span>
                                <img className="hvr-grow-shadow" onClick={()=>{this.minusMultiple()}} src={minus_multiple} alt="减少倍数"/>
                                <input type="text" value={this.state.multipleValue} onChange={this.multipleValue.bind(this)}/>
                                <img className="hvr-grow-shadow" onClick={()=>{this.addMultiple()}} src={add_multiple} alt="增加倍数"/>
                            </span>
                            <span className="c_m_select_yjftype">
                                <span>模式：</span>
                                <ul className="c_m_select_yjf right">
                                    {
                                        yjf.map((value,index)=>{
                                            return (
                                              <li onClick={()=>{this.setState({selectYjf: index})}} className={this.state.selectYjf === index ? 'yjf_active' : ''} key={index}>{value}</li>
                                            );
                                        })
                                    }
                                </ul>
                            </span>
                            <span className="c_m_future_expect">
                                <span>未来期：</span>
                                <span>
                                    <Select defaultValue="1" style={{ width: 170 }} onChange={(value) => this.handleChange(value)}>
                                        <Option value="1">20170814-035(当前期)</Option>
                                        <Option value="2">1950-8</Option>
                                    </Select>
                                </span>
                            </span>
                        </div>
                        <div className="c_m_select_button">
                            <i className="c_m_add_btn"></i>
                            <i className="c_m_bet_btn"></i>
                        </div>
                    </div>
                    <div className="c_m_select_code_record">
                        <div className="c_m_select_record_content">
                            <Row>
                                <Col span={19}>
                                    <div className="c_m_select_record_table">
                                        <ul className="c_m_select_record_list clear">
                                            <li>[定位胆_定位胆]</li>
                                            <li>12314564897897987,454</li>

                                            <li className="c_m_cody_close"><img src={close} alt=""/></li>
                                            <li>1500.00元</li>
                                            <li>448注</li>
                                            <li>1倍</li>
                                            <li>元</li>
                                        </ul>
                                        <ul className="c_m_select_record_list clear">
                                            <li>[定位胆_定位胆]</li>
                                            <li>12314564897897987,454</li>

                                            <li className="c_m_cody_close"><img src={close} alt=""/></li>
                                            <li>1500.00元</li>
                                            <li>448注</li>
                                            <li>1倍</li>
                                            <li>元</li>
                                        </ul>
                                        <ul className="c_m_select_record_list clear">
                                            <li>[定位胆_定位胆]</li>
                                            <li>12314564897897987,454</li>

                                            <li className="c_m_cody_close"><img src={close} alt=""/></li>
                                            <li>1500.00元</li>
                                            <li>448注</li>
                                            <li>1倍</li>
                                            <li>元</li>
                                        </ul>
                                        <ul className="c_m_select_record_list clear">
                                            <li>[定位胆_定位胆]</li>
                                            <li>12314564897897987,454</li>

                                            <li className="c_m_cody_close"><img src={close} alt=""/></li>
                                            <li>1500.00元</li>
                                            <li>448注</li>
                                            <li>1倍</li>
                                            <li>元</li>
                                        </ul>
                                        <ul className="c_m_select_record_list clear">
                                            <li>[定位胆_定位胆]</li>
                                            <li>12314564897897987,454</li>

                                            <li className="c_m_cody_close"><img src={close} alt=""/></li>
                                            <li>1500.00元</li>
                                            <li>448注</li>
                                            <li>1倍</li>
                                            <li>元</li>
                                        </ul>
                                        <ul className="c_m_select_record_list clear">
                                            <li>[定位胆_定位胆]</li>
                                            <li>12314564897897987,454</li>

                                            <li className="c_m_cody_close"><img src={close} alt=""/></li>
                                            <li>1500.00元</li>
                                            <li>448注</li>
                                            <li>1倍</li>
                                            <li>元</li>
                                        </ul>
                                    </div>
                                </Col>
                                <Col span={5}>
                                    <div className="c_m_machine_select">
                                        <div className="c_m_machine_select_1">机选一注</div>
                                        <div className="c_m_machine_select_5">机选五注</div>
                                        <div className="c_m_empty machine_active">清空号码</div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        <div className="c_m_affirm_bet">
                            <ul className="c_m_affirm_bet_list clear">
                                <li>
                                    <span>单数：</span>
                                    <span><strong>4</strong>单</span>
                                </li>
                                <li>
                                    <span>注数：</span>
                                    <span><strong>4</strong>注</span>
                                </li>
                                <li>
                                    <span>总金额：</span>
                                    <span><strong>4</strong>元</span>
                                </li>
                                <li>
                                    <span>预计中奖：</span>
                                    <span><strong>4</strong>元</span>
                                </li>
                                <li className="c_m_affirm_bet_btn">确认投注</li>
                                <li className="c_m_superaddition">追号</li>
                            </ul>
                        </div>
                    </div>
                    <BetRecordTable/>
                </div>
            </div>
        );
    }
}
