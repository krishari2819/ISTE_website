import React from "react";
import { teamImages } from "../constants/index"; // Adjust the import path as needed

const TeamMemberCard = ({ image, name, role }) => {
  return (
    <div className="flex flex-col items-center rounded-lg p-6 h-auto backdrop-blur-lg bg-zinc-500/30 border-indigo-700 transition-transform duration-300 ease-in-out transform hover:scale-105">
      <img
        src={image}
        alt={name}
        width={150}
        height={150}
        className="rounded-full mb-4"
      />
      <div className="flex flex-col items-center">
        <h3 className="text-lg font-semibold text-center">{name}</h3>
        <p className="text-gray-400 text-center">{role}</p>
      </div>
    </div>
  );
};

const TeamSection = ({ title, members }) => {
  return (
    <div className="my-12">
      <h2 className="text-3xl font-bold mb-6">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
        {members.map((member, index) => (
          <TeamMemberCard key={index} image={member.image} name={member.name} role={member.role} />
        ))}
      </div>
    </div>
  );
};

const coreTeamData = [
  {
    department: "Tech Team",
    members: [
      { name: "Avish", role: "Team Lead", image: teamImages.techTeam.avish },
      { name: "RS Krishna", role: "Member", image: teamImages.techTeam.rsKrishna },
      { name: "Jatin Mittal", role: "Member", image: teamImages.techTeam.jatinMittal },
      { name: "Nivedita", role: "Member", image: teamImages.techTeam.nivedita },
      { name: "Baljeet", role: "Member", image: teamImages.techTeam.baljeet },
      { name: "Aman Raj", role: "Member", image: teamImages.techTeam.amanRaj },
      { name: "Sagar", role: "Member", image: teamImages.techTeam.sagar },
      { name: "Dipika Tiwari", role: "Member", image: teamImages.techTeam.dipikaTiwari },
    ],
  },
  {
    department: "Event Planning & Management",
    members: [
      { name: "Yatin Berry", role: "Member", image: teamImages.eventPlanning.yatinBerry },
      { name: "Vansh Bhushan", role: "Member", image: teamImages.eventPlanning.vanshBhushan },
      { name: "Vasudha Sharma", role: "Member", image: teamImages.eventPlanning.vasudhaSharma },
      { name: "Abhijeet Singh", role: "Member", image: teamImages.eventPlanning.abhijeetSingh },
      { name: "Romita Das", role: "Member", image: teamImages.eventPlanning.romitaDas },
      { name: "Anay Raj Gupta", role: "Member", image: teamImages.eventPlanning.anayRajGupta },
      { name: "Tushar", role: "Member", image: teamImages.eventPlanning.tushar },
      { name: "Amit Kumar", role: "Member", image: teamImages.eventPlanning.amitKumar },
      { name: "Dinky", role: "Member", image: teamImages.eventPlanning.dinky },
      { name: "Tanisha Mahajan", role: "Member", image: teamImages.eventPlanning.tanishaMahajan },
    ],
  },
  {
    department: "Social Media Team",
    members: [
      { name: "Saksham Goyal", role: "Team Lead", image: teamImages.socialMediaTeam.sakshamGoyal },
      { name: "Sridha Reddy", role: "Member", image: teamImages.socialMediaTeam.sridhaReddy },
      { name: "Shaik Mohammed Zayed", role: "Member", image: teamImages.socialMediaTeam.shaikZayed },
    ],
  },
  {
    department: "Operational Team",
    members: [
      { name: "Prabhleen Kaur", role: "Junior Lead", image: teamImages.operationalTeam.prabhleenKaur },
    ],
  },
  {
    department: "Multimedia Team",
    members: [
      { name: "Suhani Bajjard", role: "Member (Design)", image: teamImages.multimediaTeam.suhaniBajjard },
      { name: "Moinak Niyogi", role: "Member (Content)", image: teamImages.multimediaTeam.moinakNiyogi },
    ],
  },
];

export default function Team() {
  return (
    <div className="container mx-auto p-10">
      <h1 className="text-4xl font-bold text-center mb-10">Our Core Team</h1>
      {coreTeamData.map((team, index) => (
        <TeamSection
          key={index}
          title={team.department}
          members={team.members}
        />
      ))}
    </div>
  );
}
