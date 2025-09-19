import React from "react";
import { Container, Row, Col, Card, Button, Dropdown } from "react-bootstrap";
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


const concepts = [
  { title: "Garden Party", subtitle: "Morning", img: "./second.jpg" },
  { title: "Beach Celebration", subtitle: "Afternoon", img: "./third.jpg" },
  { title: "Park Picnic", subtitle: "Evening", img: "./four.jpg" },
  { title: "Fairy Lights Setup", subtitle: "Night", img: "./five.jpg" },
];

const rightConcepts = [
  { title: "Vintage Theme", subtitle: "Classic Setup", img: "./second.jpg" },
  { title: "Balloon Escape", subtitle: "Hilltop View", img: "./first_img.jpg" },
  { title: "Seaside Vibe", subtitle: "Coastal Breeze", img: "./four.jpg" },
  { title: "Wildlife Party", subtitle: "Nature Inspired", img: "./five.jpg" },
];

export default function Outdoor() {
  useEffect(() => {
    Aos.init({ duration: 800, easing: "ease-in-out", once: true });
  }   , []);

  return (
    <div>
      <div
        className="about-banner d-flex align-items-center justify-content-center text-white text-center"
        style={{ backgroundImage: `url("first_img.jpg")` }}
      >
        <h1 className="display-3 fw-bold">OUTDOOR</h1>
      </div>
             <section className="outdoor-section mt-5 py-5"id="next-section">
      <Container    data-aos="fade-up">
        <Row className="align-items-center">
  {/* Text Column */}
  <Col md={6} className="mb-4 mb-md-0">
    <h2 className="outdoor-title">Birthday Outdoor<br />Photography</h2>
    <p className="outdoor-subtitle">
      Celebrate your special day with creative outdoor birthday themes and natural light photography.
    </p>

    <Row>
      <Col xs={6}>
        <ul className="outdoor-list">
          <li>Garden Party</li>
          <li>Balloon Setup</li>
          <li>Beach Celebration</li>
          <li>Fairy Lights</li>
          <li>Picnic Style</li>
          <li>Floral Backdrop</li>
          <li>Poolside Party</li>
        </ul>
      </Col>
      <Col xs={6}>
        <ul className="outdoor-list">
          <li>Cake Smash</li>
          <li>Kids’ Play Area</li>
          <li>Family Moments</li>
          <li>Sunset Vibes</li>
          <li>Night Sparkles</li>
          <li>Friends Group Shots</li>
          <li>Theme-based Decor</li>
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

              <div className="concepts-container" data-aos="fade-up">
      {/* Left Side */}
      <div className="left-section">
      <h2 className="title">Birthday Outdoor<br />Photography</h2>
      <p className="subtitle">Capturing your special day with natural light and creative themes</p>
      <div className="grid grid-left">
        {concepts.map((item, index) => (
          <div
            key={index}
            className="concept-card"
            style={{ backgroundImage: `url(${item.img})` }}
          >
            {item.title}
            <br />
            <span>{item.subtitle}</span>
          </div>
        ))}
      </div>
    </div>


      {/* Right Side */}
      <div className="right-section">
      <div className="grid grid-right">
        {rightConcepts.map((item, index) => (
          <div
            key={index}
            className="concept-card"
            style={{ backgroundImage: `url(${item.img})` }}
          >
            {item.title}
            <br />
            <span>{item.subtitle}</span>
          </div>
        ))}
      </div>
    </div>
    </div>
         <section className="custom-portfolio" data-aos="fade-up">
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