'use strict'

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Cookies from 'universal-cookie'
const cookies = new Cookies();

import Beds from '../beds/Beds.jsx';

export default class AppContainer extends Component {

    static get propTypes() {
        return {
            ward: PropTypes.object,
            beds: PropTypes.array,
            deleteWard: PropTypes.func,
            addBed: PropTypes.func,
            deleteBed: PropTypes.func
        }
    }

    constructor(props) {
        super(props);
        this.state = {
            ward : {},
            beds: this.props.beds
        }
    }

    componentWillMount() {
        const {ward} = this.props;
        if(ward.ward == undefined) return;

        var config = {headers: {'x-access-token': cookies.get('token')}};
        axios.get(`http://localhost:3000/wards/`+ward.wardNo+'/beds', config)
        .then(res => {
            this.setState({ 
                ward: ward,
                beds: res.data 
            });
        })
    }

    onDeleteClicked(event) {
        event.preventDefault();
        event.stopPropagation();
        this.props.deleteWard(this.props.ward);
    }

    render() {
        const {ward} = this.props;
        const {beds} = this.props;
        if(ward.wardNo != null)
        {
            return <div className="container">
                <div className="row"> 
                    <h2>Ward - {ward.wardNo}</h2>
                </div>
                <div className="row"> 
                <form onSubmit= {event => this.onSubmit(event)}>
                    <div className="row">
                        <div className="col">
                                <label>Ward Category:</label>
                                <select className="form-control" type="text" onChange= {event => this.onWardCategoryChange(event)} value={ward.wardCategory}>
                                    <option>Surgical</option>
                                    <option>Pediatrics</option>
                                    <option>Maternity</option>
                                    <option>Geriatrics</option>
                                    <option>Psychiatric</option>
                                </select>
                        </div>
                        <div className="col">
                            <label>Ward Type:</label>
                            <select  className="form-control" type="text" onChange= {event => this.onWardTypeChange(event)} value={ward.wardType}>
                                <option>Male</option>
                                <option>Female</option>
                            </select>
                        </div>
                    </div>
                </form>
                </div>

                <div className="row">
                    <Beds beds={beds} addBed={bed=> this.props.addBed(bed)} deleteBed={bed=> this.props.deleteBed(bed)} />
                </div>
                <div className="row">
                    <button className="btn btn-danger" onClick={event=> this.onDeleteClicked(event)}>Delete Ward</button>
                </div>
            </div>
        }
        else
        {
            return <div>
                <h4 className="alert-heading">Ward Managment</h4>
                <p>Select a ward from the list to continue.Add new ward if no ward is present</p>
            </div>
        }
    }
}
