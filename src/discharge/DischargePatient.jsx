'use strict'

import React, { Component } from 'react';
import PropTypes from "prop-types";

import axios from 'axios';

import Cookies from 'universal-cookie'

const cookies = new Cookies();

var API_URL = 'http://localhost:3000/api';

export default class DischargePatient extends Component {
    static get propTypes() {
        return {
            reLoadAdmissions: PropTypes.func,
            admission: PropTypes.object
        }
    }

    constructor(props) {
        super(props);
        this.state = {
            patientId: "",
            doctorId: "",
            dischargeType: "Normal Discharge",
            dischargeDate: Date.now(),
            remark: "",
            refered: "",
            outcome: "",
            diagnosis: "",
            elmmr: "",
            icdCode: "",
            admission: this.props.admission

        };
        this.onPatientIdChange = this.onPatientIdChange.bind(this);
        this.onDoctorIdChange = this.onDoctorIdChange.bind(this);
        this.onDischargeTypeChange = this.onDischargeTypeChange.bind(this);
        this.onDischargeDateChange = this.onDischargeDateChange.bind(this);
        this.onRemarkChange = this.onRemarkChange.bind(this);
        this.onReferedChange = this.onReferedChange.bind(this);
        this.onOutcomeChange = this.onOutcomeChange.bind(this);
        this.onDiagnosisChange = this.onDiagnosisChange.bind(this);
        this.onLMMRChange = this.onLMMRChange.bind(this);
        this.onICDCodeChange = this.onICDCodeChange.bind(this);
        this.onAdmissionIdChange = this.onAdmissionIdChange.bind(this);

        this.dischargePatient = this.dischargePatient.bind(this);
        this.btnSearchOnClick = this.btnSearchOnClick.bind(this);
    }

    onPatientIdChange(event) {
        event.preventDefault();
        event.stopPropagation();
        this.state.patientId = event.target.value;
    }

    onDoctorIdChange(event) {
        event.preventDefault();
        event.stopPropagation();
        this.state.doctorId = event.target.value;
    }

    onDischargeTypeChange(event) {
        event.preventDefault();
        event.stopPropagation();
        this.state.dischargeType = event.target.value;
    }

    onDischargeDateChange(event) {
        event.preventDefault();
        event.stopPropagation();
        this.state.dischargeDate = event.target.value;
    }

    onRemarkChange(event) {
        event.preventDefault();
        event.stopPropagation();
        this.state.remark = event.target.value;
    }

    onReferedChange(event) {
        event.preventDefault();
        event.stopPropagation();
        this.state.refered = event.target.value;
    }

    onOutcomeChange(event) {
        event.preventDefault();
        event.stopPropagation();
        this.state.outcome = event.target.value;
    }

    onDiagnosisChange(event) {
        event.preventDefault();
        event.stopPropagation();
        this.state.diagnosis = event.target.value;
    }

    onLMMRChange(event) {
        event.preventDefault();
        event.stopPropagation();
        this.state.elmmr = event.target.value;
    }

    onICDCodeChange(event) {
        event.preventDefault();
        event.stopPropagation();
        this.state.icdCode = event.target.value;
    }

    onAdmissionIdChange(event) {
        event.preventDefault();
        event.stopPropagation();
        this.state.admissionId = event.target.value;
    }

    onSubmit(event, admission) {
        event.preventDefault();
        event.stopPropagation();
        console.log(admission);
        if (admission.patientId &&
            admission.doctorId &&
            this.state.dischargeType &&
            this.state.dischargeDate) {

            var dischargePatientObj = {
                patientId: admission.patientId,
                doctorId: admission.doctorId,
                dischargeType: this.state.dischargeType,
                dischargeDate: this.state.dischargeDate,
                remark: this.state.remark,
                refered: this.state.refered,
                outcome: this.state.dischargoutcomeeDate,
                diagnosis: this.state.diagnosis,
                elmmr: this.state.elmmr,
                icdCode: this.state.icdCode,
                admissionId: admission.admissionId
            }
            
            this.dischargePatient(dischargePatientObj);
        }

    }

    btnSearchOnClick(event) {
        var config = { headers: { 'x-access-token': cookies.get('token') } };
        axios.get(API_URL + `/admissions/${this.state.admissionId}`, config).then((data) => {
            this.state.patientId = data.data.patient.patientId;
            this.state.doctorId = data.data.doctor.doctorId;
        })
    }

    dischargePatient(dischargeObj) {
        var config = { headers: { 'x-access-token': cookies.get('token') } };
        axios.post(API_URL + `/discharges`, dischargeObj, config).then((data) => {
            document.getElementById("frmDischarge").reset();
            this.props.reLoadAdmissions();
        })
    }

    componentWillMount() {
        const { admission } = this.props;
        if (admission.admission == undefined) return;


        this.setState({
            admission: admission
        });
    }

    render() {
        const { admission } = this.props;
        if (admission.admissionId != null) {
            return <div className="container-fluid" >
                <div className="row">
                    <div className="col-sm">
                        <h2>{admission.patient.name}/{admission.patient.gender}</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm">
                        <form onSubmit={(event) => this.onSubmit(event, admission)} id="frmDischarge">
                            <div className="form-group">
                                <label>Discharge Type:</label>
                                <select className="form-control" type="text" onChange={event => this.onDischargeTypeChange(event)}>
                                    <option>Normal Discharge</option>
                                    <option>LAML</option>
                                    <option>Missing</option>
                                    <option>Death</option>
                                </select>
                                <label>Discharge Date and TIme</label>
                                <input className="form-control" type="datetime-local" placeholder="Enter Discharge Date and Time" onChange={event => this.onDischargeDateChange(event)} />
                                <label>Remarks</label>
                                <input className="form-control" type="text" placeholder="Enter Remarks" onChange={event => this.onRemarkChange(event)} />
                                <label>Outcomes</label>
                                <input className="form-control" type="text" placeholder="Enter Outcomes" onChange={event => this.onOutcomeChange(event)} />
                                <label>Refereed To</label>
                                <input className="form-control" type="text" placeholder="Enter Refered To" onChange={event => this.onReferedChange(event)} />
                                <label>Discharge Diagnosis</label>
                                <input className="form-control" type="text" placeholder="Enter Discharge Diagnosis" onChange={event => this.onDiagnosisChange(event)} />
                                <label>Discharge elmmr</label>
                                <input className="form-control" type="text" placeholder="Enter Discharge elmmr" onChange={event => this.onLMMRChange(event)} />
                                <label>ICD Code</label>
                                <input className="form-control" type="text" placeholder="Enter ICD Code" onChange={event => this.onICDCodeChange(event)} />

                                <input className="form-control" type="text" name="patient" placeholder="Enter Patient ID" onChange={event => this.onPatientIdChange(event)} value={admission.patient.patientId} hidden />
                                <input className="form-control" type="text" name="doctor" placeholder="Enter DoctorID" onChange={event => this.onDoctorIdChange(event)} value={admission.doctor.doctorId} hidden/>
                            </div>

                            <button className="btn btn-primary" type="submit">Discharge Patient</button>
                        </form>
                    </div>
                </div>
            </div>
        }
        else {
            return <div className="container">
                <h4 className="alert-heading">Discharge Patient</h4>
                <p>Select a admission from the list to continue</p>
            </div>
        }
    }

}