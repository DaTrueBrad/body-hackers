import "./contact.css";
import React from "react";
import { Link } from "react-router-dom";

function ContactPage() {
  return (
    <div className="page-wrapper">
      <h1>Contact Us</h1>
      <div className="button-container-hz">
        <a href="tel:9999999999"><button>Call us</button></a>
        <Link to="/register/pt1">
        <button>Schedule</button>
      </Link>
      </div>
      
      <h2>Location</h2>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3043.982134575929!2d-111.65318068424651!3d40.27614707210065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x874d9089d5072af1%3A0xf28859aa314a8660!2s3210%20N%20Canyon%20Rd%20%23%20307%2C%20Provo%2C%20UT%2084604!5e0!3m2!1sen!2sus!4v1644079972355!5m2!1sen!2sus"
        allowFullScreen=""
        loading="lazy"
      />
      <h4>
        3210 N Canyon Road <br />
        Provo, Ut 84604
      </h4>
      <a
        href="https://www.google.com/maps/place/3210+N+Canyon+Rd+%23+307,+Provo,+UT+84604/@40.2761471,-111.6531807,17z/data=!4m13!1m7!3m6!1s0x874d9089d5072af1:0xf28859aa314a8660!2s3210+N+Canyon+Rd+%23+307,+Provo,+UT+84604!3b1!8m2!3d40.276143!4d-111.650992!3m4!1s0x874d9089d5072af1:0xf28859aa314a8660!8m2!3d40.276143!4d-111.650992"
        target="_blank"
      >
        <button>Open Maps</button>
      </a>
      <span className="spacer"></span>
      <h2>Hours</h2>
      <table>
        {/* <colgroup>
          <col width="0" />
          <col width="80" />
        </colgroup> */}
        <tbody>
          <tr>
            <td>Monday</td>
            <td>9:00a - 6:00p</td>
          </tr>
          <tr>
            <td>Tuesday</td>
            <td>9:00a - 6:00p</td>
          </tr>
          <tr>
            <td>Wednesday</td>
            <td>9:00a - 6:00p</td>
          </tr>
          <tr>
            <td>Thursday</td>
            <td>9:00a - 6:00p</td>
          </tr>
          <tr>
            <td>Friday</td>
            <td>9:00a - 6:00p</td>
          </tr>
          <tr>
            <td>Saturday</td>
            <td>Closed</td>
          </tr>
          <tr>
            <td>Sunday</td>
            <td>Closed</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ContactPage;
