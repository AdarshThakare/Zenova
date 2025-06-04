import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../Styles/SignInSignUp.css";
import { eventa } from "./Eventdata";
import { useEventStore } from "../../store/eventStore";
import { useAuthStore } from "../../store/authStore";
import threeuser from "../../assets/UsersImg.png";
import toast, { Toaster } from "react-hot-toast";

const EventCard = ({ event, navigate }) => {
  const userString = localStorage.getItem("User");
  const user = JSON.parse(userString);
  const [color, setColor] = useState(
    user.registeredEvents?.includes(event._id)
      ? "rgb(69, 79, 171)"
      : "rgb(95, 111, 255)"
  );
  const [isRegistered, setIsRegistered] = useState("Register");
  const [count, setCount] = useState(event.registeredUsers.length);

  const { registerUser } = useEventStore();

  const handleRegister = async (eventId) => {
    const result = await registerUser(eventId);
    console.log(JSON.stringify(result.data));

    setColor("rgb(69, 79, 171)");
    setIsRegistered("Registered");
    setCount(count + 1);

    if (!result.success) {
      toast.error(result.error);
    } else {
      localStorage.setItem("User", JSON.stringify(result.data));
      toast.success(result.message);
    }
  };

  const handleEditClick = (event) => {
    navigate(`/dashboard/edit/${event._id}`);
  };

  const formatDate = (dateString) => {
    const options = { day: "numeric", month: "long", year: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const truncateDescription = (description, wordLimit) => {
    const words = description.split(" ");
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(" ") + "...";
    }
    return description;
  };

  return (
    <>
      <div className="event-card">
        <img
          src={event.image}
          alt={event.title}
          className="event-card-image"
          onClick={() => {
            navigate(`/event-details/${event._id}`);
          }}
        />
        <div className="event-card-content">
          <div className="event-card-date-time">
            {formatDate(event.date)} : {event.time}
          </div>
          <h3
            className="event-card-title"
            onClick={() => {
              navigate(`/event-details/${event._id}`);
            }}
          >
            {event.title}
          </h3>
          <p className="event-card-description">
            {truncateDescription(event.description, 21)}
          </p>
          <div className="registered">
            <div className="event-card-attendees">
              <div className="attendee-avatars">
                <img src={threeuser} />
              </div>
              <span className="registered-count">
                + {Math.max(count, event.registeredUsers.length)} registered
              </span>
            </div>
            <Toaster
              position="top-right"
              toastOptions={{
                duration: 3000,
                style: {
                  background: "#363636",
                  color: "#fff",
                  borderRadius: "8px",
                },
                success: {
                  iconTheme: {
                    primary: "#10b981",
                    secondary: "#fff",
                  },
                },
                error: {
                  iconTheme: {
                    primary: "#ef4444",
                    secondary: "#fff",
                  },
                },
              }}
            />
            {user.role === "user" ? (
              <button
                className="event-card-button"
                onClick={() => {
                  handleRegister(event._id);
                }}
                style={{
                  backgroundColor: user.registeredEvents?.includes(event._id)
                    ? "rgb(69, 79, 171)"
                    : `${color}`,
                }}
              >
                {user.registeredEvents?.includes(event._id)
                  ? "Registered"
                  : `${isRegistered}`}
              </button>
            ) : (
              <div className="admin-card-buttons">
                <button
                  className="event-card-button edit-button"
                  onClick={() => {
                    handleEditClick(event);
                  }}
                >
                  Edit Event
                </button>
                <button className="event-card-button start-now-button">
                  Start Now
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default EventCard;
