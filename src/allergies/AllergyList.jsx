'use strict'

import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class AllergyList extends Component {

    static get propTypes() {
        return {
            onDelete: PropTypes.func
        }
    }

    constructor(props) {
        super(props);
        this.state = {
            patientAllergies: []
        };
        
    }

    deleteAllergy(allergyId){
        console.log('delete '+allergyId);
        this.props.onDelete(allergyId);
    }

    render() {
        const {patientAllergies} = this.props;
        console.log(patientAllergies.data);
        return <div  class="list-group" id="list-tab" role="tablist">
            { patientAllergies.map(obj => {
                    return <div class="list-group-item list-group-item-action" id="list-profile-list" data-toggle="list" href="#list-profile" role="tab" key={obj.allergyId}>
                    <h5 className="card-title">Alergy : {obj.allergyName}</h5>
                    <label className="card-subtitle">Status : {obj.allergyStatus}</label><br/>
                    <label className="card-subtitle">Remarks : {obj.allergyRemarks}</label><br/>
                    <label className="card-subtitle">Category : {obj.allergyCategory}</label><br/>
                    <label className="card-subtitle">Severity : {obj.allergySeverity}</label><br/>
                    <button class="btn btn-dark" type="button" onClick={this.deleteAllergy.bind(this, obj.allergyId)} >Delete</button>
                </div>
                })
            }
        </div>

    }
}