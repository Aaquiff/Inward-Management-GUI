'use strict'

import React, {Component} from 'react';
import PropTypes from 'prop-types';

import User from './User.jsx';

export default class ListWards extends Component {

    static get proptypes() {
        return PropTypes.array;
    }

    constructor(props) {
        super(props);
    }

    render() {
        const {users} = this.props;
        return <div class='container'>
                <table class='table table-bordered'>
                <thead>
                <tr>
                <th>ID</th>
                <th>Name</th>
                </tr>
                </thead>
                <tbody>
                {
                    users.map(user => {
                        return <User key={user.id} user={user}/>
                })
                }
                </tbody>
                </table>
            </div>;
    }

}