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

        // 🔥 SMART USERNAME HANDLING
        const existingUsername = localStorage.getItem("username");

        const finalUsername =
          data.username || existingUsername || "User";

        localStorage.setItem("username", finalUsername);
        localStorage.setItem("isNewUser", "false");

        navigate("/dashboard");
      } else {
        alert(data.error || "Login failed ❌");
      }

    } catch (err) {
      console.error(err);
      alert("Server not reachable ❌");
    }

    setLoading(false);
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

        <p className="signup-text">
          Don’t have an account?
          <span onClick={() => navigate("/signup")}> Sign up</span>
        </p>

      </div>
    </div>
  );
}

export default LoginPage;