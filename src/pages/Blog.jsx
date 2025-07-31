
import React, { useState } from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';

const blogsData = [
  {
    title: 'Best Times of Day for Outdoor Wedding Photos and Why',
    image: 'five.jpg',
    date: '06/23/2025',
  },
  {
    title: 'How to Capture Unique Details That Tell Your Wedding Story',
    image: 'first_img.jpg',
    date: '06/16/2025',
  },
  {
    title: 'New Trends in Outdoor Photography',
    image: 'second.jpg',
    date: '05/19/2025',
  },
  {
    title: 'Creative Couple Poses for Memorable Shoots',
    image: 'third.jpg',
    date: '05/01/2025',
  },
  {
    title: 'Top 5 Candid Wedding Moments to Capture',
    image: 'five.jpg',
    date: '04/15/2025',
  },
  {
    title: 'Planning a Destination Wedding Shoot',
    image: 'five.jpg',
    date: '04/02/2025',
  },
  {
    title: 'How to Pose Naturally in Front of the Camera',
    image: 'four.jpg',
    date: '03/20/2025',
  },
  {
    title: 'Behind-the-Scenes of a Wedding Photographer',
    image: 'third.jpg',
    date: '03/01/2025',
  },
  {
    title: 'Choosing the Right Light for Your Shoot',
    image: 'second.jpg',
    date: '02/12/2025',
  },
  {
    title: 'Editing Styles that Make Your Photos Pop',
    image: 'first_img.jpg',
    date: '01/25/2025',
  },
];

export default function Blog() {
    const [visibleBlogs, setVisibleBlogs] = useState(9); // Show 3 rows (3x3)

  const handleLoadMore = () => {
    setVisibleBlogs((prev) => prev + 3);
  };
  return (
    <div>
      <div
        className="about-banner d-flex align-items-center justify-content-center text-white text-center"
        style={{ backgroundImage: `url("first_img.jpg")`}} 
      >
        <h1 className="display-3 fw-bold">BLOGS</h1>
      </div>
          <Container className="py-5 mt-5" id="next-section">
      <Row className="g-4">
        {blogsData.slice(0, visibleBlogs).map((blog, index) => (
          <Col key={index} xs={6} md={4}>
            <Card className="h-100 shadow-sm rounded-4 overflow-hidden">
              <Card.Img variant="top" src={blog.image} className="rounded-top" style={{width: "auto", height: "300px", objectFit: "cover"}}/>
              <Card.Body>
                <Card.Title style={{ fontSize: '1rem' }}>{blog.title}</Card.Title>
                <Card.Text>
                 <span className="text-primary">READ MORE »</span>
                </Card.Text>
              </Card.Body>
              <Card.Footer className="bg-white border-0 text-muted">{blog.date}</Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>

      {visibleBlogs < blogsData.length && (
        <div className="text-center mt-4">
          <Button variant="outline-primary" onClick={handleLoadMore}>
            Load More
          </Button>
        </div>
      )}
    </Container>
    </div>
  );
}
