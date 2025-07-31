export default function Contact() {
  return (
    <div>
      <div
        className="about-banner d-flex align-items-center justify-content-center text-white text-center"
        style={{ backgroundImage: `url("first_img.jpg")` }}
      >
        <h1 className="display-3 fw-bold">CONTACT</h1>
      </div>
      <form className="row g-3">
        <div className="col-md-6">
          <label className="form-label">Name</label>
          <input type="text" className="form-control" placeholder="Your Name" />
        </div>
        <div className="col-md-6">
          <label className="form-label">Email</label>
          <input type="email" className="form-control" placeholder="Your Email" />
        </div>
        <div className="col-12">
          <label className="form-label">Message</label>
          <textarea className="form-control" rows="4" placeholder="Your Message"></textarea>
        </div>
        <div className="col-12">
          <button className="btn btn-primary">Send Message</button>
        </div>
      </form>
    </div>
  );
}
