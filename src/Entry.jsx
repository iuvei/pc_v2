import React from 'react';
import { render } from 'react-dom';
import { Router, hashHistory,browserHistory } from 'react-router';

import Routes from './Router/Index';
import 'whatwg-fetch'

import './Style/base.scss';

// hashHistory, browserHistory
render(
    <Router history={hashHistory} routes={Routes.routes()} />,
    document.getElementById('app'),
);
