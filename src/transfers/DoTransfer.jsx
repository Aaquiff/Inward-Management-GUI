'use strict'

import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class addAllergy extends Component {

    static get propTypes() {
        return {
            transferPatient: PropTypes.func
        }
    }

    constructor(props) {
        super(props);
        this.state = {
            newTransfer: {}
        };
    }


    handleSubmit(e){
        if(this.refs.wardno === ''){
            alert('Ward no is required');
        }else{
            this.setState({newAdmission:{
                transferWard: this.refs.wardno.value,
                bedNo: this.refs.bedno.value,
                transferReport: this.refs.report.value,
                transferReason: this.refs.reason.value,
                treatment: this.refs.treatment.value,
                transferDate: this.refs.tdate.value,
                remarks: this.refs.remarks.value
            }}, function(){
                this.props.transferPatient(this.state.newAdmission);
            })
        }
        
        e.preventDefault();
    }

    render() {
        return <div>
        <br/>
        <h5>Transfer to</h5> 
        <form onSubmit={this.handleSubmit.bind(this)}>
            <div>
                <label>Ward No</label>
                <select className="form-control" type="text" ref="wardno">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                        <option>8</option>
                        <option>9</option>
                        <option>10</option>
                </select><label>Bed No</label>
                <select className="form-control" type="text" ref="bedno">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                        <option>8</option>
                        <option>9</option>
                        <option>10</option>
                </select>
                <label>Transfer report</label>
                <textarea  className="form-control"  rows = "5" placeholder="Enter Report" ref="report" />
                <label>Transfer reason</label>
                <input className="form-control" type="text" placeholder="Enter reason" ref="reason"/>
                <label>Treatment</label>
                <textarea  className="form-control"  rows = "5" placeholder="Enter treatment" ref="treatment" />
                <label>Date</label>
                <input className="form-control" type="text" placeholder="Enter date" ref="tdate"/>
                <label>Remarks</label>
                <input className="form-control" type="text" placeholder="Enter remarks" ref="remarks"/>
            </div>
            <br/>
            <input type="submit" value="Transfer"/>
        </form>
    </div>
    }
}