import React from 'react';
import { Container, Row, Col, Form, Button } from "react-bootstrap";

export default function Contact() {
  return (
    <div>
      <div
        className="about-banner d-flex align-items-center justify-content-center text-white text-center"
        style={{ backgroundImage: `url("first_img.jpg")` }}
      >
        <h1 className="display-3 fw-bold">CONTACT</h1>
      </div>
         <section className="contact-section"id="next-section">
      <div className="container-fluid px-0">
        <div className="row gx-0 align-items-center">
          {/* Left - Form */}
          <div className="col-md-6 contact-left px-5 py-5 text-dark">
            <h1 className="display-5 fw-bold mb-3">Let’s Connect</h1>
            <p className="mb-4 fw-semibold">
              <span className="fw-bold">Ready</span> to capture some memories? Get in touch with <span className="fw-bold">Snappy Photography</span> below.
            </p>

            <form>
              <input className="form-control mt-5 mb-4 rounded-3 input-custom" placeholder="Name" required />
              <input className="form-control mt-5 mb-4 rounded-3 input-custom" type="email" placeholder="Email" required />
             
  <input
  className="form-control mt-5 mb-4 rounded-3 input-custom"
  type="date"
  placeholder="Select event date"
  required
/>

              <textarea className="form-control mt-5 mb-4 rounded-3 input-custom" rows="3" placeholder="Message"></textarea>
              <button className="btn btn-dark px-4 py-2 rounded-3 w-100">Send Message</button>
            </form>

            <div className="mt-4 small">
              <strong>📍 Location:</strong> 123 Lane Street, Chennai, TN - 600001
            </div>
          </div>

          {/* Right - Image */}
          <div className="col-md-6 contact-right d-none d-md-block">
            <img src="third.jpg" alt="Contact Visual" className="img-fluid contact-image" />
          </div>
        </div>
      </div>
    </section>
    </div>
  );
}
