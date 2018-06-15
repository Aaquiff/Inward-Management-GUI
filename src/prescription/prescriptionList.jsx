'use strict'
import React from 'react';
import PropTypes from 'prop-types';

export default class PrescriptionList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            prescriptions: []
        };
        
    }

    render(){
        const {prescriptions} = this.props;        
        return(
            <table className="table table-striped table-sm">
                <thead>
                    <tr>
                        <th>From</th>
                        <th>To</th>
                        <th>Prescribe By</th>
                        <th>Drugs</th>                                
                    </tr>
                </thead>
                <tbody>
                    {
                        prescriptions.map(p=>{
                            return <tr>
                                <th>{p.start_date}</th>
                                <th>{p.end_date}</th>
                                <th>{p.prescribed_by}</th>
                                <th>{p.drugs.map(d=>{
                                    return <div className="row">
                                        <div className="row">{d.drugName} | {d.dosage} | {d.frequency}</div>                                        
                                    </div>
                                })}
                                </th>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        );        
    }
}