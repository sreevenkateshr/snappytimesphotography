import React from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Birthday() {
  const navigate=useNavigate();
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
                src="Kev22.webp"
                className="img-fluid rounded object-fit-cover theme-image"
                style={{
                  width: "400px",
                  height: "400px",
                  objectFit: "cover",
                  margin: "0 auto",
                  display: "block",
                }}
                alt="Kids Theme"
              />
              <h5 className="text-center mt-2">Kids Theme</h5>
            </div>
            <div className="col-md-4">
              <img
                src="Kev13.webp"
                className="img-fluid rounded object-fit-cover theme-image"
                style={{
                  width: "400px",
                  height: "400px",
                  objectFit: "cover",
                  margin: "0 auto",
                  display: "block",
                }}
                alt="Cake Smash"
              />
              <h5 className="text-center mt-2">Cake Smash</h5>
            </div>
            <div className="col-md-4">
              <img
                src="Kev8.webp"
                className="img-fluid rounded object-fit-cover theme-image"
                style={{
                  width: "400px",
                  height: "400px",
                  objectFit: "cover",
                  margin: "0 auto",
                  display: "block",
                }}
                alt="Elegant Party"
              />
              <h5 className="text-center mt-2">Elegant Party</h5>
            </div>
          </div>
        </section>

        {/* 2. Featured Birthday Albums Carousel */}
       <section className="mb-5">
  <h2 className="text-center mb-4">Birthday Albums</h2>

  {/* Kevin's Birthday */}
  <div className="container">
    <div className="row align-items-center">
      {/* Image First in Mobile */}
      <div className="col-md-6 order-1 order-md-2 mt-4 mt-md-0 text-center">
        <img
          src="/Kev3.webp"
          alt="Kevin Birthday"
          className="img-fluid img-height"
        />
      </div>

      {/* Text Content */}
      <div className="col-md-6 order-2 order-md-1 text-center text-md-start">
        <h2 className="fw-bold mb-3">Kevin's Birthday</h2>
        <p className="text-secondary mb-4">
          From giggles to endless energy, today we celebrate the little star who
          lights up every room with joy. May your day be filled with balloons,
          cakes, and all the magic your heart can hold. Happiest Birthday to our
          sunshine – the adventure has only just begun!
        </p>
        <div className="d-flex justify-content-center justify-content-md-start gap-3 mt-4">
          <button
            className="btn btn-outline-danger btn-lg rounded-pill shadow"
            onClick={() => navigate("/kevinalbum")}
          >
            Explore Albums
          </button>
          <button
            className="btn btn-outline-danger btn-lg rounded-pill shadow"
            onClick={() => navigate("/galleryseven")}
          >
            Explore Albums
          </button>
        </div>
      </div>
    </div>
  </div>

  {/* Arun's Birthday */}
  <div className="container my-5 p-3">
    <div className="row align-items-center">
      {/* Image First in Mobile */}
      <div className="col-md-6 order-1 order-md-1 mt-4 mt-md-0 text-center">
        <img
          src="/Kev19.webp"
          alt="Arun Birthday"
          className="img-fluid img-height"
        />
      </div>

      {/* Text Content */}
      <div className="col-md-6 order-2 order-md-2 text-center text-md-start">
        <h2 className="fw-bold mb-3">Arun's Birthday</h2>
        <p className="text-secondary mb-4">
          Tiny hands, big dreams, and the sweetest smile – that’s what makes you
          so special. On your birthday, may you always be surrounded by love,
          laughter, and the happiest surprises. Wishing you a day as bright and
          colorful as your imagination.
        </p>
        <div className="d-flex justify-content-center justify-content-md-start gap-3 mt-4">
          <button
            className="btn btn-outline-danger btn-lg rounded-pill shadow"
            onClick={() => navigate("/kevinalbum")}
          >
            Explore Albums
          </button>
          <button
            className="btn btn-outline-danger btn-lg rounded-pill shadow"
            onClick={() => navigate("/galleryseven")}
          >
            Explore Albums
          </button>
        </div>
      </div>
    </div>
  </div>
</section>


        {/* Auto sliding setup */}
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold">Birthday Photography</h2>
          <blockquote className="blockquote mt-3">
            <p className="mb-0">
              "Every birthday is a fresh start — a new chance to create
              beautiful memories."
            </p>
            <footer className="blockquote-footer mt-2 footer-signature">
              Snappy Photography
            </footer>
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
              <p>
                We go the extra mile to make every birthday shoot feel magical.
                From colorful props to candid laughter – we capture it all
                authentically.
              </p>
            </div>
          </div>
        </section>

        {/* 4. Package Details */}
        {/* <section className="mb-5">
          <h2 className="text-center mb-4">Birthday Photography Packages</h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card h-100 shadow">
                <div className="card-body text-center">
                  <h5 className="card-title">Basic</h5>
                  <p className="card-text">
                    1 Hour | 25 Edited Photos | 1 Theme Setup
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 shadow">
                <div className="card-body text-center">
                  <h5 className="card-title">Premium</h5>
                  <p className="card-text">
                    2 Hours | 50 Edited Photos | Cake Smash | Props Included
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 shadow">
                <div className="card-body text-center">
                  <h5 className="card-title">Deluxe</h5>
                  <p className="card-text">
                    3+ Hours | 75+ Photos | Full Event Coverage | Cinematic
                    Video
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        {/* 5. FAQs */}
        <section className="mb-5">
          <h2 className="text-center mb-4">FAQs</h2>
          <div className="accordion" id="faqAccordion">
            <div className="accordion-item">
              <h2 className="accordion-header" id="faq1">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse1"
                >
                  How early should I book the shoot?
                </button>
              </h2>
              <div
                id="collapse1"
                className="accordion-collapse collapse"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">
                  Ideally, book your birthday shoot at least 2 weeks in advance
                  to get your preferred date and time.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="faq2">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse2"
                >
                  Do you provide props and decorations?
                </button>
              </h2>
              <div
                id="collapse2"
                className="accordion-collapse collapse"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">
                  Yes, we offer themed props and decorations as part of our
                  Premium and Deluxe packages.
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
