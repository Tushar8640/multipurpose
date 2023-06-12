"use client"
export default function Featured() {
  return (
    <section className="featured">
      <div className="container">
        <div className="row">
          <div
            className="col-md-6"
            data-aos="fade-right"
            data-aos-delay="400"
            data-aos-duration="800"
          >
            <div className="title">
              <h6 className="title-primary">about Tamplate</h6>
              <h1 className="title-blue">
                a rich featured, epic & premium work.
              </h1>
            </div>
            <p>
              There are many variations of passages of available but the
              majority have suffered alteration in some form, by injected
              humour, or randomised words which don't look even slightly
              believable. If you are going to use a passage of you need to be
              sure there isn't anything embarrassing hidden in the middle of
              text. All the generators on the Internet.
            </p>
            <div className="media-element d-flex justify-content-between">
              <div className="media">
                <i className="fa fa-magic me-4"></i>
                <div className="media-body">
                  <h5>any offer</h5>
                  New York, United States
                </div>
              </div>
              <div className="media">
                <i className="fa fa-magic me-4"></i>
                <div className="media-body">
                  <h5>any offer</h5>
                  New York, United States
                </div>
              </div>
            </div>
            <a href="#" className="btn_custom btn_custom-primary">
              See More
            </a>
          </div>
          <div
            className="col-md-6"
            data-aos="fade-left"
            data-aos-delay="400"
            data-aos-duration="800"
          >
            <div className="featured-img">
              <img
                className="featured-big"
                src="assets/images/featured-img1.jpg"
                alt="Featured 1"
              />
              <img
                className="featured-small"
                src="assets/images/featured-img2.jpg"
                alt="Featured 2"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
