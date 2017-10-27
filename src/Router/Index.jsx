import React from 'react';
import { Route, IndexRoute } from 'react-router';

import {
    login,
    home,
    betCenter,
    accountManage,
    gameRecord,
    statementManage,
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
    financingCenter,
    recharge,
    withdraw,
    mentionFillingRecord,
    transfer,
    transferRecord,
    accountChange,
} from './Chunks';

const routes = params => (

    <Route path="/">
        <IndexRoute getComponent={login} />
        <Route path="/home" getComponent={home} params={params}>
            <IndexRoute getComponent={betCenter} />
        </Route>
        <Route path="/betCenter" getComponent={betCenter} params={params}/>
        <Route path="/accountManage" getComponent={accountManage} params={params}>
            <IndexRoute getComponent={selfInfo} />
            <Route path="/accountManage/selfInfo" getComponent={selfInfo} params={params}/>
            <Route path="/accountManage/teamList" getComponent={teamList} params={params}/>
            <Route path="/accountManage/marketing" getComponent={marketing} params={params}/>
            <Route path="/accountManage/contract" getComponent={contract} params={params}/>
            <Route path="/accountManage/bankCardManage" getComponent={bankCardManage} params={params}/>
            <Route path="/accountManage/security" getComponent={security} params={params}/>
            <Route path="/accountManage/message" getComponent={message} params={params}/>
        </Route>
        <Route path="/gameRecord" getComponent={gameRecord} params={params}/>
        <Route path="/financingCenter" getComponent={financingCenter} params={params}>
            <IndexRoute getComponent={recharge} />
            <Route path="/financingCenter/recharge" getComponent={recharge} params={params}/>
            <Route path="/financingCenter/withdraw" getComponent={withdraw} params={params}/>
            <Route path="/financingCenter/mentionFillingRecord" getComponent={mentionFillingRecord} params={params}/>
            <Route path="/financingCenter/transfer" getComponent={transfer} params={params}/>
            <Route path="/financingCenter/transferRecord" getComponent={transferRecord} params={params}/>
            <Route path="/financingCenter/accountChange" getComponent={accountChange} params={params}/>
        </Route>
        <Route path="/statementManage" getComponent={statementManage} params={params}>
            <IndexRoute getComponent={teamStatistics} />
            <Route path="/statementManage/teamStatistics" getComponent={teamStatistics} params={params}/>
            <Route path="/statementManage/teamTable" getComponent={teamTable} params={params}/>
            <Route path="/statementManage/selfTable" getComponent={selfTable} params={params}/>
            <Route path="/statementManage/gameBill" getComponent={gameBill} params={params}/>
        </Route>
    </Route>

);

export default { routes };
