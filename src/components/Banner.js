import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import jul from "../../public/jul.jpeg";

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
        <div className="bg-gray-100 h-fit">
          <img
            loading="lazy"
            src="https://links.papareact.com/gi1"
            alt="carousel1"
            className="h-fit"
          />
        </div>
        <div className="bg-gray-100 h-fit">
          <img
            loading="lazy"
            src={jul}
            alt="le J"
            className="object-contain h-fit"
          />
        </div>
        <div className="bg-gray-100  h-fit"></div>
      </Carousel>
    </div>
  );
};
