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
      <Container className="my-5">
        <h2 className="text-center mb-4">Featured Testimonials</h2>
        <p className="lead text-center text-muted mb-5">
          Real stories from our happy clients who trusted us with their special moments.
        </p>
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
