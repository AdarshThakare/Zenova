import React, { useEffect, useRef, useState } from 'react';
import '../App.css';

const Snackbar = ({ onClose, show: showProp }) => {
  const [internalShow, setInternalShow] = useState(true);
  const [isClosing, setIsClosing] = useState(false);
  const timeoutRef = useRef(null);

  const isControlled = typeof showProp === 'boolean';
  const show = isControlled ? showProp : internalShow;

  useEffect(() => {
    if (!show) return;
    startAutoClose();
    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, [show]);

  const startAutoClose = () => {
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      handleClose();
    }, 13000);
  };

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      if (onClose) {
        onClose();
      } else {
        setInternalShow(false);
      }
      setIsClosing(false);
    }, 300);
  };

  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current);
  };

  const handleMouseLeave = () => {
    if (show) startAutoClose();
  };

  if (!show) return null;

  return (
    <div
      className={`snackbar ${show ? 'active' : ''} ${isClosing ? 'closing' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="snackbar-content">
        <div className="icon-wrapper">
          <i className="fas fa-check-circle"></i>
        </div>
        <div className="text-content">
          <h3>Discount on Your Exam Fees!!</h3>
          <p>
            Hey everyone! If you're planning to register for NSAT, I
            have a special referral link that gives you a discount on
            the exam fees!💰
          </p>
          <a
            href="https://www.newtonschool.co/newton-school-of-technology-nst/apply-referral/?utm_source=referral&utm_medium=MADARA&utm_campaign=btech-computer-science-portal-referral"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="register">Register Now</button>
          </a>
        </div>
        <button className="close-btn" onClick={handleClose}>
          <i className="fas fa-times"></i>
        </button>
      </div>
    </div>
  );
};

export default Snackbar;