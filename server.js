// ============================================
// VocabLearner - Express Server (Optional)
// ============================================
// Dùng khi bạn muốn chạy trên server
// npm install express
// node server.js

const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.static(path.join(__dirname)));
app.use(express.json());

// Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// API endpoints (tuỳ chọn)
app.get('/api/status', (req, res) => {
    res.json({
        status: 'ok',
        app: 'VocabLearner',
        version: '1.0.0'
    });
});

// 404 Handler
app.use((req, res) => {
    res.status(404).send('404 - Không tìm thấy');
});

// Start server
app.listen(PORT, () => {
    console.log(`
    ╔════════════════════════════════════════╗
    ║        VocabLearner Server              ║
    ║        Đã khởi động thành công!        ║
    ║                                        ║
    ║   🌐 http://localhost:${PORT}           ║
    ║   📚 Truy cập tại trên để bắt đầu      ║
    ║                                        ║
    ║   Nhấn Ctrl+C để dừng server           ║
    ╚════════════════════════════════════════╝
    `);
});

module.exports = app;
