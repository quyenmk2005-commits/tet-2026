// src/pages/HomePage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/App.css'; // Tận dụng lại CSS cũ

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h1 className="title">Tết 2026</h1>
      <p style={{marginBottom: '30px'}}>Chọn một trò chơi để bắt đầu:</p>
      
      <div style={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
        
        {/* Nút vào Gieo Quẻ */}
        <button 
          className="btn" 
          style={{padding: '20px', fontSize: '1.2rem', background: '#D32F2F', color: 'white'}}
          onClick={() => navigate('/gieo-que')}
        >
          🔮 Gieo Quẻ Đầu Năm
        </button>

        {/* Nút vào Lắc Xì */}
        <button 
          className="btn" 
          style={{padding: '20px', fontSize: '1.2rem', background: '#FBC02D', color: '#D32F2F'}}
          onClick={() => navigate('/lac-xi')}
        >
          🧧 Lắc Xì Lì Xì
        </button>

      </div>
      
      <div style={{marginTop: '50px', fontSize: '12px', opacity: 0.7}}>
        Make with ❤️ by You
      </div>
    </div>
  );
};

export default HomePage;