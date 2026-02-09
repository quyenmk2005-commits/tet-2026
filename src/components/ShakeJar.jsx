// src/components/ShakeJar.jsx
import React from 'react';
// Nếu bạn chưa có ảnh thật, dùng tạm link online này, sau này thay bằng: 
// import jarImg from '../assets/images/jar.png'; 
const jarImg = "https://img.icons8.com/?size=100&id=UFho1x7DLRPa&format=png&color=000000"; 

const ShakeJar = ({ isShaking, onShake, disabled }) => {
  return (
    <div className={`jar-container ${disabled ? 'disabled' : ''}`} onClick={onShake}>
      <img 
        src={jarImg} 
        alt="Hũ xăm" 
        className={`jar-img ${isShaking ? 'shake-anim' : ''}`} 
      />
      
      <div className="guide-text">
        {isShaking 
          ? <span style={{color: '#FFD700', fontWeight: 'bold'}}>Đang lắc...</span> 
          : "(Nhấn vào hũ để gieo quẻ)"
        }
      </div>
    </div>
  );
};

export default ShakeJar;