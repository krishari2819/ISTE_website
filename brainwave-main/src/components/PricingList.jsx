import Section from "./Section";
import { smallSphere, stars } from "../assets";
import Heading from "./Heading";
// import { LeftLine, RightLine } from "./design/Pricing";
import { useState } from "react";

// Pricing data extracted to a constant
const pricingData = [
  {
    title: "1st Year MBA/M Tech. Students",
    price: "Rs. 177",
    breakdown: "Rs. 150 + 27 (GST)",
    course: "Applicable to MBA and MTech students (2 years PG)",
    icon: "💻",
  },
  {
    title: "1st Year MCA Students",
    price: "Rs. 236",
    breakdown: "Rs. 200 + 36 (GST)",
    course: "Applicable to MCA students (3 years PG)",
    icon: "📱",
  },
  {
    title: "3 years Diploma in Engg. & Tech (Polytechnic)",
    price: "Rs. 236",
    breakdown: "Rs. 200 + 36 (GST)",
    course: "Applicable to Diploma Engineering and Technology students",
    icon: "🔧",
  },
  {
    title: "1st Year BE/B.TECH/B. Pharma/HMCT Students",
    price: "Rs. 295",
    breakdown: "Rs. 250 + 45 (GST)",
    course: "Applicable to BE, B.Tech, B.Pharma, and HMCT students (4 years UG)",
    icon: "⚙",
  },
  {
    title: "1st Year B.Arch. Students",
    price: "Rs. 354",
    breakdown: "Rs. 300 + 54 (GST)",
    course: "Applicable to B.Arch students (5 years UG)",
    icon: "🏛",
  },
];

const Pricing = () => {
  const [selectedCard, setSelectedCard] = useState(null); // Track selected card

  const handleCardClick = (index) => {
    setSelectedCard(index); // Update the selected card index
  };

  return (
    <Section className="overflow-hidden" id="pricing">
<div className="absolute inset-0">
          {/* Light effect (blurry blue light) */}
          <div className="absolute top-1/2 left-20 w-72 h-72 rounded-full bg-blue-900 opacity-50 blur-3xl "></div>
          <div className="absolute bottom-1/2 left-2/3 w-56 h-56 rounded-full bg-blue-900 opacity-50 blur-3xl"></div>
        </div>
      <div className="container relative z-10">
        {/* Decorative Elements */}
        {/* <div className="hidden relative justify-center mb-[6.5rem] lg:flex">
          <img
            // src={smallSphere}
            className="relative z-1"
            width={255}
            height={255}
            alt="Sphere"
            opacity-50 blur-3xl
opacity-50 blur-3xl
          />
          <div className="absolute top-1/2 left-1/2 w-[60rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            <img
              src={stars}
              className="w-full"
              width={950}
              height={400}
              alt="Stars"
            />
          </div>
        </div> */}


        {/* Heading */}
        <Heading
          tag="ISTE Student Membership"
          title="Student Membership Fees (Including GST)"
        />

        {/* Pricing Cards */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          {pricingData.map((item, index) => (
            <div
              key={index}
              onClick={() => handleCardClick(index)}
              className={`relative p-6 rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105  flex flex-col justify-between min-h-[20rem] cursor-pointer ${
                selectedCard === index
                  ? "bg-gradient-to-b from-gray-600 to-gray-800"
                  : "bg-gradient-to-b from-gray-800 to-gray-900"
              }`}
              style={{
                border:
                  selectedCard === index
                    ? "none"
                    : "0px solid rgba(128, 128, 128, 0.7)", // Thin grey border
                backdropFilter: "blur(10px)", // Blur effect for frosted glass look
                background: selectedCard === index
                  ? "rgba(255, 255, 255, 0.1)" // Semi-transparent background when selected
                  : "rgba(255, 255, 255, 0.05)", // More transparent background when not selected
              }}
              aria-label={`Select ${item.title} card`}
            >
              {/* Main Card Background */}
              <div className="relative flex flex-col justify-between min-h-full text-white">
                {/* Icon */}
                <div className="text-5xl mb-4">{item.icon}</div>

                {/* Title */}
                <h4 className="font-semibold text-xl mb-2">{item.title}</h4>

                {/* Price */}
                <div className="text-5xl font-bold mb-2">{item.price}</div>

                {/* Breakdown */}
                <p className="text-md mb-2 opacity-80">{item.breakdown}</p>

                {/* Relevant Course */}
                <p className="text-md opacity-90">{item.course}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Decorative Lines */}
        {/* <LeftLine /> */}
        {/* <RightLine /> */}

        {/* Full Pricing Link */}
        <div className="flex justify-center mt-10">
          <a
            className="text-sm font-bold tracking-wider uppercase border-b text-gray-200 hover:text-gray-400"
            href="./"
          >
            See the full membership details
          </a>
        </div>
      </div>
    </Section>
  );
};

export default Pricing;
