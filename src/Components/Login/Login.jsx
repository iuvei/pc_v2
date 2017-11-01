import React, {Component} from 'react';
import {observer} from 'mobx-react';
import { hashHistory } from 'react-router';
import { Form, Icon, Input, Button } from 'antd';
const FormItem = Form.Item;

import './Login.scss'
@observer
export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            account: '',
            password: '',
            aptchac: '',
        }
    };
    hasErrors(fieldsError) {
        return Object.keys(fieldsError).some(field => fieldsError[field]);
    };
    componentDidMount() {
        // To disabled submit button at the beginning.
        // this.props.form.validateFields();
        console.log(this.props.form)
    };
    handleSubmit(e){
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    };
    enterLogin() {
        this.setState({ loading: true });
        hashHistory.push('/lottery')
    };

    render() {
        return (
            <div>
                123
            </div>
        )
        // const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;
        // // console.log(getFieldDecorator)
        // const userNameError = isFieldTouched('userName') && getFieldError('userName');
        // const passwordError = isFieldTouched('password') && getFieldError('password');
        // return (
        //     <Form layout="inline" onSubmit={this.handleSubmit}>
        //         <FormItem
        //             validateStatus={userNameError ? 'error' : ''}
        //             help={userNameError || ''}
        //         >
        //             {getFieldDecorator('userName', {
        //                 rules: [{ required: true, message: 'Please input your username!' }],
        //             })(
        //                 <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="Username" />
        //             )}
        //         </FormItem>
        //         <FormItem
        //             validateStatus={passwordError ? 'error' : ''}
        //             help={passwordError || ''}
        //         >
        //             {getFieldDecorator('password', {
        //                 rules: [{ required: true, message: 'Please input your Password!' }],
        //             })(
        //                 <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="Password" />
        //             )}
        //         </FormItem>
        //         <FormItem>
        //             <Button
        //                 type="primary"
        //                 htmlType="submit"
        //                 disabled={()=>this.hasErrors(getFieldsError())}
        //             >
        //                 Log in
        //             </Button>
        //         </FormItem>
        //     </Form>
        // )
    }
}
// const WrappedHorizontalLoginForm = Form.create()(Login);
