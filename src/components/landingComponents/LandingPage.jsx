import React from "react";
import './landing.css'
import {useFormik} from 'formik'
import logo from "../../assets/logo.png"
import About from "./About";

function LandingPage() {
  // const theme = useTheme();
  // console.log(theme.colors.brand[800]);
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
    </div>
  );
}

export default LandingPage;
