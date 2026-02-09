// src/components/TetDecor.jsx
import React from 'react';
import '../styles/App.css'; 

const TetDecor = () => {
  return (
    <div className="tet-decor-container">
      {/* Cụm lồng đèn bên Trái */}
      <div className="lantern-box left-1">
        <div className="string"></div>
        <div className="lantern">🏮</div>
      </div>
      <div className="lantern-box left-2">
        <div className="string"></div>
        <div className="lantern">🏮</div>
      </div>

      {/* Cụm lồng đèn bên Phải */}
      <div className="lantern-box right-1">
        <div className="string"></div>
        <div className="lantern">🏮</div>
      </div>
      <div className="lantern-box right-2">
        <div className="string"></div>
        <div className="lantern">🏮</div>
      </div>
    </div>
  );
};

export default TetDecor;