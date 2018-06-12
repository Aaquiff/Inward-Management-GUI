'use strict'

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import AddWards from './AddWard.jsx';
import ListWards from './ListWards.jsx';
import Ward from './Ward.jsx';

export default class Wards extends Component {

    constructor(props) {
        super(props);
        this.state = {
            wards: [],
            ward: {},
            beds: []
        };
    }

    componentDidMount() {
        axios.get(`http://localhost:3000/wards`)
            .then(res => {
                const wards = res.data;
                this.setState({ 
                    wards: wards
                });
            })
    }

    addWard(ward) {
        axios.post(`http://localhost:3000/wards`, ward
        ).then((data)=>{
            axios.get(`http://localhost:3000/wards`)
            .then(res => {
                const wards = res.data;
                this.setState({ wards });
            })
        })
    }

    deleteWard(ward) {
        
        axios.delete('http://localhost:3000/wards/'+ward.wardNo).then((data)=>{
            axios.get(`http://localhost:3000/wards`)
            .then(res => {
                const wards = res.data;
                this.setState({ ward: {} });
            })
        })
    }

    addBed(bed) {
        bed.wardNo = this.state.ward.wardNo;
        console.log(bed);
        axios.post(`http://localhost:3000/beds`, bed
        ).then((data)=>{
            this.onView(this.state.ward)
        })
    }

    deleteBed(bed) {
        
        axios.delete('http://localhost:3000/beds/'+bed.bedNo).then((data)=>{
            this.onView(this.state.ward)
        })
    }

    onView(ward) {
        axios.get(`http://localhost:3000/wards/`+ward.wardNo+'/beds')
        .then(res => {
            this.setState({ 
                ward: ward,
                beds: res.data 
            });
        });
    }

    render() {
        const {wards} = this.state.wards;
        return<div className="row">
                <div className="col-4">
                    <ListWards deleteWard={ward=> this.deleteWard(ward)} onView={ward=> this.onView(ward)} wards={this.state.wards} />
                </div>
                <div className="col-8">

                    {/*Start of modal*/}
                                <div className="row">

                    <div className="form-group">
                            <button type="button" className="btn btn-dark" data-toggle="modal" data-target="#exampleModal">New Ward</button>
                    </div>

                    <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">New Ward</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <AddWards addWard = { ward=> this.addWard(ward) } />
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>

                    {/*End of Modal*/}
                    <div className="row">
                    <Ward ward={this.state.ward} beds={this.state.beds} deleteWard={ward => this.deleteWard(ward)} addBed={bed=> this.addBed(bed)} deleteBed={bed=> this.deleteBed(bed) }/>
                    </div>
                </div>
        </div>
    }
}