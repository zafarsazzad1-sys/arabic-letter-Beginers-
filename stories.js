const STORIES = [
  {
    id: 'yunus',
    name: 'Yunus (AS)',
    emoji: '🐋',
    slides: [
      { emoji: '🕌', text: 'Allah sent Prophet Yunus (AS) to his people, to invite them to worship only Allah.' },
      { emoji: '😔', text: 'His people would not listen. Yunus felt upset and left them, without waiting for Allah’s permission.' },
      { emoji: '⛈️', text: 'He got on a ship, but a huge storm hit. The sailors said someone had to go into the sea to save the ship.' },
      { emoji: '🌊', text: 'To make the ship lighter, the sailors picked names to see who must go into the sea. Every time, it was Yunus’s name — so he went into the sea.' },
      { emoji: '🐋', text: 'Allah sent a huge fish to swallow him whole, without hurting him at all.' },
      {
        emoji: '🤲',
        text: 'Inside the dark belly of the fish, Yunus realized his mistake and called out to Allah, asking forgiveness.',
        dua: {
          arabic: 'لَا إِلَٰهَ إِلَّا أَنْتَ سُبْحَانَكَ إِنِّي كُنْتُ مِنَ الظَّالِمِينَ',
          english: '"There is no god but You, glory be to You — I have indeed done wrong."',
        },
      },
      { emoji: '🏖️🌿', text: 'Allah forgave him and had the fish bring him safely to the shore, where a leafy plant grew to give him shade.' },
      { emoji: '🤲✨', text: 'Back home, his people saw the punishment coming and truly repented — and Allah forgave the whole town!' },
    ],
    quiz: [
      {
        question: 'Where did Yunus (AS) go after he left his people?',
        options: [
          { emoji: '🚢', label: 'A ship', correct: true },
          { emoji: '🏜️', label: 'A desert', correct: false },
          { emoji: '⛰️', label: 'A mountain', correct: false },
        ],
      },
      {
        question: 'What swallowed Yunus (AS) in the sea?',
        options: [
          { emoji: '🦈', label: 'A shark', correct: false },
          { emoji: '🐋', label: 'A huge fish', correct: true },
          { emoji: '🐙', label: 'An octopus', correct: false },
        ],
      },
      {
        question: 'What did Yunus (AS) do inside the fish?',
        options: [
          { emoji: '😡', label: 'Got angry', correct: false },
          { emoji: '😴', label: 'Fell asleep', correct: false },
          { emoji: '🤲', label: 'Asked Allah for forgiveness', correct: true },
        ],
      },
      {
        question: 'What happened to his people in the end?',
        options: [
          { emoji: '🤲', label: 'They repented and were forgiven', correct: true },
          { emoji: '🏃', label: 'They ran away', correct: false },
          { emoji: '😢', label: 'Nothing changed', correct: false },
        ],
      },
    ],
  },
  { id: 'ibrahim', name: 'Ibrahim (AS)', emoji: '🔥', comingSoon: true },
  { id: 'musa', name: 'Musa (AS)', emoji: '🌊', comingSoon: true },
  { id: 'nuh', name: 'Nuh (AS)', emoji: '🚢', comingSoon: true },
  { id: 'yusuf', name: 'Yusuf (AS)', emoji: '🌙', comingSoon: true },
];

const COMPLETED_KEY = 'storiesCompleted';
const CONFETTI_COLORS = ['#f582ae', '#8bd3dd', '#f3a712', '#a2d729', '#7f7ffe', '#ff6b6b'];

const selectGrid = document.getElementById('story-select-grid');
const storyView = document.getElementById('story-view');
const storyTitle = document.getElementById('story-title');
const storyListenBtn = document.getElementById('story-listen-btn');
const storySlidesEl = document.getElementById('story-slides');
const backBtn = document.getElementById('story-back-btn');
const quizQuestionEl = document.getElementById('story-quiz-question');
const quizOptionsEl = document.getElementById('story-quiz-options');
const completeBanner = document.getElementById('story-complete-banner');
const completeNameEl = document.getElementById('story-complete-name');
const confettiContainer = document.getElementById('confetti-container');

let currentStory = null;
let currentQuestionIndex = 0;

function getCompleted() {
  try {
    return JSON.parse(localStorage.getItem(COMPLETED_KEY)) || [];
  } catch (e) {
    return [];
  }
}

function markCompleted(id) {
  const completed = getCompleted();
  if (!completed.includes(id)) {
    completed.push(id);
    localStorage.setItem(COMPLETED_KEY, JSON.stringify(completed));
  }
}

function speak(text, lang, rate) {
  if (!('speechSynthesis' in window)) return;
  const synth = window.speechSynthesis;
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = lang;
  utterance.rate = rate || 0.85;
  const voice = synth.getVoices().find(v => v.lang && v.lang.startsWith(lang.split('-')[0]));
  if (voice) utterance.voice = voice;

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

function renderSelectGrid() {
  selectGrid.innerHTML = '';
  const completed = getCompleted();
  STORIES.forEach(story => {
    const card = document.createElement('button');
    card.className = 'story-card';
    if (story.comingSoon) {
      card.classList.add('locked');
      card.disabled = true;
    }
    if (completed.includes(story.id)) card.classList.add('completed');
    card.innerHTML = `<span class="story-card-emoji">${story.emoji}</span>${story.name}${story.comingSoon ? '<br><small>Coming soon</small>' : (completed.includes(story.id) ? ' ⭐' : '')}`;
    if (!story.comingSoon) {
      card.addEventListener('click', () => openStory(story));
    }
    selectGrid.appendChild(card);
  });
}

function openStory(story) {
  currentStory = story;
  currentQuestionIndex = 0;
  storyTitle.textContent = story.name;
  completeBanner.classList.add('hidden');

  storySlidesEl.innerHTML = '';
  story.slides.forEach(slide => {
    const slideEl = document.createElement('div');
    slideEl.className = 'story-slide';
    slideEl.innerHTML = `<div class="story-slide-emoji">${slide.emoji}</div><div class="story-slide-text">${slide.text}</div>`;
    storySlidesEl.appendChild(slideEl);

    if (slide.dua) {
      const duaBox = document.createElement('div');
      duaBox.className = 'story-dua-box';
      duaBox.innerHTML = `
        <div class="story-dua-arabic">${slide.dua.arabic}</div>
        <div>${slide.dua.english}</div>
        <br>
        <button class="story-dua-btn">🔊 Hear the dua in Arabic</button>
      `;
      duaBox.querySelector('.story-dua-btn').addEventListener('click', () => speak(slide.dua.arabic, 'ar-SA', 0.7));
      storySlidesEl.appendChild(duaBox);
    }
  });

  renderQuestion();

  document.getElementById('story-select-grid').classList.add('hidden');
  storyView.classList.remove('hidden');
  window.scrollTo(0, 0);
}

function closeStory() {
  storyView.classList.add('hidden');
  document.getElementById('story-select-grid').classList.remove('hidden');
  renderSelectGrid();
  window.speechSynthesis && window.speechSynthesis.cancel();
}

function renderQuestion() {
  if (currentQuestionIndex >= currentStory.quiz.length) {
    completeQuiz();
    return;
  }
  const q = currentStory.quiz[currentQuestionIndex];
  quizQuestionEl.textContent = q.question;
  quizOptionsEl.innerHTML = '';
  q.options.forEach(opt => {
    const btn = document.createElement('button');
    btn.className = 'story-quiz-option';
    btn.textContent = opt.emoji;
    btn.title = opt.label;
    btn.addEventListener('click', () => handleAnswer(opt, btn));
    quizOptionsEl.appendChild(btn);
  });
}

function handleAnswer(opt, btn) {
  if (opt.correct) {
    btn.classList.add('correct-flash');
    setTimeout(() => {
      currentQuestionIndex++;
      renderQuestion();
    }, 600);
  } else {
    btn.classList.add('wrong-flash');
    setTimeout(() => btn.classList.remove('wrong-flash'), 400);
  }
}

function completeQuiz() {
  quizQuestionEl.textContent = '';
  quizOptionsEl.innerHTML = '';
  markCompleted(currentStory.id);
  completeNameEl.textContent = currentStory.name;
  completeBanner.classList.remove('hidden');
  launchConfetti();
}

storyListenBtn.addEventListener('click', () => {
  if (!currentStory) return;
  const fullText = currentStory.slides.map(s => s.text).join(' ');
  speak(fullText, 'en-US', 0.95);
});

backBtn.addEventListener('click', closeStory);

if ('speechSynthesis' in window) {
  window.speechSynthesis.onvoiceschanged = () => {};
}

renderSelectGrid();
