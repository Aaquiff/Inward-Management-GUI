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
            id: "",
            name : ""
        };
        this.onIdChange = this.onIdChange.bind(this);
        this.onNameChange = this.onNameChange.bind(this);
    }

    onIdChange(event) {
        event.preventDefault();
        event.stopPropagation();
        this.state.id = event.target.value;
    }

    onNameChange(event) {
        event.preventDefault();
        event.stopPropagation();
        this.state.name = event.target.value;
    }

    onSubmit(event) {
        event.preventDefault();
        event.stopPropagation();
        if (this.state.name && this.state.id) {
            this.props.addWard({id: this.state.id, name: this.state.name});
            this.state.name = '';
            this.state.id = '';
        }
    }

    render() {
        return <div className="container">
            <form className="form" onSubmit= {event => this.onSubmit(event)}>
                <h3>Add Ward</h3>
                <div className="form-group">
                    <label>Id:</label>
                    <input className="form-control" type="text" onChange= {event => this.onIdChange(event)}/>
                </div>
                <div className="form-group">
                    <label>Name:</label>
                    <input className="form-control" type="text" onChange= {event => this.onNameChange(event)}/>
                </div>
                <div className="form-group">
                    <button className="btn btn-primary" type="submit">Add</button>
                </div>
            </form>
        </div>
    }

}