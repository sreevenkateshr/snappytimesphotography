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
  { name: "Fatima Noor", message: "The pictures turned out beautiful! We got the complimentary frame & magazine...", image: "four.jpg" },
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


    const stats = [
  { value: 12, label: "Locations" },
  { value: 10000, label: "Weddings", suffix: "+" },
  { value: 200, label: "Employees", prefix: "+" },
  { value: 1, label: "Dream" },
];

    const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  useEffect(() => {
    if (!visible) return;

    stats.forEach((stat, i) => {
      let start = 0;
      const end = stat.value;
      const duration = 1500;
      const increment = end / (duration / 16);

      const interval = setInterval(() => {
        start += increment;
        setCounts(prev => {
          const newCounts = [...prev];
          newCounts[i] = start < end ? Math.round(start) : end;
          return newCounts;
        });

        if (start >= end) clearInterval(interval);
      }, 16);
    });
  }, [visible]);



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
          <h1 className="fw-bold mb-3 hero-heading">Welcome to Snappy Times Photography!</h1>
          <p className="hero-paragraph">
            At Snappy Times, we take pride in being among the best wedding photography studios in the country, now capturing love stories across the globe. Our team of professional wedding photographers is dedicated to making your big day meaningful, stress-free, and unforgettable while beautifully documenting every heartfelt moment.
            <br /><br />
From the first look to the final celebration, we are by your side, ensuring your memories are preserved with timeless elegance. We also specialize in creative pre-wedding photography, designed to reflect the unique bond between every bride and groom.
            <br /><br />
Every frame we capture is filled with passion, precision, and artistry. With our affordable wedding photography packages, you can relive your special day for a lifetime without compromising on quality. Having been part of countless vibrant Indian weddings, we look forward to creating breathtaking memories for yours too!
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
<div className="wedding-category-section p-5 ">
  <h2 className="text-center bold mb-4 py-2">Explore Our Wedding Photography Categories</h2>
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
{/* 
    <section className="why-choose-us py-5">
      <div className="container">
        <div className="row align-items-center">
          
          
          <div className="col-md-7">
            <h4 className="why-title mb-3">Why Choose Us?</h4>
            <p className="why-text">
              With years of experience and a passion for storytelling, Snappy
              Photography brings your moments to life. From weddings to portraits,
              we capture it all with creativity, care, and clarity.
            </p>
          </div>

          
          <div className="col-md-5 text-md-end text-center">
            <p className="why-features">
              <i className="fas fa-camera-retro"></i> Professional &nbsp;|&nbsp;
              <i className="fas fa-palette"></i> Creative &nbsp;|&nbsp;
              <i className="fas fa-handshake"></i> Friendly
            </p>
          </div>

        </div>
      </div>
    </section> */}

   {/* Section 5: Wedding Couple Highlight */}
   
<div className="bg-light">

    <div className="container mb-5">
       <h2 className="text-center bold mb-4 py-4">Wedding Moments</h2>
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
        src="first_img.jpg"
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
    <div className="col-md-6 mt-4 mt-md-0">
      <img src="third.jpg"
        alt="Wedding Couple"
        className="img-fluid img-height"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = "https://placehold.co/800x600/CCCCCC/333333?text=Image+Unavailable";
        }}
      />
    </div>
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
    
    

  </div>
</div>
</div>
    {/* Section 6: Testimonial Carousel */}
  <div className="testimonial-carousel-wrapper mt-5 mb-5 bg-white p-5">
  <h2 className="text-center mb-4">What Our Clients Say</h2>
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
      className="seamless-carousel mb-5 mt-5"
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
      
  
      <div className="counter-section py-5 bg-white text-center" ref={sectionRef}>
      <div className="container">
        <div className="row">
          {stats.map((stat, i) => (
            <div className="col-6 col-md-3 mb-4" key={i}>
              <h2 className="display-5">
                {stat.prefix || ""}
                {counts[i].toLocaleString()}
                {stat.suffix || ""}
              </h2>
              <p className="fs-5">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>



<div className="container my-5">
  <h2 className="text-center mb-4">Photography FAQs</h2>
  <div className="accordion" id="accordionPanelsStayOpenExample">

    {/* FAQ 1 */}
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

    {/* FAQ 2 */}
    <div className="accordion-item">
      <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
          data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false"
          aria-controls="panelsStayOpen-collapseTwo">
          Why should we choose a candid wedding photographer for our big day?
        </button>
      </h2>
      <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse"
        aria-labelledby="panelsStayOpen-headingTwo">
        <div className="accordion-body">
          A candid wedding photographer captures genuine emotions, natural moments, and unscripted beauty, giving you wedding pictures that feel real, authentic, and timeless.
        </div>
      </div>
    </div>

    {/* FAQ 3 */}
    <div className="accordion-item">
      <h2 className="accordion-header" id="panelsStayOpen-headingThree">
        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
          data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false"
          aria-controls="panelsStayOpen-collapseThree">
          Do you offer both photography and wedding films?
        </button>
      </h2>
      <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse"
        aria-labelledby="panelsStayOpen-headingThree">
        <div className="accordion-body">
          Yes! Our team specializes in both beautiful wedding pictures and cinematic wedding films so you can relive your special day in the most heartfelt way.
        </div>
      </div>
    </div>

    {/* FAQ 4 */}
    <div className="accordion-item">
      <h2 className="accordion-header" id="panelsStayOpen-headingFour">
        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
          data-bs-target="#panelsStayOpen-collapseFour" aria-expanded="false"
          aria-controls="panelsStayOpen-collapseFour">
          How long does it take to deliver the final wedding photos and films?
        </button>
      </h2>
      <div id="panelsStayOpen-collapseFour" className="accordion-collapse collapse"
        aria-labelledby="panelsStayOpen-headingFour">
        <div className="accordion-body">
          On average, your photos are delivered within 4–6 weeks, while wedding films take 6–8 weeks. We also provide a sneak peek within a few days of your wedding.
        </div>
      </div>
    </div>

    {/* FAQ 5 */}
    <div className="accordion-item">
      <h2 className="accordion-header" id="panelsStayOpen-headingFive">
        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
          data-bs-target="#panelsStayOpen-collapseFive" aria-expanded="false"
          aria-controls="panelsStayOpen-collapseFive">
          How can we book you for our wedding?
        </button>
      </h2>
      <div id="panelsStayOpen-collapseFive" className="accordion-collapse collapse"
        aria-labelledby="panelsStayOpen-headingFive">
        <div className="accordion-body">
          Simply get in touch through our contact page. We recommend booking early, as dates fill up quickly, especially during wedding season.
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




