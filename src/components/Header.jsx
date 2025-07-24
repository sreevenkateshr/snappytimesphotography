import { Link } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../App.css'; // Make sure App.css is imported
import React, { useEffect, useState } from "react";
import { FaInstagram, FaFacebookF } from 'react-icons/fa';
import { Navbar, Nav, Button, Container, Carousel, Offcanvas ,NavDropdown,} from 'react-bootstrap';


export default function Header() {
    const [navbarBg, setNavbarBg] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 10) {
      setNavbarBg(true);
    } else {
      setNavbarBg(false);
    }
  };
 const [showDropdown, setShowDropdown] = useState(false);

  const handleMouseEnter = () => setShowDropdown(true);
  const handleMouseLeave = () => setShowDropdown(false);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDownArrowClick = () => {
    const nextSection = document.getElementById("next-section");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const slides = [
  { id: 1, content: "RHAPSODY<br />OF LOVE" },
  { id: 2, content: "AMOROUS<br />SAGA" },
];
  return (
    <>
      {/* Top Contact Bar */}
     



    <Navbar
      expand="lg"
      variant="dark"
      fixed="top"
      className={`py-3 ${
        navbarBg ? "bg-dark" : "bg-transparent"
      } transition-navbar`}
    >
      <Container fluid>
        <Navbar.Brand href="#" className="d-flex align-items-center">
          <img
            src="logo.jpg"
            alt="Logo"
            width="40"
            className="me-2"
            style={{ padding: "5px" }}
          />
          <span className="brand-text">SnappyTimes</span>
        </Navbar.Brand>
 <Navbar.Toggle aria-controls="offcanvasNavbar-expand-lg" className="border-0" />

        {/* Offcanvas Menu (Full screen style) */}
        <Navbar.Offcanvas
          id="offcanvasNavbar-expand-lg"
          placement="end"
          className="bg-dark text-white full-width-offcanvas"
        >
          <Offcanvas.Header closeButton className="bg-dark text-white">
            <Offcanvas.Title className="text-white"><img
            src="logo.jpg"
            alt="Logo"
            width="40"
            className="me-2"
            style={{ padding: "5px" }}
          />
          <span className="brand-text">SnappyTimes</span></Offcanvas.Title>
          </Offcanvas.Header>

          <Offcanvas.Body className="d-flex flex-column align-items-center justify-content-center text-center">
            <Nav className="flex-column gap-3"></Nav>
            <Nav className="flex-column flex-lg-row justify-content-end align-items-center w-100 text-center">
              <Nav.Link href="#wedding" className="nav-underline">
                Wedding
              </Nav.Link>

              {/* Dropdown with hover effect */}
                <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <NavDropdown
        title={<span className="nav-underline">Baby Photography</span>}
        id="baby-dropdown"
        show={showDropdown}
        menuVariant="light"
        className="nav-dropdown-hover"
      >
        <NavDropdown.Item className="nav-underline" href="#birthday">
          Birthday
        </NavDropdown.Item>
        <NavDropdown.Item className="nav-underline" href="#outdoor">
          Outdoor
        </NavDropdown.Item>
      </NavDropdown>
    </div>

              <Nav.Link href="#about" className="nav-underline">
                About Us
              </Nav.Link>
              <Nav.Link href="#contact" className="nav-underline">
                Contact Us
              </Nav.Link>
              <Nav.Link href="#blogs" className="nav-underline">
                Blogs
              </Nav.Link>
              <Nav.Link href="#testimonials" className="nav-underline">
                Testimonials
              </Nav.Link>

              {/* Buttons */}
              <div className="d-flex gap-2 mt-3 mt-lg-0">
                <Button variant="outline-warning">Book Now</Button>
                <Button variant="outline-success">Call Now</Button>
              </div>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>

 

<section className="wb-banner-wrap">
      <video
        className="wb-banner-bg"
        src="https://weddingbellsstories.com/video_library/three.mp4"
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="wb-social">
        <a
          href="https://www.instagram.com/weddingbellsphotography/?hl=en"
          aria-label="Instagram"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.facebook.com/weddingbells123/"
          aria-label="Facebook"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebookF />
        </a>
      </div>
      <div className="wb-banner-content">
         <Carousel
    controls={false}
    indicators={false}
    interval={4000}
    className="custom-centered-carousel"
  >
    {slides.map((slide) => (
      <Carousel.Item key={slide.id}>
        <div className="d-flex flex-column align-items-center justify-content-center h-100 w-100">
          <h1
            className="display-1 mb-0 text-center text-white"
            style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}
            dangerouslySetInnerHTML={{ __html: slide.content }}
          />
        </div>
      </Carousel.Item>
    ))}
  </Carousel>

        <div className="wb-banner-logo">
          <img 
            src="https://weddingbellsstories.com/media_library/weddingbells-image-hqdqu2.svg" 
            alt="Wedding Bells" 
          />
          <div className="wb-logo-text">WEDDING BELLS</div>
        </div>
      </div>
      <div className="wb-arrow-down" onClick={handleDownArrowClick}>
        <span className="arrow"></span>
      </div>
    </section>


    </>
  );
}
