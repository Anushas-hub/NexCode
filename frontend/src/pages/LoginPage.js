import React, { useState } from "react";
import "./../styles/Login.css";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = async () => {
    if (!form.email || !form.password) {
      alert("All fields are required ⚠️");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("http://127.0.0.1:8000/api/login/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.status === 200) {
        alert("Login successful 🚀");
        navigate("/dashboard");   // ✅ FIXED
      } else {
        alert(data.error || "Login failed ❌");
      }

    } catch (err) {
      console.error(err);
      alert("Server not reachable ❌");
    }

    setLoading(false);
  };

  // 🔥 SOCIAL LOGIN
  const handleGoogleLogin = () => {
    window.location.href = "http://127.0.0.1:8000/auth/google/";
  };

  const handleGithubLogin = () => {
    window.location.href = "http://127.0.0.1:8000/auth/github/";
  };

  return (
    <div className="login-container">

      <h1>Log <span>In</span></h1>

      <div className="login-box">

        <input
          name="email"
          placeholder="Email"
          onChange={handleChange}
        />

        <input
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleChange}
        />

        <button
          className="login-btn"
          onClick={handleLogin}
          disabled={loading}
        >
          {loading ? "Logging in..." : "Log In"}
        </button>

        <div className="divider">or continue with</div>

        <button className="google-btn" onClick={handleGoogleLogin}>
          Continue with Google
        </button>

        <button className="github-btn" onClick={handleGithubLogin}>
          Continue with GitHub
        </button>

        <p className="signup-text">
          Don’t have an account?
          <span onClick={() => navigate("/signup")}> Sign up</span>
        </p>

      </div>
    </div>
  );
}

export default LoginPage;