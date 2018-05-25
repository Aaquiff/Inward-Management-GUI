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
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">HIS-Inward</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li><NavLink to={'/wards'}>Wards</NavLink></li>
                        <li><NavLink to={'/users'}>Users</NavLink></li>
                    </ul>
                </div>
                
            </nav>
            <Switch>
                    <Route path='/wards' component={Wards}/>
                    <Route path='/users' component={Users}/>
                </Switch>
             </div>   
        </Router>
        )
    }
       
}
