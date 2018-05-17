'use strict';

import React, {Component} from 'react';
import PropTypes from 'prop-types';

import User from './User.jsx';
import ListUsers from './ListUsers.jsx';

export default class Users extends Component {

    constructor(props) {
        super(props);
        this.state = {
            users: [
                { id: 123, name: 'Robin Uthappa'},
                { id: 456, name: 'Virat Kohli'}
            ]
        }
    }
    render() {
        return <div class='container'>
                <h3>Users</h3>
                <ListUsers users= {this.state.users}/>
            </div>;
    }
}
