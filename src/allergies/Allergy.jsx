import React, { Component } from 'react';

class Allergy extends Component {

  deletePerson(name){
    console.log('deleteus'+name);
  }

  render() {
    return (
      <li className="person">
        {this.props.algy.allergyName} <button type="button" onClick={this.deletePerson.bind(this, this.props.algy.allergyName)}>Delete</button>
      </li>
    );
  }
}

export default Allergy;