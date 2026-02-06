// src/pages/Fortune.jsx
import { useState, useEffect, useRef } from 'react'; // <-- Import thêm useRef, useEffect
import { useNavigate } from 'react-router-dom';

import '../styles/App.css'; 
import { POEMS } from '../data/poems'; 
import ShakeJar from '../components/ShakeJar'; 
import ResultCard from '../components/ResultCard'; 
import shakeSoundFile from '../assets/sounds/shake.mp3'; 

function Fortune() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [isShaking, setIsShaking] = useState(false);
  const [result, setResult] = useState(null);

  // 1. Tạo ref nhạc
  const audioRef = useRef(null);

  // 2. Tự động tắt nhạc khi rời trang
  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    };
  }, []);

  const sanitizeName = (str) => {
    if (!str) return "";
    let cleanStr = str.toLowerCase();
    cleanStr = cleanStr.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    cleanStr = cleanStr.replace(/đ/g, "d").replace(/Đ/g, "d");
    cleanStr = cleanStr.trim();
    const words = cleanStr.split(" ").filter(w => w.length > 0);
    return words.length > 0 ? words[words.length - 1] : ""; 
  };

  const getFixedFortune = (userName, userDob) => {
    const cleanName = sanitizeName(userName);
    const currentYear = new Date().getFullYear();
    const seedString = `${cleanName}-${userDob}-${currentYear}`;
    
    let hash = 0;
    for (let i = 0; i < seedString.length; i++) {
      const char = seedString.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash; 
    }
    return Math.abs(hash) % POEMS.length;
  };

  const handleShake = () => {
    if (!name.trim()) {
      alert("Thí chủ vui lòng xưng danh!");
      return;
    }
    if (!dob) {
      alert("Thí chủ vui lòng cho biết ngày sinh!");
      return;
    }

    if (isShaking) return; 

    // --- SỬA LOGIC NHẠC ---
    if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
    }
    const audio = new Audio(shakeSoundFile);
    audio.volume = 0.5; 
    audioRef.current = audio; // Lưu vào ref
    audio.play().catch((err) => {
      console.log("Lỗi nhạc:", err);
    });
    // ----------------------

    setIsShaking(true);
    
    setTimeout(() => {
      setIsShaking(false);
      const index = getFixedFortune(name, dob);
      setResult(POEMS[index]);
    }, 1500); 
  };

  const handleClose = () => {
    setResult(null);
  };

  return (
    <div className="container">
      <button 
        onClick={() => navigate('/')}
        style={{
          position: 'absolute', top: 20, left: 20, 
          background: 'rgba(0,0,0,0.3)', border: '1px solid #FFD700', 
          color: '#FFD700', borderRadius: '20px', padding: '5px 15px', cursor: 'pointer', zIndex: 10
        }}
      >
        ⬅ Trang chủ
      </button>

      <h1 className="title">Gieo Quẻ Đầu Năm {new Date().getFullYear()}</h1>

      <div className="input-group">
        <div style={{marginBottom: '15px'}}>
          <input 
            type="text" 
            placeholder="Họ và tên thí chủ..." 
            className="input-name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            disabled={isShaking || result} 
          />
        </div>
        
        <div>
          <input 
            type="date" 
            className="input-name"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            disabled={isShaking || result}
            style={{ fontFamily: 'sans-serif', color: '#333' }}
          />
        </div>
        <p style={{fontSize: '12px', color: '#eee', marginTop: '8px', fontStyle: 'italic', opacity: 0.8}}>
          *Vui lòng nhập đúng Tên và Ngày sinh.
        </p>
      </div>

      <ShakeJar 
        isShaking={isShaking} 
        onShake={handleShake} 
        disabled={!!result} 
      />

      {result && (
        <ResultCard 
          data={result} 
          userName={name} 
          onClose={handleClose} 
        />
      )}
    </div>
  );
}

export default Fortune;