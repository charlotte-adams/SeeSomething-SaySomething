"use strict";

import React from "react";
import ReactDOM from "react-dom";
import {
	Router,
	Route,
	IndexRoute,
	IndexRedirect,
	hashHistory
} from "react-router";



import SinglePageApp from "./components/SinglePageApp";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Login from "./components/Login";
import Register from "./components/Register";
import AdminUser from "./components/AdminUser";
import SeeSomething from "./components/SeeSomething";
import SaySomething from "./components/SaySomething";
import MyCaseload from "./components/MyCaseload";
import AllCaseloads from "./components/AllCaseloads";
import Auth from './auth.js';

function requireAuth(nextState, replace) {
	if (!Auth.isLoggedIn()) {
		replace ('/login');
	}
}

function redirectToDashboard(nextState, replace) {
	if(Auth.isLoggedIn()) {
		replace ('/'); 
	}
}



// #/

ReactDOM.render(
	// The Router defines rules for what to render based on the url in the browser
	<Router history={hashHistory}>
		<Route path="/" component={SinglePageApp}>
			<IndexRoute component={Home} />
			<Route path="login" component={Login} onEnter={redirectToDashboard} />
			<Route path="register" component={Register} onEnter={redirectToDashboard}/>
			<Route path="seeSomething" component={SeeSomething} />
			<Route path="saySomething" component={SaySomething} />
			<Route path="contact" component={Contact} />
			<Route path="adminUser" component={AdminUser} />
			<Route path= "allCaseloads" component={AllCaseloads} />
			<Route path="myCaseload" component={MyCaseload} />
		</Route>
	</Router>,
	document.getElementById("app")
);
