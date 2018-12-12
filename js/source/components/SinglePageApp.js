import React from "react";
import { IndexLink, Link, hashHistory } from "react-router";
import Contact from "./Contact";
import Home from "./Home";
import AdminUser from "./AdminUser";
import Auth from '../auth.js';
import axios from "axios";


var SinglePageApp = React.createClass({
    render: function () {
        return (
            <div className="SinglePageApp">
            <img src="logo4.jpg" alt="logo" className="logo"/>
                <h1>See Something, Say Something Washington State</h1>
                 {this.renderMenu()}

                 <div className="content">
                 {this.props.children &&
                    React.cloneElement (
                        this.props.children,
                        {onLogin: this.handleLogin,
                            onRegister: this.handleRegister,
                            authError: this.state.authError}

                        )
                }
            </div>
        </div>

        );
},

    getInitialState: function() {
        return { isLoggedIn: Auth.isLoggedIn(), authError: null };
    },


    handleLogin: function(event) {
        event.preventDefault() ;

        var User = event.target.userName.value;
        var password = event.target.password.value;
        
        axios
            .post ('/login', {login: User, password: password})
            .then(response => {
                if (response.data.ok) {
                   Auth.setUser (User, password);
                   this.setState({ isLoggedIn: true, authError: null});
                   hashHistory.push('/'); 
                } else {
                    this.setState({authError: response.data.message});
            
 
                }
            });
    },

handleRegister: function(event) {
    event.preventDefault();

    var user = event.target.userName.value;
    var password = event.target.password.value;
    var passwordConfirm = event.target.passwordConfirm.value;

    if (password !== passwordConfirm) {
        this.setState({ authError: "Passwords must match"});
    } else {
        axios
            .post('/register', {login: user, password: password})
            .then(response => {
                if (response.data.ok) {
                    Auth.setUser(user, password);
                    this.setState({isLoggedIn: true, authError: null});
                    hashHistory.push('/'); 
                } else { 
                    this.setState({authError: response.data.message});

                }
            });
    }
    },








    handleLogout: function() {
        Auth.clearUser(); 

        this.setState({ isLoggedIn: false });

        hashHistory.push('/');

    },

    renderMenu: function() {
        if (this.state.isLoggedIn) {
            return this.renderAdminUserMenu();
        } else { 
            return this.renderGuestMenu();
        }
    

    },


    renderGuestMenu: function () {
        return (
            <ul className="header">
                    <li>
                        <IndexLink to="/" activeClassName="active">
                            Home
                        </IndexLink>
                    </li>
                
                    <li>
                        <Link to="/contact" activeClassName="active">
                            Contact
                        </Link>
                    </li>
                     
                    <li>
                        <Link to="/seeSomething" activeClassName="active">
                            SeeSomething
                        </Link>
                    </li>
                    <li>
                        <Link to="/saySomething" activeClassName="active">
                            SaySomething
                        </Link>
                    </li>
                    <li>
                        <Link to="/adminUser" activeClassName="active">
                            AdminUser
                        </Link>
                    </li>
                </ul>
              
        );

},



    renderAdminUserMenu: function() {
        return (
            <ul className="header">
                    <li>
                        <IndexLink to="/" activeClassName="active">
                            Home
                        </IndexLink>
                    </li>
                    <li>
                        <Link to="/allCaseloads" activeClassName="active">
                            AllCaseloads 
                        </Link>
                    </li>
                    <li>
                        <Link to="/myCaseload" activeClassName="active">
                            MyCaseload
                        </Link>
                    </li>
                    <li>
                        <a href= "#" onClick={this.handleLogout}>Logout</a>
                    </li>
                </ul>
             
        );
    }
});



export default SinglePageApp
