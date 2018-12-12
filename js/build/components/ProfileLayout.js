"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _ViewProfile = require("./ViewProfile");

var _ViewProfile2 = _interopRequireDefault(_ViewProfile);

var _EditProfile = require("./EditProfile");

var _EditProfile2 = _interopRequireDefault(_EditProfile);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ProfileLayout(props) {
    return _react2.default.createElement(
        "div",
        { className: "ProfileLayout" },
        _react2.default.createElement(
            "h2",
            null,
            "Your Profile"
        ),
        props.children
    );
}

exports.default = ProfileLayout;