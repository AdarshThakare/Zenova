import React, { useState, useEffect } from "react";
import Snackbar from "../../components/Snackbar";
import "../Styles/SignInSignUp.css";
import { Link, useNavigate } from "react-router-dom";
import EventCard from "./EventCard";
import { useEventStore } from "../../store/eventStore";
import toast from "react-hot-toast";
import LogoutButton from "./LogoutButton";
import ProfileIcon from "./ProfileIcon";

const EventCards = () => {
  const [currentDate, setCurrentDate] = useState("");
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [showLogout, setShowLogout] = useState(false);
  const navigate = useNavigate();

  const { getAllEvents, events, registerCount, getNumberOfUsers } =
    useEventStore();

  useEffect(() => {
    getAllEvents();
    getNumberOfUsers();
  }, []);

  const handleSnackbarClose = () => setShowSnackbar(false);
  const handleProfileClick = () => setShowLogout(!showLogout);

  return (
    <div>
      <main className="main-content">
        <div className="container">
          <div className="signin-welcome-banner">
            <div className="signin-header">
              <span className="signin-date">{currentDate}</span>
              <div
                className="profile-container"
                style={{
                  position: "relative",
                  zIndex: 9999,
                  paddingTop: "0.7rem",
                  paddingRight: "0.5rem",
                }}
              >
                <div
                  onClick={handleProfileClick}
                  style={{ cursor: "pointer", transform: "scale(0.85)" }}
                >
                  <ProfileIcon />
                </div>
                {showLogout && (
                  <div
                    className="logout-button-container"
                    style={{
                      position: "absolute",
                      right: "0",
                      top: "100%",
                      zIndex: 9999,
                      marginTop: "10px",
                    }}
                  >
                    <LogoutButton />
                  </div>
                )}
              </div>
            </div>
            <div className="signin-banner-content">
              <div className="signin-text-container">
                <h1>Events</h1>
              </div>
            </div>
          </div>
          <div className="events-grid">
            {events.map((event) => (
              <EventCard
                key={event._id}
                event={event}
                navigate={navigate}
                count={registerCount}
              />
            ))}
          </div>
        </div>
        {showSnackbar && <Snackbar onClose={handleSnackbarClose} />}
      </main>
    </div>
  );
};

export default EventCards;
