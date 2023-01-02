import React from "react";

function Signup(){
    return (
        <form className="form">
            <label>Email</label>
            <input type="email" placeholder="Email" />
            <label>Username</label>
            <input type="text" placeholder="Username" />
            <label>Password</label>
            <input type="password" placeholder="Password" />
            <button type="submit">Register</button>
        </form>

    )
}

export default Signup;