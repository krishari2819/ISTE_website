import { curve } from "../assets";
import Button from "./Button";
import Section from "./Section";
import { BackgroundCircles, BottomLine } from "./design/Hero";
import { useRef, useState } from "react";
import Slider from "react-slick";
// import { slideImages, newsItems } from "../index"; // Importing the data
import { slideImages, newsItems } from "../constants";


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './SliderStyles.css';

const Hero = ({
  headline = "Pushing Boundaries, Discover, Explore, and Shape possibilities with ISTE",
  subHeadline = "",
  ctaText = "Get started",
  ctaLink = "/pricing",
}) => {
  const parallaxRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    beforeChange: (_, next) => setCurrentSlide(next),
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };

  return (
    <Section
      className="pt-[12rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <div className="container relative" ref={parallaxRef}>
        <div className="relative z-1 mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
          <h1 className="h1 mb-6">
            {headline}{" "}
            <span className="inline-block relative">
              <img
                src={curve}
                className="absolute top-full left-0 w-full xl:-mt-2"
                width={624}
                height={28}
                alt="Curve"
              />
            </span>
          </h1>
          {subHeadline && (
            <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
              {subHeadline}
            </p>
          )}
          <Button href={ctaLink} white>
            {ctaText}
          </Button>
        </div>

        {/* // Slider Section */}
<div className="relative z-1 max-w-full mx-auto md:max-w-5xl xl:max-w-[90%] mt-10">
  <Slider {...settings}>
    {slideImages.map((image, index) => (
      <div key={index}>
        <img
          src={image}
          className="w-full h-[35rem] object-cover rounded-lg shadow-lg transition-transform duration-500"
          alt={`Slide ${index + 1}`}
        />
      </div>
    ))}
  </Slider>

  {/* Slide Indicators */}
  <div className="flex justify-center mt-6 space-x-3">
    {slideImages.map((_, index) => (
      <div
        key={index}
        className={`w-3 h-3 rounded-full ${
          index === currentSlide ? "bg-purple-700 scale-110" : "bg-gray-300"
        } transition-transform duration-300`}
      />
    ))}
  </div>

  <BackgroundCircles />
</div>

{/* News Ticker Section */}
{newsItems.length > 0 && (
  <div className="mt-12 bg-purple-700 text-white py-4 overflow-hidden rounded-full">
    <div className="relative w-full whitespace-nowrap">
      <div className="animate-scroll text-lg font-semibold">
        {newsItems.concat(newsItems).map((item, index) => (
          <span key={index} className="px-20">
            {item.title} {/* Assuming 'item' is an object and you want to display 'title' */}
          </span>
        ))}
      </div>
    </div>
  </div>
)}


        <BottomLine />
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          display: inline-block;
          animation: scroll 60s linear infinite;
        }
      `}</style>
    </Section>
  );
};

// Custom Next Arrow
const CustomNextArrow = ({ className, style, onClick }) => (
  <div
    className={`${className} next-arrow modern-arrow`}
    style={{ ...style, right: "10px", zIndex: 10, display: "block" }}
    onClick={onClick}
  />
);

// Custom Prev Arrow
const CustomPrevArrow = ({ className, style, onClick }) => (
  <div
    className={`${className} prev-arrow modern-arrow`}
    style={{ ...style, left: "10px", zIndex: 10, display: "block" }}
    onClick={onClick}
  />
);

export default Hero;
