import { Swiper, SwiperSlide } from "swiper/react";

import hero1 from "../../assets/hero1.jpg";
import hero2 from "../../assets/hero2.jpg";
import hero3 from "../../assets/hero3.jpg";

import "swiper/css";
import OfferCard from "../ui/OfferCard";

type offers_TP = {
  id: number;
  img: string;
  title: string;
  details: string;
}[];

const offers: offers_TP = [
  {
    id: 1,
    img: hero1,
    title: "offer 1",
    details: "text 1",
  },
  {
    id: 2,
    img: hero2,
    title: "offer 2",
    details: "text 2",
  },
  {
    id: 3,
    img: hero3,
    title: "offer 3",
    details: "text 3",
  },
];

const Services = () => {
  return (
    <section className="py-24 bg-primary">
      <Swiper
        dir="ltr"
        className="mySwiper container p-10"
        centeredSlides={true}
        slidesPerView={3}
        spaceBetween={30}
        navigation={true}>
        {offers?.map((offer) => (
          <SwiperSlide key={offer.id}>
            <OfferCard offerDetails={offer} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Services;
