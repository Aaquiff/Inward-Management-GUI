'use strict'

import React, {Component} from 'react';
import {HashRouter as Router, Switch, Route, Link, NavLink} from 'react-router-dom';

import Users from './users/Users.jsx';
import Wards from './wards/Wards.jsx';
import Beds from './beds/Beds.jsx';

export default class AppContainer extends Component {
    constructor(props) {
        super(props);
        
    }    

    render() {
        return ( <Router>
         <div>
            <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
                <a className="navbar-brand col-sm-3 col-md-2 mr-0" href="">HIS-Inward</a>
            </nav> 
            <div className="container-fluid">
                <div className="row">
                    <nav className="col-md-2 d-none d-md-block bg-light sidebar">
                        <div className="sidebar-sticky">
                            <ul className="nav flex-column">
                                <li className="nav-item">
                                    <NavLink className="nav-link" to={'/wards'}>
                                        <span data-feather="home"></span>Wards
                                    </NavLink>
                                </li>
                                <li className="nav-item" >
                                    <NavLink className="nav-link" to={'/beds'}>
                                        Beds
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    <main role="main" className="col-md-10 ml-sm-auto col-lg-10 px-4">
                    <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3">
                        <Switch>
                            <Route path='/wards' component={Wards}/>
                            <Route path='/beds' component={Beds}/>
                        </Switch>
                        </div>
                    </main>
                </div>
            </div>
            
            
            </div>   
        </Router>
        )
    }
       
}
