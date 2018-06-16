'use strict'

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Cookies from 'universal-cookie';

const cookies = new Cookies();
export default class AddPrescription extends Component {
    static get propTypes() {
        return {
            patientId: PropTypes.string,
            bhtNo: PropTypes.string,
            AddPrescription: PropTypes.func
        }
    }

    constructor(props) {
        super(props);
        const {patientId} = this.props;
        const {bhtNo} = this.props;
        this.state = {
            newPrescription: {}
        };
    }

    AddPrescription(priscription) {
        this.props.AddPrescription(priscription);
    }

    handleSubmit(e){

            this.setState({newPrescription:{
                patientId: this.props.patientId,
                bhtNo: this.props.bhtNo,
                prescribed_by: cookies.get('user.name'),
                drugs: [
                    {
                        drugName: this.refs.dr1.value,
                        dosage: this.refs.do1.value,
                        frequency: this.refs.fr1.value,
                    },
                    {
                        drugName: this.refs.dr2.value,
                        dosage: this.refs.do2.value,
                        frequency: this.refs.fr2.value,
                    },
                    {
                        drugName: this.refs.dr3.value,
                        dosage: this.refs.do3.value,
                        frequency: this.refs.fr3.value,
                    }
                ]
                    
            }}, function(){
                this.props.AddPrescription(this.state.newPrescription);
            })
        
        
        e.preventDefault();
    }

    render() {
        return <div>
        <br/>
        <h5>Add Drugs</h5> 
        <form onSubmit={this.handleSubmit.bind(this)}>
            <div>
                <label>From</label>
                <input type="date" ref="from" min="2017-06-16"/>
                <label>To</label>
                <input type="date" ref="to" min="2017-06-16"/>
                <table className="table table-striped table-sm">
                    <thead>
                        <tr>
                            <th>Drug</th>
                            <th>Dosage</th>
                            <th>Frequency</th>                            
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>
                                <select className="form-control" type="text" ref="dr1">
                                <option>Drug1</option>
                                <option>Drug2</option>
                                <option>Drug3</option>
                                <option>Drug4</option>
                                <option>Drug5</option>
                                </select>
                            </th>
                            <th>
                                <select className="form-control" type="text" ref="do1">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>0.5</option>
                                </select>
                            </th>
                            <th>
                                <select className="form-control" type="text" ref="fr1">
                                <option>Once a Day</option>
                                <option>Twise a Day</option>
                                <option>3 Times per Day</option>
                                <option>Once a 6h</option>
                                </select>
                            </th>                            
                        </tr>
                        <tr>
                            <th>
                                <select className="form-control" type="text" ref="dr2">
                                <option>Drug1</option>
                                <option>Drug2</option>
                                <option>Drug3</option>
                                <option>Drug4</option>
                                <option>Drug5</option>
                                </select>
                            </th>
                            <th>
                                <select className="form-control" type="text" ref="do2">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>0.5</option>
                                </select>
                            </th>
                            <th>
                                <select className="form-control" type="text" ref="fr2">
                                <option>Once a Day</option>
                                <option>Twise a Day</option>
                                <option>3 Times per Day</option>
                                <option>Once a 6h</option>
                                </select>
                            </th>                            
                        </tr>
                        <tr>
                            <th>
                                <select className="form-control" type="text" ref="dr3">
                                <option>Drug1</option>
                                <option>Drug2</option>
                                <option>Drug3</option>
                                <option>Drug4</option>
                                <option>Drug5</option>
                                </select>
                            </th>
                            <th>
                                <select className="form-control" type="text" ref="do3">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>0.5</option>
                                </select>
                            </th>
                            <th>
                                <select className="form-control" type="text" ref="fr3">
                                <option>Once a Day</option>
                                <option>Twise a Day</option>
                                <option>3 Times per Day</option>
                                <option>Once a 6h</option>
                                </select>
                            </th>                            
                        </tr>                        
                    </tbody>    
                </table>
                <input type="submit" value="Prescribe Drugs" className="btn btn-dark"/>
                </div>
                </form>
            </div>
    }
}