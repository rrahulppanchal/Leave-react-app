import React from "react";
import { Link } from "react-router-dom";
import "./navbar.scss";

function Navbar() {
  return (
    <div className="container">
      <div className="nav-container">
        <div className="logo">
          <Link
            style={{ color: "#dcd7c9", textDecoration: "none" }}
            to="/my-leaves/:id"
          >
            <img src="#" alt="logo" />
          </Link>
        </div>
        <div className="nav-links">
          <Link
            style={{ color: "#dcd7c9", textDecoration: "none" }}
            to="/my-leaves/:id"
          >
            <span>My Leave</span>
          </Link>
          <div className="user">
            <div className="dropdown">
              <button className="dropbtn">John Doe</button>
              <div className="dropdown-content">
                <Link
                  style={{ color: "#dcd7c9", textDecoration: "none" }}
                  to="/login"
                >
                  <span>Login</span>
                </Link>
                <Link
                  style={{ color: "#dcd7c9", textDecoration: "none" }}
                  to="/register"
                >
                  <span>Register</span>
                </Link>
                <span>Logout</span>
              </div>
            </div>
            <img
              src="https://www.citypng.com/public/uploads/small/11640168385jtmh7kpmvna5ddyynoxsjy5leb1nmpvqooaavkrjmt9zs7vtvuqi4lcwofkzsaejalxn7ggpim4hkg0wbwtzsrp1ldijzbdbsj5z.png"
              alt="user"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
