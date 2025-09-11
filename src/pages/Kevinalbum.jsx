import React, { useState } from "react";
import { Container, Row, Col, Modal } from "react-bootstrap";
import "../App.css"; // make sure CSS is there

export default function KevinAlbum() {
  // 24 images
  const images = [
    { src: "/Kev1.webp", orientation: "vertical" },
    { src: "/Kev7.webp", orientation: "horizontal" },
    { src: "/Kev2.webp", orientation: "vertical" },
    { src: "/Kev3.webp", orientation: "vertical" },
    { src: "/Kev8.webp", orientation: "horizontal" },
    { src: "/Kev5.webp", orientation: "vertical" },
    { src: "/Kev9.webp", orientation: "vertical" },
    { src: "/Kev10.webp", orientation: "horizontal" },
    { src: "/Kev4.webp", orientation: "vertical" },
    { src: "/Kev12.webp", orientation: "horizontal" },
    { src: "/Kev14.webp", orientation: "vertical" },
    { src: "/Kev15.webp", orientation: "vertical" },
    { src: "/Kev20.webp", orientation: "horizontal" },
    { src: "/Kev16.webp", orientation: "vertical" },
    { src: "/Kev17.webp", orientation: "vertical" },
    { src: "/Kev20.webp", orientation: "horizontal" },
    
    { src: "/Kev22.webp", orientation: "vertical" },
    { src: "/Kev23.webp", orientation: "vertical" },
    { src: "/Kev.webp", orientation: "vertical" },
    { src: "/Kev6.webp", orientation: "horizontal" },
    { src: "/Kev1.webp", orientation: "vertical" },
    { src: "/Kev1.webp", orientation: "vertical" },
    { src: "/Kev1.webp", orientation: "vertical" },
    { src: "/Kev1.webp", orientation: "vertical" },
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
          backgroundImage: `url("/Kev20.webp")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "60vh",
          position: "relative",
        }}
      >
        <div className="banner-overlay"></div>
        <h1 className="display-3 fw-bold px-3 py-2 rounded position-relative z-1">
          Kevin's Birthday Album
        </h1>
      </div>

      {/* Gallery */}
      <section className="kevinalbum-gallery py-5" id="kevin-album">
        <Container fluid>
          <h2 className="text-center mb-5 fw-bold">Memories with Kevin 🎉</h2>
          <Row className="gx-3 gy-3">
            {images.map((img, index) => (
              <Col xs={6} sm={4} md={3} lg={2} key={index}>
                <div
                  className={`gallery-img ${img.orientation}`}
                  onClick={() => handleImageClick(img.src)}
                >
                  <img
                    src={img.src}
                    alt={`kevin-${index}`}
                    className="img-fluid rounded shadow-sm hover-effect"
                  />
                  <div className="overlay">
                    <span>View</span>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Modal */}
      <Modal
        show={!!selectedImage}
        onHide={handleClose}
        centered
        size="lg"
        className="image-modal"
      >
        <Modal.Body className="p-0">
          <img
            src={selectedImage}
            alt="selected"
            className="img-fluid w-100 rounded"
          />
        </Modal.Body>
      </Modal>
    </div>
  );
}
