import React from "react";
import { Container, Row, Col, Card, Button, Dropdown } from "react-bootstrap";


export default function Outdoor() {

  return (
    <div>
      <div
        className="about-banner d-flex align-items-center justify-content-center text-white text-center"
        style={{ backgroundImage: `url("first_img.jpg")` }}
      >
        <h1 className="display-3 fw-bold">OUTDOOR</h1>
      </div>
             <section className="outdoor-section mt-5 py-5"id="next-section">
      <Container >
        <Row className="align-items-center">
          {/* Text Column */}
          <Col md={6} className="mb-4 mb-md-0">
            <h2 className="outdoor-title">Our Outdoor<br />Photography Style</h2>
            <p className="outdoor-subtitle">
              We specialize in natural light, candid moments / cinematic storytelling.
            </p>

            <Row>
              <Col xs={6}>
                <ul className="outdoor-list">
                  <li>Nature Portraits</li>
                  <li>Couple Shoots</li>
                  <li>Family Moments</li>
                  <li>Pre-wedding</li>
                  <li>Wildlife</li>
                  <li>Beach Shoots</li>
                  <li>Maternity Moments</li>
                </ul>
              </Col>
              <Col xs={6}>
                <ul className="outdoor-list">
                  <li>Birthday Shoots</li>
                  <li>Graduation Shoots</li>
                  <li>Pet Photography</li>
                  <li>Forest Trails</li>
                  <li>Sunset Portraits</li>
                  <li>Festive Occasions</li>
                  <li>Solo Shoots</li>
                </ul>
              </Col>
            </Row>
          </Col>

          {/* Image Column */}
          <Col md={6}>
            <div className="image-wrapper">
              <img
                src="first_img.jpg"
                alt="Outdoor Style"
                className="img-fluid rounded shadow" style={{ width: '100%', height: '400px', objectFit: 'cover' }}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>

              <div className="concepts-container">
      {/* Left Side */}
      <div className="left-section">
        <h2 className="title">Creative Concepts<br />for Outdoor Shoots</h2>
        <p className="subtitle">Insderatihons ciensering suinio ciemms</p>
        <div className="grid grid-left">
          <div className="concept-card lakeside">Lakeside Park<br /><span>Morning movie</span></div>
          <div className="concept-card forest">Forest Trail<br /><span>Midday</span></div>
          <div className="concept-card rooftop">City Rooftop<br /><span>Sunset</span></div>
          <div className="concept-card dunes">Desert Dunes<br /><span>Late afternoon</span></div>
        </div>
      </div>

      {/* Right Side */}
      <div className="right-section">
        <div className="grid grid-right">
          <div className="concept-card vintage">Vintage Picnic</div>
          <div className="concept-card elopement">Mountain Elopement</div>
          <div className="concept-card vibe">Costal Vibe</div>
          <div className="concept-card wildlife">Wildlife</div>
        </div>
      </div>
    </div>
         <section className="custom-portfolio">
      <h2 className="portfolio-title">Our Portfolio</h2>
      <div className="portfolio-columns">
        {/* Column 1 */}
        <div className="column">
          <img src="four.jpg" className="img-large" alt="1" />
          <img src="five.jpg" className="img-small" alt="2" />
        </div>
        {/* Column 2 */}
        <div className="column">
          <img src="four.jpg" className="img-small" alt="3" />
          <img src="second.jpg" className="img-medium" alt="4" />
        </div>
        {/* Column 3 */}
        <div className="column">
          <img src="four.jpg" className="img-medium" alt="5" />
          <img src="third.jpg" className="img-small" alt="6" />
        </div>
        {/* Column 4 */}
        <div className="column">
          <img src="second.jpg" className="img-large" alt="7" />
          <img src="five.jpg" className="img-small" alt="8" />
        </div>
      </div>
    </section>
    </div>
  );
}