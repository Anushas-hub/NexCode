import React, { useState } from "react";
import "./../styles/Login.css";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: "",
    email: "",
    password: ""
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value.trim()
    });
  };

  const handleLogin = async () => {
    if (!form.username || !form.email || !form.password) {
      alert("All fields required ⚠️");
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

      if (res.ok) {
        localStorage.setItem("username", data.username);
        navigate("/dashboard");
      } else {
        alert(data?.non_field_errors?.[0] || "Invalid credentials ❌");
      }

    } catch (err) {
      console.error(err);
      alert("Server error ❌");
    }

    setLoading(false);
  };

  return (
    <div className="login-container">
      <h1>Log <span>In</span></h1>

      <div className="login-box">

        <input
          name="username"
          placeholder="Username"
          onChange={handleChange}
        />

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
          className="primary-btn"
          onClick={handleLogin}
          disabled={loading}
        >
          {loading ? "Logging in..." : "Log In"}
        </button>

        <p className="switch-text">
          Don’t have an account?
          <span onClick={() => navigate("/signup")}> Sign up</span>
        </p>

      </div>
    </div>
  );
}

export default LoginPage;