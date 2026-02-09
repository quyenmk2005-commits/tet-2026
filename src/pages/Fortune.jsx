// src/pages/Fortune.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/App.css'; 
import { POEMS } from '../data/poems'; 
import ShakeJar from '../components/ShakeJar'; 
import ResultCard from '../components/ResultCard'; 
import shakeSoundFile from '../assets/sounds/shake.mp3'; 

function Fortune() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  
  // 1. THAY DATEPICKER BẰNG 3 STATE RIÊNG
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");

  const [isShaking, setIsShaking] = useState(false);
  const [result, setResult] = useState(null);

  // Tạo dữ liệu cho Dropdown
  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const months = Array.from({ length: 12 }, (_, i) => i + 1);
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 100 }, (_, i) => currentYear - i);

  const sanitizeName = (str) => {
    if (!str) return "";
    let cleanStr = str.toLowerCase();
    cleanStr = cleanStr.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    cleanStr = cleanStr.replace(/đ/g, "d").replace(/Đ/g, "d");
    cleanStr = cleanStr.trim();
    const words = cleanStr.split(" ").filter(w => w.length > 0);
    return words.length > 0 ? words[words.length - 1] : ""; 
  };

  const getFixedFortune = (userName, d, m, y) => {
    const cleanName = sanitizeName(userName);
    const curYear = new Date().getFullYear();
    
    // 2. TẠO CHUỖI NGÀY SINH CHUẨN (Thêm số 0 vào trước nếu < 10)
    // Ví dụ: ngày 1 -> "01", tháng 2 -> "02"
    const dd = String(d).padStart(2, '0');
    const mm = String(m).padStart(2, '0');
    const userDob = `${y}-${mm}-${dd}`;

    const seedString = `${cleanName}-${userDob}-${curYear}`;
    
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
    // 3. CHECK XEM ĐÃ CHỌN ĐỦ 3 Ô CHƯA
    if (!day || !month || !year) {
      alert("Thí chủ vui lòng chọn đầy đủ ngày tháng năm sinh!");
      return;
    }

    if (isShaking) return; 

    const audio = new Audio(shakeSoundFile);
    audio.volume = 0.5; 
    audio.play().catch((err) => {});

    setIsShaking(true);
    
    setTimeout(() => {
      setIsShaking(false);
      const index = getFixedFortune(name, day, month, year);
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
        
        {/* 4. GIAO DIỆN 3 Ô CHỌN (DROPDOWN) */}
        <div className="date-picker-group">
          <select value={day} onChange={e => setDay(e.target.value)} className="date-select" disabled={isShaking}>
            <option value="">Ngày</option>
            {days.map(d => <option key={d} value={d}>{d}</option>)}
          </select>

          <select value={month} onChange={e => setMonth(e.target.value)} className="date-select" disabled={isShaking}>
            <option value="">Tháng</option>
            {months.map(m => <option key={m} value={m}>{m}</option>)}
          </select>

          <select value={year} onChange={e => setYear(e.target.value)} className="date-select" disabled={isShaking}>
            <option value="">Năm</option>
            {years.map(y => <option key={y} value={y}>{y}</option>)}
          </select>
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