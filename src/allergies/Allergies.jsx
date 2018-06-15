'use strict'

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Allergy from './Allergy';
import AddAllergy from './AddAllergy';

import Cookies from 'universal-cookie'

const cookies = new Cookies();

var API_URL = 'http://localhost:3000/api';

export default class Allergies extends Component {

    constructor() {
        super();
        this.state = {
            patientId: "4",
            patientAllergies: []
        };
        this.loadAllergies();
        console.log('const load allergies ' + this.state.patientAllergies.length);
    }

    componentWillMount() {
        //this.loadAllergies();
        //console.log('load allergies ' + this.state.patientAllergies.length);
    }

    loadAllergies() {
        var config = {headers: {'x-access-token': cookies.get('token')}};
        console.log('load allergies');
        axios.get(API_URL + '/allergies/4', config)
            .then(res => {
                console.log(res.data.data || res.data);
                this.setState({
                    patientAllergies: res.data.data || res.data
                }, function() {
                    console.log("Done");
                });
            })
    }


    addAllergy(allergy) {
        var config = {headers: {'x-access-token': cookies.get('token')}};
        axios.post(API_URL + `/allergies/` + this.state.patientId, allergy, config
        ).then((data) => {
            axios.get(API_URL + `/allergies/` + this.state.patientId, config)
                .then(res => {
                    this.loadAllergies();
                });
        })
    }


    render() {
        var algy = this.state.patientAllergies;
        console.log(algy+"DATAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");

        return <div>
            <h3>Allergies</h3>
            <div className="row">
                <br/>
                <AddAllergy patientId={this.state.patientId} addAllergy={allergy=> this.addAllergy(allergy)} />
            </div>

            </div>
    }
}