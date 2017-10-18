import React from 'react';
import { render } from 'react-dom';
import { Router, hashHistory } from 'react-router';

import Routes from './Router/Index';
import 'whatwg-fetch'

import './Style/base.scss';
// import './CommonJs/jquery-3.2.1.min'

// hashHistory, browserHistory
render(
    <Router history={hashHistory} routes={Routes.routes()} />,
    document.getElementById('app'),
);
