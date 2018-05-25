'use strict'

import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Bed from './Bed.jsx';

export default class ListBeds extends Component {

    static get propTypes() {
        return {
            deleteBed: PropTypes.func
        }
    }

    constructor(props) {
        super(props);
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
                        return <Bed key={bed.bedNo} bed={bed} deleteBed = {bed=> this.props.deleteBed(bed)}/>
                })
                }
                </tbody>
                </table>
            </div>;
    }

}