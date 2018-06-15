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
        window.location = '/';
    }

    renderLoggedIn() {
        return <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="mainNav">
            <a className="navbar-brand" href="index.html">IMS</a>
            <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
                    data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false"
                    aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav navbar-sidenav" id="exampleAccordion">
                    <li className="nav-item" data-toggle="tooltip" data-placement="right" title="Logout">
                        <a className="nav-link" onClick={(event) => {
                            this.logout(event)
                        }} to={'/login'}>Logout</a>
                    </li>
                    <li className="nav-item" data-toggle="tooltip" data-placement="right" title="Home">
                        <NavLink className="nav-link" to={'/home'}>Home</NavLink>
                    </li>

                    <li className="nav-item" data-toggle="tooltip" data-placement="right" title="Ward">
                        <a className="nav-link nav-link-collapse collapsed" data-toggle="collapse"
                           href="#collapseComponents" data-parent="#exampleAccordion">
                            <span className="nav-link-text">Ward</span>
                        </a>
                        <ul className="sidenav-second-level collapse" id="collapseComponents">
                            <li>
                                <NavLink className="nav-link" to={'/wards'}>Ward Management</NavLink>
                            </li>
                            <li>
                                <NavLink className="nav-link" to={'/admissions'}>Ward Admissions</NavLink>
                            </li>
                        </ul>
                    </li>
                </ul>
                <ul className="navbar-nav sidenav-toggler">
                    <li className="nav-item">
                        <a className="nav-link text-center" id="sidenavToggler">
                            <i className="fa fa-fw fa-angle-left"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>;
    }

    renderLoggedOut() {
        return <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="mainNav">
            <a className="navbar-brand" href="index.html">IMS</a>
            <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
                    data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false"
                    aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav navbar-sidenav" id="exampleAccordion">
                    <li className="nav-item" data-toggle="tooltip" data-placement="right" title="Login">
                        <NavLink className="nav-link" to={'/login'}>Login</NavLink>
                    </li>

                </ul>
                <ul className="navbar-nav sidenav-toggler">
                    <li className="nav-item">
                        <a className="nav-link text-center" id="sidenavToggler">
                            <i className="fa fa-fw fa-angle-left"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>;
    }

    render() {
        if(cookies.get('token'))
            return this.renderLoggedIn();
        else
            return this.renderLoggedOut()
    }
}

//<NavLink className="nav-link" to={'/login'}>Login</NavLink>