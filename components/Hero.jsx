"use client";

import { Navigation, Pagination, Autoplay } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useEffect, useRef, useState } from "react";
import AOS from "aos";

export default function Hero() {
  const [_, setInit] = useState();
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const animatedDivRef = useRef(null);

  useEffect(() => {
    AOS.init();
    return () => {
      AOS.refreshHard();
    };
  }, []);

  const handleSlideChangeTransitionStart = () => {
    if (animatedDivRef.current) {
      const elements = animatedDivRef.current.querySelectorAll(
        ".slide-content h1, .slide-content p, .slide-content a"
      );
      elements.forEach((element) => {
        element.classList.remove("aos-init");
        element.classList.remove("aos-animate");
      });
    }
  };

  const handleSlideChangeTransitionEnd = () => {
    AOS.refresh();
    AOS.init();
  };
  return (
    <section className="hero">
      <div className="container">
        <div className="row">
          <div className="col-12 offset-md-1 col-md-11">
            <Swiper
              // install Swiper modules
              className="swiper-container hero-slider"
              spaceBetween={30}
              slidesPerView={1}
              centeredSlides={true}
              autoplay={{
                delay: 5000,
                disableOnInteraction: true,
              }}
              loop={true}
              onSlideChangeTransitionStart={handleSlideChangeTransitionStart}
              onSlideChangeTransitionEnd={handleSlideChangeTransitionEnd}
              speed={900}
              /*using the refs instead of className*/
              navigation={{
                prevEl: prevRef.current,
                nextEl: nextRef.current,
              }}
              modules={[Autoplay, Pagination, Navigation]}
              onInit={() => {
                setInit(true);
              }}
            >
              <SwiperSlide>
                <div className="swiper-slide slide-content d-flex align-items-center">
                  <div ref={animatedDivRef} className="single-slide">
                    <h1 id="head" data-aos="fade-right" data-aos-delay="200">
                      Creative
                      <br />
                      Multipurpose websites
                    </h1>
                    <p data-aos="fade-right" data-aos-delay="600">
                      Crafted by innovative creators for Expecting Peoples’s
                      predefined dummy text
                      <br />
                      chunks as necessary, making this the first.
                    </p>
                    <a
                      data-aos="fade-right"
                      data-aos-delay="900"
                      href="#"
                      className="btn_custom btn_custom-primary"
                    >
                      See More
                    </a>
                    <a
                      data-aos="fade-right"
                      data-aos-delay="900"
                      href="#"
                      className="btn_custom btn_custom-primary"
                    >
                      Get Now
                    </a>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide slide-content d-flex align-items-center">
                  <div ref={animatedDivRef} className="single-slide">
                    <h1 data-aos="fade-right" data-aos-delay="200">
                      Creative
                      <br />
                      Multipurpose websites
                    </h1>
                    <p data-aos="fade-right" data-aos-delay="600">
                      Crafted by innovative creators for Expecting Peoples’s
                      predefined dummy text
                      <br />
                      chunks as necessary, making this the first.
                    </p>
                    <a
                      data-aos="fade-right"
                      data-aos-delay="900"
                      href="#"
                      className="btn_custom btn_custom-primary"
                    >
                      See More
                    </a>
                    <a
                      data-aos="fade-right"
                      data-aos-delay="900"
                      href="#"
                      className="btn_custom btn_custom-primary"
                    >
                      Get Now
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        {/* <div className="row">
          <div className="col-12 offset-md-1 col-md-11">
            <div className="swiper-container hero-slider">
              <div className="swiper-wrapper">
                <div className="swiper-slide slide-content d-flex align-items-center">
                  <div className="single-slide">
                    <h1 data-aos="fade-right" data-aos-delay="200">
                      Creative
                      <br />
                      Multipurpose websites
                    </h1>
                    <p data-aos="fade-right" data-aos-delay="600">
                      Crafted by innovative creators for Expecting Peoples’s
                      predefined dummy text
                      <br />
                      chunks as necessary, making this the first.
                    </p>
                    <a
                      data-aos="fade-right"
                      data-aos-delay="900"
                      href="#"
                      className="btn_custom btn_custom-primary"
                    >
                      See More
                    </a>
                    <a
                      data-aos="fade-right"
                      data-aos-delay="900"
                      href="#"
                      className="btn_custom btn_custom-primary"
                    >
                      Get Now
                    </a>
                  </div>
                </div>
                <div className="swiper-slide slide-content d-flex align-items-center">
                  <div className="single-slide">
                    <h1 data-aos="fade-right" data-aos-delay="200">
                      Creative
                      <br />
                      Multipurpose websites
                    </h1>
                    <p data-aos="fade-right" data-aos-delay="600">
                      Crafted by innovative creators for Expecting Peoples’s
                      predefined dummy text
                      <br />
                      chunks as necessary, making this the first.
                    </p>
                    <a
                      data-aos="fade-right"
                      data-aos-delay="900"
                      href="#"
                      className="btn_custom btn_custom-primary"
                    >
                      See More
                    </a>
                    <a
                      data-aos="fade-right"
                      data-aos-delay="900"
                      href="#"
                      className="btn_custom btn_custom-primary"
                    >
                      Get Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        <span ref={prevRef} className="arr-left">
          <i className="fa fa-angle-left"></i>
        </span>
        <span ref={nextRef} className="arr-right">
          <i className="fa fa-angle-right"></i>
        </span>
      </div>
      <div className="texture"></div>
      <div className="diag-bg"></div>
    </section>
  );
}
