import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export const Banner = () => {
  return (
    <div className="relative ">
      <div className="absolute w-full h-32 bg-gradient-2-t from-gray-100 to-transparent bottom-0 z-20 " />
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showThumbs={false}
        showIndicators={false}
        interval={5000}
      >
        <div className="bg-gray-100  h-96 ">
          <img
            loading="lazy"
            src="https://links.papareact.com/gi1"
            alt="carousel1"
            className="object-contain "
          />
        </div>
        <div className="bg-gray-100  h-96">
          <img
            loading="lazy"
            src="/amazonHero1.jpg"
            alt="hero1"
            className="object-contain "
          />
        </div>
        <div className="bg-gray-100  h-96 ">
          <img
            loading="lazy"
            src="/amazonHero2.jpg"
            alt="hero2"
            className="object-contain "
          />
        </div>
        <div className="bg-gray-100  h-96 ">
          <img
            loading="lazy"
            src="/amazonHero3.jpg"
            alt="hero3"
            className="object-contain h-fit"
          />
        </div>
        <div className="bg-gray-100  h-96">
          <img
            loading="lazy"
            src="/jul.jpeg"
            alt="hero4"
            className="object-contain "
          />
        </div>
        <div className="bg-gray-100  h-96">
          <img
            loading="lazy"
            src="/amazonHero4.jpg"
            alt="hero5"
            className="object-contain  "
          />
        </div>
      </Carousel>
    </div>
  );
};
