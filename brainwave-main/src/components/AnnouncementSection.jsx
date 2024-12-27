import React, { useEffect, useState } from "react";
import Section from "./Section";

const AnnouncementSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const containers = [
    {
      id: 1,
      title: "🎉 Flash Mob Frenzy!",
      description: "Join us at Chandigarh University for electrifying flash mobs!",
      dates: "🗓 Dates:\n - 16th Oct: D1 Downstairs, 4 PM\n - 17th Oct: Corner Cafe, 4 PM\n - 21st Oct: Fountain Park, 3:30 PM",
      eventDetails:
        "✨ Showcase your talent and shine on stage! Let's make this event unforgettable! 🎶💃🕺",
      img: "./assets/benefits/eventposter.png",
      registrationLink: "https://your-registration-link.com/flash-mob",
    },
    {
      id: 2,
      title: "🚀 Event Coming Soon!",
      img: "https://via.placeholder.com/400x300?text=Hackathon+Event",
      registrationLink: "https://your-registration-link.com/hackathon",
    },
  ];

  const handleNext = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % containers.length);
        setIsAnimating(false);
      }, 500);
    }
  };

  const handlePrev = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex(
          (prevIndex) => (prevIndex - 1 + containers.length) % containers.length
        );
        setIsAnimating(false);
      }, 500);
    }
  };

  return (
    <Section id="announcement">
      <div className="w-11/12 mx-auto bg-n-8 text-white py-12">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <h2 className="text-2xl lg:text-3xl font-bold text-center mb-6">
            Upcoming Events
          </h2>

          <div className="flex flex-col lg:flex-row items-center w-full gap-4">
            <button
              onClick={handlePrev}
              className="text-2xl font-bold text-white p-2 lg:p-4"
            >
              {"<"}
            </button>

            <div
              className={`flex flex-col lg:flex-row bg-n-8 rounded-lg shadow-lg p-4 w-full ${
                isAnimating ? "fade-out" : "fade-in"
              }`}
              key={containers[currentIndex].id}
            >
              <div className="lg:flex-1 p-2 lg:p-4">
                <img
                  src={containers[currentIndex].img}
                  alt="Event Poster"
                  className="w-full h-auto rounded-lg object-cover transition-transform duration-500 ease-in-out hover:opacity-80"
                  style={{
                    maxHeight: "300px",
                  }}
                />
              </div>

              <div className="lg:flex-1 p-2 lg:p-4 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl lg:text-2xl font-semibold mb-4">
                    {containers[currentIndex].title}
                  </h3>
                  <p className="text-sm lg:text-base mb-2">
                    {containers[currentIndex].description}
                  </p>
                  <p className="text-sm lg:text-base mb-2 whitespace-pre-line">
                    {containers[currentIndex].dates}
                  </p>
                  <p className="text-sm lg:text-base">
                    {containers[currentIndex].eventDetails}
                  </p>
                </div>
                <a
                  href={containers[currentIndex].registrationLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4"
                >
                  <button className="bg-purple-700 text-white py-2 px-4 rounded-lg text-sm lg:text-base font-semibold hover:bg-purple-800 w-full lg:w-auto">
                    Register Now
                  </button>
                </a>
              </div>
            </div>

            <button
              onClick={handleNext}
              className="text-2xl font-bold text-white p-2 lg:p-4"
            >
              {">"}
            </button>
          </div>
        </div>

        <style jsx>{`
          .fade-in {
            animation: fadeIn 0.5s ease-in-out;
          }

          .fade-out {
            animation: fadeOut 0.5s ease-in-out;
          }

          @keyframes fadeIn {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }

          @keyframes fadeOut {
            from {
              opacity: 1;
            }
            to {
              opacity: 0;
            }
          }
        `}</style>
      </div>
    </Section>
  );
};

export default AnnouncementSection;
