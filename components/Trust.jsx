import React from "react";
import LightGallery from "lightgallery/react";

// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

import lgThumbnail from "lightgallery/plugins/thumbnail";

export default function Trust() {
  return (
    <section className="trust">
      <div className="container">
        <div className="row">
          <div
            className="offset-xl-1 col-xl-6"
            data-aos="fade-right"
            data-aos-delay="200"
            data-aos-duration="800"
          >
            <div className="title">
              <h6 className="title-primary">about Tamplate</h6>
              <h1>a rich featured, epic & premium work.</h1>
            </div>
            <p>
              Suspendisse facilisis commodo lobortis. Nullam mollis lobortis ex
              vel faucibus. Proin nec viverra turpis. Nulla eget justo
              scelerisque, pretium purus vel, congue libero. Suspendisse
              potenti.
            </p>
            <h5>Web Design & Development</h5>
            <ul className="list-unstyled">
              <li>Web Content</li>
              <li>Website other</li>
              <li>Fashion</li>
              <li>Moblie & Tablette</li>
            </ul>
          </div>
          <div className="col-xl-5 gallery">
            <LightGallery
              plugins={[lgThumbnail]}
              elementClassNames="row g-0 h-100"
              speed={500}
            >
              <a
                href="assets/images/gallery1.jpg"
                className="w-50 h-100 gal-img"
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-duration="400"
              >
                <img
                  className="img-fluid"
                  src="assets/images/gallery1.jpg"
                  alt="Gallery Image"
                />
                <i className="fa fa-caret-right"></i>
              </a>
              <a
                href="assets/images/gallery2.jpg"
                className="w-50 h-50 gal-img"
                data-aos="fade-up"
                data-aos-delay="400"
                data-aos-duration="600"
              >
                <img
                  className="img-fluid"
                  src="assets/images/gallery2.jpg"
                  alt="Gallery Image"
                />
                <i className="fa fa-caret-right"></i>
              </a>
              <a
                href="assets/images/gallery3.jpg"
                className="w-50 h-50 gal-img gal-img3"
                data-aos="fade-up"
                data-aos-delay="0"
                data-aos-duration="600"
              >
                <img
                  className="img-fluid"
                  src="assets/images/gallery3.jpg"
                  alt="Gallery Image"
                />
                <i className="fa fa-caret-right"></i>
              </a>
            </LightGallery>
          </div>
        </div>
      </div>
    </section>
  );
}
