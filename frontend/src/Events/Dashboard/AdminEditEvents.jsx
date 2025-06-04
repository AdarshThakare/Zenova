import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../Styles/SignInSignUp.css";
import { useEventStore } from "../../store/eventStore";
import toast, { Toaster } from "react-hot-toast";

const AdminEditEvents = () => {
  const { eventId } = useParams();
  const navigate = useNavigate();

  const [event, setEvent] = useState("");

  const { getAllEvents, getEventById, updateEvent, deleteEvent } =
    useEventStore();

  useEffect(() => {
    const fetchEvent = async () => {
      const result = await getEventById(eventId);
      setEvent(result.data);
    };
    fetchEvent();
  }, []);

  const handleUpdate = async () => {
    let imageUrl = null;

    if (file) {
      const uploadResult = await uploadToCloudinary(file);
      if (!uploadResult.success) {
        toast.error("Image upload failed");
        return;
      }
      imageUrl = uploadResult.url;
    }

    const result = await updateEvent(
      eventId,
      title,
      description,
      date,
      time,
      imageUrl
    );

    if (!result.success) {
      toast.error(result.error);
    } else {
      setDate("");
      setTime("");
      setTitle("");
      setDescription("");
      toast.success(result.message);
      await getAllEvents();
      navigate("/dashboard");
    }
  };

  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);

  useEffect(() => {
    if (event) {
      setTitle(event.title || "");
      setDate(event.date || "");
      setTime(event.time || "");
      setDescription(event.description || "");
      // handle file separately if needed
    }
  }, [event]);

  const uploadToCloudinary = async (file) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "au2ty08i"); // set in Cloudinary

    try {
      const res = await fetch(
        "https://api.cloudinary.com/v1_1/dyjl9bwpv/image/upload",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await res.json();
      return { success: true, url: data.secure_url };
    } catch (error) {
      console.error("Cloudinary upload error", error);
      return { success: false, error };
    }
  };

  const handleDeleteEvent = async () => {
    const result = await deleteEvent(eventId);

    if (!result.success) {
      toast.error(result.error);
    } else {
      toast.success(result.message);
      navigate("/dashboard");
    }
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  //   if (!event) {
  //     return <div className="loading">Loading...</div>;
  //   }

  return (
    <main className="main-content">
      <div className="container">
        <div className="create-event-section SingUp-Form">
          <h2>Edit Event</h2>
          <div className="form-row">
            <input
              type="text"
              placeholder="Title Here"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="form-row">
            <div style={{ flex: 1 }}>
              <label>Date</label>
              <input
                type="date"
                placeholder="mm/dd/yyyy"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                style={{ width: "100%" }}
              />
            </div>
            <div style={{ flex: 1 }}>
              <label>Time</label>
              <input
                type="time"
                placeholder="Select"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                style={{ width: "100%" }}
              />
            </div>
          </div>
          <div className="form-row">
            <textarea
              placeholder="Description Here"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows="4"
              style={{
                flex: 1,
                padding: "0.9rem 1rem",
                border: "0.5px solid #eee",
                borderRadius: "8px",
                backgroundColor: "#EDEFFF",
                fontSize: "14px",
                color: "var(--Black-2, #424748)",
                width: "100%",
              }}
            ></textarea>
            <div className="file-upload-area">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 14.899A7 7 0 0 1 7.5 7h1.095A4.5 4.5 0 0 1 15 7.5V8a2.5 2.5 0 0 0 2.5 2.5h1A4.5 4.5 0 0 1 22 14.5a4.5 4.5 0 0 1-3 4.5H4a2 2 0 0 1 0-4Z" />
                <line x1="12" x2="12" y1="16" y2="22" />
                <path d="m9 19 3 3 3-3" />
              </svg>
              <p>Choose a file or drag & drop it here</p>
              <p className="file-formats-text">
                JPEG, PNG, PDG, and MP4 formats, up to 50MB
              </p>
              <input
                type="file"
                onChange={handleFileChange}
                style={{ display: "none" }}
                id="file-upload"
              />
              <label
                htmlFor="file-upload"
                className="browse-button event-card-button"
              >
                Browse File
              </label>
              {file && (
                <p style={{ fontSize: "0.8rem", marginTop: "0.5rem" }}>
                  Selected: {file.name}
                </p>
              )}
              {/* {event.image && !file && (
                <img
                  src={event.image}
                  alt="Existing Event"
                  style={{ maxWidth: "100px", marginTop: "1rem" }}
                />
              )} */}
            </div>
          </div>
          <div
            className="SingUp-button"
            style={{
              flexDirection: "row",
              gap: "1rem",
              marginTop: "2rem",
              justifyContent: "space-around",
            }}
          >
            <button
              className="register-button save-edit-button"
              onClick={handleUpdate}
            >
              Save Edit
            </button>
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
            <button
              className="event-card-button delete-button"
              onClick={handleDeleteEvent}
            >
              Delete Event
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AdminEditEvents;
