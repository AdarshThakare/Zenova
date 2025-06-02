import React, { useEffect, useState } from 'react';
import '../App.css';

const greetings = [
  "नमस्ते 🙏", "வணக்கம்", "নমস্কার", "నమస్కారం", "ನಮಸ್ಕಾರ", "HELLO"
];

const Loader = ({ onFinish }) => {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);
  const [textOpacity, setTextOpacity] = useState(0);

  useEffect(() => {
    const totalDuration = 8000; 
    const stepDuration = totalDuration / greetings.length;
    const fadeInDuration = stepDuration * 0.3;
    const holdDuration = stepDuration * 0.4;

    let current = 0;

    const interval = setInterval(() => {
      setIndex(current);
      setTextOpacity(1);

      setTimeout(() => {
        setTextOpacity(0);
      }, fadeInDuration + holdDuration);

      current++;
      if (current >= greetings.length) {
        clearInterval(interval);
        setTimeout(() => {
          setVisible(false);
          onFinish();
        }, 1000);
      }
    }, stepDuration);

    return () => clearInterval(interval);
  }, [onFinish]);

  if (!visible) return null;

  return (
    <div className="loader-container">
      <div className="loader-wrapper">
        <div
          className="loader"
          id="loaderText"
          style={{ opacity: textOpacity }}
        >
          {greetings[index] || ''}
        </div>
        <div className="loader-line"></div>
      </div>
    </div>
  );
};

export default Loader;