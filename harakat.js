const LETTERS = [
  { letter: 'ا', name: 'Alif', translit: 'a' },
  { letter: 'ب', name: 'Ba', translit: 'b' },
  { letter: 'ت', name: 'Ta', translit: 't' },
  { letter: 'ث', name: 'Tha', translit: 'th' },
  { letter: 'ج', name: 'Jeem', translit: 'j' },
  { letter: 'ح', name: 'Haa', translit: 'h' },
  { letter: 'خ', name: 'Khaa', translit: 'kh' },
  { letter: 'د', name: 'Dal', translit: 'd' },
  { letter: 'ذ', name: 'Dhal', translit: 'dh' },
  { letter: 'ر', name: 'Ra', translit: 'r' },
  { letter: 'ز', name: 'Zaah', translit: 'z', sound: 'زاي' },
  { letter: 'س', name: 'Seen', translit: 's' },
  { letter: 'ش', name: 'Sheen', translit: 'sh' },
  { letter: 'ص', name: 'Sad', translit: 's' },
  { letter: 'ض', name: 'Dad', translit: 'd' },
  { letter: 'ط', name: 'Ta (heavy)', translit: 't' },
  { letter: 'ظ', name: 'Za', translit: 'z' },
  { letter: 'ع', name: 'Ayn', translit: "'" },
  { letter: 'غ', name: 'Ghayn', translit: 'gh' },
  { letter: 'ف', name: 'Fa', translit: 'f' },
  { letter: 'ق', name: 'Qaf', translit: 'q' },
  { letter: 'ك', name: 'Kaf', translit: 'k' },
  { letter: 'ل', name: 'Lam', translit: 'l' },
  { letter: 'م', name: 'Meem', translit: 'm' },
  { letter: 'ن', name: 'Noon', translit: 'n' },
  { letter: 'ه', name: 'Ha', translit: 'h' },
  { letter: 'و', name: 'Wao', translit: 'w' },
  { letter: 'ي', name: 'Ya', translit: 'y' },
];

const HARAKAT = [
  { key: 'fatha', mark: 'َ', name: 'Fatha', sound: 'a' },
  { key: 'kasra', mark: 'ِ', name: 'Kasra', sound: 'i' },
  { key: 'damma', mark: 'ُ', name: 'Damma', sound: 'u' },
];

const ENCOURAGEMENTS = [
  '🌟 Great listening!',
  '🎉 You got it!',
  '✨ Awesome job!',
  '👏 Nicely done!',
  '💫 Keep going, superstar!',
];

const COLORS = ['#f582ae', '#8bd3dd', '#f3a712', '#a2d729', '#7f7ffe', '#ff6b6b', '#39a0ed'];
const CONFETTI_COLORS = ['#f582ae', '#8bd3dd', '#f3a712', '#a2d729', '#7f7ffe', '#ff6b6b'];
const PROGRESS_KEY = 'harakatProgress';

const grid = document.getElementById('letter-grid');
const overlay = document.getElementById('overlay');
const closeBtn = document.getElementById('close-btn');
const letterName = document.getElementById('letter-name');
const letterTranslit = document.getElementById('letter-translit');
const hearBtn = document.getElementById('hear-btn');
const stage = document.getElementById('stage');
const stageLabel = document.getElementById('stage-label');
const vowelChipsEl = document.getElementById('vowel-chips');
const mascotBubble = document.getElementById('mascot-bubble');
const confettiContainer = document.getElementById('confetti-container');
const modeToggleBtn = document.getElementById('mode-toggle-btn');
const gamePanel = document.getElementById('game-panel');
const gameTargetLetterEl = document.getElementById('game-target-letter');
const gameScoreEl = document.getElementById('game-score');
const replayBtn = document.getElementById('replay-btn');
const answerChipsEl = document.getElementById('answer-chips');
const progressCountEl = document.getElementById('progress-count');
const resetBtn = document.getElementById('reset-btn');

let currentEntry = null;
let currentCombo = null;
let gameMode = false;
let gameScore = 0;
let gameTarget = null; // { letter, harakah }

function loadProgress() {
  try {
    return JSON.parse(localStorage.getItem(PROGRESS_KEY)) || {};
  } catch (e) {
    return {};
  }
}

function saveProgress(progress) {
  localStorage.setItem(PROGRESS_KEY, JSON.stringify(progress));
}

function isMastered(progress, letter) {
  const p = progress[letter];
  return !!(p && p.fatha && p.kasra && p.damma);
}

function countMastered(progress) {
  return LETTERS.filter(l => isMastered(progress, l.letter)).length;
}

function updateProgressBadge() {
  const progress = loadProgress();
  progressCountEl.textContent = countMastered(progress);
}

function shuffleArray(arr) {
  const shuffled = arr.slice();
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function renderGrid() {
  grid.innerHTML = '';
  const progress = loadProgress();
  LETTERS.forEach((entry, i) => {
    const btn = document.createElement('button');
    btn.className = 'letter-btn';
    btn.dataset.letter = entry.letter;
    btn.textContent = entry.letter;
    btn.style.background = COLORS[i % COLORS.length];
    if (isMastered(progress, entry.letter)) {
      const badge = document.createElement('span');
      badge.className = 'mastered-badge';
      badge.textContent = '⭐';
      btn.appendChild(badge);
    }
    btn.addEventListener('click', () => {
      if (gameMode) return;
      openDetail(entry);
    });
    grid.appendChild(btn);
  });
}

function markGridMastered(letter) {
  const btn = grid.querySelector(`.letter-btn[data-letter="${letter}"]`);
  if (btn && !btn.querySelector('.mastered-badge')) {
    const badge = document.createElement('span');
    badge.className = 'mastered-badge';
    badge.textContent = '⭐';
    btn.appendChild(badge);
  }
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

function setMascot(text) {
  mascotBubble.textContent = text;
}

// --- Explore mode ---

function renderVowelChips(entry, progress) {
  vowelChipsEl.innerHTML = '';
  HARAKAT.forEach(h => {
    const chip = document.createElement('button');
    chip.className = 'vowel-chip';
    const explored = progress[entry.letter] && progress[entry.letter][h.key];
    if (explored) chip.classList.add('explored');
    chip.innerHTML = `<div class="chip-combo">${entry.letter}${h.mark}</div><div class="chip-name">${h.name}${explored ? ' ✓' : ''}</div>`;
    chip.addEventListener('click', () => selectHarakah(entry, h, chip));
    vowelChipsEl.appendChild(chip);
  });
}

function selectHarakah(entry, h, chipEl) {
  [...vowelChipsEl.children].forEach(c => c.classList.remove('active'));
  chipEl.classList.add('active');

  currentCombo = entry.letter + h.mark;
  stage.textContent = currentCombo;
  stage.classList.remove('pop');
  void stage.offsetWidth;
  stage.classList.add('pop');
  stageLabel.textContent = `${h.name} — sounds like "${entry.translit}${h.sound}"`;
  speak(currentCombo);

  const progress = loadProgress();
  if (!progress[entry.letter]) progress[entry.letter] = {};
  const wasMastered = isMastered(progress, entry.letter);
  progress[entry.letter][h.key] = true;
  saveProgress(progress);

  chipEl.classList.add('explored');
  const nameDiv = chipEl.querySelector('.chip-name');
  if (nameDiv && !nameDiv.textContent.includes('✓')) nameDiv.textContent += ' ✓';

  const nowMastered = isMastered(progress, entry.letter);
  if (nowMastered && !wasMastered) {
    setMascot(`🎉 You mastered ${entry.name}! All three sounds learned!`);
    launchConfetti();
    markGridMastered(entry.letter);
    updateProgressBadge();
  } else {
    setMascot(ENCOURAGEMENTS[Math.floor(Math.random() * ENCOURAGEMENTS.length)]);
  }
}

function openDetail(entry) {
  currentEntry = entry;
  letterName.textContent = entry.name;
  letterTranslit.textContent = `"${entry.translit}"`;
  stage.textContent = entry.letter;
  stageLabel.textContent = 'Tap a mark below 👇';
  currentCombo = null;
  setMascot('⭐ Tap a vowel mark to hear the sound change!');
  const progress = loadProgress();
  renderVowelChips(entry, progress);
  overlay.classList.remove('hidden');
}

function closeDetail() {
  overlay.classList.add('hidden');
  window.speechSynthesis && window.speechSynthesis.cancel();
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

// --- Game mode: Sound Match ---

function startGameRound() {
  const letterEntry = LETTERS[Math.floor(Math.random() * LETTERS.length)];
  const harakah = HARAKAT[Math.floor(Math.random() * HARAKAT.length)];
  gameTarget = { letter: letterEntry, harakah };

  gameTargetLetterEl.textContent = letterEntry.letter;

  const options = shuffleArray(HARAKAT);
  answerChipsEl.innerHTML = '';
  options.forEach(h => {
    const btn = document.createElement('button');
    btn.className = 'answer-chip';
    btn.style.background = COLORS[Math.floor(Math.random() * COLORS.length)];
    btn.style.color = '#fff';
    btn.textContent = letterEntry.letter + h.mark;
    btn.addEventListener('click', () => handleGameGuess(h, btn));
    answerChipsEl.appendChild(btn);
  });

  setTimeout(() => speak(letterEntry.letter + harakah.mark), 200);
}

function handleGameGuess(h, btn) {
  if (h.key === gameTarget.harakah.key) {
    btn.classList.add('correct-flash');
    gameScore++;
    gameScoreEl.textContent = gameScore;

    const progress = loadProgress();
    const letter = gameTarget.letter.letter;
    if (!progress[letter]) progress[letter] = {};
    const wasMastered = isMastered(progress, letter);
    progress[letter][h.key] = true;
    saveProgress(progress);
    if (isMastered(progress, letter) && !wasMastered) {
      markGridMastered(letter);
      updateProgressBadge();
    }

    setTimeout(() => {
      btn.classList.remove('correct-flash');
      startGameRound();
    }, 700);
  } else {
    btn.classList.add('wrong-flash');
    setTimeout(() => btn.classList.remove('wrong-flash'), 400);
    setTimeout(() => speak(gameTarget.letter.letter + gameTarget.harakah.mark), 500);
  }
}

function setGameMode(on) {
  gameMode = on;
  gamePanel.classList.toggle('hidden', !gameMode);
  modeToggleBtn.textContent = gameMode ? '📖 Back to Learning' : '🎮 Play Sound Match';
  if (gameMode) {
    gameScore = 0;
    gameScoreEl.textContent = gameScore;
    startGameRound();
  }
}

closeBtn.addEventListener('click', closeDetail);
overlay.addEventListener('click', (e) => {
  if (e.target === overlay) closeDetail();
});
hearBtn.addEventListener('click', () => speak(currentCombo || (currentEntry && (currentEntry.sound || currentEntry.letter))));
replayBtn.addEventListener('click', () => {
  if (gameTarget) speak(gameTarget.letter.letter + gameTarget.harakah.mark);
});
modeToggleBtn.addEventListener('click', () => setGameMode(!gameMode));
let resetConfirmTimeout = null;
resetBtn.addEventListener('click', () => {
  if (resetBtn.classList.contains('confirming')) {
    clearTimeout(resetConfirmTimeout);
    resetBtn.classList.remove('confirming');
    resetBtn.textContent = '🔄 Reset Progress';
    localStorage.removeItem(PROGRESS_KEY);
    renderGrid();
    updateProgressBadge();
    if (gameMode) startGameRound();
  } else {
    resetBtn.classList.add('confirming');
    resetBtn.textContent = '⚠️ Tap again to confirm';
    resetConfirmTimeout = setTimeout(() => {
      resetBtn.classList.remove('confirming');
      resetBtn.textContent = '🔄 Reset Progress';
    }, 4000);
  }
});

if ('speechSynthesis' in window) {
  window.speechSynthesis.onvoiceschanged = () => {};
}

renderGrid();
updateProgressBadge();
localStorage.setItem('lastVisitedLevel', 'harakat');
