import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Dashboard from './Dashboard';

class Login extends React.Component {

    constructor(props) {
        super(props);
        const getLoginStatus = localStorage.getItem("loginStatus");
        if(getLoginStatus === "success") {
            <Redirect to="/dashboard" />;
        }
        this.state = {
            username        :   '',
            password        :   '',
            formValid       :   false,
            loginSuccess    :   false
        };
    }

    handleUserInput = (event) => {

        let validForm = false;
        let name = event.target.name;
        let value = event.target.value;

        var regex = /^[a-zA-Z]*$/;
        if (regex.test(value)) {
            this.setState({
                formValid : true
            });
        }else{
            this.setState({
                formValid : false
            });
        }
        this.setState({
            [name]: value
        });
    }

    handleLogin = (event) => {

        const getState = this.state.formValid;
        if(getState){

            localStorage.setItem("username",this.state.username);
            localStorage.setItem("loginStatus","success");
            this.props.history.push('/dashboard');
            
        }else{
            alert("Enter valid Username & Password");
        }
    }
    render() {
        return (
            <div className="container-fluid LoginForm">
                <div className="row col-md-12 form-horizontal">
                    <div className="form-group">
                        <label className="control-label col-sm-2">User Name </label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" value={this.state.username} placeholder="Enter Email" name="username" onChange={this.handleUserInput} autocomplete="off" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="control-label col-sm-2">Password</label>
                        <div className="col-sm-10">
                            <input type="password" className="form-control" value={this.state.password} placeholder="Enter password" name="password" onChange={this.handleUserInput} autocomplete="off" />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-offset-2 col-sm-10">
                            <input type="submit" className="btn btn-sm btn-primary" onClick={this.handleLogin} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;
