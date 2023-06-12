import React from "react";

export default function Footer() {
  return (
    <footer>
      <div className="footer-widgets">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-xl-3">
              <div
                className="single-widget contact-widget"
                data-aos="fade-up"
                data-aos-delay="0"
              >
                <h6 className="widget-tiltle">&nbsp;</h6>
                <p>
                  By subscribing to our mailing list you will always be update
                  with the latest news from us.
                </p>
                <div className="media">
                  <i className="fa fa-map-marker"></i>
                  <div className="media-body ms-3">
                    <h6>Address</h6>
                    Level 13, 2 Elizabeth St,
                    <br />
                    Melbourne, Victoria 3000 Australia
                  </div>
                </div>
                <div className="media">
                  <i className="fa fa-envelope-o"></i>
                  <div className="media-body ms-3">
                    <h6>Have any questions?</h6>
                    <a href="mailto:support@steelthemes.com">
                      Support@Steelthemes.com
                    </a>
                  </div>
                </div>
                <div className="media">
                  <i className="fa fa-phone"></i>
                  <div className="media-body ms-3">
                    <h6>Call us & Hire us</h6>
                    <a href="tel:+610791803458"> +61 (0) 7 9180 3458</a>
                  </div>
                </div>
                <div className="media">
                  <i className="fa fa-fax"></i>
                  <div className="media-body ms-3">
                    <h6>Fax</h6>
                    <a href="fax:911889047521432">(91) 188904752 1432</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-3 color_title">
              <div
                className="single-widget twitter-widget"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <h6 className="widget-tiltle">Fresh Tweets</h6>
                <div className="media">
                  <i className="fa fa-twitter"></i>
                  <div className="media-body ms-3">
                    <h6>
                      <a href="#">@Themes,</a> Html Version Out Now
                    </h6>
                    <span>10 Mins Ago</span>
                  </div>
                </div>
                <div className="media">
                  <i className="fa fa-twitter"></i>
                  <div className="media-body ms-3">
                    <h6>
                      <a href="#">@Envato,</a> the best selling item of the day!
                    </h6>
                    <span>20 Mins Ago</span>
                  </div>
                </div>
                <div className="media">
                  <i className="fa fa-twitter"></i>
                  <div className="media-body ms-3">
                    <h6>
                      <a href="#">@Collis,</a> We Planned to Update the Enavto
                      Author Payment Method Soon!
                    </h6>
                    <span>10 Mins Ago</span>
                  </div>
                </div>
                <div className="media">
                  <i className="fa fa-twitter"></i>
                  <div className="media-body ms-3">
                    <h6>
                      <a href="#">@SteelThemes,</a> Html Version Out Now
                    </h6>
                    <span>15 Mins Ago</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-3">
              <div
                className="single-widget recent-post-widget"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <h6 className="widget-tiltle">Latest Updates</h6>
                <div className="media">
                  <a className="rcnt-img" href="#">
                    <img src="assets/images/rcnt-post1.png" alt="Recent Post" />
                  </a>
                  <div className="media-body ms-3">
                    <h6>
                      <a href="#">An engaging</a>
                    </h6>
                    <p>
                      <i className="fa fa-user"></i>Mano
                      <i className="fa fa-eye"></i> 202 Views
                    </p>
                  </div>
                </div>
                <div className="media">
                  <a className="rcnt-img" href="#">
                    <img src="assets/images/rcnt-post2.png" alt="Recent Post" />
                  </a>
                  <div className="media-body ms-3">
                    <h6>
                      <a href="#">
                        Statistics and analysis. The key to succes.
                      </a>
                    </h6>
                    <p>
                      <i className="fa fa-user"></i>Rosias
                      <i className="fa fa-eye"></i> 20 Views
                    </p>
                  </div>
                </div>
                <div className="media">
                  <a className="rcnt-img" href="#">
                    <img src="assets/images/rcnt-post3.png" alt="Recent Post" />
                  </a>
                  <div className="media-body ms-3">
                    <h6>
                      <a href="#">Envato Meeting turns into a photoshooting.</a>
                    </h6>
                    <p>
                      <i className="fa fa-user"></i>Kien
                      <i className="fa fa-eye"></i> 74 Views
                    </p>
                  </div>
                </div>
                <div className="media">
                  <a className="rcnt-img" href="#">
                    <img src="assets/images/rcnt-post4.png" alt="Recent Post" />
                  </a>
                  <div className="media-body ms-3">
                    <h6>
                      <a href="#">An engaging embedded the video posts</a>
                    </h6>
                    <p>
                      <i className="fa fa-user"></i>Robert
                      <i className="fa fa-eye"></i> 48 Views
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-3">
              <div
                className="single-widget tags-widget"
                data-aos="fade-up"
                data-aos-delay="800"
              >
                <h6 className="widget-tiltle">Popular Tags</h6>
                <a href="#">Amazing</a>
                <a href="#">Design</a>
                <a href="#">Photoshop</a>
                <a href="#">Art</a>
                <a href="#">Wordpress</a>
                <a href="#">jQuery</a>
              </div>
              <div
                className="single-widget subscribe-widget"
                data-aos="fade-up"
                data-aos-delay="800"
              >
                <h6 className="widget-tiltle">Subscribe us</h6>
                <p>
                  Sign up for our mailing list to get latest updates and offers
                </p>
                <form className="" method="get">
                  <div className="input-group">
                    <input
                      className="field form-control"
                      name="subscribe"
                      type="email"
                      placeholder="Email Address"
                    />
                    <span className="input-group-btn">
                      <button type="submit" name="submit-mail">
                        <i className="fa fa-check"></i>
                      </button>
                    </span>
                  </div>
                </form>
                <p>We respect your privacy</p>
                <ul className="nav social-nav">
                  <li>
                    <a href="https://www.facebook.com/fh5co" target="_blank">
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-google-plus"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-google-plus"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-linkedin"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="foot-note">
        <div className="container">
          <div className="footer-content text-center text-lg-left d-lg-flex justify-content-between align-items-center">
            <p className="mb-0" data-aos="fade-right" data-aos-offset="0">
              &copy; 2019 All Rights Reserved. Design by
              <a
                href="https://freehtml5.co/multipurpose"
                target="_blank"
                className="fh5-link"
              >
                FreeHTML5.co
              </a>
              .
            </p>
            <p className="mb-0" data-aos="fade-left" data-aos-offset="0">
              <a href="#">Terms Of Use</a>
              <a href="#">Privacy & Security Statement</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
