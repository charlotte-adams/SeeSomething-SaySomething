"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});


var Auth = {

	setUser: function setUser(userName, password) {
		localStorage.setItem("userName", userName);
		localStorage.setItem("password", password);
	},

	clearUser: function clearUser() {
		localStorage.clear();
	},

	isLoggedIn: function isLoggedIn() {
		return this.userName() != null;
	},

	userName: function userName() {
		return localStorage.getItem("userName");
	},

	password: function password() {
		return localStorage.getItem("password");
	}

};

exports.default = Auth;