'use strict'

import React, {Component} from 'react';
import PropTypes from "prop-types";

export default class AddWard extends Component {
    static get propTypes() {
        return {
            addWard: PropTypes.func
        }
    }

    constructor(props) {
        super(props);
        this.state = {
            wardNo: "",
            wardCategory: "Surgical",
            wardType: "Male"
        };
        this.onWardNoChange = this.onWardNoChange.bind(this);
        this.onWardCategoryChange = this.onWardCategoryChange.bind(this);
        this.onWardTypeChange = this.onWardTypeChange.bind(this);
    }

    onWardNoChange(event) {
        event.preventDefault();
        event.stopPropagation();
        this.state.wardNo = event.target.value;
    }

    onWardCategoryChange(event) {
        event.preventDefault();
        event.stopPropagation();
        this.state.wardCategory = event.target.value;
    }

    onWardTypeChange(event) {
        event.preventDefault();
        event.stopPropagation();
        this.state.wardType = event.target.value;
    }

    onSubmit(event) {
        event.preventDefault();
        event.stopPropagation();
        if (this.state.wardNo && this.state.wardCategory && this.state.wardType) {
            this.props.addWard({wardNo: this.state.wardNo, wardCategory: this.state.wardCategory, wardType: this.state.wardType});
            this.state.wardNo = '';
            this.state.wardCategory = '';
            this.state.wardType = '';
        }
    }

    render() {
        return <div className="container">
    <form onSubmit= {event => this.onSubmit(event)}>
            <div className="form-group">
                <label>Ward No:</label>
                <input className="form-control" type="text" placeholder="Enter a uniqe ward number" onChange= {event => this.onWardNoChange(event)}/>
            </div>
            <div className="form-group">
                <label>Ward Category:</label>
                <select className="form-control" type="text" onChange= {event => this.onWardCategoryChange(event)}>
                <option>Surgical</option>
                <option>Pediatrics</option>
                <option>Maternity</option>
                <option>Geriatrics</option>
                <option>Psychiatric</option>
                </select>
            </div>
            <div className="form-group">
                <label>Ward Type:</label>
                <select  className="form-control" type="text" onChange= {event => this.onWardTypeChange(event)}>
                <option>Male</option>
                <option>Female</option>
                </select>
            </div>

        <button className="btn btn-primary" type="submit">Add</button>
    </form>
</div>
    }

}