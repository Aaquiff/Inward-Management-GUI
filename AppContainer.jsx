'use strict'

import React, {Component} from 'react';
import {HashRouter as Router, Switch, Route, Link, NavLink} from 'react-router-dom';

import Users from './users/Users.jsx';
import Wards from './wards/Wards.jsx';

export default class AppContainer extends Component {
    constructor(props) {
        super(props);
        
    }    

    render() {
        return ( <Router>
            <div>
                <h2>React Router</h2>
                <ul>
                    <li><NavLink to={'/wards'}>Wards</NavLink></li>
                    <li><NavLink to={'/users'}>Users</NavLink></li>
                </ul>
                <Switch>
                    <Route path='/wards' component={Wards}/>
                    <Route path='/users' component={Users}/>
                </Switch>
            </div>
        </Router>
        )
    }
       
}
