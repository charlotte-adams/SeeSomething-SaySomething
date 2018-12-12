"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Stuff(props) {
    return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(
            "h2",
            null,
            "Stuff"
        ),
        _react2.default.createElement(
            "p",
            null,
            "Here is some random stuff."
        ),
        _react2.default.createElement(
            "ol",
            null,
            _react2.default.createElement(
                "li",
                null,
                "Lorem"
            ),
            _react2.default.createElement(
                "li",
                null,
                "Ipsum"
            ),
            _react2.default.createElement(
                "li",
                null,
                "Dolor"
            ),
            _react2.default.createElement(
                "li",
                null,
                "Sit"
            ),
            _react2.default.createElement(
                "li",
                null,
                "Amet"
            )
        )
    );
}

exports.default = Stuff;