import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';

import Cookies from 'universal-cookie'

const cookies = new Cookies();

var API_URL = 'http://localhost:3000/api';

export default class TransferHist extends Component {

    constructor(props) {
        super(props);
        this.state = {
            hist: []
        };
    }

    componentDidMount() {
        this.loadHist();
    }

    loadHist() {
        var config = { headers: { 'x-access-token': cookies.get('token') } };
        axios.get(API_URL + `/inttransfers`, config)
            .then(res => {
                this.setState({
                    hist: res.data
                });
            });
    }

    render() {
        return <table className="table">
            <thead>
                <tr>
                    <th>Ward No</th>
                    <th>Transfer Report</th>
                    <th>Transfer Reason</th>
                    <th>Treatment</th>
                    <th>Remarks</th>
                </tr>
            </thead>
            <tbody>
                {this.state.hist.map((hist) => {
                    return <tr key={hist.transferId}>
                        <td>{hist.transferWard}</td>
                        <td>{hist.transferReport}</td>
                        <td>{hist.transferReason}</td>
                        <td>{hist.treatment}</td>
                        <td>{hist.remarks}</td>
                    </tr>
                })}
            </tbody>
        </table>
    }

}