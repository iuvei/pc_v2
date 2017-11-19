
export const interFace = (key) => {
    let INTERFACE = {};
    // 登录
    INTERFACE['LOGIN'] = 'controller=default&action=login&client=H5';

    let httpUrl = '/wap/index.php?' + INTERFACE[key];
    return httpUrl
};

export default {
    interFace
}
