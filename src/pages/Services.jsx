
import { Carousel } from 'react-bootstrap';
import { useState } from "react";
import { Modal, Button } from 'react-bootstrap';

const weddingTypes = [
  {
    title: "Brahmin Wedding",
    image: "first_img.jpg",
  },
  {
    title: "Hindu Wedding",
    image: "five.jpg",
  },
  {
    title: "Muslim Wedding",
    image: "four.jpg",
  },
  {
    title: "Christian Wedding",
    image: "third.jpg",
  },
  {
    title: "North Indian Wedding",
    image: "second.jpg",
  },
  {
    title: "South Indian Wedding",
    image: "first_img.jpg",
  },
];


const weddingAlbums = [
  {
    title: "Aarav & Priya",
    images: ["third.jpg", "second.jpg", "first_img.jpg"],
  },
  {
    title: "Rehan & Aisha",
    images: ["four.jpg", "five.jpg", "first_img.jpg"],
  },
];
export default function Services() {

   const [activeAlbum, setActiveAlbum] = useState(0);
  return (
    <div>
      <div
        className="about-banner d-flex align-items-center justify-content-center text-white text-center"
        style={{ backgroundImage: `url("first_img.jpg")` }}
      >
        <h1 className="display-3 fw-bold">WEDDING</h1>
      </div>

         <section className="py-5 bg-white text-center" id="next-section">
      <h2 className="mb-5  mt-5 fw-bold display-6">Wedding Styles We Capture</h2>
      <div className="container">
        <div className="row g-4">
          {weddingTypes.map((item,i) => (
            <div
              key={i}
              className="col-6 col-lg-4"
            >
              <div className="wedding-box position-relative">
                <img
                  src={item.image} // Replace with your actual images
                  alt={item.title}
                  className="img-fluid rounded shadow"
                />
                <div className="overlay-text">
                  <h5>{item.title}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

        <section className="container py-5">
      {/* First Album */}
      <div className="row align-items-center mb-5">
        <div className="col-lg-7">
          <div className="row g-2">
            <div className="col-4">
              <img src="third.jpg" className="img-fluid rounded" data-bs-toggle="modal" data-bs-target="#modal1" alt="img1" />
            </div>
            <div className="col-8">
              <img src="five.jpg" className="img-fluid rounded mb-2"   style={{ height: '550px', objectFit: 'cover', width: '100%' }}data-bs-toggle="modal" data-bs-target="#modal2" alt="img2" />
            
            </div>
            <div className="col-6">
              <img src="first_img.jpg" className="img-fluid rounded" data-bs-toggle="modal" data-bs-target="#modal4" alt="img4" />
            </div>
            <div className="col-6">
              <img src="four.jpg" className="img-fluid rounded" data-bs-toggle="modal" data-bs-target="#modal5" alt="img5" />
            </div>
           
          </div>
        </div>

        <div className="col-lg-5  text-center">
          <div   style={{ fontFamily: "'Great Vibes', 'Playfair Display', serif", textAlign: 'center' }}>
  <h2 style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>Aarav</h2>
  <h3 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>&</h3>
  <h2 style={{ fontSize: '3rem' }}>Priya</h2>
</div>


             <div className="mt-3">
      <Carousel interval={5000}>
        <Carousel.Item>
          <img
            className="d-block w-100 rounded"
            src="first_img.jpg"
            alt="album1-1"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 rounded"
            src="second.jpg"
            alt="album1-2"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 rounded"
            src="third.jpg"
            alt="album1-3"
          />
        </Carousel.Item>
      </Carousel>
    </div>
    </div>
    </div>

      {/* Second Album */}
      <div className="row align-items-center flex-lg-row-reverse">
        <div className="col-lg-7">
          <div className="row g-2">
            <div className="col-6">
              <img src="second.jpg" className="img-fluid rounded" data-bs-toggle="modal" data-bs-target="#modal7" alt="img7" />
            </div>
            <div className="col-6">
              <img src="first_img.jpg" className="img-fluid rounded" data-bs-toggle="modal" data-bs-target="#modal8" alt="img8" />
            </div>
            
            <div className="col-4">
              <img src="five.jpg" className="img-fluid rounded" data-bs-toggle="modal" data-bs-target="#modal10" alt="img10" />
            </div>
            <div className="col-8">
              <img src="four.jpg" className="img-fluid rounded" data-bs-toggle="modal" data-bs-target="#modal11"  style={{ height: '550px', objectFit: 'cover', width: '100%' }} alt="img11" />
            </div>
          </div>
        </div>

        <div className="col-lg-5 text-center">
           <div   style={{ fontFamily: "'Great Vibes', 'Playfair Display', serif", textAlign: 'center' }}>
  <h2 style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>Aarav</h2>
  <h3 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>&</h3>
  <h2 style={{ fontSize: '3rem' }}>Priya</h2>
</div>
           <div className="mt-3">
      <Carousel interval={5000}>
        <Carousel.Item>
          <img
            className="d-block w-100 rounded"
            src="first_img.jpg"
            alt="album1-1"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 rounded"
            src="second.jpg"
            alt="album1-2"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 rounded"
            src="third.jpg"
            alt="album1-3"
          />
        </Carousel.Item>
      </Carousel>
    </div>
    </div>
      </div>
    </section>
    </div>


  );
}
