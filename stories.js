const STORIES = [
  {
    id: 'adam',
    name: 'Adam (AS)',
    emoji: '🌍',
    slides: [
      { emoji: '🌍', text: 'Allah decided to create the first human, Adam (AS), from clay, to live on Earth.' },
      { emoji: '📚', text: 'Allah taught Adam (AS) the names of many things — special knowledge that not even the angels had.' },
      { emoji: '🙇', text: 'Allah commanded the angels to bow to Adam (AS) out of respect. All of them obeyed, except Iblis (Shaytan), who refused out of pride.' },
      { emoji: '🌳', text: 'Allah placed Adam (AS) and his wife Hawwa in a beautiful garden, telling them they could eat anything except the fruit of one tree.' },
      { emoji: '😈', text: 'Iblis, jealous and cast out, whispered to Adam (AS) and Hawwa, tempting them to eat from that one tree.' },
      { emoji: '😔', text: 'Adam (AS) and Hawwa forgot Allah’s warning and ate from the tree. They immediately felt ashamed of their mistake.' },
      {
        emoji: '🤲',
        text: 'Adam (AS) and Hawwa turned straight to Allah, taking full responsibility and asking for forgiveness — the very first dua of repentance in human history.',
        dua: {
          arabic: 'رَبَّنَا ظَلَمْنَا أَنفُسَنَا وَإِن لَّمْ تَغْفِرْ لَنَا وَتَرْحَمْنَا لَنَكُونَنَّ مِنَ الْخَاسِرِينَ',
          english: '"Our Lord, we have wronged ourselves, and if You do not forgive us and have mercy upon us, we will surely be among the losers."',
          reference: 'Quran 7:23 — said by Adam (AS) and Hawwa after their mistake',
          audio: 'audio/adam-dua-7-23.mp3',
        },
      },
      { emoji: '💚', text: 'Allah forgave them out of His mercy, and they were sent to live on Earth — starting the story of all humankind.' },
    ],
    quiz: [
      {
        question: 'What did Allah teach Adam (AS)?',
        options: [
          { emoji: '📚', label: 'The names of many things', correct: true },
          { emoji: '🎨', label: 'How to paint', correct: false },
          { emoji: '🏊', label: 'How to swim', correct: false },
        ],
      },
      {
        question: 'Who refused to bow to Adam (AS)?',
        options: [
          { emoji: '😈', label: 'Iblis (Shaytan)', correct: true },
          { emoji: '👼', label: 'All the angels', correct: false },
          { emoji: '🐦', label: 'The birds', correct: false },
        ],
      },
      {
        question: 'What did Adam (AS) and Hawwa do wrong?',
        options: [
          { emoji: '🌳', label: 'Ate from the forbidden tree', correct: true },
          { emoji: '😴', label: 'Fell asleep too long', correct: false },
          { emoji: '🏃', label: 'Ran away from the garden', correct: false },
        ],
      },
      {
        question: 'What did Adam (AS) do after making the mistake?',
        options: [
          { emoji: '🤲', label: 'Turned to Allah and asked forgiveness', correct: true },
          { emoji: '😡', label: 'Blamed Hawwa', correct: false },
          { emoji: '🙈', label: 'Hid from Allah', correct: false },
        ],
      },
    ],
  },
  {
    id: 'nuh',
    name: 'Nuh (AS)',
    emoji: '🚢',
    slides: [
      { emoji: '🕌', text: 'Prophet Nuh (AS) was sent by Allah to his people, asking them to stop worshipping idols and worship only Allah.' },
      { emoji: '⏳', text: 'Nuh (AS) patiently invited his people for nearly 950 years, but almost no one believed him.' },
      { emoji: '🚢', text: 'Allah commanded Nuh (AS) to build a large ship, even though there was no sea nearby. His people laughed at him for building a ship on dry land.' },
      {
        emoji: '🤲',
        text: 'After so many years of patience, Nuh (AS) turned to Allah, asking forgiveness for himself, his parents, and all believers.',
        dua: {
          arabic: 'رَبِّ اغْفِرْ لِي وَلِوَالِدَيَّ وَلِمَن دَخَلَ بَيْتِيَ مُؤْمِنًا وَلِلْمُؤْمِنِينَ وَالْمُؤْمِنَاتِ',
          english: '"My Lord, forgive me and my parents and whoever enters my house a believer, and the believing men and believing women."',
          reference: 'Quran 71:28 — said by Nuh (AS) near the end of his mission',
          audio: 'audio/nuh-dua-71-28.mp3',
        },
      },
      { emoji: '🐘🐦', text: 'Allah told Nuh (AS) to bring a pair of every kind of animal onto the ship, along with his family and the believers.' },
      { emoji: '🌧️🌊', text: 'A huge flood came and covered everything, but the ship kept everyone safe on board.' },
      { emoji: '🏔️', text: 'When the flood ended, the ship came to rest on a mountain, and the water dried up.' },
      { emoji: '✨', text: 'Nuh (AS) and the believers stepped onto dry land safely, thankful that Allah had saved them.' },
    ],
    quiz: [
      {
        question: 'How long did Nuh (AS) invite his people to believe?',
        options: [
          { emoji: '⏳', label: 'Almost 950 years', correct: true },
          { emoji: '📅', label: 'One week', correct: false },
          { emoji: '🗓️', label: 'One year', correct: false },
        ],
      },
      {
        question: 'What did Allah tell Nuh (AS) to build?',
        options: [
          { emoji: '🚢', label: 'A large ship', correct: true },
          { emoji: '🏠', label: 'A house', correct: false },
          { emoji: '🕌', label: 'A mosque', correct: false },
        ],
      },
      {
        question: 'Who did Nuh (AS) bring onto the ship?',
        options: [
          { emoji: '🐘', label: 'A pair of every animal, his family, and believers', correct: true },
          { emoji: '💰', label: 'Gold and treasure', correct: false },
          { emoji: '🎈', label: 'Toys and games', correct: false },
        ],
      },
      {
        question: 'What did Nuh (AS) ask Allah for in his dua?',
        options: [
          { emoji: '🤲', label: 'Forgiveness for himself, his parents, and believers', correct: true },
          { emoji: '😡', label: 'To punish everyone', correct: false },
          { emoji: '🏆', label: 'To become king', correct: false },
        ],
      },
    ],
  },
  {
    id: 'ibrahim',
    name: 'Ibrahim (AS)',
    emoji: '🔥',
    slides: [
      { emoji: '🗿', text: 'Prophet Ibrahim (AS) grew up seeing his people worship idols made of stone, that could not see, hear, or help anyone.' },
      { emoji: '🤔', text: 'Ibrahim (AS) did not believe in these idols. He knew only Allah deserved to be worshipped.' },
      { emoji: '🔨', text: 'One day, while everyone was away, Ibrahim (AS) broke all the idols in the temple — except the biggest one.' },
      { emoji: '😠', text: 'When his people came back and saw this, they were furious and asked who had done it.' },
      { emoji: '😏', text: 'Ibrahim (AS) said, "Ask the biggest one — maybe he did it!" His people knew the idols could never speak, but they were too proud to admit he was right.' },
      {
        emoji: '🔥',
        text: 'Angry, they built a huge fire and threw Ibrahim (AS) into it. As the flames rose around him, Ibrahim (AS) called out to Allah.',
        dua: {
          arabic: 'حَسْبُنَا اللَّهُ وَنِعْمَ الْوَكِيلُ',
          english: '"Allah is sufficient for us, and He is the best Disposer of affairs."',
          reference: 'Quran 3:173 — said by Ibrahim (AS) in the fire (Sahih al-Bukhari 4563)',
          audio: 'audio/ibrahim-dua-3-173.mp3',
        },
      },
      { emoji: '❄️🔥', text: 'Allah commanded the fire: "O fire, be cool and safe for Ibrahim (AS)!" And it obeyed at once.' },
      { emoji: '😇✨', text: 'Ibrahim (AS) walked out of the fire completely unharmed, and everyone was amazed at Allah’s power.' },
    ],
    quiz: [
      {
        question: 'What did Ibrahim (AS) break?',
        options: [
          { emoji: '🗿', label: 'The idols', correct: true },
          { emoji: '🪟', label: 'Windows', correct: false },
          { emoji: '🏺', label: 'Pots', correct: false },
        ],
      },
      {
        question: 'Why were his people angry?',
        options: [
          { emoji: '😡', label: 'Because he broke their idols', correct: true },
          { emoji: '😴', label: 'Because he was late', correct: false },
          { emoji: '🍽️', label: 'Because he ate their food', correct: false },
        ],
      },
      {
        question: 'What happened when they threw him in the fire?',
        options: [
          { emoji: '❄️', label: 'The fire became cool and safe', correct: true },
          { emoji: '💨', label: 'He disappeared', correct: false },
          { emoji: '😢', label: 'He got hurt', correct: false },
        ],
      },
      {
        question: 'What did Ibrahim (AS) say as he was thrown into the fire?',
        options: [
          { emoji: '🤲', label: '"Allah is sufficient for us"', correct: true },
          { emoji: '😢', label: '"Please don\'t hurt me"', correct: false },
          { emoji: '🤐', label: 'Nothing, he stayed silent', correct: false },
        ],
      },
    ],
  },
  {
    id: 'yusuf',
    name: 'Yusuf (AS)',
    emoji: '🌟',
    slides: [
      { emoji: '🌟', text: 'Yusuf (AS) had a dream: eleven stars, the sun, and the moon all bowing down to him. His father Yaqub (AS) told him not to share this dream with his brothers.' },
      { emoji: '😠', text: 'Yusuf (AS)’s brothers were jealous of him, and they threw him into a deep well, then told their father a wolf had eaten him.' },
      { emoji: '🐫', text: 'Some travelers found Yusuf (AS) in the well and took him to Egypt, where he was sold as a servant.' },
      { emoji: '⛓️', text: 'Later, Yusuf (AS) was unjustly put in prison, where he kindly helped other prisoners understand their dreams.' },
      { emoji: '👑', text: 'Years later, the King of Egypt had a strange dream that no one could explain. Yusuf (AS) was remembered and gave the true meaning, warning of years of plenty followed by years of famine.' },
      { emoji: '🏛️', text: 'The King was so impressed that he freed Yusuf (AS) and placed him in charge of Egypt’s food and resources.' },
      { emoji: '🤝', text: 'When famine came, Yusuf (AS)’s brothers travelled to Egypt for food, not recognizing him. Yusuf (AS) forgave them, and his whole family came to live with him in Egypt.' },
      {
        emoji: '🙏',
        text: 'At the peak of his success — reunited with his family, powerful and respected — Yusuf (AS) turned to Allah in gratitude and dua.',
        dua: {
          arabic: 'فَاطِرَ السَّمَاوَاتِ وَالْأَرْضِ أَنتَ وَلِيِّي فِي الدُّنْيَا وَالْآخِرَةِ ۖ تَوَفَّنِي مُسْلِمًا وَأَلْحِقْنِي بِالصَّالِحِينَ',
          english: '"Creator of the heavens and earth, You are my protector in this world and the Hereafter. Cause me to die a Muslim and join me with the righteous."',
          reference: 'Quran 12:101 — said by Yusuf (AS) at the peak of his success',
          audio: 'audio/yusuf-dua-12-101.mp3',
        },
      },
    ],
    quiz: [
      {
        question: 'What did Yusuf (AS) dream about?',
        options: [
          { emoji: '⭐', label: 'Eleven stars, the sun, and the moon bowing to him', correct: true },
          { emoji: '🐍', label: 'A giant snake', correct: false },
          { emoji: '🌈', label: 'A rainbow', correct: false },
        ],
      },
      {
        question: 'What did his brothers do to him?',
        options: [
          { emoji: '🕳️', label: 'Threw him into a well', correct: true },
          { emoji: '🎁', label: 'Gave him a gift', correct: false },
          { emoji: '🏠', label: 'Sent him to school', correct: false },
        ],
      },
      {
        question: 'How did Yusuf (AS) help in prison?',
        options: [
          { emoji: '💭', label: 'He explained people’s dreams', correct: true },
          { emoji: '🍞', label: 'He baked bread', correct: false },
          { emoji: '🎵', label: 'He sang songs', correct: false },
        ],
      },
      {
        question: 'What did Yusuf (AS) do when he became powerful?',
        options: [
          { emoji: '🤗', label: 'Forgave his brothers and thanked Allah', correct: true },
          { emoji: '😡', label: 'Punished his brothers', correct: false },
          { emoji: '🏃', label: 'Ran away', correct: false },
        ],
      },
    ],
  },
  {
    id: 'musa',
    name: 'Musa (AS)',
    emoji: '🐑',
    slides: [
      { emoji: '🏃', text: 'Prophet Musa (AS) had to flee from Egypt all alone, leaving his home behind, after Pharaoh’s people wanted to punish him.' },
      { emoji: '🏜️', text: 'Musa (AS) walked for days through the desert, tired, hungry, and with nothing with him, until he reached a place called Madyan.' },
      { emoji: '💧', text: 'At a well, he saw many shepherds watering their animals, and two women waiting aside, unable to reach the water with their flock.' },
      { emoji: '🐑', text: 'Musa (AS) kindly helped the two women water their sheep, then went to rest in the shade of a tree, exhausted and with nothing to eat.' },
      {
        emoji: '🤲',
        text: 'Alone and with nothing, Musa (AS) turned to Allah and made a humble dua, saying he was in need of whatever good Allah would give him.',
        dua: {
          arabic: 'رَبِّ إِنِّي لِمَا أَنزَلْتَ إِلَيَّ مِنْ خَيْرٍ فَقِيرٌ',
          english: '"My Lord, indeed I am, for whatever good You would send down to me, in need."',
          reference: 'Quran 28:24 — said by Musa (AS) resting in Madyan',
          audio: 'audio/musa-dua-28-24.mp3',
        },
      },
      { emoji: '🚶‍♀️', text: 'Soon after, one of the two women came back and invited him to meet her father, who was kind and elderly.' },
      { emoji: '🤝', text: 'The old man was thankful for Musa (AS)’s help, and gave him a home, food, and work to do.' },
      { emoji: '✨', text: 'Allah answered Musa (AS)’s dua and provided for him exactly when he had nothing — Allah always provides for those who trust Him.' },
    ],
    quiz: [
      {
        question: 'Why did Musa (AS) leave Egypt?',
        options: [
          { emoji: '😨', label: 'He had to flee for safety', correct: true },
          { emoji: '🎉', label: 'He went on a trip', correct: false },
          { emoji: '📚', label: 'He went to school', correct: false },
        ],
      },
      {
        question: 'What did Musa (AS) do for the two women at the well?',
        options: [
          { emoji: '💧', label: 'Helped water their sheep', correct: true },
          { emoji: '🍞', label: 'Gave them food', correct: false },
          { emoji: '🏠', label: 'Built them a house', correct: false },
        ],
      },
      {
        question: 'How did Musa (AS) feel when he made his dua?',
        options: [
          { emoji: '😔', label: 'Tired, hungry, and alone', correct: true },
          { emoji: '😄', label: 'Happy and full', correct: false },
          { emoji: '😴', label: 'Sleepy and bored', correct: false },
        ],
      },
      {
        question: 'What did Musa (AS) say in his dua?',
        options: [
          { emoji: '🤲', label: '"My Lord, I am in need of whatever good You give me"', correct: true },
          { emoji: '😡', label: '"Why is this happening to me?"', correct: false },
          { emoji: '🤐', label: 'He said nothing', correct: false },
        ],
      },
    ],
  },
  {
    id: 'yunus',
    name: 'Yunus (AS)',
    emoji: '🐋',
    slides: [
      { emoji: '🕌', text: 'Allah sent Prophet Yunus (AS) to his people, to invite them to worship only Allah.' },
      { emoji: '😔', text: 'His people would not listen. Yunus (AS) felt upset and left them, without waiting for Allah’s permission.' },
      { emoji: '⛈️', text: 'He got on a ship, but a huge storm hit. The sailors said someone had to go into the sea to save the ship.' },
      { emoji: '🌊', text: 'To make the ship lighter, the sailors picked names to see who must go into the sea. Every time, the name chosen was Yunus (AS) — so he went into the sea.' },
      { emoji: '🐋', text: 'Allah sent a huge fish to swallow him whole, without hurting him at all.' },
      {
        emoji: '🤲',
        text: 'Inside the dark belly of the fish, Yunus (AS) realized his mistake and called out to Allah, asking forgiveness.',
        dua: {
          arabic: 'لَا إِلَٰهَ إِلَّا أَنْتَ سُبْحَانَكَ إِنِّي كُنْتُ مِنَ الظَّالِمِينَ',
          english: '"There is no god but You, glory be to You — I have indeed done wrong."',
          reference: 'Quran 21:87',
          audio: 'audio/yunus-dua-21-87.mp3',
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
        question: 'What happened to his people after Yunus (AS) was saved?',
        options: [
          { emoji: '🤲', label: 'They repented and were forgiven', correct: true },
          { emoji: '🏃', label: 'They ran away', correct: false },
          { emoji: '🏚️', label: 'Their town was destroyed', correct: false },
          { emoji: '😢', label: 'Nothing changed', correct: false },
        ],
      },
    ],
  },
  {
    id: 'isa',
    name: 'Isa (AS)',
    emoji: '🍽️',
    slides: [
      { emoji: '🕊️', text: 'Prophet Isa (AS) was sent by Allah to the Children of Israel, and Allah gave him amazing miracles, like healing the sick with Allah’s permission.' },
      { emoji: '👥', text: 'Isa (AS) had a group of loyal followers who believed in him, called the Hawariyyun (his disciples).' },
      { emoji: '🍽️', text: 'One day, his disciples asked him, "Can your Lord send down a table of food from the sky for us?"' },
      { emoji: '🤔', text: 'Isa (AS) told them to be mindful of Allah, but they said they wanted to eat from it, feel their hearts at peace, and know for sure that Isa (AS) spoke the truth.' },
      {
        emoji: '🤲',
        text: 'So Isa (AS) turned to Allah and made a dua, asking Him to send down a table of food from heaven as a special sign and celebration.',
        dua: {
          arabic: 'اللَّهُمَّ رَبَّنَا أَنزِلْ عَلَيْنَا مَائِدَةً مِّنَ السَّمَاءِ تَكُونُ لَنَا عِيدًا لِّأَوَّلِنَا وَآخِرِنَا وَآيَةً مِّنكَ ۖ وَارْزُقْنَا وَأَنتَ خَيْرُ الرَّازِقِينَ',
          english: '"O Allah, our Lord, send down to us a table spread from the heaven to be for us a festival for the first of us and the last of us, and a sign from You. And provide for us, and You are the best of providers."',
          reference: 'Quran 5:114 — said by Isa (AS) for his disciples',
          audio: 'audio/isa-dua-5-114.mp3',
        },
      },
      { emoji: '✨', text: 'Allah accepted the dua and sent down the table, but warned that anyone who still disbelieved after seeing this sign would be punished severely.' },
      { emoji: '🙏', text: 'This story teaches us that Allah answers sincere dua, and that seeing Allah’s signs should make our faith stronger.' },
    ],
    quiz: [
      {
        question: 'What miracles did Allah give Isa (AS)?',
        options: [
          { emoji: '🩺', label: 'Healing the sick', correct: true },
          { emoji: '🎨', label: 'Painting pictures', correct: false },
          { emoji: '🏃', label: 'Running very fast', correct: false },
        ],
      },
      {
        question: 'What did the disciples ask Isa (AS) for?',
        options: [
          { emoji: '🍽️', label: 'A table of food from the sky', correct: true },
          { emoji: '💰', label: 'More money', correct: false },
          { emoji: '🏠', label: 'A bigger house', correct: false },
        ],
      },
      {
        question: 'What did Isa (AS) tell them first?',
        options: [
          { emoji: '🤲', label: 'To be mindful of Allah', correct: true },
          { emoji: '😡', label: 'To stop asking questions', correct: false },
          { emoji: '😴', label: 'To go to sleep', correct: false },
        ],
      },
      {
        question: 'What did Isa (AS) ask Allah for in his dua?',
        options: [
          { emoji: '🍽️', label: 'To send down a table of food as a sign', correct: true },
          { emoji: '💰', label: 'Riches and gold', correct: false },
          { emoji: '🏆', label: 'To become king', correct: false },
        ],
      },
    ],
  },
  {
    id: 'knowledge',
    name: 'Prophet Muhammad (SAW)',
    emoji: '📖',
    slides: [
      { emoji: '📖', text: 'This is a special dua that Allah taught directly to Prophet Muhammad (SAW) himself, in the Quran, Surah Ta-Ha.' },
      { emoji: '✨', text: 'While the Quran was being revealed to him, Allah told the Prophet (SAW) not to rush, and to always ask for one thing: more knowledge.' },
      { emoji: '🌟', text: 'This dua is very special — it is one of only two places in the whole Quran where Allah tells the Prophet (SAW) to ask for more of something.' },
      {
        emoji: '🤲',
        text: 'The Prophet (SAW) was taught to say this dua, asking Allah to keep increasing his knowledge.',
        dua: {
          arabic: 'وَقُل رَّبِّ زِدْنِي عِلْمًا',
          english: '"And say, \'My Lord, increase me in knowledge.\'"',
          reference: 'Quran 20:114 — taught to Prophet Muhammad (SAW)',
          audio: 'audio/knowledge-dua-20-114.mp3',
        },
      },
      { emoji: '📚', text: 'Many students say this dua before they start learning or memorizing Quran, asking Allah to help their knowledge grow.' },
      { emoji: '💡', text: 'It reminds us that true knowledge comes from Allah, and we should always ask Him for more of it, no matter how much we already know.' },
      { emoji: '🕌✨', text: 'Every time you sit down to learn, you can say this dua too, just like the Prophet (SAW) was taught.' },
    ],
    quiz: [
      {
        question: 'Who was this dua taught to?',
        options: [
          { emoji: '🕋', label: 'Prophet Muhammad (SAW)', correct: true },
          { emoji: '🐋', label: 'Prophet Yunus (AS)', correct: false },
          { emoji: '🔥', label: 'Prophet Ibrahim (AS)', correct: false },
        ],
      },
      {
        question: 'What does this dua ask Allah for?',
        options: [
          { emoji: '📚', label: 'More knowledge', correct: true },
          { emoji: '💰', label: 'More money', correct: false },
          { emoji: '🍎', label: 'More food', correct: false },
        ],
      },
      {
        question: 'When can you say this dua?',
        options: [
          { emoji: '📖', label: 'Before learning or studying', correct: true },
          { emoji: '😴', label: 'Only before sleeping', correct: false },
          { emoji: '🎮', label: 'Only while playing', correct: false },
        ],
      },
      {
        question: 'What did Allah tell the Prophet (SAW) to say?',
        options: [
          { emoji: '🤲', label: '"My Lord, increase me in knowledge"', correct: true },
          { emoji: '😢', label: '"My Lord, forgive me"', correct: false },
          { emoji: '🤐', label: 'Nothing', correct: false },
        ],
      },
    ],
  },
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
let quizLocked = false;

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

let activeSpeakBtn = null;
let activeSpeakLabel = '';

function resetActiveSpeakBtn() {
  if (activeSpeakBtn) {
    activeSpeakBtn.textContent = activeSpeakLabel;
    activeSpeakBtn = null;
  }
}

function speak(text, lang, rate, btn) {
  if (!('speechSynthesis' in window)) return;
  const synth = window.speechSynthesis;
  resetActiveSpeakBtn();

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = lang;
  utterance.rate = rate || 0.85;
  const voice = synth.getVoices().find(v => v.lang && v.lang.startsWith(lang.split('-')[0]));
  if (voice) utterance.voice = voice;

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

function handleSpeakClick(btn, getText, lang, rate) {
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
  if (text) speak(text, lang, rate, btn);
}

let duaAudioEl = null;
let activeDuaBtn = null;

const DUA_BTN_LABEL = '🔊 Hear the dua (recited)';

function playDua(dua, btn) {
  if (!dua.audio) {
    handleSpeakClick(btn, () => dua.arabic, 'ar-SA', 0.7);
    return;
  }

  if (activeDuaBtn === btn && duaAudioEl) {
    if (duaAudioEl.paused) {
      duaAudioEl.play();
      btn.textContent = '⏸️ Pause';
    } else {
      duaAudioEl.pause();
      btn.textContent = '▶️ Resume';
    }
    return;
  }

  if (activeDuaBtn && activeDuaBtn !== btn) {
    activeDuaBtn.textContent = DUA_BTN_LABEL;
  }

  if (!duaAudioEl) {
    duaAudioEl = new Audio();
  }
  activeDuaBtn = btn;
  const reset = () => {
    btn.textContent = DUA_BTN_LABEL;
    if (activeDuaBtn === btn) activeDuaBtn = null;
  };
  duaAudioEl.onended = reset;
  duaAudioEl.onerror = () => {
    reset();
    speak(dua.arabic, 'ar-SA', 0.7);
  };
  duaAudioEl.src = dua.audio;
  btn.textContent = '⏸️ Pause';
  duaAudioEl.play().catch(() => {
    reset();
    speak(dua.arabic, 'ar-SA', 0.7);
  });
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
  if (duaAudioEl) duaAudioEl.pause();
  activeDuaBtn = null;
  resetActiveSpeakBtn();
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
        ${slide.dua.reference ? `<div class="story-dua-reference">${slide.dua.reference}</div>` : ''}
        <br>
        <button class="story-dua-btn">🔊 Hear the dua (recited)</button>
      `;
      const duaBtn = duaBox.querySelector('.story-dua-btn');
      duaBtn.addEventListener('click', () => playDua(slide.dua, duaBtn));
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
  resetActiveSpeakBtn();
  if (duaAudioEl) duaAudioEl.pause();
  activeDuaBtn = null;
}

function renderQuestion() {
  quizLocked = false;
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
    btn.innerHTML = `<div class="story-quiz-option-emoji">${opt.emoji}</div><div class="story-quiz-option-label">${opt.label}</div>`;
    btn.addEventListener('click', () => handleAnswer(opt, btn));
    quizOptionsEl.appendChild(btn);
  });
}

function handleAnswer(opt, btn) {
  if (quizLocked) return;
  if (opt.correct) {
    quizLocked = true;
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
  handleSpeakClick(storyListenBtn, () => currentStory.slides.map(s => s.text).join(' '), 'en-US', 0.95);
});

backBtn.addEventListener('click', closeStory);

if ('speechSynthesis' in window) {
  window.speechSynthesis.onvoiceschanged = () => {};
}

renderSelectGrid();
