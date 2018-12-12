


var Auth = {

	setUser: function(userName, password) {
		localStorage.setItem("userName", userName);
		localStorage.setItem("password", password);
	},

	clearUser: function() {
		localStorage.clear();
	},

	isLoggedIn: function() {
		return this.userName() != null; 
	},

	userName: function() {
		return localStorage.getItem("userName");

	},

	password: function() {
		return localStorage.getItem("password");
	}


}


export default Auth