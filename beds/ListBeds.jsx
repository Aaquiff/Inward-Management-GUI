'use strict'

import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class ListBeds extends Component {

    static get propTypes() {
        return {
            deleteBed: PropTypes.func
        }
    }

    constructor(props) {
        super(props);
    }

    onClick(event, bed) {
        event.preventDefault();
        event.stopPropagation();
        this.props.deleteBed(bed);
    }

    render() {
        const {beds} = this.props;
        return <div>
                <table className="table table-bordered">
                <thead>
                <tr>
                <th>Bed No</th>
                <th>Bed Type</th>
                <th>BHT No</th>
                <th>Patient ID</th>
                <th>Availability</th>
                <th></th>
                </tr>
                </thead>
                <tbody>
                {
                    beds.map(bed => {
                        return <tr key={bed.bedNo}>
                        <td>{bed.bedNo}</td>
                        <td>{bed.bedType}</td>
                        <td>{bed.bhtNo}</td>
                        <td>{bed.patientId}</td>
                        <td>{bed.availability}</td>
                        <td><button className="btn btn-danger" onClick= {event => this.onClick(event, bed)} >Delete</button></td>
                    </tr>
                })
                }
                </tbody>
                </table>
            </div>;
    }

}