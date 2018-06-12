'use strict'

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import axios from 'axios'

import Ward from './Ward.jsx'

export default class ListWards extends Component {

    static get propTypes() {
        return {
            deleteWard: PropTypes.func,
            onView: PropTypes.func
        }
    }

    constructor(props) {
        super(props);
        this.state = {
            wards: []
        };
        
    }

    onClick(event, ward) {
        event.preventDefault();
        event.stopPropagation();
        this.props.deleteWard(ward);
    }

    onView(event, ward) {
        event.preventDefault();
        event.stopPropagation();
        this.props.onView(ward);
    }

    render() {
        const {wards} = this.props;
        return <div className="list-group">
            { wards.map(ward => {
                    return <a className="list-group-item list-group-item-action flex-column align-items-start" key={ward.wardNo} onClick= {event => this.onView(event, ward)}>
                    <h5 className="card-title">{ward.wardNo}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{ward.wardCategory} - {ward.wardType}</h6>
                </a>
                })
            }
        </div>

    }
}