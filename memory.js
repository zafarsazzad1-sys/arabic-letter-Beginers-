const LETTERS = [
  { letter: 'ا', name: 'Alif' },
  { letter: 'ب', name: 'Ba' },
  { letter: 'ت', name: 'Ta' },
  { letter: 'ث', name: 'Tha' },
  { letter: 'ج', name: 'Jeem' },
  { letter: 'ح', name: 'Haa' },
  { letter: 'خ', name: 'Khaa' },
  { letter: 'د', name: 'Dal' },
  { letter: 'ذ', name: 'Dhal' },
  { letter: 'ر', name: 'Ra' },
  { letter: 'ز', name: 'Zaah', sound: 'زاي' },
  { letter: 'س', name: 'Seen' },
  { letter: 'ش', name: 'Sheen' },
  { letter: 'ص', name: 'Sad' },
  { letter: 'ض', name: 'Dad' },
  { letter: 'ط', name: 'Ta (heavy)' },
  { letter: 'ظ', name: 'Za' },
  { letter: 'ع', name: 'Ayn' },
  { letter: 'غ', name: 'Ghayn' },
  { letter: 'ف', name: 'Fa' },
  { letter: 'ق', name: 'Qaf' },
  { letter: 'ك', name: 'Kaf' },
  { letter: 'ل', name: 'Lam' },
  { letter: 'م', name: 'Meem' },
  { letter: 'ن', name: 'Noon' },
  { letter: 'ه', name: 'Ha' },
  { letter: 'و', name: 'Wao' },
  { letter: 'ي', name: 'Ya' },
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
    cards.push({ pairId: i, entry });
    cards.push({ pairId: i, entry });
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
  face.textContent = card.entry.letter;

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
