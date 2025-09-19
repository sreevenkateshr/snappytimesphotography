import React from "react";
import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
import { FaArrowRight } from "react-icons/fa"; 

const galleryItems = [
  { img: "four.jpg", title: "Arun's Birthday", link: "/kevinalbum" },
  { img: "five.jpg", title: "Kevin's Birthday", link: "/kevinalbum" },
  { img: "first_img.jpg", title: "Anjali & Rohit Wedding", link: "/galleryfirst" },
  { img: "four.jpg", title: "Priya & Arjun Wedding", link: "/gallerytwo" },
  { img: "five.jpg", title: "Neha & Karan Wedding", link: "/gallerythree" },
  { img: "first_img.jpg", title: "Sneha & Raj Wedding", link: "/galleryfour" },
  { img: "four.jpg", title: "Meera & Vikram Wedding", link: "/galleryfive" },
  { img: "five.jpg", title: "Aditi & Rahul Wedding", link: "/gallerysix" }
];

export default function Gallery() {
    useEffect(() => {
    AOS.init({ duration: 800, easing: "ease-in-out", once: true });
  }, []);
  return (
    <div>
    <div
        className="about-banner d-flex align-items-center justify-content-center text-white text-center"
        style={{ backgroundImage: `url("first_img.jpg")` }}
      >
        <h1 className="display-3 fw-bold">Galleries</h1>
      </div>
  <div className="container my-5">
      <div className="row">
        {galleryItems.map((item, index) => (
          <div
            className="col-6 col-md-3 text-center mb-4"
            key={index}
            data-aos="fade-up"
          >
            <div className="image-wrapperss">
              <img
                src={item.img}
                alt={item.title}
                className="img-fluid galleries-img"
              />
            </div>
            <div className="galleries-footer">
              <span className="galleries-title">{item.title}</span>
              <a href={item.link} className="arrow-link">
                <FaArrowRight />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}
