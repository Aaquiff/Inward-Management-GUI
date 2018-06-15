'use strict'

import React, { Component } from 'react';
import PropTypes from "prop-types";

import axios from 'axios';

import Cookies from 'universal-cookie'
import ListPatients from './ListPatients';
import AddAdmission from './AddAdmission';

const cookies = new Cookies();

var API_URL = 'http://localhost:3000/api';

export default class Discharge extends Component {

    constructor(props) {
        super(props);
        this.state = {
            patients: [],
            patient: {},
            wards: [],
            doctors: []
        };
    }

    componentDidMount() {
        this.getDoctors();
        this.getPatients();
        this.loadWards();
    }

    loadWards() {
        var config = { headers: { 'x-access-token': cookies.get('token') } };
        axios.get(API_URL + `/wards`, config)
            .then(res => {
                const wards = res.data;
                this.setState({
                    wards: wards
                });
            })
    }

    loadBeds(ward) {
        var config = { headers: { 'x-access-token': cookies.get('token') } };
        axios.get(API_URL + `/wards/${ward}/beds`, config)
            .then(res => {
                const wards = res.data;
                this.setState({
                    wards: wards
                });
            })
    }

    getPatients() {
        var config = { headers: { 'x-access-token': cookies.get('token') } };
        axios.get(API_URL + `/patients`, config).then((data) => {
            console.log(data.data);
            this.setState({
                patients: data.data
            });
        })
    }

    getDoctors() {
        var config = { headers: { 'x-access-token': cookies.get('token') } };
        axios.get(API_URL + `/doctors`, config).then((data) => {
            console.log(data.data);
            this.setState({
                doctors: data.data
            });
        })
    }

    reLoadPatients() {
        this.setState({
            patients: [],
            patient: {}
        });
        console.log("reLoading");
        getPatients();
    }

    onView(patient) {
        this.setState({
            patient: patient
        });
    }

    render() {
        return <div className="row">
            <div className="col-4">
                <ListPatients onView={patient => this.onView(patient)}
                    patients={this.state.patients} />
            </div>

            <div className="row">
                <AddAdmission patient={this.state.patient} doctors={this.state.doctors} wards={this.state.wards} loadBeds={(ward) => this.loadBeds(ward)} />
            </div>
        </div>

    }

}