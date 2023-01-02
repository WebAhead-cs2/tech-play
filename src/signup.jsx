import React from "react";

function Signup(){
    return (
        <div className="login-form-container">
            
        <form>
        <h2 className="greeting">Register your account</h2>
        <div className="login-text">Fill the details bellow to submit register account.</div>
            <label><b>Email</b> </label>
            <div className="input-container">
                <input type="email" placeholder="Your email" />
                <i class="fa fa-envelope icon"></i>
            </div>
            <label><b>Username</b> </label>
            <div className="input-container">
                <input type="text" placeholder="Your username" />
                <i class="fa fa-user icon"></i>
            </div>
            <label><b>Password</b> </label>
            <div className="input-container">
                <input type="password" placeholder="Your password" />
                <i class="fa fa-lock icon"></i>
            </div>
            <div className="btn-container">
                <button id="login-btn" type="submit">SIGNUP</button>
            </div>

            <div className="make-account-txt">
            <p>Already have account?</p>
            <a href="/login" className="signup-from-login">Login</a>
        </div>
        </form>
    </div>
   


    )
}

export default Signup;