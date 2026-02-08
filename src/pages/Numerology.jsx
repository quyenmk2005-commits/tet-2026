// src/pages/Numerology.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/App.css'; 

const Numerology = () => {
  const navigate = useNavigate();
  const [dob, setDob] = useState("");
  const [name, setName] = useState("");
  const [lifePath, setLifePath] = useState(null); // Số chủ đạo
  const [personalYear, setPersonalYear] = useState(null); // Năm cá nhân

  // --- DATA Ý NGHĨA SỐ CHỦ ĐẠO ---
  const LIFE_PATH_MEANINGS = {
    1: { title: "Số 1 - Người Tiên Phong", desc: "Bạn sinh ra để dẫn đầu. Điểm mạnh là sự độc lập, quyết đoán và sáng tạo. Tuy nhiên cần học cách lắng nghe và bớt cái tôi." },
    2: { title: "Số 2 - Người Hòa Giải", desc: "Bạn có trực giác tuyệt vời, yêu hòa bình và giỏi kết nối. Bạn sống tình cảm nhưng đôi khi quá nhạy cảm và dễ bị tổn thương." },
    3: { title: "Số 3 - Người Truyền Cảm Hứng", desc: "Bạn là linh hồn của các bữa tiệc, hoạt ngôn và có máu nghệ thuật. Bạn mang lại tiếng cười nhưng cần tập trung và kỷ luật hơn." },
    4: { title: "Số 4 - Người Xây Dựng", desc: "Bạn thực tế, tỉ mỉ và đáng tin cậy. Bạn thích sự ổn định và nguyên tắc. Lời khuyên là hãy linh hoạt và mở lòng hơn." },
    5: { title: "Số 5 - Người Tự Do", desc: "Bạn yêu sự tự do, ghét ràng buộc và thích khám phá cái mới. Cuộc đời bạn đầy màu sắc nhưng cần học cách kiên định." },
    6: { title: "Số 6 - Người Chăm Sóc", desc: "Bạn là người của gia đình, giàu tình thương và trách nhiệm. Bạn hay ôm đồm việc người khác. Hãy học cách yêu thương bản thân." },
    7: { title: "Số 7 - Người Tri Thức", desc: "Bạn thích chiêm nghiệm, học hỏi và tìm hiểu chân lý. Bạn có khả năng phân tích sâu sắc. Hãy chia sẻ kiến thức thay vì giữ riêng mình." },
    8: { title: "Số 8 - Người Điều Hành", desc: "Bạn mạnh mẽ, độc lập và có duyên với tiền bạc, quyền lực. Bài học của bạn là cân bằng giữa vật chất và tình cảm." },
    9: { title: "Số 9 - Người Cho Đi", desc: "Bạn bao dung, nhân hậu và có lý tưởng lớn. Bạn muốn cống hiến cho cộng đồng. Đừng để lòng tốt bị lợi dụng." },
    11: { title: "Số 11 - Bậc Thầy Trực Giác (Master)", desc: "Bạn có trực giác tâm linh cực mạnh. Sứ mệnh của bạn là truyền cảm hứng và khai sáng cho người khác." },
    22: { title: "Số 22 - Kiến Tạo Đại Tài (Master)", desc: "Bạn mang tầm nhìn của số 11 và thực tế của số 4. Bạn có khả năng biến những giấc mơ vĩ đại thành hiện thực." },
    33: { title: "Số 33 - Người Chữa Lành (Master)", desc: "Con số của lòng từ bi vô lượng. Bạn mang năng lượng chữa lành và hướng dẫn mọi người về mặt tinh thần." }
  };

  // --- DATA Ý NGHĨA NĂM CÁ NHÂN (1 đến 9) ---
  const PERSONAL_YEAR_MEANINGS = {
    1: { title: "Năm số 1: Khởi đầu mới", desc: "Năm gieo hạt. Hãy bắt đầu những dự án mới, thói quen mới. Đây là năm của sự độc lập và quyết đoán. Đừng ngại thay đổi!" },
    2: { title: "Năm số 2: Phát triển mối quan hệ", desc: "Năm chậm lại để lắng nghe. Tập trung vào kết nối, hợp tác và tình cảm. Không nên vội vàng, hãy kiên nhẫn." },
    3: { title: "Năm số 3: Mở rộng & Sáng tạo", desc: "Năm của học hỏi, du lịch và giao tiếp. Trí não bạn sẽ rất nhạy bén. Hãy cẩn thận lời nói và chi tiêu quá đà." },
    4: { title: "Năm số 4: Củng cố nội lực", desc: "Năm của công việc và kỷ luật. Hãy sắp xếp lại cuộc sống, chăm sóc sức khỏe và tài chính. Hơi vất vả nhưng nền tảng sẽ vững chắc." },
    5: { title: "Năm số 5: Thay đổi & Tự do", desc: "Năm của những bất ngờ! Có thể thay đổi công việc, nhà cửa hoặc có chuyến đi xa. Hãy đón nhận sự mới mẻ." },
    6: { title: "Năm số 6: Gia đình & Trách nhiệm", desc: "Năm hướng về tổ ấm. Bạn sẽ quan tâm nhiều đến người thân, sửa sang nhà cửa. Năm tốt để kết hôn hoặc sinh con." },
    7: { title: "Năm số 7: Chiêm nghiệm & Học tập", desc: "Năm 'khoảng lặng'. Hãy dành thời gian học kỹ năng mới hoặc thiền định. Tránh đầu tư lớn hay mạo hiểm trong năm nay." },
    8: { title: "Năm số 8: Thành tựu & Tài chính", desc: "Năm gặt hái! Cơ hội thăng tiến và kiếm tiền sẽ đến nếu bạn đã nỗ lực từ trước. Hãy nắm bắt cơ hội kinh doanh." },
    9: { title: "Năm số 9: Kết thúc & Buông bỏ", desc: "Năm dọn dẹp. Hãy loại bỏ những gì cũ kỹ (đồ đạc, mối quan hệ toxic) để chuẩn bị cho chu kỳ mới. Năm của sự cho đi và tha thứ." }
  };

  // --- HÀM TÍNH TỔNG CÁC CHỮ SỐ (Rút gọn) ---
  const sumDigits = (num) => {
    let sum = 0;
    while (num > 0 || sum > 9) {
      if (num === 0) {
        // Giữ số Master 11, 22, 33 (Chỉ áp dụng cho Số chủ đạo, Năm cá nhân thì thường rút gọn hết về 1-9)
        if (sum === 11 || sum === 22 || sum === 33) return sum;
        num = sum;
        sum = 0;
      }
      sum += num % 10;
      num = Math.floor(num / 10);
    }
    return sum;
  };

  // --- HÀM XỬ LÝ CHÍNH ---
  const handleCalculate = () => {
    if (!dob) { alert("Vui lòng nhập ngày sinh!"); return; }

    const dateObj = new Date(dob);
    const day = dateObj.getDate();
    const month = dateObj.getMonth() + 1;
    const year = dateObj.getFullYear();
    const currentYear = new Date().getFullYear(); // Lấy năm hiện tại (2026)

    // 1. TÍNH SỐ CHỦ ĐẠO (Life Path)
    // Cách tính: Rút gọn Ngày, Tháng, Năm riêng rồi cộng lại
    const d = sumDigits(day);
    const m = sumDigits(month);
    const y = sumDigits(year);
    let lp = sumDigits(d + m + y);
    setLifePath(LIFE_PATH_MEANINGS[lp] || LIFE_PATH_MEANINGS[1]);

    // 2. TÍNH NĂM CÁ NHÂN (Personal Year)
    // Công thức: Ngày sinh + Tháng sinh + Năm hiện tại (Thế giới)
    // Lưu ý: Năm cá nhân luôn rút gọn về 1-9 (Hiếm khi giữ 11/22/33)
    let pySum = d + m + sumDigits(currentYear);
    
    // Rút gọn pySum về 1 chữ số (1-9)
    while (pySum > 9) {
      let temp = 0;
      let n = pySum;
      while (n > 0) { temp += n % 10; n = Math.floor(n / 10); }
      pySum = temp;
    }
    
    setPersonalYear(PERSONAL_YEAR_MEANINGS[pySum]);
  };

  return (
    <div className="container numerology-bg">
      <button onClick={() => navigate('/')} className="btn-back">⬅ Menu</button>

      <h1 className="title neon-text">Thần Số Học 2026</h1>
      <p className="subtitle">Khám phá bản đồ cuộc đời bạn</p>

      <div className="input-group">
        <input 
          type="text" 
          placeholder="Tên của bạn..." 
          className="input-name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input 
          type="date" 
          className="input-name"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
          style={{ fontFamily: 'sans-serif' }}
        />
        <button onClick={handleCalculate} className="btn-submit">
          🔮 Xem Chi Tiết
        </button>
      </div>

      {/* KHU VỰC HIỂN THỊ KẾT QUẢ (Chia 2 cột nếu màn hình to) */}
      <div className="result-container">
        
        {/* KẾT QUẢ SỐ CHỦ ĐẠO */}
        {lifePath && (
          <div className="result-card card-lifepath">
            <div className="card-header">SỐ CHỦ ĐẠO</div>
            <div className="big-number">{Object.keys(LIFE_PATH_MEANINGS).find(k => LIFE_PATH_MEANINGS[k] === lifePath)}</div>
            <h3>{lifePath.title}</h3>
            <p>{lifePath.desc}</p>
          </div>
        )}

        {/* KẾT QUẢ NĂM CÁ NHÂN */}
        {personalYear && (
          <div className="result-card card-personal">
            <div className="card-header">NĂM CÁ NHÂN {new Date().getFullYear()}</div>
            <div className="big-number py-number">{Object.keys(PERSONAL_YEAR_MEANINGS).find(k => PERSONAL_YEAR_MEANINGS[k] === personalYear)}</div>
            <h3>{personalYear.title}</h3>
            <p>{personalYear.desc}</p>
          </div>
        )}

      </div>

      {/* CSS INLINE CHO GỌN */}
      <style>{`
        .numerology-bg {
          background: linear-gradient(135deg, #0f0c29, #302b63, #24243e);
          min-height: 100vh;
          color: white;
          padding-bottom: 50px;
        }
        .neon-text { text-shadow: 0 0 10px #00d2ff, 0 0 20px #00d2ff; color: #fff; }
        .subtitle { color: #ccc; margin-bottom: 20px; font-style: italic; }
        
        .btn-back {
          position: absolute; top: 20px; left: 20px;
          background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.5);
          color: #fff; padding: 8px 15px; border-radius: 20px; cursor: pointer;
        }
        .btn-submit {
          margin-top: 15px; background: #00d2ff; color: #000; width: 100%; 
          font-weight: bold; border: none; padding: 12px; border-radius: 8px; cursor: pointer;
          box-shadow: 0 0 15px rgba(0, 210, 255, 0.5);
        }
        
        .result-container {
          display: flex; flex-wrap: wrap; justify-content: center; gap: 20px;
          width: 100%; margin-top: 30px;
        }
        .result-card {
          background: rgba(255, 255, 255, 0.1); backdrop-filter: blur(10px);
          padding: 20px; border-radius: 15px; width: 100%; max-width: 350px;
          border: 1px solid rgba(255,255,255,0.2); animation: slideUp 0.5s ease;
        }
        .card-lifepath { border-top: 4px solid #00d2ff; }
        .card-personal { border-top: 4px solid #ff00de; }
        
        .card-header { font-size: 0.9rem; text-transform: uppercase; letter-spacing: 2px; opacity: 0.8; margin-bottom: 10px; }
        .big-number { font-size: 4rem; font-weight: bold; line-height: 1; margin-bottom: 10px; color: #00d2ff; }
        .py-number { color: #ff00de; }
        
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default Numerology;