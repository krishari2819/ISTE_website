// Importing assets
import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  chromecast,
  disc02,
  discord,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  linkedIn,
  // slide1, // Add slide images here
  // slide2,
  // slide3,
} from "../assets";

// Navigation menu links
export const navigation = [
  { id: "0", title: "Features", url: "/features" },
  { id: "1", title: "About Us", url: "/about" },
  { id: "2", title: "Committee", url: "/committee" },
  { id: "3", title: "Registration", url: "/registration" },
  { id: "4", title: "Testimonial", url: "/testimonial" },
];

// Icons for hero section
export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

// Notification images
export const notificationImages = [notification4, notification3, notification2];

// Brainwave services section
export const brainwaveServices = [
  { title: "Photo generating", icon: recording03 },
  { title: "Photo enhance", icon: recording01 },
  { title: "Seamless Integration", icon: disc02 },
];

// Roadmap section
export const roadmap = [
  {
    id: "0",
    title: "Voice recognition",
    text: "Enable the chatbot to understand and respond to voice commands, making it easier for users to interact with the app hands-free.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Gamification",
    text: "Add game-like elements, such as badges or leaderboards, to incentivize users to engage with the chatbot more frequently.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Chatbot customization",
    text: "Allow users to customize the chatbot's appearance and behavior, making it more engaging and fun to interact with.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "Integration with APIs",
    text: "Allow the chatbot to access external data sources, such as weather APIs or news APIs, to provide more relevant recommendations.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap4,
  },
];

// Collaboration content
export const collabContent = [
  {
    id: "0",
    title: "Seamless Integration",
    text: "With smart automation and top-notch security, it's the perfect solution for teams looking to work smarter.",
  },
  { id: "1", title: "Smart Automation" },
  { id: "2", title: "Top-notch Security" },
];

// Collaboration apps
export const collabApps = [
  { id: "0", title: "Figma", icon: figma, width: 26, height: 36 },
  { id: "1", title: "Notion", icon: notion, width: 34, height: 36 },
  { id: "2", title: "Discord", icon: discord, width: 36, height: 28 },
  { id: "3", title: "Slack", icon: slack, width: 34, height: 35 },
  { id: "4", title: "Photoshop", icon: photoshop, width: 34, height: 34 },
  { id: "5", title: "Protopie", icon: protopie, width: 34, height: 34 },
  { id: "6", title: "Framer", icon: framer, width: 26, height: 34 },
  { id: "7", title: "Raindrop", icon: raindrop, width: 38, height: 32 },
];

// Pricing plans
export const pricing = [
  {
    id: "0",
    title: "Basic",
    description: "AI chatbot, personalized recommendations",
    price: "0",
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
  {
    id: "1",
    title: "Premium",
    description: "Advanced AI chatbot, priority support, analytics dashboard",
    price: "9.99",
    features: [
      "An advanced AI chatbot that can understand complex queries",
      "An analytics dashboard to track your conversations",
      "Priority support to solve issues quickly",
    ],
  },
  {
    id: "2",
    title: "Enterprise",
    description: "Custom AI chatbot, advanced analytics, dedicated account",
    price: null,
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
];

// Benefits section
export const benefits = [
  {
    id: "0",
    title: "Skill Development Workshops",
    text: "Our workshops are designed to build strong foundational and advanced technical skills in fields such as software development, artificial intelligence, cloud computing, and data science.",
    backgroundUrl: "./assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: "./assets/benefits/ISTE-Logo.png",
  },
  {
    id: "1",
    title: "Hackathons and Innovation Challenges",
    text: "The ISTE Student Chapter regularly organizes hackathons and innovation challenges where students can put their knowledge into action.",
    backgroundUrl: "./assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: "./assets/benefits/ISTE-Logo.png",
    light: true,
  },
  {
    id: "2",
    title: "Industry Collaborations and Networking",
    text: "We facilitate partnerships with leading companies and technology firms, offering students direct exposure to industry practices through seminars, internships, and collaborative projects.",
    backgroundUrl: "./assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: "./assets/benefits/ISTE-Logo.png",
  },
  {
    id: "3",
    title: "Project-Based Learning",
    text: "Engage in practical, project-based learning experiences that enable students to work on solving real-world problems.",
    backgroundUrl: "./assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: "./assets/benefits/ISTE-Logo.png",
    light: true,
  },
  {
    id: "4",
    title: "Certification Programs",
    text: "The ISTE Student Chapter offers various certification programs in areas like cybersecurity, cloud computing, machine learning, and web development.",
    backgroundUrl: "./assets/benefits/card-5.svg",
    iconUrl: benefitIcon1,
    imageUrl: "./assets/benefits/ISTE-Logo.png",
  },
  {
    id: "5",
    title: "Mentorship and Leadership Programs",
    text: "Our mentorship programs connect students with industry experts and experienced alumni who provide guidance on academic and career growth.",
    backgroundUrl: "./assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: "./assets/benefits/ISTE-Logo.png",
  },
];

// Social links
export const socials = [
  {
    id: "0",
    title: "LinkedIn",
    iconUrl: linkedIn,
    url: "https://linkedin.com",
  },
  { id: "1", title: "Twitter", iconUrl: twitter, url: "#" },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "https://www.instagram.com/iste_cusc/",
  },
  { id: "3", title: "Telegram", iconUrl: telegram, url: "#" },
  { id: "4", title: "Facebook", iconUrl: facebook, url: "#" },
];

// Slide images for Hero section
export const slideImages = [
  "./assets/benefits/image1.JPG", // Correct path
  "/assets/benefits/image2.JPG",
  "/assets/benefits/image3.JPG",
  "/assets/benefits/image4.JPG",
  "/assets/benefits/image5.JPG",
  "/assets/benefits/image6.JPG",
  "/assets/benefits/image7.JPG",
  "/assets/benefits/image8.JPG",
];

// Add this in your index.js file where other constants are defined

export const newsItems = [
  {
    id: "1",
    title: "New AI Research Project Launched",
    description: "Details about the new AI research project.",
    date: "2024-11-01",
  },
  {
    id: "2",
    title: "Hackathon Registration Open",
    description: "Register now for the upcoming hackathon event.",
    date: "2024-11-15",
  },
  // Add more news items as necessary
];

export const teamImages = {
  techTeam: {
    avish: "./assets/team/Avish.jpg",
    rsKrishna: "./assets/team/RSK.jpg",
    jatinMittal: "./assets/team/Jatin Mittal.jpg",
    nivedita: "./assets/team/Nivedita.jpg",
    baljeet: "./assets/team/Baljeet.jpg",
    amanRaj: "./assets/team/aman.jpg",
    sagar: "./assets/team/SR2.jpg",
    dipikaTiwari: "./assets/team/DT.jpg",
  },
  eventPlanning: {
    yatinBerry: "./assets/team/YB.jpg",
    vanshBhushan: "./assets/team/VB.jpg",
    vasudhaSharma: "./assets/team/VS.jpg",
    abhijeetSingh: "./assets/team/AS.jpg",
    romitaDas: "./assets/team/RD.jpg",
    anayRajGupta: "./assets/team/ARG.jpg",
    tushar: "./assets/team/TP.jpg",
    amitKumar: "./assets/team/AK.png",
    dinky: "./assets/team/DK.jpg",
    tanishaMahajan: "./assets/team/TM.jpg",
  },
  socialMediaTeam: {
    sakshamGoyal: "./assets/team/SG.png",
    sridhaReddy: "./assets/team/SR.jpeg",
    shaikZayed: "./assets/team/SMZ.jpeg",
  },
  operationalTeam: {
    prabhleenKaur: "./assets/team/PK.jpeg",
  },
  multimediaTeam: {
    suhaniBajjard: "./assets/team/SB.png",
    moinakNiyogi: "./assets/team/MN.jpg",
  },
};
