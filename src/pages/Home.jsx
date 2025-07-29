import React, { useState, useEffect,useRef } from 'react';
import Slider from "react-slick";

import { FaInstagram, FaFacebookF } from 'react-icons/fa';
import { Navbar, Nav, Button, Container, Carousel, Offcanvas ,NavDropdown,} from 'react-bootstrap';
import '../App.css'; // optional, for custom styles

const WeddingPhotography = () => {
 
  const image = [
    "five.jpg",
    "four.jpg",
    "third.jpg",
    "second.jpg",
    "four.jpg",
    "five.jpg",
   "four.jpg",
    "third.jpg",
    "second.jpg",
    "four.jpg",
  ];

 const [index, setIndex] = useState(0); // real index
const [visibleCount, setVisibleCount] = useState(window.innerWidth <= 768 ? 4 : 5);
const [isTransitioning, setIsTransitioning] = useState(true);
const trackRef = useRef(null);
const intervalRef = useRef(null);

const totalSlides = image.length;

// Duplicate head and tail
const extendedImages = [
  ...image.slice(-visibleCount), // tail clone
  ...image,
  ...image.slice(0, visibleCount) // head clone
];

useEffect(() => {
  const handleResize = () => {
    setVisibleCount(window.innerWidth <= 768 ? 4 : 5);
  };

  window.addEventListener("resize", handleResize);
  startAutoSlide();

  return () => {
    clearInterval(intervalRef.current);
    window.removeEventListener("resize", handleResize);
  };
}, []);

useEffect(() => {
  if (index === totalSlides) {
    // End reached → reset to start
    setTimeout(() => {
      setIsTransitioning(false);
      setIndex(0);
    }, 4000); // match transition time
  } else {
    setIsTransitioning(true);
  }
}, [index]);

const startAutoSlide = () => {
  clearInterval(intervalRef.current);
  intervalRef.current = setInterval(() => {
    setIndex((prev) => prev + 1);
  }, 12000);
};





const [navbarClass, setNavbarClass] = useState("transparent");
     const [offcanvasShow, setOffcanvasShow] = useState(false);


  const handleScroll = () => {
    const scrollY = window.scrollY;
    const nextSection = document.getElementById("next-section");

    if (!nextSection) return;

    const nextSectionTop = nextSection.getBoundingClientRect().top;

    if (scrollY === 0) {
      setNavbarClass("transparent"); // Top of the page
    } else if (nextSectionTop <= 0) {
      setNavbarClass("dark"); // Scrolled into next section
    } else {
      setNavbarClass("hidden"); // Scrolling in first section
    }
  };

 
  useEffect(() => {
    handleScroll(); // Run on mount
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
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

const testimonials = [
  { name: "Pooja Elangovan", message: "The pictures turned out beautiful! We got the complimentary frame & magazine... ", image: "second.jpg" },
  { name: "Mansoor Khan", message: "The pictures turned out beautiful! We got the complimentary frame & magazine...", image: "third.jpg" },
  { name: "Dikshithia", message: "The pictures turned out beautiful! We got the complimentary frame & magazine...", image: "four.jpg" },
  { name: "Rina Shah", message: "The pictures turned out beautiful! We got the complimentary frame & magazine...", image: "five.jpg" },
  { name: "Fatima Noor", message: "The pictures turned out beautiful! We got the complimentary frame & magazine...", image: "/images/test5.jpg" },
  { name: "Arjun Mehta", message: "The pictures turned out beautiful! We got the complimentary frame & magazine...", image: "first_img.jpg" },
  { name: "Deepak Nair", message: "The pictures turned out beautiful! We got the complimentary frame & magazine...", image: "third.jpg" },
  { name: "Shruti Verma", message: "The pictures turned out beautiful! We got the complimentary frame & magazine...", image: "four.jpg" },
  { name: "Naveen R", message: "The pictures turned out beautiful! We got the complimentary frame & magazine...", image: "second.jpg" },
  { name: "Aisha Patel", message: "The pictures turned out beautiful! We got the complimentary frame & magazine...", image: "five.jpg" },
];

  const [testimonialIndex, setTestimonialIndex] = useState(0);
const [testimonialVisibleCount, setTestimonialVisibleCount] = useState(window.innerWidth <= 768 ? 4 : 5);
const [isTestimonialTransitioning, setIsTestimonialTransitioning] = useState(true);
const testimonialTrackRef = useRef(null);
const testimonialIntervalRef = useRef(null);

const totalTestimonials = testimonials.length;

// Clone head and tail for seamless loop
const extendedTestimonials = [
  ...testimonials.slice(-testimonialVisibleCount),
  ...testimonials,
  ...testimonials.slice(0, testimonialVisibleCount),
];

// Start autoplay
const startTestimonialAutoSlide = () => {
  clearInterval(testimonialIntervalRef.current);
  testimonialIntervalRef.current = setInterval(() => {
    setTestimonialIndex((prev) => prev + 1);
  }, 12000); // 12s
};

useEffect(() => {
  const handleResize = () => {
    setTestimonialVisibleCount(window.innerWidth <= 768 ? 4 : 5);
  };
  window.addEventListener("resize", handleResize);
  startTestimonialAutoSlide();

  return () => {
    clearInterval(testimonialIntervalRef.current);
    window.removeEventListener("resize", handleResize);
  };
}, []);

useEffect(() => {
  if (testimonialIndex === totalTestimonials) {
    setTimeout(() => {
      setIsTestimonialTransitioning(false);
      setTestimonialIndex(0);
    }, 4000); // Match transition time
  } else {
    setIsTestimonialTransitioning(true);
  }
}, [testimonialIndex]);

const handleTestimonialDotClick = (i) => {
  setTestimonialIndex(i);
  startTestimonialAutoSlide(); // Reset timer
};

const images = [
  'first_img.jpg', 'second.jpg', 'third.jpg', 'four.jpg', 'five.jpg',
  'first_img.jpg', 'second.jpg', 'third.jpg', 'four.jpg', 'five.jpg',
];


const MAX_VISIBLE = 3;


  const [center, setCenter] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(null);
  const [deltaX, setDeltaX] = useState(0);
  const total = images.length;

  // Auto-rotate
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isDragging) {
        setCenter((prev) => (prev + 1) % total);
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [isDragging, total]);

  const getRelativeIndex = (index) => {
    let diff = index - center;
    if (diff > total / 2) diff -= total;
    if (diff < -total / 2) diff += total;
    return diff;
  };

  // Mouse & touch drag handlers
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.clientX);
  };



  const handleMouseUp = () => {
    if (!isDragging) return;

    if (deltaX > 50) {
      setCenter((prev) => (prev - 1 + total) % total);
    } else if (deltaX < -50) {
      setCenter((prev) => (prev + 1) % total);
    }

    setIsDragging(false);
    setDeltaX(0);
  };

  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
  };

  const handleMouseMove = (e) => {
  if (!isDragging) return;
  const moveX = e.clientX - startX;

  setDeltaX(moveX);

  if (moveX > 50) {
    setCenter((prev) => (prev - 1 + total) % total);
    setIsDragging(false);
    setDeltaX(0);
  } else if (moveX < -50) {
    setCenter((prev) => (prev + 1) % total);
    setIsDragging(false);
    setDeltaX(0);
  }
};

const handleTouchMove = (e) => {
  if (!isDragging) return;
  const moveX = e.touches[0].clientX - startX;

  setDeltaX(moveX);

  if (moveX > 50) {
    setCenter((prev) => (prev - 1 + total) % total);
    setIsDragging(false);
    setDeltaX(0);
  } else if (moveX < -50) {
    setCenter((prev) => (prev + 1) % total);
    setIsDragging(false);
    setDeltaX(0);
  }
};

  const handleTouchEnd = () => {
    if (!isDragging) return;

    if (deltaX > 50) {
      setCenter((prev) => (prev - 1 + total) % total);
    } else if (deltaX < -50) {
      setCenter((prev) => (prev + 1) % total);
    }

    setIsDragging(false);
    setDeltaX(0);
  };

  return (
<>
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
          <div className="wb-logo-text">SNAPPY TIMES</div>
        </div>
      </div>
     <div className="intimate-arrow" onClick={handleDownArrowClick}>
  <span className="arrow"></span>
</div>

    </section>
    <div  id="next-section" className="wedding-photography bg-light">
      {/* Section 1: Hero with Image and Text */}
     <div className="container my-5">
      <div className="row align-items-center">
        {/* Left: Text Content */}
        <div className="col-lg-6 text-md-start text-center mb-4 mb-lg-0">
          <p className="text-uppercase small text-muted">HELLO, WE ARE GLAD YOU FOUND US!</p>
          <h1 className="fw-bold mb-3 hero-heading">Welcome to Zero Gravity Photography!</h1>
          <p className="hero-paragraph">
            We are one of the top wedding photography studios around the country that has started to expand its horizons throughout the globe. Our team of wedding photographers is here to assist you in having a meaningful, stress-free, and real event while uniquely documenting your love. We want to be available for you all day long and that includes from the get go.
            <br /><br />
            
            We also do Creative pre-wedding photography for our bride and groom. We are passionate about each and every frame, and our team works very hard to make sure that you will cherish your special day for a lifetime with their expert wedding photography; we have always enjoyed being a part of a distinctive Indian Wedding, and we can't wait to be a part of yours!
          </p>
        </div>

        {/* Right: Image */}
        <div className="col-lg-6 text-center">
          <img
            src="first_img.jpg"
            alt="Wedding Couple"
            className="img-fluid hero-image"
          />
        </div>
      </div>
    </div>

      {/* Section 2: Full-width Container with Text and Image */}
       <div className="custom-carousel-container py-5">
  <div
    ref={trackRef}
    className="custom-carousel-track"
    style={{
      transform: `translateX(-${(100 / visibleCount) * (index + visibleCount)}%)`,
      transition: isTransitioning ? 'transform 4s ease-in-out' : 'none'
    }}
  >
    {extendedImages.map((img, i) => (
      <div key={i} className="custom-carousel-item">
        <img src={img} alt={`img-${i}`} className="custom-carousel-image" />
      </div>
    ))}
  </div>

  <div className="custom-carousel-indicators">
    {[...Array(totalSlides)].map((_, i) => (
      <span
        key={i}
        onClick={() => setIndex(i)}
        className={`dot ${index % totalSlides === i ? 'active' : ''}`}
      />
    ))}
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
<div className='bg-white'>
<div className="wedding-category-section m-5">
  <div className="category-grid">
    <div className="category-item">
      <img src="second.jpg" alt="Brahmin Wedding" />
      <div className="overlay-text">Brahmin Wedding</div>
    </div>
    <div className="category-item">
      <img src="first_img.jpg" alt="North Indian Wedding" />
      <div className="overlay-text">North Indian Wedding</div>
    </div>
    <div className="category-item">
      <img src="third.jpg" alt="Birthday Photography" />
      <div className="overlay-text">Birthday Photography</div>
    </div>
    <div className="category-item">
      <img src="four.jpg" alt="Christian Wedding" />
      <div className="overlay-text">Christian Wedding</div>
    </div>
    <div className="category-item">
      <img src="five.jpg" alt="Muslim Wedding" />
      <div className="overlay-text">Muslim Wedding</div>
    </div>
    <div className="category-item">
      <img src="first_img.jpg" alt="Malayali Wedding" />
      <div className="overlay-text">Malayali Wedding</div>
    </div>
  </div>
</div>

</div>



   {/* Section 5: Wedding Couple Highlight */}
   
<div className="bg-light">

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
        className="img-fluid img-height "
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
        className="img-fluid img-height"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = "https://placehold.co/800x600/CCCCCC/333333?text=Image+Unavailable";
        }}
      />
    </div>
    

  </div>
</div>
</div>
    {/* Section 6: Testimonial Carousel */}
  <div className="testimonial-carousel-wrapper">
  <div
    className={`testimonial-track ${isTestimonialTransitioning ? "transition" : ""}`}
    style={{
      transform: `translateX(-${(100 / testimonialVisibleCount) * (testimonialIndex + testimonialVisibleCount)}%)`,
    }}
    ref={testimonialTrackRef}
  >
    {extendedTestimonials.map((t, i) => (
      <div className="testimonial-card" key={i}>
        <img src={t.image} alt={`testimonial-${i}`} className="testimonial-img" />
        <p>{t.message}</p>
        <h5 className="testimonial-name">{t.name}</h5>
      </div>
    ))}
  </div>

  <div className="testimonial-indicators">
    {[...Array(totalTestimonials)].map((_, i) => (
      <span
        key={i}
        className={`dot ${i === testimonialIndex % totalTestimonials ? "active" : ""}`}
        onClick={() => handleTestimonialDotClick(i)}
      />
    ))}
  </div>
</div>



    {/* Section 7: Wedding Moments Showcase */}
        <div
      className="seamless-carousel"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="seamless-carousel-inner">
        {images.map((src, i) => {
          const offset = getRelativeIndex(i);
          if (Math.abs(offset) > MAX_VISIBLE) return null;

          const scale = 1 - Math.abs(offset) * 0.1;
          const translateX = offset * 140 + (offset === 0 ? deltaX : 0);
          const zIndex = 999 - Math.abs(offset);
          const brightness = offset === 0 ? 1 : 0.9;
          const opacity = 1 - Math.abs(offset) * 0.08;

          return (
            <div
              key={i}
              className="carousel-img-wrapper"
              style={{
                transform: `translate(-50%, -50%) translateX(${translateX}px) scale(${scale})`,
                filter: `brightness(${brightness})`,
                zIndex,
                opacity,
              }}
            >
              <img src={src} alt={`carousel-${i}`} />
              <button className="click-btn">Click Here</button>
            </div>
          );
        })}
      </div>
    </div>
      
  




<div className="container my-5">
  <h2 className="text-center mb-4">Photography FAQs</h2>
  <div className="accordion" id="accordionPanelsStayOpenExample">
    
    <div className="accordion-item">
      <h2 className="accordion-header" id="panelsStayOpen-headingOne">
        <button className="accordion-button" type="button" data-bs-toggle="collapse"
          data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true"
          aria-controls="panelsStayOpen-collapseOne">
          What is included in your wedding photography package?
        </button>
      </h2>
      <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show"
        aria-labelledby="panelsStayOpen-headingOne">
        <div className="accordion-body">
          Our wedding package includes full-day coverage, an online gallery, high-resolution edited photos, and a custom photo album.
        </div>
      </div>
    </div>

    <div className="accordion-item">
      <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
          data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false"
          aria-controls="panelsStayOpen-collapseTwo">
          How long does it take to receive the final photos?
        </button>
      </h2>
      <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse"
        aria-labelledby="panelsStayOpen-headingTwo">
        <div className="accordion-body">
          Final edited images are delivered within 2–3 weeks. During peak season, delivery might take up to 4 weeks.
        </div>
      </div>
    </div>

    <div className="accordion-item">
      <h2 className="accordion-header" id="panelsStayOpen-headingThree">
        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
          data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false"
          aria-controls="panelsStayOpen-collapseThree">
          Do you travel for destination photography?
        </button>
      </h2>
      <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse"
        aria-labelledby="panelsStayOpen-headingThree">
        <div className="accordion-body">
          Yes, we travel worldwide for destination weddings and shoots. Travel and accommodation charges may apply.
        </div>
      </div>
    </div>

    <div className="accordion-item">
      <h2 className="accordion-header" id="panelsStayOpen-headingFour">
        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
          data-bs-target="#panelsStayOpen-collapseFour" aria-expanded="false"
          aria-controls="panelsStayOpen-collapseFour">
          Can we request specific styles or poses?
        </button>
      </h2>
      <div id="panelsStayOpen-collapseFour" className="accordion-collapse collapse"
        aria-labelledby="panelsStayOpen-headingFour">
        <div className="accordion-body">
          Absolutely! We welcome your ideas and will work with you to capture your preferred styles and poses.
        </div>
      </div>
    </div>

  </div>
</div>




    </div>

    </>
  );
};

export default WeddingPhotography;




