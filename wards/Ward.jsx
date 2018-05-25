'use strict';

import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class Ward extends Component {

    static get propTypes() {
        return {
            deleteWard: PropTypes.func
        }
    }

    onClick(event, ward) {
        event.preventDefault();
        event.stopPropagation();
        this.props.deleteWard(ward);
    }

    constructor(props) {
        super(props);
    }

    render() {
        const {ward} = this.props;
        return <tr>
                <td>{ward.id}</td>
                <td>{ward.name}</td>
                <td><button className="btn btn-danger" onClick= {event => this.onClick(event, ward)} >Delete</button></td>
            </tr>
    }

}
