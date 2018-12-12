import React from "react";
import { Link } from "react-router";




function RegisterUser(props) {
    return (
        <div>
            <h2>Register</h2>
            <form>
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

            <p>
                Already a user?

                <Link to="login">[Login]</Link>

                Login here.
            </p>
        </div>
    );
}














export default RegisterUser