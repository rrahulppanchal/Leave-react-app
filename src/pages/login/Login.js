import { React, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./login.scss";

function Login() {
  const [inputs, setInputs] = useState({
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
      await axios.post("http://localhost:8800/api/auth/login", inputs);
      navigate("/my-leaves/:id");
    } catch (err) {
      setError(err.response.data);
    }
  };

  return (
    <div>
      <div className="login">
        <div className="main-login">
          <h1>Login</h1>
          <hr />
          <form>
            <input
              type="test"
              placeholder="Username"
              name="eUsername"
              onChange={handleChange}
            />
            <input
              type="password"
              placeholder="Password"
              name="ePassword"
              onChange={handleChange}
            />
            <button onClick={handleSubmit}>Login</button>
            {error && <span>{error}</span>}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
