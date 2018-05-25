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
            name : ""
        }
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
        return <div>
            <form onSubmit= {event => this.onSubmit(event)}>
                <h3>Add Ward</h3>
                    <label>Id:</label>
                    <input type="text" onChange= {event => this.onIdChange(event)}/>

                    <label>Name:</label>
                    <input type="text" onChange= {event => this.onNameChange(event)}/>

                <button type="submit">Add</button>
            </form>
        </div>
    }

}