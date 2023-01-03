import React from "react";

function Login(){
    return (
        <div className="login-form-container">
            
            <form>
            <div className="make-account-txt">
                <p>Don't have an account?</p>
                <a href="/signup" className="signup-from-login">Signup</a>
            </div>
            <h2 className="greeting">Welcome</h2>
            <div className="login-text">Login to continue</div>
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
                    <button id="login-btn" type="submit">Login</button>
                </div>
            </form>
        </div>
       
    )
}

export default Login;