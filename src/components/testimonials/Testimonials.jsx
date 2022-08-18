import React from "react";
import "./testimonials.css";
import AVT1 from "../../assets/image/avatar1.jpg";
import AVT2 from "../../assets/image/avatar2.jpg";
import AVT3 from "../../assets/image/avatar3.jpg";

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avatar: AVT1,
    name: "Demon",
    review: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
    necessitatibus blanditiis est reiciendis, in eum debitis aspernatur
    amet, perspiciatis, enim deleniti laboriosam beatae officiis animi
    facere et labore placeat quam!`,
  },
  {
    avatar: AVT2,
    name: "Demon",
    review: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
    necessitatibus blanditiis est reiciendis, in eum debitis aspernatur
    amet, perspiciatis, enim deleniti laboriosam beatae officiis animi
    facere et labore placeat quam!`,
  },
  {
    avatar: AVT3,
    name: "Demon",
    review: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
    necessitatibus blanditiis est reiciendis, in eum debitis aspernatur
    amet, perspiciatis, enim deleniti laboriosam beatae officiis animi
    facere et labore placeat quam!`,
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <Swiper
        className="container testimonials__container"
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={40}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide className="testimonial" key={index}>
              <div className="client__avatar">
                <img src={avatar} alt="Avatar one" />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
