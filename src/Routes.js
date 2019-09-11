import React from 'react';
import {Router, Route, Switch} from 'react-router-dom';

import ReposContext from './contexts/reposContext';

import Home from './App';
import Details from './page/Details'

import { createBrowserHistory } from 'history';
const history = createBrowserHistory()

export default function() {
    return <Router history={history}>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/detalhes" component={Details} />
            </Switch>
    </Router>
}