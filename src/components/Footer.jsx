import 'bootstrap-icons/font/bootstrap-icons.css';

export default function Footer() {
  return (
    <>
      {/* BOOK US NOW Section */}
      <div
        className="text-white py-4"
        style={{ backgroundColor: '#d94694' }}
      >
        <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center text-center text-md-start">
          <div>
            <h4 className="fw-bold mb-1">BOOK US NOW</h4>
            <p className="mb-0">
              Get in touch with us and let us make your special day unforgettable through our creative photography.
            </p>
          </div>
          <div className="mt-3 mt-md-0 d-flex align-items-center gap-2 fs-5">
            <i className="bi bi-telephone-fill me-2"></i>
            <span>+91 98407 67566</span>
          </div>
        </div>
      </div>

      {/* Main Footer Section */}
      <footer className="bg-light text-dark py-5">
        <div className="container">
          <div className="row gy-4">
            
            {/* Left */}
            <div className="col-md-4 text-center text-md-start">
              <h5 className="fw-bold mb-3">Get in Touch</h5>
              <p className="mb-1">
  <i className="fas fa-envelope me-2"></i>
  Snappytimesphotography@gmail.com
</p>
<p>
  <i className="fas fa-map-marker-alt me-2"></i>
  Chennai, India
</p>

            </div>

            {/* Center */}
            <div className="col-md-4 text-center">
              <h5 className="fw-bold mb-3">Capturing Moments, Crafting Stories</h5>
              <p>
                At Snappy Photography, every picture is more than an image — it’s a story waiting to be told. 
                With an eye for detail and heart for emotions, we turn your moments into timeless treasures.
              </p>
              <p className="fst-italic mb-0">— The Snappy Team</p>
            </div>

            {/* Right */}
            <div className="col-md-4 text-md-end text-center">
              <h5 className="fw-bold mb-3">Connect</h5>
              {/* <p className="mb-1">
  <i className="fas fa-envelope me-2"></i>
  
  contact@snappyphotography.com
</p> */}
             <p className="mb-1">
  {/* Desktop/Laptop Icon */}
  <i className="bi bi-telephone-fill me-2 d-none d-md-inline"></i>
  <i className="bi bi-telephone-fill me-2 d-md-none"></i>
  +91 98765 43210
</p>

              {/* Social Icons */}
              <div className="d-flex justify-content-md-end justify-content-center gap-3 fs-5 mt-2">
                <a href="#" className="text-dark"><i className="bi bi-facebook"></i></a>
                <a href="#" className="text-dark"><i className="bi bi-instagram"></i></a>
                <a href="#" className="text-dark"><i className="bi bi-twitter-x"></i></a>
                <a href="#" className="text-dark"><i className="bi bi-youtube"></i></a>
              </div>
            </div>

          </div>
        </div>
      </footer>

      {/* Copyright */}
      <div className="bg-white py-3 border-top">
        <div className="container text-center small text-muted">
          © {new Date().getFullYear()} SnappyTimes — All rights reserved | 
          Developed by{" "}
          <a 
            href="https://sherlinag-portfolio-link.com"  // 👉 replace with Sherlinag’s actual portfolio URL
            target="_blank" 
            rel="noopener noreferrer" 
            className="fw-semibold text-decoration-none text-dark"
          >
            Sherlin AG
          </a>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/919840767566"
        target="_blank"
        rel="noopener noreferrer"
        className="btn position-fixed d-flex justify-content-center align-items-center shadow"
        style={{
          bottom: '20px',
          left: '20px',
          borderRadius: '50%',
          backgroundColor: '#25D366',
          width: '50px',
          height: '50px',
          zIndex: 1000,
        }}
        title="Chat on WhatsApp"
      >
        <i className="bi bi-whatsapp text-white fs-4" />
      </a>

      {/* Scroll to Top Button */}
      <button
        className="btn position-fixed d-flex justify-content-center align-items-center shadow"
        style={{
          bottom: '20px',
          right: '20px',
          borderRadius: '50%',
          backgroundColor: '#000',
          color: '#fff',
          width: '50px',
          height: '50px',
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
