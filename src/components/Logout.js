import React, { Component } from 'react';
class Logout extends Component {

    constructor(){
        super()
        localStorage.removeItem("username");
        localStorage.setItem("loginStatus","nothing");
    }
    render() {
        return (
            <div className="container-fluid LoginForm">
                    <p><center>You have been successfully logout from application.</center></p>
            </div>
        );
    }
}

export default Logout;
