"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require("react-router");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// this route needs work...it's in process...

function MyCaseload(props) {
	return _react2.default.createElement(
		"div",
		null,
		_react2.default.createElement(
			"h2",
			null,
			"Welcome to your caseload"
		),
		_react2.default.createElement(
			"p",
			null,
			"Hello"
		)
	);
}
// ,

// 	getInitialState: function() {
// 		return { messages: [] };

// },

// componentDidMount: function() {
// 	axios
// 		.post("/myCaseload", {
// 			login: Auth.userName(),
// 			password: Auth.password()

// 		})
// 		.then(response => {
// 			console.log(response);
// 			this.setState({messages: response.data.rows});
// 		});
// }

exports.default = MyCaseload;