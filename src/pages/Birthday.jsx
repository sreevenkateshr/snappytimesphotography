import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; 
export default function Birthday() {
  
  return (

  
  
    <div>
      <div
        className="about-banner d-flex align-items-center justify-content-center text-white text-center"
        style={{ backgroundImage: `url("first_img.jpg")` }}
      >
        <h1 className="display-3 fw-bold">BIRTHDAY</h1>
      </div>

          <div className="container py-5 birthday-page" id="next-section">
      {/* Page Title and Quote Section */}
      

      {/* 1. Birthday Themes Showcase */}
     {/* 1. Theme Inspirations */}
<section className=" mt-5 mb-5">
  <h2 className="text-center mb-4">Theme Inspirations</h2>
  <div className="row g-4">
    <div className="col-md-4">
      <img
        src="five.jpg"
        className="img-fluid rounded object-fit-cover theme-image"
        style={{ width: "400px", height: "400px", objectFit: "cover", margin: "0 auto", display: "block" }}
        alt="Kids Theme"
      />
      <h5 className="text-center mt-2">Kids Theme</h5>
    </div>
    <div className="col-md-4">
      <img
        src="four.jpg"
        className="img-fluid rounded object-fit-cover theme-image"
        style={{ width: "400px", height: "400px", objectFit: "cover", margin: "0 auto", display: "block" }}
        alt="Cake Smash"
      />
      <h5 className="text-center mt-2">Cake Smash</h5>
    </div>
    <div className="col-md-4">
      <img
        src="third.jpg"
        className="img-fluid rounded object-fit-cover theme-image"
        style={{ width: "400px", height: "400px", objectFit: "cover", margin: "0 auto", display: "block" }}
        alt="Elegant Party"
      />
      <h5 className="text-center mt-2">Elegant Party</h5>
    </div>
  </div>
</section>

{/* 2. Featured Birthday Albums Carousel */}
   <section className="mb-5">
  <h2 className="text-center mb-4">Birthday Albums</h2>
  <div className="container">
    <div className="row justify-content-center">
      {/* Left Carousel */}
      <div className="col-md-6 mb-4 d-flex flex-column align-items-center carousel-wrapper">
        <Carousel
          interval={3000}
          fade
          className="w-75"
          controls={false}
          indicators={false}
        >
          <Carousel.Item>
            <img
              className="d-block mx-auto rounded shadow"
              src="second.jpg"
              alt="Aarav's Birthday"
              style={{ width: "400px", height: "600px", objectFit: "cover" }}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block mx-auto rounded shadow"
              src="third.jpg"
              alt="Aarav Album 2"
              style={{ width: "400px", height: "600px", objectFit: "cover" }}
            />
          </Carousel.Item>
        </Carousel>
        <h5 className="mt-2 text-center">Aarav's Birthday</h5>
      </div>

      {/* Right Carousel */}
      <div className="col-md-6 mb-4 d-flex flex-column align-items-center carousel-wrapper">
        <Carousel
          interval={3000}
          fade
          className="w-75"
          controls={false}
          indicators={false}
        >
          <Carousel.Item>
            <img
              className="d-block mx-auto rounded shadow"
              src="first_img.jpg"
              alt="Ramya's Birthday"
              style={{ width: "400px", height: "600px", objectFit: "cover" }}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block mx-auto rounded shadow"
              src="second.jpg"
              alt="Ramya Album 2"
              style={{ width: "400px", height: "600px", objectFit: "cover" }}
            />
          </Carousel.Item>
        </Carousel>
        <h5 className="mt-2 text-center">Ramya's Birthday</h5>
      </div>
    </div>
  </div>
</section>


{/* Auto sliding setup */}


<div className="text-center mb-5">
        <h2 className="display-5 fw-bold">Birthday Photography</h2>
        <blockquote className="blockquote mt-3">
          <p className="mb-0">"Every birthday is a fresh start — a new chance to create beautiful memories."</p>
          <footer className="blockquote-footer mt-2 footer-signature">Snappy Photography</footer>
        </blockquote>
      </div>
      {/* 3. Behind the Scenes */}
      <section className="mb-5">
        <h2 className="text-center mb-4">Behind the Scenes</h2>
        <div className="row">
          <div className="col-md-6">
            <video controls className="w-100 rounded">
              <source src="bts_video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="col-md-6 d-flex align-items-center">
            <p>We go the extra mile to make every birthday shoot feel magical. From colorful props to candid laughter – we capture it all authentically.</p>
          </div>
        </div>
      </section>

      {/* 4. Package Details */}
      <section className="mb-5">
        <h2 className="text-center mb-4">Birthday Photography Packages</h2>
        <div className="row g-4">
          <div className="col-md-4">
            <div className="card h-100 shadow">
              <div className="card-body text-center">
                <h5 className="card-title">Basic</h5>
                <p className="card-text">1 Hour | 25 Edited Photos | 1 Theme Setup</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100 shadow">
              <div className="card-body text-center">
                <h5 className="card-title">Premium</h5>
                <p className="card-text">2 Hours | 50 Edited Photos | Cake Smash | Props Included</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100 shadow">
              <div className="card-body text-center">
                <h5 className="card-title">Deluxe</h5>
                <p className="card-text">3+ Hours | 75+ Photos | Full Event Coverage | Cinematic Video</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FAQs */}
      <section className="mb-5">
        <h2 className="text-center mb-4">FAQs</h2>
        <div className="accordion" id="faqAccordion">
          <div className="accordion-item">
            <h2 className="accordion-header" id="faq1">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1">
                How early should I book the shoot?
              </button>
            </h2>
            <div id="collapse1" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
              <div className="accordion-body">
                Ideally, book your birthday shoot at least 2 weeks in advance to get your preferred date and time.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="faq2">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2">
                Do you provide props and decorations?
              </button>
            </h2>
            <div id="collapse2" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
              <div className="accordion-body">
                Yes, we offer themed props and decorations as part of our Premium and Deluxe packages.
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    </div>
  );
}