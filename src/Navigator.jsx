'use strict'

import React, { Component } from 'react';
import { HashRouter as Router, Switch, Route, Link, NavLink } from 'react-router-dom';
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
        cookies.set('token', '', { path: '/' });
        window.location = '/';
    }

    renderLoggedIn() {
        var user = cookies.get('user');
        return <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="mainNav">
            <a className="navbar-brand" href="index.html">Inward Management System</a>
            <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
                data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav navbar-sidenav" id="exampleAccordion">
                    <li className="nav-item" data-toggle="tooltip" data-placement="right" title="Home">
                        <NavLink className="nav-link" to={'/home'}>
                            <i className="fa fa-fw fa-home"></i> Home
                        </NavLink>
                    </li>
                    <li className="nav-item" data-toggle="tooltip" data-placement="right" title="Ward">
                        <a className="nav-link nav-link-collapse collapsed" data-toggle="collapse"
                            href="#collapseComponents" data-parent="#exampleAccordion">
                            <span className="nav-link-text"><i className="fa fa-fw fa-hospital-o"></i> Ward</span>
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
                    <li className="nav-item" data-toggle="tooltip" data-placement="right" title="Patient">
                        <a className="nav-link nav-link-collapse collapsed" data-toggle="collapse"
                            href="#collapsePatientComponents" data-parent="#exampleAccordion">
                            <span className="nav-link-text"><i class="fa fa-fw fa-heartbeat"></i> Patient</span>
                        </a>
                        <ul className="sidenav-second-level collapse" id="collapsePatientComponents">
                            <li className="nav-item" data-toggle="tooltip" data-placement="right" title="Admit Patient">
                                <NavLink className="nav-link" to={'/admission'}>Admission</NavLink>
                            </li>
                            <li className="nav-item" data-toggle="tooltip" data-placement="right" title="Discharge Patient">
                                <NavLink className="nav-link" to={'/discharge'}>Discharge</NavLink>
                            </li>
                            <li className="nav-item" data-toggle="tooltip" data-placement="right" title="Allergies">
                                <NavLink className="nav-link" to={'/allergies'}>Allergies</NavLink>
                            </li>
                        </ul>
                    </li>
                </ul>
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item" data-toggle="tooltip" data-placement="right" title="Logout">
                        <a className="nav-link"><i className="fa fa-fw fa-user-circle"></i> {user.username}</a>
                    </li>
                    <li className="nav-item" data-toggle="tooltip" data-placement="right" title="Logout">
                        <a className="nav-link" onClick={(event) => {
                            this.logout(event)
                        }} to={'/login'}><i className="fa fa-fw fa-sign-out"></i>Logout</a>
                    </li>
                </ul>
            </div>
        </nav>;
    }

    renderLoggedOut() {
        return <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="mainNav">
            <a className="navbar-brand" href="index.html">Inward Management System</a>
            <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
                data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item" data-toggle="tooltip" data-placement="right" title="Login">
                        <NavLink className="nav-link" to={'/login'}><i className="fa fa-fw fa-sign-in"></i> Login</NavLink>
                    </li>
                </ul>
            </div>
        </nav>;
    }

    render() {
        if (cookies.get('token'))
            return this.renderLoggedIn();
        else
            return this.renderLoggedOut()
    }
}
