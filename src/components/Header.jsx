import { Link } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../App.css';
import React, { useEffect, useState } from "react";
import { FaInstagram, FaFacebookF } from 'react-icons/fa';
import {
  Navbar,
  Nav,
  Button,
  Container,
  Carousel,
  Offcanvas,
  NavDropdown,
} from 'react-bootstrap';

export default function Header() {
  const [navbarClass, setNavbarClass] = useState("transparent");
  const [offcanvasShow, setOffcanvasShow] = useState(false);
  const [showDropdown, setShowDropdown] = useState(null); // null | 'wedding' | 'baby'

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

  const handleDownArrowClick = () => {
    const nextSection = document.getElementById("next-section");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

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
            href="/"
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
              <a href="/" className="d-flex align-items-center text-white text-decoration-none">
                <img
                  src="logo.jpg"
                  alt="Logo"
                  width="40"
                  className="me-2"
                  style={{ padding: "5px" }}
                />
                <span className="brand-text">SnappyTimes</span>
              </a>
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
                    <NavDropdown.Item className="nav-underline" href="/wedding/hindu">
                      Hindu
                    </NavDropdown.Item>
                    <NavDropdown.Item className="nav-underline" href="/wedding/christian">
                      Christian
                    </NavDropdown.Item>
                    <NavDropdown.Item className="nav-underline" href="/wedding/muslim">
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
                    <NavDropdown.Item className="nav-underline" href="/birthday">
                      Birthday
                    </NavDropdown.Item>
                    <NavDropdown.Item className="nav-underline" href="/indoor">
                      Indoor
                    </NavDropdown.Item>
                    <NavDropdown.Item className="nav-underline" href="/outdoor">
                      Outdoor
                    </NavDropdown.Item>
                  </NavDropdown>
                </div>

                <Nav.Link href="/about" className="nav-underline">
                  About Us
                </Nav.Link>
                <Nav.Link href="/contact" className="nav-underline">
                  Contact Us
                </Nav.Link>
                <Nav.Link href="/blogs" className="nav-underline">
                  Blogs
                </Nav.Link>
                <Nav.Link href="/testimonials" className="nav-underline">
                  Testimonials
                </Nav.Link>

                {/* Buttons */}
                <div className="d-flex gap-2 mt-3 mt-lg-0">
                  <Button variant="outline-warning">Get A Quote</Button>
                  <Button variant="outline-success">Call Now</Button>
                </div>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}
