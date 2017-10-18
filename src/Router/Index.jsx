import React from 'react';
import { Route, IndexRoute } from 'react-router';

import {
    home,
    betCenter,
    accountManage,
    gameRecord,
    statementManage,
} from './Chunks';

const routes = params => (
    <Route path="/" getComponent={home}>
        <IndexRoute getComponent={betCenter} />
        <Route path="/betCenter" getComponent={betCenter} params={params}/>
        <Route path="/accountManage" getComponent={accountManage} params={params}/>
        <Route path="/gameRecord" getComponent={gameRecord} params={params}/>
        <Route path="/statementManage" getComponent={statementManage} params={params}/>

    </Route>

);

export default { routes };
