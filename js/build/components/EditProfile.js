"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require("react-router");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EditProfile = _react2.default.createClass({
	displayName: "EditProfile",

	render: function render() {
		return _react2.default.createElement(
			"div",
			{ className: "EditProfile" },
			_react2.default.createElement(
				"form",
				{ onSubmit: this.handleSubmit },
				_react2.default.createElement("textarea", { name: "bio", placeholder: "Edit your bio" }),
				_react2.default.createElement("input", { type: "submit", value: "Save Changes" })
			)
		);
	},

	handleSubmit: function handleSubmit(event) {
		// redirect user to ViewProfile
		_reactRouter.hashHistory.push("/profile/view");

		// This would work too (because the /profile route has an IndexRedirect)
		// hashHistory.push("/profile");
	}
});

exports.default = EditProfile;