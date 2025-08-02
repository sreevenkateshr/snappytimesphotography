
import React, { useState } from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';

const blogsData = [
  {
    title: 'Best Times of Day for Outdoor Wedding Photos and Why',
    image: 'five.jpg',
    date: '06/03/2025',
    content: 'Golden hour offers soft, flattering light, perfect for romantic and dramatic outdoor wedding photos. Early morning can give a fresh and dewy look while sunset brings a warm, dreamy vibe.'
  },
  {
    title: 'How to Capture Unique Details That Tell Your Wedding Story',
    image: 'first_img.jpg',
    date: '16/06/2025',
    content: 'From the bride’s accessories to handwritten vows, capturing the little things adds depth and personality to your wedding album. Focus on emotion and atmosphere to narrate the story beautifully.'
  },
  {
    title: 'New Trends in Outdoor Photography',
    image: 'second.jpg',
    date: '25/05/2025',
    content: 'Natural filters, candid moments, and drone shots are among the top photography trends for outdoor weddings this year. These add uniqueness and wow-factor to your memories.'
  },
  {
    title: 'Creative Couple Poses for Memorable Shoots',
    image: 'third.jpg',
    date: '05/01/2025',
    content: 'Think beyond the traditional – try movement-based poses, laughter-filled spins, or intimate forehead touches. These create genuine memories instead of stiff photos.'
  },
  {
    title: 'Top 5 Candid Wedding Moments to Capture',
    image: 'five.jpg',
    date: '24/04/2025',
    content: 'First looks, parents’ tears, spontaneous laughter, emotional toasts, and the couple’s private moments often become the most treasured photos of the day.'
  },
  {
    title: 'Planning a Destination Wedding Shoot',
    image: 'five.jpg',
    date: '04/02/2025',
    content: 'Consider the landscape, local culture, and light quality. Visit locations ahead of time, and plan your shoot early morning or late evening to avoid harsh light.'
  },
  {
    title: 'How to Pose Naturally in Front of the Camera',
    image: 'four.jpg',
    date: '13/03/2025',
    content: 'Focus on your partner, breathe, and move slowly. Gentle touches, eye contact, and movement create fluid, natural moments instead of stiff poses.'
  },
  {
    title: 'Behind-the-Scenes of a Wedding Photographer',
    image: 'third.jpg',
    date: '03/01/2025',
    content: 'Ever wondered what your photographer does all day? From scouting lighting to calming nerves, they are storytellers capturing moments from start to finish.'
  },
  {
    title: 'Choosing the Right Light for Your Shoot',
    image: 'second.jpg',
    date: '12/02/2025',
    content: 'Midday sun can cause harsh shadows, so aim for early morning or golden hour. Reflectors and diffusers help control light for more flattering portraits.'
  },
  {
    title: 'Editing Styles that Make Your Photos Pop',
    image: 'first_img.jpg',
    date: '01/25/2025',
    content: 'Moody tones, airy edits, vintage filters — editing styles can dramatically change your album’s feel. Choose one that matches your personality and event theme.'
  },
];


export default function Blog() {
    const [visibleBlogs, setVisibleBlogs] = useState(9); // Show 3 rows (3x3)
    const [expandedIndex, setExpandedIndex] = useState(null);

const toggleReadMore = (index) => {
  setExpandedIndex(expandedIndex === index ? null : index);
};

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
    <Col key={index} xs={12} md={6} lg={4}>
      <Card className="h-100 shadow-sm rounded-4 overflow-hidden">
        <Card.Img variant="top" src={blog.image} style={{ height: '300px', objectFit: 'cover' }} />
        <Card.Body>
          <Card.Title style={{ fontSize: '1.1rem', fontWeight: '600' ,fontFamily: 'Playfair Display, serif' }}>{blog.title}</Card.Title>

          <Card.Text  style={{ fontFamily: 'Open Sans, sans-serif', fontSize: '0.95rem' }}>
            {expandedIndex === index
              ? blog.content
              : blog.content.substring(0, 100) + '...'}
          </Card.Text>

          <button
            className="btn btn-link p-0 text-primary text-decoration-none"
            onClick={() => toggleReadMore(index)}
          >
            {expandedIndex === index ? 'Read Less »' : 'Read More »'}
          </button>
        </Card.Body>

        <Card.Footer className="bg-white border-0 text-muted">
          {blog.date}
        </Card.Footer>
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
