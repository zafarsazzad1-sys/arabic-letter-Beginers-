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

const MAX_BUBBLES = 6;
const SPAWN_INTERVAL_MS = 1600;
const MIN_DURATION = 7;
const MAX_DURATION = 11;
const COLORS = ['#f582ae', '#8bd3dd', '#f3a712', '#a2d729', '#7f7ffe', '#ff6b6b', '#39a0ed'];
const CONFETTI_COLORS = ['#f582ae', '#8bd3dd', '#f3a712', '#a2d729', '#7f7ffe', '#ff6b6b'];

const pond = document.getElementById('bubble-pond');
const targetNameEl = document.getElementById('target-name');
const scoreEl = document.getElementById('score');
const replayBtn = document.getElementById('replay-btn');
const restartBtn = document.getElementById('restart-btn');
const confettiContainer = document.getElementById('confetti-container');

let activeBubbles = [];
let currentTarget = null;
let score = 0;
let spawnTimer = null;

let activeSpeakBtn = null;
let activeSpeakLabel = '';

function resetActiveSpeakBtn() {
  if (activeSpeakBtn) {
    activeSpeakBtn.textContent = activeSpeakLabel;
    activeSpeakBtn = null;
  }
}

function speak(text, rate, btn) {
  if (!('speechSynthesis' in window)) return;
  const synth = window.speechSynthesis;
  resetActiveSpeakBtn();

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'ar-SA';
  utterance.rate = rate || 0.75;
  const arabicVoice = synth.getVoices().find(v => v.lang && v.lang.startsWith('ar'));
  if (arabicVoice) utterance.voice = arabicVoice;

  if (btn) {
    activeSpeakBtn = btn;
    activeSpeakLabel = btn.dataset.origLabel || btn.textContent;
    btn.dataset.origLabel = activeSpeakLabel;
    utterance.onend = () => {
      if (activeSpeakBtn === btn) {
        btn.textContent = activeSpeakLabel;
        activeSpeakBtn = null;
      }
    };
    btn.textContent = '⏸️ Pause';
  }

  synth.cancel();
  setTimeout(() => {
    synth.resume();
    synth.speak(utterance);
  }, 40);
}

function handleSpeakClick(btn, getText, rate) {
  if (!('speechSynthesis' in window)) return;
  const synth = window.speechSynthesis;
  if (activeSpeakBtn === btn && (synth.speaking || synth.paused)) {
    if (synth.paused) {
      synth.resume();
      btn.textContent = '⏸️ Pause';
    } else {
      synth.pause();
      btn.textContent = '▶️ Resume';
    }
    return;
  }
  const text = getText();
  if (text) speak(text, rate, btn);
}

function launchConfetti(count) {
  for (let i = 0; i < count; i++) {
    const piece = document.createElement('div');
    piece.className = 'confetti-piece';
    piece.style.left = Math.random() * 100 + 'vw';
    piece.style.background = CONFETTI_COLORS[Math.floor(Math.random() * CONFETTI_COLORS.length)];
    piece.style.animationDuration = 1.2 + Math.random() * 1.2 + 's';
    piece.style.transform = `rotate(${Math.random() * 360}deg)`;
    confettiContainer.appendChild(piece);
    setTimeout(() => piece.remove(), 2600);
  }
}

function spawnBubble() {
  if (activeBubbles.length >= MAX_BUBBLES) return;

  const entry = LETTERS[Math.floor(Math.random() * LETTERS.length)];
  const bubble = document.createElement('button');
  bubble.className = 'bubble';
  bubble.textContent = entry.letter;
  bubble.style.left = (5 + Math.random() * 78) + '%';
  bubble.style.background = COLORS[Math.floor(Math.random() * COLORS.length)];
  const duration = MIN_DURATION + Math.random() * (MAX_DURATION - MIN_DURATION);
  bubble.style.animationDuration = duration + 's';

  const record = { entry, el: bubble };

  bubble.addEventListener('click', () => handleBubbleClick(record));
  bubble.addEventListener('animationend', () => removeBubble(record));

  pond.appendChild(bubble);
  activeBubbles.push(record);
}

function removeBubble(record) {
  record.el.remove();
  activeBubbles = activeBubbles.filter(b => b !== record);
  if (currentTarget && !activeBubbles.some(b => b.entry.letter === currentTarget.letter)) {
    pickNewTarget();
  }
}

function pickNewTarget() {
  if (activeBubbles.length === 0) {
    currentTarget = null;
    targetNameEl.textContent = '...';
    return;
  }
  const distinctLetters = [...new Set(activeBubbles.map(b => b.entry.letter))];
  const letter = distinctLetters[Math.floor(Math.random() * distinctLetters.length)];
  currentTarget = LETTERS.find(l => l.letter === letter);
  targetNameEl.textContent = currentTarget.name;
  setTimeout(() => speak(currentTarget.sound || currentTarget.letter, null, replayBtn), 150);
}

function handleBubbleClick(record) {
  if (!currentTarget || record.el.classList.contains('popping')) return;

  if (record.entry.letter === currentTarget.letter) {
    record.el.classList.add('popping');
    score++;
    scoreEl.textContent = score;
    speak(currentTarget.sound || currentTarget.letter, null, replayBtn);
    launchConfetti(18);
    activeBubbles = activeBubbles.filter(b => b !== record);
    setTimeout(() => record.el.remove(), 300);
    pickNewTarget();
  } else {
    record.el.classList.add('wrong-flash');
    setTimeout(() => record.el.classList.remove('wrong-flash'), 400);
  }
}

function startSpawning() {
  if (spawnTimer) clearInterval(spawnTimer);
  spawnTimer = setInterval(() => {
    spawnBubble();
    if (!currentTarget && activeBubbles.length > 0) pickNewTarget();
  }, SPAWN_INTERVAL_MS);
}

function restart() {
  resetActiveSpeakBtn();
  activeBubbles.forEach(b => b.el.remove());
  activeBubbles = [];
  currentTarget = null;
  score = 0;
  scoreEl.textContent = '0';
  targetNameEl.textContent = '...';
  for (let i = 0; i < 4; i++) spawnBubble();
  pickNewTarget();
  startSpawning();
}

replayBtn.addEventListener('click', () => {
  if (currentTarget) handleSpeakClick(replayBtn, () => currentTarget.sound || currentTarget.letter);
});
restartBtn.addEventListener('click', restart);

if ('speechSynthesis' in window) {
  window.speechSynthesis.onvoiceschanged = () => {};
}

restart();
