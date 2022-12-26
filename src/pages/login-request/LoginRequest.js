import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import "./loginrequest.scss";

function LoginRequest() {
  return (
    <div className="container">
      <Navbar />
      <div className="leave">
        <h1>Login Requests</h1>
        <hr />
        <div className="page-titles">
          <span>Employee Name</span>
          <span>Email</span>
          <span>Position</span>
          <span>Action</span>
        </div>
        <div className="leave-data">
          <span>Name</span>
          <span>employee@mail.com</span>
          <span>Sick Leave</span>
          <span>
            <button>Accept</button>
            <button>Decline</button>
          </span>
        </div>
        <div className="leave-data">
          <span>Name</span>
          <span>employee@mail.com</span>
          <span>Sick Leave</span>
          <span>
            <button>Accept</button>
            <button>Decline</button>
          </span>
        </div>
        <div className="leave-data">
          <span>Name</span>
          <span>employee@mail.com</span>
          <span>Sick Leave</span>
          <span>
            <button>Accept</button>
            <button>Decline</button>
          </span>
        </div>
        <div className="leave-data">
          <span>Name</span>
          <span>employee@mail.com</span>
          <span>Sick Leave</span>
          <span>
            <button>Accept</button>
            <button>Decline</button>
          </span>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default LoginRequest;
