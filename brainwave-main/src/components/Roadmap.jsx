"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect, useCallback } from "react";
import Section from "./Section";

const testimonials = [
  {
    name: "Avish",
    role: "Web Developer",
    image: "./assets/team/Avish.jpg",
    testimonial:
      "ISTE enhanced my technical and leadership skills. Leading the Tech Team boosted my problem-solving and collaboration, with great real-world project experience.",
  },
  {
    name: "Saksham Goyal",
    role: "Content Designer",
    image: "./assets/team/SG.png",
    testimonial:
      "Joining the ISTE Design Team sharpened my design skills and allowed me to contribute to meaningful projects. The collaborative atmosphere fueled creativity and growth.",
  },
  {
    name: "Dinky",
    role: "Event Manager",
    image: "./assets/team/DK.jpg",
    testimonial:
      "Being in ISTE's Event Management team enhanced my organizational skills and teamwork while planning impactful events for our community.",
  },
  {
    name: "Moinak Niyogi",
    role: "Content Writer",
    image: "./assets/team/MN.jpg",
    testimonial:
      "Joining ISTE as a content writer has greatly improved my writing skills. It’s rewarding to create engaging content that informs and inspires our community.",
  },
];

export default function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerSlide = window.innerWidth < 768 ? 1 : 2; // Adjust based on screen size

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - itemsPerSlide ? 0 : prevIndex + 1
    );
  }, [itemsPerSlide]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - itemsPerSlide : prevIndex - 1
    );
  }, [itemsPerSlide]);

  useEffect(() => {
    const handleResize = () => {
      // Update items per slide dynamically
      const newItemsPerSlide = window.innerWidth < 768 ? 1 : 2;
      if (itemsPerSlide !== newItemsPerSlide) {
        setCurrentIndex(0); // Reset slide index on layout change
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [itemsPerSlide]);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <Section crosses>
      <div className="absolute inset-0">
        {/* Light effect (blurry blue light) */}
        <div className="absolute top-1/2 left-20 w-72 h-72 rounded-full bg-blue-900 opacity-50 blur-3xl"></div>
        <div className="absolute bottom-1/2 left-2/3 w-56 h-56 rounded-full bg-blue-900 opacity-50 blur-3xl"></div>
      </div>
      <div className="text-white flex flex-col items-center justify-center p-4 md:p-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">Testimonials</h1>
        <div className="relative w-full max-w-5xl overflow-hidden">
          <button
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-800 rounded-full p-2 z-10"
            aria-label="Previous"
            onClick={prevSlide}
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
          </button>
          <div
            className="flex transition-transform duration-1000 ease-in-out"
            style={{
              transform: `translateX(-${
                (currentIndex * 100) / itemsPerSlide
              }%)`,
            }}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`flex-none ${
                  window.innerWidth < 768 ? "w-full" : "w-1/2"
                } px-2 md:px-4`}
              >
                <div className="flex flex-col items-center md:flex-row rounded-lg p-4 md:p-8 h-auto backdrop-blur-lg bg-zinc-500/30 border border-indigo-700">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="rounded-lg w-20 h-20 md:w-24 md:h-24 mb-4 md:mb-0 md:mr-4"
                  />
                  <div className="text-center md:text-left">
                    <h3 className="text-lg md:text-xl font-semibold">
                      {testimonial.name}
                    </h3>
                    <p className="text-gray-400 text-sm md:text-base">
                      {testimonial.role}
                    </p>
                    <p className="text-gray-300 text-sm md:text-base mt-2">
                      {testimonial.testimonial}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-800 rounded-full p-2 z-10"
            aria-label="Next"
            onClick={nextSlide}
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
          </button>
        </div>
      </div>
    </Section>
  );
}
