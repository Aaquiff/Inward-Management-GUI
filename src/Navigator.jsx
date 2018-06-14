'use strict'

import React, {Component} from 'react';
import {HashRouter as Router, Switch, Route, Link, NavLink} from 'react-router-dom';
import Cookies from 'universal-cookie'

const cookies = new Cookies();

export default class Navigator extends Component {

    constructor(props) {
        super(props);
    }

    logout(event) {
        console.log('logout');
        event.preventDefault();
        event.stopPropagation();
        cookies.set('token', '', {path: '/'});
        alert('Logged Out');
        this.props.history.push("/login");
    }

    render() {
        return <nav className="navbar navbar-expand-sm bg-primary navbar-dark">
            <div className="container-fluid">
                <ul className="nav navbar-nav">
                    <a className="navbar-brand" href="#">IMS</a>
                    <li className="nav-item">
                        <NavLink className="nav-link" to={'/home'}>Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
                            Ward
                        </a>
                        <div className="dropdown-menu">
                            <NavLink className="dropdown-item" to={'/wards'}>Ward Management</NavLink>
                            <NavLink className="dropdown-item" to={'/admissions'}>Ward Admissions</NavLink>
                        </div>
                    </li>
                </ul>
                <ul className="nav navbar-nav">
                    <li>
                        <NavLink className="nav-link" to={'/login'}>Login</NavLink>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" onClick={(event) => {
                            this.logout(event)
                        }} to={'/login'}>Logout</a>
                    </li>
                </ul>
            </div>
        </nav>;
    }
}

//<NavLink className="nav-link" to={'/login'}>Login</NavLink>