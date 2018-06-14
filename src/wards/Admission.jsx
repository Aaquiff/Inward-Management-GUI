import React, {Component} from 'react';
import axios from 'axios';

import Cookies from 'universal-cookie'

const cookies = new Cookies();

var API_URL = 'http://localhost:3000/api';

export default class Admission extends Component {

    constructor(props) {
        super(props);
        this.state = {
            admissions: []
        };
    }

    componentDidMount() {
        this.loadAdmissions();
    }

    loadAdmissions() {
        var config = {headers: {'x-access-token': cookies.get('token')}};
        axios.get(API_URL + `/admissions`, config)
            .then(res => {
                this.setState({
                    admissions: res.data
                });
            });
    }

    render() {
        console.log(this.state.admissions.length);
        return <table className="table">
                <thead>
                    <tr>
                        <th>BHT No</th>
                        <th>Patient ID</th>
                        <th>Ward No</th>
                        <th>Bed No</th>
                        <th>Admitted Date</th>
                    </tr>
                </thead>
            <tbody>
                {this.state.admissions.map((admission) => {
                    return <tr key={admission.BHTNo}>
                        <td>{admission.bhtNo}</td>
                        <td>{admission.patientId}</td>
                        <td>{admission.wardNo}</td>
                        <td>{admission.bedNo}</td>
                        <td>{admission.admittedDate}</td>
                    </tr>
                })}
            </tbody>
        </table>
    }

}