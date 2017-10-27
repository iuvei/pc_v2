export const interFace = (key) => {
    let INTERFACE = {}
    // 登录
    INTERFACE['LOGIN'] = 'controller=default&action=login&client=H5'

    return '/wap/index.php?' + INTERFACE[key]
};

export default{
    interFace
}
