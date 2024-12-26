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
  const itemsPerSlide = 2; // Two testimonials per slide

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - itemsPerSlide ? 0 : prevIndex + 1
    );
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - itemsPerSlide : prevIndex - 1
    );
  }, []);

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
      <div className="text-white flex flex-col items-center justify-center p-8">
        <h1 className="text-4xl font-bold mb-4">Testimonials</h1>
        <div className="relative w-full max-w-5xl overflow-hidden">
          <button
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 rounded-full p-2 z-10"
            aria-label="Previous"
            onClick={prevSlide}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <div
            className="flex transition-transform duration-1000 ease-in-out"
            style={{ transform: `translateX(-${(currentIndex * 100) / itemsPerSlide}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <div key={index} className="flex-none w-1/2 px-4">
                <div className="flex items-center rounded-lg p-8 h-[250px] backdrop-blur-lg bg-zinc-500/30 border-indigo-700"> {/* Frosted glass effect */}
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={150} // Adjusted image width
                    height={150}
                    className="rounded-lg mr-4" // Margin for spacing
                  />
                  <div className="flex flex-col">
                    <h3 className="text-lg font-semibold text-center">{testimonial.name}</h3>
                    <p className="text-gray-400 text-center">{testimonial.role}</p>
                    <p className="text-gray-300 text-center mt-2">{testimonial.testimonial}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 rounded-full p-2 z-10"
            aria-label="Next"
            onClick={nextSlide}
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </Section>
  );
}
