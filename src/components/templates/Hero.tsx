import { Swiper, SwiperSlide } from "swiper/react";
import hero1 from "../../assets/hero1.jpg";
import hero2 from "../../assets/hero2.jpg";
import hero3 from "../../assets/hero3.jpg";

import "swiper/css";
import "swiper/css/effect-fade";

import { EffectFade, Autoplay } from "swiper/modules";

const Hero = () => {
  return (
    <section>
      <div className="relative">
        <Swiper
          className="mySwiper h-screen"
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
          centeredSlides={true}
          slidesPerView={1}
          effect={"fade"}
          modules={[EffectFade, Autoplay]}>
          <SwiperSlide>
            <img
              className="w-full bg-center bg-cover"
              src={hero1}
              alt="hero image"
            />
            <div className="absolute top-0 left-0 z-10 w-full h-full opacity-90 bg-gradient-to-t from-gray-800" />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="h-full w-full bg-center bg-cover"
              src={hero2}
              alt="hero image"
            />
            <div className="absolute top-0 left-0 z-10 w-full h-full opacity-90 bg-gradient-to-t from-gray-800" />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className=" w-full bg-center bg-cover"
              src={hero3}
              alt="hero image"
            />
            <div className="absolute top-0 left-0 z-10 w-full h-full opacity-90 bg-gradient-to-t from-gray-800" />
          </SwiperSlide>
        </Swiper>
        <div className="container capitalize z-20 text-gray-200 absolute w-full top-1/2 -translate-y-1/2 left-0">
          <h1 className="text-5xl font-semibold pb-5">title</h1>
          <p className="text-2xl w-2/3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus odio quo saepe fugiat! Quas asperiores, quasi ipsam
            dolore consequatur distinctio vero .
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
