const MIRACLES = [
  {
    id: 'adam',
    name: 'Adam (AS)',
    emoji: '🏺✨',
    text: 'Allah created him from clay — without a mother or father.',
    reference: 'Quran 3:59, 15:26, 38:71-72',
  },
  {
    id: 'nuh',
    name: 'Nuh (AS)',
    emoji: '🚢🌊',
    text: 'His ark saved him, his family, and every kind of animal from a huge flood.',
    reference: 'Quran 11:37-44',
  },
  {
    id: 'ibrahim',
    name: 'Ibrahim (AS)',
    emoji: '🔥❄️',
    text: 'He was thrown into a blazing fire, but Allah made it cool and safe for him.',
    reference: 'Quran 21:69',
  },
  {
    id: 'yusuf',
    name: 'Yusuf (AS)',
    emoji: '👕👁️',
    text: 'His shirt, placed on his father’s face, brought back his father’s eyesight.',
    reference: 'Quran 12:96',
  },
  {
    id: 'musa',
    name: 'Musa (AS)',
    emoji: '🌊🪄',
    text: 'He struck the sea with his staff, and it split into two, making a dry path.',
    reference: 'Quran 26:63',
  },
  {
    id: 'yunus',
    name: 'Yunus (AS)',
    emoji: '🐋',
    text: 'He was swallowed whole by a huge fish — and came out unharmed.',
    reference: 'Quran 37:142',
  },
  {
    id: 'isa',
    name: 'Isa (AS)',
    emoji: '🐦🏺',
    text: 'He shaped a bird from clay, and by Allah’s permission, it came alive.',
    reference: 'Quran 3:49',
  },
  {
    id: 'muhammad',
    name: 'Prophet Muhammad (SAW)',
    emoji: '🌗🌓',
    text: 'The moon split into two, right before everyone’s eyes.',
    reference: 'Quran 54:1',
  },
];

const CONFETTI_COLORS = ['#f582ae', '#8bd3dd', '#f3a712', '#a2d729', '#7f7ffe', '#ff6b6b'];

const roundNumEl = document.getElementById('round-num');
const roundTotalEl = document.getElementById('round-total');
const scoreEl = document.getElementById('score');
const miracleEmojiEl = document.getElementById('miracle-emoji');
const miracleTextEl = document.getElementById('miracle-text');
const optionsEl = document.getElementById('miracle-options');
const replayBtn = document.getElementById('replay-btn');
const restartBtn = document.getElementById('restart-btn');
const completeBanner = document.getElementById('miracle-complete-banner');
const playAgainBtn = document.getElementById('play-again-btn');
const confettiContainer = document.getElementById('confetti-container');

let roundOrder = [];
let roundIndex = 0;
let score = 0;
let currentMiracle = null;

function shuffleArray(arr) {
  const shuffled = arr.slice();
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function speak(text, lang, rate) {
  if (!('speechSynthesis' in window)) return;
  const synth = window.speechSynthesis;
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = lang;
  utterance.rate = rate || 0.9;
  const voice = synth.getVoices().find(v => v.lang && v.lang.startsWith(lang.split('-')[0]));
  if (voice) utterance.voice = voice;

  synth.cancel();
  setTimeout(() => {
    synth.resume();
    synth.speak(utterance);
  }, 40);
}

function launchConfetti() {
  for (let i = 0; i < 50; i++) {
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

function startGame() {
  roundOrder = shuffleArray(MIRACLES);
  roundIndex = 0;
  score = 0;
  scoreEl.textContent = '0';
  roundTotalEl.textContent = MIRACLES.length;
  completeBanner.classList.add('hidden');
  showRound();
}

function showRound() {
  if (roundIndex >= roundOrder.length) {
    completeGame();
    return;
  }
  currentMiracle = roundOrder[roundIndex];
  roundNumEl.textContent = roundIndex + 1;
  miracleEmojiEl.textContent = currentMiracle.emoji;
  miracleTextEl.textContent = currentMiracle.text;

  const distractors = shuffleArray(MIRACLES.filter(m => m.id !== currentMiracle.id)).slice(0, 2);
  const options = shuffleArray([currentMiracle, ...distractors]);

  optionsEl.innerHTML = '';
  options.forEach(opt => {
    const btn = document.createElement('button');
    btn.className = 'miracle-option';
    btn.textContent = opt.name;
    btn.addEventListener('click', () => handleAnswer(opt, btn));
    optionsEl.appendChild(btn);
  });

  setTimeout(() => speak(currentMiracle.text, 'en-US', 0.95), 200);
}

function handleAnswer(opt, btn) {
  if (opt.id === currentMiracle.id) {
    btn.classList.add('correct-flash');
    score++;
    scoreEl.textContent = score;
    launchConfetti();
    setTimeout(() => {
      roundIndex++;
      showRound();
    }, 900);
  } else {
    btn.classList.add('wrong-flash');
    setTimeout(() => btn.classList.remove('wrong-flash'), 400);
  }
}

function completeGame() {
  miracleEmojiEl.textContent = '🏆';
  miracleTextEl.textContent = `You got ${score} out of ${MIRACLES.length} correct!`;
  optionsEl.innerHTML = '';
  completeBanner.classList.remove('hidden');
  launchConfetti();
}

replayBtn.addEventListener('click', () => currentMiracle && speak(currentMiracle.text, 'en-US', 0.95));
restartBtn.addEventListener('click', startGame);
playAgainBtn.addEventListener('click', startGame);

if ('speechSynthesis' in window) {
  window.speechSynthesis.onvoiceschanged = () => {};
}

startGame();
