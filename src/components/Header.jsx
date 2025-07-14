import { Link } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../App.css'; // Make sure App.css is imported

export default function Header() {
  return (
    <>
      {/* Top Contact Bar */}
      <div className="bg-light py-2 border-bottom shadow-sm">
        <div className="container d-flex justify-content-between align-items-center flex-wrap small text-muted">
          <div className="d-flex align-items-center gap-2">
            <i className="bi bi-telephone-fill text-primary" />
            <span>+91 98765 43210</span>
          </div>
          <div className="d-flex gap-3">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-dark">
              <i className="bi bi-facebook fs-5" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-dark">
              <i className="bi bi-instagram fs-5" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer" className="text-dark">
              <i className="bi bi-youtube fs-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top shadow-sm">
        <div className="container">
          {/* Brand */}
          <Link className="navbar-brand fw-bold fs-3 text-uppercase" to="/">
            Snappy<span className="text-warning">Times</span>
          </Link>

          {/* Mobile Toggler */}
          <button
            className="navbar-toggler border-0"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#mobileMenu"
            aria-controls="mobileMenu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Desktop Nav */}
          <div className="collapse navbar-collapse d-none d-lg-flex justify-content-end gap-4">
            {['Home', 'About', 'Services', 'Galleries', 'Blog', 'Contact'].map((item) => (
              <Link
                key={item}
                className="nav-link text-white nav-underline"
                to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
              >
                {item}
              </Link>
            ))}
            <Link
              to="/contact"
              className="btn btn-warning text-dark fw-semibold px-4 py-2 rounded-pill d-flex align-items-center gap-2 btn-book-now"
            >
              <i className="bi bi-calendar-check-fill"></i> Book Us Now
            </Link>
          </div>
        </div>
      </nav>

      {/* Offcanvas Menu for Mobile */}
      <div
        className="offcanvas offcanvas-end text-bg-dark"
        tabIndex="-1"
        id="mobileMenu"
        aria-labelledby="offcanvasMobile"
        style={{ width: '70%' }}
      >
        <div className="offcanvas-header border-bottom">
          <div className="fw-bold text-warning fs-4">SnappyTimes</div>
          <button
            type="button"
            className="btn-close btn-close-white"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>

        <div className="offcanvas-body d-flex flex-column justify-content-between pt-4">
          {/* Centered Menu Items */}
          <div className="d-flex flex-column align-items-center gap-4">
            {['Home', 'About', 'Services', 'Galleries', 'Blog', 'Contact'].map((item) => (
              <Link
                key={item}
                to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                className="text-white fs-5 text-decoration-none nav-underline"
                data-bs-dismiss="offcanvas"
              >
                {item}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="mt-4">
            <Link
              to="/contact"
              className="btn btn-warning text-dark fw-bold w-100 rounded-pill py-2 d-flex justify-content-center align-items-center gap-2 btn-book-now"
              data-bs-dismiss="offcanvas"
            >
              <i className="bi bi-calendar-check-fill"></i> Book Us Now
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
