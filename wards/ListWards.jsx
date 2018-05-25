'use strict'

import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Ward from './Ward.jsx';

export default class ListWards extends Component {

    static get proptypes() {
        return PropTypes.array;
    }

    constructor(props) {
        super(props);
    }

    render() {
        const {wards} = this.props;
        return <div>
                <table>
                <thead>
                <tr>
                <th>ID</th>
                <th>Name</th>
                </tr>
                </thead>
                <tbody>
                {
                    wards.map(ward => {
                        return <Ward key={ward.id} ward={ward}/>
                })
                }
                </tbody>
                </table>
            </div>;
    }

}