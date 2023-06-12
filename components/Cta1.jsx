import React from 'react'

export default function Cta1() {
  return (
    <section className="cta" data-aos="fade-up" data-aos-delay="0">
    <div className="container">
      <div className="cta-content d-xl-flex align-items-center justify-content-around  text-xl-left">
        <div className="content" data-aos="fade-right" data-aos-delay="200">
          <h2>FOR BUILDING THE MODERN WEBSITE</h2>
          <p>
            Packed with all the goodies you can get, Kallyas is our flagship
            premium template.
          </p>
        </div>
        <div
          className="subscribe-btn"
          data-aos="fade-left"
          data-aos-delay="400"
          data-aos-offset="0"
        >
          <a href="#" className="btn_custom btn_custom-primary">
            Join Newsletter
          </a>
        </div>
      </div>
    </div>
  </section>
  )
}
