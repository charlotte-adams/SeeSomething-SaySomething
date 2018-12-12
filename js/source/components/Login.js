import React from "react";
import { Link } from "react-router";
import Auth from '../auth.js';


function Login(props) {
    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={props.onLogin}>
                <input type="text" placeholder="username" name="userName" />
                <br />
                <input type="password" placeholder="password" name="password" />
                <br />
                <input type="submit" value="Log In" />
            </form>


            {props.authError &&
                <p className ="error">{props.authError}</p>
            }

            <p>
                New to the site?

                <Link to="register">[Register]</Link>

                Register as a new user.
            </p>

        </div>
    );
}

export default Login;
