// src/App.jsx
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import FallingFlowers from './components/FallingFlowers';
import BackgroundMusic from './components/BackgroundMusic';

// Import các trang (Pages)
import HomePage from './pages/HomePage';
import Fortune from './pages/Fortune';
import LuckyMoney from './pages/LuckyMoney'; // Trang lắc xì (nếu bạn đã tạo)
import Numerology from './pages/Numerology';

function App() {
  return (
    <Router>
      <BackgroundMusic />

      
      

      <FallingFlowers />

      <Routes>
        {/* Khi vào trang chủ (/) -> hiện HomePage */}
        <Route path="/" element={<HomePage />} />
        
        {/* Khi vào /gieo-que -> hiện Fortune */}
        <Route path="/gieo-que" element={<Fortune />} />
        
        {/* Khi vào /lac-xi -> hiện LuckyMoney */}
        <Route path="/lac-xi" element={<LuckyMoney />} />

        {/* Khi vào /than-so-hoc -> hiện Numerology */}
        <Route path="/than-so-hoc" element={<Numerology />} />
      </Routes>
    </Router>
  );
}

export default App;