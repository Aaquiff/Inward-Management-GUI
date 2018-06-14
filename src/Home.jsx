import React, {Component} from 'react';

export default class Home extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return <div className="container-fluid">
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-4">Welcome to Inward Management System</h1>
                    <p className="lead"></p>
                </div>
            </div>
        </div>
    }
    }