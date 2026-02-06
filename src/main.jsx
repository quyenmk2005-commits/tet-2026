// src/main.jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// File index.css này Vite tạo sẵn, bạn có thể xóa dòng này 
// nếu đã copy toàn bộ CSS vào src/styles/App.css như mình hướng dẫn.
// import './index.css' 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)