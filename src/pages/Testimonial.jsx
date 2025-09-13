import { Container, Row, Col, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as regularStar } from '@fortawesome/free-regular-svg-icons';

const featuredTestimonials = [
  {
    name: 'Divya Nair',
    feedback: 'Absolutely the best photography experience. The team made us feel so comfortable and captured magical moments.',
    rating: 5,
    img: 'third.jpg'
  },
  {
    name: 'Nikhil Raj',
    feedback: 'I’ve worked with many photographers, but Snappy Phot stood out with creativity and passion.',
    rating: 5,
    img: 'second.jpg'
  },
  {
    name: 'Swathi Pillai',
    feedback: 'Snappy Phot exceeded our expectations. Our pre-wedding shoot turned into a fairytale.',
    rating: 5,
    img: 'four.jpg'
  },
  {
    name: 'Harsh Sinha',
    feedback: 'They handled our baby shoot with so much care and creativity. Loved the photos!',
    rating: 5,
    img: 'five.jpg'
  }
];

export default function Testimonial() {
  return (
    <div>
      {/* Banner Section */}
      <div
        className="about-banner d-flex align-items-center justify-content-center text-white text-center"
        style={{ backgroundImage: `url("first_img.jpg")`, height: "50vh", backgroundSize: "cover" }}
      >
        <h1 className="display-3 fw-bold">TESTIMONIALS</h1>
      </div>

      {/* Featured Testimonials */}
      <Container className="my-5" id="next-section">
        <h2 className="text-center mb-4">Featured Testimonials</h2>
        <p className="lead text-center text-muted mb-5">
          Real stories from our happy clients who trusted us with their special moments.
        </p>
          <div className=" my-4">
             <div className="card shadow-lg border-0 rounded-4 p-3 d-flex flex-md-row align-items-center justify-content-between  "  style={{ backgroundColor: "rgb(255,255,255)"}}>
        
        {/* Left: Logo + Details */}
        <div className="d-flex align-items-center gap-3">
          <img
            src="logo.jpg" // replace with SnappyTimes logo
            alt="SnappyTimes Logo"
            width="80"
            height="80"
            className="border "
          />
          <div>
            <h5 className="fw-bold mb-1">SNAPPYTIMES PHOTOGRAPHY</h5>
            <p className="mb-2 text-muted small">
             123 Main Street, Anna Nagar
              Near Tower Junction, Nagercoil
              Kanyakumari District, Tamil Nadu – 629001
            </p>
            <div className="d-flex align-items-center">
  <i className="bi bi-star-fill text-warning"></i>
  <i className="bi bi-star-fill text-warning"></i>
  <i className="bi bi-star-fill text-warning"></i>
  <i className="bi bi-star-fill text-warning"></i>
  <i className="bi bi-star-half text-warning"></i>
  <span className="fw-semibold ms-2">4.9</span>
</div>
          </div>
        </div>

        {/* Right: Google Maps Button */}
        <div className="mt-3 mt-md-0">
          <a
            href="https://www.google.com/maps/place/Nagercoil,+Kanyakumari,+Tamil+Nadu"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary rounded-pill px-4 fw-bold custom-btn"
            style={{ backgroundColor: "#2c247d", border: "none" }}
          >
            VIEW ON GOOGLE MAPS
          </a>
        </div>
      </div>
      </div>
        <Row className="g-4">
          {featuredTestimonials.map((testimonial, index) => (
            <Col xs={12} md={6} key={index}>
              <Card className="h-100 border-0 shadow-lg p-3 rounded-4">
                <Card.Body>
                  <Row className="align-items-center">
                    <Col xs={12} md={4} className="text-center mb-3 mb-md-0">
                      <img
                        src={testimonial.img}
                        alt={testimonial.name}
                        className="rounded-circle shadow"
                        style={{ width: '110px', height: '110px', objectFit: 'cover' }}
                      />
                    </Col>
                    <Col xs={12} md={8}>
                      <Card.Title className="fw-bold">{testimonial.name}</Card.Title>
                      <Card.Text className="text-muted">{testimonial.feedback}</Card.Text>
                      <div>
                        {[...Array(5)].map((_, starIndex) => (
                          <FontAwesomeIcon
                            key={starIndex}
                            icon={starIndex < testimonial.rating ? solidStar : regularStar}
                            style={{ color: '#FFD700', marginRight: '3px' }}
                          />
                        ))}
                      </div>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
