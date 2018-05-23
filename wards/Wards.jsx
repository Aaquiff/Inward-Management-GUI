'use strict'

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import Ward from './Ward.jsx'
import AddWards from './AddWard.jsx';
import ListWards from './ListWards.jsx';

export default class Wards extends Component {

    constructor(props) {
        super(props);
        this.state = {
            wards: []
        };
    }

    componentDidMount() {
        axios.get(`http://localhost:3000/wards`)
            .then(res => {
                const wards = res.data;
                console.log(wards)
                this.setState({ wards });
            })
    }

    addWard(ward) {
        // this.setState({
        //     wards: this.state.wards.concat({
        //         id: Date.now(),     name: ward.name
        //     })
        // })

        ward.id = Date.now();
        console.log(ward);

        axios.post(`http://localhost:3000/wards`,ward);
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