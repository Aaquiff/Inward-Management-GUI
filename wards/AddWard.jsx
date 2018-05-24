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

    onNameChange(event) {
        event.preventDefault();
        event.stopPropagation();
        this.state.name = event.target.value;
    }

    onSubmit(event) {
        event.preventDefault();
        event.stopPropagation();
        if (this.state.name) {
            this.props.addWard({name: this.state.name});
            this.state.name = '';
        }
    }

    render() {
        return <div class='container'>
            <form class='form' onSubmit= {event => this.onSubmit(event)}>
                <h3>Add Ward</h3>
                <div class='form-group'>
                    <label>Name:</label>
                    <input class='form-control' type="text" onChange= {event => this.onNameChange(event)}/>
                </div>
                
                <button class='btn btn-primary' type="submit">Add</button>
            </form>
        </div>
    }

}