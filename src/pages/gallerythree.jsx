import React from "react";
import { Container,Row,Col } from "react-bootstrap";




export default function Gallerythree(){
    
const galleryColumns = [
  [
    { src: 'first_img.jpg', size: 'medium' },
    { src: 'second.jpg', size: 'large' }
  ],
  [
    { src: 'third.jpg', size: 'medium' },
    { src: 'four.jpg', size: 'medium' },
    { src: 'five.jpg', size: 'medium' }
  ],
  [
    { src: 'second.jpg', size: 'medium' },

    { src: 'third.jpg', size: 'large' }
  ],
  [
    { src: 'four.jpg', size: 'large' },
    { src: 'five.jpg', size: 'medium' }
  ]
];

const galleryColumn = [
  [
    { src: 'first_img.jpg', size: 'medium' },
    { src: 'second.jpg', size: 'large' }
  ],
  [
    { src: 'third.jpg', size: 'medium' },
    { src: 'four.jpg', size: 'medium' },
    { src: 'five.jpg', size: 'medium' }
  ],
  [
    { src: 'second.jpg', size: 'medium' },

    { src: 'third.jpg', size: 'large' }
  ]
];
    return(

    <div>
      <div
        className="about-banner d-flex align-items-center justify-content-center text-white text-center"
        style={{ backgroundImage: `url("first_img.jpg")` }}
      >
        <h1 className="display-3 fw-bold">Gallery</h1>
      </div>


               <section className="wedding-gallery pt-5" id="next-section">
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


    
               <section className="wedding-gallery pb-5" >
      <Container fluid>
        
        <Row className="gx-3 gy-0">
          {galleryColumn.map((column, colIndex) => (
            <Col xs={4} md={0} key={colIndex} className='gallery-column'>
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
      </div>
)
}