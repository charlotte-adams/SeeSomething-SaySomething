"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require("react-router");

var _Contact = require("./Contact");

var _Contact2 = _interopRequireDefault(_Contact);

var _Home = require("./Home");

var _Home2 = _interopRequireDefault(_Home);

var _AdminUser = require("./AdminUser");

var _AdminUser2 = _interopRequireDefault(_AdminUser);

var _auth = require("../auth.js");

var _auth2 = _interopRequireDefault(_auth);

var _axios = require("axios");

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SinglePageApp = _react2.default.createClass({
    displayName: "SinglePageApp",

    render: function render() {
        return _react2.default.createElement(
            "div",
            { className: "SinglePageApp" },
            _react2.default.createElement("img", { src: "logo4.jpg", alt: "logo", className: "logo" }),
            _react2.default.createElement(
                "h1",
                null,
                "See Something, Say Something Washington State"
            ),
            this.renderMenu(),
            _react2.default.createElement(
                "div",
                { className: "content" },
                this.props.children && _react2.default.cloneElement(this.props.children, { onLogin: this.handleLogin,
                    onRegister: this.handleRegister,
                    authError: this.state.authError })
            )
        );
    },

    getInitialState: function getInitialState() {
        return { isLoggedIn: _auth2.default.isLoggedIn(), authError: null };
    },

    handleLogin: function handleLogin(event) {
        var _this = this;

        event.preventDefault();

        var User = event.target.userName.value;
        var password = event.target.password.value;

        _axios2.default.post('/login', { login: User, password: password }).then(function (response) {
            if (response.data.ok) {
                _auth2.default.setUser(User, password);
                _this.setState({ isLoggedIn: true, authError: null });
                _reactRouter.hashHistory.push('/');
            } else {
                _this.setState({ authError: response.data.message });
            }
        });
    },

    handleRegister: function handleRegister(event) {
        var _this2 = this;

        event.preventDefault();

        var user = event.target.userName.value;
        var password = event.target.password.value;
        var passwordConfirm = event.target.passwordConfirm.value;

        if (password !== passwordConfirm) {
            this.setState({ authError: "Passwords must match" });
        } else {
            _axios2.default.post('/register', { login: user, password: password }).then(function (response) {
                if (response.data.ok) {
                    _auth2.default.setUser(user, password);
                    _this2.setState({ isLoggedIn: true, authError: null });
                    _reactRouter.hashHistory.push('/');
                } else {
                    _this2.setState({ authError: response.data.message });
                }
            });
        }
    },

    handleLogout: function handleLogout() {
        _auth2.default.clearUser();

        this.setState({ isLoggedIn: false });

        _reactRouter.hashHistory.push('/');
    },

    renderMenu: function renderMenu() {
        if (this.state.isLoggedIn) {
            return this.renderAdminUserMenu();
        } else {
            return this.renderGuestMenu();
        }
    },

    renderGuestMenu: function renderGuestMenu() {
        return _react2.default.createElement(
            "ul",
            { className: "header" },
            _react2.default.createElement(
                "li",
                null,
                _react2.default.createElement(
                    _reactRouter.IndexLink,
                    { to: "/", activeClassName: "active" },
                    "Home"
                )
            ),
            _react2.default.createElement(
                "li",
                null,
                _react2.default.createElement(
                    _reactRouter.Link,
                    { to: "/contact", activeClassName: "active" },
                    "Contact"
                )
            ),
            _react2.default.createElement(
                "li",
                null,
                _react2.default.createElement(
                    _reactRouter.Link,
                    { to: "/seeSomething", activeClassName: "active" },
                    "SeeSomething"
                )
            ),
            _react2.default.createElement(
                "li",
                null,
                _react2.default.createElement(
                    _reactRouter.Link,
                    { to: "/saySomething", activeClassName: "active" },
                    "SaySomething"
                )
            ),
            _react2.default.createElement(
                "li",
                null,
                _react2.default.createElement(
                    _reactRouter.Link,
                    { to: "/adminUser", activeClassName: "active" },
                    "AdminUser"
                )
            )
        );
    },

    renderAdminUserMenu: function renderAdminUserMenu() {
        return _react2.default.createElement(
            "ul",
            { className: "header" },
            _react2.default.createElement(
                "li",
                null,
                _react2.default.createElement(
                    _reactRouter.IndexLink,
                    { to: "/", activeClassName: "active" },
                    "Home"
                )
            ),
            _react2.default.createElement(
                "li",
                null,
                _react2.default.createElement(
                    _reactRouter.Link,
                    { to: "/allCaseloads", activeClassName: "active" },
                    "AllCaseloads"
                )
            ),
            _react2.default.createElement(
                "li",
                null,
                _react2.default.createElement(
                    _reactRouter.Link,
                    { to: "/myCaseload", activeClassName: "active" },
                    "MyCaseload"
                )
            ),
            _react2.default.createElement(
                "li",
                null,
                _react2.default.createElement(
                    "a",
                    { href: "#", onClick: this.handleLogout },
                    "Logout"
                )
            )
        );
    }
});

exports.default = SinglePageApp;