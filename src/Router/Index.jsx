import React from 'react';
import { Route, IndexRoute } from 'react-router';

import {
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
} from './Chunks';

const routes = params => (
    <Route path="/" getComponent={home}>
        <IndexRoute getComponent={betCenter} />
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
