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
        return <div className="list-group">
            { patientAllergies.map(obj => {
                    return <div className="list-group-item" key={obj.allergyId}>
                    <h5 className="card-title">Alergy : {obj.allergyName}</h5>
                    <label className="card-subtitle">Status : {obj.allergyStatus}</label><br/>
                    <label className="card-subtitle">Remarks : {obj.allergyRemarks}</label><br/>
                    <label className="card-subtitle">Category : {obj.allergyCategory}</label><br/>
                    <label className="card-subtitle">Severity : {obj.allergySeverity}</label><br/>
                    <button type="button" onClick={this.deleteAllergy.bind(this, obj.allergyId)} >Delete</button>
                </div>
                })
            }
        </div>

    }
}