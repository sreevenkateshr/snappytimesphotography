import 'bootstrap-icons/font/bootstrap-icons.css';

export default function Footer() {
  return (
    <>
      {/* BOOK US NOW Section */}
      <div className="bg-danger-subtle text-white py-4" style={{ backgroundColor: '#d94694' }}>
        <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center text-center text-md-start">
          <div>
            <h4 className="fw-bold mb-1">BOOK US NOW</h4>
            <p className="mb-0">Get in touch with us and let us make your special day an event of your lifetime using our digital eye.</p>
          </div>
          <div className="mt-3 mt-md-0 d-flex align-items-center gap-2 fs-5">
            <i className="bi bi-telephone-fill me-2"></i>
            <span>+91 98407 67566</span>
          </div>
        </div>
      </div>

      {/* Main Footer Section */}
 <footer className="footer-container">
  <div className="footer-left">
    <h4>Why Choose Us?</h4>
    <p>
      With years of experience and a passion for storytelling, Snappy Photography
      brings your moments to life. From weddings to portraits, we capture it all with
      creativity, care, and clarity.
    </p>
    <p>
  <i className="fas fa-camera-retro"></i> Professional &nbsp;|&nbsp;
  <i className="fas fa-palette"></i> Creative &nbsp;|&nbsp;
  <i className="fas fa-handshake"></i> Friendly
</p>
  </div>

  <div className="footer-center">
    <h4>Capturing Moments, Crafting Stories</h4>
    <p>
      At Snappy Photography, we believe every photo tells a story .
      Whether it’s a fleeting smile, a quiet glance, or a vibrant celebration,
      we’re here to freeze those emotions in time with passion and precision.
    </p>
    <p className="footer-signature">— The Snappy Team</p>
  </div>

  <div className="footer-right">
    <h4>Contact</h4>
    <p>Email: hello@myphotography.com</p>
    <p>Phone: +91 98765 43210</p>
    <p>Location: Chennai, India</p>

    <div className="social-icons">
      <i className="fab fa-facebook-f"></i>
      <i className="fab fa-instagram"></i>
      <i className="fab fa-twitter"></i>
      <i className="fab fa-youtube"></i>
    </div>
  </div>
</footer>

      {/* Copyright */}
      <div className="bg-white py-2 border-top">
        <div className="container text-center small text-muted">
          Copyright © SnappyTimes {new Date().getFullYear()} - All rights reserved |
          Developed by 
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/919840767566"
        target="_blank"
        rel="noopener noreferrer"
        className="btn position-fixed d-flex justify-content-center align-items-center"
        style={{
          bottom: '20px',
          left: '20px',
          borderRadius: '50%',
          backgroundColor: '#25D366',
          width: '48px',
          height: '48px',
          zIndex: 1000,
        }}
        title="Chat on WhatsApp"
      >
        <i className="bi bi-whatsapp text-white fs-4" />
      </a>

      {/* Scroll to Top Button */}
      <button
        className="btn position-fixed d-flex justify-content-center align-items-center"
        style={{
          bottom: '20px',
          right: '20px',
          borderRadius: '50%',
          backgroundColor: '#000',
          color: '#fff',
          width: '48px',
          height: '48px',
          zIndex: 1000,
        }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        title="Back to top"
      >
        <i className="bi bi-chevron-up fs-5" />
      </button>
    </>
  );
}
