import React from 'react';
import '../styles/App.css'; 

const FallingFlowers = () => {
  // Tạo mảng 20 bông hoa
  const flowers = Array.from({ length: 20 });

  return (
    <div className="flower-container">
      {flowers.map((_, i) => {
        // Random vị trí và tốc độ cho tự nhiên
        const style = {
          left: `${Math.random() * 100}%`,
          animationDuration: `${Math.random() * 5 + 5}s`, // 5s đến 10s
          animationDelay: `${Math.random() * 5}s`,
          opacity: Math.random() * 0.5 + 0.3
        };
        return (
          <div key={i} className="flower" style={style}>
            {/* Bạn có thể đổi thành hình 🌸 hoặc 🌼 hoặc ảnh png */}
            🌸
          </div>
        );
      })}
    </div>
  );
};

export default FallingFlowers;