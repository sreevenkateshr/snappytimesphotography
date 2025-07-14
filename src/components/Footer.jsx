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
      <div className="bg-light border-top py-4">
        <div className="container text-center text-lg-start">
          <div className="row align-items-center justify-content-between text-center">

            {/* Get in Touch */}
            <div className="col-md-4 mb-3 mb-md-0">
              <h6 className="fw-bold text-uppercase">Get in Touch</h6>
              <p className="mb-0 text-muted">
                <a href="mailto:snappytimes.in@gmail.com" className="text-dark text-decoration-none fw-semibold">
                  snappytimes.in@gmail.com
                </a>
              </p>
            </div>

            {/* Logo/Quote */}
            <div className="col-md-4 mb-3 mb-md-0 border-start border-end">
              <h6 className="fw-bold mb-2">SnappyTimes Photography</h6>
              <p className="fst-italic text-muted">
                "Every frame tells a story. On your special day, we capture moments that last a lifetime."
              </p>
            </div>

            {/* Social Links */}
            <div className="col-md-4">
              <h6 className="fw-bold text-uppercase">Connect Us</h6>
              <div className="d-flex justify-content-center gap-3 mt-2">
                <a href="#" className="text-dark fs-5"><i className="bi bi-instagram"></i></a>
                <a href="#" className="text-dark fs-5"><i className="bi bi-facebook"></i></a>
                <a href="#" className="text-dark fs-5"><i className="bi bi-pinterest"></i></a>
              </div>
            </div>

          </div>
        </div>
      </div>

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
          bottom: '80px',
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
