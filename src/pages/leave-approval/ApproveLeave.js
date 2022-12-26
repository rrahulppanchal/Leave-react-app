import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import "./approveleave.scss";

function ApproveLeave() {
  return (
    <div className="container">
      <Navbar />
      <div className="leaves">
        <h1>Approve leave</h1>
        <hr />
        <div className="page-titles">
          <span>Employee Name</span>
          <span>Leave Type</span>
          <span>Description</span>
          <span>Start-End Date</span>
          <span>No. Of Days</span>
          <span>Action</span>
        </div>
        <div className="leave-data">
          <span>Name</span>
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
            <button>Accept</button>
            <button>Decline</button>
          </span>
        </div>
        <div className="leave-data">
          <span>Name</span>
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
            <button>Accept</button>
            <button>Decline</button>
          </span>
        </div>
        <div className="leave-data">
          <span>Name</span>
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
            <button>Accept</button>
            <button>Decline</button>
          </span>
        </div>
        <div className="leave-data">
          <span>Name</span>
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
            <button>Accept</button>
            <button>Decline</button>
          </span>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ApproveLeave;
