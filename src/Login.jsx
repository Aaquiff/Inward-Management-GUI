'use strict'

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Cookies from 'universal-cookie'
const cookies = new Cookies();

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state={
            username: '',
            password: ''
        }
    }

    onUsernameChanged(event){
        event.preventDefault();
        event.stopPropagation();
        this.setState({username: event.target.value})
    }

    onPasswordChanged(event){
        event.preventDefault();
        event.stopPropagation();
        this.setState({password: event.target.value})
    }

    onSubmit(event){
        event.preventDefault();
        event.stopPropagation();
        axios.post('http://localhost:3000/login',{
            username: this.state.username,
            password:this.state.password
        }).then((data)=>{
            cookies.set('token',data.data.token,{ path: '/'});
            alert(data.data.message)
            this.props.history.push("/");
        }).catch((data)=>{
            alert(data.data.message)
        })
    }

    render() {
        return <div className="text-center">
        <form className="form-signin">
            <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
            <label className="sr-only">Password</label>
            <input onChange={(event)=>this.onUsernameChanged(event)} type="text" className="form-control" placeholder="Username" required/>
            <label className="sr-only">Password</label>
            <input onChange={(event)=>this.onPasswordChanged(event)} type="password" className="form-control" placeholder="Password" required/>
            <button onClick={(event)=>{this.onSubmit(event)}} className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
        </form>
        </div>
    }

}