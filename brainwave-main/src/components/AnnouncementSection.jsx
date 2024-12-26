import React, { useEffect, useState } from 'react';
import Section from './Section'; // Wrapping the section in the provided Section component

const AnnouncementSection = () => {
  const [visible, setVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const containers = [
    {
      id: 1,
      title: "🎉 Flash Mob Frenzy!",
      description: "Join us at Chandigarh University for electrifying flash mobs!",
      dates: "🗓 Dates:\n - 16th Oct: D1 Downstairs, 4 PM\n - 17th Oct: Corner Cafe, 4 PM\n - 21st Oct: Fountain Park, 3:30 PM",
      eventDetails: "✨ Showcase your talent and shine on stage! Let's make this event unforgettable! 🎶💃🕺",
      img: './assets/benefits/eventposter.png', // Placeholder image
      registrationLink: "https://your-registration-link.com/flash-mob" // Registration link for this event
    },
    {
      id: 2,
      title: "🚀 Event Coming Soon!",
      img: 'https://via.placeholder.com/400x300?text=Hackathon+Event', // Placeholder image
      registrationLink: "https://your-registration-link.com/hackathon" // Registration link for this event
    },
    // Add more events as needed
  ];

  const handleNext = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % containers.length);
        setIsAnimating(false);
      }, 500); // Adjust the time to match the animation duration
    }
  };

  const handlePrev = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + containers.length) % containers.length);
        setIsAnimating(false);
      }, 500); // Adjust the time to match the animation duration
    }
  };

  return (
    <Section id="announcement">
      <div className="w-10/12 bg-n-8 text-white py-12">
        <div className="container mx-auto px-4 lg:px-15 max-w-full"> {/* Set the container to max-w-full */}
          <h2 className="text-3xl font-bold text-center ml-80 mb-4">Upcoming Events</h2>

          <div className="flex justify-between items-center w-full"> {/* Ensure the width is 100% */}
            <button onClick={handlePrev} className="text-2xl font-bold pl-56 text-white">{"<"}</button>

            <div className={`flex bg-n-8 rounded-lg shadow-lg p-4 w-full ${isAnimating ? 'fade-out' : 'fade-in'}`} key={containers[currentIndex].id}> {/* Make the carousel wider */}
              <div className="flex-1 p-4 max-w-1/2"> {/* Limit the image width to 50% */}
                <img
                  src={containers[currentIndex].img}
                  alt="Event Poster"
                  className="w-full h-full rounded-lg object-contain transition-transform duration-500 ease-in-out hover:opacity-80"
                  style={{ height: '400px', transform: visible ? 'scale(1)' : 'scale(0.9)' }}
                />
              </div>

              <div className="flex-1 p-4 flex flex-col justify-between max-w-1/2" style={{ height: '400px' }}> {/* Limit the text container width to 50% */}
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-10">{containers[currentIndex].title}</h3>
                  <p className="text-n-3 mb-2">{containers[currentIndex].description}</p>
                  <p className="text-n-3 mb-2">{containers[currentIndex].dates}</p>
                  <p className="text-n-3">{containers[currentIndex].eventDetails}</p>
                </div>
                <a href={containers[currentIndex].registrationLink} target="_blank" rel="noopener noreferrer">
                  <button className="mt-4 bg-purple-700 text-white py-2 px-4 rounded-lg font-semibold hover:bg-purple-950">
                    Register Now
                  </button>
                </a>
              </div>
            </div>

            <button onClick={handleNext} className="text-2xl font-bold text-white">{">"}</button>
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
            from { opacity: 0; }
            to { opacity: 1; }
          }

          @keyframes fadeOut {
            from { opacity: 1; }
            to { opacity: 0; }
          }
        `}</style>
      </div>
    </Section>
  );
};

export default AnnouncementSection;
