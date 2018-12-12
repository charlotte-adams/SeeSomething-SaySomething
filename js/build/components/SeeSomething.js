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

function SeeSomething(props) {
    return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(
            "h2",
            null,
            "WHAT HAVE YOU SEEN?"
        ),
        _react2.default.createElement(
            "p",
            null,
            "Have you seen or heard someone BULLYING another?"
        ),
        _react2.default.createElement(
            "p",
            null,
            "Have you heard that a peer has PLANS TO SHOOT UP YOUR SCHOOL?"
        ),
        _react2.default.createElement(
            "p",
            null,
            "Have you seen a NEGATIVE change in a peer's SOCIAL MEDIA PLATFORM?"
        ),
        _react2.default.createElement(
            "p",
            null,
            "Have you seen/heard that a fellow student has ACCESS TO GUNS?"
        ),
        _react2.default.createElement(
            "p",
            null,
            "Have you noticed a breakup between two classmates and one is DEPRESSED/WITHDRAWN?"
        ),
        _react2.default.createElement(
            "p",
            null,
            "Have you seen/heard that a boyfriend is ABUSING/CONTROLLING his girlfriend?"
        ),
        _react2.default.createElement(
            "p",
            null,
            "Have you heard there is going to be a FIGHT  between two people or groups of people?"
        ),
        _react2.default.createElement(
            _reactRouter.Link,
            { to: "/saySomething" },
            "[Make Anonymous Report Here]"
        )
    );
}

exports.default = SeeSomething;