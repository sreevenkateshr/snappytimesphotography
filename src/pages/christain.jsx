import React, { useState ,useEffect} from 'react';
import { Modal, Button } from 'react-bootstrap';
import Slider from "react-slick";
import { Container, Row, Col,Card } from 'react-bootstrap';

export default function Christain() {
 const cardImages = [
  { src: 'first_img.jpg', title: 'Emily & James' },
  { src: 'second.jpg', title: 'Sarah & Michael' },
  { src: 'third.jpg', title: 'Olivia & Daniel' },
  { src: 'four.jpg', title: 'Grace & Matthew' },
  { src: 'five.jpg', title: 'Hannah & Christopher' },
  { src: 'second.jpg', title: 'Sophia & David' }
];

const moments = [
  { img: 'second.jpg', caption: 'Church Ceremony' },
  { img: 'third.jpg', caption: 'Exchange of Vows' },
  { img: 'four.jpg', caption: 'Ring Exchange' },
  { img: 'five.jpg', caption: 'First Dance' },
  { img: 'second.jpg', caption: 'Blessing and Toasts' }
];


const galleryColumns = [
  [
    { src: 'first_img.jpg', size: 'medium' },
    { src: 'second.jpg', size: 'large' }
  ],
  [
    { src: 'third.jpg', size: 'medium' },
    { src: 'four.jpg', size: 'small' },
    { src: 'five.jpg', size: 'medium' },
    { src: 'four.jpg', size: 'small' }
  ],
  [
    { src: 'second.jpg', size: 'small' },
    { src: 'first_img.jpg', size: 'small' },
    { src: 'third.jpg', size: 'large' }
  ],
  [
    { src: 'four.jpg', size: 'large' },
    { src: 'five.jpg', size: 'medium' }
  ]
];

 const carouselData = [
    {
      centerImage: "first_img.jpg",
      caption: "Jafro & Roshiba",
      sides: [
        "second.jpg",
        "third.jpg",
        "four.jpg",
        "five.jpg",
      ],
    },
    {
      centerImage: "first_img.jpg",
      caption: "Sam & Nora",
      sides: [
        "second.jpg",
        "third.jpg",
        "four.jpg",
        "five.jpg",
      ],
    },
    {
      centerImage: "first_img.jpg",
      caption: "Kiran & Zara",
      sides: [
        "second.jpg",
        "third.jpg",
        "four.jpg",
        "five.jpg",
      ],
    },
    {
      centerImage: "first_img.jpg",
      caption: "Aryan & Maya",
      sides: [
        "second.jpg",
        "third.jpg",
        "four.jpg",
        "five.jpg",
      ],
    },
  ];
const [showModal, setShowModal] = useState(false);
const [selectedImage, setSelectedImage] = useState(null);

const handleImageClick = (src) => {
  setSelectedImage(src);
  setShowModal(true);
};

const handleClose = () => {
  setShowModal(false);
  setSelectedImage(null);
};

useEffect(() => {
    // Manually initialize the Bootstrap Carousel
    const carouselElement = document.querySelector("#customCarousel");
    if (carouselElement) {
      const bsCarousel = new window.bootstrap.Carousel(carouselElement, {
        interval: 3000,
        ride: "carousel",
        pause: false,
        wrap: true,
      });
    }
  }, []);
  
  
  return (

  
  
    <div>
      <div
        className="about-banner d-flex align-items-center justify-content-center text-white text-center"
        style={{ backgroundImage: `url("first_img.jpg")` }}
      >
        <h1 className="display-3 fw-bold">CHRISTAIN WEEDING</h1>
      </div>
                   <>
      {/* Section 1: Intro */}
      <section className="intro py-5 text-center" id="next-section">
        <Container>
         <h2>Christian Wedding Memories</h2>
<p>
  “Every vow whispered, every ring exchanged — witness the sacred beauty of love and faith captured in timeless moments.”
</p>
        </Container>
      </section>

      {/* Section 2: Cards */}
      <section className="photo-cards py-5">
        <Container>
          <Row>
            {cardImages.map((img, index) => (
              <Col key={index} xs={12} sm={6} md={4} className="mb-4">
                <Card className="wedding-card h-100">
                  <Card.Img variant="top" src={img.src} className="img-fluid" />
                  <Card.Body className="text-center">
                    <Card.Title>{img.title}</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

<section className="moments-section py-5 text-center">
  <Container>
    <h2 className="mb-4">Moments That Matter</h2>
    <Row className="g-4 justify-content-center">
      {moments.map((moment, idx) => (
        <Col key={idx} xs={6} md={4}>
          <div className="moment-item">
            <img
              src={moment.img}
              alt={moment.caption}
              className="img-fluid small-icon mb-2 rounded shadow-sm"
            />
            <p className="caption-text">{moment.caption}</p>
          </div>
        </Col>
      ))}
    </Row>
  </Container>
</section>



      {/* Section 3: Gallery */}
         <section className="wedding-gallery py-5">
      <Container fluid>
        <h2 className="text-center mb-5">Wedding Gallery</h2>
        <Row className="gx-3 gy-3">
          {galleryColumns.map((column, colIndex) => (
            <Col xs={6} md={3} key={colIndex} className='gallery-column'>
              {column.map((img, index) => (
                <div key={index} className={`gallery-img ${img.size}`}>
                  <img src={img.src} alt={`wedding-${colIndex}-${index}`}  onClick={() => handleImageClick(img.src)}
  style={{ cursor: 'pointer' }} />
                </div>
              ))}
            </Col>
          ))}
        </Row>
      </Container>
    </section>
<div className="container mt-5 mb-5">
  <div id="customCarousel" className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-inner">
      {carouselData.map((item, index) => (
        <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
          <div className="d-flex justify-content-center align-items-center">
            {/* Left */}
            <div className="d-flex flex-column gap-2 me-3">
              <img src={item.sides[0]} className="img-fluid" style={{ width: "320px", height: "360px", objectFit: "cover" }} />
              <img src={item.sides[1]} className="img-fluid" style={{ width: "320px", height: "360px", objectFit: "cover" }} />
            </div>
            {/* Center */}
            <div className="text-center">
              <img src={item.centerImage} className="img-fluid shadow carousel-center-image" style={{ width: "490px", height: "600px", objectFit: "cover" }} />
              <h5 className="mt-2">{item.caption}</h5>
            </div>
            {/* Right */}
            <div className="d-flex flex-column gap-2 ms-3">
              <img src={item.sides[2]} className="img-fluid" style={{ width: "320px", height: "360px", objectFit: "cover" }} />
              <img src={item.sides[3]} className="img-fluid" style={{ width: "320px", height: "360px", objectFit: "cover" }} />
            </div>
          </div>
        </div>
      ))}
    </div>

    {/* Controls */}
    <button className="carousel-control-prev" type="button" data-bs-target="#customCarousel" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true" style={{ filter: 'invert(1)' }}></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#customCarousel" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true" style={{ filter: 'invert(1)' }}></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
</div>

<Modal
  show={showModal}
  onHide={handleClose}
  centered
  fullscreen
  contentClassName="custom-modal-content"
  backdropClassName="custom-backdrop"
>
  <Modal.Body className="p-0 position-relative d-flex align-items-center justify-content-center">
    <Button
      variant="transparent"
      onClick={handleClose}
      className="position-absolute top-0 end-0 m-3 fs-1 fw-bold"
      style={{ backgroundColor: 'black',
    color: 'white',
    fontSize: '1.5rem',
    height: '40px',
    width: '40px',
    padding: '0',
    border: 'none',
    borderRadius: '4px',
    zIndex: 10,
    lineHeight: '1'}}
    >
      &times;
    </Button>
    <img
      src={selectedImage}
      alt="Full View"
      className="w-100 h-100 object-fit-contain  d-flex align-items-center justify-content-center"
      style={{ 
      maxHeight: '90vh',
      width: 'auto',
      objectFit: 'contain'
    }}
    />
  </Modal.Body>
</Modal>

    </>
      </div>


    );

}
