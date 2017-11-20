import request from './Request'
import http from './http'

// 登录前获取sess
const getSess = (body) => request(http.interFace('SESS'),body);
// 登录
const login = (body) =>  request(http.interFace('LOGIN'),body);

export default {
    getSess,
    login,
}
