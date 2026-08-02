const WORDS = [
  { word: 'بيت', letters: ['ب', 'ي', 'ت'], translit: 'Bayt', meaning: 'House', emoji: '🏠' },
  { word: 'قلم', letters: ['ق', 'ل', 'م'], translit: 'Qalam', meaning: 'Pen', emoji: '🖊️' },
  { word: 'قمر', letters: ['ق', 'م', 'ر'], translit: 'Qamar', meaning: 'Moon', emoji: '🌙' },
  { word: 'شمس', letters: ['ش', 'م', 'س'], translit: 'Shams', meaning: 'Sun', emoji: '☀️' },
  { word: 'سمك', letters: ['س', 'م', 'ك'], translit: 'Samak', meaning: 'Fish', emoji: '🐟' },
  { word: 'فيل', letters: ['ف', 'ي', 'ل'], translit: 'Feel', meaning: 'Elephant', emoji: '🐘' },
  { word: 'جمل', letters: ['ج', 'م', 'ل'], translit: 'Jamal', meaning: 'Camel', emoji: '🐫' },
  { word: 'ديك', letters: ['د', 'ي', 'ك'], translit: 'Deek', meaning: 'Rooster', emoji: '🐓' },
  { word: 'تمر', letters: ['ت', 'م', 'ر'], translit: 'Tamr', meaning: 'Dates', emoji: '🌴' },
  { word: 'ورد', letters: ['و', 'ر', 'د'], translit: 'Ward', meaning: 'Flower', emoji: '🌹' },
];

const COLORS = ['#f582ae', '#8bd3dd', '#f3a712', '#a2d729', '#7f7ffe', '#ff6b6b', '#39a0ed'];
const CONFETTI_COLORS = ['#f582ae', '#8bd3dd', '#f3a712', '#a2d729', '#7f7ffe', '#ff6b6b'];

const hintEmojiEl = document.getElementById('hint-emoji');
const hintTextEl = document.getElementById('hint-text');
const slotsEl = document.getElementById('connector-slots');
const trayEl = document.getElementById('connector-tray');
const wordsBuiltEl = document.getElementById('words-built');
const celebrateEl = document.getElementById('celebrate');
const celebrateWordEl = document.getElementById('celebrate-word');
const celebrateMeaningEl = document.getElementById('celebrate-meaning');
const hearWordBtn = document.getElementById('hear-word-btn');
const nextWordBtn = document.getElementById('next-word-btn');
const newWordBtn = document.getElementById('new-word-btn');
const confettiContainer = document.getElementById('confetti-container');

let currentWord = null;
let lastWordIndex = -1;
let filledCount = 0;
let wordsBuilt = 0;

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
  const synth = window.speechSynthesis;
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'ar-SA';
  utterance.rate = rate || 0.7;
  const arabicVoice = synth.getVoices().find(v => v.lang && v.lang.startsWith('ar'));
  if (arabicVoice) utterance.voice = arabicVoice;

  synth.cancel();
  setTimeout(() => {
    synth.resume();
    synth.speak(utterance);
  }, 40);
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

function pickWord() {
  let index = Math.floor(Math.random() * WORDS.length);
  if (WORDS.length > 1) {
    while (index === lastWordIndex) {
      index = Math.floor(Math.random() * WORDS.length);
    }
  }
  lastWordIndex = index;
  return WORDS[index];
}

function buildSlots(entry) {
  slotsEl.innerHTML = '';
  entry.letters.forEach((letter, i) => {
    const slot = document.createElement('div');
    slot.className = 'connector-slot';
    slot.dataset.index = i;
    slotsEl.appendChild(slot);
  });
}

function buildTray(entry) {
  trayEl.innerHTML = '';
  const tiles = shuffleArray(entry.letters.map((letter, i) => ({ letter, correctIndex: i })));
  tiles.forEach((tileData, colorIndex) => {
    const tile = document.createElement('div');
    tile.className = 'connector-tile';
    tile.textContent = tileData.letter;
    tile.style.background = COLORS[colorIndex % COLORS.length];
    attachDragHandlers(tile, tileData);
    trayEl.appendChild(tile);
  });
}

function startPuzzle() {
  currentWord = pickWord();
  filledCount = 0;
  hintEmojiEl.textContent = currentWord.emoji;
  hintTextEl.textContent = currentWord.meaning;
  celebrateEl.classList.add('hidden');
  buildSlots(currentWord);
  buildTray(currentWord);
}

function attachDragHandlers(tile, tileData) {
  let startX = 0;
  let startY = 0;
  let offsetX = 0;
  let offsetY = 0;

  function onPointerDown(e) {
    if (tile.classList.contains('placed')) return;
    const rect = tile.getBoundingClientRect();
    startX = rect.left;
    startY = rect.top;
    offsetX = e.clientX - rect.left;
    offsetY = e.clientY - rect.top;
    tile.style.position = 'fixed';
    tile.style.left = startX + 'px';
    tile.style.top = startY + 'px';
    tile.style.width = rect.width + 'px';
    tile.style.height = rect.height + 'px';
    tile.classList.add('dragging');
    tile.setPointerCapture(e.pointerId);
    tile.addEventListener('pointermove', onPointerMove);
    tile.addEventListener('pointerup', onPointerUp);
    tile.addEventListener('pointercancel', onPointerCancel);
  }

  function onPointerMove(e) {
    tile.style.left = (e.clientX - offsetX) + 'px';
    tile.style.top = (e.clientY - offsetY) + 'px';
  }

  function snapBack() {
    tile.style.left = startX + 'px';
    tile.style.top = startY + 'px';
    setTimeout(() => {
      tile.style.position = 'static';
      tile.style.left = '';
      tile.style.top = '';
      tile.style.width = '';
      tile.style.height = '';
    }, 260);
  }

  function cleanupListeners() {
    tile.removeEventListener('pointermove', onPointerMove);
    tile.removeEventListener('pointerup', onPointerUp);
    tile.removeEventListener('pointercancel', onPointerCancel);
    tile.classList.remove('dragging');
  }

  function onPointerCancel() {
    cleanupListeners();
    snapBack();
  }

  function onPointerUp(e) {
    cleanupListeners();

    tile.style.pointerEvents = 'none';
    const dropEl = document.elementFromPoint(e.clientX, e.clientY);
    tile.style.pointerEvents = '';

    const slotEl = dropEl && dropEl.closest && dropEl.closest('.connector-slot');
    if (slotEl && !slotEl.classList.contains('filled') && parseInt(slotEl.dataset.index) === tileData.correctIndex) {
      slotEl.classList.add('filled');
      slotEl.textContent = tileData.letter;
      tile.classList.add('placed');
      filledCount++;
      if (filledCount === currentWord.letters.length) {
        setTimeout(completePuzzle, 300);
      }
      return;
    }

    snapBack();
  }

  tile.addEventListener('pointerdown', onPointerDown);
}

function completePuzzle() {
  wordsBuilt++;
  wordsBuiltEl.textContent = wordsBuilt;
  celebrateWordEl.textContent = currentWord.word;
  celebrateMeaningEl.textContent = `${currentWord.translit} — ${currentWord.meaning} ${currentWord.emoji}`;
  celebrateEl.classList.remove('hidden');
  launchConfetti();
  speak(currentWord.word);
}

hearWordBtn.addEventListener('click', () => currentWord && speak(currentWord.word));
nextWordBtn.addEventListener('click', startPuzzle);
newWordBtn.addEventListener('click', startPuzzle);

if ('speechSynthesis' in window) {
  window.speechSynthesis.onvoiceschanged = () => {};
}

startPuzzle();
