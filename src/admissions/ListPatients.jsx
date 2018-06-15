'use strict'

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import axios from 'axios'

export default class ListPatients extends Component {

    static get propTypes() {
        return {
            onView: PropTypes.func
        }
    }

    constructor(props) {
        super(props);
        this.state = {
            patients: []
        };
        
    }

    onView(event, patient) {
        event.preventDefault();
        event.stopPropagation();
        this.props.onView(patient);
    }

    render() {
        const {patients} = this.props;
        console.log(patients);
        return <div className="list-group">
            { patients.map(patient => {
                    return <a className="list-group-item list-group-item-action flex-column align-items-start" key={patient.patientId} onClick= {event => this.onView(event, patient)}>
                    <h5 className="card-title">Patient ID: {patient.patientId}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Patient: {patient.name}</h6>
                </a>
                })
            }
        </div>

    }
}