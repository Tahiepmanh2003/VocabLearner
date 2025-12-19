// ============================================
// VocabLearner - Application Logic
// ============================================

// Data Structure
let appData = {
    passages: [],
    vocabulary: [],
    userProgress: {},
    stats: {
        totalPoints: 0,
        streak: 0,
        lastStudyDate: null,
    }
};

const TECH_VOCABULARY = {
    en: {
        'technology': 'công nghệ',
        'software': 'phần mềm',
        'hardware': 'phần cứng',
        'algorithm': 'thuật toán',
        'database': 'cơ sở dữ liệu',
        'server': 'máy chủ',
        'client': 'máy khách',
        'network': 'mạng',
        'security': 'bảo mật',
        'encryption': 'mã hóa',
        'api': 'giao diện lập trình ứng dụng',
        'cloud': 'đám mây',
        'storage': 'lưu trữ',
        'memory': 'bộ nhớ',
        'process': 'quy trình',
        'interface': 'giao diện',
        'framework': 'khung công tác',
        'library': 'thư viện',
        'debugging': 'tìm lỗi',
        'optimization': 'tối ưu hóa',
        'manufacturing': 'sản xuất',
        'production': 'sản xuất',
        'machinery': 'máy móc',
        'equipment': 'thiết bị',
        'assembly': 'lắp ráp',
        'quality': 'chất lượng',
        'efficiency': 'hiệu suất',
        'cost': 'chi phí',
        'supply': 'cung cấp',
        'demand': 'nhu cầu',
    },
    zh: {
        '技术': { pinyin: 'jìshù', meaning: 'kỹ thuật/công nghệ' },
        '软件': { pinyin: 'ruǎnjiàn', meaning: 'phần mềm' },
        '硬件': { pinyin: 'yìngjiàn', meaning: 'phần cứng' },
        '算法': { pinyin: 'suànfǎ', meaning: 'thuật toán' },
        '数据库': { pinyin: 'shùjùkù', meaning: 'cơ sở dữ liệu' },
        '服务器': { pinyin: 'fúwùqì', meaning: 'máy chủ' },
        '网络': { pinyin: 'wǎngluò', meaning: 'mạng' },
        '安全': { pinyin: 'ānquán', meaning: 'bảo mật' },
        '加密': { pinyin: 'jiāmì', meaning: 'mã hóa' },
        '制造': { pinyin: 'zhìzào', meaning: 'sản xuất' },
        '设备': { pinyin: 'shèbèi', meaning: 'thiết bị' },
        '质量': { pinyin: 'zhìliàng', meaning: 'chất lượng' },
        '效率': { pinyin: 'xiàolǜ', meaning: 'hiệu suất' },
        '成本': { pinyin: 'chéngběn', meaning: 'chi phí' },
        '供应': { pinyin: 'gōngyìng', meaning: 'cung cấp' },
        '需求': { pinyin: 'xūqiú', meaning: 'nhu cầu' },
    }
};

// Translation API function - Enhanced
async function translateWord(word, sourceLanguage) {
    try {
        // For Chinese, use better API (RapidAPI or LibreTranslate)
        if (sourceLanguage === 'zh') {
            // Try LibreTranslate (free, no key required)
            const response = await fetch(
                'https://libretranslate.de/translate',
                {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        q: word,
                        source: 'zh',
                        target: 'vi'
                    })
                }
            );
            
            if (response.ok) {
                const data = await response.json();
                if (data.translatedText && data.translatedText.toLowerCase() !== word.toLowerCase()) {
                    return data.translatedText;
                }
            }
        } else if (sourceLanguage === 'en') {
            // For English, use MyMemory API
            const response = await fetch(
                `https://api.mymemory.translated.net/get?q=${encodeURIComponent(word)}&langpair=en|vi`,
                { method: 'GET' }
            );
            
            if (response.ok) {
                const data = await response.json();
                if (data.responseStatus === 200 && data.responseData.translatedText) {
                    const translation = data.responseData.translatedText;
                    if (translation.toLowerCase() !== word.toLowerCase()) {
                        return translation;
                    }
                }
            }
        }
    } catch (error) {
        console.log('Translation API error:', error.message);
    }
    
    return null;
}

// Initialize App
function initApp() {
    loadData();
    renderHome();
    setupEventListeners();
    updateAllStats();
    userAccount();
    helloUser();
}

// Data Management
function loadData() {
    const saved = localStorage.getItem('vocabLearnerData');
    if (saved) {
        try {
            appData = JSON.parse(saved);
        } catch (e) {
            console.error('Error loading data:', e);
        }
    }
}
function userAccount() {
    const imgAccount = document.querySelector('.imgAccount');
    const accountMenu = document.getElementById('accountMenu');

    const menuLogin = document.getElementById('menuLogin');
    const menuRegister = document.getElementById('menuRegister');
    const menuProfile = document.getElementById('menuProfile');
    const menuLogout = document.getElementById('menuLogout');

    // Click avatar -> toggle menu
    imgAccount.addEventListener('click', function (e) {
        e.stopPropagation();
        accountMenu.classList.toggle('hidden');
        updateMenuByAuth();
    });

    // Click ra ngoài -> đóng menu
    document.addEventListener('click', function () {
        accountMenu.classList.add('hidden');
    });

    // Menu actions
    menuLogin.onclick = () => window.location.href = 'loginAccount.html';
    menuRegister.onclick = () => window.location.href = 'registerAccount.html';
    menuProfile.onclick = () => window.location.href = 'profile.html';

    menuLogout.onclick = () => {
        localStorage.removeItem('user');
       window.location.href = 'loginAccount.html';
    };

    function updateMenuByAuth() {
        const user = JSON.parse(localStorage.getItem('user'));

        if (user) {
            menuLogin.classList.add('hidden');
            menuRegister.classList.add('hidden');
            menuProfile.classList.remove('hidden');
            menuLogout.classList.remove('hidden');
        } else {
            menuLogin.classList.remove('hidden');
            menuRegister.classList.remove('hidden');
            menuProfile.classList.add('hidden');
            menuLogout.classList.add('hidden');
        }
    }
}
function helloUser(){
    const user = JSON.parse(localStorage.getItem('user'));
    const navUsername = document.getElementById('nav-username');
    if (user) {
        navUsername.textContent = user.username;
    } else {
        navUsername.textContent = 'Guest';
    }
}

function saveData() {
    localStorage.setItem('vocabLearnerData', JSON.stringify(appData));
    showToast('Dữ liệu đã được lưu', 'success');
}

// UI Helpers
function switchTab(tabName) {
    // Hide all tabs
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.add('hidden');
    });

    // Remove active class from all buttons
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('tab-active', 'text-purple-700');
        btn.classList.add('text-gray-700');
    });

    // Show selected tab
    const tabElement = document.getElementById(tabName);
    if (tabElement) {
        tabElement.classList.remove('hidden');
        tabElement.classList.add('fade-in');
    }

    // Mark button as active
    const activeBtn = document.querySelector(`[data-tab="${tabName}"]`);
    if (activeBtn) {
        activeBtn.classList.add('tab-active', 'text-purple-700');
        activeBtn.classList.remove('text-gray-700');
    }

    // Render content based on tab
    switch(tabName) {
        case 'home':
            renderHome();
            break;
        case 'passages':
            renderPassages();
            break;
        case 'vocabulary':
            renderVocabulary();
            break;
        case 'flashcards':
            renderFlashcards();
            break;
        case 'statistics':
            renderStatistics();
            break;
    }
}

function renderHome() {
    document.getElementById('stat-passages').textContent = appData.passages.length;
    document.getElementById('stat-words').textContent = appData.vocabulary.length;
    
    const learned = appData.vocabulary.filter(v => appData.userProgress[v.id]?.learned).length;
    document.getElementById('stat-learned').textContent = learned;
    
    document.getElementById('stat-streak').textContent = appData.stats.streak;
    document.getElementById('totalPoints').textContent = appData.stats.totalPoints;
}

function setupEventListeners() {
    // Tab navigation
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            switchTab(e.currentTarget.dataset.tab);
        });
    });

    // Passage search
    document.getElementById('passageSearch')
        ?.addEventListener('input', filterPassages);

    // Vocabulary filters
    document.getElementById('vocabSearch')
        ?.addEventListener('input', renderVocabulary);

    document.getElementById('vocabFilter')
        ?.addEventListener('change', renderVocabulary);

    document.getElementById('vocabSort')
        ?.addEventListener('change', renderVocabulary);

    // Scroll to top button
    const scrollBtn = document.getElementById('scrollToTop');

    if (scrollBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 500) {
                scrollBtn.classList.add('show');
            } else {
                scrollBtn.classList.remove('show');
            }
        });

        scrollBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
document.querySelector('.home-trigger')?.addEventListener('click', () => {
    switchTab('home');
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

    // Passage input
    document.getElementById('passageInput')
        ?.addEventListener('input', (e) => {
            console.log(`Passage length: ${e.target.value.length} characters`);
        });
}



// ============================================
// PASSAGE MANAGEMENT
// ============================================

function addPassage() {
    const passageText = document.getElementById('passageInput').value.trim();
    const topic = document.getElementById('topicInput').value.trim();
    const difficulty = document.getElementById('difficultyInput').value;
    const language = document.querySelector('input[name="language"]:checked').value;

    if (!passageText) {
        showToast('Vui lòng nhập đoạn văn', 'error');
        return;
    }

    const passage = {
        id: Date.now().toString(),
        text: passageText,
        topic: topic || 'Không có chủ đề',
        difficulty: difficulty,
        language: language,
        dateAdded: new Date().toLocaleDateString('vi-VN'),
        wordCount: passageText.split(/\s+/).length,
    };

    appData.passages.push(passage);
    extractVocabulary(passage);
    saveData();
    showToast('Đoạn văn đã được thêm thành công!', 'success');

    // Reset form
    document.getElementById('passageInput').value = '';
    document.getElementById('topicInput').value = '';

    renderPassages();
}

function extractVocabulary(passage) {
    const words = passage.text.split(/[\s,.!?;:"\'-]+/).filter(w => w.length > 2);
    let processedCount = 0;
    const totalWords = words.length;
    
    words.forEach(async word => {
        const normalized = word.toLowerCase();
        
        // Check if word already exists
        const exists = appData.vocabulary.some(v => 
            v.word.toLowerCase() === normalized && v.language === passage.language
        );

        if (!exists && normalized.length > 2) {
            let meaning = '';
            
            if (passage.language === 'en') {
                meaning = TECH_VOCABULARY.en[normalized] || '';
            } else {
                meaning = TECH_VOCABULARY.zh[normalized]?.meaning || '';
            }

            // If no meaning found in dictionary, try to translate
            if (!meaning) {
                const translated = await translateWord(word, passage.language);
                meaning = translated || 'Cần dịch...';
            }

            const vocab = {
                id: Date.now().toString() + Math.random(),
                word: word,
                language: passage.language,
                meaning: meaning,
                passageId: passage.id,
                category: passage.topic,
                difficulty: passage.difficulty,
                dateAdded: new Date().toLocaleDateString('vi-VN'),
                pinyin: passage.language === 'zh' ? TECH_VOCABULARY.zh[normalized]?.pinyin || '' : '',
                frequency: 1,
            };

            appData.vocabulary.push(vocab);
            appData.userProgress[vocab.id] = {
                learned: false,
                lastReview: null,
                reviewCount: 0,
            };
            
            // Save and update UI
            saveData();
            
            // Update UI if currently viewing vocabulary tab
            const vocabTab = document.getElementById('vocabulary');
            if (vocabTab && !vocabTab.classList.contains('hidden')) {
                renderVocabulary();
            }
        }

        processedCount++;
        if (processedCount === totalWords) {
            // Final update after all words are processed
            const vocabTab = document.getElementById('vocabulary');
            if (vocabTab && !vocabTab.classList.contains('hidden')) {
                renderVocabulary();
            }
        }
    });
}

function renderPassages() {
    const passages = appData.passages;
    const container = document.getElementById('passagesList');

    if (passages.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-inbox"></i>
                <h3 class="text-xl font-600 text-gray-500 mt-4">Chưa có đoạn văn</h3>
                <p class="text-gray-400 mt-2">Hãy thêm đoạn văn đầu tiên để bắt đầu</p>
            </div>
        `;
        return;
    }

    container.innerHTML = passages.map(p => `
        <div class="passage-card" onclick="showPassageDetails('${p.id}')">
            <div class="flex justify-between items-start mb-3">
                <div class="flex-1">
                    <h3 class="font-600 text-gray-800 mb-1">${p.topic}</h3>
                    <p class="text-sm text-gray-600 line-clamp-2">${p.text}</p>
                </div>
                <div class="text-right ml-4">
                    <span class="language-badge ${p.language === 'en' ? 'badge-en' : 'badge-zh'}">
                        ${p.language === 'en' ? 'English' : '中文'}
                    </span>
                </div>
            </div>
            <div class="flex justify-between items-center text-xs text-gray-500">
                <span class="difficulty-${p.difficulty}"><i class="fas fa-signal"></i> ${getDifficultyLabel(p.difficulty)}</span>
                <span>${p.wordCount} từ | ${p.dateAdded}</span>
            </div>
        </div>
    `).join('');
}

function showPassageDetails(passageId) {
    currentPassageId = passageId;
    const passage = appData.passages.find(p => p.id === passageId);
    
    if (!passage) return;

    const vocabCount = appData.vocabulary.filter(v => v.passageId === passageId).length;

    document.getElementById('modalTitle').textContent = passage.topic;
    document.getElementById('modalInfo').textContent = 
        `${passage.language === 'en' ? 'Tiếng Anh' : 'Tiếng Trung'} | ${passage.wordCount} từ | ${vocabCount} từ vựng`;
    
    document.getElementById('modalContent').innerHTML = `
        <div class="bg-gray-50 p-4 rounded-8 mb-4">
            <p class="text-gray-800 leading-relaxed">${passage.text}</p>
        </div>
        <div class="grid grid-cols-2 gap-4 mb-4">
            <div class="bg-blue-50 p-3 rounded-8">
                <div class="text-sm text-gray-600">Mức độ</div>
                <div class="text-lg font-600 difficulty-${passage.difficulty}">${getDifficultyLabel(passage.difficulty)}</div>
            </div>
            <div class="bg-purple-50 p-3 rounded-8">
                <div class="text-sm text-gray-600">Từ vựng</div>
                <div class="text-lg font-600 text-purple-600">${vocabCount} từ</div>
            </div>
        </div>
    `;

    document.getElementById('passageModal').classList.add('show');
}

function closeModal() {
    document.getElementById('passageModal').classList.remove('show');
}

function editPassage(passageId) {
    const passage = appData.passages.find(p => p.id === passageId);
    if (!passage) return;

    document.getElementById('editTopic').value = passage.topic;
    document.getElementById('editPassageText').value = passage.text;
    document.getElementById('editModal').classList.add('show');
}

function closeEditModal() {
    document.getElementById('editModal').classList.remove('show');
}

function saveEditPassage() {
    const passage = appData.passages.find(p => p.id === currentPassageId);
    if (!passage) return;

    passage.topic = document.getElementById('editTopic').value;
    passage.text = document.getElementById('editPassageText').value;
    passage.wordCount = passage.text.split(/\s+/).length;

    saveData();
    closeEditModal();
    closeModal();
    renderPassages();
    showToast('Đoạn văn đã được cập nhật', 'success');
}

function deletePassage(passageId) {
    if (confirm('Bạn có chắc muốn xóa đoạn văn này? Tất cả từ vựng liên quan cũng sẽ bị xóa.')) {
        appData.passages = appData.passages.filter(p => p.id !== passageId);
        appData.vocabulary = appData.vocabulary.filter(v => v.passageId !== passageId);
        saveData();
        closeModal();
        renderPassages();
        showToast('Đoạn văn đã được xóa', 'success');
    }
}

function filterPassages() {
    const query = document.getElementById('passageSearch').value.toLowerCase();
    const passages = appData.passages.filter(p => 
        p.topic.toLowerCase().includes(query) || 
        p.text.toLowerCase().includes(query)
    );

    const container = document.getElementById('passagesList');
    if (passages.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-search"></i>
                <p class="text-gray-400 mt-2">Không tìm thấy đoạn văn nào</p>
            </div>
        `;
        return;
    }

    container.innerHTML = passages.map(p => `
        <div class="passage-card" onclick="showPassageDetails('${p.id}')">
            <div class="flex justify-between items-start mb-3">
                <div class="flex-1">
                    <h3 class="font-600 text-gray-800 mb-1">${p.topic}</h3>
                    <p class="text-sm text-gray-600 line-clamp-2">${p.text}</p>
                </div>
                <div class="text-right ml-4">
                    <span class="language-badge ${p.language === 'en' ? 'badge-en' : 'badge-zh'}">
                        ${p.language === 'en' ? 'English' : '中文'}
                    </span>
                </div>
            </div>
            <div class="flex justify-between items-center text-xs text-gray-500">
                <span class="difficulty-${p.difficulty}"><i class="fas fa-signal"></i> ${getDifficultyLabel(p.difficulty)}</span>
                <span>${p.wordCount} từ | ${p.dateAdded}</span>
            </div>
        </div>
    `).join('');
}

// ============================================
// IMPORT FROM FILE
// ============================================

async function importVocabularyFromFile() {
    const fileInput = document.getElementById('fileInput');
    const file = fileInput.files[0];

    if (!file) {
        showToast('Vui lòng chọn một file', 'error');
        return;
    }

    const fileName = file.name.toLowerCase();
    let data = [];

    try {
        if (fileName.endsWith('.docx')) {
            // Handle DOCX file using Mammoth.js
            const arrayBuffer = await file.arrayBuffer();
            const result = await mammoth.extractRawText({ arrayBuffer: arrayBuffer });
            
            // Parse table from text - simplified approach
            data = parseDocxTable(result.value);
        } else if (fileName.endsWith('.xlsx') || fileName.endsWith('.xls')) {
            // Handle Excel file using SheetJS (XLSX library)
            const arrayBuffer = await file.arrayBuffer();
            // Convert to typed array
            const uint8View = new Uint8Array(arrayBuffer);
            const workbook = window.XLSX.read(uint8View, { type: 'array' });
            const firstSheetName = workbook.SheetNames[0];
            const worksheet = workbook.Sheets[firstSheetName];
            const rawData = window.XLSX.utils.sheet_to_json(worksheet, { header: 1 });
            
            // Filter out empty rows and headers
            data = rawData
                .filter(row => row.length >= 3 && row[0] && row[0].toString().trim())
                .map(row => ({
                    hanzi: row[0].toString().trim(),
                    pinyin: row[1].toString().trim(),
                    meaning: row[2].toString().trim()
                }));
        } else {
            showToast('Định dạng file không được hỗ trợ. Vui lòng sử dụng .xlsx, .xls hoặc .docx', 'error');
            return;
        }

        if (data.length === 0) {
            showToast('Không tìm thấy dữ liệu trong file. Kiểm tra lại file của bạn.', 'error');
            return;
        }

        // Add vocabulary items
        let addedCount = 0;
        for (const item of data) {
            const hanzi = item.hanzi || item[0];
            const pinyin = item.pinyin || item[1];
            const meaning = item.meaning || item[2];

            // Check if word already exists
            const exists = appData.vocabulary.some(v => v.word === hanzi);

            if (!exists && hanzi) {
                const vocab = {
                    id: Date.now().toString() + Math.random(),
                    word: hanzi,
                    language: 'zh',
                    meaning: meaning,
                    passageId: 'import_' + Date.now(),
                    category: 'Nhập từ file',
                    difficulty: 'medium',
                    dateAdded: new Date().toLocaleDateString('vi-VN'),
                    pinyin: pinyin,
                    frequency: 1,
                };

                appData.vocabulary.push(vocab);
                appData.userProgress[vocab.id] = {
                    learned: false,
                    lastReview: null,
                    reviewCount: 0,
                };

                addedCount++;
            }
        }

        saveData();
        fileInput.value = ''; // Clear file input
        renderVocabulary();
        showToast(`✅ Đã thêm ${addedCount} từ vựng từ file!`, 'success');
    } catch (error) {
        console.error('Error importing file:', error);
        showToast('❌ Lỗi khi đọc file: ' + error.message, 'error');
    }
}

// Parse DOCX table - simplified version
function parseDocxTable(text) {
    const lines = text.split('\n').filter(line => line.trim());
    const data = [];

    // Simple line-by-line parsing
    // Assumes format: 汉字\t拼音\t意思 or similar
    for (let i = 0; i < lines.length; i++) {
        const line = lines[i].trim();
        
        // Try to split by tabs or multiple spaces
        let parts = line.split(/\t+/).filter(p => p.trim());
        
        if (parts.length < 3) {
            parts = line.split(/\s{2,}/).filter(p => p.trim());
        }

        if (parts.length >= 3) {
            data.push({
                hanzi: parts[0].trim(),
                pinyin: parts[1].trim(),
                meaning: parts[2].trim()
            });
        }
    }

    return data;
}

// ============================================
// VOCABULARY MANAGEMENT
// ============================================

function renderVocabulary() {
    const container = document.getElementById('vocabularyList');

    const query = document.getElementById('vocabSearch')?.value.toLowerCase() || '';
    const filter = document.getElementById('vocabFilter')?.value || '';
    const sort = document.getElementById('vocabSort')?.value || 'recent';

    let vocab = [...appData.vocabulary];

    // 🔍 Search
    if (query) {
        vocab = vocab.filter(v =>
            v.word.toLowerCase().includes(query) ||
            (v.meaning && v.meaning.toLowerCase().includes(query))
        );
    }

    // 🌐 Language filter
    if (filter) {
        vocab = vocab.filter(v => v.language === filter);
    }

    // 🔃 Sort
    if (sort === 'alphabetical') {
        vocab.sort((a, b) => a.word.localeCompare(b.word));
    } else if (sort === 'frequency') {
        vocab.sort((a, b) => (b.frequency || 0) - (a.frequency || 0));
    } else {
        vocab.sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded));
    }

    // ❌ Empty
    if (vocab.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-search"></i>
                <p class="text-gray-400 mt-2">Không tìm thấy từ vựng nào</p>
            </div>
        `;
        return;
    }

    // ✅ Render
    container.innerHTML = vocab.map(v => {
        const progress = appData.userProgress[v.id] || { learned: false, reviewCount: 0 };

        return `
            <div class="vocabulary-item">
                <div class="flex justify-between items-start mb-2">
                    <div class="flex-1">
                        <div class="flex items-center mb-2">
                            <span class="language-badge ${v.language === 'en' ? 'badge-en' : 'badge-zh'}">
                                ${v.language === 'en' ? 'English' : '中文'}
                            </span>
                            ${progress.learned ? '<span class="text-green-500 ml-2"><i class="fas fa-check-circle"></i> Đã học</span>' : ''}
                        </div>

                        <h3 class="text-xl font-600 text-gray-800">${v.word}</h3>

                        ${v.pinyin ? `<div class="pinyin-box"><i class="fas fa-volume-up mr-2"></i>${v.pinyin}</div>` : ''}

                        ${v.meaning
                            ? `<div class="meaning-box"><i class="fas fa-arrow-right mr-2"></i>${v.meaning}</div>`
                            : `<div class="meaning-box text-gray-400"><i class="fas fa-spinner fa-spin mr-2"></i>Đang tải dịch...</div>`
                        }

                        ${v.category ? `<p class="text-xs text-gray-500 mt-2"><i class="fas fa-tag"></i> ${v.category}</p>` : ''}
                    </div>

                    <button onclick="deleteVocab('${v.id}')" class="text-red-500 hover:text-red-700 ml-4">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>

                <div class="flex justify-between items-center pt-3 border-t text-xs text-gray-500">
                    <span><i class="fas fa-redo"></i> ${progress.reviewCount} lần ôn</span>
                    <span class="difficulty-${v.difficulty}">${getDifficultyLabel(v.difficulty)}</span>
                    <span>${v.dateAdded}</span>
                </div>
            </div>
        `;
    }).join('');
}


function deleteVocab(vocabId) {
    if (confirm('Bạn có chắc muốn xóa từ vựng này?')) {
        appData.vocabulary = appData.vocabulary.filter(v => v.id !== vocabId);
        delete appData.userProgress[vocabId];
        saveData();
        renderVocabulary();
        showToast('Từ vựng đã được xóa', 'success');
    }
}

function filterVocabulary() {
    const query = document.getElementById('vocabSearch').value.toLowerCase();
    const filter = document.getElementById('vocabFilter').value;
    const sort = document.getElementById('vocabSort').value;

    let vocab = appData.vocabulary.filter(v => {
        const matchesQuery = v.word.toLowerCase().includes(query) || 
                           v.meaning.toLowerCase().includes(query);
        const matchesFilter = !filter || v.language === filter;
        return matchesQuery && matchesFilter;
    });

    // Sort
    if (sort === 'alphabetical') {
        vocab.sort((a, b) => a.word.localeCompare(b.word));
    } else if (sort === 'frequency') {
        vocab.sort((a, b) => b.frequency - a.frequency);
    } else {
        vocab.sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded));
    }

    const container = document.getElementById('vocabularyList');
    if (vocab.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-search"></i>
                <p class="text-gray-400 mt-2">Không tìm thấy từ vựng nào</p>
            </div>
        `;
        return;
    }

    container.innerHTML = vocab.map(v => {
        const progress = appData.userProgress[v.id] || { learned: false, reviewCount: 0 };
        return `
            <div class="vocabulary-item">
                <div class="flex justify-between items-start mb-2">
                    <div class="flex-1">
                        <div class="flex items-center mb-2">
                            <span class="language-badge ${v.language === 'en' ? 'badge-en' : 'badge-zh'}">
                                ${v.language === 'en' ? 'English' : '中文'}
                            </span>
                            ${progress.learned ? '<span class="text-green-500 ml-2"><i class="fas fa-check-circle"></i> Đã học</span>' : ''}
                        </div>
                        <h3 class="text-xl font-600 text-gray-800">${v.word}</h3>
                        ${v.pinyin ? `<div class="pinyin-box"><i class="fas fa-volume-up mr-2"></i>Pinyin: ${v.pinyin}</div>` : ''}
                        ${v.meaning ? `<div class="meaning-box"><i class="fas fa-arrow-right mr-2"></i>${v.meaning}</div>` : '<div class="meaning-box text-gray-400"><i class="fas fa-spinner fa-spin mr-2"></i>Đang tải dịch...</div>'}
                        ${v.category ? `<p class="text-xs text-gray-500 mt-2"><i class="fas fa-tag"></i> ${v.category}</p>` : ''}
                    </div>
                    <button onclick="deleteVocab('${v.id}')" class="text-red-500 hover:text-red-700 ml-4">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
                <div class="flex justify-between items-center pt-3 border-t text-xs text-gray-500">
                    <span><i class="fas fa-redo"></i> ${progress.reviewCount} lần ôn</span>
                    <span class="difficulty-${v.difficulty}">${getDifficultyLabel(v.difficulty)}</span>
                    <span>${v.dateAdded}</span>
                </div>
            </div>
        `;
    }).join('');
}

// ============================================
// FLASHCARD SYSTEM
// ============================================

let currentFlashcardIndex = 0;
let currentFlashcards = [];

function renderFlashcards() {
    if (appData.vocabulary.length === 0) {
        document.getElementById('flashcardContainer').style.display = 'none';
        document.getElementById('flashcardEmpty').style.display = 'block';
        return;
    }

    document.getElementById('flashcardContainer').style.display = 'block';
    document.getElementById('flashcardEmpty').style.display = 'none';

    currentFlashcards = [...appData.vocabulary].sort(() => Math.random() - 0.5);
    currentFlashcardIndex = 0;
    displayFlashcard();
}

function displayFlashcard() {
    if (currentFlashcards.length === 0) return;

    const card = currentFlashcards[currentFlashcardIndex];
    const cardElement = document.getElementById('currentFlashcard');

    // Reset flip state
    cardElement.classList.remove('flipped');

    document.getElementById('cardFront').innerHTML = `
        <div>
            <p class="text-sm opacity-80 mb-3">${card.language === 'en' ? 'English' : '中文'}</p>
            <p class="text-4xl font-bold">${card.word}</p>
            ${card.pinyin ? `<p class="text-sm opacity-70 mt-4"><i class="fas fa-volume-up mr-2"></i>${card.pinyin}</p>` : ''}
        </div>
    `;

    document.getElementById('cardBack').innerHTML = `
        <div>
            <p class="text-sm opacity-80 mb-3">Nghĩa - Meaning</p>
            <p class="text-2xl font-semibold">${card.meaning || 'Đang tải dịch...'}</p>
            ${card.category ? `<p class="text-sm opacity-70 mt-4">📚 ${card.category}</p>` : ''}
        </div>
    `;

    // Add click to flip
    cardElement.onclick = () => {
        cardElement.classList.toggle('flipped');
    };

    // Update progress
    document.getElementById('cardProgress').textContent = currentFlashcardIndex + 1;
    document.getElementById('cardTotal').textContent = currentFlashcards.length;
    
    const progressPercent = ((currentFlashcardIndex + 1) / currentFlashcards.length) * 100;
    document.getElementById('cardProgressBar').style.width = progressPercent + '%';

    updateFlashcardStats();
}

function markFlashcardResult(learned) {
    const card = currentFlashcards[currentFlashcardIndex];
    const progress = appData.userProgress[card.id] || { learned: false, reviewCount: 0 };

    if (learned) {
        progress.learned = true;
        progress.lastReview = new Date().toLocaleDateString('vi-VN');
        progress.reviewCount++;
        appData.stats.totalPoints += 10;
        
        showToast('Chúc mừng! Bạn đã thuộc từ này', 'success');
    } else {
        progress.reviewCount++;
        showToast('Hãy cố gắng ôn lại từ này', 'info');
    }

    appData.userProgress[card.id] = progress;
    saveData();

    // Move to next card
    currentFlashcardIndex++;
    if (currentFlashcardIndex >= currentFlashcards.length) {
        showToast('Hoàn thành! Bạn đã ôn tập hết các từ vựng', 'success');
        setTimeout(() => {
            renderFlashcards();
        }, 1000);
    } else {
        displayFlashcard();
    }

    updateAllStats();
}

function resetFlashcard() {
    currentFlashcardIndex = 0;
    currentFlashcards = [...appData.vocabulary].sort(() => Math.random() - 0.5);
    displayFlashcard();
}

function updateFlashcardStats() {
    const learned = currentFlashcards.filter(c => appData.userProgress[c.id]?.learned).length;
    const remaining = currentFlashcards.length - currentFlashcardIndex - 1;
    const review = currentFlashcards.filter(c => {
        const prog = appData.userProgress[c.id];
        return prog && prog.reviewCount > 0 && !prog.learned;
    }).length;

    document.getElementById('cardLearned').textContent = learned;
    document.getElementById('cardReview').textContent = review;
    document.getElementById('cardRemaining').textContent = remaining;
}

// ============================================
// STATISTICS
// ============================================

function renderStatistics() {
    const totalWords = appData.vocabulary.length;
    const mastered = appData.vocabulary.filter(v => appData.userProgress[v.id]?.learned).length;
    const reviewing = appData.vocabulary.filter(v => {
        const prog = appData.userProgress[v.id];
        return prog && prog.reviewCount > 0 && !prog.learned;
    }).length;
    const newWords = totalWords - mastered - reviewing;

    document.getElementById('stats-total-words').textContent = totalWords;
    document.getElementById('stats-mastered').textContent = mastered;
    document.getElementById('stats-reviewing').textContent = reviewing;
    document.getElementById('stats-new').textContent = newWords;

    // Language stats
    const enCount = appData.vocabulary.filter(v => v.language === 'en').length;
    const zhCount = appData.vocabulary.filter(v => v.language === 'zh').length;

    document.getElementById('stats-en-count').textContent = enCount;
    document.getElementById('stats-zh-count').textContent = zhCount;

    // Status list
    const statusContainer = document.getElementById('statusList');
    statusContainer.innerHTML = `
        <div class="grid grid-cols-3 gap-4">
            <div class="bg-green-50 p-4 rounded-8">
                <h4 class="font-600 text-green-900 mb-3">Đã thành thạo (${mastered})</h4>
                <div class="space-y-1 max-h-60 overflow-y-auto">
                    ${appData.vocabulary
                        .filter(v => appData.userProgress[v.id]?.learned)
                        .map(v => `<p class="text-sm text-green-700">• ${v.word}</p>`)
                        .join('')}
                </div>
            </div>
            <div class="bg-yellow-50 p-4 rounded-8">
                <h4 class="font-600 text-yellow-900 mb-3">Đang ôn tập (${reviewing})</h4>
                <div class="space-y-1 max-h-60 overflow-y-auto">
                    ${appData.vocabulary
                        .filter(v => {
                            const prog = appData.userProgress[v.id];
                            return prog && prog.reviewCount > 0 && !prog.learned;
                        })
                        .map(v => `<p class="text-sm text-yellow-700">• ${v.word}</p>`)
                        .join('')}
                </div>
            </div>
            <div class="bg-blue-50 p-4 rounded-8">
                <h4 class="font-600 text-blue-900 mb-3">Mới (${newWords})</h4>
                <div class="space-y-1 max-h-60 overflow-y-auto">
                    ${appData.vocabulary
                        .filter(v => {
                            const prog = appData.userProgress[v.id];
                            return !prog || (prog.reviewCount === 0 && !prog.learned);
                        })
                        .slice(0, 10)
                        .map(v => `<p class="text-sm text-blue-700">• ${v.word}</p>`)
                        .join('')}
                    ${newWords > 10 ? `<p class="text-xs text-gray-400 mt-2">+${newWords - 10} từ khác</p>` : ''}
                </div>
            </div>
        </div>
    `;
}

// ============================================
// UTILITY FUNCTIONS
// ============================================

function updateAllStats() {
    renderHome();
}

function getDifficultyLabel(difficulty) {
    const labels = {
        easy: '🟢 Dễ',
        medium: '🟡 Trung bình',
        hard: '🔴 Khó'
    };
    return labels[difficulty] || difficulty;
}

function showToast(message, type = 'info') {
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerHTML = `
        <div class="flex items-center space-x-2">
            <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
            <span>${message}</span>
        </div>
    `;

    document.body.appendChild(toast);

    setTimeout(() => {
        toast.style.animation = 'slideInRight 0.3s ease reverse';
        setTimeout(() => toast.remove(), 300);
    }, 2000);
}

// Variables for modal management
let currentPassageId = null;

// Initialize on page load
document.addEventListener('DOMContentLoaded', initApp);
