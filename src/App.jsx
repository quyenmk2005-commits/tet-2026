// src/App.jsx
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

// Import các trang (Pages)
import HomePage from './pages/HomePage';
import Fortune from './pages/Fortune';
import LuckyMoney from './pages/LuckyMoney'; // Trang lắc xì (nếu bạn đã tạo)

function App() {
  return (
    <Router>
      <Routes>
        {/* Khi vào trang chủ (/) -> hiện HomePage */}
        <Route path="/" element={<HomePage />} />
        
        {/* Khi vào /gieo-que -> hiện Fortune */}
        <Route path="/gieo-que" element={<Fortune />} />
        
        {/* Khi vào /lac-xi -> hiện LuckyMoney */}
        <Route path="/lac-xi" element={<LuckyMoney />} />
      </Routes>
    </Router>
  );
}

export default App;