"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require("react-router");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ViewProfile(props) {
    return _react2.default.createElement(
        "div",
        { className: "ViewProfile" },
        _react2.default.createElement(
            "p",
            null,
            "Your bio here."
        ),
        _react2.default.createElement(
            _reactRouter.Link,
            { to: "/profile/edit" },
            "[Edit Profile]"
        )
    );
}

exports.default = ViewProfile;