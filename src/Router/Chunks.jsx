export const home = (location, callback) => {
    require.ensure([], (require) => {
        callback(null, require('../Components/Home/Home').default);
    }, 'home');
};
// 彩票游戏
export const betCenter = (location, callback) => {
    require.ensure([], (require) => {
        callback(null, require('../Components/Betting/BetCenter').default);
    }, 'betCenter');
};
// 账户管理
export const accountManage = (location, callback) => {
    require.ensure([], (require) => {
        callback(null, require('../Components/AccountManage/AccountManage').default);
    }, 'accountManage');
};
// 游戏记录
export const gameRecord = (location, callback) => {
    require.ensure([], (require) => {
        callback(null, require('../Components/GameRecord/GameRecord').default);
    }, 'gameRecord');
};
// 报表管理
export const statementManage = (location, callback) => {
    require.ensure([], (require) => {
        callback(null, require('../Components/StatementManage/StatementManage').default);
    }, 'statementManage');
};

