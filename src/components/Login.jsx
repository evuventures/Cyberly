import React from 'react';
import './Login.css'; // Create a CSS file for styling

const Login = () => {
    return (
        <div className="login-container">
            <div className="login-card">
                <h2 className="login-title">Welcome Back</h2>
                <form className="login-form">
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" placeholder="Enter your email" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" placeholder="Enter your password" required />
                    </div>
                    <button type="submit" className="login-button">Login</button>
                </form>
                <p className="signup-link">
                    Don't have an account? <a href="/signup">Sign up</a>
                </p>
            </div>
        </div>
    );
};

export default Login;