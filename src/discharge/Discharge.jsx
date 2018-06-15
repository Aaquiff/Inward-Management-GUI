'use strict'

import React, { Component } from 'react';
import PropTypes from "prop-types";

import axios from 'axios';

import Cookies from 'universal-cookie'
import ListAdmissions from './ListAdmissions';
import DischargePatient from './DischargePatient';

const cookies = new Cookies();

var API_URL = 'http://localhost:3000/api';

export default class Discharge extends Component {

    constructor(props) {
        super(props);
        this.state = {
            admissions: [],
            admission: {}
        };
    }

    componentDidMount() {
        this.getAdmissions();
    }

    getAdmissions() {
        var config = { headers: { 'x-access-token': cookies.get('token') } };
        axios.get(API_URL + `/admissions`, config).then((data) => {
            console.log(data.data);
            this.setState({
                admissions: data.data
            });
        })
    }

    onView(admission) {
        this.setState({
            admission: admission
        });
    }

    render() {
        return <div className="row">
            <div className="col-4">
                <ListAdmissions onView={admission => this.onView(admission)}
                    admissions={this.state.admissions} />
            </div>

            <div className="row">
                <DischargePatient admission={this.state.admission} />
            </div>
        </div>

    }

}