import { useState } from "react";
import { Container, Row, Col, Modal } from "react-bootstrap";
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function KevinAlbum() {
  useEffect(() => {
    Aos.init({ duration: 800, easing: "ease-in-out", once: true });
  } , []);
  // 24 images

  // Group into 4 columns

  const images = [
    { src: "/Kev1.webp", orientation: "vertical" },
    { src: "/Kev2.webp", orientation: "vertical" },
    { src: "/Kev3.webp", orientation: "vertical" },
    { src: "/Kev4.webp", orientation: "vertical" },
    { src: "/Kev5.webp", orientation: "vertical" },
    { src: "/Kev22.webp", orientation: "vertical" },
    
    { src: "/Kev8.webp", orientation: "horizontal" },
    { src: "/Kev9.webp", orientation: "vertical" },
    { src: "/Kev10.webp", orientation: "horizontal" },
    { src: "/Kev11.webp", orientation: "horizontal" },
    { src: "/Kev12.webp", orientation: "horizontal" },
    { src: "/Kev13.webp", orientation: "horizontal" },
    { src: "/Kev14.webp", orientation: "horizontal" },
    { src: "/Kev15.webp", orientation: "vertical" },
    { src: "/Kev16.webp", orientation: "vertical" },
    { src: "/Kev17.webp", orientation: "vertical" },
    { src: "/Kev18.webp", orientation: "vertical" },
    { src: "/Kev19.webp", orientation: "vertical" },
    { src: "/Kev20.webp", orientation: "horizontal" },
    { src: "/Kev21.webp", orientation: "horizontal" },
     { src: "/Kev24.webp", orientation: "horizontal" },
  ];

  const [selectedImage, setSelectedImage] = useState(null);
  const handleImageClick = (src) => setSelectedImage(src);
  const handleClose = () => setSelectedImage(null);

  return (
    <div>
      {/* Banner */}
      <div
        className="kevinalbum-banner d-flex align-items-center justify-content-center text-white text-center"
        style={{
          backgroundImage: `url("/Kev1.webp")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "50vh",
          position: "relative",
        }}
      >
        <div className="banner-overlay"></div>
        <h1 className="display-4 fw-bold px-3 py-2 rounded position-relative z-1">
          Kevin's Birthday Album
        </h1>
      </div>

      {/* Gallery */}
      <section className="kevinalbum-gallery py-4" >
        <Container fluid>
          <h2 className="text-center mb-4 fw-bold">Memories with Kevin 🎉</h2>

          <div className="masonry">
            {images.map((img, index) => (
              <div
                key={index}
                className={`masonry-item ${img.orientation}`}
                onClick={() => handleImageClick(img.src)}
                data-aos="fade-up"
              >
                <img src={img.src} alt={`kevin-${index}`}  />
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Modal */}
     <Modal show={!!selectedImage} onHide={handleClose} centered size="lg" dialogClassName="custom-modal">
  <Modal.Body className="p-0 position-relative">
    <button className="close-btn" onClick={handleClose}>
      &times;
    </button>
    <img src={selectedImage} alt="selected" className="img-fluid w-100 modal-image" />
  </Modal.Body>
</Modal>


    </div>
  );
}
