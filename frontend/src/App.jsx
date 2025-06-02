import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Navbar from "./components/Navbar";
import Loader from "./components/Loader";
import Dashboard from "./pages/Dashboard";
import Interview from "./pages/Interview";
import Events from "./pages/Events";
import EventCards from "./Events/Component/EventCards";
import Comparison from "./pages/Comparison";
import Contribute from "./pages/Contribute";
import NSATExam from "./pages/NSATExam";
import BookSession from "./pages/BookSession";
import AboutUs from "./pages/AboutUs";
import Legal from "./pages/Legal";
import PaidFree from "./pages/PaidFree";
import Mathematics from "./pages/Mathematics";
import English from "./pages/English";
import GeneralAptitude from "./pages/GeneralAptitude";
import Quiz from "./quizApp/Quiz";
import QuizError from "./quizApp/QuizError";
import SignIn from "./Events/Component/SignIn";
import SignUp from "./Events/Component/SignUp";
import EventDetails from "./Events/Component/EventDetails";
import AdminDashboard from "./Events/Dashboard/AdminDashboard";

function AppContent() {
  const location = useLocation();
  const hideNavbar =
    location.pathname.startsWith("/legal") ||
    location.pathname.startsWith("/paid-free") ||
    location.pathname.startsWith("/quiz");

  return (
    <div className="min-h-screen bg-gray-50">
      {!hideNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/nsat-exam" element={<NSATExam />} />
        <Route path="/interview" element={<Interview />} />
        <Route path="/book-session" element={<BookSession />} />
        <Route path="/Events" element={<Events />} />
        <Route path="/EventCards" element={<EventCards />} />
        <Route path="/comparison" element={<Comparison />} />
        <Route path="/contribute" element={<Contribute />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/legal" element={<Legal />} />
        <Route path="/paid-free" element={<PaidFree />} />
        <Route path="/mathematics" element={<Mathematics />} />
        <Route path="/english" element={<English />} />
        <Route path="/general-aptitude" element={<GeneralAptitude />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/quiz-error" element={<QuizError />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/event-details/:eventId" element={<EventDetails />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

function App() {
  const [isLoaded, setIsLoaded] = useState(() => {
    return localStorage.getItem("zenovaLoaded") === "true";
  });

  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem("zenovaLoaded", "true");
    }
  }, [isLoaded]);

  return (
    <Router>
      {!isLoaded && <Loader onFinish={() => setIsLoaded(true)} />}
      {isLoaded && <AppContent />}
    </Router>
  );
}

export default App;
