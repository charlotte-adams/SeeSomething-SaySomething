"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Contact(props) {
    return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(
            "h2",
            null,
            "GOT QUESTIONS FOR YOUR SPECIFIC SCHOOL? "
        ),
        _react2.default.createElement(
            "p",
            null,
            "The easiest thing to do is to check on our ",
            _react2.default.createElement(
                "a",
                { href: "http://unloop.edu" },
                "district-wide school directory"
            )
        )
    );
}

exports.default = Contact;