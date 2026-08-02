const LETTERS = [
  { letter: 'ا', name: 'Alif', translit: 'a', word: 'أسد', wordTranslit: 'Asad', meaning: 'Lion', emoji: '🦁' },
  { letter: 'ب', name: 'Ba', translit: 'b', word: 'باب', wordTranslit: 'Baab', meaning: 'Door', emoji: '🚪' },
  { letter: 'ت', name: 'Ta', translit: 't', word: 'تفاح', wordTranslit: 'Tuffah', meaning: 'Apple', emoji: '🍎' },
  { letter: 'ث', name: 'Tha', translit: 'th', word: 'ثعلب', wordTranslit: "Tha'lab", meaning: 'Fox', emoji: '🦊' },
  { letter: 'ج', name: 'Jeem', translit: 'j', word: 'جمل', wordTranslit: 'Jamal', meaning: 'Camel', emoji: '🐫' },
  { letter: 'ح', name: 'Haa', translit: 'h', word: 'حصان', wordTranslit: 'Hisan', meaning: 'Horse', emoji: '🐴' },
  { letter: 'خ', name: 'Khaa', translit: 'kh', word: 'خروف', wordTranslit: 'Kharoof', meaning: 'Sheep', emoji: '🐑' },
  { letter: 'د', name: 'Dal', translit: 'd', word: 'ديك', wordTranslit: 'Deek', meaning: 'Rooster', emoji: '🐓' },
  { letter: 'ذ', name: 'Dhal', translit: 'dh', word: 'ذئب', wordTranslit: "Thi'b", meaning: 'Wolf', emoji: '🐺' },
  { letter: 'ر', name: 'Ra', translit: 'r', word: 'رمان', wordTranslit: 'Rumman', meaning: 'Pomegranate', emoji: '🔴' },
  { letter: 'ز', name: 'Zaah', translit: 'z', sound: 'زاي', word: 'زرافة', wordTranslit: 'Zarafa', meaning: 'Giraffe', emoji: '🦒' },
  { letter: 'س', name: 'Seen', translit: 's', word: 'سمك', wordTranslit: 'Samak', meaning: 'Fish', emoji: '🐟' },
  { letter: 'ش', name: 'Sheen', translit: 'sh', word: 'شمس', wordTranslit: 'Shams', meaning: 'Sun', emoji: '☀️' },
  { letter: 'ص', name: 'Sad', translit: 's', word: 'صقر', wordTranslit: 'Saqr', meaning: 'Falcon', emoji: '🦅' },
  { letter: 'ض', name: 'Dad', translit: 'd', word: 'ضفدع', wordTranslit: "Difda'", meaning: 'Frog', emoji: '🐸' },
  { letter: 'ط', name: 'Ta (heavy)', translit: 't', word: 'طائر', wordTranslit: "Ta'ir", meaning: 'Bird', emoji: '🐦' },
  { letter: 'ظ', name: 'Za', translit: 'z', word: 'ظرف', wordTranslit: 'Tharf', meaning: 'Envelope', emoji: '✉️' },
  { letter: 'ع', name: 'Ayn', translit: "'", word: 'عين', wordTranslit: 'Ayn', meaning: 'Eye', emoji: '👁️' },
  { letter: 'غ', name: 'Ghayn', translit: 'gh', word: 'غزال', wordTranslit: 'Ghazal', meaning: 'Gazelle', emoji: '🦌' },
  { letter: 'ف', name: 'Fa', translit: 'f', word: 'فيل', wordTranslit: 'Feel', meaning: 'Elephant', emoji: '🐘' },
  { letter: 'ق', name: 'Qaf', translit: 'q', word: 'قلم', wordTranslit: 'Qalam', meaning: 'Pen', emoji: '🖊️' },
  { letter: 'ك', name: 'Kaf', translit: 'k', word: 'كتاب', wordTranslit: 'Kitab', meaning: 'Book', emoji: '📖' },
  { letter: 'ل', name: 'Lam', translit: 'l', word: 'ليمون', wordTranslit: 'Laymoon', meaning: 'Lemon', emoji: '🍋' },
  { letter: 'م', name: 'Meem', translit: 'm', word: 'موز', wordTranslit: 'Mawz', meaning: 'Banana', emoji: '🍌' },
  { letter: 'ن', name: 'Noon', translit: 'n', word: 'نجمة', wordTranslit: 'Najma', meaning: 'Star', emoji: '⭐' },
  { letter: 'ه', name: 'Ha', translit: 'h', word: 'هلال', wordTranslit: 'Hilal', meaning: 'Crescent', emoji: '🌙' },
  { letter: 'و', name: 'Wao', translit: 'w', word: 'وردة', wordTranslit: 'Warda', meaning: 'Rose', emoji: '🌹' },
  { letter: 'ي', name: 'Ya', translit: 'y', word: 'يد', wordTranslit: 'Yad', meaning: 'Hand', emoji: '✋' },
];

const COLORS = ['#f582ae', '#8bd3dd', '#f3a712', '#a2d729', '#7f7ffe', '#ff6b6b', '#39a0ed'];
const CONFETTI_COLORS = ['#f582ae', '#8bd3dd', '#f3a712', '#a2d729', '#7f7ffe', '#ff6b6b'];

const grid = document.getElementById('letter-grid');
const overlay = document.getElementById('overlay');
const closeBtn = document.getElementById('close-btn');
const bigLetter = document.getElementById('big-letter');
const letterName = document.getElementById('letter-name');
const letterTranslit = document.getElementById('letter-translit');
const hearBtn = document.getElementById('hear-btn');
const exampleArabic = document.getElementById('example-arabic');
const exampleTranslit = document.getElementById('example-translit');
const exampleMeaning = document.getElementById('example-meaning');
const exampleEmoji = document.getElementById('example-emoji');
const hearWordBtn = document.getElementById('hear-word-btn');
const canvas = document.getElementById('trace-canvas');
const ctx = canvas.getContext('2d');
const clearTraceBtn = document.getElementById('clear-trace-btn');
const doneTraceBtn = document.getElementById('done-trace-btn');
const confettiContainer = document.getElementById('confetti-container');
const modeToggleBtn = document.getElementById('mode-toggle-btn');
const gamePanel = document.getElementById('game-panel');
const gameTargetNameEl = document.getElementById('game-target-name');
const gameScoreEl = document.getElementById('game-score');
const gameReplayBtn = document.getElementById('game-replay-btn');

let currentEntry = null;
let gameMode = false;
let gameScore = 0;
let gameTarget = null;
let roundLocked = false;

function renderGrid() {
  LETTERS.forEach((entry, i) => {
    const btn = document.createElement('button');
    btn.className = 'letter-btn';
    btn.textContent = entry.letter;
    btn.style.background = COLORS[i % COLORS.length];
    btn.addEventListener('click', () => {
      if (gameMode) {
        handleGameGuess(entry, btn);
      } else {
        openDetail(entry);
      }
    });
    grid.appendChild(btn);
  });
}

function startGameRound() {
  let next = LETTERS[Math.floor(Math.random() * LETTERS.length)];
  if (gameTarget) {
    while (next.letter === gameTarget.letter) {
      next = LETTERS[Math.floor(Math.random() * LETTERS.length)];
    }
  }
  gameTarget = next;
  gameTargetNameEl.textContent = gameTarget.name;
  setTimeout(() => speak(gameTarget.sound || gameTarget.letter), 200);
}

function handleGameGuess(entry, btn) {
  if (roundLocked) return;
  if (entry.letter === gameTarget.letter) {
    roundLocked = true;
    btn.classList.add('correct-flash');
    gameScore++;
    gameScoreEl.textContent = gameScore;
    setTimeout(() => {
      btn.classList.remove('correct-flash');
      roundLocked = false;
      startGameRound();
    }, 500);
  } else {
    btn.classList.add('wrong-flash');
    setTimeout(() => btn.classList.remove('wrong-flash'), 400);
  }
}

function setGameMode(on) {
  gameMode = on;
  gamePanel.classList.toggle('hidden', !gameMode);
  modeToggleBtn.textContent = gameMode ? '📖 Back to Learning' : '🎮 Play Find-the-Letter';
  if (gameMode) {
    gameScore = 0;
    gameScoreEl.textContent = gameScore;
    gameTarget = null;
    roundLocked = false;
    startGameRound();
  }
}

function speak(text) {
  if (!('speechSynthesis' in window)) return;
  const synth = window.speechSynthesis;
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'ar-SA';
  utterance.rate = 0.75;
  const arabicVoice = synth.getVoices().find(v => v.lang && v.lang.startsWith('ar'));
  if (arabicVoice) utterance.voice = arabicVoice;

  synth.cancel();
  setTimeout(() => {
    synth.resume();
    synth.speak(utterance);
  }, 40);
}

function drawTraceGuide() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.save();
  ctx.globalAlpha = 0.18;
  ctx.font = "220px 'Traditional Arabic', 'Scheherazade New', 'Noto Naskh Arabic', serif";
  ctx.fillStyle = '#333';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(currentEntry.letter, canvas.width / 2, canvas.height / 2 + 10);
  ctx.restore();
}

function openDetail(entry) {
  currentEntry = entry;
  bigLetter.textContent = entry.letter;
  letterName.textContent = entry.name;
  letterTranslit.textContent = `"${entry.translit}"`;
  exampleArabic.textContent = entry.word;
  exampleTranslit.textContent = entry.wordTranslit;
  exampleMeaning.textContent = entry.meaning;
  exampleEmoji.textContent = entry.emoji;
  overlay.classList.remove('hidden');
  drawTraceGuide();
}

function closeDetail() {
  overlay.classList.add('hidden');
  window.speechSynthesis && window.speechSynthesis.cancel();
}

// --- Trace canvas drawing ---
let drawing = false;

function getPos(e) {
  const rect = canvas.getBoundingClientRect();
  const point = e.touches ? e.touches[0] : e;
  return {
    x: (point.clientX - rect.left) * (canvas.width / rect.width),
    y: (point.clientY - rect.top) * (canvas.height / rect.height),
  };
}

function startDraw(e) {
  drawing = true;
  const { x, y } = getPos(e);
  ctx.beginPath();
  ctx.moveTo(x, y);
  e.preventDefault();
}

function draw(e) {
  if (!drawing) return;
  const { x, y } = getPos(e);
  ctx.lineWidth = 6;
  ctx.lineCap = 'round';
  ctx.strokeStyle = '#5b3fd6';
  ctx.lineTo(x, y);
  ctx.stroke();
  e.preventDefault();
}

function stopDraw() {
  drawing = false;
}

canvas.addEventListener('mousedown', startDraw);
canvas.addEventListener('mousemove', draw);
window.addEventListener('mouseup', stopDraw);
canvas.addEventListener('touchstart', startDraw);
canvas.addEventListener('touchmove', draw);
canvas.addEventListener('touchend', stopDraw);

function launchConfetti() {
  for (let i = 0; i < 60; i++) {
    const piece = document.createElement('div');
    piece.className = 'confetti-piece';
    piece.style.left = Math.random() * 100 + 'vw';
    piece.style.background = CONFETTI_COLORS[Math.floor(Math.random() * CONFETTI_COLORS.length)];
    piece.style.animationDuration = 1.5 + Math.random() * 1.5 + 's';
    piece.style.transform = `rotate(${Math.random() * 360}deg)`;
    confettiContainer.appendChild(piece);
    setTimeout(() => piece.remove(), 3200);
  }
}

closeBtn.addEventListener('click', closeDetail);
overlay.addEventListener('click', (e) => {
  if (e.target === overlay) closeDetail();
});
hearBtn.addEventListener('click', () => speak(currentEntry.sound || currentEntry.letter));
hearWordBtn.addEventListener('click', () => speak(currentEntry.word));
clearTraceBtn.addEventListener('click', drawTraceGuide);
doneTraceBtn.addEventListener('click', launchConfetti);
modeToggleBtn.addEventListener('click', () => setGameMode(!gameMode));
gameReplayBtn.addEventListener('click', () => gameTarget && speak(gameTarget.sound || gameTarget.letter));

if ('speechSynthesis' in window) {
  window.speechSynthesis.onvoiceschanged = () => {};
}

function initWelcomeBack() {
  try {
    const lastVisited = localStorage.getItem('lastVisitedLevel');
    const progress = JSON.parse(localStorage.getItem('harakatProgress')) || {};
    const masteredCount = Object.values(progress).filter(p => p.fatha && p.kasra && p.damma).length;
    if (lastVisited === 'harakat' && masteredCount > 0) {
      const banner = document.getElementById('welcome-back-banner');
      const text = document.getElementById('welcome-back-text');
      text.textContent = `👋 Welcome back! You've mastered ${masteredCount}/28 vowel sounds — pick up where you left off.`;
      banner.classList.remove('hidden');
    }
  } catch (e) {
    // ignore malformed/unavailable storage
  }
  localStorage.setItem('lastVisitedLevel', 'letters');
}

renderGrid();
initWelcomeBack();
