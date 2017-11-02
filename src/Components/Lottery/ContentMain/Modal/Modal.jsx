import React, {Component} from 'react';
import {observer} from 'mobx-react';
import { Table, Button, Modal, Select, InputNumber } from 'antd';
import ModelView from '../../../Common/ChildNav/ChildNav'

import './Modal.scss'

@observer
export default class ModalView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            periodsIndex: null,
        }
    };
    componentDidMount() {
        // console.log(this.state.visible)
    };
    enterLoading() {
        this.setState({ loading: true });
    };
    onChange(value) {
        console.log('changed', value);
    }
    render() {
        const navList = [
            {
                link: '',
                text: '同倍追号'
            },{
                link: '',
                text: '利润率追号'
            },{
                link: '',
                text: '翻倍追号'
            }
        ];
        const periodsList = ['10期', '20期', '50期', '全部'];
        return (
            <Modal
                width='865px'
                visible={this.props.visible}
                title= '追号'
                onCancel={()=>{this.props.onSuperaddition()}}
                maskClosable={false}
                footer={null}
                header={null}

            >
                <div className="modal_main">
                    <ModelView navList = {navList}/>
                    <div className="m_m_content clear">
                        <div className="modal_periods left">
                            <p className="m_p_text left">追号期数</p>
                            <ul className="m_periods_list left">
                                {
                                    periodsList.map((value, index)=>{
                                        return <li className={this.state.periodsIndex === index ? 'm_periods_active' : ''} onClick={()=>this.setState({periodsIndex: index})} key={index}>{value}</li>
                                    })
                                }
                            </ul>
                        </div>
                        <div className="periods_input left">
                            <span>手动输入</span>
                            <InputNumber min={1} max={10} defaultValue={1} onChange={(value)=>{this.onChange(value)}} />
                            <span>期</span>
                        </div>
                        <div className="multiple_input left">
                            <span>倍数</span>
                            <InputNumber min={1} max={10} defaultValue={1} onChange={(value)=>{this.onChange(value)}} />
                            <span>倍</span>
                        </div>
                        <Button type="primary" className="m_m_btn" loading={this.state.loading} onClick={()=>this.enterLoading()}>
                            生成
                        </Button>
                    </div>
                </div>

                        {/*<ModelView navList = {navList}/>*/}
                        {/*<Button className="a_aa_btn" type="primary" loading={this.state.loading} onClick={()=>{this.enterLoading()}}>*/}
                            {/*下一步*/}
                        {/*</Button>*/}

            </Modal>
        )
    }
}
