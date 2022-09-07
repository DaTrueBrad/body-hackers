import React from "react";
import './landing.css'
import {useFormik} from 'formik'
import logo from "../../assets/bigLogo.png"
import About from "./About";

function LandingPage() {
  
  return (
    <div className="page-wrapper">
      <section className="img-intro">
        <h2>Welcome to<br></br>the</h2>
        <img src={logo} alt="" />
        <h3>Deep Tissue Athletic Massage</h3>
        <h3>Click Below to Schedule<br></br>Your session Today!</h3>
        <button>Schedule</button>
      </section>
      <About />
      <script src='https://square.site/appointments/buyer/widget/95vt9gnzky1vyb/L4TJTCSBD8YRQ.js'></script>
    </div>
  );
}

export default LandingPage;
