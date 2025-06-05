import React, { useEffect, useRef } from "react";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import "../Styles/Room.css";
import { API_URL } from "../../constants/api";
import toast from "react-hot-toast";

const Room = () => {
  const location = useLocation();
  const { roomId } = useParams();

  const navigate = useNavigate();

  const userString = localStorage.getItem("User");
  const user = JSON.parse(userString);

  const zegoCloudInstance = useRef(null);
  const videoContainerRef = useRef(null);

  const endLive = async () => {
    try {
      const res = await axios.put(
        `${API_URL}/event/end/${roomId}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("Token")}`,
          },
        }
      );
      const data = await res.msg;
      if (res.success) {
        navigate("/dashboard");
        toast.success(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const zegoCloudContainerCallback = (element) => {
    if (element && !zegoCloudInstance.current) {
      const appID = parseInt(import.meta.env.VITE_ZEGOCLOUD_APP_ID);
      const serverSecret = import.meta.env.VITE_ZEGOCLOUD_SERVER_SECRET;

      const userID = user._id;
      const userName = `${user.firstName} ${user.lastName}`;
      const zegoRole =
        user.role === "admin"
          ? ZegoUIKitPrebuilt.Host
          : ZegoUIKitPrebuilt.Audience;
      const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
        appID,
        serverSecret,
        roomId,
        userID,
        userName
      );
      const zp = ZegoUIKitPrebuilt.create(kitToken);
      zegoCloudInstance.current = zp;
      zp.joinRoom({
        container: element,
        scenario: {
          mode: ZegoUIKitPrebuilt.LiveStreaming,
          config: {
            role: zegoRole,
          },
        },
        showPreJoinView: true,
        userName: userName,
        liveNotStartedTextForAudience: "Live stream has not started yet.",
        onLeaveRoom: () => {
          if (user.role === "admin") {
            endLive();
            return;
          } else {
            navigate("/dashboard");
          }
        },
        joinRoomCallback: () => {
          if (user.role === "admin") {
            console.log("Joined room as host, starting stream.");
            zp.startPublishingStream;
          }
        },
      });
    } else if (!element && zegoCloudInstance.current) {
      console.log("Cleaning up ZegoCloud instance");
      zegoCloudInstance.current.destroy();
      zegoCloudInstance.current = null;
    }
  };

  useEffect(() => {
    return () => {
      console.log("Effect cleanup: Cleaning up ZegoCloud instance");
      if (zegoCloudInstance.current) {
        zegoCloudInstance.current.destroy();
        zegoCloudInstance.current = null;
      }
    };
  }, []);

  return (
    <div className="room-page">
      <nav className="navbar">
        <div className="navbar-brand">ZENOVA</div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
          }}
        >
          {" "}
          <button onClick={() => navigate(-1)} className="back-button">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19 12H5M5 12L12 19M5 12L12 5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Back to Events
          </button>
        </div>
      </nav>
      <div ref={zegoCloudContainerCallback} className="video-container"></div>
      <footer className="room-footer">
        <div className="footer-copyright">
          © 2025 Zenova. All rights reserved.
        </div>
        <div className="footer-links">
          <a
            href="/legal?policy=terms"
            target="_blank"
            rel="noopener noreferrer"
          >
            Terms
          </a>
          <a
            href="/legal?policy=privacy"
            target="_blank"
            rel="noopener noreferrer"
          >
            Privacy Policy
          </a>
          <a href="mailto:connect.zenova@gmail.com">Contact Us</a>
        </div>
      </footer>
    </div>
  );
};

export default Room;
