import React, {Component} from 'react';
import {observer} from 'mobx-react';
import { hashHistory } from 'react-router';
import { Input,Button,Icon,Checkbox,Modal  } from 'antd';
import md5 from 'md5';
import Fatch from '../../Utils'
import { stateVar } from '../../State'
import onCanvas from './canvas'
import './Login.scss'
import loginlogoSrc from './Img/logologin.png'
import speedSrc from './Img/speed.png'
import dnsSrc from './Img/dns.png'
import warnSrc from './Img/warn.png'
import serviceSrc from './Img/service.png'
const validImgSrc='http://10.63.15.242:8013/pcservice/?useValid=true';
import { debounce } from 'react-decoration';

@observer
export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            account: '',
            password: '',
            aptchac: '',
            aptchacModal:'',
            stopAnimation: '',
            navListIndex: 0,
            visible1: false,
            visible2: false,
            visible3: false,
            validImg:null,
            validImgModal:null,
            session: null,//提交后台时带的sess
            warn:null,//登录错误提示信息
            displayWarn:true,//控制显示提示信息


        }
    };

    getSession(){
        Fatch.getSess({method: "POST"}).then((data)=>{
            let parseData = JSON.parse(data);
            this.setState({
                session: parseData.repsoneContent,
                validImg:validImgSrc+"&sess="+parseData.repsoneContent,
                validImgModal:validImgSrc+'?rand='+Math.random()+"&sess="+parseData.repsoneContent,
            });
            stateVar.sess = parseData.repsoneContent;
        });
    }
    /*
    * 点击登录后的处理
    * 1.验证用户名或密码为空
    * 2.验证验证码是否为空
    * 3.验证成功后数据提交后台
    * 4.验证成功后进入主界面
    * 5.根据后台返回数据显示错误信息
    */
    // @debounce(500)
    enterLogin() {
        if(this.state.account===''||this.state.password===''){
            this.setState({
                warn:"用户名或密码为空",
                displayWarn:true,
            });
        }else if(this.state.aptchac===''){
            this.setState({
                warn:"验证码为空",
                displayWarn:true,
            });
        }else {
            this.login()
        }
    };
    login() {
        this.setState({ loading: true });
        Fatch.login({
            method: "POST",
            body: JSON.stringify({
                "sType": 'formal',
                "username": 'bery123',
                "loginpass": md5((md5(this.state.aptchac) + md5('123qwe'))),
                "validcode": this.state.aptchac
            })
        }).then((data)=>{
            this.setState({ loading: false });
            if(data.status===200){
                stateVar.userName = 'bery123';// 保存到全局
                hashHistory.push('/lottery');
            }else{
                this.setState({
                    warn:data.longMessage,
                    displayWarn:true,
                });
            }
        })
    };

    onAccount(e) {
        this.setState({account:e.target.value});

    }
    onPwd(e) {
        this.setState({password: e.target.value});
    }
    refreshImg(){
        this.setState({validImg:validImgSrc+'?rand='+Math.random()+"&sess="+this.state.session});
    }
    refreshImgModal(){
        this.setState({validImgModal:validImgSrc+'?rand='+Math.random()+"&sess="+this.state.session});
    }
    onAptchac(e) {
        this.setState({aptchac: e.target.value});
    }
    onAptchacModal(e) {
        this.setState({aptchacModal: e.target.value});
    }
    showModal(value) {
        if (value === 'forget_pwd') {
            this.setState({
                visible1: true,
            });
        } else if(value ==='reset_pwd'){
            this.setState({
                visible1: false,
                visible2: true,
            });
        }else if(value ==='suggest'){
            this.setState({
                visible2: false,
                visible3: true,
            });
        }else if(value ==='l_accept'){
            this.setState({
                visible4: true,
            });
        }

    };

    componentDidMount() {
        let indx = Math.floor(Math.random()*(onCanvas.length-1));
        onCanvas[indx]();
        this.getSession();
      //  this.fetch();
    };
    componentWillUnmount(){
       // this.getSession();
    };

    loginMain() {
        const ul_0 =  <div className="login_wrap">
            <div className='l_input'>
                <Input size="large" className='login_input' value={this.state.account} onChange={(e)=>{this.onAccount(e)}} placeholder="用户名"/>
                <div className="l_password">
                    <Input type="password" size="large" value={this.state.password} onChange={(e)=>{this.onPwd(e)}} placeholder="资金密码"  />
                    <span className="l_forget" onClick={()=>{this.showModal('forget_pwd')}}>忘记密码？</span>
                </div>
                <div className="l_vali">
                    <Input size="large" className='login_input'  value={this.state.aptchac}  onChange={(e)=>{this.onAptchac(e)}} placeholder="验证码" />
                    <img className="l_valicode" src={this.state.validImg} onClick={()=>{this.refreshImg()}}/>
                </div>

            </div>

            <Button type="primary" className='login_btn' icon="right-circle" loading={this.state.loading} onClick={()=>{this.enterLogin()}}>
                立即登录
            </Button>
            <Checkbox style={{color:'#fff'}}>记住密码</Checkbox>
            <div>

                <div>
                    <Modal
                        title="找回密码"
                        wrapClassName="center-modal-l"
                        visible={this.state.visible1}
                        onCancel={()=>{this.setState({ visible1: false })}}
                        footer={<div  className='l-modal-warn' style={{/*display: this.state.displayWarn ? 'block' : 'none'*/ }}>
                        <img  src={warnSrc}  /><span className=''>操作失败:<span>{this.state.warn}</span></span></div>}
                    >

                        <Input size="large"  placeholder="用户名"/>
                        <Input type="password" size="large"  placeholder="密码" />
                        <div className="l_m_vali">
                            <Input size="large"   value={this.state.aptchacModal}  onChange={(e)=>{this.onAptchacModal(e)}} placeholder="验证码" />
                            <img className="l_m_valicode" src={this.state.validImgModal} onClick={()=>{this.refreshImgModal()}}/>
                        </div>
                        <Button className="l_m_btn" type="primary"  onClick={()=>{this.showModal('reset_pwd')}}>
                            下一步
                        </Button>

                    </Modal>
                    <Modal
                        title="重置密码"
                        wrapClassName="center-modal-l"
                        visible={this.state.visible2}
                        onCancel={()=>{this.setState({ visible2: false })}}
                        footer={null}
                    >
                        <p className='m_name'>Suervip</p>
                        <Input type="password" size="large"   placeholder="新登录密码" />
                        <Input size="large"  placeholder="确认新登录密码" />
                        <Button className="l_m_btn" type="primary" onClick={()=>{this.showModal('suggest')}} >
                            确定
                        </Button>
                    </Modal>
                    <Modal
                        title="提示"
                        wrapClassName="center-modal-l"
                        visible={this.state.visible3}
                        onCancel={()=>{this.setState({ visible3: false })}}
                        footer={null}
                    >
                        <Icon type="check-circle-o" style={{ fontSize: 65, color: '#73b573',marginTop: 28,
                            marginBottom: 20 }}/>
                        <p className='m_p_input'>密码重置成功</p>
                        <Button className="l_m_btn" type="primary" onClick={()=>{this.setState({ visible3: false })}} >
                            确定
                        </Button>
                    </Modal>
                </div>

            </div>
            <div>
                <a  className='l_accept'  onClick={()=>{this.showModal('l_accept')}}>登录即同意《协议与条款》</a>
                <div>
                    <Modal
                        title="恒彩协议与条款"
                        wrapClassName="m_accept_contract"
                        visible={this.state.visible4}
                        onCancel={()=>{this.setState({ visible4: false })}}
                        footer={null}
                        closable={false}
                    >

                        <div className='m_contract'>《恒彩在线》是持菲律宾共和国合法经营执照，并受其相关法律保护和约束的线上游戏平台运营商。用户在登录使用平台服务前，请仔细阅读以下内容，并确认使用平台服务符合所在国家和居住地的法律及规定。本平台不承担任何因用户违反当地法规引起的任何责任。用户一经登录平台，则视为完全接受平台所有之规定。
                            1.交易协定
                            1.1本平台所有开奖数据均使用具有公信力的第三方开奖结果，以投注站的视频信号为基准。如发生因开奖机构引起的开奖错误，将采用开奖机构修正并最终确定的结果。本平台有权在上述事件发生时即时终止资金交易，并进行相应订单修正处理。
                            1.2用户在本平台投注完成后，请核对投注记录，确保投注成功以避免争议；投注过程中，若发生网络问题而导致与平台服务器连接失败，所有已被确认的订单仍然有效，用户在重新登录时，请再次核对并确认投注记录。
                            1.3用户在本平台充值汇款，请按相关流程和规定，确认汇入账号为平台网站提供的即时有效的汇款信息，因填入错误的信息（汇款账号或流水号）而导致的无法到账或到账延迟，本平台不承担任何责任，并保留对违规填写流水号用户的处罚权.
                            1.4用户在本平台提款前，须确认本人使用的银行账号。因用户个人银行账号变更而未及时通知平台而引起的损失，平台不承担任何责任。
                            1.5有历史资金交易记录且余额≤2元的账户，累计7天无账变（无充值，无提现，无投注，无返点），将被禁用，禁用累计7天且无下级，将被系统注销；新注册账号累计超过7天无账变将被禁用，禁用累计7天且无下级，将被系统注销。
                            1.6用户在本平台游戏，若有作弊、欺编、攻击、破坏本平台正常运作的行为或利用系统漏洞侵害平台和其他客户的权益，一经核实，本平台有权禁用、冻结和注销用户账户，终止其继续使用本平台服务，并有权没收所有不当所得。
                            1.7本平台用户可查交易记录只保留7天，如有争议，以平台保留的最终备份数据为最后处理依据。
                            2.责任声明
                            2.1用户须年满18周岁以上方可使用本平台服务，请不要沉溺于游戏。
                            2.2在本平台以账号和密码登录后进行的任何操作行为，均被视为有效操作。用户有责任保护自己的账号、密码和其他个人隐私资料。若用户个人资料保护不当造成账户被盗用（如中木马病毒等），用户发现后，应立即通知上级代理或本平台来冻结张号、修改资料，从而终止损失；已经造成的资金和财产损失，本平台不承担赔付责任。
                            2.3本平台使用“网页式在线客服”并作为唯一的方式为用户提供即时咨询服务。用户从其他方式获得的服务，本平台不保证其真实性，不承担由此引起的任何责任。
                            2.4本平台建议用户本人在平台进行个人密码修改、投注、充值、提现等重要操作，平台不会委托他人（任何个人或团体）替用户进行上述操作，用户通过他人操作造成的任何损失,本平台不承担责任。
                            2.5用户在本平台绑定的由邮箱须真实有效，邮箱一经绑定，不得修改，若由于个人错误绑 定导致的损失，平台不承担任何责任。
                            2.6因自然灾害或第三方因素等不可控力，如ISP（互联网接入提供商）故障、用户所在国政府限制措施行为，导致平台网站资料损坏、资料丟失、访问异常等情况，本平台不承担任何责任，但将尽力减少因此而给用户造成的损失，且用户有义务配合行动以减轻事件影响。
                            2.7本平台保留不时修订、更新本条款和平台游戏规则的权利。经修订、更新的条款和游戏规则，在公布时即生效，用户在上述修订和更新公布后，继续使用本平台服务时，则视为用户同意并接受本平台条款和游戏规则的修订和更新。
                            2.8 本公司保留对其他未尽事宜或争议的解释权和修订权。
                        </div>
                        <Button className="l_m_btn" type="primary" onClick={()=>{this.setState({ visible4: false })}} >
                            确定并同意
                        </Button>
                    </Modal>
                </div>
            </div>
        </div>;
        const ul_1 =  <div className="login_wrap">
            <div className='l_input' >
                <Input size="large"value={this.state.aptchac} className='login_input' onChange={(e)=>{this.onAptchac(e)}} placeholder="验证码" />
            </div>

            <Button type="primary" className='login_btn' icon="right-circle" loading={this.state.loading} onClick={()=>{this.enterLogin()}}>
                立即登录
            </Button>
        </div>;

        switch (this.state.navListIndex) {

            case 0:
                return ul_0;
                break;
            case 1:
                return ul_1;
                break;
        }
    }

    render() {

        const navList = ['账号登录', '试玩账号'];
        return (
          <div className='login_main'>
              <canvas id="canvas"></canvas>
              <div className="l_nav_top">
                  <div className="l_nav_top_content">
                      <div className="l_n_t_lt left">
                          <img className="logo" src={loginlogoSrc} style={{width:180}} />
                      </div>
                      <ul className="l_n_t_list right">
                          <li className='l_speed'>
                              <img  src={speedSrc}  /><span>域名测速</span></li>
                          <li className='l_dns'>
                              <img  src={dnsSrc}  /><span>防劫持教程</span></li>
                          <li className='l_sevice'>
                              <img  src={serviceSrc} /><span>在线客服</span></li>
                      </ul>
                  </div>
              </div>
              <div className="login">

                  <ul className="l_m_select_list clear">
                      {
                          navList.map((value, index)=>{
                              return <li className={this.state.navListIndex === index ? 'l_m_select_list_active' : ''}
                                         onClick={() => {this.setState({navListIndex: index})}} key={index}>{value}</li>
                          })
                      }

                  </ul>
                  { this.loginMain() }
                  <div  className='l-warn' style={{/*display: this.state.displayWarn ? 'block' : 'none'*/ }}>
                  <img  src={warnSrc}  /><span className=''>操作失败:<span>{this.state.warn}</span></span>
              </div>
              </div>

          </div>

        );

    }
}
