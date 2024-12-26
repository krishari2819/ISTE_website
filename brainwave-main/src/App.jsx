import { Routes, Route, useLocation, Navigate } from "react-router-dom";
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
  const [showPopup, setShowPopup] = useState(false); // Initially false, popup will show up only for /hero

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

  // Show popup only when URL is /hero
  useEffect(() => {
    if (location.pathname === "/hero") {
      setShowPopup(true); // Show popup for /hero route
    } else {
      setShowPopup(false); // Hide popup for other routes
    }
  }, [location]);

  // Scroll to section based on hash change
  useEffect(() => {
    if (location.pathname.includes("/features") && benefitsRef.current) {
      benefitsRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (location.pathname.includes("/about") && collaborationRef.current) {
      collaborationRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (location.pathname.includes("/committee") && servicesRef.current) {
      servicesRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (location.pathname.includes("/registration") && pricingRef.current) {
      pricingRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (location.pathname.includes("/testimonial") && roadmapRef.current) {
      roadmapRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (location.pathname.includes("/announcements") && announcementRef.current) {
      announcementRef.current.scrollIntoView({ behavior: "smooth" });
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

  return (
    <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
      <Header />

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

          {/* Announcement Section below the Hero */}
          {/* <AnnouncementSection /> */}

          {/* Show Popup when the URL is /hero */}
          {showPopup && <Popup onClose={handleClosePopup} />}

          <Routes>
            {/* Redirect from / to /hero */}
            <Route path="/" element={<Navigate to="/hero" />} />
            <Route path="/hero" element={<></>} /> {/* Keep this path for /hero */}
            <Route path="/coreteam" element={<CoreTeam />} />
            <Route path="/team" element={<Team />} /> {/* Team page */}
          </Routes>

          {/* Render the other components conditionally based on the current page */}
          <div ref={announcementRef}>
            <AnnouncementSection />
          </div>
          <div ref={benefitsRef}>
            <Benefits />
          </div>
          <div ref={collaborationRef}>
            <Collaboration />
          </div>
          <div ref={servicesRef}>
            <Services />
          </div>
          <div ref={pricingRef}>
            <Pricing />
          </div>
          <div ref={roadmapRef}>
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
