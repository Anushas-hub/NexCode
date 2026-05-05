import React, { useState } from "react";
import "./../styles/Signup.css";
import { useNavigate } from "react-router-dom";

function SignupPage() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: "",
    email: "",
    password: ""
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSignup = async () => {
    if (!form.username || !form.email || !form.password) {
      alert("All fields are required ⚠️");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("http://127.0.0.1:8000/api/signup/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.status === 201) {
        alert("Signup successful 🚀");

        // 🔥 STORE USER DATA
        localStorage.setItem("username", form.username);
        localStorage.setItem("isNewUser", "true");

        navigate("/dashboard");
      } else {
        alert(data.error || "Signup failed ❌");
      }

    } catch (err) {
      console.error(err);
      alert("Server not reachable ❌");
    }

    setLoading(false);
  };

  return (
    <div className="signup-container">

      <h1>Sign <span>Up</span></h1>

      <div className="signup-box">

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
          className="create-btn"
          onClick={handleSignup}
          disabled={loading}
        >
          {loading ? "Creating..." : "Create Account"}
        </button>

        <p className="login-text">
          Already have an account?
          <span onClick={() => navigate("/login")}> Log in</span>
        </p>

      </div>
    </div>
  );
}

export default SignupPage;