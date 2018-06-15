'use strict'

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import axios from 'axios'

export default class ListAdmissions extends Component {

    static get propTypes() {
        return {
            onView: PropTypes.func
        }
    }

    constructor(props) {
        super(props);
        this.state = {
            admissions: []
        };
        
    }

    onClick(event, admission) {
        event.preventDefault();
        event.stopPropagation();
        this.props.deleteWard(admission);
    }

    onView(event, admission) {
        event.preventDefault();
        event.stopPropagation();
        this.props.onView(admission);
    }

    render() {
        const {admissions} = this.props;
        return <div className="list-group">
            { admissions.map(admission => {
                    return <a className="list-group-item list-group-item-action flex-column align-items-start" key={admission.admissionId} onClick= {event => this.onView(event, admission)}>
                    <h5 className="card-title">Admission ID: {admission.admissionId}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Patient: {admission.patient.name}</h6>
                    <h6 className="card-subtitle mb-2 text-muted">Doctor: {admission.doctor.name}</h6>
                    <h6 className="card-subtitle mb-2 text-muted">Admitted Date: {admission.admittedDate}</h6>
                </a>
                })
            }
        </div>

    }
}