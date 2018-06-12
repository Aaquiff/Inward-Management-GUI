'use strict'

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import AddBed from './AddBed.jsx';
import ListBeds from './ListBeds.jsx';

export default class Beds extends Component {

    static get propTypes() {
        return {
            beds: PropTypes.array,
            addBed: PropTypes.func,
            deleteBed: PropTypes.func
        }
    }

    constructor(props) {
        super(props);
        const {wardNo} = this.props;
        this.state = {
            beds: []
        };
    }

    addBed(bed) {
        this.props.addBed(bed);
    }

    deleteBed(bed) {
        this.props.deleteBed(bed);
    }

    render() {
        const {beds} = this.props;
        return <div className="container">
            <br/>
            <div className="row">
                    <button type="button" className="btn btn-dark" data-toggle="modal" data-target="#newBedModal">New Bed</button>
            </div>
            <br/>
            <div className="row">
                <ListBeds deleteBed = {bed=> this.deleteBed(bed)} beds = {beds} />
            </div>

            <div className="modal fade" id="newBedModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">New Bed</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    <AddBed addBed = { bed=> this.addBed(bed) } />
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                </div>
                </div>
            </div>
            </div>
            
            
        </div>
    }
}