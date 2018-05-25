'use strict'

import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Ward from './Ward.jsx';

export default class ListWards extends Component {

    static get propTypes() {
        return {
            deleteWard: PropTypes.func
        }
    }

    constructor(props) {
        super(props);
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
                        return <Ward key={ward.wardNo} ward={ward} deleteWard = {ward=> this.props.deleteWard(ward)}/>
                })
                }
                </tbody>
                </table>
            </div>;
    }

}