import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import EventCard from "../Component/EventCard";
import "../Styles/SignInSignUp.css";
import { useEventStore } from "../../store/eventStore";
import toast, { Toaster } from "react-hot-toast";
import LogoutButton from "../Component/LogoutButton";
import ProfileIcon from "../Component/ProfileIcon";

const AdminDashboard = () => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);
  const [hour, setHour] = useState("");
  const [minute, setMinute] = useState("");
  const [ampm, setAmpm] = useState("AM");

  const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;

  useEffect(() => {
    if (hour && minute) {
      setTime(`${hour.padStart(2, "0")}:${minute.padStart(2, "0")} ${ampm}`);
    }
  }, [hour, minute]);

  const navigate = useNavigate();

  const uploadToCloudinary = async (file) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append(
      "upload_preset",
      import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET
    ); // set in Cloudinary

    try {
      const res = await fetch(
        `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
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

  const { events, createEvent, registerCount, getNumberOfUsers, getAllEvents } =
    useEventStore();

  const handleCreate = async () => {
    let imageUrl = null;

    if (file) {
      const uploadResult = await uploadToCloudinary(file);
      if (!uploadResult.success) {
        toast.error("Image upload failed");
      }
      imageUrl = uploadResult.url;
    }

    console.log(imageUrl);
    console.log(cloudName);
    if (!title || !imageUrl || !date || !time || !description) {
      toast.error("Please fill all the fields");
      return;
    }
    const result = await createEvent(title, description, date, time, imageUrl);

    if (!result.success) {
      toast.error(result.error);
      navigate("/dashboard");
    } else {
      setDate("");
      setTime("");
      setHour("");
      setMinute("");
      setTitle("");
      setDescription("");
      toast.success(result.message);
      await getAllEvents();
    }
  };

  useEffect(() => {
    getAllEvents();
    getNumberOfUsers();
  }, []);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  return (
    <main className="main-content">
      <LogoutButton />
      <div className="container">
        <div className="create-event-section SingUp-Form">
          <h2>Create Event</h2>
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
            <div style={{ flex: 1, justifyContent: "center" }}>
              <label>Time</label>
              <div style={{ display: "flex", gap: "8px" }}>
                <input
                  type="number"
                  min="1"
                  max="12"
                  value={hour}
                  onChange={(e) => setHour(e.target.value)}
                  placeholder="HH"
                  style={{
                    width: "40%",
                    padding: "18px 6px",
                    backgroundColor: "#EDEFFF",
                    border: "none",
                    borderRadius: "6px",
                  }}
                />
                <input
                  type="number"
                  min="0"
                  max="59"
                  value={minute}
                  onChange={(e) => setMinute(e.target.value)}
                  placeholder="MM"
                  style={{
                    width: "40%",
                    padding: "18px 6px",
                    backgroundColor: "#EDEFFF",
                    border: "none",
                    borderRadius: "6px",
                  }}
                />
                <select
                  value={ampm}
                  onChange={(e) => setAmpm(e.target.value)}
                  style={{
                    width: "20%",
                    padding: "18px 6px",
                    backgroundColor: "#EDEFFF",
                    border: "none",
                    borderRadius: "6px",
                  }}
                >
                  <option value="AM">AM</option>
                  <option value="PM">PM</option>
                </select>
              </div>
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
            </div>
          </div>
          <div className="SingUp-button">
            <button
              onClick={handleCreate}
              className="register-button"
              style={{ maxWidth: "200px" }}
            >
              Create
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
    </main>
  );
};

export default AdminDashboard;
