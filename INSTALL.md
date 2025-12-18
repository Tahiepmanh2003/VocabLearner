# 🎯 HƯỚNG DẪN CÀI ĐẶT VÀ CHẠY VocabLearner

## 📋 Danh Sách File Hoàn Chỉnh

✅ **Tất cả các file đã được tạo thành công!**

```
weblearn/
│
├── 🎨 GIAO DIỆN (Frontend)
│   ├── index.html ...................... Giao diện chính (25 KB)
│   └── app.js .......................... Logic ứng dụng (35 KB)
│
├── ⚙️ CẤU HÌNH (Configuration)
│   ├── package.json .................... Cấu hình npm
│   └── server.js ....................... Server Express (tùy chọn)
│
├── 🚀 LAUNCHER (Khởi động nhanh)
│   ├── START.bat ....................... Cho Windows ⭐
│   └── start.sh ........................ Cho macOS/Linux ⭐
│
└── 📚 TÀI LIỆU (Documentation)
    ├── README.md ....................... Hướng dẫn chính ⭐
    ├── SUMMARY.md ...................... Tóm tắt dự án ⭐
    ├── GETTING_STARTED.md .............. Khởi động nhanh ⭐
    ├── FEATURES.md ..................... Chi tiết tính năng
    ├── SAMPLE_DATA.html ................ Dữ liệu mẫu để test
    └── INSTALL.md ...................... File này
```

**Total: 11 files**

---

## 🎯 CÁC CÁCH CHẠY ỨNG DỤNG

### **CÁCH 1: MỞ TRỰC TIẾP (Đơn giản nhất - Khuyến nghị)** ⭐⭐⭐

```
1. Mở File Explorer
2. Tìm folder: f:\Manh\web learn memorize\weblearn
3. Double-click vào: index.html
4. Ứng dụng sẽ mở trong trình duyệt mặc định
5. Bắt đầu sử dụng ngay!
```

**Ưu điểm:**
- ✅ Không cần cài đặt gì
- ✅ Mở trong 1 giây
- ✅ Hoàn toàn offline

---

### **CÁCH 2: CHẠY SCRIPT TỰ ĐỘNG (Tự động khởi động server)**

#### **Trên Windows:**

```
1. Double-click vào: START.bat
2. Chọn cách chạy (1, 2, hoặc 3)
3. Trình duyệt sẽ mở tự động
```

**Lựa chọn trong script:**
- `1` → Express Server (port 3000)
- `2` → HTTP Server (port 8000)
- `3` → Mở index.html trực tiếp

#### **Trên macOS/Linux:**

```bash
# Mở Terminal trong folder weblearn
chmod +x start.sh          # Cấp quyền chạy
./start.sh                 # Chạy script
```

---

### **CÁCH 3: PYTHON SERVER (Nếu cài đặt Python)** ⭐

#### **Windows (PowerShell):**

```powershell
# Mở PowerShell, navigate tới folder
cd f:\Manh\web learn memorize\weblearn

# Chạy Python server
python -m http.server 8000

# Hoặc Python 3
python3 -m http.server 8000
```

#### **macOS/Linux:**

```bash
cd path/to/weblearn
python3 -m http.server 8000
```

**Sau đó:**
- Mở trình duyệt
- Vào: **http://localhost:8000**

---

### **CÁCH 4: NODE.JS + EXPRESS (Nếu cài đặt Node.js)** ⭐

#### **Bước 1: Cài đặt Dependencies (Lần đầu)**

```bash
cd f:\Manh\web learn memorize\weblearn
npm install
```

#### **Bước 2: Chạy Server**

```bash
npm start
```

**Output:**
```
╔════════════════════════════════════════╗
║        VocabLearner Server              ║
║        Đã khởi động thành công!        ║
║                                        ║
║   🌐 http://localhost:3000             ║
║   📚 Truy cập tại trên để bắt đầu      ║
║                                        ║
║   Nhấn Ctrl+C để dừng server           ║
╚════════════════════════════════════════╝
```

#### **Bước 3: Mở Trình Duyệt**

- URL: **http://localhost:3000**

---

### **CÁCH 5: HTTP-SERVER (Nếu cài đặt Node.js)**

```bash
cd f:\Manh\web learn memorize\weblearn

# Cài đặt http-server (lần đầu)
npm install -g http-server

# Chạy server
http-server -p 8000
```

**Mở:** http://localhost:8000

---

## 🔧 KIỂM TRA ĐIỀU KIỆN HỆ THỐNG

### **Kiểm Tra Python**

```powershell
# Windows
python --version

# hoặc
python3 --version
```

**Kết quả:**
```
Python 3.9.0  ✅ (hoặc phiên bản cao hơn)
```

### **Kiểm Tra Node.js**

```powershell
node --version
npm --version
```

**Kết quả:**
```
v16.0.0  ✅ (hoặc phiên bản cao hơn)
8.0.0    ✅
```

### **Nếu Không Có:**

**Cài đặt Python:**
- Website: https://python.org
- Download: **Python 3.9+**
- Nhớ check: "Add Python to PATH"

**Cài đặt Node.js:**
- Website: https://nodejs.org
- Download: **LTS version**
- Cài đặt npm tự động

---

## ⚡ KHỞI ĐỘNG NHANH (Recommended)

### **Step 1: Mở Ứng Dụng**

```
1. Tìm folder: f:\Manh\web learn memorize\weblearn
2. Double-click: index.html
3. Ứng dụng tải trong 1-2 giây
```

### **Step 2: Thêm Đoạn Văn**

```
1. Vào tab: "Đoạn văn"
2. Chọn ngôn ngữ: English hoặc 中文
3. Nhập topic: "Technology"
4. Dán đoạn văn tiếng Anh:

   "Modern manufacturing uses advanced robotics 
   and automation systems. Software algorithms 
   control machinery and ensure quality."

5. Chọn mức độ: Trung bình
6. Nhấn: "Thêm đoạn văn"
```

### **Step 3: Ôn Tập**

```
1. Vào tab: "Flashcard"
2. Xem từ vựng được trích xuất
3. Nhấp vào thẻ để xem dịch nghĩa
4. Chọn "Đã biết" hoặc "Chưa biết"
5. Kiếm điểm!
```

### **Step 4: Theo Dõi Tiến Độ**

```
1. Vào tab: "Thống kê"
2. Xem tiến độ học tập
3. Xem danh sách từ đã học
```

---

## 🧪 KIỂM TRA VỚI DỮ LIỆU MẪU

### **Cách 1: Dùng Console (F12)**

```javascript
// 1. Mở F12 (hoặc Ctrl+Shift+I)
// 2. Vào tab: Console
// 3. Copy & paste code từ SAMPLE_DATA.html
// 4. Nhấn Enter
// 5. Refresh trang
```

### **Cách 2: Mở SAMPLE_DATA.html**

```
1. Double-click: SAMPLE_DATA.html
2. Mở Console (F12)
3. Chạy code trong <script>
4. Quay lại index.html
5. Refresh để xem dữ liệu mẫu
```

---

## 📊 KIỂM TRA GIAO DIỆN

### **Các Tab Chính:**

- ✅ **Trang chủ** - Thống kê nhanh
- ✅ **Đoạn văn** - Thêm & quản lý
- ✅ **Từ vựng** - Liệt kê & tìm kiếm
- ✅ **Flashcard** - Ôn tập thẻ
- ✅ **Thống kê** - Theo dõi tiến độ

### **Kiểm Tra Responsive:**

```
1. Mở DevTools (F12)
2. Click: Toggle device toolbar (Ctrl+Shift+M)
3. Test các kích thước:
   - Mobile (375x667)
   - Tablet (768x1024)
   - Desktop (1920x1080)
```

---

## ⚙️ CẤU HÌNH (Tuỳ chọn)

### **Thay Đổi Port (Express Server)**

**File: server.js**

```javascript
const PORT = process.env.PORT || 3000;  // Đổi 3000 thành port khác
```

### **Thay Đổi Port (Python)**

```bash
python -m http.server 9000  # Thay 8000 thành port khác
```

---

## 🐛 GIẢI QUYẾT SỰ CỐ

### **Vấn đề: Trang không tải**

**Giải pháp:**
```
1. Refresh trang (F5 hoặc Ctrl+R)
2. Clear cache (Ctrl+Shift+Delete)
3. Thử trình duyệt khác
4. Kiểm tra console (F12) có lỗi không
```

### **Vấn đề: Dữ liệu bị mất**

**Giải pháp:**
```
1. Kiểm tra xem dữ liệu còn không (tab Thống kê)
2. Xóa cache/cookies trong trình duyệt
3. Nhập lại dữ liệu từ SAMPLE_DATA.html
```

### **Vấn đề: Server không khởi động**

**Giải pháp:**
```
1. Kiểm tra port có bị chiếm không:
   netstat -ano | findstr :8000 (Windows)
   lsof -i :8000 (macOS/Linux)

2. Thay port khác:
   python -m http.server 9000

3. Đóng các ứng dụng khác đang dùng port đó
```

### **Vấn đề: Lỗi "Cannot find module express"**

**Giải pháp:**
```bash
npm install express
# hoặc
npm install
```

---

## 🌐 KIỂM TRA TRÌNH DUYỆT

### **Trình Duyệt Hỗ Trợ:**

| Trình Duyệt | Phiên Bản | Hỗ Trợ |
|-------------|-----------|--------|
| Chrome | 90+ | ✅ Full |
| Firefox | 88+ | ✅ Full |
| Safari | 14+ | ✅ Full |
| Edge | 90+ | ✅ Full |
| Opera | 76+ | ✅ Full |

### **Tải Trình Duyệt:**

- Chrome: https://google.com/chrome
- Firefox: https://firefox.com
- Safari: Có sẵn trên macOS
- Edge: https://microsoft.com/edge

---

## 📱 CHẠY TRÊN ĐIỆN THOẠI

### **Trên Mạng Cục Bộ:**

```
1. Chạy Python server trên máy tính:
   python -m http.server 8000

2. Tìm IP của máy tính:
   - Windows: ipconfig (tìm IPv4)
   - macOS: ifconfig (tìm inet)
   
   Ví dụ: 192.168.1.100

3. Trên điện thoại:
   - Kết nối cùng WiFi
   - Mở trình duyệt
   - Vào: http://192.168.1.100:8000
```

---

## 💾 BACKUP DỮ LIỆU

### **Xuất Dữ Liệu:**

```javascript
// F12 → Console
// Sao chép kết quả
JSON.stringify(localStorage.getItem('vocabLearnerData'))
```

### **Nhập Dữ Liệu:**

```javascript
// F12 → Console
// Dán dữ liệu đã sao chép
localStorage.setItem('vocabLearnerData', '...dữ liệu...')
```

---

## 📚 TÀI LIỆU THÊM

| Tài Liệu | Nội Dung |
|---------|---------|
| **README.md** | Hướng dẫn tổng quát |
| **SUMMARY.md** | Tóm tắt dự án |
| **GETTING_STARTED.md** | Khởi động nhanh |
| **FEATURES.md** | Chi tiết tính năng |

---

## ✅ CHECKLIST HOÀN THÀNH

- [x] Tạo giao diện (index.html)
- [x] Viết logic ứng dụng (app.js)
- [x] Cấu hình npm (package.json)
- [x] Tạo server Express (server.js)
- [x] Script launcher Windows (START.bat)
- [x] Script launcher macOS/Linux (start.sh)
- [x] Tài liệu README
- [x] Tài liệu khởi động nhanh
- [x] Tài liệu chi tiết tính năng
- [x] Dữ liệu mẫu
- [x] Tóm tắt dự án

---

## 🎓 BƯỚC TIẾP THEO

1. **Mở ứng dụng** - Double-click index.html
2. **Thêm đoạn văn** - Bắt đầu với 1-2 đoạn
3. **Ôn tập** - Sử dụng flashcard
4. **Theo dõi** - Xem tiến độ trong thống kê
5. **Lặp lại** - Ôn lại mỗi ngày

---

## 💡 CẬP NHẬT & CẢI THIỆN

**Tính năng sắp tới (v1.1):**
- [ ] Xuất/nhập dữ liệu
- [ ] Phát âm tự động
- [ ] Dark mode
- [ ] Đồng bộ cloud

---

## 🎉 HOÀN THÀNH!

**Bạn đã có một ứng dụng học từ vựng hoàn chỉnh!**

### **Hãy bắt đầu ngay:**

```
1. Mở: index.html
2. Thêm: đoạn văn tiếng Anh/Trung
3. Ôn: flashcard
4. Theo dõi: tiến độ
5. Học: mỗi ngày!
```

---

**Chúc bạn học tập hiệu quả! 🚀✨**

*VocabLearner v1.0.0 - Hoàn toàn miễn phí & offline*
