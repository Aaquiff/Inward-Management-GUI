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
                this.setState({ wards });
            })
    }

    addWard(ward) {
        axios.post(`http://localhost:3000/wards`, ward
        ).then((data)=>{
            this.setState({
                        wards: this.state.wards.concat({
                            id: ward.id,     name: ward.name
                        })
                    });
        })
    }

    deleteWard(ward) {
        axios.delete('http://localhost:3000/wards/'+ward.id).then((data)=>{
            var temp = this.state.wards;
            var index = temp.indexOf(ward);
            if(index > -1) {
                temp = temp.slice(index, 1);
            }
            this.setState({
                wards: temp
            })
        })
    }

    render() {
        const {wards} = this.state.wards;

        return <div>
                <h2>Wards</h2>
                <AddWards addWard = { ward=> this.addWard(ward) } />
                <ListWards deleteWard = {ward=> this.deleteWard(ward)} wards = {this.state.wards} />
                </div>
    }
}