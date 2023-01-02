import React from "react";

function Login(){
    return (
        <div className="login-form-container">
            
            <form>
            <h2 className="greeting">Welcome</h2>
            <p className="login-text">Login to continue</p>
                <div className="input-container">
                    <label><b>Your username</b> </label>
                    <i class="fa fa-user icon"></i>
                    <input type="text" placeholder="Username" />
                </div>
                <div className="input-container">
                    <label><b>Your password</b> </label>
                    <i class="fa fa-lock icon"></i>
                    <input type="password" placeholder="Password" />
                </div>
                <div className="btn-container">
                    <button id="login-btn" type="submit">Login</button>
                </div>
            </form>
        </div>
       
    )
}

export default Login;