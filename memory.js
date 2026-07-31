const LETTERS = [
  { letter: 'ا', name: 'Alif', word: 'أسد', emoji: '🦁' },
  { letter: 'ب', name: 'Ba', word: 'باب', emoji: '🚪' },
  { letter: 'ت', name: 'Ta', word: 'تفاح', emoji: '🍎' },
  { letter: 'ث', name: 'Tha', word: 'ثعلب', emoji: '🦊' },
  { letter: 'ج', name: 'Jeem', word: 'جمل', emoji: '🐫' },
  { letter: 'ح', name: 'Haa', word: 'حصان', emoji: '🐴' },
  { letter: 'خ', name: 'Khaa', word: 'خروف', emoji: '🐑' },
  { letter: 'د', name: 'Dal', word: 'ديك', emoji: '🐓' },
  { letter: 'ذ', name: 'Dhal', word: 'ذئب', emoji: '🐺' },
  { letter: 'ر', name: 'Ra', word: 'رمان', emoji: '🔴' },
  { letter: 'ز', name: 'Zaah', sound: 'زاي', word: 'زرافة', emoji: '🦒' },
  { letter: 'س', name: 'Seen', word: 'سمك', emoji: '🐟' },
  { letter: 'ش', name: 'Sheen', word: 'شمس', emoji: '☀️' },
  { letter: 'ص', name: 'Sad', word: 'صقر', emoji: '🦅' },
  { letter: 'ض', name: 'Dad', word: 'ضفدع', emoji: '🐸' },
  { letter: 'ط', name: 'Ta (heavy)', word: 'طائر', emoji: '🐦' },
  { letter: 'ظ', name: 'Za', word: 'ظرف', emoji: '✉️' },
  { letter: 'ع', name: 'Ayn', word: 'عين', emoji: '👁️' },
  { letter: 'غ', name: 'Ghayn', word: 'غزال', emoji: '🦌' },
  { letter: 'ف', name: 'Fa', word: 'فيل', emoji: '🐘' },
  { letter: 'ق', name: 'Qaf', word: 'قلم', emoji: '🖊️' },
  { letter: 'ك', name: 'Kaf', word: 'كتاب', emoji: '📖' },
  { letter: 'ل', name: 'Lam', word: 'ليمون', emoji: '🍋' },
  { letter: 'م', name: 'Meem', word: 'موز', emoji: '🍌' },
  { letter: 'ن', name: 'Noon', word: 'نجمة', emoji: '⭐' },
  { letter: 'ه', name: 'Ha', word: 'هلال', emoji: '🌙' },
  { letter: 'و', name: 'Wao', word: 'وردة', emoji: '🌹' },
  { letter: 'ي', name: 'Ya', word: 'يد', emoji: '✋' },
];

const PAIR_COUNT = 6;
const CARD_BACK_SYMBOLS = ['⭐', '🌙', '✨', '🌸'];

const grid = document.getElementById('memory-grid');
const pairsFoundEl = document.getElementById('pairs-found');
const pairsTotalEl = document.getElementById('pairs-total');
const triesEl = document.getElementById('tries-count');
const winBanner = document.getElementById('win-banner');
const newGameBtn = document.getElementById('new-game-btn');
const confettiContainer = document.getElementById('confetti-container');

const CONFETTI_COLORS = ['#f582ae', '#8bd3dd', '#f3a712', '#a2d729', '#7f7ffe', '#ff6b6b'];

let flippedCards = [];
let matchedCount = 0;
let tries = 0;
let inputLocked = false;

function shuffleArray(arr) {
  const shuffled = arr.slice();
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function speak(text, rate) {
  if (!('speechSynthesis' in window)) return;
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'ar-SA';
  utterance.rate = rate || 0.75;
  const arabicVoice = window.speechSynthesis.getVoices().find(v => v.lang && v.lang.startsWith('ar'));
  if (arabicVoice) utterance.voice = arabicVoice;
  window.speechSynthesis.speak(utterance);
}

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

function buildDeck() {
  const chosen = shuffleArray(LETTERS).slice(0, PAIR_COUNT);
  const cards = [];
  chosen.forEach((entry, i) => {
    cards.push({ pairId: i, type: 'letter', entry });
    cards.push({ pairId: i, type: 'emoji', entry });
  });
  return shuffleArray(cards);
}

function renderCard(card, index) {
  const btn = document.createElement('button');
  btn.className = 'memory-card';
  btn.dataset.index = index;

  const inner = document.createElement('div');
  inner.className = 'memory-card-inner';

  const back = document.createElement('div');
  back.className = 'memory-card-back';
  back.textContent = CARD_BACK_SYMBOLS[index % CARD_BACK_SYMBOLS.length];

  const face = document.createElement('div');
  face.className = 'memory-card-face';
  face.textContent = card.type === 'letter' ? card.entry.letter : card.entry.emoji;

  inner.appendChild(back);
  inner.appendChild(face);
  btn.appendChild(inner);

  btn.addEventListener('click', () => handleCardClick(card, btn));
  return btn;
}

let deck = [];

function startNewGame() {
  deck = buildDeck();
  matchedCount = 0;
  tries = 0;
  flippedCards = [];
  inputLocked = false;
  pairsFoundEl.textContent = '0';
  pairsTotalEl.textContent = PAIR_COUNT;
  triesEl.textContent = '0';
  winBanner.classList.add('hidden');

  grid.innerHTML = '';
  deck.forEach((card, index) => {
    grid.appendChild(renderCard(card, index));
  });
}

function handleCardClick(card, btn) {
  if (inputLocked) return;
  if (btn.classList.contains('flipped') || btn.classList.contains('matched')) return;

  btn.classList.add('flipped');
  flippedCards.push({ card, btn });

  if (flippedCards.length < 2) return;

  inputLocked = true;
  tries++;
  triesEl.textContent = tries;

  const [first, second] = flippedCards;
  if (first.card.pairId === second.card.pairId) {
    setTimeout(() => {
      first.btn.classList.add('matched');
      second.btn.classList.add('matched');
      matchedCount++;
      pairsFoundEl.textContent = matchedCount;
      speak(first.card.entry.sound || first.card.entry.letter);
      flippedCards = [];
      inputLocked = false;
      if (matchedCount === PAIR_COUNT) {
        setTimeout(() => {
          winBanner.classList.remove('hidden');
          launchConfetti();
        }, 300);
      }
    }, 500);
  } else {
    first.btn.classList.add('wobble');
    second.btn.classList.add('wobble');
    setTimeout(() => {
      first.btn.classList.remove('flipped', 'wobble');
      second.btn.classList.remove('flipped', 'wobble');
      flippedCards = [];
      inputLocked = false;
    }, 900);
  }
}

newGameBtn.addEventListener('click', startNewGame);

if ('speechSynthesis' in window) {
  window.speechSynthesis.onvoiceschanged = () => {};
}

startNewGame();
