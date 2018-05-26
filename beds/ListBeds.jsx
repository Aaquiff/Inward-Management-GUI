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
                <thead className="thead-dark">
                <tr>
                <th scope="col">Bed No</th>
                <th scope="col">Bed Type</th>
                <th scope="col">BHT No</th>
                <th scope="col">Patient ID</th>
                <th scope="col">Availability</th>
                <th scope="col"></th>
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