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
        var config = {headers: {'Access-Control-Allow-Origin': '*'}};

        axios.post('http://localhost:3000/login', {
            username: this.state.username,
            password:this.state.password
        },config).then((data)=>{
            cookies.set('token',data.data.token,{ path: '/'});
            cookies.set('user', data.data.user);
            this.props.history.push("/");
        }).catch((data)=>{
        })
    }

    render() {
        return <div className="container"><br/><div className="text-center">
        <form className="form-signin">
            <div className="form-group">
                <label className="sr-only">Password</label>
                <input onChange={(event)=>this.onUsernameChanged(event)} type="text" className="form-control" placeholder="Username" required/>
            </div>
            <div className="form-group">
                <label className="sr-only">Password</label>
                <input onChange={(event)=>this.onPasswordChanged(event)} type="password" className="form-control" placeholder="Password" required/>
            </div>
            <div className="form-group">
                <button onClick={(event)=>{this.onSubmit(event)}} className="btn btn-primary btn-block" type="submit">Sign in</button>
            </div>
        </form>
        </div>
        </div>
    }

}