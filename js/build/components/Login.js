"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require("react-router");

var _auth = require("../auth.js");

var _auth2 = _interopRequireDefault(_auth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Login(props) {
    return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(
            "h2",
            null,
            "Login"
        ),
        _react2.default.createElement(
            "form",
            { onSubmit: props.onLogin },
            _react2.default.createElement("input", { type: "text", placeholder: "username", name: "userName" }),
            _react2.default.createElement("br", null),
            _react2.default.createElement("input", { type: "password", placeholder: "password", name: "password" }),
            _react2.default.createElement("br", null),
            _react2.default.createElement("input", { type: "submit", value: "Log In" })
        ),
        props.authError && _react2.default.createElement(
            "p",
            { className: "error" },
            props.authError
        ),
        _react2.default.createElement(
            "p",
            null,
            "New to the site?",
            _react2.default.createElement(
                _reactRouter.Link,
                { to: "register" },
                "[Register]"
            ),
            "Register as a new user."
        )
    );
}

exports.default = Login;