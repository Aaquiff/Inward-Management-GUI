'use strict';

import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class Bed extends Component {

    static get propTypes() {
        return {
            deleteBed: PropTypes.func
        }
    }

    onClick(event, bed) {
        event.preventDefault();
        event.stopPropagation();
        this.props.deleteBed(bed);
    }

    constructor(props) {
        super(props);
    }

    render() {
        const {bed} = this.props;
        return <tr>
                <td>{bed.bedNo}</td>
                <td>{bed.bedType}</td>
                <td>{bed.bhtNo}</td>
                <td>{bed.patientId}</td>
                <td>{bed.availability}</td>
                <td><button className="btn btn-danger" onClick= {event => this.onClick(event, bed)} >Delete</button></td>
            </tr>
    }

}
