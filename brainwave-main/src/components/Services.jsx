"use client";

import Section from "./Section";
import CoreTeam from "./CoreTeam"; // Import the CoreTeam component

const teamMembers = [
  {
    name: "Prof. (Dr. ) Suresh Kaswan",
    role: "Faculty Advisor - ISTE",
    image: "./assets/benefits/srs.jpeg",
  },
  {
    name: "Prof. (Dr.) Sandeep Singh Kang",
    role: "Professor & Associate Director-CSE, CU",
    image: "./assets/benefits/ssk.jpg",
  },
  {
    name: "Mr. A",
    role: "Role A",
    image: "./assets/benefits/srs.jpeg",
  },
  {
    name: "Mr. B",
    role: "Role B",
    image: "./assets/benefits/srs.jpeg",
  },
];

export default function TeamSection() {
  return (
    <Section crosses>
      <div className="text-white flex flex-col items-center justify-center p-8">
        <h1 className="text-4xl font-bold mb-4">Executive Board</h1>
        <div className=" max-w-5xl flex justify-center space-x-8">
          {teamMembers.slice(0, 2).map((member, index) => (
            <div key={index} className="flex-none w-1/2 px-4">
              <div className="flex flex-col items-center bg-gray-900 rounded-lg p-8 h-[350px]">
                <img
                  src={member.image}
                  alt={member.name}
                  width={200}
                  height={150}
                  className="rounded-lg mb-4"
                />
                <h3 className="text-lg font-semibold text-center">
                  {member.name}
                </h3>
                <p className="text-gray-400 text-center">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Add the CoreTeam component right after the team section */}
      <CoreTeam />
    </Section>
  );
}
