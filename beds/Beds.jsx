'use strict'

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import AddBed from './AddBed.jsx';
import ListBeds from './ListBeds.jsx';

export default class Beds extends Component {

    constructor(props) {
        super(props);
        this.state = {
            beds: []
        };
    }

    componentDidMount() {
        axios.get(`http://localhost:3000/beds`)
            .then(res => {
                const beds = res.data;
                this.setState({ beds });
            })
    }

    addBed(bed) {
        axios.post(`http://localhost:3000/beds`, bed
        ).then((data)=>{
            axios.get(`http://localhost:3000/beds`)
            .then(res => {
                const beds = res.data;
                this.setState({ beds });
            })
        })
    }

    deleteBed(bed) {
        
        axios.delete('http://localhost:3000/beds/'+bed.bedNo).then((data)=>{
            axios.get(`http://localhost:3000/beds`)
            .then(res => {
                const beds = res.data;
                this.setState({ beds });
                console.log('Deleted ' + JSON.stringify(bed))
            })
        })
    }

    render() {
        const {beds} = this.state.beds;
        return <div>
            <div className="form-group">
                    <button type="button" className="btn btn-dark" data-toggle="modal" data-target="#exampleModal">Add</button>
            </div>
            
            <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
            
            <ListBeds deleteBed = {bed=> this.deleteBed(bed)} beds = {this.state.beds} />
        </div>
    }
}