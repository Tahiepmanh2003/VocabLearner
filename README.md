# VocabLearner - Ứng Dụng Học Từ Vựng Thông Minh

![VocabLearner](https://img.shields.io/badge/VocabLearner-1.0.0-blue)
![License](https://img.shields.io/badge/License-MIT-green)

## 📚 Giới thiệu

**VocabLearner** là một ứng dụng web hiện đại và thân thiện để học và ghi nhớ từ vựng tiếng Anh và tiếng Trung (với phiên âm Pinyin). Ứng dụng được thiết kế đặc biệt cho các từ vựng liên quan đến **công nghệ** và **sản xuất**.

### Tính năng chính:

✅ **Nhập đoạn văn thông minh** - Hỗ trợ tiếng Anh và tiếng Trung (có phiên âm)
✅ **Trích xuất từ vựng tự động** - Hệ thống tự động phân tích và trích xuất từ vựng
✅ **Dịch nghĩa** - Tích hợp từ điển công nghệ và sản xuất
✅ **Flashcard tương tác** - Học từng từ qua thẻ lật 3D
✅ **Theo dõi tiến độ** - Thống kê chi tiết về tiến độ học tập
✅ **Quản lý từ vựng** - Sắp xếp, tìm kiếm, xóa từ
✅ **Giao diện đẹp** - Thiết kế hiện đại với gradient và animation
✅ **Lưu trữ cục bộ** - Dữ liệu lưu trữ trong trình duyệt (không cần server)

## 🚀 Cài đặt & Sử dụng

### Phương pháp 1: Mở trực tiếp (Đơn giản nhất)

1. Mở file `index.html` trong trình duyệt
2. Bắt đầu thêm đoạn văn
3. Ôn tập flashcard

### Phương pháp 2: Chạy với HTTP Server (Khuyến nghị)

Nếu bạn muốn chạy trên server cục bộ:

**Windows (PowerShell):**
```powershell
# Sử dụng Python (nếu cài đặt)
python -m http.server 8000

# Hoặc sử dụng Node.js
npx http-server -p 8000
```

**macOS/Linux:**
```bash
# Sử dụng Python
python3 -m http.server 8000

# Hoặc sử dụng Node.js
npx http-server -p 8000
```

Sau đó mở: **http://localhost:8000**

### Phương pháp 3: Chạy với Express Server

```bash
# Cài đặt Node.js dependencies (nếu có file package.json)
npm install

# Chạy server
npm start
```

## 📖 Hướng dẫn sử dụng

### 1️⃣ Thêm Đoạn Văn

- Vào tab **"Đoạn văn"**
- Chọn ngôn ngữ (Tiếng Anh hoặc Tiếng Trung)
- Nhập chủ đề (vd: "Công nghệ", "Sản xuất")
- Dán đoạn văn vào ô nhập
- Chọn mức độ khó
- Nhấn **"Thêm đoạn văn"**

**Ví dụ Tiếng Anh:**
```
Manufacturing is the process of transforming raw materials into finished goods. 
Modern manufacturing uses advanced technology and automation systems.
```

**Ví dụ Tiếng Trung:**
```
制造 (zhìzào) 是一个 (yī ge) 过程 (guòchéng)，用 (yòng) 高级 (gāojí) 技术 (jìshù) 
和 (hé) 自动化 (zìdònghuà) 系统 (xìtǒng)。
```

### 2️⃣ Xem & Quản lý Từ Vựng

- Vào tab **"Từ vựng"**
- Tìm kiếm, lọc theo ngôn ngữ, sắp xếp
- Xem chi tiết: nghĩa, phiên âm, chủ đề
- Xóa từ nếu cần

### 3️⃣ Ôn Tập Flashcard

- Vào tab **"Flashcard"**
- Thẻ sẽ hiển thị từ vựng (mặt trước)
- **Nhấp vào thẻ** để lật và xem nghĩa
- Chọn **"Đã biết"** nếu bạn thuộc từ
- Chọn **"Chưa biết"** để ôn lại
- Kiếm điểm cứ mỗi từ bạn thuộc

### 4️⃣ Xem Thống Kê

- Vào tab **"Thống kê"**
- Xem tổng số từ, số từ đã học, đang ôn tập
- Xem danh sách từ theo trạng thái
- Theo dõi tiến độ học tập

## 🎨 Giao Diện

### Màu sắc & Thiết kế

- **Gradient chính**: Tím xanh (#667eea → #764ba2)
- **Card lơ lửng**: Hiệu ứng hover với shadow
- **Badge**: Phân biệt rõ ràng ngôn ngữ
- **Flashcard 3D**: Lật mượt mà với perspective
- **Responsive**: Tương thích mobile, tablet, desktop

## 💾 Lưu Trữ Dữ Liệu

Tất cả dữ liệu được lưu trong **LocalStorage** của trình duyệt:
- Không cần database
- Dữ liệu an toàn trên máy của bạn
- Có thể xuất/nhập dữ liệu (sẽ thêm feature sau)

## 📋 Cấu Trúc File

```
weblearn/
├── index.html          # Giao diện chính
├── app.js              # Logic ứng dụng
├── README.md           # Hướng dẫn này
└── server.js           # Server Express (tùy chọn)
```

## 🔧 Tính năng Nâng cao

### Từ Điển Tích Hợp

Ứng dụng có từ điển sẵn cho các từ công nghệ phổ biến:

**Tiếng Anh:**
- technology, software, hardware, algorithm, database, server...
- manufacturing, machinery, equipment, assembly, quality, efficiency...

**Tiếng Trung (Pinyin):**
- 技术 (jìshù) - kỹ thuật
- 制造 (zhìzào) - sản xuất
- 设备 (shèbèi) - thiết bị
- ...

### Mức Độ Khó

- 🟢 **Dễ (Beginner)** - Từ cơ bản, phổ biến
- 🟡 **Trung bình (Intermediate)** - Từ chuyên môn
- 🔴 **Khó (Advanced)** - Từ chuyên sâu, hiếm

### Thống Kê & Điểm

- Tự động tính điểm khi học
- Theo dõi số lần ôn tập
- Tính streak (chuỗi học liên tục)
- Thống kê theo ngôn ngữ, chủ đề, mức độ

## 🎯 Mẹo Học Hiệu Quả

1. **Đoạn văn ngắn gọn** - Chọn đoạn 2-3 câu cho dễ nhớ
2. **Một chủ đề tại một lần** - Tập trung vào từ vựng liên quan
3. **Ôn tập thường xuyên** - Flashcard mỗi ngày để ghi nhớ
4. **Viết lại** - Tạo câu của riêng bạn từ các từ vựng mới
5. **Hạn chế** - Học max 10-15 từ/ngày để hiệu quả

## 🌍 Hỗ Trợ Ngôn Ngữ

- ✅ Tiếng Anh (English)
- ✅ Tiếng Trung Giản Thể (Simplified Chinese) + Pinyin
- ✅ Tiếng Việt (Giao diện)

## 🔐 Bảo Mật & Quyền Riêng Tư

- Không thu thập dữ liệu cá nhân
- Không có tracking hoặc analytics
- Dữ liệu 100% ở trên máy của bạn
- Có thể xóa tất cả dữ liệu bất kỳ lúc nào

## 📱 Tương Thích

- ✅ Chrome/Chromium (v90+)
- ✅ Firefox (v88+)
- ✅ Safari (v14+)
- ✅ Edge (v90+)
- ✅ Mobile browsers

## 🚧 Tính Năng Sắp Tới

- 📤 Xuất/Nhập dữ liệu (CSV, JSON)
- 🤖 AI dịch thuật tự động
- 📊 Biểu đồ tiến độ chi tiết
- 🔊 Phát âm tự động
- 🎯 Bài kiểm tra định kỳ
- ☁️ Đồng bộ cloud (tuỳ chọn)
- 🌙 Dark mode

## 💡 Tìm Lỗi & Đóng Góp

Nếu tìm thấy lỗi hoặc có đề nghị, vui lòng:
1. Kiểm tra console browser (F12)
2. Thử xóa localStorage: `localStorage.clear()`
3. Tải lại trang (Ctrl+Shift+R)

## 📄 Giấy Phép

MIT License - Tự do sử dụng, sửa đổi, phân phối

## 👨‍💻 Phát Triển

**Công Nghệ:**
- HTML5 + CSS3 + Vanilla JavaScript
- Tailwind CSS
- Font Awesome Icons
- LocalStorage API

**Không cần:**
- Database
- Backend server (tuỳ chọn)
- Framework nặng

## 📞 Liên Hệ & Hỗ Trợ

Vấn đề? Muốn cải thiện? Liên hệ tác giả!

---

**Chúc bạn học tập vui vẻ! 🎓**

*VocabLearner - Học từ vựng, dễ như chơi* ✨
