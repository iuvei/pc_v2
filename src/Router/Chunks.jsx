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
// 账户管理/个人信息
export const selfInfo = (location, callback) => {
    require.ensure([], (require) => {
        callback(null, require('../Components/AccountManage/SelfInfo/SelfInfo').default);
    }, 'selfInfo');
};
// 账户管理/团队列表
export const teamList = (location, callback) => {
    require.ensure([], (require) => {
        callback(null, require('../Components/AccountManage/TeamList/TeamList').default);
    }, 'teamList');
};
// 账户管理/市场推广
export const marketing = (location, callback) => {
    require.ensure([], (require) => {
        callback(null, require('../Components/AccountManage/Marketing/Marketing').default);
    }, 'marketing');
};
// 账户管理/契约系统
export const contract = (location, callback) => {
    require.ensure([], (require) => {
        callback(null, require('../Components/AccountManage/Contract/Contract').default);
    }, 'contract');
};
// 账户管理/银行卡管理
export const bankCardManage = (location, callback) => {
    require.ensure([], (require) => {
        callback(null, require('../Components/AccountManage/BankCardManage/BankCardManage').default);
    }, 'bankCardManage');
};
// 账户管理/银行卡管理
export const security = (location, callback) => {
    require.ensure([], (require) => {
        callback(null, require('../Components/AccountManage/Security/Security').default);
    }, 'security');
};
// 账户管理/银行卡管理
export const message = (location, callback) => {
    require.ensure([], (require) => {
        callback(null, require('../Components/AccountManage/Message/Message').default);
    }, 'message');
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
// 报表管理/团队统计
export const teamStatistics = (location, callback) => {
    require.ensure([], (require) => {
        callback(null, require('../Components/StatementManage/TeamStatistics/TeamStatistics').default);
    }, 'teamStatistics');
};
// 报表管理/个人总表
export const selfTable = (location, callback) => {
    require.ensure([], (require) => {
        callback(null, require('../Components/StatementManage/SelfTable/SelfTable').default);
    }, 'selfTable');
};
// 报表管理/团队总表
export const teamTable = (location, callback) => {
    require.ensure([], (require) => {
        callback(null, require('../Components/StatementManage/TeamTable/TeamTable').default);
    }, 'teamTable');
};
// 报表管理/游戏帐变
export const gameBill = (location, callback) => {
    require.ensure([], (require) => {
        callback(null, require('../Components/StatementManage/GameBill/GameBill').default);
    }, 'gameBill');
};

// 财务中心
export const financingCenter = (location, callback) => {
    require.ensure([], (require) => {
        callback(null, require('../Components/FinancingCenter/FinancingCenter').default);
    }, 'financingCenter');
};
// 财务中心/充值
export const recharge = (location, callback) => {
    require.ensure([], (require) => {
        callback(null, require('../Components/FinancingCenter/Recharge/Recharge').default);
    }, 'recharge');
};
// 财务中心/提现
export const withdraw = (location, callback) => {
    require.ensure([], (require) => {
        callback(null, require('../Components/FinancingCenter/Withdraw/Withdraw').default);
    }, 'withdraw');
};
// 财务中心/充提记录
export const mentionFillingRecord = (location, callback) => {
    require.ensure([], (require) => {
        callback(null, require('../Components/FinancingCenter/MentionFillingRecord/MentionFillingRecord').default);
    }, 'mentionFillingRecord');
};
// 财务中心/转账
export const transfer = (location, callback) => {
    require.ensure([], (require) => {
        callback(null, require('../Components/FinancingCenter/Transfer/Transfer').default);
    }, 'transfer');
};
// 财务中心/转账记录
export const transferRecord = (location, callback) => {
    require.ensure([], (require) => {
        callback(null, require('../Components/FinancingCenter/TransferRecord/TransferRecord').default);
    }, 'transferRecord');
};
// 财务中心/资金帐变
export const accountChange = (location, callback) => {
    require.ensure([], (require) => {
        callback(null, require('../Components/FinancingCenter/AccountChange/AccountChange').default);
    }, 'accountChange');
};
