export default function Contact() {
  return (
    <div>
      <h2>Contact Us</h2>
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
