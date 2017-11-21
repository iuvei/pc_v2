/*接口*/
import { stateVar } from '../State'

const interFace = (key) => {
    let INTERFACE = {};
    // 获取sess
    INTERFACE['SESS'] = 'sessValid=true';
    // 登录,找回密码
    INTERFACE['LOGIN'] = 'controller=default&action=login';
    // 退出登录
    INTERFACE['LOGINOUT'] = 'controller=default&action=logout';
    // 投注中心
    INTERFACE['PLAY'] = 'controller=game&action=play';
    // 日工资
    INTERFACE['DAILYSALARY'] = 'controller=salarymanage&action=dailysalary';

    let httpUrl;
    if (key === 'SESS') {
        httpUrl = 'http://10.63.15.242:8013/pcservice/?' + INTERFACE[key];
    } else {
        httpUrl = 'http://10.63.15.242:8013/pcservice/index.php?' + INTERFACE[key] + '&sess=' + stateVar.sess;
    }
    return httpUrl
};

export default {
    interFace
}

