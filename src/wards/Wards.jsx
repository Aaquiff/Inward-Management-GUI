'use strict'

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import AddWards from './AddWard.jsx';
import ListWards from './ListWards.jsx';
import Ward from './Ward.jsx';

import Cookies from 'universal-cookie'
const cookies = new Cookies();

var API_URL = 'http://localhost:3000/api';

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
        this.loadWards();
    }

    loadWards() {
        var config = {headers: {'x-access-token': cookies.get('token')}};
        axios.get(API_URL + `/wards`,  config)
            .then(res => {
                const wards = res.data;
                this.setState({
                    wards: wards
                });
            })
    }

    addWard(ward) {
        var config = {headers: {'x-access-token': cookies.get('token')}};
        axios.post(API_URL + `/wards`, ward, config
        ).then((data)=>{
            axios.get(API_URL + `/wards`, config)
            .then(res => {
                this.loadWards();
            });
        })
    }

    deleteWard(ward) {
        var config = {headers: {'x-access-token': cookies.get('token')}};
        axios.delete(API_URL + '/wards/'+ward.wardNo, config).then((data)=>{
            this.loadWards();
            this.setState({
                ward: {},
                beds: []
            });
        })
    }

    addBed(bed) {
        bed.wardNo = this.state.ward.wardNo;
        var config = {headers: {'x-access-token': cookies.get('token')}};
        axios.post(API_URL +`/beds`, bed, config
        ).then((data)=>{
            this.onView(this.state.ward)
        })
    }

    deleteBed(bed) {
        var config = {headers: {'x-access-token': cookies.get('token')}};
        axios.delete(API_URL + '/beds/'+bed.bedNo, config).then((data)=>{
            this.onView(this.state.ward);
            this.onView({});
        })
    }

    onView(ward) {
        var config = {headers: {'x-access-token': cookies.get('token')}};
        axios.get(API_URL + `/wards/`+ward.wardNo+'/beds', config)
        .then(res => {
            this.setState({ 
                ward: ward,
                beds: res.data 
            });
        });
    }

    render() {
        const {wards} = this.state.wards;
        return <div className="row">
                <div className="col-4">
                    <ListWards deleteWard={ward=> this.deleteWard(ward)} onView={ward=> this.onView(ward)} wards={this.state.wards} />
                </div>
                <div className="col-8">
                    <br/>
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