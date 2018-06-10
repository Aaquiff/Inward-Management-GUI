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
        this.onBedTypeChange = this.onBedTypeChange.bind(this);
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
        if (this.state.bedType) {
            this.props.addBed({
                bedType: this.state.bedType,
                availability: "Available"
            });
            this.state.bedNo = '';
        }
    }

    render() {
        return <div className="container">
            <form onSubmit= {event => this.onSubmit(event)}>
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