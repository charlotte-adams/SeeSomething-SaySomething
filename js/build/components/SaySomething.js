"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require("react-router");

var _axios = require("axios");

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SaySomething = _react2.default.createClass({
	displayName: "SaySomething",

	render: function render() {
		return _react2.default.createElement(
			"div",
			{ className: "SaySomething" },
			_react2.default.createElement(
				"h2",
				null,
				"REPORT what you have seen here..."
			),
			_react2.default.createElement("br", null),
			_react2.default.createElement(
				"form",
				{ onSubmit: this.handleSubmit },
				_react2.default.createElement(
					"div",
					null,
					"WHO are you reporting? ",
					_react2.default.createElement("br", null),
					_react2.default.createElement("label", null),
					_react2.default.createElement(
						"label",
						null,
						_react2.default.createElement("input", { type: "radio", name: "status" }),
						"Current Student"
					),
					_react2.default.createElement(
						"label",
						null,
						_react2.default.createElement("input", { type: "radio", name: "status" }),
						"Alumni"
					),
					_react2.default.createElement(
						"label",
						null,
						_react2.default.createElement("input", { type: "radio", name: "status" }),
						"Staff"
					),
					_react2.default.createElement(
						"label",
						null,
						_react2.default.createElement("input", { type: "radio", name: "status" }),
						"Other",
						_react2.default.createElement("br", null),
						_react2.default.createElement("br", null)
					),
					_react2.default.createElement(
						"label",
						null,
						"First name"
					),
					_react2.default.createElement("input", { type: "text", placeholder: "Enter the first name" }),
					_react2.default.createElement("br", null),
					_react2.default.createElement(
						"label",
						null,
						"Last name"
					),
					_react2.default.createElement("input", { type: "text", placeholder: "Enter the last name" }),
					_react2.default.createElement("br", null),
					_react2.default.createElement("br", null)
				),
				_react2.default.createElement(
					"label",
					null,
					"Which SCHOOL are they associated with?"
				),
				_react2.default.createElement("br", null),
				_react2.default.createElement(
					"select",
					null,
					_react2.default.createElement(
						"option",
						null,
						"Puyallup High School"
					),
					_react2.default.createElement(
						"option",
						null,
						"Sumner High School"
					),
					_react2.default.createElement(
						"option",
						null,
						"Rogers High School"
					),
					_react2.default.createElement(
						"option",
						null,
						"Enumclaw High School"
					),
					_react2.default.createElement(
						"option",
						null,
						"Orting High SCHOOL"
					),
					_react2.default.createElement(
						"option",
						null,
						"Stadium High School"
					),
					_react2.default.createElement(
						"option",
						null,
						"Federal Way High School"
					),
					_react2.default.createElement(
						"option",
						null,
						"Highline High School"
					)
				),
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				_react2.default.createElement(
					"label",
					null,
					"Which SCHOOL is being THREATENED?"
				),
				_react2.default.createElement("br", null),
				_react2.default.createElement(
					"select",
					{ name: "school" },
					_react2.default.createElement(
						"option",
						null,
						"Puyallup High School"
					),
					_react2.default.createElement(
						"option",
						null,
						"Sumner High School"
					),
					_react2.default.createElement(
						"option",
						null,
						"Rogers High School"
					),
					_react2.default.createElement(
						"option",
						null,
						"Enumclaw High School"
					),
					_react2.default.createElement(
						"option",
						null,
						"Orting High SCHOOL"
					),
					_react2.default.createElement(
						"option",
						null,
						"Stadium High School"
					),
					_react2.default.createElement(
						"option",
						null,
						"Federal Way High School"
					),
					_react2.default.createElement(
						"option",
						null,
						"Highline High School"
					)
				),
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				"Perceived THREAT LEVEL?",
				_react2.default.createElement("br", null),
				_react2.default.createElement(
					"select",
					{ name: "threat_category" },
					_react2.default.createElement(
						"option",
						null,
						"low"
					),
					_react2.default.createElement(
						"option",
						null,
						"med"
					),
					_react2.default.createElement(
						"option",
						null,
						"high"
					),
					_react2.default.createElement(
						"option",
						null,
						"immenent"
					)
				),
				_react2.default.createElement(
					"div",
					null,
					"Are more people involved?",
					_react2.default.createElement("input", { type: "checkbox" }),
					" no ",
					_react2.default.createElement("br", null),
					_react2.default.createElement("input", { type: "checkbox" }),
					" yes ",
					_react2.default.createElement("br", null),
					"WHO?",
					_react2.default.createElement(
						"label",
						null,
						_react2.default.createElement("input", { type: "radio", name: "status" }),
						"Current Student"
					),
					_react2.default.createElement(
						"label",
						null,
						_react2.default.createElement("input", { type: "radio", name: "status" }),
						"Alumni"
					),
					_react2.default.createElement(
						"label",
						null,
						_react2.default.createElement("input", { type: "radio", name: "status" }),
						"Staff"
					),
					_react2.default.createElement(
						"label",
						null,
						_react2.default.createElement("input", { type: "radio", name: "status" }),
						"Other",
						_react2.default.createElement("br", null),
						_react2.default.createElement("br", null)
					),
					_react2.default.createElement(
						"label",
						null,
						"First name"
					),
					_react2.default.createElement("input", { type: "text", placeholder: "Enter the first name" }),
					_react2.default.createElement("br", null),
					_react2.default.createElement(
						"label",
						null,
						"Last name"
					),
					_react2.default.createElement("input", { type: "text", placeholder: "Enter the last name" }),
					_react2.default.createElement("br", null),
					_react2.default.createElement("br", null),
					"WHO?",
					_react2.default.createElement(
						"label",
						null,
						_react2.default.createElement("input", { type: "radio", name: "status" }),
						"Current Student"
					),
					_react2.default.createElement(
						"label",
						null,
						_react2.default.createElement("input", { type: "radio", name: "status" }),
						"Alumni"
					),
					_react2.default.createElement(
						"label",
						null,
						_react2.default.createElement("input", { type: "radio", name: "status" }),
						"Staff"
					),
					_react2.default.createElement(
						"label",
						null,
						_react2.default.createElement("input", { type: "radio", name: "status" }),
						"Other",
						_react2.default.createElement("br", null),
						_react2.default.createElement("br", null)
					),
					_react2.default.createElement(
						"label",
						null,
						"Which SCHOOL are they associated with?"
					),
					_react2.default.createElement("br", null),
					_react2.default.createElement(
						"select",
						null,
						_react2.default.createElement(
							"option",
							null,
							"Puyallup High School"
						),
						_react2.default.createElement(
							"option",
							null,
							"Sumner High School"
						),
						_react2.default.createElement(
							"option",
							null,
							"Rogers High School"
						),
						_react2.default.createElement(
							"option",
							null,
							"Enumclaw High School"
						),
						_react2.default.createElement(
							"option",
							null,
							"Orting High SCHOOL"
						),
						_react2.default.createElement(
							"option",
							null,
							"Stadium High School"
						),
						_react2.default.createElement(
							"option",
							null,
							"Federal Way High School"
						),
						_react2.default.createElement(
							"option",
							null,
							"Highline High School"
						)
					),
					_react2.default.createElement("br", null),
					_react2.default.createElement("br", null),
					_react2.default.createElement(
						"label",
						null,
						"First name"
					),
					_react2.default.createElement("input", { type: "text", placeholder: "Enter the first name" }),
					_react2.default.createElement("br", null),
					_react2.default.createElement(
						"label",
						null,
						"Last name"
					),
					_react2.default.createElement("input", { type: "text", placeholder: "Enter the last name" }),
					_react2.default.createElement("br", null),
					_react2.default.createElement("br", null)
				),
				_react2.default.createElement(
					"label",
					null,
					"Which SCHOOL are they associated with?"
				),
				_react2.default.createElement("br", null),
				_react2.default.createElement(
					"select",
					null,
					_react2.default.createElement(
						"option",
						null,
						"Puyallup High School"
					),
					_react2.default.createElement(
						"option",
						null,
						"Sumner High School"
					),
					_react2.default.createElement(
						"option",
						null,
						"Rogers High School"
					),
					_react2.default.createElement(
						"option",
						null,
						"Enumclaw High School"
					),
					_react2.default.createElement(
						"option",
						null,
						"Orting High SCHOOL"
					),
					_react2.default.createElement(
						"option",
						null,
						"Stadium High School"
					),
					_react2.default.createElement(
						"option",
						null,
						"Federal Way High School"
					),
					_react2.default.createElement(
						"option",
						null,
						"Highline High School"
					)
				),
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				_react2.default.createElement(
					"div",
					{ className: "textarea" },
					_react2.default.createElement(
						"textarea",
						{ name: "message", rows: "10", cols: "40" },
						"Make your detailed report here..."
					),
					_react2.default.createElement("br", null),
					_react2.default.createElement("br", null),
					_react2.default.createElement("input", { type: "submit", value: "Submit Report" })
				)
			)
		);
	},

	handleSubmit: function handleSubmit(event) {
		event.preventDefault();

		var postData = {
			school: event.target.school.value,
			message: event.target.message.value,
			threat_category: event.target.threat_category.value
		};

		_axios2.default.post('/addMessage', postData).then(function (response) {
			_reactRouter.hashHistory.push('/');
		});
	}
});

exports.default = SaySomething;