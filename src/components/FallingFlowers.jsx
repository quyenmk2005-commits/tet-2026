// src/components/FallingFlowers.jsx
import React from 'react';
import '../styles/App.css'; 

const FallingFlowers = () => {
  const flowers = Array.from({ length: 25 }); // 25 bông
  const types = ['🌼', '🌸', '🏵️']; // Mai, Đào, Đồng tiền

  return (
    <div className="flower-container" style={{ zIndex: 10 }}>
      {flowers.map((_, i) => {
        const style = {
          left: `${Math.random() * 100}%`,
          animationDuration: `${Math.random() * 5 + 5}s`,
          animationDelay: `${Math.random() * 5}s`,
          opacity: Math.random() * 0.7 + 0.3,
          fontSize: `${Math.random() * 10 + 15}px` // Kích thước ngẫu nhiên
        };
        const randomType = types[Math.floor(Math.random() * types.length)];
        return (
          <div key={i} className="flower" style={style}>
            {randomType}
          </div>
        );
      })}
    </div>
  );
};
export default FallingFlowers;