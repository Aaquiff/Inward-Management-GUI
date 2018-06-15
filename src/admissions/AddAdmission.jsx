'use strict'

import React, { Component } from 'react';
import PropTypes from "prop-types";

import axios from 'axios';

import Cookies from 'universal-cookie'

const cookies = new Cookies();

var API_URL = 'http://localhost:3000/api';

import { ToastContainer, ToastStore } from 'react-toasts';


export default class AddAdmission extends Component {
    static get propTypes() {
        return {
            loadBeds: PropTypes.func,
            patient: PropTypes.object,
            wards: PropTypes.array,
            doctors: PropTypes.array
        }
    }

    constructor(props) {
        super(props);
        this.state = {
            bhtNo: "",
            patientId: "",
            bedNo: "",
            wardNo: "",
            doctorId: "",
            complain: "",
            beds: []
        };
        this.onBHTNoChange = this.onBHTNoChange.bind(this);
        this.onPatientIdChange = this.onPatientIdChange.bind(this);
        this.onBedNoChange = this.onBedNoChange.bind(this);
        this.onWardNoChange = this.onWardNoChange.bind(this);
        this.onDoctorIdChange = this.onDoctorIdChange.bind(this);
        this.onComplainChange = this.onComplainChange.bind(this);

        this.addAdmission = this.addAdmission.bind(this);
    }

    onBHTNoChange(event) {
        event.preventDefault();
        event.stopPropagation();
        this.state.bhtNo = event.target.value;
    }

    onDoctorIdChange(event) {
        event.preventDefault();
        event.stopPropagation();
        this.state.doctorId = event.target.value;
    }

    onPatientIdChange(event) {
        event.preventDefault();
        event.stopPropagation();
        this.state.patientId = event.target.value;
    }

    onBedNoChange(event) {
        event.preventDefault();
        event.stopPropagation();
        this.state.bedNo = event.target.value;
    }

    onWardNoChange(event) {
        event.preventDefault();
        event.stopPropagation();
        this.state.wardNo = event.target.value;

        this.loadBeds(this.state.wardNo);
    }
    onComplainChange(event) {
        event.preventDefault();
        event.stopPropagation();
        this.state.complain = event.target.value;
    }

    onSubmit(event, patient) {
        event.preventDefault();
        event.stopPropagation();
        if (patient.patientId && this.state.bhtNo && this.state.complain) {
            var admissionObj = {
                patientId: patient.patientId,
                bhtNo: this.state.bhtNo,
                bedNo: this.state.bedNo,
                wardNo: this.state.wardNo,
                doctorId: this.state.doctorId,
                complain: this.state.complain
            }

            this.addAdmission(admissionObj);
        }
        else {
            ToastStore.error("Please fill the required fields.");
        }

    }

    loadBeds(ward) {
        var config = { headers: { 'x-access-token': cookies.get('token') } };
        axios.get(API_URL + `/wards/${ward}/beds`, config)
            .then(res => {
                const beds = res.data;
                this.setState({
                    beds: beds
                });
                this.state.bedNo = beds[0].bedNo;
            })
    }

    addAdmission(admissionObj) {
        var config = { headers: { 'x-access-token': cookies.get('token') } };
        axios.post(API_URL + `/admissions`, admissionObj, config).then((data) => {
            document.getElementById("frmAdmission").reset();
            ToastStore.success("Success!!");
        }).catch((err) => {
            ToastStore.error("An error occured!");
        })
    }

    componentWillMount() {
        const { patient } = this.props;
        if (patient.patient == undefined) return;


        this.setState({
            patient: patient
        });
    }

    render() {
        const { patient, wards, doctors } = this.props;
        console.log(this.props);
        if (patient.patientId != null) {
            return <div className="container-fluid" >
                <ToastContainer store={ToastStore} />
                <div className="row">
                    <div className="col-sm">
                        <h2>{patient.name}/{patient.gender}</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm">
                        <form onSubmit={(event) => this.onSubmit(event, patient)} id="frmAdmission">
                            <div className="form-group">
                                <label>BHT No:</label>
                                <input className="form-control" type="text" placeholder="Enter BHT No" onChange={event => this.onBHTNoChange(event)} />
                                <label>Ward:</label>
                                <select className="form-control" type="text" onChange={event => this.onWardNoChange(event)}>
                                    <option selected value> -- Select an option -- </option>
                                    {
                                        this.props.wards.map((ward) => {
                                            return <option key={ward.wardNo} value={ward.wardNo}>{ward.wardNo} - {ward.wardCategory}</option>
                                        })
                                    }
                                </select>
                                <label>Bed:</label>
                                <select className="form-control" type="text" onChange={event => this.onBedNoChange(event)}>
                                    {
                                        this.state.beds.map((bed) => {
                                            console.log(bed);
                                            return <option key={bed.beddNo}>{bed.bedNo}</option>
                                        })
                                    }
                                </select>
                                <label>Complain:</label>
                                <input className="form-control" type="text" placeholder="Enter Complain" onChange={event => this.onComplainChange(event)} />
                                <label>Doctor:</label>
                                <select className="form-control" type="text" onChange={event => this.onDoctorIdChange(event)}>
                                    <option selected value> -- Select an option -- </option>
                                    {
                                        this.props.doctors.map((doctor) => {
                                            return <option key={doctor.doctorId} value={doctor.doctorId} >{doctor.name}</option>
                                        })
                                    }
                                </select>


                            </div>

                            <button className="btn btn-primary" type="submit">Admit Patient</button>
                        </form>
                    </div>
                </div>
            </div>
        }
        else {
            return <div className="container">
                <h4 className="alert-heading">Admit Patient</h4>
                <p>Select a patient from the list to continue</p>
            </div>
        }
    }

}