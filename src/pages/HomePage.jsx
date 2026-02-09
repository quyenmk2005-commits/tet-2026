// src/pages/HomePage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/App.css';
import TetDecor from '../components/TetDecor'; // 1. Import Component trang trí
import FallingFlowers from '../components/FallingFlowers';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="container" style={{
      background: 'linear-gradient(135deg, #98282d 0%, #eb0808 100%)',
      minHeight: '100vh',
      padding: '40px 20px',
      position: 'relative', // 2. Bắt buộc có để TetDecor neo vào
      overflow: 'hidden'    // 2. Để không bị thanh cuộn ngang
    }}>
      
      {/* 3. Đặt hiệu ứng trang trí ở đây */}
      <FallingFlowers />
      <TetDecor />

      {/* 4. Bọc toàn bộ nội dung trong div này để nổi lên trên cành hoa */}
      <div style={{ position: 'relative', zIndex: 30 }}> 

        {/* Header với họa tiết Tết */}
        <div style={{
          textAlign: 'center',
          marginBottom: '40px',
        }}>
          <div style={{
            fontSize: '1.8rem',
            marginBottom: '10px'
          }}>🎊🧧🎋</div>
          
          <h1 style={{
            fontSize: '2.5rem',
            color: '#FFD700',
            textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
            marginBottom: '10px',
            fontWeight: 'bold',
            fontFamily: "'Playfair Display', serif" // Thêm font cho sang trọng
          }}>
            Tết Ất Tỵ 2025
          </h1>
          
          <p style={{
            color: 'white',
            fontSize: '1.1rem',
            textShadow: '1px 1px 2px rgba(0,0,0,0.3)'
          }}>
            Chúc mừng năm mới - Vạn sự như ý
          </p>
        </div>

        {/* Game Cards */}
        <div style={{
          maxWidth: '500px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          gap: '20px'
        }}>
          
          {/* Card Gieo Quẻ */}
          <div 
            onClick={() => navigate('/gieo-que')}
            style={{
              background: 'linear-gradient(135deg, #FF6B6B 0%, #C92A2A 100%)',
              borderRadius: '20px',
              padding: '20px 25px',
              boxShadow: '0 8px 20px rgba(0,0,0,0.2)',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              border: '3px solid #FFD700',
              position: 'relative',
              overflow: 'hidden',
              display: 'flex',
              alignItems: 'center',
              gap: '15px'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.boxShadow = '0 12px 30px rgba(0,0,0,0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.2)';
            }}
          >
            <div style={{fontSize: '2.5rem', flexShrink: 0}}>🔮</div>
            <div>
              <h2 style={{
                color: 'white',
                fontSize: '1.3rem',
                marginBottom: '5px',
                fontWeight: 'bold',
                margin: 0
              }}>
                Gieo Quẻ Đầu Năm
              </h2>
              <p style={{
                color: 'rgba(255,255,255,0.9)',
                fontSize: '0.85rem',
                margin: 0
              }}>
                Khám phá vận mệnh năm mới
              </p>
            </div>
          </div>

          {/* Card Lắc Xì */}
          <div 
            onClick={() => navigate('/lac-xi')}
            style={{
              background: 'linear-gradient(135deg, #FFD93D 0%, #FF6B35 100%)',
              borderRadius: '20px',
              padding: '20px 25px',
              boxShadow: '0 8px 20px rgba(0,0,0,0.2)',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              border: '3px solid #D32F2F',
              position: 'relative',
              overflow: 'hidden',
              display: 'flex',
              alignItems: 'center',
              gap: '15px'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.boxShadow = '0 12px 30px rgba(0,0,0,0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.2)';
            }}
          >
            <div style={{fontSize: '2.5rem', flexShrink: 0}}>🧧</div>
            <div>
              <h2 style={{
                color: '#D32F2F',
                fontSize: '1.3rem',
                marginBottom: '5px',
                fontWeight: 'bold',
                margin: 0
              }}>
                Lắc Xì Lì Xì
              </h2>
              <p style={{
                color: '#8B0000',
                fontSize: '0.85rem',
                margin: 0
              }}>
                Nhận lộc đầu xuân may mắn
              </p>
            </div>
          </div>

          {/* Card Thần Số Học */}
          <div 
            onClick={() => navigate('/than-so-hoc')}
            style={{
              background: 'linear-gradient(135deg, #4A90E2 0%, #1a2980 100%)',
              borderRadius: '20px',
              padding: '20px 25px',
              boxShadow: '0 8px 20px rgba(0,0,0,0.2)',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              border: '3px solid #FFD700',
              position: 'relative',
              overflow: 'hidden',
              display: 'flex',
              alignItems: 'center',
              gap: '15px'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.boxShadow = '0 12px 30px rgba(0,0,0,0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.2)';
            }}
          >
            <div style={{fontSize: '2.5rem', flexShrink: 0}}>🔢</div>
            <div>
              <h2 style={{
                color: 'white',
                fontSize: '1.3rem',
                marginBottom: '5px',
                fontWeight: 'bold',
                margin: 0
              }}>
                Thần Số Học
              </h2>
              <p style={{
                color: 'rgba(255,255,255,0.9)',
                fontSize: '0.85rem',
                margin: 0
              }}>
                Khám phá con số định mệnh
              </p>
            </div>
          </div>
        </div>

        {/* Họa tiết trang trí */}
        <div style={{
          textAlign: 'center',
          marginTop: '50px',
          fontSize: '1.5rem',
          opacity: 0.3
        }}>
          🎆 🎇 ✨
        </div>

        {/* Footer */}
        <div style={{
          textAlign: 'center',
          marginTop: '30px',
          color: 'white',
          fontSize: '0.9rem',
          opacity: 0.8
        }}>
          Made with ❤️ for Tết 2026
        </div>

      </div> {/* Kết thúc thẻ div bọc nội dung */}
    </div>
  );
};

export default HomePage;