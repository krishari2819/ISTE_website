import { useState } from "react";
import { benefits } from "../constants";
import Heading from "./Heading";
import Section from "./Section";
import Arrow from "../assets/svg/Arrow";
import { GradientLight } from "./design/Benefits";
import ClipPath from "../assets/svg/ClipPath";
// import isteLogo from "../assets/iste-logo.png"; // Import ISTE logo

const Benefits = () => {
  const [activeCard, setActiveCard] = useState(null); // Track active (clicked) card

  const handleCardClick = (id) => {
    // Toggle between active and non-active card states
    setActiveCard((prev) => (prev === id ? null : id));
    // hehehe
  };

  return (
    <Section id="features">
      <div className="container relative z-2">
        <Heading
          className="md:max-w-md lg:max-w-2xl text-center mx-auto mb-10"
          title="Why Choose Us?"
        />

        {/* Flex container for the benefits */}
        <div className="relative flex flex-wrap gap-6 mb-10 justify-center items-center lg:gap-10">
          {benefits.map((item) => {
            const isActive = activeCard === item.id; // Check if the current card is active

            return (
              <div
                key={item.id}
                className={`relative p-0.5 transition-all duration-700 ease-in-out cursor-pointer rounded-3xl overflow-hidden md:max-w-[24rem] w-full sm:w-[90vw] h-[300px] md:h-[400px] bg-slate-800 backdrop-blur-lg shadow-lg ${
                  isActive
                    ? "z-50 w-full h-auto scale-110 transform -translate-y-1 "
                    : "hover:scale-105 "
                } ${activeCard && !isActive ? "hidden md:block" : "opacity-100"}`}
                onClick={() => handleCardClick(item.id)}
              >
                {/* ISTE Logo - hidden by default, visible on hover */}
                {/* <div className="absolute inset-0 opacity-10 hover:opacity-0 transition-opacity duration-300 pointer-events-none z-10">
                  <img
                    src={item.imageUrl} // ISTE logo image
                    alt="ISTE Logo"
                    className="w-full h-full object-cover"
                  />
                </div> */}



                {/* Card content */}
                <div className="relative z-2 flex flex-col h-full p-6 sm:p-8">
                  <h5 className="h5 mb-4 text-base sm:text-lg">{item.title}</h5>
                  <p className="body-2 mb-6 text-sm sm:text-base text-n-3">{item.text}</p>
                  <div className="flex items-center mt-auto">
                    <img
                      src={item.iconUrl}
                      width={48}
                      height={48}
                      alt={item.title}
                    />
                    <p className="ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider">
                      {isActive ? "Close" : "Explore more"}
                    </p>
                    <Arrow />
                  </div>
                </div>

                {/* Add light gradient if item has the light property */}
                {item.light && <GradientLight />}

                {/* Background image */}
                <div
                  className="absolute inset-0.5 rounded-3xl"
                  style={{ clipPath: "url(#benefits)" }}
                >
                  <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-100">
                    {item.imageUrl && (
                      <img
                        src={item.imageUrl}
                        width={380}
                        height={362}
                        alt={item.title}
                        className="w-full h-full object-cover rounded-3xl"
                      />
                    )}
                  </div>
                </div>

                {/* ClipPath */}
                <ClipPath />
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
};

export default Benefits;
