// src/components/ResultCard.jsx
import React, { useRef } from 'react';
import html2canvas from 'html2canvas';

const ResultCard = ({ data, userName, onClose }) => {
  const cardRef = useRef(null); // Tạo ref để "nhắm" vào cái thẻ cần chụp

  const handleDownload = async () => {
    if (!cardRef.current) return;

    try {
      // Chụp component thành canvas
      const canvas = await html2canvas(cardRef.current, {
        scale: 2, // Tăng độ nét (2x)
        backgroundColor: null, // Giữ màu nền trong suốt nếu cần
        useCORS: true // Cho phép tải ảnh từ nguồn ngoài (nếu có)
      });

      // Tạo link tải ảo và tự click
      const image = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.href = image;
      link.download = `Que-Xam-2026-${userName}.png`;
      link.click();
    } catch (err) {
      console.error("Lỗi xuất ảnh:", err);
      alert("Lỗi khi tạo ảnh. Bạn hãy chụp màn hình thủ công nhé!");
    }
  };

  if (!data) return null;

  return (
    <div className="result-overlay">
      <div className="result-content">
        
        {/* === PHẦN SẼ ĐƯỢC CHỤP ẢNH (Bắt đầu từ đây) === */}
        <div className="card-wrapper" ref={cardRef}>
          <div className="card-header">
            <span>QUẺ XĂM 2026</span>
          </div>
          
          <div className="card-body">
            <div className="user-label">Tín chủ: {userName}</div>
            <h2 className="card-type">{data.type}</h2>
            
            <div className="card-poem">
              {data.poem.split('\n').map((line, index) => (
                <p key={index}>{line}</p>
              ))}
            </div>
            
            <div className="card-meaning">
              <strong>Lời bàn:</strong> {data.meaning}
            </div>
          </div>

          <div className="card-footer">
            Gieo quẻ đầu năm - Code by You
          </div>
        </div>
        {/* === KẾT THÚC PHẦN CHỤP ẢNH === */}

        <div className="btn-group">
          <button className="btn btn-download" onClick={handleDownload}>
            📸 Lưu Ảnh
          </button>
          <button className="btn btn-close" onClick={onClose}>
            Gieo lại
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResultCard;