'use strict'

import React, {Component} from 'react';
import {HashRouter as Router, Switch, Route, Link, NavLink} from 'react-router-dom';

import Wards from './wards/Wards.jsx';
import Beds from './beds/Beds.jsx';
import Login from './Login.jsx';
import Navigator from "./Navigator";

export default class AppContainer extends Component {
    constructor(props) {
        super(props);
        
    }

    navbar() {
        
    }

    render() {
        return <Router>
    <div>
        <Navigator/>
        <Switch>
            <Route path='/wards' component={Wards}/>
        </Switch>
        <Switch>
            <Route path='/login' component={Login}/>
        </Switch>
    </div>
</Router>
    }
       
}
