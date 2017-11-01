import React, {Component} from 'react';
import {observer} from 'mobx-react';
import { Upload, Icon, message, Table } from 'antd';

import './SelfInfo.scss'

@observer
export default class SelfInfo extends Component {
    constructor(porps) {
      super(porps);
      this.state = {
      }
    };
    getBase64(img, callback) {
        const reader = new FileReader();
        reader.addEventListener('load', () => callback(reader.result));
        reader.readAsDataURL(img);
    };

    beforeUpload(file) {
        // console.log(file);
        const isJPG = file.type === 'image/jpeg';
        if (!isJPG) {
            message.error('You can only upload JPG file!');
        }
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isLt2M) {
            message.error('Image must smaller than 2MB!');
        }
        return isJPG && isLt2M;
    };
    handleChange = (info) => {
        console.log(info);
        console.log(info.file);
        if (info.file.status === 'done') {
            this.getBase64(info.file.originFileObj, imageUrl => this.setState({ imageUrl }));
        }
    }
    render() {
        const columns = [
                {
                    title: '奖金组',
                    dataIndex: 'name',
                    key: 'name',
                }, {
                    title: '总金额',
                    dataIndex: 'age',
                    key: 'age',
                }, {
                    title: '上次登录IP地址',
                    dataIndex: 'address',
                    key: 'address',
                }, {
                    title: '当前登录IP地址',
                    dataIndex: 'action',
                    key: 'action',
                }, {
                    title: '最后登录时间',
                    dataIndex: 'action1',
                    key: 'action1',
                }
            ];

        const data = [
                {
                    key: '1',
                    name: 'John Brown',
                    age: 32,
                    address: 'New York No. 1 Lake Park',
                    action: '1234564',
                    action1: 'fawefawef',
                }, {
                    key: '2',
                    name: 'Jim Green',
                    age: 42,
                    address: 'London No. 1 Lake Park',
                    action: '1234564',
                    action1: 'fawefawef',
                }
            ];
        return (
            <div className="self_i_main">
                <div className="self_i_top clear">
                    <div className="self_i_avatar left">
                        <Upload
                            className="avatar-uploader"
                            name="avatar"
                            showUploadList={false}
                            action="//jsonplaceholder.typicode.com/posts/"
                            beforeUpload={(file)=>{this.beforeUpload(file)}}
                            onChange={this.handleChange}
                        >
                            {
                                this.state.imageUrl ?
                                    <img src={this.state.imageUrl} alt="" className="avatar" /> :
                                    <Icon type="plus" className="avatar-uploader-trigger" />
                            }
                        </Upload>
                    </div>
                    <ul className="self_i_info left">
                        <li>
                            <span>用户名：</span>
                            <span>SuperVIP01</span>
                        </li>
                        <li>
                            <span>昵称：</span>
                            <span>小球球</span>
                            <a className="self_i_nickname" href="javascript:void(0)">修改</a>
                        </li>
                        <li>
                            <span>用户类型：</span>
                            <span>代理</span>
                        </li>
                    </ul>
                </div>
                <div className="self_i_bottom">
                    <Table columns={columns} dataSource={data} pagination={false}/>
                </div>
            </div>
        );
    }
}
