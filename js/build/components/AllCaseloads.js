"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require("react-router");

var _axios = require("axios");

var _axios2 = _interopRequireDefault(_axios);

var _auth = require("../auth.js");

var _auth2 = _interopRequireDefault(_auth);

var _SaySomething = require("./SaySomething.js");

var _SaySomething2 = _interopRequireDefault(_SaySomething);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AllCaseloads = _react2.default.createClass({
	displayName: "AllCaseloads",

	render: function render() {
		return _react2.default.createElement(
			"div",
			{ className: "AllCaseloads" },
			_react2.default.createElement(
				"h2",
				null,
				"WELCOME TO ALL MESSAGES "
			),
			_react2.default.createElement(
				"div",
				{ className: "messages" },
				this.state.messages.map(this.renderMessage)
			)
		);
	},

	getInitialState: function getInitialState() {
		return { messages: [] };
	},

	componentDidMount: function componentDidMount() {
		var _this = this;

		_axios2.default.post("/allPosts", {
			login: _auth2.default.userName(),
			password: _auth2.default.password()

		}).then(function (response) {
			console.log(response);
			_this.setState({ messages: response.data.rows });
		});
	},

	// {"message_id":3,"message":"pow!","threat_category":"immenent","school":"Sumner High School","post_time":"2018-06-08 21:54:32"}
	// messageObj.message, messageObj.thread_category, messageObk.school, messageObj.post_time
	renderMessage: function renderMessage(messageObj, index) {
		var _this2 = this;

		return _react2.default.createElement(
			"div",
			{ className: "message" },
			_react2.default.createElement(
				"p",
				null,
				" ",
				messageObj.school
			),
			_react2.default.createElement(
				"p",
				null,
				" ",
				messageObj.threat_category
			),
			_react2.default.createElement(
				"p",
				null,
				" ",
				messageObj.message
			),
			_react2.default.createElement(
				"p",
				null,
				" ",
				messageObj.post_time
			),
			_react2.default.createElement(
				"button",
				{ onClick: function onClick() {
						return _this2.handleSubmit(messageObj.message_id);
					} },
				"Add to Caseload"
			)
		);

		// return <Message key={index} MessageInfo={messageObj} />;
	},

	handleSubmit: function handleSubmit(message_id) {
		alert("Adding to caseload:" + message_id);
		var postData = {
			login: _auth2.default.userName(),
			password: _auth2.default.password(),
			message_id: message_id
		};

		_axios2.default.post('/addToMyCaseload', postData).then(function (response) {
			hashHistory.push('/');
		});
	}
});

exports.default = AllCaseloads;

// {JSON.stringify(messageObj)}