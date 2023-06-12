"use client";
import { Navigation, Pagination, Autoplay } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useEffect, useRef, useState } from "react";
import AOS from "aos";
export default function Testimonial() {
  const [_, setInit] = useState();
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <section className="testimonial-and-clients">
      <div className="container">
        <div className="testimonials">
          <Swiper
            // install Swiper modules
            className="swiper-container hero-slider"
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: true,
            }}
            loop={true}
            speed={900}
            /*using the refs instead of className*/
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Autoplay, Pagination, Navigation]}
            onInit={() => {
              setInit(true);
            }}
          >
            <SwiperSlide>
              <div className="swiper-slide text-center">
                <div className="row">
                  <div className="offset-lg-1 col-lg-10">
                    <div
                      className="test-img"
                      data-aos="fade-up"
                      data-aos-delay="0"
                      data-aos-offset="0"
                    >
                      <img src="assets/images/test1.png" alt="Testimonial 1" />
                    </div>
                    <h5
                      data-aos="fade-up"
                      data-aos-delay="200"
                      data-aos-duration="600"
                      data-aos-offset="0"
                    >
                      John
                    </h5>
                    <span
                      data-aos="fade-up"
                      data-aos-delay="400"
                      data-aos-duration="600"
                      data-aos-offset="0"
                    >
                      UI/UX Designer
                    </span>
                    <p
                      data-aos="fade-up"
                      data-aos-delay="600"
                      data-aos-duration="600"
                      data-aos-offset="0"
                    >
                      Ash's tactics & books have helped me a lot in my
                      understanding on how social media advertising works.I can
                      say that he is one of the best development professionals i
                      have dealt with so far. His experience is great & he is
                      such a great & pleasant person to work with as he
                      understands what you are
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-slide text-center">
                <div className="row">
                  <div className="offset-lg-1 col-lg-10">
                    <div
                      className="test-img"
                      data-aos="fade-up"
                      data-aos-delay="0"
                      data-aos-offset="0"
                    >
                      <img src="assets/images/test1.png" alt="Testimonial 1" />
                    </div>
                    <h5
                      data-aos="fade-up"
                      data-aos-delay="200"
                      data-aos-duration="600"
                      data-aos-offset="0"
                    >
                      John
                    </h5>
                    <span
                      data-aos="fade-up"
                      data-aos-delay="400"
                      data-aos-duration="600"
                      data-aos-offset="0"
                    >
                      UI/UX Designer
                    </span>
                    <p
                      data-aos="fade-up"
                      data-aos-delay="600"
                      data-aos-duration="600"
                      data-aos-offset="0"
                    >
                      Ash's tactics & books have helped me a lot in my
                      understanding on how social media advertising works.I can
                      say that he is one of the best development professionals i
                      have dealt with so far. His experience is great & he is
                      such a great & pleasant person to work with as he
                      understands what you are
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
          <div className="test-pagination"></div>
        </div>
        <div
          className="clients"
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="600"
        >
          <Swiper
            // install Swiper modules
            className="swiper-container  clients-slider"
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 3000,
            }}
            loop={true}
            speed={900}
            slidesPerView={5}
            breakpoints={{
              1200: {
                slidesPerView: 4,
              },
              992: {
                slidesPerView: 3,
              },
              576: {
                slidesPerView: 2,
              },
              400: {
                slidesPerView: 1,
              },
            }}
            modules={[Autoplay, Pagination, Navigation]}
          >
            <SwiperSlide>
              <div className="swiper-slide">
                <img src="assets/images/client1.png" alt="Client 1" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="swiper-slide">
                <img src="assets/images/client2.png" alt="Client 2" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="swiper-slide">
                <img src="assets/images/client3.png" alt="Client 3" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="swiper-slide">
                <img src="assets/images/client4.png" alt="Client 4" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="swiper-slide">
                <img src="assets/images/client5.png" alt="Client 5" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-slide">
                <img src="assets/images/client1.png" alt="Client 1" />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
}
