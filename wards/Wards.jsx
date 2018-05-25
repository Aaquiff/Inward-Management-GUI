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

        // fetch(`http://localhost:3000/wards`, {
        //     method: 'POST',
        //     headers: {'Content-Type': 'application/json'},
        //     body: JSON.stringify(ward)
        // }).then(function(response) {
        //     if (response.status >= 400) {
        //         throw new Error("Bad response from server");
        //     }
        //     return response.json();
        // }).then(function(data) {
        //     console.log(data)
        //     if(data == "success"){
        //         this.setState({msg: "Thanks for registering"});
        //     }
        //     this.setState({
        //         wards: this.state.wards.concat({
        //             id: ward.id,     name: ward.name
        //         })
        //     })
        // }).catch(function(err) {
        //     console.log(err)
        // });

        axios.post(`http://localhost:3000/wards`, ward).then((data)=>{
            this.setState({
                        wards: this.state.wards.concat({
                            id: ward.id,     name: ward.name
                        })
                    })
        })
    }

    render() {
        const {wards} = this.state.wards;

        return <div>
                <h2>Wards</h2>
                <AddWards addWard = { ward=> this.addWard(ward) } />
                <ListWards wards = {this.state.wards} />
                </div>
    }
}