'use strict'

import React, {Component} from 'react';
import {HashRouter as Router, Switch, Route, Link, NavLink} from 'react-router-dom';

export default class Navigator extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return <nav className="navbar navbar-expand-sm bg-primary navbar-dark">
            <ul className="navbar-nav">
                <a className="navbar-brand" href="#">IMS</a>
                <li className="nav-item">
                    <NavLink className="nav-link" to={'/wards'}>Ward Management</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to={'/login'}>Login</NavLink>
                </li>
            </ul>
        </nav>;
    }
}