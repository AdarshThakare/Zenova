import React, { useState, useEffect } from 'react'
import '../Style/PaidFree.css'
import { useSearchParams } from 'react-router-dom'
import video from '../assets/video.png'

function PaidFree() {
  const [searchParams] = useSearchParams()
  const [activeTab, setActiveTab] = useState('Paid')

  useEffect(() => {
    const tab = searchParams.get('tab')
    if (tab && ['Paid', 'Free', 'Registretion'].includes(tab)) {
      setActiveTab(tab)
    }
  }, [searchParams])

  const handleTabClick = (tab) => {
    setActiveTab(tab)
  }

  return (
    <section className="legal-section">
      <div className="legal-container">
        <h2 className="legal-section-title">Terms & Conditions</h2>

        <div className="legal-nav">
          <button
            className={`nav-btn ${activeTab === 'Paid' ? 'active' : ''}`}
            onClick={() => handleTabClick('Paid')}
          >
            <i className="fas fa-wallet"></i>
            <span>Paid Session</span>
            <div className="hover-effect"></div>
          </button>
          <button
            className={`nav-btn ${activeTab === 'Free' ? 'active' : ''}`}
            onClick={() => handleTabClick('Free')}
          >
            <i className="fas fa-gift"></i>
            <span>Free Session</span>
            <div className="hover-effect"></div>
          </button>
          <button
            className={`nav-btn ${activeTab === 'Registretion' ? 'active' : ''}`}
            onClick={() => handleTabClick('Registretion')}
          >
            <i className="fas fa-user-edit icon"></i>
            <span>Registretion</span>
            <div className="hover-effect"></div>
          </button>
        </div>

        <div className="legal-content">
          <div className="legal-content">
            <div id="Paid" className={`content-item ${activeTab === 'Paid' ? 'active' : ''}`}>
              <div className="content-header">
                <i className="fas fa-wallet icon"></i>
                <h3>Paid Session Terms</h3>
              </div>
              <div className="content-body">
                <p>Last updated: 19th February 2025</p>
                <div className="scroll-content">
                  <h4>1. Session Booking & Payment</h4>
                  <p>
                    • Users must pre-book sessions through the website. <br />
                    • Full payment is required before confirming the booking. <br />
                    • Payment is non-refundable, except in cases of technical issues on our end.
                  </p>
                </div>
                <div className="scroll-content">
                  <h4>2. Session Duration & Extra Time</h4>
                  <p>
                    • The booked session will start at the scheduled time. <br />
                    • If a user wants to extend the session, they must pay ₹5 per extra minute. <br />
                    • If the mentor is unavailable for extra time, the extension request may be denied.
                  </p>
                </div>
                <div className="scroll-content">
                  <h4>3. Rescheduling & Cancellations</h4>
                  <p>
                    • Users can reschedule a session at least 24 hours in advance (subject to availability). <br />
                    • Cancellations are not refundable, but rescheduling is allowed once per booking. <br />
                    • If the mentor cancels, users will get a full refund or a free reschedule.
                  </p>
                </div>
                <div className="scroll-content">
                  <h4>4. Code of Conduct</h4>
                  <p>
                    • Users must maintain professional behavior during the session. <br />
                    • Any form of abuse, harassment, or inappropriate behavior will result in an immediate session termination without a refund. <br />
                    • Recording the session without permission is strictly prohibited.
                  </p>
                </div>
                <div className="scroll-content">
                  <h4>5. Technical Issues</h4>
                  <p>
                    • Users are responsible for having a stable internet connection and necessary software. <br />
                    • If a session is interrupted due to technical issues on the user's side, no extra time or refund will be given. <br />
                    • If the mentor faces technical difficulties, extra time or a reschedule will be provided.
                  </p>
                </div>
                <div className="scroll-content">
                  <h4>6. Refund Policy</h4>
                  <p>
                    • Refunds are only applicable if the mentor cancels the session or there is a major system failure. <br />
                    • No refunds for no-shows or last-minute cancellations.
                  </p>
                </div>
                <div className="scroll-content">
                  <h4>7. Privacy & Data Protection</h4>
                  <p>
                    • User data will not be shared with third parties. <br />
                    • Payment information is processed securely through Whatsapp.
                  </p>
                </div>
              </div>
            </div>

            <div id="Free" className={`content-item ${activeTab === 'Free' ? 'active' : ''}`}>
              <div className="content-header">
                <i className="fas fa-gift icon"></i>
                <h3>Free Session Terms</h3>
              </div>
              <div className="content-body">
                <p>Effective date: 19th February 2025</p>
                <div className="scroll-content">
                  <h4>1. Eligibility</h4>
                  <p>
                    • Available only to users who register for the NSAT exam using our{' '}
                    <a href="https://www.newtonschool.co/newton-school-of-technology-nst/apply-referral/?utm_source=referral&utm_medium=MADARA&utm_campaign=btech-computer-science-portal-referral">
                      referral link.
                    </a>
                    <br />
                    • Valid for new users only (one free session per user).
                  </p>
                </div>
                <div className="scroll-content">
                  <h4>2. Restrictions</h4>
                  <p>
                    • Non-transferable (only the registered user can use it). <br />
                    • Cannot be exchanged for cash or combined with other offers.
                  </p>
                </div>
                <div className="scroll-content">
                  <h4>3. Session Duration & Extra Time</h4>
                  <p>
                    • The booked session will start at the scheduled time. <br />
                    • If a user wants to extend the session, they must pay ₹5 per extra minute. <br />
                    • If the mentor is unavailable for extra time, the extension request may be denied.
                  </p>
                </div>
                <div className="scroll-content">
                  <h4>4. Rescheduling & Cancellations</h4>
                  <p>
                    • Users can reschedule a session at least 24 hours in advance (subject to availability). <br />
                    • If the mentor cancels, users will get a free reschedule.
                  </p>
                </div>
                <div className="scroll-content">
                  <h4>5. Code of Conduct</h4>
                  <p>
                    • Users must maintain professional behavior during the session. <br />
                    • Any form of abuse, harassment, or inappropriate behavior will result in an immediate session termination without a refund. <br />
                    • Recording the session without permission is strictly prohibited.
                  </p>
                </div>
                <div className="scroll-content">
                  <h4>6. Technical Issues</h4>
                  <p>
                    • Users are responsible for having a stable internet connection and necessary software. <br />
                    • If a session is interrupted due to technical issues on the user's side, no extra time or reschedule will be given. <br />
                    • If the mentor faces technical difficulties, extra time or a reschedule will be provided.
                  </p>
                </div>
                <div className="scroll-content">
                  <h4>6. Reschedule Policy</h4>
                  <p>
                    • Reschedule are only applicable if the mentor cancels the session or there is a major system failure. <br />
                    • No reschedule for no-shows or last-minute cancellations.
                  </p>
                </div>
              </div>
            </div>

            <div id="Registretion" className={`content-item ${activeTab === 'Registretion' ? 'active' : ''}`}>
              <div className="content-header">
                <i className="fas fa-user-edit icon"></i>
                <h3>Registretion Guide</h3>
              </div>
              <div className="content-body">
                <p>Last updated: 28th February 2025</p>
                <h3>How to Register for the Exam & Claim Your Free Mentor Session!</h3>
                <div className="video-thumbnail">
                  <img src={video} alt="Video Thumbnail" />
                </div>
                <div className="scroll-content">
                  <h4>🚨 Important: You must record your entire registration process without editing. If you don't submit a complete video proof, you won't be eligible for a free mentor session.</h4>
                  <p>
                    ✅ Step 1: Start Recording (Mobile/Desktop)<br />
                    • Begin screen recording before visiting the website.<br />
                    • Make sure your entire registration process is recorded without cuts.<br />
                    <br />
                    ✅ Step 2: Register for the Exam <br /><br />
                    1️⃣ Go to <a href="https://zenova.one/">Zenova.one.</a> <br />
                    2️⃣ Click on the 🔔 Notification Bell (top right corner). <br />
                    3️⃣ Select "Register Now" to proceed. <br />
                    4️⃣ You'll be redirected to the NSAT Exam Registration Portal. <br />
                    5️⃣ Fill in your name, email, phone number, and other required details. <br />
                    6️⃣ Complete the payment and submit the registration. <br />
                    7️⃣ Keep recording until you receive the confirmation. <br />
                  </p>
                  <h4>🚨 If you have already taken the exam before and this is your second time, you must register for a new account (with new phone number & email).</h4>
                  <p>
                    ✅ Step 3: Claim Your Free Mentor Session <br />
                    <br />
                    1️⃣ Go to Zenova.one and click on "Book Session". <br />
                    2️⃣ Select "Free Session" and fill in your details. <br />
                    3️⃣ You will be redirected to your email. <br />
                    4️⃣ Attach your unedited registration video as proof and send the email.<br />
                    <br />
                    <b>🚨 Note: If your video is edited, incomplete, or missing, your free session request will be rejected. </b><br />
                    <br />
                    ✅ Done! Once verified, you'll receive a confirmation email with your mentor session details. <br />
                  </p>
                  <h4>For any queries, contact us at <a href="mailto:connect.zenova@gmail.com">connect.zenova@gmail.com</a></h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PaidFree