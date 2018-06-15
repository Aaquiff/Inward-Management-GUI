'use strict'

import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class AllergyList extends Component {

    static get propTypes() {
        return {
            onView: PropTypes.func
        }
    }

    constructor(props) {
        super(props);
        this.state = {
            patientAllergies: []
        };
        
    }

    deleteAllergy(name){
        console.log('delete '+name);
    }

    onView(event, obj) {
        event.preventDefault();
        event.stopPropagation();
        this.props.onView(obj);
    }

    render() {
        const {patientAllergies} = this.props;
        console.log(patientAllergies.data);
        return <div className="list-group">
            { patientAllergies.map(obj => {
                    return <div className="list-group-item">
                    <h5 className="card-title">Alergy : {obj.allergyName}</h5>
                    <h5 className="card-subtitle">Status : {obj.allergyStatus}</h5>
                    <h5 className="card-subtitle">Remarks : {obj.allergyRemarks}</h5>
                    <h5 className="card-subtitle">Category : {obj.allergyCategory}</h5>
                    <h5 className="card-subtitle">Severity : {obj.allergySeverity}</h5>
                    <button type="button" onClick={this.deleteAllergy.bind(this, obj.allergyId)} >Delete</button>
                </div>
                })
            }
        </div>

    }
}