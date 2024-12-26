import React from "react";
// import eventPoster from '../assets/event-poster.jpg'; // Ensure this path is correct

const Popup = ({ onClose }) => {
  const redirectToAnnouncements = () => {
    window.location.href = "/announcements"; // Redirect to announcements page
  };

  const redirectToRegistration = () => {
    window.open("https://your-registration-link.com", "_blank"); // Update with the actual registration link
  };

  return (
    <div style={styles.overlay}>
      <div style={styles.popup}>
        {/* Cross Icon to close popup */}
        <span style={styles.closeIcon} onClick={onClose}>
          &times;
        </span>

        <h2 style={styles.title}>Important Announcement</h2>
        <p style={styles.text}>
          Join us for the exciting Flash Mob event! Dance, Music, and Open Mic. 
          Click 'Register Now' to participate.
        </p>
        
        {/* Display the Flash Mob Image */}
        <img src= "./assets/benefits/eventPoster.png" alt="Flash Mob Event" style={styles.image} />

        <div style={styles.buttons}>
          <button style={styles.readMoreBtn} onClick={redirectToAnnouncements}>
            Read More
          </button>
          <button style={styles.registerBtn} onClick={redirectToRegistration}>
            Register Now
          </button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.8)", // Dark overlay
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  },
  popup: {
    background: "linear-gradient(145deg, #ffffff, #e6e6e6)", // Gradient background
    padding: "20px",
    borderRadius: "15px",
    width: "350px", // Reduced width to fit smaller screens
    maxWidth: "90%", // Ensures the popup never exceeds 90% of the screen width
    boxShadow: "10px 10px 30px rgba(0, 0, 0, 0.2), -10px -10px 30px rgba(255, 255, 255, 0.8)", // Softer shadow effect
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    position: "relative",
  },
  title: {
    marginBottom: "10px",
    fontSize: "1.6rem", // Adjusted font size to fit smaller width
    fontWeight: "bold",
    color: "#3a3a3a", // Darker color for title
  },
  text: {
    marginBottom: "15px", // Slightly reduced margin
    fontSize: "1rem", // Slightly smaller font size
    color: "#555", // Dark gray for better readability
  },
  image: {
    width: "100%", // Make the image responsive
    height: "auto",
    marginBottom: "20px",
    borderRadius: "10px", // Optional: To give the image rounded corners
  },
  buttons: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "auto", // Push buttons to the bottom
  },
  readMoreBtn: {
    padding: "8px 15px", // Reduced padding
    backgroundColor: "#6c757d", // Muted gray for read more button
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.3s, transform 0.3s", // Smooth transition for hover effect
    boxShadow: "0 2px 5px rgba(108, 117, 125, 0.2)", // Softer button shadow
  },
  registerBtn: {
    padding: "8px 15px", // Reduced padding
    backgroundColor: "#28a745", // Green for register button
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.3s, transform 0.3s", // Smooth transition for hover effect
    boxShadow: "0 2px 5px rgba(40, 167, 69, 0.2)", // Softer button shadow
  },
  closeIcon: {
    position: "absolute",
    top: "10px",
    right: "15px",
    fontSize: "24px", // Larger font for close icon
    fontWeight: "bold",
    color: "#333", // Darker color for close icon
    cursor: "pointer",
  },
};

export default Popup;