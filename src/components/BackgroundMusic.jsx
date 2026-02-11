// src/components/BackgroundMusic.jsx
import React, { useState, useRef, useEffect } from 'react';

// --- IMPORT NHẠC TRỰC TIẾP ---
// Nhớ đảm bảo bạn có file trong thư mục src/assets nhé
import song1 from '../assets/nhac-tet-1.mp3';
import song2 from '../assets/nhac-tet-2.mp3';
import song3 from '../assets/nhac-tet-3.mp3'; 

const BackgroundMusic = () => {
  // 1. CẤU TRÚC PLAYLIST MỚI (Gồm file và tên bài hát)
  // Bạn hãy sửa lại tên bài hát ("title") cho đúng với file nhạc của bạn nhé
  const playlist = [
    { src: song1, title: "Đi Về Nhà (Đen x JustaTee)" },
    { src: song2, title: "Một Năm Mới Bình An (SƠN TÙNG M-TP)" },
    { src: song3, title: "Tết Đong Đầy (KHOA x Kay Tran x Duck V)" },
  ];

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSongIndex, setCurrentSongIndex] = useState(0); 
  const audioRef = useRef(null);

  const playNextSong = () => {
    let nextIndex = currentSongIndex + 1;
    if (nextIndex >= playlist.length) nextIndex = 0;
    setCurrentSongIndex(nextIndex);
  };

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play().catch(err => console.log("Chờ tương tác..."));
    }
  }, [currentSongIndex, isPlaying]);

  const toggleMusic = () => {
    if (isPlaying) audioRef.current.pause();
    else audioRef.current.play();
    setIsPlaying(!isPlaying);
  };

  return (
    <div style={{
      position: 'fixed', 
      bottom: '20px', 
      left: '20px', 
      zIndex: 1000,
      display: 'flex', 
      alignItems: 'center', 
      gap: '15px', // Khoảng cách giữa các phần tử
      background: 'rgba(0, 0, 0, 0.6)', // Thêm nền đen mờ để chữ dễ đọc
      padding: '10px 15px',
      borderRadius: '50px', // Bo tròn thành hình viên thuốc
      backdropFilter: 'blur(5px)',
      border: '1px solid rgba(255, 215, 0, 0.3)'
    }}>
      
      {/* TRÌNH PHÁT NHẠC (ẨN) */}
      <audio 
        ref={audioRef} 
        src={playlist[currentSongIndex].src} // Lấy src từ object
        onEnded={playNextSong} 
      />

      {/* NÚT BẬT/TẮT */}
      <button 
        onClick={toggleMusic}
        style={{
          background: isPlaying ? '#2E7D32' : '#D32F2F', 
          color: 'white', border: '2px solid #FFD700', borderRadius: '50%',
          width: '45px', height: '45px', cursor: 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: '1.2rem', flexShrink: 0, // Không bị co lại
          animation: isPlaying ? 'spin 3s linear infinite' : 'none',
          boxShadow: '0 0 10px rgba(255, 215, 0, 0.5)'
        }}
      >
        {isPlaying ? '🎵' : '🔇'}
      </button>

      {/* HIỂN THỊ TÊN BÀI HÁT (Phần mới thêm) */}
      <div style={{ display: 'flex', flexDirection: 'column', minWidth: '120px' }}>
        <span style={{ fontSize: '0.7rem', color: '#ccc', textTransform: 'uppercase' }}>
          Đang phát:
        </span>
        
        {/* Tên bài hát chạy chữ (Marquee effect giả lập bằng CSS nếu cần) */}
        <span style={{ 
          color: '#FFD700', 
          fontWeight: 'bold', 
          fontSize: '0.9rem',
          whiteSpace: 'nowrap',
          maxWidth: '150px',
          overflow: 'hidden',
          textOverflow: 'ellipsis' // Hiện dấu ... nếu tên dài quá
        }}>
          {playlist[currentSongIndex].title}
        </span>
      </div>

      {/* NÚT NEXT */}
      <button 
        onClick={playNextSong}
        style={{
          background: 'transparent', 
          border: '1px solid rgba(255, 255, 255, 0.5)',
          borderRadius: '50%', width: '35px', height: '35px', 
          color: '#FFD700', cursor: 'pointer', 
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          transition: 'all 0.2s'
        }}
        title="Bài tiếp theo"
      >
        ⏭️
      </button>

      <style>{`@keyframes spin { 100% { transform: rotate(360deg); } }`}</style>
    </div>
  );
};

export default BackgroundMusic;