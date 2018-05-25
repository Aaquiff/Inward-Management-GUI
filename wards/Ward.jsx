'use strict';

import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class Ward extends Component {

    static get propTypes() {
        return {
            deleteWard: PropTypes.func
        }
    }

    onClick(event, ward) {
        event.preventDefault();
        event.stopPropagation();
        this.props.deleteWard(ward);
    }

    constructor(props) {
        super(props);
    }

    render() {
        const {ward} = this.props;
        return <tr>
                <td>{ward.id}</td>
                <td>{ward.name}</td>
                <td><button onClick= {event => this.onClick(event, ward)} >Delete</button></td>
            </tr>
    }

}

// const Ward = props => {
//     const {ward} = props;
//     return <tr>
//             <td>{ward.id}</td>
//             <td>{ward.name}</td>
//             <button>Delete</button>
//         </tr>
// };

// export default Ward;