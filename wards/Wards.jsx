'use strict'

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import Ward from './Ward.jsx'
import AddWards from './AddWard.jsx';
import ListWards from './ListWards.jsx';

export default class Wards extends Component {

    constructor(props) {
        super(props);
        this.state = {
            wards: []
        };
    }

    componentDidMount() {
        axios.get(`http://localhost:3000/wards`)
            .then(res => {
                const wards = res.data;
                this.setState({ wards });
            })
    }

    addWard(ward) {
        console.log(JSON.stringify(ward));
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
                this.setState({ wards });
                console.log('Deleted ' + JSON.stringify(ward))
            })
        })
    }

    render() {
        const {wards} = this.state.wards;
        return <div>
            <div className="form-group">
                    <button type="button" className="btn btn-dark" data-toggle="modal" data-target="#exampleModal">Add</button>
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
            
            <ListWards deleteWard = {ward=> this.deleteWard(ward)} wards = {this.state.wards} />
        </div>
    }
}