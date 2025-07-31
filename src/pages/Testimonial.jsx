
import { Container, Row, Col,Card } from 'react-bootstrap';
const testimonialsData = [
  {
    name: 'Anjali Verma',
    feedback: 'Snappy Phot captured our moments so beautifully! Highly recommend!',
    rating: 5,
    img: 'first_img.jpg'
  },
  {
    name: 'Rahul Mehta',
    feedback: 'Professional, friendly, and amazing results. Loved every shot!',
    rating: 5,
    img: 'second.jpg'
  },
  {
    name: 'Priya Sharma',
    feedback: 'Our family shoot turned out perfect thanks to their creativity!',
    rating: 5,
    img: 'third.jpg'
  },
  {
    name: 'Karan Gupta',
    feedback: 'Amazing editing and lighting. My portrait shoot was stunning!',
    rating: 5,
    img: 'four.jpg'
  },
  {
    name: 'Meena Joseph',
    feedback: 'Snappy Phot made my wedding day unforgettable!',
    rating: 5,
    img: 'five.jpg'
  },
  {
    name: 'Amit Patel',
    feedback: 'Very patient and detail-oriented. Worth every rupee!',
    rating: 5,
    img: 'first_img.jpg'
  }
];


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
     <div
        className="about-banner d-flex align-items-center justify-content-center text-white text-center"
        style={{ backgroundImage: `url("first_img.jpg")` }}
      >
        <h1 className="display-3 fw-bold">TESTIMONIALS</h1>
      </div>

     <Container className="text-center mt-5 my-5" id="next-section">
  <h1 className="display-4 pt-5">Testimonials</h1>
  <p className="lead text-muted">"Real stories from real people who've worked with us."</p>
</Container>

<Container className="my-5">
  <Row className="g-3">
    {testimonialsData.map((testimonial, index) => (
      <Col xs={6} md={4} key={index}>
        <Card className="h-100 shadow-sm">
          <Card.Img
            variant="top"
            src={testimonial.img}
            style={{ width: '100%', height: '300px', objectFit: 'cover' }}
          />
          <Card.Body>
            <Card.Title>{testimonial.name}</Card.Title>
            <Card.Text>{testimonial.feedback}</Card.Text>
            <div>
              {'⭐'.repeat(testimonial.rating)}{'☆'.repeat(5 - testimonial.rating)}
            </div>
          </Card.Body>
        </Card>
      </Col>
    ))}
  </Row>
</Container>

<Container className="my-5">
  <h2 className="text-center mb-4">Featured Testimonials</h2>
  <Row className="g-3">
    {featuredTestimonials.map((testimonial, index) => (
      <Col xs={12} md={6} key={index}>
        <Card className="h-100 border-0 shadow">
          <Card.Body>
            <Row className="align-items-center">
              <Col xs={12} md={4} className="text-center mb-3 mb-md-0">
                <img
                  src={testimonial.img}
                  alt={testimonial.name}
                  className="img-fluid rounded-circle"
                  style={{ width: '100px', height: '100px', objectFit: 'cover' }}
                />
              </Col>
              <Col xs={12} md={8}>
                <Card.Title>{testimonial.name}</Card.Title>
                <Card.Text>{testimonial.feedback}</Card.Text>
                <div>
                  {'⭐'.repeat(testimonial.rating)}{'☆'.repeat(5 - testimonial.rating)}
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