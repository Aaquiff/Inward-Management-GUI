'use strict'

import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class ListWards extends Component {

    static get propTypes() {
        return {
            deleteWard: PropTypes.func
        }
    }

    constructor(props) {
        super(props);
    }

    onClick(event, ward) {
        event.preventDefault();
        event.stopPropagation();
        this.props.deleteWard(ward);
    }

    render() {
        const {wards} = this.props;
        return <div>
                <table className="table table-bordered">
                <thead>
                <tr>
                <th>Ward No</th>
                <th>Category</th>
                <th>Type</th>
                <th></th>
                </tr>
                </thead>
                <tbody>
                {
                    wards.map(ward => {
                        return <tr key={ward.wardNo}>
                        <td>{ward.wardNo}</td>
                        <td>{ward.wardCategory}</td>
                        <td>{ward.wardType}</td>
                        <td><button className="btn btn-danger" onClick= {event => this.onClick(event, ward)} >Delete</button></td>
                    </tr>
                })
                }
                </tbody>
                </table>
            </div>;
    }

}