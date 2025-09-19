import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { useNavigate } from "react-router-dom";
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function Birthday() {
  useEffect(() => {
    Aos.init({ duration: 800, easing: "ease-in-out", once: true });
  }  , []);
  const galleryImages = ["first_img.jpg", "second.jpg","third.jpg","four.jpg","five.jpg","first_img.jpg"];
 const navigate=useNavigate();
  
  return (

  
  
    <div>
      <div
        className="about-banner d-flex align-items-center justify-content-center text-white text-center"
        style={{ backgroundImage: `url("first_img.jpg")` }}
      >
        <h1 className="display-3 fw-bold">INDOOR</h1>
      </div>

          <div className="container py-5 birthday-page" id="next-section">
      {/* Page Title and Quote Section */}
      

    <div className="birthday-gallery-section">
      {/* Indoor Moments Gallery */}
      <section className="container py-5">
        <div className='text-center mb-5'>
        <h2 className="fancy-heading">Indoor Moments Gallery</h2></div>
        <div className="row" >
          {galleryImages.map((img, i) => (
            <div key={i} className="col-md-4 mb-4 gallery-item " data-aos="fade-up">
              <div className="image-wrappers">
                <img
                  src={img}
                  alt={`Birthday Moment ${i + 1}`}
                  className="img-fluid creative-image"
                />
                <div className="overlay-text1">Memory #{i + 1}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>

      {/* Props & Backdrops Section */}
      {/* <section className="bg-light py-5 props-section">
  <div className="container">
    <h2 className="text-center mb-5 fancy-heading">Props & Backdrops</h2>
    <div className="row justify-content-center text-center">
      {[
        { title: 'Balloons', img: 'first_img.jpg' },
        { title: 'Fairy Lights', img: 'second.jpg' },
        { title: 'Number Stands', img: 'third.jpg' },
        { title: 'Colorful Backdrops', img: 'four.jpg' }
      ].map((item, index) => (
        <div key={index} className="col-6 col-md-3 mb-4">
          <div className="hexagon-box animate-prop">
            <div className="hexagon">
              <img src={item.img} alt={item.title} className="img-fluid" />
            </div>
            <h6 className="mt-3">{item.title}</h6>
          </div>
        </div>
      ))}
    </div>
  </div>
</section> */}


      {/* Birthday Outfit Inspirations */}
      {/* <section className="container py-5">
  <h2 className="text-center fancy-heading mb-5">Birthday Outfit Inspirations</h2>
  <div className="row justify-content-center">
    {[
      { name: 'Princess Dress', image: 'first_img.jpg' },
      { name: 'Superhero Costume', image: 'second.jpg' },
      { name: 'Traditional Wear', image: 'third.jpg' },
      { name: 'Party Tux', image: 'four.jpg' }
    ].map((outfit, i) => (
      <div key={i} className="col-md-3 col-6 mb-4">
        <div className="outfit-card shadow-sm rounded text-center p-3 h-100">
          <img
            src={outfit.image}
            alt={outfit.name}
            className="outfit-img rounded-circle mb-3"
          />
          <h5 className="outfit-name">{outfit.name}</h5>
        </div>
      </div>
    ))}
  </div>
</section> */}

  <section className="bg-white py-5 album-section" >
  <div className="container">
    <h2 className="text-center fancy-heading mb-5">Birthday Album</h2>
    <div className="polaroid-gallery" data-aos="fade-up">
      {[
        
        'third.jpg',
        'four.jpg',
        'five.jpg',
        'third.jpg',
         'third.jpg',
        'four.jpg',
        'five.jpg',
        'third.jpg',
         'third.jpg',
        'four.jpg',
        'five.jpg',
        'third.jpg',
      ].map((image, i) => (
        <div className={`polaroid-item tilt-${i % 3}`} key={i} >
          <img
            src={image}
            alt={`Decor ${i + 1}`}
            className="img-fluid"
          />
        </div>
      ))}
    </div>
     <div className="text-center mt-4">
     <button
            className="btn btn-outline-danger btn-lg rounded-pill shadow "
            onClick={() => navigate("/kevinalbum")}
          >
            Explore Albums
          </button>
          </div>
  </div>
</section>



    </div>
    </div>
    
  );
}