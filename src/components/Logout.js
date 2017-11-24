import React, { Component } from 'react';
class Logout extends Component {

    constructor(){
        super()
        localStorage.setItem("loginStatus","nothing");
        localStorage.removeItem("movieid");
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
