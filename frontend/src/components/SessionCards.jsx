import React, { useState } from 'react';
import '../Style/SessionCards.css'
import { Link } from 'react-router-dom';
import BookingForm from './BookingForm';

const SessionCard = ({ title, isPopular, terms, durations, buttonLabel, type, onBookClick }) => {
  const [showAllTerms, setShowAllTerms] = useState(false);

  const toggleTerms = () => {
    setShowAllTerms(!showAllTerms);
  };

  return (
    <div className={`session-card ${type === 'free' ? 'free' : 'paid'}`}>
      <div className="session-header">
        <h2 className="session-title">{title}</h2>
        {isPopular && <span className="popular-badge">Popular</span>}
      </div>
      <div className="terms-section">
        <h3 className="terms-title">Terms & Conditions</h3>
        <div className="terms-wrapper">
          <ul className={`terms-list ${showAllTerms ? 'expanded' : ''}`}>
            {terms.map((term, index) => (
              <li
                key={index}
                className={`term-item ${index >= 2 ? 'additional-term' : ''}`}
                style={{
                  '--delay': `${index * 0.1}s`
                }}
              >
                {term}
              </li>
            ))}
          </ul>
        </div>
        {terms.length > 2 && (
          <button
            onClick={toggleTerms}
            className={`toggle-terms-btn ${showAllTerms ? 'expanded' : ''}`}
          >
            {showAllTerms ? 'Read less...' : 'Read more...'}
          </button>
        )}
      </div>
      <div className="duration-list">
        {durations.map((session, index) => (
          <div key={index} className="duration-item">
            <span className="duration-label">
              Duration<br />
              <span className="duration-value">{session.duration}</span>
            </span>
            <span className="duration-label" style={{ textAlign: 'right' }}>
              Price<br />
              <span className="duration-value">{session.price}</span>
            </span>
          </div>
        ))}
      </div>
      <button
        className={`book-btn ${type === 'free' ? 'free' : 'paid'}`}
        onClick={onBookClick}
      >
        {buttonLabel}
      </button>
    </div>
  );
};

export default function App() {
  const [showBookingForm, setShowBookingForm] = useState(false);

  const handleBookSession = (type) => {
    if (type === 'paid') {
      const message = 'I want to book a paid session.';
      const whatsappUrl = `https://wa.me/9588172862?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');
    } else {
      setShowBookingForm(true);
    }
  };

  return (
    <div className="app-container">
      {showBookingForm && <BookingForm onClose={() => setShowBookingForm(false)} />}
      <SessionCard
        title="Free Session"
        isPopular={true}
        type="free"
        terms={[
          <span>
            To avail of a free session, register for the NSAT exam using our{' '}
            <a
              href="https://www.newtonschool.co/newton-school-of-technology-nst/apply-referral?utm_source=referral&utm_medium=MADARA&utm_campaign=btech-computer-science-portal-referral"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: '#4f46e5',
                textDecoration: 'underline',
                fontWeight: '500'
              }}
            >
              referral link
            </a>.
          </span>,
          'After registration, submit proof of your enrollment.',
          'One free session per user; extras are paid.',
          'Rescheduling is allowed only if requested at least 24 hours before the session.',
          <span style={{ display: 'inline', fontSize: '0.875rem', color: '#4b5563', lineHeight: '1.7' }}>
            For more details and a step-by-step booking process, visit{' '}
            <Link
              to="/paid-free?tab=Free"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline',
                textDecoration: 'underline',
                color: '#4f46e5',
                fontWeight: '500',
                transition: 'color 0.2s ease',
                cursor: 'pointer'
              }}
            >
              Zenova-Free.details
            </Link>
          </span>
        ]}
        durations={[
          { duration: '15 minutes', price: 'Free' },
          { duration: '30 minutes', price: 'Free' },
        ]}
        buttonLabel="Book Free"
        onBookClick={() => handleBookSession('free')}
      />
      <SessionCard
        title="Paid Session"
        isPopular={false}
        type="paid"
        terms={[
          'Complete the payment to confirm your session slot.',
          'Rescheduling is allowed only if requested at least 24 hours in advance.',
          'Payments are non-refundable if you miss your session.',
          'Cancellations do not guarantee a refund.',
          'If you fail to attend, rescheduling may not be available for the same payment.',
          <span style={{ display: 'inline', fontSize: '0.875rem', color: '#4b5563', lineHeight: '1.7' }}>
            For more details and a step-by-step booking process, visit{' '}
            <Link
              to="/paid-free?tab=Paid"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline',
                textDecoration: 'underline',
                color: '#4f46e5',
                fontWeight: '500',
                transition: 'color 0.2s ease',
                cursor: 'pointer'
              }}
            >
              Zenova-Paid.details
            </Link>
          </span>
        ]}
        durations={[
          { duration: '15 minutes', price: '₹69' },
          { duration: '30 minutes', price: '₹121' },
        ]}
        buttonLabel="Book Paid"
        onBookClick={() => handleBookSession('paid')}
      />
    </div>
  );
}