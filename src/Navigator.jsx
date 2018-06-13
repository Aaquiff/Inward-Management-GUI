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
        cookies.set('token','',{ path: '/'});
        alert('Logged Out');
        this.props.history.push("/login");
    }

    render() {
        return <nav className="navbar navbar-expand-sm bg-primary navbar-dark">
            <ul className="navbar-nav">
                <a className="navbar-brand" href="#">IMS</a>
                <li className="nav-item">
                    <NavLink className="nav-link" to={'/home'}>Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to={'/wards'}>Ward Management</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to={'/admissions'}>Ward Admissions</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to={'/login'}>Login</NavLink>
                </li>
                <li className="nav-item">
                    <a className="nav-link" onClick={(event)=>{this.logout(event)}} to={'/login'}>Logout</a>
                </li>
            </ul>
        </nav>;
    }
}