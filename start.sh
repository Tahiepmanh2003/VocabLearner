#!/bin/bash

# ============================================
# VocabLearner - Quick Start Script (macOS/Linux)
# ============================================

echo ""
echo "╔════════════════════════════════════════╗"
echo "║      Welcome to VocabLearner!           ║"
echo "║      Chào mừng đến VocabLearner!       ║"
echo "╚════════════════════════════════════════╝"
echo ""

# Check Python
if command -v python3 &> /dev/null; then
    echo "✅ Python 3 found!"
    echo ""
    echo "🚀 Starting server..."
    echo "📂 Directory: $(pwd)"
    echo "🌐 URL: http://localhost:8000"
    echo ""
    echo "Press Ctrl+C to stop server"
    echo ""
    python3 -m http.server 8000
    exit 0
fi

# Check Node.js
if command -v node &> /dev/null; then
    echo "✅ Node.js found!"
    echo ""
    echo "Choose startup method:"
    echo "1. Express Server (port 3000)"
    echo "2. HTTP Server (port 8000)"
    echo "3. Open index.html directly"
    echo ""
    read -p "Enter choice (1-3): " choice
    
    case $choice in
        1)
            echo "🚀 Starting Express Server..."
            if [ ! -d "node_modules" ]; then
                echo "Installing dependencies..."
                npm install express
            fi
            npm start
            ;;
        2)
            echo "🚀 Starting HTTP Server..."
            npx http-server -p 8000
            ;;
        3)
            echo "📂 Opening index.html..."
            open index.html
            ;;
        *)
            echo "❌ Invalid choice"
            ;;
    esac
    exit 0
fi

# If no Python or Node.js found
echo "⚠️  Python or Node.js not found"
echo ""
echo "You can:"
echo "1. Install Python from https://python.org"
echo "2. Install Node.js from https://nodejs.org"
echo "3. Double-click index.html to open directly"
echo ""
echo "Opening index.html in 5 seconds..."
sleep 5
open index.html
