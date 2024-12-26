import Section from "./Section";
import { useNavigate } from "react-router-dom"; // Assuming you're using react-router-dom for navigation
import team from "./Team";


const coreMembers = [
  {
    name: "Sahil Wadhwa",
    role: "President",
    image: "./assets/team/SW.JPG" // Change this path based on Vite's asset handling
  },
  {
    name: "Ayush Pathania",
    role: "Vice President",
    image: "./assets/team/AP.jpeg"
  },
  {
    name: "Srishti",
    role: "General Secretary",
    image: "./assets/team/SN.jpeg"
  },
  {
    name: "RS Krishna",
    role: "Joint Secretary",
    image: "./assets/team/RSK.jpg"
  },
  {
    name: "Dinky",
    role: "Joint Secretary",
    image: "./assets/team/DK.jpg"
  },
  {
    name: "Amit Kumar",
    role: "Joint Secretary",
    image: "./assets/team/AK.png"
  },
  
];

export default function CoreTeam() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/team"); // Navigate to the /team route
  };

  return (
    <Section>
      <div className="text-white flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-4">Core Team</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl">
          {coreMembers.map((member, index) => (
            <div key={index} className="flex flex-col items-center bg-gray-900 rounded-lg p-6">
              <img
                src={member.image}
                alt={member.name}
                width={200}
                height={200}
                className="rounded-full mb-4"
              />
              <h3 className="text-lg font-semibold text-center">{member.name}</h3>
              <p className="text-gray-400 text-center">{member.role}</p>
            </div>
          ))}
        </div>

        {/* Button Section */}
        <button
          onClick={handleButtonClick}
          className="mt-8 px-6 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-full text-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition duration-300"
        >
          Our Team
        </button>
      </div>
    </Section>
  );
}