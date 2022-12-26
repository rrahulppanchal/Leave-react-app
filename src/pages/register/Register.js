import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./register.scss";

function Register() {
  const [inputs, setInputs] = useState({
    eName: "",
    eEmail: "",
    eUsername: "",
    ePassword: "",
  });

  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8800/api/auth/register", inputs);
      navigate("/login");
    } catch (err) {
      setError(err.response.data);
    }
  };

  return (
    <div>
      <div className="register">
        <div className="main-register">
          <h1>Send Login Request</h1>
          <hr />
          <form>
            <input
              type="text"
              placeholder="Full Name"
              name="eName"
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Username"
              name="eUsername"
              onChange={handleChange}
            />
            <input
              type="email"
              placeholder="Email"
              name="eEmail"
              onChange={handleChange}
            />
            <input
              type="password"
              placeholder="Password"
              name="ePassword"
              onChange={handleChange}
            />
            <button onClick={handleSubmit}>Send</button>
            {error && <span>{error}</span>}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
