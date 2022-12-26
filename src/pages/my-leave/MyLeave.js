import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { Link } from "react-router-dom";
import "./myleave.scss";

function MyLeave() {
  return (
    <div className="container">
      <Navbar />
      <div className="myleave">
        <h1>My Leaves</h1>
        <hr />
        <div className="link-conatainer">
          <h2>
            <Link
              style={{ color: "#3ea6ff", textDecoration: "none" }}
              to="/request-leave"
            >
              Request Leave
            </Link>
          </h2>
        </div>

        <div className="page-titles">
          <span>Leave Type</span>
          <span>Description</span>
          <span>Start-End Date</span>
          <span>No. Of Days</span>
          <span>Status</span>
        </div>
        <div className="leave-data">
          <span>Sick Leave</span>
          <span>High Fever</span>
          <span>
            <div className="leave-dates">
              <p>
                S - <span>22-06-2022</span>
              </p>
              <p>
                E - <span>24-06-2022</span>
              </p>
            </div>
          </span>
          <span>2</span>
          <span>
            <h3>Pending</h3>
          </span>
        </div>
        <div className="leave-data">
          <span>Sick Leave</span>
          <span>High Fever</span>
          <span>
            <div className="leave-dates">
              <p>
                S - <span>22-06-2022</span>
              </p>
              <p>
                E - <span>24-06-2022</span>
              </p>
            </div>
          </span>
          <span>2</span>
          <span>
            <h3>Declined</h3>
          </span>
        </div>
        <div className="leave-data">
          <span>Sick Leave</span>
          <span>High Fever</span>
          <span>
            <div className="leave-dates">
              <p>
                S - <span>22-06-2022</span>
              </p>
              <p>
                E - <span>24-06-2022</span>
              </p>
            </div>
          </span>
          <span>2</span>
          <span>
            <h3>Approved</h3>
          </span>
        </div>
        <div className="leave-data">
          <span>Sick Leave</span>
          <span>High Fever</span>
          <span>
            <div className="leave-dates">
              <p>
                S - <span>22-06-2022</span>
              </p>
              <p>
                E - <span>24-06-2022</span>
              </p>
            </div>
          </span>
          <span>2</span>
          <span>
            <h3>Approved</h3>
          </span>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default MyLeave;
