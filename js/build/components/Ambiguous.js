"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require("react-router-dom");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AmbiguousExample = function AmbiguousExample() {
  return _react2.default.createElement(
    _reactRouterDom.BrowserRouter,
    null,
    _react2.default.createElement(
      "div",
      null,
      _react2.default.createElement(
        "ul",
        null,
        _react2.default.createElement(
          "li",
          null,
          _react2.default.createElement(
            _reactRouterDom.Link,
            { to: "/about" },
            "About Us (static)"
          )
        ),
        _react2.default.createElement(
          "li",
          null,
          _react2.default.createElement(
            _reactRouterDom.Link,
            { to: "/company" },
            "Company (static)"
          )
        ),
        _react2.default.createElement(
          "li",
          null,
          _react2.default.createElement(
            _reactRouterDom.Link,
            { to: "/kim" },
            "Kim (dynamic)"
          )
        ),
        _react2.default.createElement(
          "li",
          null,
          _react2.default.createElement(
            _reactRouterDom.Link,
            { to: "/chris" },
            "Chris (dynamic)"
          )
        )
      ),
      _react2.default.createElement(
        _reactRouterDom.Switch,
        null,
        _react2.default.createElement(_reactRouterDom.Route, { path: "/about", component: About }),
        _react2.default.createElement(_reactRouterDom.Route, { path: "/company", component: Company }),
        _react2.default.createElement(_reactRouterDom.Route, { path: "/:user", component: User })
      )
    )
  );
};

var About = function About() {
  return _react2.default.createElement(
    "h2",
    null,
    "About"
  );
};
var Company = function Company() {
  return _react2.default.createElement(
    "h2",
    null,
    "Company"
  );
};
var User = function User(_ref) {
  var match = _ref.match;
  return _react2.default.createElement(
    "div",
    null,
    _react2.default.createElement(
      "h2",
      null,
      "User: ",
      match.params.user
    )
  );
};

exports.default = AmbiguousExample;