import React from "react";
import "./../styles/Signup.css";

function SignupPage() {
  return (
    <div className="signup-container">

      <h1>
        Sign <span>Up</span>
      </h1>

      <p className="subtitle">
        Create an account to start building faster with Nexcode.
      </p>

      <div className="signup-box">

        <div className="name-row">
          <input type="text" placeholder="First name" />
          <input type="text" placeholder="Last name" />
        </div>

        <input type="email" placeholder="Enter your email" />

        <input type="password" placeholder="Create a password" />

        <input type="password" placeholder="Confirm your password" />

        <div className="terms">
          <input type="checkbox" />
          <span>I agree to the Terms & Privacy Policy</span>
        </div>

        <button className="create-btn">Create Account</button>

        <div className="divider">OR</div>

        <button className="google-btn">Continue with Google</button>
        <button className="github-btn">Continue with GitHub</button>

        <p className="login-text">
          Already have an account? <span>Log in</span>
        </p>

      </div>

      {/* 🔥 BOTTOM BOXES (LIKE YOUR DESIGN) */}
      <div className="bottom-features">

        <div className="feature-box">
          <h4>🛡 Secure Registration</h4>
          <p>Your information is protected with enterprise-grade security.</p>
        </div>

        <div className="feature-box">
          <h4>⚡ Quick Setup</h4>
          <p>Create your account in seconds and start building.</p>
        </div>

        <div className="feature-box">
          <h4>🚀 Ready to Build</h4>
          <p>Get instant access to all Nexcode tools and features.</p>
        </div>

      </div>

    </div>
  );
}

export default SignupPage;