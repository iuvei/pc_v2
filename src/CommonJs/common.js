// 获取当前日期的前后val日期
export const setDateTime = (n) => {
    let s, d, t, t2;
    t = new Date().getTime();
    t2 = n * 1000 * 3600 * 24;
    t += t2;
    d = new Date(t);
    s = d.getUTCFullYear() + '-';
    s += ('00' + (d.getUTCMonth() + 1)).slice(-2) + '-';
    s += ('00' + d.getUTCDate()).slice(-2);
    return s;
};

export default {
    setDateTime,
}
