import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';

import Cookies from 'universal-cookie'
import DoTransfer from './DoTransfer';
const cookies = new Cookies();

var API_URL = 'http://localhost:3000/api';

export default class Transfer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            admissions: [],
            selected: {}
        };
    }

    componentDidMount() {
        this.loadAdmissions();
    }

    loadAdmissions() {
        var config = { headers: { 'x-access-token': cookies.get('token') } };
        axios.get(API_URL + `/admissions`, config)
            .then(res => {
                this.setState({
                    admissions: res.data,
                    selected: {}
                });
            });
    }

    updateAdmissions() {
        var config = { headers: { 'x-access-token': cookies.get('token') } };
        axios.put(API_URL + `/admissions/`+ this.state.selected._id, this.state.selected, config)
            .then(res => {
                alert("Transfer Successfull!")
            });
    }

    addTransfer(newAdmission, patId) {
        var config = { headers: { 'x-access-token': cookies.get('token') } };
        axios.post(API_URL + `/inttransfers/` + patId, newAdmission, config)
            .then(res => {
                alert("added");
            });
    }

    onView(event, admission) {
        event.preventDefault();
        event.stopPropagation();
        this.setState({
            admissions: this.state.admissions,
            selected: admission
        })
    }

    transferPatient(newAdmission) {
        console.log('TRANSFERRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR'+this.state.selected._id);
        var updatedObj = this.state.selected;
        updatedObj.wardNo = newAdmission.transferWard;
        updatedObj.bedNo = newAdmission.bedNo;

        this.setState({
            admissions: this.state.admissions,
            selected: updatedObj
        })
        this.updateAdmissions();
        console.log('TRANSFEassasassa'+updatedObj.patientId);
        console.log(newAdmission);
        this.addTransfer(newAdmission, updatedObj.patientId);
    }

    render() {
        console.log(this.state.admissions.length);
        return <div class="container">
            <h3>Transfer Patient</h3>
            <div className="row">
            <div className="col-8">
                {this.state.admissions.map((admission) => {
                    return <div className="list-group-item list-group-item-action flex-column align-items-start" key={admission.BHTNo} onClick= {event => this.onView(event, admission)}>

                    <label className="card-subtitle">BHTNo : {admission.bhtNo}</label>
                    <label className="card-subtitle">Patient ID : {admission.patientId}</label><br/>
                    <label className="card-subtitle">Ward : {admission.wardNo} - </label>
                    <label className="card-subtitle">Bed : {admission.bedNo}</label><br/>
                    <label className="card-subtitle">Admitted date : {admission.admittedDate}</label><br/>
                    <button type="button">Delete</button>
                    </div>
                })}
                </div>
                <div className="col-4">
                            <Link to={'/transfershist'}>
                                <button type="button" className="btn btn-outline-info">
                                    <i className="fa fa-edit"></i> View Transfers
                                </button>
                            </Link>
                    <DoTransfer transferPatient={newAdmission=> this.transferPatient(newAdmission)} />
                </div>
            </div>
        </div>
    }

}