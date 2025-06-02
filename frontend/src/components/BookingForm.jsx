import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import "../Style/BookingForm.css";

const BookingForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    mobileNumber: "",
    registrationDate: "",
    preferredDate: "",
    preferredTime: "",
    duration: "",
    callPurpose: "",
    termsAgreed: false,
    videoProofConfirmed: false,
  });

  const [errors, setErrors] = useState({});

  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  useEffect(() => {
    const today = new Date();
    const maxDate = new Date();
    maxDate.setDate(today.getDate() + 4);

    const preferredDateInput = document.getElementById("preferredDate");
    if (preferredDateInput) {
      preferredDateInput.min = formatDate(today);
      preferredDateInput.max = formatDate(maxDate);
    }
  }, []);

  const validateForm = () => {
    const newErrors = {};

    if (
      !formData.name.trim() ||
      !formData.mobileNumber.trim() ||
      !formData.registrationDate ||
      !formData.preferredDate ||
      !formData.preferredTime ||
      !formData.duration ||
      !formData.callPurpose.trim() ||
      !formData.termsAgreed ||
      !formData.videoProofConfirmed
    ) {
      toast.error("Please fill in all required details");
      return false;
    }

    if (!/^[0-9]{10}$/.test(formData.mobileNumber)) {
      toast.error("Please enter a valid 10-digit mobile number");
      return false;
    }

    return true;
  };

  const redirectToEmail = (data) => {
    const email = "session.zenova@gmail.com";
    const subject = `Free Session Booking Request - ${data.name}`;
    const body = `Dear Zenova Team,

I hope you are doing well.

I would like to request a free session booking. Below are my details:


📌 PERSONAL DETAILS:  

1️⃣ Full Name: ${data.name}

2️⃣ Mobile Number: ${data.mobileNumber}

3️⃣ NSAT Registration Date using our Referral Link: ${data.registrationDate}

📌 SESSION PREFERENCES:    
    
4️⃣ Preferred Session Date: ${data.preferredDate}

5️⃣ Preferred Session Time: ${data.preferredTime}

6️⃣ Duration of Session: ${data.duration}

7️⃣ Purpose of the Session: ${data.callPurpose}


Additionally, I confirm that the attached video proof is original and unaltered.

Please let me know if any further details are required.

Looking forward to your confirmation.

Best Regards,
${data.name}`;

    const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      toast.success("Form submitted successfully! Redirecting to email...", {
        autoClose: 2000,
        onClose: () => redirectToEmail(formData),
      });
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
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
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <form id="bookingForm" onSubmit={handleSubmit} noValidate>
          <div className="form-header">
            <h2>Book Your Free Session</h2>
            <p>Fill in the details to schedule your consultation</p>
          </div>

          <div className="form-group">
            <label htmlFor="name" className="required">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="John Doe"
            />
          </div>

          <div className="form-group">
            <label htmlFor="mobileNumber" className="required">
              Mobile Number
            </label>
            <input
              type="tel"
              id="mobileNumber"
              name="mobileNumber"
              value={formData.mobileNumber}
              onChange={handleChange}
              pattern="[0-9]{10}"
              required
              placeholder="9876543210"
            />
          </div>

          <div className="form-group">
            <label htmlFor="registrationDate" className="required">
              When did you register with our NSAT referral link
            </label>
            <input
              type="date"
              id="registrationDate"
              name="registrationDate"
              value={formData.registrationDate}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="preferredDate" className="required">
              Preferred Date
            </label>
            <input
              type="date"
              id="preferredDate"
              name="preferredDate"
              value={formData.preferredDate}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="preferredTime" className="required">
              Session Time
            </label>
            <select
              id="preferredTime"
              name="preferredTime"
              value={formData.preferredTime}
              onChange={handleChange}
              required
            >
              <option value="">Select Time</option>
              <option value="5:30 PM">5:30 PM</option>
              <option value="6:00 PM">6:00 PM</option>
              <option value="6:30 PM">6:30 PM</option>
              <option value="7:00 PM">7:00 PM</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="duration" className="required">
              Duration
            </label>
            <select
              id="duration"
              name="duration"
              value={formData.duration}
              onChange={handleChange}
              required
            >
              <option value="">Select Duration</option>
              <option value="15 minutes">15 Minutes</option>
              <option value="30 minutes">30 Minutes</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="callPurpose" className="required">
              Purpose of Call
            </label>
            <textarea
              id="callPurpose"
              name="callPurpose"
              value={formData.callPurpose}
              onChange={handleChange}
              rows="4"
              required
              placeholder="Briefly describe the purpose of this session..."
            />
          </div>

          <div className="terms-group">
            <input
              type="checkbox"
              id="terms"
              name="termsAgreed"
              checked={formData.termsAgreed}
              onChange={handleChange}
              required
            />
            <label htmlFor="terms" className="required">
              I agree to the{" "}
              <Link to="/paid-free?tab=Free" target="_blank">
                terms & conditions
              </Link>
            </label>
          </div>

          <div className="terms-group">
            <input
              type="checkbox"
              id="videoProof"
              name="videoProofConfirmed"
              checked={formData.videoProofConfirmed}
              onChange={handleChange}
              required
            />
            <label htmlFor="videoProof" className="required">
              I confirm that I will attach video proof of NSAT registration via
              Zenova referral link.
            </label>
          </div>

          <button type="submit">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ marginRight: "8px" }}
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            Book Free Session
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;
