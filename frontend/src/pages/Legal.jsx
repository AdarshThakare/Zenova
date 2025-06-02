import React, { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import '../Style/Legal.css'

function Legal() {
  const [searchParams] = useSearchParams()
  const [activeTab, setActiveTab] = useState('terms')

  useEffect(() => {
    const policy = searchParams.get('policy')
    if (policy && ['terms', 'privacy', 'refund'].includes(policy)) {
      setActiveTab(policy)
    }
  }, [searchParams])

  const handleTabClick = (tab) => {
    setActiveTab(tab)
  }

  return (
    <section className="legal-section">
      <div className="legal-container">
        <h2 className="legal-section-title">Legal Center</h2>

        <div className="legal-nav">
          <button
            className={`nav-btn ${activeTab === 'terms' ? 'active' : ''}`}
            onClick={() => handleTabClick('terms')}
            data-target="terms"
          >
            <i className="fas fa-file-contract"></i>
            <span>Terms</span>
            <div className="hover-effect"></div>
          </button>
          <button
            className={`nav-btn ${activeTab === 'privacy' ? 'active' : ''}`}
            onClick={() => handleTabClick('privacy')}
            data-target="privacy"
          >
            <i className="fas fa-shield-alt"></i>
            <span>Privacy</span>
            <div className="hover-effect"></div>
          </button>
          <button
            className={`nav-btn ${activeTab === 'refund' ? 'active' : ''}`}
            onClick={() => handleTabClick('refund')}
            data-target="refund"
          >
            <i className="fas fa-undo-alt"></i>
            <span>Refunds</span>
            <div className="hover-effect"></div>
          </button>
        </div>

        <div className="legal-content">
          <div id="terms" className={`content-item ${activeTab === 'terms' ? 'active' : ''}`}>
            <div className="content-header">
              <i className="fas fa-file-contract icon"></i>
              <h3>Terms & Conditions</h3>
            </div>
            <div className="content-body">
              <p>Last updated: 19th February 2025</p>
              <div className="scroll-content">
                <h4>1. Use of Services</h4>
                <p>
                  • Zenova provides mentor booking services, practice questions for NSAT, and interview preparation to help users enhance their learning experience.
                  <br />
                  • Any attempt to duplicate, modify, or distribute content without authorization is a violation of these terms.
                  <br />
                  • You agree not to misuse our services, engage in fraudulent activities, or violate any applicable laws.
                </p>
              </div>
              <div className="scroll-content">
                <h4>2. Booking and Payment</h4>
                <p>
                  • Mentor bookings are considered confirmed only after payment has been successfully processed.
                  <br />
                  • Prices are subject to change without prior notice.
                  <br />
                  • Payment must be made using the method specified on our website.
                  <br />
                  • Users must verify their booking details before making a payment as modifications may not be possible after confirmation.
                </p>
              </div>
              <div className="scroll-content">
                <h4>3. Cancellation and Refunds</h4>
                <p>
                  • Cancellations are subject to our Refund Policy.
                  <br />
                  • No-shows or last-minute cancellations may not be eligible for a refund.
                  <br />
                  • Refunds for mentor sessions will only be provided under specific conditions, as outlined in our Refund Policy.
                </p>
              </div>
              <div className="scroll-content">
                <h4>4. Limitation of Liability</h4>
                <p>
                  • Zenova is not responsible for the accuracy or effectiveness of mentor advice or practice content.
                  <br />
                  • We do not guarantee exam or interview success and are not liable for outcomes resulting from our services.
                  <br />
                  • Users are responsible for implementing their own learning strategies and making independent career decisions.
                </p>
              </div>
            </div>
          </div>

          <div id="privacy" className={`content-item ${activeTab === 'privacy' ? 'active' : ''}`}>
            <div className="content-header">
              <i className="fas fa-shield-alt icon"></i>
              <h3>Privacy Policy</h3>
            </div>
            <div className="content-body">
              <p>Effective date: 19th February 2025</p>
              <div className="scroll-content">
                <h4>1. Information We Collect</h4>
                <p>
                  • Personal details like name, email, and contact number during registration.
                  <br />
                  • Usage data to improve our services.
                </p>
              </div>
              <div className="scroll-content">
                <h4>2. How We Use Your Information</h4>
                <p>
                  • To provide and improve our services.
                  <br />
                  • To process transactions securely and prevent fraud.
                  <br />
                  • To analyze user behavior and enhance user experience.
                  <br />
                  • To comply with legal and regulatory requirements.
                </p>
              </div>
              <div className="scroll-content">
                <h4>3. Data Protection</h4>
                <p>
                  • We do not sell or share your personal information with third parties.
                  <br />
                  • We implement security measures to protect your data.
                  <br />
                  • Users have the right to request modification, or deletion of their personal data.
                </p>
              </div>
              <div className="scroll-content">
                <h4>4. Your Rights</h4>
                <p>
                  • You can request modification, or deletion of your personal data.
                </p>
              </div>
            </div>
          </div>

          <div id="refund" className={`content-item ${activeTab === 'refund' ? 'active' : ''}`}>
            <div className="content-header">
              <i className="fas fa-undo-alt icon"></i>
              <h3>Refund Policy</h3>
            </div>
            <div className="content-body">
              <p>Last revised: 19th February 2025</p>
              <div className="scroll-content">
                <h4>1. Eligibility for Refunds</h4>
                <p>
                  • Refund requests for mentor sessions must be made at least 24 hours before the scheduled mentor session.
                  <br />
                  • Refunds are only applicable if the mentor cancels the session or there is a major system failure.
                  <br />
                  • If a mentor cancels the session, you are eligible for a full refund or rescheduling.
                  <br />
                  • No refunds for no-shows or last-minute cancellations.
                </p>
              </div>
              <div className="scroll-content">
                <h4>2. Refund Process</h4>
                <p>
                  • Approved refunds will be processed within 48 business hours.
                  <br />
                  • Refunds will be credited to the original payment method.
                  <br />
                  • Users must provide accurate details to ensure successful refund processing.
                </p>
              </div>
              <div className="scroll-content">
                <h4>3. Dispute Resolution</h4>
                <p>
                  • If users have concerns regarding refunds, they must contact Zenova support within 7 days of the session date.
                  <br />
                  • Zenova will review the case and provide a fair resolution.
                </p>
              </div>
              <div className="scroll-content">
                <h4>For any queries, contact us at <a href="mailto:connect.zenova@gmail.com">connect.zenova@gmail.com</a></h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Legal 