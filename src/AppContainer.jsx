'use strict'

import React, {Component} from 'react';
import {HashRouter as Router, Switch, Route, Link, NavLink} from 'react-router-dom';

import Wards from './wards/Wards.jsx';
import Beds from './beds/Beds.jsx';
import Login from './Login.jsx';
import Navigator from "./Navigator";
import Home from "./Home";
import Admission from "./wards/Admission";
import Discharge from "./discharge/Discharge";
import Prescriptions from "./prescription/prescriptions";
import Allergies from "./allergies/Allergies";
import PatientAdmission from "./admissions/Admission";
import Transfers from "./transfers/Transfer";
import TransferDet from "./transfers/TransferHist";

export default class AppContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <Router>
    <div>
        <Navigator/>
        <Switch>
            <Route path='/home' component={Home}/>
        </Switch>
        <Switch>
            <Route path='/wards' component={Wards}/>
        </Switch>
        <Switch>
            <Route path='/admissions' component={Admission}/>
        </Switch>
        <Switch>
            <Route path='/login' component={Login}/>
        </Switch>
        <Switch>
            <Route path='/discharge' component={Discharge}/>
        </Switch>
        <Switch>
            <Route path={"/prescriptions/:bht/:patientId"} component={Prescriptions}/>
        </Switch>
        <Switch>
            <Route path='/allergies' component={Allergies}/>
        </Switch>
        <Switch>
            <Route path='/admission' component={PatientAdmission}/>
        </Switch>
        <Switch>
            <Route path='/transfers' component={Transfers}/>
        </Switch>
        <Switch>
            <Route path='/transfershist' component={TransferDet}/>
        </Switch>
    </div>
</Router>
    }
       
}
