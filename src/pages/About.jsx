import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';



const team = [
  { name: "Arjun Verma", role: "Creative Director", img: "first_img.jpg" },
  { name: "Sana Kapoor", role: "Lead Photographer", img: "second.jpg" },
  { name: "Ravi Patel", role: "Drone Operator", img: "third.jpg" },
  { name: "Meera Thomas", role: "Color Grading Expert", img: "four.jpg" },
];

const steps = [
  {
    title: 'Step 1: Initial Consultation',
    description: 'We understand your photography needs and vision in a detailed conversation.',
    icon: 'fas fa-camera-retro',
  },
  {
    title: 'Step 2: Planning & Concept',
    description: 'Creative planning of shoot location, theme, props, and outfits.',
    icon: 'fas fa-map-marker-alt',
  },
  {
    title: 'Step 3: Execution',
    description: 'Our professional team executes the shoot flawlessly using high-end gear.',
    icon: 'fas fa-cogs',
  },
  {
    title: 'Step 4: Delivery',
    description: 'We deliver fully edited high-resolution photos with premium quality.',
    icon: 'fas fa-truck',
  },
];





export default function About() {

  useEffect(() => {
  AOS.init({ duration: 1000, once: true });
}, []);


  return (
     <div>
      {/* Section 1: Banner */}
      <div
        className="about-banner d-flex align-items-center justify-content-center text-white text-center"
        style={{ backgroundImage: `url("first_img.jpg")` }}
      >
        <h1 className="display-3 fw-bold">About Us</h1>
      </div>

      {/* Section 2: About Content */}
      <div id="next-section" className="container py-5"  >
        <h2 className="text-center mt-5 mb-4 fw-bold">Snappy Photography</h2>
        <p className="lead text-center justify-content-center mb-5">
         At Snappy Times Photography, we believe every love story deserves to be told in the most beautiful and timeless way. Our passion is to create beautiful wedding pictures that capture genuine emotions, precious details, and unforgettable memories from your big day.
        </p>
      </div>

      {/* Section 3: Owner Image */}
      <div className="text-center mb-5">
        <img
          src="second.jpg"
          alt="Owner"
          className="owner-img  rounded-circle shadow"
          style={{ width: '200px', height: '200px', objectFit: 'cover' }}
        />
        <h4 className="mt-3">Mr. Rahul T.K</h4>
        <p>Founder & Creative Director</p>
      </div>
   <div className="photography-details bg-light py-5">
      
{/* Why Choose Us */}
<div className="container mb-5">
  <h2 className="text-center mb-4 fw-bold">Why Choose Us</h2>
  <div className="row text-center">
    <div className="col-md-3 mb-4 fade-in-up">
      <div className="icon-box p-4 shadow rounded h-100">
        <div className="icon-circle mx-auto mb-3">
          <i className="fas fa-camera-retro"></i>
        </div>
        <h6 className="fw-bold">DSLR + Drone Shoots</h6>
        <p className="text-muted small">Capture every angle in 4K ultra clarity.</p>
      </div>
    </div>

    <div className="col-md-3 mb-4 fade-in-up">
      <div className="icon-box p-4 shadow rounded h-100">
        <div className="icon-circle mx-auto mb-3">
          <i className="fas fa-clock"></i>
        </div>
        <h6 className="fw-bold">On-Time Delivery</h6>
        <p className="text-muted small">Quick turnaround without quality compromise.</p>
      </div>
    </div>

    <div className="col-md-3 mb-4 fade-in-up">
      <div className="icon-box p-4 shadow rounded h-100">
        <div className="icon-circle mx-auto mb-3">
          <i className="fas fa-paint-brush"></i>
        </div>
        <h6 className="fw-bold">Custom Editing</h6>
        <p className="text-muted small">Tailored effects that match your story.</p>
      </div>
    </div>

    <div className="col-md-3 mb-4 fade-in-up">
      <div className="icon-box p-4 shadow rounded h-100">
        <div className="icon-circle mx-auto mb-3">
          <i className="fas fa-heart"></i>
        </div>
        <h6 className="fw-bold">Memories that Last</h6>
        <p className="text-muted small">We deliver timeless photos for life.</p>
      </div>
    </div>
  </div>
</div>


      {/* Meet the Team */}
      <div className="container mb-5">
        <h2 className="text-center mb-4 fw-bold">Meet the Team</h2>
        <div className="row text-center">
          {team.map((member, i) => (
            <div className="col-6 col-md-3 mb-4 fade-in-up" key={i}>
              <img src={member.img} alt={member.name} className="team-img mb-2" />
              <h6>{member.name}</h6>
              <p className="text-muted">{member.role}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Our Process */}
       <div className="our-process-section py-5 bg-light">
      <h2 className="text-center mb-5 display-6 fw-bold">Our Process</h2>
      <div className="container position-relative">
        <div className="zigzag-line"></div>
        {steps.map((step, idx) => (
  <div
    className={`row align-items-center mb-5 ${idx % 2 === 0 ? '' : 'flex-row-reverse'}`}
    key={idx}
    data-aos="fade-up"
  >
    <div className="col-md-6 text-center">
      <div className="step-icon">
        <span className="icon-circle">
          <i className={step.icon}></i>
        </span>
      </div>
    </div>
    <div className="col-md-6">
      <div className="p-4 bg-white shadow rounded">
        <h4 className="fw-bold">{step.title}</h4>
        <p className="mb-0 text-muted">{step.description}</p>
      </div>
    </div>
  </div>
))}

      </div>
    </div>
     </div>
    </div>
  );
}
