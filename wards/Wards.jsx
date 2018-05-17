'use strict'

import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Ward from './Ward.jsx'
import AddWards from './AddWard.jsx';
import ListWards from './ListWards.jsx';

export default class Wards extends Component {

    constructor(props) {
        super(props);
        this.state = {
            wards: [
                {id: 'W-001', name: 'Ward 1'},
                {id: 'W-002', name: 'Ward 2'}
            ]
        }
    }

    addWard(ward) {
        this.setState({
            wards: this.state.wards.concat({
                id: Date.now(),     name: ward.name
            })
        })
    }

    render() {
        const {wards} = this.state.wards;

        return <div class='container'>
                <h2>Wards</h2>
                <AddWards addWard = { ward=> this.addWard(ward) } />
                <ListWards wards = {this.state.wards} />
                </div>
    }
}