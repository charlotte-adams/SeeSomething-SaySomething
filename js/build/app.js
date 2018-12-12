"use strict";

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactDom = require("react-dom");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouter = require("react-router");

var _SinglePageApp = require("./components/SinglePageApp");

var _SinglePageApp2 = _interopRequireDefault(_SinglePageApp);

var _Home = require("./components/Home");

var _Home2 = _interopRequireDefault(_Home);

var _Contact = require("./components/Contact");

var _Contact2 = _interopRequireDefault(_Contact);

var _Login = require("./components/Login");

var _Login2 = _interopRequireDefault(_Login);

var _Register = require("./components/Register");

var _Register2 = _interopRequireDefault(_Register);

var _AdminUser = require("./components/AdminUser");

var _AdminUser2 = _interopRequireDefault(_AdminUser);

var _SeeSomething = require("./components/SeeSomething");

var _SeeSomething2 = _interopRequireDefault(_SeeSomething);

var _SaySomething = require("./components/SaySomething");

var _SaySomething2 = _interopRequireDefault(_SaySomething);

var _MyCaseload = require("./components/MyCaseload");

var _MyCaseload2 = _interopRequireDefault(_MyCaseload);

var _AllCaseloads = require("./components/AllCaseloads");

var _AllCaseloads2 = _interopRequireDefault(_AllCaseloads);

var _auth = require("./auth.js");

var _auth2 = _interopRequireDefault(_auth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function requireAuth(nextState, replace) {
	if (!_auth2.default.isLoggedIn()) {
		replace('/login');
	}
}

function redirectToDashboard(nextState, replace) {
	if (_auth2.default.isLoggedIn()) {
		replace('/');
	}
}

// #/

_reactDom2.default.render(
// The Router defines rules for what to render based on the url in the browser
_react2.default.createElement(
	_reactRouter.Router,
	{ history: _reactRouter.hashHistory },
	_react2.default.createElement(
		_reactRouter.Route,
		{ path: "/", component: _SinglePageApp2.default },
		_react2.default.createElement(_reactRouter.IndexRoute, { component: _Home2.default }),
		_react2.default.createElement(_reactRouter.Route, { path: "login", component: _Login2.default, onEnter: redirectToDashboard }),
		_react2.default.createElement(_reactRouter.Route, { path: "register", component: _Register2.default, onEnter: redirectToDashboard }),
		_react2.default.createElement(_reactRouter.Route, { path: "seeSomething", component: _SeeSomething2.default }),
		_react2.default.createElement(_reactRouter.Route, { path: "saySomething", component: _SaySomething2.default }),
		_react2.default.createElement(_reactRouter.Route, { path: "contact", component: _Contact2.default }),
		_react2.default.createElement(_reactRouter.Route, { path: "adminUser", component: _AdminUser2.default }),
		_react2.default.createElement(_reactRouter.Route, { path: "allCaseloads", component: _AllCaseloads2.default }),
		_react2.default.createElement(_reactRouter.Route, { path: "myCaseload", component: _MyCaseload2.default })
	)
), document.getElementById("app"));