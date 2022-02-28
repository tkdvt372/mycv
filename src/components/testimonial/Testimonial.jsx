import React from "react";
import "./testimonial.css";
import Avt1 from "../../assets/avatar4.jpg";
import Avt2 from "../../assets/namAvatar.jpg";
import Avt3 from "../../assets/avatar5.png";
import Avt4 from "../../assets/avatar6.jpg";
import Avt5 from "../../assets/avatar7.jpg";
import Avt6 from "../../assets/avatar8.jpg";
import Avt7 from "../../assets/avatar9.jpg";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
const data = [
  {
    avatar: Avt1,
    name: "Trịnh Thanh Hương",
    review:
      "Modi alias animi dolorem aliquam ea eum beatae maiores, consectetur praesentium quibusdam, commodi velit porrob  landitiis consequatur qui molestiae. Dolorem?",
  },
  {
    avatar: Avt2,
    name: "Trần Hoàng Nam",
    review:
      "Modi alias animi dolorem aliquam ea eum beatae maiores, consectetur praesentium quibusdam, commodi velit porro blanditiis consequatur qui molestiae. Dolorem?",
  },
  {
    avatar: Avt3,
    name: "Trịnh Tiến Đạt",
    review:
      "Modi alias animi dolorem aliquam ea eum þeatae maiores, consectetur praesentium quibusdam, commodi velit porro blanditiis consequatur qui molestiae. Dolorem?",
  },
  {
    avatar: Avt4,
    name: "Dương Đình Khánh",
    review:
      "Modi alias animi dolorem aliquam ea eum beatae maiores, consectetur praesentium quibusdam, commodi velit porro blanditiis consequatur qui molestiae. Dolorem?",
  },
  {
    avatar: Avt5,
    name: "Trịnh Quang Thắng",
    review:
      "Modi alias animi dolorem aliquam ea eum beatae maiores, consectetur praesentium quibusdam, commodi velit porro blanditiis consequatur qui molestiae. Dolorem?",
  },
  {
    avatar: Avt6,
    name: "Nguyễn Ngọc Giao",
    review:
      "Modi alias animi dolorem aliquam ea eum beatae maiores, consectetur praesentium quibusdam, commodi velit porro blanditiis consequatur qui molestiae. Dolorem?",
  },
  {
    avatar: Avt7,
    name: "Nguyễn Văn Nam",
    review:
      "Modi alias animi dolorem aliquam ea eum beatae maiores, consectetur praesentium quibusdam, commodi velit porro blanditiis consequatur qui molestiae. Dolorem?",
  },
];
const Testimonial = () => {
  return (
    <section id="testimonial">
      <h5>Review from clients</h5>
      <h2>Testimonial</h2>

      <Swiper
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
        className="container testimonial__container"
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} />
              </div>
              <h5 className="client__name">{name} </h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonial;
