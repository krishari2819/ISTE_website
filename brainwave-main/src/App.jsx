import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import ButtonGradient from "./assets/svg/ButtonGradient";
import Benefits from "./components/Benefits";
import Collaboration from "./components/Collaboration";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import Roadmap from "./components/Roadmap";
import Services from "./components/Services";
import CoreTeam from "./components/CoreTeam";
import Team from "./components/Team";
import Popup from "./components/Popup"; // Import the Popup component
import AnnouncementSection from "./components/AnnouncementSection"; // Import AnnouncementSection component

const App = () => {
  const location = useLocation(); // Get current route location
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false); // Initially false, popup will show up only for /

  // Create refs for each section
  const benefitsRef = useRef(null);
  const collaborationRef = useRef(null);
  const servicesRef = useRef(null);
  const pricingRef = useRef(null);
  const roadmapRef = useRef(null);
  const announcementRef = useRef(null);

  // Function to close the popup
  const handleClosePopup = () => {
    setShowPopup(false); // Hide the popup when user closes it
  };

  // Show popup only when URL is /
  useEffect(() => {
    if (location.pathname === "/") {
      setShowPopup(true); // Show popup for / route
    } else {
      setShowPopup(false); // Hide popup for other routes
    }
  }, [location]);

  // Scroll to section based on hash change
  useEffect(() => {
    const hash = window.location.hash; // Get the current hash
    if (hash) {
      const id = hash.substring(1); // Remove the '#' character
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" }); // Smooth scroll to the element
      }
    }
  }, [location]);

  // Scroll to the top of the page when navigating to the /team page
  useEffect(() => {
    if (location.pathname === "/team") {
      window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to top smoothly
    }
  }, [location]);

  // Define a flag to hide components when on the Team page
  const isTeamPage = location.pathname === "/team";

  // Function to navigate to a specific section
  const handleNavigation = (path) => {
    navigate(path); // Navigate to the specified path
  };

  return (
    <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
      <Header 
        onNavigate={handleNavigation} // Pass the navigation handler to Header
      />

      {/* Conditionally show only Team page or all other content */}
      {isTeamPage ? (
        <>
          <Team />
          <Footer />
        </>
      ) : (
        <>
          {/* Hero section stays visible on all routes except /team */}
          <Hero />

          {/* Show Popup when the URL is / */}
          {showPopup && <Popup onClose={handleClosePopup} />}

          <Routes>
            <Route path="/" element={<></>} /> {/* Default path */}
            <Route path="/coreteam" element={<CoreTeam />} />
            <Route path="/team" element={<Team />} /> {/* Team page */}
          </Routes>

          {/* Render the other components conditionally based on the current page */}
          <div id="announcements" ref={announcementRef}>
            <AnnouncementSection />
          </div>
          <div id="features" ref={benefitsRef}>
            <Benefits />
          </div>
          <div id="about" ref={collaborationRef}>
            <Collaboration />
          </div>
          <div id="committee" ref={servicesRef}>
            <Services />
          </div>
          <div id="registration" ref={pricingRef}>
            <Pricing />
          </div>
          <div id="testimonial" ref={roadmapRef}>
            <Roadmap />
          </div>

          <Footer />
          <ButtonGradient />
        </>
      )}
    </div>
  );
};

export default App;
