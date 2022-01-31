import React from "react";
import "./dashboard.css";

function DashboardPage() {
  return (
    <div className="page-wrapper" id="dashboard-page">
      <img
        src="https://whatstheirnetworth.com/wp-content/uploads/2021/08/Brian-Shaw-Net-Worth.jpg"
        alt="4x Worlds Strongest Man - Brian Shaw"
        className="user-profile-image"
      />
      <h2>
        Welcome back,
        <br />
        Brian
      </h2>
      <div className="problems-container">
        <h3>Strongman</h3>
        <section>
          <h3>Problems</h3>
          <h4>Hip, Back, Bicep</h4>
        </section>
        <button>Update</button>
      </div>
      <div>
        <h2>Schedule Session</h2>
        <button>Schedule</button>
      </div>
    </div>
  );
}

export default DashboardPage;