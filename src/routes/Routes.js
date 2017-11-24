import React ,{ Component } from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';

import Home from '../components/Home'
import About from '../components/About';
import Contact from '../components/Contact';
import Login from '../components/Login';
import Logout from '../components/Logout';
import MovieDetail from '../components/MovieDetail';
import Dashboard from '../components/Dashboard';


class Routes extends Component {

    constructor(props){
        super(props);
        this.state = {
            loginStatus : props.loginStatus
        }
    }
    
    render() {

        return (
            <BrowserRouter>
                <div>
                    <nav className="navbar navbar-default">
                        <div className="container-fluid">
                            <div className="navbar-header">
                                <Link className="navbar-brand" to="/">Movie DB Application</Link>
                            </div>
                            <ul className="nav navbar-nav">
                                <li><Link to="/about">About Us</Link></li>
                                <li><Link to="/contact">Contact Us</Link></li>
                                    { 
                                        (this.state.loginStatus === 'success')
                                        ? <li><Link to="/logout">Logout</Link></li> 
                                        : <li><Link to="/login">Login</Link></li> 
                                    }
                                


                            </ul>
                        </div>
                    </nav>

                    <Route exact path="/" exact component={Home}/>
                    <Route path="/about" component={About}/>
                    <Route path="/contact" component={Contact}/>
                    <Route path="/login" component = {Login}/>
                    <Route path="/dashboard" component = {Dashboard}/>
                    <Route path="/logout" component={Logout}/>
                    <Route path="/moviedetail" component={MovieDetail}/>
                </div>
            </BrowserRouter>
        )
    }
}

export default Routes;
