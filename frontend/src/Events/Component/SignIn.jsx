import React, { useState, useEffect } from "react";
import Snackbar from "../../components/Snackbar";
import "../Styles/SignInSignUp.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const [currentDate, setCurrentDate] = useState("");
  const [showSnackbar, setShowSnackbar] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const today = new Date();
    const options = { year: "numeric", month: "long", day: "numeric" };
    setCurrentDate(today.toLocaleDateString("en-US", options));

    const timer = setTimeout(() => {
      setShowSnackbar(true);
    }, 23000);
    return () => clearTimeout(timer);
  }, []);

  const handleSnackbarClose = () => setShowSnackbar(false);

  return (
    <div>
      <main className="main-content">
        <div className="container">
          <div className="signin-welcome-banner">
            <div className="signin-header">
              <span className="signin-date">{currentDate}</span>
              <button
                className="trigger-btn notification-button"
                onClick={() => setShowSnackbar(true)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M7.25013 4.664C8.12013 3.367 9.62313 2 12.0001 2C14.3771 2 15.8801 3.367 16.7501 4.664C17.3248 5.53512 17.7427 6.49997 17.9851 7.515L19.5201 15.429C19.6043 15.8633 19.5914 16.3108 19.4824 16.7395C19.3734 17.1682 19.1709 17.5675 18.8894 17.9087C18.608 18.25 18.2546 18.5248 17.8545 18.7135C17.4544 18.9021 17.0175 19 16.5751 19H7.42513C6.98278 19 6.54591 18.9021 6.14581 18.7135C5.74571 18.5248 5.39228 18.25 5.11083 17.9087C4.82939 17.5675 4.6269 17.1682 4.51786 16.7395C4.40882 16.3108 4.39594 15.8633 4.48013 15.429L6.01513 7.515C6.25744 6.49962 6.6754 5.53543 7.25013 4.664Z"
                    fill="#FFF7F7"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8.51416 20C8.76616 20.48 9.15216 20.983 9.73716 21.367C10.3472 21.767 11.1132 22 12.0472 22C12.9802 22 13.7472 21.767 14.3572 21.367C14.9422 20.983 15.3272 20.481 15.5802 20H8.51416Z"
                    fill="#FFF7F7"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M17.2932 2.29303C17.1057 2.48056 17.0004 2.73487 17.0004 3.00003C17.0004 3.26519 17.1057 3.5195 17.2932 3.70703C18.1192 4.53303 18.5552 5.34303 19.0302 7.24303C19.0962 7.49863 19.2606 7.71778 19.4875 7.85268C19.7144 7.98757 19.9854 8.02728 20.2415 7.96313C20.4976 7.89898 20.7179 7.73618 20.8544 7.51024C20.9909 7.2843 21.0325 7.01355 20.9702 6.75703C20.4452 4.65703 19.8802 3.46703 18.7072 2.29303C18.5197 2.10556 18.2654 2.00024 18.0002 2.00024C17.7351 2.00024 17.4807 2.10556 17.2932 2.29303ZM6.70722 2.29303C6.89469 2.48056 7.00001 2.73487 7.00001 3.00003C7.00001 3.26519 6.89469 3.5195 6.70722 3.70703C5.88122 4.53303 5.44522 5.34303 4.97022 7.24303C4.90424 7.49863 4.73988 7.71778 4.51297 7.85268C4.28606 7.98757 4.01502 8.02728 3.75895 7.96313C3.50288 7.89898 3.28257 7.73618 3.14605 7.51024C3.00954 7.2843 2.9679 7.01355 3.03022 6.75703C3.55522 4.65703 4.12022 3.46703 5.29322 2.29303C5.48075 2.10556 5.73506 2.00024 6.00022 2.00024C6.26538 2.00024 6.51969 2.10556 6.70722 2.29303Z"
                    fill="#FFF7F7"
                  />
                  <circle cx="5" cy="14" r="4" fill="#FF0000" />
                </svg>
              </button>
            </div>
            <div className="signin-banner-content">
              <div className="signin-text-container">
                <h1>Events</h1>
              </div>
            </div>
          </div>
          <div className="SingUp-Form">
            <h2>Sign in</h2>
            <p>
              Welcome back to Zenova! Log in to explore upcoming events, join
              exciting game tournaments, attend QnA sessions, and never miss out
              on helpful college prep tips. Your personalized event dashboard is
              just a click away. Let's get started!
            </p>
            <input
              style={{ textAlign: "center" }}
              type="email"
              placeholder="Email Address"
            />
            <input
              style={{ textAlign: "center" }}
              type="password"
              placeholder="Password"
            />
            <div className="SingUp-button">
              <p>
                Dont have an Account? <Link to="/signup">Sign up</Link>
              </p>
              <button onClick={() => navigate("/EventCards")}>Sing in</button>
            </div>
          </div>
        </div>
        {showSnackbar && <Snackbar onClose={handleSnackbarClose} />}
      </main>
    </div>
  );
};

export default SignIn;
