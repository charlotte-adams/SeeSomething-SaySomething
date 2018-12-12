import React from "react";
import { Link } from "react-router";
import Auth from '../auth.js';

function Register(props) {
    return (
        <div>
            <h2>Register</h2>
            <form onSubmit={props.onRegister}>
                <input type="text" placeholder="username" name="username" />
                <br />
                <input type="password" placeholder="password" name="password" />
                <br />
                <input
                    type="password"
                    placeholder="type password again"
                    name="passwordConfirm"
                />
                <br />
                <input type="submit" value="Register" />
            </form>


            { props.authError &&
                <p className ="error">{props.authError}</p>
            }

            <p>
                Already a user?

                <Link to="login">[Login]</Link>

                Login here.
            </p>
        </div>
    );
}

export default Register;
