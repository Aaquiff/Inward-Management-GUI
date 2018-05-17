'use strict';

import React from 'react';

const Ward = props => {
    const {ward} = props;
    return <tr>
            <td>{ward.id}</td>
            <td>{ward.name}</td>
        </tr>
};

export default Ward;