'use strict'

import React, {Component} from 'react';
import {HashRouter as Router, Switch, Route, Link, NavLink} from 'react-router-dom';

import Wards from './wards/Wards.jsx';
import Beds from './beds/Beds.jsx';
import Login from './login.jsx';

export default class AppContainer extends Component {
    constructor(props) {
        super(props);
        
    }

    navbar() {
        
    }

    render() {
        return ( <Router>
<div>
<nav className="navbar navbar-expand-lg navbar-light bg-light">
    <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
    <li className="nav-item">
        <NavLink className="nav-link" to={'/wards'}>
            <span data-feather="home"></span>Ward Management
        </NavLink>
        <NavLink className="nav-link" to={'/login'}>
            <span data-feather="home"></span>Login
        </NavLink>
    </li>
    </ul>
</nav>

<Switch>
    <Route path='/wards' component={Wards}/>
</Switch>
<Switch>
    <Route path='/login' component={Login}/>
</Switch>
</div>
    </Router>
        )
    }
       
}
