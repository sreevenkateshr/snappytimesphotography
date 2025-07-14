import React from 'react';
import '../App.css'; // optional, for custom styles

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-section d-flex align-items-center justify-content-center text-white text-center">
        <div className="container">
          <h1 className="display-3 fw-bold">Capturing Moments, Creating Memories</h1>
          <p className="lead mb-4">We turn your special moments into timeless stories through our lens.</p>
          <a href="/contact" className="btn btn-warning text-dark fw-semibold px-4 py-2 rounded-pill">
            <i className="bi bi-calendar-heart"></i> Book a Session
          </a>
        </div>
      </section>

      {/* About SnappyTimes */}
      <section className="py-5 bg-light">
        <div className="container text-center">
          <h2 className="fw-bold mb-4">About SnappyTimes</h2>
          <p className="text-muted mx-auto" style={{ maxWidth: '750px' }}>
            At SnappyTimes, photography is not just our passion—it’s our art. We specialize in capturing your weddings, portraits,
            lifestyle shoots, and more with creativity and precision.
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-5">
        <div className="container">
          <h2 className="text-center fw-bold mb-5">Our Portfolio</h2>
          <div className="row g-4">
            {[
              'https://images.unsplash.com/photo-1517841905240-472988babdf9',
              'https://images.unsplash.com/photo-1544005313-94ddf0286df2',
              'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e',
              'https://images.unsplash.com/photo-1530034221062-d2216e5bca66',
              'https://images.unsplash.com/photo-1504198266285-165a16b0c76e',
              'https://images.unsplash.com/photo-1587614203976-365f2493c7b3',
            ].map((src, idx) => (
              <div className="col-md-4 col-6" key={idx}>
                <img src={src} className="img-fluid rounded shadow-sm gallery-image" alt={`Gallery ${idx}`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services CTA */}
      <section className="py-5 bg-dark text-white text-center">
        <div className="container">
          <h2 className="fw-bold mb-4">Explore Our Services</h2>
          <p className="mb-4">From pre-wedding to post-production, we offer it all with passion.</p>
          <a href="/services" className="btn btn-outline-light rounded-pill px-4 py-2">
            View Services
          </a>
        </div>
      </section>

      {/* Testimonials or Quote */}
      <section className="py-5 bg-white text-center">
        <div className="container">
          <blockquote className="blockquote fst-italic text-muted">
            <p>"Photography is the art of frozen time... the ability to store emotion and feelings within a frame."</p>
          </blockquote>
        </div>
      </section>
    </>
  );
}
