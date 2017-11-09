import React from 'react';
import { Route, IndexRoute } from 'react-router';

import {
    login,
    main,
    home,
    lottery,
    activity,
    activityDetails,
    account,
    gameRecord,
    report,
    teamStatistics,
    teamTable,
    selfTable,
    gameBill,
    teamList,
    marketing,
    selfInfo,
    contract,
    bankCardManage,
    security,
    message,
    financial,
    recharge,
    onlineTopUp,
    qqWallet,
    weChat,
    aliPay,
    eBank,
    promptlyRecharge,
    withdraw,
    affirmWithdraw,
    mentionFillingRecord,
    transfer,
    transferRecord,
    accountChange,
} from './Chunks';

const routes = params => (

    <Route path="/">
        <IndexRoute getComponent={login} />
        <Route path="/main" getComponent={main} params={params}>
            <IndexRoute getComponent={lottery} />
            <Route path="/lottery" getComponent={lottery} params={params}/>
            <Route path="/activity" getComponent={activity} params={params}/>
            <Route path="/activity/activityDetails" getComponent={activityDetails} params={params}/>
            <Route path="/home" getComponent={home} params={params}/>
            <Route path="/account" getComponent={account} params={params}>
                <IndexRoute getComponent={selfInfo} />
                <Route path="/account/selfInfo" getComponent={selfInfo} params={params}/>
                <Route path="/account/teamList" getComponent={teamList} params={params}/>
                <Route path="/account/marketing" getComponent={marketing} params={params}/>
                <Route path="/account/contract" getComponent={contract} params={params}/>
                <Route path="/account/bankCardManage" getComponent={bankCardManage} params={params}/>
                <Route path="/account/security" getComponent={security} params={params}/>
                <Route path="/account/message" getComponent={message} params={params}/>
            </Route>
            <Route path="/gameRecord" getComponent={gameRecord} params={params}/>
            <Route path="/financial" getComponent={financial} params={params}>
                <IndexRoute getComponent={promptlyRecharge} />
                <Route path="/financial/recharge" getComponent={recharge} params={params}>
                    <IndexRoute getComponent={onlineTopUp} />
                    <Route path="/financial/recharge/onlineTopUp" getComponent={onlineTopUp} params={params}/>
                    <Route path="/financial/recharge/qqWallet" getComponent={qqWallet} params={params}/>
                    <Route path="/financial/recharge/weChat" getComponent={weChat} params={params}/>
                    <Route path="/financial/recharge/aliPay" getComponent={aliPay} params={params}/>
                    <Route path="/financial/recharge/eBank" getComponent={eBank} params={params}/>
                </Route>
                <Route path="/financial/recharge/promptlyRecharge" getComponent={promptlyRecharge} params={params}/>
                <Route path="/financial/withdraw" getComponent={withdraw} params={params}/>
                <Route path="/financial/mentionFillingRecord" getComponent={mentionFillingRecord} params={params}/>
                <Route path="/financial/transfer" getComponent={transfer} params={params}/>
                <Route path="/financial/transferRecord" getComponent={transferRecord} params={params}/>
                <Route path="/financial/accountChange" getComponent={accountChange} params={params}/>
                <Route path="/financial/withdraw/affirmWithdraw" getComponent={affirmWithdraw} params={params}/>
            </Route>
            <Route path="/report" getComponent={report} params={params}>
                <IndexRoute getComponent={teamStatistics} />
                <Route path="/report/teamStatistics" getComponent={teamStatistics} params={params}/>
                <Route path="/report/teamTable" getComponent={teamTable} params={params}/>
                <Route path="/report/selfTable" getComponent={selfTable} params={params}/>
                <Route path="/report/gameBill" getComponent={gameBill} params={params}/>
            </Route>
        </Route>
    </Route>

);

export default { routes };
