

export const login = (location, callback) => {
    require.ensure([], (require) => {
        callback(null, require('../Components/Login/Login').default);
    }, 'login');
};
export const main = (location, callback) => {
    require.ensure([], (require) => {
        callback(null, require('../Components/Main/Main').default);
    }, 'main');
};
// 首页
export const home = (location, callback) => {
    require.ensure([], (require) => {
        callback(null, require('../Components/Home/Home').default);
    }, 'home');
};
// 彩票游戏
export const lottery = (location, callback) => {
    require.ensure([], (require) => {
        callback(null, require('../Components/Lottery/Lottery').default);
    }, 'lottery');
};
// 账户管理
export const account = (location, callback) => {
    require.ensure([], (require) => {
        callback(null, require('../Components/Account/Account').default);
    }, 'account');
};
// 账户管理/个人信息
export const selfInfo = (location, callback) => {
    require.ensure([], (require) => {
        callback(null, require('../Components/Account/SelfInfo/SelfInfo').default);
    }, 'selfInfo');
};
// 账户管理/团队列表
export const teamList = (location, callback) => {
    require.ensure([], (require) => {
        callback(null, require('../Components/Account/TeamList/TeamList').default);
    }, 'teamList');
};
// 账户管理/市场推广
export const marketing = (location, callback) => {
    require.ensure([], (require) => {
        callback(null, require('../Components/Account/Marketing/Marketing').default);
    }, 'marketing');
};
// 账户管理/契约系统
export const contract = (location, callback) => {
    require.ensure([], (require) => {
        callback(null, require('../Components/Account/Contract/Contract').default);
    }, 'contract');
};
// 账户管理/银行卡管理
export const bankCardManage = (location, callback) => {
    require.ensure([], (require) => {
        callback(null, require('../Components/Account/BankCardManage/BankCardManage').default);
    }, 'bankCardManage');
};

// 账户管理/安全中心
export const security = (location, callback) => {
    require.ensure([], (require) => {
        callback(null, require('../Components/Account/Security/Security').default);
    }, 'security');
};
// 账户管理/站内信
export const message = (location, callback) => {
    require.ensure([], (require) => {
        callback(null, require('../Components/Account/Message/Message').default);
    }, 'message');
};


// 游戏记录
export const gameRecord = (location, callback) => {
    require.ensure([], (require) => {
        callback(null, require('../Components/GameRecord/GameRecord').default);
    }, 'gameRecord');
};
// 报表管理
export const report = (location, callback) => {
    require.ensure([], (require) => {
        callback(null, require('../Components/Report/Report').default);
    }, 'report');
};
// 报表管理/团队统计
export const teamStatistics = (location, callback) => {
    require.ensure([], (require) => {
        callback(null, require('../Components/Report/TeamStatistics/TeamStatistics').default);
    }, 'teamStatistics');
};
// 报表管理/个人总表
export const selfTable = (location, callback) => {
    require.ensure([], (require) => {
        callback(null, require('../Components/Report/SelfTable/SelfTable').default);
    }, 'selfTable');
};
// 报表管理/团队总表
export const teamTable = (location, callback) => {
    require.ensure([], (require) => {
        callback(null, require('../Components/Report/TeamTable/TeamTable').default);
    }, 'teamTable');
};
// 报表管理/游戏帐变
export const gameBill = (location, callback) => {
    require.ensure([], (require) => {
        callback(null, require('../Components/Report/GameBill/GameBill').default);
    }, 'gameBill');
};

// 财务中心
export const financial = (location, callback) => {
    require.ensure([], (require) => {
        callback(null, require('../Components/Financial/Financial').default);
    }, 'financial');
};
// 财务中心/充值
export const recharge = (location, callback) => {
    require.ensure([], (require) => {
        callback(null, require('../Components/Financial/Recharge/Recharge').default);
    }, 'recharge');
};
// 财务中心/提现
export const withdraw = (location, callback) => {
    require.ensure([], (require) => {
        callback(null, require('../Components/Financial/Withdraw/Withdraw').default);
    }, 'withdraw');
};
// 财务中心/充提记录
export const mentionFillingRecord = (location, callback) => {
    require.ensure([], (require) => {
        callback(null, require('../Components/Financial/MentionFillingRecord/MentionFillingRecord').default);
    }, 'mentionFillingRecord');
};
// 财务中心/转账
export const transfer = (location, callback) => {
    require.ensure([], (require) => {
        callback(null, require('../Components/Financial/Transfer/Transfer').default);
    }, 'transfer');
};
// 财务中心/转账记录
export const transferRecord = (location, callback) => {
    require.ensure([], (require) => {
        callback(null, require('../Components/Financial/TransferRecord/TransferRecord').default);
    }, 'transferRecord');
};
// 财务中心/资金帐变
export const accountChange = (location, callback) => {
    require.ensure([], (require) => {
        callback(null, require('../Components/Financial/AccountChange/AccountChange').default);
    }, 'accountChange');
};

