"use client";
export default function Recent() {
  return (
    <section className="recent-posts">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div
              className="single-rpost d-sm-flex align-items-center"
              data-aos="fade-right"
              data-aos-duration="800"
            >
              <div className="post-content text_right">
                <time datetime="2019-04-06T13:53">15 Oct, 2019</time>
                <h3>
                  <a href="#">Proudly for us to build stylish</a>
                </h3>
                <p>
                  <a href="#">Seanding</a>, <a href="#">Website</a>,
                  <a href="#">E-commerce</a>
                </p>
                <a className="post-btn" href="#">
                  <i className="fa fa-arrow-right"></i>
                </a>
              </div>
              <div className="post-thumb">
                <img
                  className="img-fluid"
                  src="assets/images/post1.jpg"
                  alt="Post 1"
                />
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div
              className="single-rpost d-sm-flex align-items-center"
              data-aos="fade-left"
              data-aos-duration="800"
            >
              <div className="post-thumb">
                <img
                  className="img-fluid"
                  src="assets/images/post2.jpg"
                  alt="Post 1"
                />
              </div>
              <div className="post-content">
                <time datetime="2019-04-06T13:53">15 Oct, 2019</time>
                <h3>
                  <a href="#">Remind me to water the plants</a>
                </h3>
                <p>
                  <a href="#">Seanding</a>, <a href="#">Website</a>,
                  <a href="#">E-commerce</a>
                </p>
                <a className="post-btn" href="#">
                  <i className="fa fa-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div
              className="single-rpost d-sm-flex align-items-center"
              data-aos="fade-right"
              data-aos-delay="200"
              data-aos-duration="800"
            >
              <div className="post-content text_right">
                <time datetime="2019-04-06T13:53">15 Oct, 2019</time>
                <h3>
                  <a href="#">Add apples to the grocery list</a>
                </h3>
                <p>
                  <a href="#">Seanding</a>, <a href="#">Website</a>,
                  <a href="#">E-commerce</a>
                </p>
                <a className="post-btn" href="#">
                  <i className="fa fa-arrow-right"></i>
                </a>
              </div>
              <div className="post-thumb">
                <img
                  className="img-fluid"
                  src="assets/images/post3.jpg"
                  alt="Post 1"
                />
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div
              className="single-rpost d-sm-flex align-items-center"
              data-aos="fade-left"
              data-aos-delay="200"
              data-aos-duration="800"
            >
              <div className="post-thumb">
                <img
                  className="img-fluid"
                  src="assets/images/post4.jpg"
                  alt="Post 1"
                />
              </div>
              <div className="post-content">
                <time datetime="2019-04-06T13:53">15 Oct, 2019</time>
                <h3>
                  <a href="#">Make it warmer downstairs</a>
                </h3>
                <p>
                  <a href="#">Seanding</a>, <a href="#">Website</a>,
                  <a href="#">E-commerce</a>
                </p>
                <a className="post-btn" href="#">
                  <i className="fa fa-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center">
          <a href="#" className="btn_custom btn_custom-primary">
            See More
          </a>
        </div>
      </div>
    </section>
  );
}
