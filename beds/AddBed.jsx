'use strict'

import React, {Component} from 'react';
import PropTypes from "prop-types";

export default class AddWard extends Component {
    static get propTypes() {
        return {
            addBed: PropTypes.func
        }
    }

    constructor(props) {
        super(props);
        this.state = {
            bedNo: "",
            bedType: "Normal"
        };
        this.onBedNoChanged = this.onBedNoChanged.bind(this);
        this.onBedTypeChange = this.onBedTypeChange.bind(this);
    }

    onBedNoChanged(event) {
        event.preventDefault();
        event.stopPropagation();
        this.state.bedNo = event.target.value;
    }

    onBedTypeChange(event) {
        event.preventDefault();
        event.stopPropagation();
        this.state.bedType = event.target.value;
    }

    onSubmit(event) {
        event.preventDefault();
        event.stopPropagation();
        console.log(this.state.bedType);
        if (this.state.bedNo && this.state.bedType) {
            this.props.addBed({bedNo: this.state.bedNo, bedType: this.state.bedType});
            this.state.bedNo = '';
        }
    }

    render() {
        return <div className="container">
            <form onSubmit= {event => this.onSubmit(event)}>

                    <div className="form-group">
                        <label>Bed No:</label>
                        <input className="form-control" type="text" placeholder="Enter a uniqe bed number" onChange= {event => this.onBedNoChanged(event)}/>
                    </div>
                    <div className="form-group">
                        <label>Bed Type:</label>
                        <select className="form-control" type="text" onChange= {event => this.onBedTypeChange(event)}>
                        <option>Normal</option>
                        <option>Not Normal</option>
                        </select>
                    </div>

                <button className="btn btn-primary" type="submit">Add</button>
            </form>
        </div>
    }

}