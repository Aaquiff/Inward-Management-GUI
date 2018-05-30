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
<div className="wrapper">
    <nav className="main-header navbar navbar-expand bg-white navbar-light border-bottom">
        <ul className="navbar-nav">
            <li className="nav-item">
                <a className="nav-link" data-widget="pushmenu" href="#"><i className="fa fa-bars"></i></a>
            </li>
        </ul>
    </nav>

    <aside className="main-sidebar sidebar-dark-primary elevation-4">
        <a href="index3.html" className="brand-link">
            <img src="dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3"/>
            <span className="brand-text font-weight-light">AdminLTE 3</span>
        </a>

        <div class="sidebar">
            <nav class="mt-2">
                <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                <li class="nav-item">
                    <NavLink className="nav-link" to={'/wards'}>
                        <span data-feather="home"></span>Ward Management
                    </NavLink>
                    <NavLink className="nav-link" to={'/login'}>
                        <span data-feather="home"></span>Login
                    </NavLink>
                </li>
                </ul>
            </nav>
        </div>
    </aside>

    <div class="content-wrapper">
        <section class="content">
            <Switch>
                <Route path='/wards' component={Wards}/>
            </Switch>
            <Switch>
                <Route path='/login' component={Login}/>
            </Switch>
        </section>
    </div>

</div>

    {/* <div>
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
                <span data-feather="home"></span>Ward Management
                </NavLink>
                <NavLink className="nav-link" to={'/login'}>
                <span data-feather="login"></span>Login
                </NavLink>
                </li>
                </ul>
                </div>
            </nav>
            <main role="main" className="col-md-10 ml-sm-auto col-lg-10 px-4">
                <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3">
                    <Switch>
                        <Route path='/wards' component={Wards}/>
                    </Switch>
                    <Switch>
                        <Route path='/login' component={Login}/>
                    </Switch>
                </div>
            </main>
        </div> 
    </div> 
</div>  */}

 
</Router>
        )
    }
       
}
