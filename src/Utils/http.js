/*接口*/
export const interFace = (key) => {
    let INTERFACE = {};
    // 登录,找回密码
    INTERFACE['LOGIN'] = 'controller=default&action=login';
    // 退出登录
    INTERFACE['LOGINOUT'] = 'controller=default&action=logout';

    let httpUrl = '/pcservice/index.php?' + INTERFACE[key];
    return httpUrl
};

export default {
    interFace
}
