import { useState } from "react";
import { Container, Row, Col, Modal } from "react-bootstrap";

export default function KevinAlbum() {
  // 24 images
  const images = [
    { src: "/Kev1.webp", size: "medium" },
    { src: "/Kev7.webp", size: "large" },
    { src: "/Kev2.webp", size: "medium" },
    { src: "/Kev3.webp", size: "medium" },
    { src: "/Kev8.webp", size: "large" },
    { src: "/Kev5.webp", size: "medium" },
    { src: "/Kev9.webp", size: "large" },
    { src: "/Kev10.webp", size: "large" },
    { src: "/Kev4.webp", size: "medium" },
    { src: "/Kev12.webp", size: "large" },
    { src: "/Kev14.webp", size: "medium" },
    { src: "/Kev15.webp", size: "medium" },
    { src: "/Kev20.webp", size: "large" },
    { src: "/Kev16.webp", size: "medium" },
    { src: "/Kev17.webp", size: "large" },
    { src: "/Kev20.webp", size: "large" },
    { src: "/Kev22.webp", size: "medium" },
    { src: "/Kev23.webp", size: "medium" },
    { src: "/Kev24.webp", size: "medium" },
   
    
    { src: "/Kev17.webp", size: "medium" },
  ];

  // Group into 4 columns
  const columnCount = 4;
  const galleryColumns = Array.from({ length: columnCount }, () => []);
  images.forEach((img, index) => {
    galleryColumns[index % columnCount].push(img);
  });

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
      <section className="kevinalbum-gallery py-5" id="next-section">
        <Container fluid>
          <h2 className="text-center mb-5 fw-bold">Memories with Kevin 🎉</h2>
          <Row className="gx-3 gy-3">
            {galleryColumns.map((column, colIndex) => (
              <Col xs={6} md={3} key={colIndex} className="gallery-column">
                {column.map((img, index) => (
                  <div
                    key={index}
                    className={`gallery-img ${img.size}`}
                    onClick={() => handleImageClick(img.src)}
                    style={{ cursor: "pointer" }}
                  >
                    <img
                      src={img.src}
                      alt={`kevin-${colIndex}-${index}`}
                      className="img-fluid  shadow-sm hover-effect"
                      loading="lazy"
                    />
                  </div>
                ))}
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
        <Modal.Header closeButton />
        <Modal.Body className="p-0">
          <img
            src={selectedImage}
            alt="selected"
            className="img-fluid w-100"
          />
        </Modal.Body>
      </Modal>
    
    </div>
  );
}
