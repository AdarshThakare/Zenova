import React from "react";
import { Link } from "react-router-dom";
import "../Styles/SignInSignUp.css";

const EventCard = ({ event, navigate }) => {
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
    <div
      className="event-card"
      onClick={() => navigate(`/event-details/${event.id}`)}
    >
      <img src={event.image} alt={event.title} className="event-card-image" />
      <div className="event-card-content">
        <div className="event-card-date-time">
          {formatDate(event.date)} : {event.time}
        </div>
        <h3 className="event-card-title">{event.title}</h3>
        <p className="event-card-description">
          {truncateDescription(event.description, 21)}
        </p>
        <div className="registered">
          <div className="event-card-attendees">
            <div className="attendee-avatars">
              {event.registeredUsers.slice(0, 3).map((user, index) => (
                <img
                  key={user.email || index}
                  src={user.imageUrl}
                  alt={user.name}
                />
              ))}
            </div>
            <span className="registered-count">
              +{event.registeredCount} registered
            </span>
          </div>
          <button className="event-card-button">Register</button>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
