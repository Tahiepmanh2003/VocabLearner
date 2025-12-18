@echo off
REM ============================================
REM VocabLearner - Quick Start Script (Windows)
REM ============================================

echo.
echo ╔════════════════════════════════════════╗
echo ║      Welcome to VocabLearner!           ║
echo ║      Chào mừng đến VocabLearner!       ║
echo ╚════════════════════════════════════════╝
echo.

REM Kiểm tra Python
python --version >nul 2>&1
if %errorlevel% equ 0 (
    echo ✅ Python được tìm thấy!
    echo.
    echo 🚀 Khởi động server...
    echo 📂 Thư mục: %cd%
    echo 🌐 URL: http://localhost:8000
    echo.
    echo Nhấn Ctrl+C để dừng server
    echo.
    python -m http.server 8000
    goto end
)

REM Kiểm tra Node.js
node --version >nul 2>&1
if %errorlevel% equ 0 (
    echo ✅ Node.js được tìm thấy!
    echo.
    echo Chọn cách chạy:
    echo 1. Express Server (port 3000)
    echo 2. HTTP Server (port 8000)
    echo 3. Mở trực tiếp (index.html)
    echo.
    set /p choice="Nhập lựa chọn (1-3): "
    
    if "%choice%"=="1" (
        echo 🚀 Khởi động Express Server...
        if not exist node_modules (
            echo Cài đặt dependencies...
            call npm install express
        )
        call npm start
    ) else if "%choice%"=="2" (
        echo 🚀 Khởi động HTTP Server...
        call npx http-server -p 8000
    ) else if "%choice%"=="3" (
        echo 📂 Mở index.html trong trình duyệt...
        start index.html
    ) else (
        echo ❌ Lựa chọn không hợp lệ
    )
    goto end
)

REM Nếu không tìm thấy Python hay Node.js
echo ⚠️  Không tìm thấy Python hoặc Node.js
echo.
echo Bạn có thể:
echo 1. Cài đặt Python từ https://python.org
echo 2. Cài đặt Node.js từ https://nodejs.org
echo 3. Double-click vào index.html để mở trực tiếp
echo.
echo Mở index.html trong 5 giây...
timeout /t 5
start index.html

:end
pause
