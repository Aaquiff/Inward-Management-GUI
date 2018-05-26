'use strict'

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import Beds from '../beds/Beds.jsx';

export default class AppContainer extends Component {

    static get propTypes() {
        return {
            ward: PropTypes.object,
            beds: PropTypes.array,
            deleteWard: PropTypes.func
        }
    }

    constructor(props) {
        super(props);
        this.state = {
            ward : {},
            beds : []
        }
    }

    componentWillMount() {
        console.log('Mount');
        const {ward} = this.props;
        axios.get(`http://localhost:3000/wards/`+ward.wardNo+'/beds')
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
                    <div class="form-row align-items-center">
                        <div className="col-sm-10 my-1">
                            <label>Ward Category:</label>
                            <select className="form-control" type="text" onChange= {event => this.onWardCategoryChange(event)}>
                            <option>Surgical</option>
                            <option>Pediatrics</option>
                            <option>Maternity</option>
                            <option>Geriatrics</option>
                            <option>Psychiatric</option>
                            </select>
                        </div>
                        <div className="col-sm-10 my-1">
                            <label>Ward Type:</label>
                            <select  className="form-control" type="text" onChange= {event => this.onWardTypeChange(event)}>
                            <option>Male</option>
                            <option>Female</option>
                            </select>
                        </div>
                    </div>
                    
                </form>
                </div>

                <div className="row">
                    <Beds beds={beds} />
                </div>
                <div className="row">
                    <button className="btn btn-danger" onClick={event=> this.onDeleteClicked(event)}>Delete Ward</button>
                </div>
            </div>
        }
        else
        {
            return <div> </div>
        }
    }
}
