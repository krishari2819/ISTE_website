import React from "react";
import Section from "./Section";

const Collaboration = () => {
  return (
    <Section crosses>
      <div className="relative py-12 px-4 overflow-hidden">
        {/* Blurred Light Background */}
        <div className="absolute inset-0 z-0">
          {/* Light effect (blurry blue light) */}
          <div className="absolute top-1/3 left-20 w-72 h-72 rounded-full bg-blue-800 opacity-50 blur-3xl"></div>
          <div className="absolute bottom-2/4 left-2/3 w-56 h-56 rounded-full bg-blue-800 opacity-50 blur-3xl"></div>
        </div>

        <div
          className="relative z-10 container mx-auto text-center p-8 rounded-lg shadow-lg cursor-pointer  "
          style={{
            backgroundColor: "rgba(30, 41, 59, 0.5)",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(255, 255, 255, 0.3)",
          }}
        >
          {/* Heading and Description */}
          <h2 className="text-white text-4xl font-bold mb-6">About Us</h2>
          <p className="text-light-gray text-lg mx-auto mb-12 text-center cursor-pointer hover:text-white">
            The ISTE Student Chapter at Chandigarh University is a vibrant, student-driven organization dedicated to fostering technological advancement and educational excellence, in alignment with the global benchmarks established by the International Society for Technology in Education (ISTE). Our chapter is committed to creating a dynamic environment where students can acquire cutting-edge skills, enhance their knowledge, and build a strong network with peers and professionals in the technology sector.
            <br />
            <br />
            Through various workshops, seminars, hackathons, and collaborative projects, we strive to bridge the gap between theoretical learning and practical application, ensuring our members are well-prepared to navigate and thrive in today’s fast-paced, technology-driven world. We emphasize the development of digital fluency, critical thinking, leadership, and innovative problem-solving abilities, which are essential for succeeding in the 21st-century global workforce.
          </p>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* First Card */}
            <div
              className="card bg-slate-800 text-white p-6 rounded-lg shadow-lg border border-gray-500 transition duration-300 ease-in-out transform hover:scale-105 hover:text-white" // Added hover effect
              style={{
                backgroundColor: "rgba(30, 41, 59, 0.5)",
                backdropFilter: "blur(6px)",
              }}
            >
              <h4 className="font-bold text-xl mb-4">Mission & Vision</h4>
              <p className="text-light-gray hover:text-white">
                Our mission is to create a collaborative environment where students can enhance their technical skills and leadership abilities through practical learning experiences.
              </p>
            </div>

            {/* Second Card */}
            <div
              className="card bg-slate-800 text-white p-6 rounded-lg shadow-lg border border-gray-500 transition duration-300 ease-in-out transform hover:scale-105 hover:text-white" // Added hover effect
              style={{
                backgroundColor: "rgba(30, 41, 59, 0.5)",
                backdropFilter: "blur(6px)",
              }}
            >
              <h4 className="font-bold text-xl mb-4">Our Objectives</h4>
              <p className="text-light-gray hover:text-white">
                We organize a wide range of events, including technical workshops, industry lectures, collaborative projects, and competitions to provide our members with holistic development opportunities.
              </p>
            </div>

            {/* Third Card */}
            <div
              className="card bg-slate-800 text-white p-6 rounded-lg shadow-lg border border-gray-500 transition duration-300 ease-in-out transform hover:scale-105 hover:text-white" // Added hover effect
              style={{
                backgroundColor: "rgba(30, 41, 59, 0.5)",
                backdropFilter: "blur(6px)",
              }}
            >
              <h4 className="font-bold text-xl mb-4">Eco-Friendly</h4>
              <p className="text-light-gray hover:text-white">
                Encouraging sustainable practices and projects that have a positive impact on the environment.
              </p>
            </div>

            {/* Fourth Card */}
            <div
              className="card bg-slate-800 text-white p-6 rounded-lg shadow-lg border border-gray-500 transition duration-300 ease-in-out transform hover:scale-105 hover:text-white" // Added hover effect
              style={{
                backgroundColor: "rgba(30, 41, 59, 0.5)",
                backdropFilter: "blur(6px)",
              }}
            >
              <h4 className="font-bold text-xl mb-4">Support</h4>
              <p className="text-light-gray hover:text-white">
                Offering 24/7 student support and guidance from experienced mentors and industry professionals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Collaboration;
