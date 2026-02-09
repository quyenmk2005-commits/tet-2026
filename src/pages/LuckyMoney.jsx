// src/pages/LuckyMoney.jsx
import React, { useState, useEffect, useRef } from 'react'; // <-- 1. Import thêm useRef, useEffect
import { useNavigate } from 'react-router-dom';
import '../styles/App.css';

// Import ảnh và nhạc
import lixiImage from '../assets/images/lixi.png'; 
import shakeSoundFile from '../assets/sounds/firework.mp3'; 

const LuckyMoney = () => {
  const navigate = useNavigate();
  const [openedId, setOpenedId] = useState(null);
  const [prizeContent, setPrizeContent] = useState("");

  // 2. Tạo biến tham chiếu để quản lý nhạc
  const audioRef = useRef(null);

  const PRIZES = [
    { text: "10K", rate: 30 },
    { text: "20K", rate: 10 },
    { text: "50K", rate: 5 },
    { text: "100K", rate: 1 }, 
    { text: "Lời chúc", rate: 40 },
    { text: "Tràng pháo tay", rate: 14 }
  ];

  // 3. THÊM ĐOẠN NÀY: Tự động tắt nhạc khi rời khỏi trang (Unmount)
  useEffect(() => {
    return () => {
      // Nếu nhạc đang chạy thì tắt ngay lập tức
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    };
  }, []);

  const getRandomPrize = () => {
    let totalRate = PRIZES.reduce((sum, item) => sum + item.rate, 0);
    let random = Math.random() * totalRate;
    let currentRate = 0;
    for (let item of PRIZES) {
      currentRate += item.rate;
      if (random < currentRate) return item.text;
    }
    return "May mắn";
  };

  const handlePickEnvelope = (id) => {
    if (openedId !== null) return;

    // --- SỬA LOGIC PHÁT NHẠC ---
    // Nếu đang có nhạc cũ thì tắt đi trước khi phát mới
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }

    // Tạo nhạc mới và lưu vào ref
    const audio = new Audio(shakeSoundFile);
    audio.volume = 0.5;
    audioRef.current = audio; // Lưu lại để tí nữa còn tắt
    audio.play().catch(()=>{});
    // ----------------------------

    const result = getRandomPrize();
    setPrizeContent(result);
    setOpenedId(id); 
  };

  const handleReset = () => {
    setOpenedId(null);
    setPrizeContent("");
  };

  return (
    <div className="container">
      <button 
        onClick={() => navigate('/')}
        style={{
        position: 'absolute', 
        top: '20px', 
        left: '20px',
        
        // Flexbox để icon và chữ thẳng hàng
        display: 'flex', 
        alignItems: 'center', 
        gap: '8px', // Khoảng cách giữa Icon và Chữ
        
        // Style giao diện (Hình viên thuốc)
        padding: '8px 16px',
        background: 'rgba(255, 255, 255, 0.15)', // Nền trong suốt nhẹ
        backdropFilter: 'blur(5px)', // Làm mờ nền phía sau (hiệu ứng kính)
        border: '1px solid rgba(255, 255, 255, 0.5)', 
        borderRadius: '30px', // Bo tròn mạnh để thành hình viên thuốc
        
        // Style chữ
        color: '#fff', 
        fontSize: '0.9rem',
        fontWeight: 'bold',
        cursor: 'pointer',
        zIndex: 10,
        transition: 'all 0.3s ease'
      }}
      // Thêm hiệu ứng hover đơn giản
      onMouseEnter={(e) => {
        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.3)';
        e.currentTarget.style.transform = 'translateY(-2px)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)';
        e.currentTarget.style.transform = 'translateY(0)';
      }}
    >
      {/* Icon ngôi nhà */}
      <i className="fi fi-ss-home" style={{fontSize: '1.1rem'}}></i>
      
      {/* Chữ Trang chủ */}
      <span>Trang chủ</span>
      </button>

      <h1 className="title" style={{color: '#FBC02D', fontSize: '2rem'}}>Hái Lộc Đầu Xuân</h1>
      
      <div style={{minHeight: '40px', color: '#fff', fontWeight: 'bold', fontSize: '1.2rem', marginBottom: '10px'}}>
        {openedId ? `Chúc mừng! Bạn nhận được: ${prizeContent}` : "Chọn 1 bao lì xì để mở nhé!"}
      </div>

      <div className="lucky-grid">
        {[1, 2, 3, 4, 5, 6].map((id) => (
          <div 
            key={id} 
            className={`lucky-item ${openedId === id ? 'opened' : ''}`}
            onClick={() => handlePickEnvelope(id)}
            style={{ opacity: (openedId && openedId !== id) ? 0.5 : 1 }}
          >
            <img src={lixiImage} alt="Lì xì" className="envelope-img" />
            <div className="prize-content">
              {prizeContent}
            </div>
          </div>
        ))}
      </div>

      {openedId && (
        <button 
          className="btn" 
          onClick={handleReset}
          style={{marginTop: '20px', background: '#FBC02D', color: '#D32F2F', padding: '10px 30px'}}
        >
          🔄 Chọn lại
        </button>
      )}
    </div>
  );
};

export default LuckyMoney;