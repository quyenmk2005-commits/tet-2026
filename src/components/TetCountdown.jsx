// src/components/TetCountdown.jsx
import React, { useState, useEffect } from 'react';

const TetCountdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0, hours: 0, minutes: 0, seconds: 0
  });

  useEffect(() => {
    // Ngày Mùng 1 Tết Bính Ngọ 2026
    const tetDate = new Date('2026-02-17T00:00:00').getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = tetDate - now;

      if (distance < 0) {
        clearInterval(timer);
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{
      display: 'flex', gap: '15px', justifyContent: 'center',
      marginTop: '20px', marginBottom: '30px', color: '#FFD700'
    }}>
      <TimeBox val={timeLeft.days} label="Ngày" />
      <TimeBox val={timeLeft.hours} label="Giờ" />
      <TimeBox val={timeLeft.minutes} label="Phút" />
      <TimeBox val={timeLeft.seconds} label="Giây" />
    </div>
  );
};

const TimeBox = ({ val, label }) => (
  <div style={{
    display: 'flex', flexDirection: 'column', alignItems: 'center',
    background: 'rgba(0,0,0,0.3)', padding: '10px', borderRadius: '8px', border: '1px solid #D32F2F', minWidth: '60px'
  }}>
    <span style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{val}</span>
    <span style={{ fontSize: '0.8rem', opacity: 0.8 }}>{label}</span>
  </div>
);

export default TetCountdown;    