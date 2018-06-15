import React from 'react';
import { render } from 'react-dom';
import axios from 'axios';
import Cookies from 'universal-cookie';

const cookies = new Cookies();
var API_URL = 'http://localhost:3000/api/';

export default class Prescriptions extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bht: props.match.params.bht,
            patientId: props.match.params.patientId,
            prescriptions: [],
            patient: null
        };
    }

    componentDidMount() {
        var config = { 
            headers: { 'x-access-token': cookies.get('token') } 
        };
        axios.get( API_URL+'prescriptions/'+this.state.bht+'/'+this.state.patientId , config)
        .then(res=>{
            this.setState({
                prescriptions: res.data
            });
        });
        axios.get( API_URL+'patients/'+this.state.patientId , config)
        .then(res=>{
            this.setState({
                prescriptions: res.data
            });
        });
    }

    render() {
        return (
            // <main role="main" class="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
                <div>
                    <h1>Hello</h1>
                    <h3>BHT No : {this.state.bht}</h3>
                    <h3>Patient ID : {this.state.patientId}</h3>
                </div>
            //</main>           
        );
    }
}