import React from 'react';
import { render } from 'react-dom';
import axios from 'axios';
import Cookies from 'universal-cookie';
import PrescriptionList from './prescriptionList';

const cookies = new Cookies();
var API_URL = 'http://localhost:3000/api/';


export default class Prescriptions extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bht: props.match.params.bht,
            patientId: props.match.params.patientId,
            prescriptions: [],
            patient: {}
        };
    }

    componentDidMount() {
        this.loadData();
    }

    loadData(){
        var config = {
            headers: { 'x-access-token': cookies.get('token') }
        };
        axios.get(API_URL + 'prescriptions/' + this.state.bht + '/' + this.state.patientId, config)
            .then(res => {
                const pres = res.data.data;
                this.setState({
                    prescriptions: pres
                });
            });
        
        axios.get(API_URL + 'patients/' + this.state.patientId, config)
        .then(res => {
            const patient = res.data;
            this.setState({
                patient: patient
            });
        });
    }

    render() {
        let header;
        if (this.state.patient != null) {
            header = (
                <h2>Prescriptions | <small>Patient: {this.state.patientId} | BHT: {this.state.bht}</small>
                </h2>
            )
        }
        else {
            header = (<h2>Prescriptions</h2>);
        }
        return (
            <main role="main" className="col-md-10 ml-sm-auto col-lg-10 pt-3 px-3">
                <div className="row">
                    <div className="col-md-7 col-lg-7">
                        {header}
                    </div>
                    <div className="col-md-2 col-lg-2">
                        <button type="button" className="btn btn-dark">Prescribe Drugs</button>
                    </div>
                </div>
                <div className="table-responsive">
                    <PrescriptionList prescriptions={this.state.prescriptions}/>                
                </div>
            </main>
        );
    }
}