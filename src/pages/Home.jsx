import React, { useState, useEffect,useRef } from 'react';
import Slider from "react-slick";

import '../App.css'; // optional, for custom styles

const WeddingPhotography = () => {
  const testimonials = [
  {
    id: 1,
    image: "https://placehold.co/100x100/FFC0CB/FFFFFF?text=Pooja",
    text: "The pictures turned out beautiful! We got the complimentary frame & magazine...",
    name: "POOJA ELANGOVAN",
  },
  {
    id: 2,
    image: "https://placehold.co/100x100/ADD8E6/FFFFFF?text=Mansoor",
    text: "Thank you so much for such a beautiful collection of photos...",
    name: "MANSOOR KHAN",
  },
  {
    id: 3,
    image: "https://placehold.co/100x100/90EE90/FFFFFF?text=Dikshitha",
    text: "Best work! Best team! Excellent workmanship! Delivered on time.",
    name: "DIKSHITHA A CHANDRASEKAR",
  },
  {
    id: 4,
    image: "https://placehold.co/100x100/FFD700/FFFFFF?text=Rina",
    text: "I am definitely gonna come back for outdoor shoots and will recommend...",
    name: "RINA",
  },
];


const images = [
  "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
];

const [centerIndex, setCenterIndex] = useState(2);

useEffect(() => {
  const interval = setInterval(() => {
    setCenterIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, 4000);
  return () => clearInterval(interval);
}, []);

const getIndex = (offset) =>
  (centerIndex + offset + images.length) % images.length;

 

  return (
    <div  id="next-section" className="wedding-photography bg-light">
      {/* Section 1: Hero with Image and Text */}
      <div className="container-fluid px-0">
  <div className="row g-0 align-items-center">
    {/* Left image with no padding or margin */}
    <div className="col-md-6">
      <img
        src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80"
        alt="Wedding"
        className="img-fluid img-custom w-100 h-60 object-fit-cover"
        style={{ maxHeight: "100vh" }}
      />
    </div>

    {/* Right content with elegant style */}
    <div className="col-md-6 d-flex flex-column justify-content-center align-items-start p-5 animate-slide-in">
  <h2 className="display-4 fw-bold mb-4" style={{ fontFamily: "Georgia, serif", color: "#000000ff" }}>
    Elegant Wedding Moments
  </h2>
  <p className="lead text-secondary" style={{ fontFamily: "'Open Sans', sans-serif" }}>
    Let your moments unfold naturally. Our photography captures the charm, laughter, and emotions of your wedding without interruptions — letting your day flow as beautifully as your story.
  </p>
  <a href="#" className="btn btn-danger btn-lg mt-3 rounded-pill shadow">
    Explore Gallery
  </a>
</div>

  </div>
</div>

      {/* Section 2: Full-width Container with Text and Image */}
              <div className="gallery-container bg-white ">
      {/* Left Tall Image */}
      <div className="image-box tall-frame">
        <img
          src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=800&q=80"
          alt="Left"
          className="tall-image"
        />
      </div>

      {/* Center Square Image + Text */}
     <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
  {/* Image inside a styled frame */}
  <div
    style={{
      width: '500px',
      height: '500px',
      border: '10px solid #fff',
      borderRadius: '8px',
      overflow: 'hidden',
      background:'white',
      padding:'12px',
      boxShadow:'0px 6px  18px rgba(0, 0, 0, 0.1)'
    }}
  >
    <img
      src="https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?auto=format&fit=crop&w=800&q=80"
      alt="Center"
      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
    />
  </div>

  {/* Text BELOW the image frame */}
  <div  style={{ textAlign: 'center', marginTop: '20px' }}>
    <h2>Wedding Moments</h2>
    <p>Capturing the magic forever</p>
    <blockquote style={{ fontStyle: 'italic', marginTop: '10px' }}>
      “Photography is the story I fail to put into words.” – Destin Sparks
    </blockquote>
  </div>
</div>


      {/* Right Tall Image */}
      <div className="image-box tall-frame">
        <img
          src="https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?auto=format&fit=crop&w=800&q=80"
          alt="Right"
          className="tall-image"
        />
      </div>
    </div>

      {/* Section 3: Centered Text */}
<div className="d-flex justify-content-center align-items-center text-center mt-5" style={{ minHeight: '30vh' }}>
  <div style={{ maxWidth: '700px' }}>
    <p style={{ fontSize: '1.25rem', fontWeight: '600' }}>
      Transforming genuine happiness into eternal imagery!
    </p>
    <p style={{ fontSize: '1.1rem', color: '#6c757d' }}>
      What is more fantastic than a perfect dreamy wedding? It is an honor for us to be there to witness your special day with our candid wedding films that you never dreamt of.
      We want to create a memory for you with our wedding photographers and cinematographers so that you can relive your day over and over.
    </p>
  </div>
</div>
      {/* Section 4: Full-width Image with Text Overlay */}

<div className="container py-5 bg-white">
  <div className="row align-items-center">
    {/* Left: Image with centered heading overlay */}
    <div className="col-md-6 position-relative">
      <img
        src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=1200&q=80"
        alt="Wedding Couple"
        className="img-fluid rounded-3 w-100"
        style={{ height: '100%', objectFit: 'cover', minHeight: '450px' }}
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = "https://placehold.co/1200x450/000000/FFFFFF?text=Image+Unavailable";
        }}
      />
      <div
        className="position-absolute top-50 start-50 translate-middle text-white text-center px-4 py-2"
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          borderRadius: '10px',
        }}
      >
        <h2 className="m-0" style={{ fontSize: '2rem', fontWeight: 'bold' }}>
          We take our craft seriously.
        </h2>
      </div>
    </div>

    {/* Right: Text content aligned beside image */}
    <div className="col-md-6 mt-4 mt-md-0">
      <h4 className="text-muted mb-2">What Do We Do?</h4>
      <p className="text-secondary fs-5 mb-4">
        We believe that a wedding should be all about the couple and not only about
        customs, or what the family wants, or a series of posed pictures with odd lighting.
        From straightforward coverage to themed documentary-style wedding albums, the
        field of wedding photography and videography in India has changed. In order to
        preserve our distinctive fun and offbeat approach, we focus on candid moments, genuine emotions,
        and telling your unique love story through our lens. We strive to create timeless memories that truly
        reflect the joy and authenticity of your special day.
      </p>
      <button className="btn btn-primary btn-lg rounded-pill shadow">
        Discover Our Approach
      </button>
    </div>
  </div>
</div>

   {/* Section 5: Wedding Couple Highlight */}

    <div className="container my-5 p-3">
  <div className="row align-items-center">
    
    {/* Left Column: Text and Button */}
    <div className="col-md-6">
      <h2 className="fw-bold mb-3">Sai Kruthi & Bharathi</h2>
      <p className="text-secondary mb-4">
        A sweet tale of love, from fighting as colleagues to falling in love. 
        Their love story is no less of a Bollywood tale. Everything about this 
        wedding looked like it was taken out of a movie.
      </p>
      <button className="btn btn-outline-danger btn-lg rounded-pill shadow">
        Explore Wedding Albums
      </button>
    </div>

    {/* Right Column: Image */}
    <div className="col-md-6 mt-4 mt-md-0">
      <img
        src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80"
        alt="Wedding Couple"
        className="img-fluid img-height rounded-3 "
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = "https://placehold.co/800x600/CCCCCC/333333?text=Image+Unavailable";
        }}
      />
    </div>
    

  </div>
</div>


    <div className="container my-5 p-3">
  <div className="row align-items-center">
    
    {/* Left Column: Text and Button */}
    <div className="col-md-6">
      <h2 className="fw-bold mb-3">Sai Kruthi & Bharathi</h2>
      <p className="text-secondary mb-4">
        A sweet tale of love, from fighting as colleagues to falling in love. 
        Their love story is no less of a Bollywood tale. Everything about this 
        wedding looked like it was taken out of a movie.
      </p>
      <button className="btn btn-outline-danger btn-lg rounded-pill shadow">
        Explore Wedding Albums
      </button>
    </div>

    {/* Right Column: Image */}
    <div className="col-md-6 mt-4 mt-md-0">
      <img
        src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80"
        alt="Wedding Couple"
        className="img-fluid img-height rounded-3"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = "https://placehold.co/800x600/CCCCCC/333333?text=Image+Unavailable";
        }}
      />
    </div>
    

  </div>
</div>
    {/* Section 6: Testimonial Carousel */}
<section className="container py-5">
  <h2 className="text-center fw-bold mb-5">What Our Clients Say</h2>

  <div
    id="testimonialCarousel"
    className="carousel slide"
    data-bs-ride="carousel"
    data-bs-interval="20000" // 20 seconds
  >
    {/* Black Carousel Indicators */}
    <div className="carousel-indicators">
      {[0, 1, 2, 3].map((index) => (
        <button
          key={index}
          type="button"
          data-bs-target="#testimonialCarousel"
          data-bs-slide-to={index}
          className={index === 0 ? "active" : ""}
          aria-current={index === 0 ? "true" : "false"}
          aria-label={`Slide ${index + 1}`}
          style={{
            backgroundColor: 'black',
            width: '12px',
            height: '12px',
            borderRadius: '50%',
            margin: '0 5px',
          }}
        />
      ))}
    </div>

    {/* Carousel Inner */}
    <div className="carousel-inner">
      {[0, 1, 2, 3].map((i) => (
        <div key={i} className={`carousel-item ${i === 0 ? "active" : ""}`}>
          <div className="row justify-content-center">
            {[0, 1, 2].map((offset) => {
              const testimonial = testimonials[(i + offset) % testimonials.length];
              return (
                <div key={testimonial.id} className="col-lg-4 col-md-6 mb-4">
                  <div className="card h-100 text-center p-4 border-1 ">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="rounded-circle mx-auto mb-3 border border-3 border-secondary"
                      style={{ width: '100px', height: '100px', objectFit: 'cover' }}
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "https://placehold.co/100x100/CCCCCC/333333?text=User";
                      }}
                    />
                    <p className="card-text text-muted mb-3" style={{ minHeight: '150px' }}>
                      "{testimonial.text}"
                    </p>
                    <h5 className="fw-bold text-dark">{testimonial.name}</h5>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>

    {/* Black Carousel Controls */}
    <button
      className="carousel-control-prev"
      type="button"
      data-bs-target="#testimonialCarousel"
      data-bs-slide="prev"
    >
      <span
        className="carousel-control-prev-icon"
        aria-hidden="true"
        style={{ filter: 'invert(1)' }}
      ></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button
      className="carousel-control-next"
      type="button"
      data-bs-target="#testimonialCarousel"
      data-bs-slide="next"
    >
      <span
        className="carousel-control-next-icon"
        aria-hidden="true"
        style={{ filter: 'invert(1)' }}
      ></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
</section>

    {/* Section 7: Wedding Moments Showcase */}

    <div className="carousel-gallery container-fluid p-0 d-flex justify-content-center align-items-center">
  <div className="gallery-wrapper">
    <img
      src={images[getIndex(-2)]}
      className="gallery-image outer-img left2"
      alt="outer-left"
    />
    <img
      src={images[getIndex(-1)]}
      className="gallery-image side-img left1"
      alt="left"
    />
    <img
      src={images[centerIndex]}
      className="gallery-image center-img center"
      alt="center"
    />
    <img
      src={images[getIndex(1)]}
      className="gallery-image side-img right1"
      alt="right"
    />
    <img
      src={images[getIndex(2)]}
      className="gallery-image outer-img right2"
      alt="outer-right"
    />
  </div>
</div>






    </div>
  );
};

export default WeddingPhotography;




