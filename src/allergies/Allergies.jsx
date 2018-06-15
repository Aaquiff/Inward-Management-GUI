'use strict'

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import AddAllergy from './AddAllergy';

import Cookies from 'universal-cookie'
import AllergyList from './AllergyList';

const cookies = new Cookies();

var API_URL = 'http://localhost:3000/api';

export default class Allergies extends Component {

    constructor(props) {
        super(props);
        this.state = {
            patientAllergies: [],
            patientId: "4",
            obj: {}
        };
        //this.loadAllergies();
        //console.log('const load allergies ' + this.state.patientAllergies.length);
    }

    componentDidMount() {
        this.loadAllergies();
        //console.log('load allergies ' + this.state.patientAllergies.length);
    }

    loadAllergies() {
        var config = { headers: { 'x-access-token': cookies.get('token') } };
        axios.get(API_URL + `/allergies/4`, config).then((data) => {
            console.log(data.data);
            this.setState({
                patientAllergies: data.data.data
            });
        })
    }



    addAllergy(allergy) {
        var config = {headers: {'x-access-token': cookies.get('token')}};
        axios.post(API_URL + `/allergies/` + this.state.patientId, allergy, config
        ).then((data) => {
            alert("Successfully added!");
            axios.get(API_URL + `/allergies/` + this.state.patientId, config)
                .then(res => {
                    this.loadAllergies();
                });
        })
    }

    deleteAllergy(allergyId) {
        var config = {headers: {'x-access-token': cookies.get('token')}};
        axios.delete(API_URL + `/allergies/` + this.state.patientId + '/' + allergyId, config
        ).then((data) => {
            alert("Successfully deleted!");
            axios.get(API_URL + `/allergies/` + this.state.patientId, config)
                .then(res => {
                    this.loadAllergies();
                });
        })
    }


    render() {
        var algy = this.state.patientAllergies;
        console.log(this.state.patientAllergies);

        return <div class="container">
            
            <h3>Allergies</h3>
            <div className="row">
                <div className="col-4">
                <AddAllergy patientId={this.state.patientId} addAllergy={allergy=> this.addAllergy(allergy)} />
                </div>
                <div className="col-8 rr">
                <style>{"\
                .rr{\
                  height: 80vh;\
                  overflow-y: scroll;\
                            }\
              "}</style>
                    <AllergyList onDelete={allergyId => this.deleteAllergy(allergyId)}
                    patientAllergies={this.state.patientAllergies} />
                    
                </div>
            </div>

            </div>
    }
}