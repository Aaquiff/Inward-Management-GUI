'use strict'

import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class addAllergy extends Component {

    static get propTypes() {
        return {
            patientId: PropTypes.string,
            addAllergy: PropTypes.func
        }
    }

    constructor(props) {
        super(props);
        const {patientId} = this.props;
        this.state = {
            newAllergy: {}
        };
    }

    addAllergy(allergy) {
        this.props.addAllergy(allergy);
    }

    handleSubmit(e){
        if(this.refs.aname === ''){
            alert('Allergy name is required');
        }else{
            this.setState({newAllergy:{
                patientId: this.props.patientId,
                allergyName: this.refs.aname.value,
                allergyStatus: this.refs.astatus.value,
                allergyRemarks: this.refs.aremarks.value,
                allergyCategory: this.refs.acategory.value,
                allergySeverity: this.refs.aseverity.value
            }}, function(){
                this.props.addAllergy(this.state.newAllergy);
            })
        }
        
        e.preventDefault();
    }

    render() {
        return <div>
        <br/>
        <h5>Add Allergy</h5> 
        <form onSubmit={this.handleSubmit.bind(this)}>
            <div>
                <label>Allergy Name</label>
                <input className="form-control" type="text" placeholder="Enter Allergy Name" ref="aname"/>
                <label>Status</label>
                <select className="form-control" type="text" ref="astatus">
                        <option>Current</option>
                        <option>Past</option>
                </select>
                <label>Remarks</label>
                <textarea  className="form-control"  rows = "5" placeholder="Enter Remarks" ref="aremarks" />
                <label>Category</label>
                <select className="form-control" type="text" ref="acategory">
                        <option key="Amimal" value="Amimal">Amimal</option>
                        <option key="Food" value="Food">Food</option>
                        <option key="Plant" value="Plant">Plant</option>
                        <option key="Drug" value="Drug">Drug</option>
                </select>
                <label>Severity</label>
                <select className="form-control" type="text" ref="aseverity">
                        <option key="Mild" value="Mild">Mild</option>
                        <option key="Moderate" value="Moderate">Moderate</option>
                        <option key="Severe" value="Severe">Severe</option>
                        <option key="Unknown" value="Unknown">Unknown</option>
                </select>
            </div>
            <br/>
            <input class="btn btn-dark" type="submit" value="Add"/>
        </form>
    </div>
    }
}