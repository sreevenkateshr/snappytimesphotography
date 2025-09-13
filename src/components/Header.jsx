import { Link } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../App.css';
import React, { useEffect, useState } from "react";
import {
  Navbar,
  Nav,
  Button,
  Container,
  Offcanvas,
  NavDropdown,
} from 'react-bootstrap';

export default function Header() {
  const [navbarClass, setNavbarClass] = useState("transparent");
  const [offcanvasShow, setOffcanvasShow] = useState(false);
  const [showDropdown, setShowDropdown] = useState(null);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const nextSection = document.getElementById("next-section");

    if (!nextSection) return;

    const nextSectionTop = nextSection.getBoundingClientRect().top;

    if (scrollY === 0) {
      setNavbarClass("transparent");
    } else if (nextSectionTop <= 0) {
      setNavbarClass("dark");
    } else {
      setNavbarClass("hidden");
    }
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Navbar
        expand="lg"
        variant="dark"
        fixed="top"
        className={`py-3 transition-navbar ${
          navbarClass === "transparent"
            ? "bg-transparent visible-navbar"
            : navbarClass === "dark"
            ? "bg-dark visible-navbar"
            : "hidden-navbar"
        }`}
      >
        <Container fluid>
          <Navbar.Brand
            as={Link}
            to="/"
            className={`d-flex align-items-center ${offcanvasShow ? 'd-none d-lg-flex' : ''}`}
          >
            <img
              src="logo.jpg"
              alt="Logo"
              width="35"
              className="me-2"
              style={{ padding: "2px" }}
            />
            <span className="brand-text">SnappyTimes</span>
          </Navbar.Brand>

          <Navbar.Toggle
            aria-controls="offcanvasNavbar-expand-lg"
            className={`border-0 ${offcanvasShow ? 'd-none' : ''}`}
            onClick={() => setOffcanvasShow(true)}
          />

          <Navbar.Offcanvas
            id="offcanvasNavbar-expand-lg"
            placement="end"
            show={offcanvasShow}
            onHide={() => setOffcanvasShow(false)}
            className="bg-dark text-white full-width-offcanvas"
          >
            <Offcanvas.Header closeButton className="bg-dark text-white">
              <Link to="/" className="d-flex align-items-center text-white text-decoration-none">
                <img
                  src="logo.jpg"
                  alt="Logo"
                  width="40"
                  className="me-2"
                  style={{ padding: "5px" }}
                />
                <span className="brand-text">SnappyTimes</span>
              </Link>
            </Offcanvas.Header>

           <Offcanvas.Body className="d-flex flex-column align-items-center justify-content-center text-center mulish">
  <Nav className="flex-column flex-lg-row justify-content-end align-items-center w-100 text-center">

    {/* Wedding Dropdown */}
    <div
      onMouseEnter={() => setShowDropdown('wedding')}
      onMouseLeave={() => setShowDropdown(null)}
    >
      <NavDropdown
        title={<span className="nav-underline">Wedding</span>}
        id="wedding-dropdown"
        show={showDropdown === 'wedding'}
        menuVariant="light"
        className="nav-dropdown-hover"
      >
        <NavDropdown.Item as={Link} to="/hindu" onClick={() => setOffcanvasShow(false)}>
          Hindu
        </NavDropdown.Item>
        <NavDropdown.Item as={Link} to="/christian" onClick={() => setOffcanvasShow(false)}>
          Christian
        </NavDropdown.Item>
        <NavDropdown.Item as={Link} to="/muslim" onClick={() => setOffcanvasShow(false)}>
          Muslim
        </NavDropdown.Item>
      </NavDropdown>
    </div>

    {/* Baby Photography Dropdown */}
    <div
      onMouseEnter={() => setShowDropdown('baby')}
      onMouseLeave={() => setShowDropdown(null)}
    >
      <NavDropdown
        title={<span className="nav-underline">Baby Photography</span>}
        id="baby-dropdown"
        show={showDropdown === 'baby'}
        menuVariant="light"
        className="nav-dropdown-hover"
      >
        <NavDropdown.Item as={Link} to="/birthday" onClick={() => setOffcanvasShow(false)}>
          Birthday
        </NavDropdown.Item>
        <NavDropdown.Item as={Link} to="/indoor" onClick={() => setOffcanvasShow(false)}>
          Indoor
        </NavDropdown.Item>
        <NavDropdown.Item as={Link} to="/outdoor" onClick={() => setOffcanvasShow(false)}>
          Outdoor
        </NavDropdown.Item>
      </NavDropdown>
    </div>

    {/* Other links */}
    <Nav.Link as={Link} to="/about" className="nav-underline" onClick={() => setOffcanvasShow(false)}>
      About Us
    </Nav.Link>
    <Nav.Link as={Link} to="/blogs" className="nav-underline" onClick={() => setOffcanvasShow(false)}>
      Blogs
    </Nav.Link>
    <Nav.Link as={Link} to="/testimonials" className="nav-underline" onClick={() => setOffcanvasShow(false)}>
      Testimonials
    </Nav.Link>

    {/* Buttons */}
    <div className="d-flex gap-2 mt-3 mt-lg-0">
      <Button as={Link} to="/contact" variant="outline-warning" onClick={() => setOffcanvasShow(false)}>
        Get A Quote
      </Button>
      <Button variant="outline-success" href="tel:+916374926377" onClick={() => setOffcanvasShow(false)}>
        Book Now
      </Button>
    </div>
  </Nav>
</Offcanvas.Body>

          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}
