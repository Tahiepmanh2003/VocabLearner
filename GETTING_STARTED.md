# 🚀 Hướng Dẫn Khởi Động VocabLearner

## ⚡ Bắt Đầu Nhanh (2 phút)

### Bước 1: Mở Ứng Dụng

**Cách đơn giản nhất:**
1. Tìm file `index.html` trong folder `weblearn`
2. **Double-click** để mở trong trình duyệt
3. Bắt đầu sử dụng ngay!

---

## 🌐 Chạy trên Web Server (Tùy Chọn)

Nếu bạn muốn chạy trên server cục bộ:

### Phương Pháp 1: Python (Nếu đã cài đặt)

**Windows (PowerShell):**
```powershell
cd f:\Manh\web learn memorize\weblearn
python -m http.server 8000
```

**macOS/Linux:**
```bash
cd path/to/weblearn
python3 -m http.server 8000
```

Sau đó mở trình duyệt: **http://localhost:8000**

### Phương Pháp 2: Node.js & Express

**Yêu cầu:** Cài đặt Node.js từ https://nodejs.org

```powershell
cd f:\Manh\web learn memorize\weblearn

# Lần đầu: cài đặt dependencies
npm install

# Chạy server
npm start
```

Mở: **http://localhost:3000**

### Phương Pháp 3: HTTP Server (Gợi ý)

```powershell
cd f:\Manh\web learn memorize\weblearn

# Cài đặt (lần đầu)
npm install -g http-server

# Chạy
http-server -p 8000
```

---

## 📝 Ví Dụ Thực Hành

### Đoạn Văn Tiếng Anh (Example 1)

**Topic:** Technology & Manufacturing

**Passage:**
```
Modern manufacturing facilities utilize advanced robotics and 
artificial intelligence to improve efficiency and reduce production 
costs. The integration of IoT devices enables real-time monitoring 
and optimization of manufacturing processes. Software algorithms 
control machinery and ensure quality assurance throughout the production line.
```

**Result:** 20+ từ vựng sẽ được trích xuất tự động

---

### Đoạn Văn Tiếng Trung (Example 2)

**Topic:** 工业自动化 (Tự động hoá công nghiệp)

**Passage:**
```
现代 (xiàndài) 制造 (zhìzào) 工厂 (gōngchǎng) 使用 (shǐyòng) 高级 (gāojí) 
机器人 (jīqìrén) 和 (hé) 人工智能 (réngōng zhìnéng) 来改进 (lái gǎijìn) 
效率 (xiàolǜ) 和 (hé) 降低 (jiàngdī) 成本 (chéngběn)。
```

**Result:** Từ vựng + Pinyin + Dịch nghĩa

---

## 🎮 Hướng Dẫn Tương Tác

### Tab Trang Chủ (Home)

Hiển thị:
- 📊 Thống kê nhanh (số đoạn văn, từ vựng, điểm)
- 🎯 Tác vụ nhanh (nút shortcut)
- 💡 Mẹo và giới thiệu

### Tab Đoạn Văn (Passages)

Tính năng:
- ✍️ Nhập đoạn văn mới
- 🔍 Tìm kiếm và lọc
- ✏️ Chỉnh sửa đoạn văn
- 🗑️ Xóa đoạn văn

**Làm thế nào:**
1. Chọn ngôn ngữ (English / 中文)
2. Nhập topic (chủ đề)
3. Dán đoạn văn vào ô nhập
4. Chọn mức độ khó
5. Nhấn "Thêm đoạn văn"

### Tab Từ Vựng (Vocabulary)

Tính năng:
- 📚 Liệt kê tất cả từ vựng
- 🔎 Tìm kiếm theo từ hoặc nghĩa
- 🏷️ Lọc theo ngôn ngữ
- 📊 Sắp xếp (gần đây, A-Z, tần suất)
- 🗑️ Xóa từ không cần

**Hiển thị:**
- Từ/ký tự
- Phiên âm (nếu là Trung)
- Dịch nghĩa
- Chủ đề
- Số lần ôn tập
- Mức độ khó

### Tab Flashcard (Ôn tập)

Tính năng:
- 🎴 Thẻ lật 3D
- ⏳ Thanh tiến độ
- ✅ Đánh dấu "Đã biết" hoặc "Chưa biết"
- 🔄 Làm lại bộ thẻ

**Cách dùng:**
1. Thẻ hiển thị từ vựng (mặt trước)
2. **Nhấp vào thẻ** để lật xem nghĩa
3. Chọn:
   - "✅ Đã biết" → +10 điểm, đánh dấu là learned
   - "❌ Chưa biết" → Cần ôn lại
4. Tự động sang thẻ tiếp theo

### Tab Thống Kê (Statistics)

Hiển thị:
- 📈 Tổng từ vựng, đã học, đang ôn, mới
- 🌍 Phân bố theo ngôn ngữ
- 📊 Danh sách từ theo trạng thái (thành thạo, ôn tập, mới)

---

## 💾 Dữ Liệu & Lưu Trữ

### Nơi Lưu Dữ Liệu

- **Tất cả dữ liệu** được lưu trong **LocalStorage** của trình duyệt
- **Tự động lưu** mỗi khi thêm/chỉnh sửa
- **An toàn** - không ai ngoài bạn có thể xem

### Xóa/Reset Dữ Liệu

Nếu muốn bắt đầu lại:
1. Mở trình duyệt → **F12** (Developer Tools)
2. Vào tab **Application** (hoặc Storage)
3. Click **LocalStorage** → `VocabLearner`
4. Nhấn **Delete** hoặc:
   ```javascript
   localStorage.clear()
   ```
5. Refresh trang

---

## 🎯 Mẹo & Thủ Thuật

### 1. Nhập Nhiều Đoạn Văn
- Thêm 3-5 đoạn văn khác nhau mỗi ngày
- Tập trung vào một chủ đề tại một lần
- Đoạn văn 2-3 câu là tối ưu

### 2. Ôn Tập Flashcard Hiệu Quả
- **Mỗi ngày:** Ôn 10-15 từ mới
- **Thường xuyên:** Làm lại flashcard để ghi nhớ
- **Quy tắc 3x:** Ôn lại sau 1 ngày, 3 ngày, 1 tuần

### 3. Theo Dõi Tiến Độ
- Xem dashboard trang chủ mỗi ngày
- Theo dõi streak (chuỗi học liên tục)
- Kiếm điểm mỗi khi ôn thành công

### 4. Thêm Từ Mới
Bạn có thể:
- Tìm đoạn văn trong sách, bài báo
- Dán vào app → Tự động trích xuất
- Hoặc dùng từ vựng được gợi ý

---

## 🔧 Xử Lý Sự Cố

### Vấn đề: Trang không tải

**Giải pháp:**
1. Refresh trang (Ctrl+F5 hoặc Cmd+Shift+R)
2. Xóa cache trình duyệt
3. Thử trình duyệt khác

### Vấn đề: Dữ liệu bị mất

**Giải pháp:**
1. Check trên trang **Thống kê** xem còn data không
2. Nếu cần, khôi phục từ localStorage:
   ```javascript
   // Mở F12 → Console
   console.log(localStorage.getItem('vocabLearnerData'));
   ```

### Vấn đề: Chữ Trung không hiển thị đúng

**Giải pháp:**
1. Kiểm tra encoding: HTML phải là **UTF-8**
2. Thử lại với font chữ khác
3. Reset ứng dụng: `localStorage.clear()`

---

## 📚 Từ Vựng Mẫu

### Tiếng Anh - Technology

| Từ | Dịch | 
|----|------|
| Algorithm | Thuật toán |
| Database | Cơ sở dữ liệu |
| Software | Phần mềm |
| Hardware | Phần cứng |
| Network | Mạng |
| Cloud | Đám mây |
| Security | Bảo mật |
| Optimization | Tối ưu hóa |

### Tiếng Trung - Manufacturing

| Chữ | Pinyin | Dịch |
|-----|--------|------|
| 制造 | zhìzào | Sản xuất |
| 设备 | shèbèi | Thiết bị |
| 机器 | jīqì | Máy móc |
| 质量 | zhìliàng | Chất lượng |
| 成本 | chéngběn | Chi phí |
| 效率 | xiàolǜ | Hiệu suất |

---

## ✨ Tính Năng Đặc Biệt

### Điểm & Reward
- ✅ +10 điểm mỗi từ bạn thuộc
- 🔥 Streak: Chuỗi học liên tục
- 🏆 Theo dõi tiến độ hàng ngày

### Giao Diện
- 🎨 Gradient tím xanh hiện đại
- 🎴 Flashcard 3D với lật mượt mà
- 📱 Responsive - hoạt động trên mobile

### Từ Điển
- 🔧 Từ vựng công nghệ tích hợp
- 🏭 Từ vựng sản xuất tích hợp
- 🌏 Hỗ trợ Pinyin cho Trung Quốc

---

## 🎓 Kết Luận

**VocabLearner** giúp bạn:
1. ✅ Nhập và quản lý đoạn văn
2. ✅ Tích lũy từ vựng
3. ✅ Ôn tập thường xuyên
4. ✅ Theo dõi tiến độ
5. ✅ Ghi nhớ từ vựng hiệu quả

**Hãy bắt đầu ngay hôm nay!** 🚀

---

**Cần giúp? Tham khảo README.md để biết thêm chi tiết!**
