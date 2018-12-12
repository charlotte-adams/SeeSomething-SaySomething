"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require("react-router");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function RegisterUser(props) {
    return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(
            "h2",
            null,
            "Register"
        ),
        _react2.default.createElement(
            "form",
            null,
            _react2.default.createElement("input", { type: "text", placeholder: "username", name: "username" }),
            _react2.default.createElement("br", null),
            _react2.default.createElement("input", { type: "password", placeholder: "password", name: "password" }),
            _react2.default.createElement("br", null),
            _react2.default.createElement("input", {
                type: "password",
                placeholder: "type password again",
                name: "passwordConfirm"
            }),
            _react2.default.createElement("br", null),
            _react2.default.createElement("input", { type: "submit", value: "Register" })
        ),
        _react2.default.createElement(
            "p",
            null,
            "Already a user?",
            _react2.default.createElement(
                _reactRouter.Link,
                { to: "login" },
                "[Login]"
            ),
            "Login here."
        )
    );
}

exports.default = RegisterUser;