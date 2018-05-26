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
                    <div className="d-flex justify-content-between" >
                        <h5 className="mb-1">{ward.wardNo}</h5>
                        
                    </div>
                    <p>{ward.wardCategory} - {ward.wardType}</p>
                </a>
                })
            }
        </div>

    }
}


// wards.map(ward => {
//     return <tr key={ward.wardNo}>
//         <td>{ward.wardNo}</td>
//         <td>{ward.wardCategory}</td>
//         <td>{ward.wardType}</td>
//         <td><button className="btn btn-danger" onClick= {event => this.onClick(event, ward)} >Delete</button></td>
//         <td><button className="btn btn-default" onClick= {event => this.onView(event, ward)} >View</button></td>
//     </tr>
// })