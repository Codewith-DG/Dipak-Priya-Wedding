/* =========================================================================
   0. BILINGUAL DICTIONARY (ENGLISH & MARATHI)
   ========================================================================= */
let currentLang = 'en';
let lastRsvpSubmission = null;

const i18n = {
  en: {
    pageTitle: 'Shubh Vivaah — Dipak & Priya Wedding Invitation',
    bookTitle: 'SHUBH VIVAAH',
    bookSubtitle: 'DIPAK & PRIYA • A WEDDING INVITATION',
    bookMonogram: 'D & P',
    tapPrompt: 'TAP THE BOOK TO OPEN',
    togetherWith: 'TOGETHER WITH THEIR FAMILIES',
    groomName: 'Dipak',
    sonOf: 'SON OF',
    groomParents: 'Mr. Asaram Ghige & Mrs. Indu Ghige',
    brideName: 'Priya',
    daughterOf: 'DAUGHTER OF',
    brideParents: 'Mr. Raju Pendu & Mrs. Laxmi Pendu',
    inviteLine: 'Together with their families, Dipak & Priya request the pleasure of your company at their wedding.',
    scrollLabel: 'SCROLL',
    saveDateEyebrow: 'SAVE THE DATE',
    pullToReveal: 'Pull to Reveal',
    weddingDay: 'MONDAY',
    weddingDateNum: '14',
    weddingMonth: 'December',
    weddingYear: '2026',
    weddingMuhurat: 'Pheras at 12:21 pm • Atithi Banquet Hall',
    dragHint: 'Drag or tap the tassel down',
    revealedPill: 'See you on Monday, 14 December 2026',
    cdDays: 'DAYS',
    cdHrs: 'HRS',
    cdMin: 'MIN',
    cdSec: 'SEC',
    addToCalendar: 'ADD TO CALENDAR',
    celebrationsEyebrow: 'CELEBRATIONS',
    festivitiesHeading: 'Wedding Festivities',
    swipePrompt: 'Swipe cards to explore each ceremony',
    dressCodeLabel: 'DRESS CODE',
    receptionEyebrow: 'YOU ARE INVITED TO THE',
    receptionHeading: 'Reception Ceremony',
    receptionDate: 'Monday, 14 December 2026',
    receptionTime: '3:00 pm onwards',
    receptionLine: 'Dinner & Capturing Memories',
    receptionVenue: 'Atithi Banquet Hall, Alandi',
    receptionTag: 'BLESSINGS & CELEBRATION',
    locationEyebrow: 'LOCATION',
    howToReach: 'How to Reach',
    venueName: 'Atithi Banquet Hall',
    tapToOpenMaps: 'Tap to open in Maps',
    venueAddress: 'Indrayani Tower, Near Nagar Parishad, PMT Bus Stop, Devachi, Alandi-412105, Maharashtra',
    getDirections: 'GET DIRECTIONS',
    copyAddress: 'COPY ADDRESS',
    copiedButton: 'COPIED!',
    copiedToast: 'Copied! Address saved to clipboard',
    calendarToast: 'Calendar invite downloaded',
    rsvpEyebrow: 'KINDLY RESPOND',
    rsvpHeading: 'Will You Join Us?',
    guestNameLabel: 'Guest Name',
    guestNamePlaceholder: 'Enter your full name',
    guestWhatsappLabel: 'Guest WhatsApp Number (Optional — for your invite copy)',
    responseLabel: 'Response',
    acceptOption: 'Joyfully Accepts',
    declineOption: 'Regretfully Declines',
    guestsLabel: 'Guests',
    guestOptions: ['1 Guest', '2 Guests', '3 Guests', '4 Guests'],
    blessingsLabel: 'Blessings for the Couple (Optional)',
    blessingsPlaceholder: 'Warm wishes for Dipak & Priya...',
    sendRsvpBtn: 'SEND RSVP',
    thankYouHeading: 'Thank You!',
    updateResponseBtn: 'Update Response',
    closingLine: 'We can’t wait to celebrate with you',
    closingFamilies: 'With love, The Ghige & Pendu Families',
    langToggleBtn: 'मराठी',
    langSwitchedToast: 'Switched to English'
  },
  mr: {
    pageTitle: 'शुभ विवाह — दिपक आणि प्रिया विवाह निमंत्रण',
    bookTitle: 'शुभ विवाह',
    bookSubtitle: 'दिपक आणि प्रिया • विवाह निमंत्रण पत्रिका',
    bookMonogram: 'दी & प्रि',
    tapPrompt: 'पत्रिका उघडण्यासाठी स्पर्श करा',
    togetherWith: 'सस्नेह निमंत्रण',
    groomName: 'दिपक',
    sonOf: 'चिरंजीव',
    groomParents: 'श्री. आसाराम घिगे आणि सौ. इंदू घिगे यांचे सुपुत्र',
    brideName: 'प्रिया',
    daughterOf: 'चि. सौ. कां.',
    brideParents: 'श्री. राजू पेंडू आणि सौ. लक्ष्मी पेंडू यांची सुकन्या',
    inviteLine: 'आपल्या कुटुंबीयांसह, दिपक आणि प्रिया आपल्या शुभविवाहाप्रसंगी आपणास सहकुटुंब सहपरिवार आग्रहाचे निमंत्रण देत आहेत.',
    scrollLabel: 'खाली पहा',
    saveDateEyebrow: 'शुभ मुहूर्त',
    pullToReveal: 'तारीख पाहण्यासाठी ओढा',
    weddingDay: 'सोमवार',
    weddingDateNum: '१४',
    weddingMonth: 'डिसेंबर',
    weddingYear: '२०२६',
    weddingMuhurat: 'शुभ मुहूर्त दुपारी १२:२१ वा. • अतिथी बँक्वेट हॉल',
    dragHint: 'गोंडा खाली ओढा किंवा स्पर्श करा',
    revealedPill: 'सोमवार, १४ डिसेंबर २०२६ रोजी नक्की या!',
    cdDays: 'दिवस',
    cdHrs: 'तास',
    cdMin: 'मिनिटे',
    cdSec: 'सेकंद',
    addToCalendar: 'कॅलेंडरमध्ये जोडा',
    celebrationsEyebrow: 'विवाह सोहळे',
    ChapterBegins: 'एका नव्या प्रवासाची सुरुवात ✨',
    savedatebanner: 'अविस्मरणीय दिवस',
    festivitiesHeading: 'मंगलमय कार्यक्रम',
    swipePrompt: 'प्रत्येक सोहळा पाहण्यासाठी कार्ड सरकवा',
    dressCodeLabel: 'पोशाख (ड्रेस कोड)',
    receptionEyebrow: 'आपणास आग्रहाचे निमंत्रण',
    receptionHeading: 'स्वागत समारंभ',
    receptionDate: 'सोमवार, १४ डिसेंबर २०२६',
    receptionTime: 'सायंकाळी ३:०० वाजल्यापासून पुढे',
    receptionLine: 'स्नेहभोजन आणि अविस्मरणीय क्षण',
    receptionVenue: 'अतिथी बँक्वेट हॉल, आळंदी',
    receptionTag: 'शुभाशीर्वाद आणि आनंदोत्सव',
    locationEyebrow: 'विवाह स्थळ',
    howToReach: 'येथे कसे पोहोचाल',
    venueName: 'अतिथी बँक्वेट हॉल',
    tapToOpenMaps: 'नकाशा उघडण्यासाठी स्पर्श करा',
    venueAddress: 'इंद्रायणी टॉवर, नगर परिषदेजवळ, पी.एम.टी. बस स्टॉप, देवाची आळंदी-४१२१०५, महाराष्ट्र',
    getDirections: 'दिशा पहा (मॅप्स)',
    copyAddress: 'पत्ता कॉपी करा',
    copiedButton: 'कॉपी केले!',
    copiedToast: 'पत्ता क्लिपबोर्डवर कॉपी केला आहे!',
    calendarToast: 'कॅलेंडर निमंत्रण डाउनलोड झाले',
    rsvpEyebrow: 'कृपया आपला प्रतिसाद कळवा',
    rsvpHeading: 'आपण सोहळ्याला येणार का?',
    guestNameLabel: 'पाहुण्यांचे पूर्ण नाव',
    guestNamePlaceholder: 'आपले पूर्ण नाव लिहा',
    guestWhatsappLabel: 'पाहुण्यांचा व्हॉट्सॲप नंबर (ऐच्छिक)',
    responseLabel: 'प्रतिसाद',
    acceptOption: 'आनंदाने उपस्थित राहू',
    declineOption: 'दिलगिरीसह अनुपस्थित',
    guestsLabel: 'पाहुण्यांची संख्या',
    guestOptions: ['१ पाहुणा', '२ पाहुणे', '३ पाहुणे', '४ पाहुणे'],
    blessingsLabel: 'नवदांपत्यासाठी शुभेच्छा (ऐच्छिक)',
    blessingsPlaceholder: 'दिपक आणि प्रियासाठी शुभाशीर्वाद...',
    sendRsvpBtn: 'प्रतिसाद पाठवा',
    thankYouHeading: 'मनःपूर्वक धन्यवाद!',
    updateResponseBtn: 'प्रतिसाद बदला',
    closingLine: 'आपल्या आगमनाची आम्ही आतुरतेने वाट पाहत आहोत',
    closingFamilies: 'आपले नम्र, घिगे आणि पेंडू परिवार',
    langToggleBtn: 'English',
    langSwitchedToast: 'मराठी भाषा निवडली आहे'
  }
};

function formatRsvpMessage(data) {
  if (!data) return '';
  if (currentLang === 'mr') {
    const guestLabel = i18n.mr.guestOptions[parseInt(data.guests, 10) - 1] || data.guests;
    if (data.status === 'attending') {
      return `${data.name}, दिपक आणि प्रिया यांच्या विवाह सोहळ्यासाठी ${guestLabel} यांच्या उपस्थितीची नोंद झाली आहे. शुभ मुहूर्त सोमवार, १४ डिसेंबर २०२६ रोजी दु. १२:२१ वा. • अतिथी बँक्वेट हॉल, देवाची आळंदी.`;
    }
    return `आपला निरोप कळवल्याबद्दल धन्यवाद, ${data.name}. सोमवार, १४ डिसेंबर २०२६ रोजी होणाऱ्या सोहळ्यात आपली उणीव नक्कीच भासेल!`;
  } else {
    const guestText = data.guests === '1' ? '1 Guest' : `${data.guests} Guests`;
    if (data.status === 'attending') {
      return `We have reserved seats for ${guestText} under ${data.name} for Dipak & Priya's wedding on Monday, 14 December 2026 (Muhurat/Pheras at 12:21 pm, Reception 3:00 pm onwards) at Atithi Banquet Hall, Alandi.`;
    }
    return `Thank you for letting us know, ${data.name}. We will miss you on Monday, 14 December 2026 at Atithi Banquet Hall, Alandi!`;
  }
}

function applyLanguage(lang) {
  currentLang = lang;
  const t = i18n[lang];
  document.documentElement.lang = lang;
  document.title = t.pageTitle;

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.dataset.i18n;
    if (t[key] !== undefined) {
      el.textContent = t[key];
    }
  });

  scrollStatusPill.textContent = isScrollRevealed ? t.revealedPill : t.dragHint;

  document.getElementById('rsvp-name').placeholder = t.guestNamePlaceholder;
  document.getElementById('rsvp-note').placeholder = t.blessingsPlaceholder;

  const statusSelect = document.getElementById('rsvp-status');
  statusSelect.options[0].textContent = t.acceptOption;
  statusSelect.options[1].textContent = t.declineOption;

  const guestsSelect = document.getElementById('rsvp-guests');
  t.guestOptions.forEach((label, idx) => {
    if (guestsSelect.options[idx]) {
      guestsSelect.options[idx].textContent = label;
    }
  });

  if (lastRsvpSubmission) {
    document.getElementById('rsvp-confirm-text').textContent = formatRsvpMessage(lastRsvpSubmission);
  }

  document.getElementById('lang-toggle-label').textContent = t.langToggleBtn;
  renderFestivities();
}

document.getElementById('lang-toggle-btn').addEventListener('click', () => {
  const nextLang = currentLang === 'en' ? 'mr' : 'en';
  applyLanguage(nextLang);
  showToast(i18n[nextLang].langSwitchedToast);
});

/* =========================================================================
   1. BACKGROUND SONG ("TERE LIYE MANDIR ME JAU") + VIDEO SOUND COORDINATION
   ========================================================================= */
const bgAudio = document.getElementById('bg-song-audio');
const inviteVideo = document.getElementById('invite-video');
let isMusicPlaying = false;

function syncMusicButton(playing) {
  isMusicPlaying = playing;
  const btn = document.getElementById('music-toggle-btn');
  if (btn) {
    btn.classList.toggle('eq-playing', playing);
  }
}

const bgMusicPlayer = {
  start() {
    if (!bgAudio) return;
    bgAudio.volume = 0.45;
    bgAudio.play()
      .then(() => syncMusicButton(true))
      .catch(() => {
        syncMusicButton(false);
        showToast('Could not play tere-liye-mandir-me-jau.mp3');
      });
  },
  stop() {
    if (!bgAudio) return;
    bgAudio.pause();
    syncMusicButton(false);
  },
  toggle() {
    if (isMusicPlaying || (bgAudio && !bgAudio.paused)) {
      this.stop();
    } else {
      this.start();
    }
  }
};

if (bgAudio) {
  bgAudio.addEventListener('play', () => syncMusicButton(true));
  bgAudio.addEventListener('pause', () => syncMusicButton(false));
  bgAudio.addEventListener('error', () => {
    syncMusicButton(false);
    showToast('Audio file not found: tere-liye-mandir-me-jau.mp3');
  });
}

if (inviteVideo) {
  inviteVideo.addEventListener('play', () => {
    if (isMusicPlaying || (bgAudio && !bgAudio.paused)) {
      bgMusicPlayer.stop();
    }
  });
}

/* =========================================================================
   2. ROSE PETALS & GOLD CONFETTI PARTICLE ENGINE
   ========================================================================= */
const petalCanvas = document.getElementById('petal-canvas');
const pCtx = petalCanvas.getContext('2d');
let particles = [];

function resizePetalCanvas() {
  petalCanvas.width = window.innerWidth;
  petalCanvas.height = window.innerHeight;
}
window.addEventListener('resize', resizePetalCanvas);
resizePetalCanvas();

function spawnParticle(burst = false, originX = null, originY = null) {
  const isGold = burst && Math.random() > 0.55;
  const colors = isGold
    ? ['#d4af37', '#f3e0b5', '#b88b32']
    : ['#e8a5a0', '#f4c7c3', '#c96b70', '#f9dfdc'];
  return {
    x: originX !== null ? originX : Math.random() * petalCanvas.width,
    y: originY !== null ? originY : -20,
    vx: burst ? (Math.random() - 0.5) * 9 : (Math.random() - 0.5) * 1.1,
    vy: burst ? (Math.random() - 0.7) * 8 - 1 : 0.75 + Math.random() * 1.1,
    size: isGold ? 4 + Math.random() * 4 : 6 + Math.random() * 6,
    angle: Math.random() * Math.PI * 2,
    spin: (Math.random() - 0.5) * 0.08,
    color: colors[Math.floor(Math.random() * colors.length)],
    isGold,
    life: burst ? 110 : 999
  };
}

function triggerBurst(x, y, count = 48) {
  for (let i = 0; i < count; i++) {
    particles.push(spawnParticle(true, x, y));
  }
}

let ambientPetalsActive = false;
function animatePetals() {
  pCtx.clearRect(0, 0, petalCanvas.width, petalCanvas.height);

  if (ambientPetalsActive && particles.length < 26 && Math.random() < 0.08) {
    particles.push(spawnParticle(false));
  }

  for (let i = particles.length - 1; i >= 0; i--) {
    const p = particles[i];
    p.x += p.vx + Math.sin(p.angle) * 0.45;
    p.y += p.vy;
    if (p.life < 500) {
      p.vy += 0.16;
      p.vx *= 0.97;
      p.life--;
    }
    p.angle += p.spin;

    pCtx.save();
    pCtx.translate(p.x, p.y);
    pCtx.rotate(p.angle);
    pCtx.fillStyle = p.color;
    pCtx.globalAlpha = p.life < 25 ? p.life / 25 : 0.85;

    if (p.isGold) {
      pCtx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.65);
    } else {
      pCtx.beginPath();
      pCtx.ellipse(0, 0, p.size, p.size * 0.58, 0, 0, Math.PI * 2);
      pCtx.fill();
    }
    pCtx.restore();

    if (p.y > petalCanvas.height + 30 || p.life <= 0) {
      particles.splice(i, 1);
    }
  }
  requestAnimationFrame(animatePetals);
}

/* =========================================================================
   3. OPENING 3D BOOK & SMOOTH ANCHOR SCROLLING
   ========================================================================= */
const bookOverlay = document.getElementById('book-overlay');
const book3d = document.getElementById('book-3d');
const inviteMain = document.getElementById('invite-main');
let isBookOpened = false;

function openWeddingBook() {
  if (isBookOpened) return;
  isBookOpened = true;

  book3d.classList.add('swing-open');
  bgMusicPlayer.start();
  triggerBurst(window.innerWidth / 2, window.innerHeight / 2, 36);

  setTimeout(() => {
    bookOverlay.classList.add('opened');
    inviteMain.classList.remove('opacity-0');
    ambientPetalsActive = true;
    revealHeroTypography();
  }, 650);
}

bookOverlay.addEventListener('click', openWeddingBook);
bookOverlay.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' || e.key === ' ') openWeddingBook();
});

document.getElementById('music-toggle-btn').addEventListener('click', (e) => {
  e.stopPropagation();
  bgMusicPlayer.toggle();
});

function revealHeroTypography() {
  document.querySelectorAll('.blur-reveal').forEach((el) => {
    const delay = parseInt(el.dataset.delay || '0', 10);
    setTimeout(() => el.classList.add('visible'), delay);
  });
}

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', (e) => {
    const targetId = anchor.getAttribute('href');
    if (!targetId || targetId === '#') return;
    const targetEl = document.querySelector(targetId);
    if (targetEl) {
      e.preventDefault();
      targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

/* =========================================================================
   4. SAVE THE DATE — DRAG OR TAP TASSEL TO UNROLL SCROLL
   ========================================================================= */
const scrollBody = document.getElementById('scroll-body');
const tasselHandle = document.getElementById('tassel-handle');
const dragHandHint = document.getElementById('drag-hand-hint');
const scrollStatusPill = document.getElementById('scroll-status-pill');

const MAX_SCROLL_HEIGHT = 272;
let currentScrollHeight = 0;
let isScrollRevealed = false;
let isDraggingTassel = false;
let dragStartY = 0;
let startHeight = 0;

function completeScrollReveal() {
  scrollBody.classList.add('smooth-snap');
  currentScrollHeight = MAX_SCROLL_HEIGHT;
  scrollBody.style.height = `${MAX_SCROLL_HEIGHT}px`;

  if (!isScrollRevealed) {
    isScrollRevealed = true;
    dragHandHint.classList.add('hidden');
    scrollStatusPill.textContent = i18n[currentLang].revealedPill;
    scrollStatusPill.classList.add('bg-[#6e1f2f]', 'text-[#6e1f2f]', 'border-[#6e1f2f]');

    const rect = scrollBody.getBoundingClientRect();
    triggerBurst(rect.left + rect.width / 2, rect.top + rect.height / 2, 55);
  }
}

function onDragStart(clientY) {
  if (isScrollRevealed) return;
  isDraggingTassel = true;
  dragStartY = clientY;
  startHeight = currentScrollHeight;
  scrollBody.classList.remove('smooth-snap');
}

function onDragMove(clientY) {
  if (!isDraggingTassel || isScrollRevealed) return;
  const delta = clientY - dragStartY;
  currentScrollHeight = Math.max(0, Math.min(MAX_SCROLL_HEIGHT, startHeight + delta));
  scrollBody.style.height = `${currentScrollHeight}px`;
  if (currentScrollHeight >= MAX_SCROLL_HEIGHT * 0.48) {
    isDraggingTassel = false;
    completeScrollReveal();
  }
}

function onDragEnd() {
  if (!isDraggingTassel) return;
  isDraggingTassel = false;
  if (currentScrollHeight < MAX_SCROLL_HEIGHT * 0.48) {
    completeScrollReveal();
  }
}

tasselHandle.addEventListener('mousedown', (e) => {
  e.preventDefault();
  onDragStart(e.clientY);
});
window.addEventListener('mousemove', (e) => onDragMove(e.clientY));
window.addEventListener('mouseup', onDragEnd);

tasselHandle.addEventListener('touchstart', (e) => {
  onDragStart(e.touches[0].clientY);
}, { passive: true });
window.addEventListener('touchmove', (e) => {
  if (isDraggingTassel) onDragMove(e.touches[0].clientY);
}, { passive: true });
window.addEventListener('touchend', onDragEnd);

const targetWeddingTime = new Date('2026-12-14T12:21:00+05:30').getTime();
function updateCountdown() {
  const now = Date.now();
  const diff = Math.max(0, targetWeddingTime - now);
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const mins = Math.floor((diff / 1000 / 60) % 60);
  const secs = Math.floor((diff / 1000) % 60);

  document.getElementById('cd-days').textContent = String(days).padStart(2, '0');
  document.getElementById('cd-hours').textContent = String(hours).padStart(2, '0');
  document.getElementById('cd-mins').textContent = String(mins).padStart(2, '0');
  document.getElementById('cd-secs').textContent = String(secs).padStart(2, '0');
}
setInterval(updateCountdown, 1000);
updateCountdown();

document.getElementById('add-calendar-btn').addEventListener('click', () => {
  const icsContent = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Shubh Vivaah//Dipak & Priya Wedding Invitation//EN',
    'BEGIN:VEVENT',
    'DTSTART:20261214T065100Z',
    'DTEND:20261214T163000Z',
    'SUMMARY:Dipak & Priya Wedding & Reception',
    'LOCATION:Atithi Banquet Hall, Indrayani Tower, Near Nagar Parishad, PMT Bus Stop, Devachi, Alandi-412105, Maharashtra',
    'DESCRIPTION:Shubh Vivaah — Dipak & Priya Wedding (Pheras at 12:21 pm, Reception Ceremony 3:00 pm onwards).',
    'END:VEVENT',
    'END:VCALENDAR'
  ].join('\r\n');

  const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'Dipak-Priya-Wedding-14Dec2026.ics';
  a.click();
  URL.revokeObjectURL(url);
  showToast(i18n[currentLang].calendarToast);
});

/* =========================================================================
   5. WEDDING FESTIVITIES — 3D SWIPEABLE CAROUSEL
   ========================================================================= */
const ceremonies = [
  {
    dateTime: { en: 'MON · 14 DEC · 10:00 AM', mr: 'सोमवार · १४ डिसेंबर · स. १०:०० वा.' },
    title: { en: 'Haldi', mr: 'हळद समारंभ' },
    venue: { en: 'Atithi Banquet Hall, Alandi', mr: 'अतिथी बँक्वेट हॉल, आळंदी' },
    dressCode: { en: 'Wear yellow', mr: 'पिवळ्या रंगाचे पारंपरिक वस्त्र' },
    swatch: 'linear-gradient(135deg, #f9d448 0%, #e4a81b 100%)',
    bgGradient: 'linear-gradient(180deg, #f5b92a 0%, #fbe084 65%, #ffffff 100%)',
    sceneSvg: `
      <rect x="65" y="65" width="136" height="24" rx="6" fill="#f28c28"/>
      <circle cx="133" cy="34" r="11" fill="#59281d"/>
      <path d="M115 65 L123 45 H143 L151 65 Z" fill="#ffd43b"/>
      <circle cx="52" cy="25" r="8" fill="#f27a1a" opacity="0.6"/>
      <circle cx="214" cy="30" r="9" fill="#f27a1a" opacity="0.6"/>
    `,
    badgeSvg: `
      <path d="M13 24 H35 L32 33 C31 36 17 36 16 33 Z" fill="#d97b24"/>
      <ellipse cx="24" cy="24" rx="11" ry="3.5" fill="#f7c838"/>
      <circle cx="19" cy="15" r="2.5" fill="#f39c12"/>
      <circle cx="28" cy="13" r="3" fill="#f1c40f"/>
    `
  },
  {
    dateTime: { en: 'SAT · 12 DEC · 3:00 PM', mr: 'शनिवार · १२ डिसेंबर · दु. ३:०० वा.' },
    title: { en: 'Mehendi', mr: 'मेहंदी सोहळा' },
    venue: { en: 'Kamatghar, Bhiwandi', mr: 'कामतघर, भिवंडी' },
    dressCode: { en: 'Wear green', mr: 'हिरव्या रंगाचे सुंदर पोशाख' },
    swatch: 'linear-gradient(135deg, #7da168 0%, #567943 100%)',
    bgGradient: 'linear-gradient(180deg, #98b985 0%, #cfe0c3 65%, #ffffff 100%)',
    sceneSvg: `
      <rect x="85" y="25" width="34" height="62" rx="17" transform="rotate(-14 102 56)" fill="#e8c3a5"/>
      <rect x="148" y="25" width="34" height="62" rx="17" transform="rotate(14 165 56)" fill="#e8c3a5"/>
      <circle cx="102" cy="56" r="10" fill="none" stroke="#8c5438" stroke-width="1.5" stroke-dasharray="2 2"/>
      <circle cx="165" cy="56" r="10" fill="none" stroke="#8c5438" stroke-width="1.5" stroke-dasharray="2 2"/>
    `,
    badgeSvg: `
      <path d="M27 12 L32 16 L21 31 L18 28 Z" fill="#4f733c"/>
      <path d="M19 30 C16 34, 23 36, 26 33 C29 30, 33 34, 30 37" fill="none" stroke="#6e3b23" stroke-width="1.5" stroke-linecap="round"/>
    `
  },
  {
    dateTime: { en: 'MON · 14 DEC · 02:00 PM', mr: 'सोमवार · १४ डिसेंबर · दु. ०२:०० वा.' },
    title: { en: 'Feast & Reception', mr: 'जेवण & स्वागत समारंभ  ' },
    venue: { en: 'Atithi Banquet Hall, Alandi', mr: 'अतिथी बँक्वेट हॉल, आळंदी' },
    dressCode: { en: 'Indo-western, purple & pink', mr: 'इंडो-वेस्टर्न, जांभळा व गुलाबी' },
    swatch: 'linear-gradient(135deg, #d84b9e 0%, #832b7d 100%)',
    bgGradient: 'linear-gradient(180deg, #742968 0%, #b96ba8 65%, #ffffff 100%)',
    sceneSvg: `
      <circle cx="75" cy="25" r="7" fill="#ff66b2" opacity="0.6"/>
      <circle cx="195" cy="22" r="8" fill="#ffd166" opacity="0.6"/>
      <path d="M60 95 L70 58 H86 L96 95 Z" fill="#d9468f"/>
      <path d="M115 95 L125 55 H143 L153 95 Z" fill="#f3a833"/>
      <path d="M172 95 L182 58 H198 L208 95 Z" fill="#9b4dca"/>
    `,
    badgeSvg: `
      <rect x="14" y="19" width="20" height="11" rx="3" fill="#c97a38"/>
      <line x1="17" y1="19" x2="21" y2="30" stroke="#f7e3b2" stroke-width="1.3"/>
      <line x1="21" y1="30" x2="25" y2="19" stroke="#f7e3b2" stroke-width="1.3"/>
      <line x1="25" y1="19" x2="29" y2="30" stroke="#f7e3b2" stroke-width="1.3"/>
      <circle cx="24" cy="12" r="1.8" fill="#d84b9e"/>
      <circle cx="31" cy="14" r="1.5" fill="#f3a833"/>
    `
  },
  {
    dateTime: { en: 'MON · 14 DEC · 12:21 PM', mr: 'सोमवार · १४ डिसेंबर · दु. १२:२१ वा.' },
    title: { en: 'Pheras', mr: 'शुभ विवाह' },
    venue: { en: 'Atithi Banquet Hall, Alandi', mr: 'अतिथी बँक्वेट हॉल, आळंदी' },
    dressCode: { en: 'Festive red & gold', mr: 'पारंपरिक लाल आणि सोनेरी' },
    swatch: 'linear-gradient(135deg, #8b1c2e 50%, #e0b454 50%)',
    bgGradient: 'linear-gradient(180deg, #5a1825 0%, #a54e5d 65%, #ffffff 100%)',
    sceneSvg: `
      <line x1="75" y1="35" x2="75" y2="95" stroke="#f3c669" stroke-width="3"/>
      <line x1="191" y1="35" x2="191" y2="95" stroke="#f3c669" stroke-width="3"/>
      <path d="M65 35 Q133 18 201 35" fill="none" stroke="#f3c669" stroke-width="4"/>
      <path d="M127 88 Q133 72 139 88 Z" fill="#ff9f1c"/>
    `,
    badgeSvg: `
      <line x1="14" y1="16" x2="14" y2="34" stroke="#b88b32" stroke-width="1.6"/>
      <line x1="34" y1="16" x2="34" y2="34" stroke="#b88b32" stroke-width="1.6"/>
      <path d="M12 16 Q24 10 36 16" fill="none" stroke="#8b1c2e" stroke-width="2"/>
      <path d="M21 33 Q24 24 27 33 Z" fill="#f39c12"/>
    `
  }
];

const festivitiesStage = document.getElementById('festivities-stage');
const eventDotsContainer = document.getElementById('event-dots');
let activeEventIndex = 3;

function renderFestivities() {
  festivitiesStage.innerHTML = '';
  eventDotsContainer.innerHTML = '';
  const dressLabel = i18n[currentLang].dressCodeLabel;

  ceremonies.forEach((ev, idx) => {
    const card = document.createElement('div');
    card.className = 'event-card-3d cursor-pointer';
    card.dataset.index = idx;
    card.innerHTML = `
      <div class="h-[138px] w-full relative overflow-hidden" style="background: ${ev.bgGradient};">
        <svg class="w-full h-full opacity-80" viewBox="0 0 266 138" preserveAspectRatio="xMidYMid slice">
          ${ev.sceneSvg}
        </svg>
        <div class="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-white to-transparent"></div>
      </div>

      <div class="w-16 h-16 rounded-full bg-white shadow-md border border-[#cfa855]/35 flex items-center justify-center mx-auto -mt-9 relative z-10">
        <svg class="w-11 h-11" viewBox="0 0 48 48">
          ${ev.badgeSvg}
        </svg>
      </div>

      <div class="px-5 pt-3 pb-5 flex-1 flex flex-col items-center justify-between text-center">
        <div>
          <p class="font-sans-clean text-[8.5px] font-semibold tracking-[0.18em] text-[#9b7a42] uppercase">
            ${ev.dateTime[currentLang]}
          </p>
          <h3 class="font-serif-display text-[23px] leading-tight text-[#6e1f2f] mt-1">
            ${ev.title[currentLang]}
          </h3>
          <p class="font-sans-clean text-[10.5px] text-[#7c6662] mt-1 leading-snug">
            ${ev.venue[currentLang]}
          </p>
        </div>

        <div class="w-full mt-3 px-3 py-2 rounded-2xl bg-[#fbf6f0] border border-[#cfa855]/30 flex items-center gap-2.5 text-left">
          <span class="w-7 h-7 rounded-lg shrink-0 shadow-inner border border-black/10" style="background: ${ev.swatch};"></span>
          <div>
            <p class="font-sans-clean text-[7.5px] font-semibold tracking-[0.18em] text-[#9b7a42] uppercase">
              ${dressLabel}
            </p>
            <p class="font-sans-clean text-[10.5px] font-semibold text-[#5a222d] leading-tight">
              ${ev.dressCode[currentLang]}
            </p>
          </div>
        </div>
      </div>
    `;

    card.addEventListener('click', () => {
      if (idx !== activeEventIndex) {
        activeEventIndex = idx;
        updateCarouselPositions();
      }
    });

    festivitiesStage.appendChild(card);

    const dot = document.createElement('button');
    dot.ariaLabel = `Go to ${ev.title[currentLang]}`;
    dot.className = 'h-1.5 rounded-full transition-all cursor-pointer';
    dot.addEventListener('click', () => {
      activeEventIndex = idx;
      updateCarouselPositions();
    });
    eventDotsContainer.appendChild(dot);
  });

  updateCarouselPositions();
}

function updateCarouselPositions() {
  const cards = festivitiesStage.querySelectorAll('.event-card-3d');
  const dots = eventDotsContainer.querySelectorAll('button');
  const total = ceremonies.length;

  cards.forEach((card, idx) => {
    let diff = idx - activeEventIndex;
    if (diff > total / 2) diff -= total;
    if (diff < -total / 2) diff += total;

    if (diff === 0) {
      card.style.transform = 'translateX(0px) scale(1) rotateY(0deg)';
      card.style.opacity = '1';
      card.style.filter = 'blur(0px)';
      card.style.zIndex = '20';
    } else if (diff === -1) {
      card.style.transform = 'translateX(-158px) scale(0.84) rotateY(14deg)';
      card.style.opacity = '0.72';
      card.style.filter = 'blur(1.5px)';
      card.style.zIndex = '10';
    } else if (diff === 1) {
      card.style.transform = 'translateX(158px) scale(0.84) rotateY(-14deg)';
      card.style.opacity = '0.72';
      card.style.filter = 'blur(1.5px)';
      card.style.zIndex = '10';
    } else {
      card.style.transform = `translateX(${diff * 180}px) scale(0.7)`;
      card.style.opacity = '0';
      card.style.filter = 'blur(3px)';
      card.style.zIndex = '1';
    }
  });

  dots.forEach((dot, idx) => {
    if (idx === activeEventIndex) {
      dot.classList.add('w-5', 'bg-[#6e1f2f]');
      dot.classList.remove('w-1.5', 'bg-[#cfa855]/50');
    } else {
      dot.classList.add('w-1.5', 'bg-[#cfa855]/50');
      dot.classList.remove('w-5', 'bg-[#6e1f2f]');
    }
  });
}

document.getElementById('prev-event').addEventListener('click', () => {
  activeEventIndex = (activeEventIndex - 1 + ceremonies.length) % ceremonies.length;
  updateCarouselPositions();
});

document.getElementById('next-event').addEventListener('click', () => {
  activeEventIndex = (activeEventIndex + 1) % ceremonies.length;
  updateCarouselPositions();
});

let touchStartX = 0;
festivitiesStage.addEventListener('touchstart', (e) => {
  touchStartX = e.touches[0].clientX;
}, { passive: true });
festivitiesStage.addEventListener('touchend', (e) => {
  const dx = e.changedTouches[0].clientX - touchStartX;
  if (Math.abs(dx) > 36) {
    if (dx < 0) activeEventIndex = (activeEventIndex + 1) % ceremonies.length;
    else activeEventIndex = (activeEventIndex - 1 + ceremonies.length) % ceremonies.length;
    updateCarouselPositions();
  }
});

renderFestivities();

/* =========================================================================
   6. AUTOMATIC GOOGLE SHEETS SAVE, DIRECT WHATSAPP WEBHOOK & THANKS POPUP
   ========================================================================= */
// 1. Paste your deployed Google Apps Script Web App URL (/exec) for "Guest List"
const GOOGLE_SHEET_WEBHOOK_URL = 'https://script.google.com/macros/s/AKfycby_t7WvA22so8Y5-Y5Z5xXOXeRnKX-rZVrtL1WjxojN2NjLfCcLz8b08NtU4Uh_uZRJ/exec';

// 2. Paste your server / WhatsApp API webhook URL that sends directly to WhatsApp
const WHATSAPP_WEBHOOK_URL = 'YOUR_WHATSAPP_API_WEBHOOK_URL';

// 3. Groom & Bride WhatsApp numbers (country code + number, no + or spaces)
const GROOM_WHATSAPP = '91XXXXXXXXXX';
const BRIDE_WHATSAPP = '91XXXXXXXXXX';

const GOOGLE_MAPS_URL = 'https://maps.app.goo.gl/BZy5rXUEpRbzrNj5A';
const FULL_VENUE_ADDRESS = 'Atithi Banquet Hall, Indrayani Tower, Near Nagar Parishad, PMT Bus Stop, Devachi, Alandi-412105, Maharashtra';

function normalizeWhatsAppPhone(rawPhone) {
  const digits = (rawPhone || '').replace(/\D/g, '');
  if (!digits) return '';
  return digits.length === 10 ? `91${digits}` : digits;
}

function buildWhatsAppInviteMessage(data) {
  const statusText = data.status === 'attending' ? 'Joyfully Accepts' : 'Regretfully Declines';
  const guestText = data.guests === '1' ? '1 Guest' : `${data.guests} Guests`;
  const lines = [
    'Shubh Vivaah — Dipak & Priya Wedding',
    `Guest: ${data.name}`,
    data.whatsapp ? `Guest WhatsApp: ${normalizeWhatsAppPhone(data.whatsapp)}` : null,
    `Response: ${statusText} (${guestText})`,
    'Date: Monday, 14 December 2026',
    'Muhurat (Pheras): 12:21 pm (Reception 3:00 pm onwards)',
    `Venue: ${FULL_VENUE_ADDRESS}`,
    `Google Maps: ${GOOGLE_MAPS_URL}`
  ].filter(Boolean);

  if (data.note) {
    lines.push(`Blessings: ${data.note}`);
  }
  return lines.join('\n');
}

function saveRsvpToGoogleSheet(data) {
  if (!GOOGLE_SHEET_WEBHOOK_URL || GOOGLE_SHEET_WEBHOOK_URL.includes('YOUR_GOOGLE')) {
    return Promise.resolve(false);
  }

  const payload = {
    name: data.name,
    whatsapp: normalizeWhatsAppPhone(data.whatsapp),
    statusLabel: data.status === 'attending' ? 'Joyfully Accepts' : 'Regretfully Declines',
    guests: data.guests,
    note: data.note,
    lang: currentLang
  };

  return fetch(GOOGLE_SHEET_WEBHOOK_URL, {
    method: 'POST',
    mode: 'no-cors',
    headers: { 'Content-Type': 'text/plain;charset=utf-8' },
    body: JSON.stringify(payload)
  })
    .then(() => true)
    .catch((err) => {
      console.error('Google Sheet save error:', err);
      return false;
    });
}

function sendRsvpDirectlyToWhatsApp(data) {
  if (!WHATSAPP_WEBHOOK_URL || WHATSAPP_WEBHOOK_URL === 'YOUR_WHATSAPP_API_WEBHOOK_URL') {
    return Promise.resolve(false);
  }

  const groomPhone = normalizeWhatsAppPhone(GROOM_WHATSAPP);
  const bridePhone = normalizeWhatsAppPhone(BRIDE_WHATSAPP);
  const guestPhone = normalizeWhatsAppPhone(data.whatsapp);
  const recipients = [groomPhone, bridePhone, guestPhone].filter(Boolean);
  const message = buildWhatsAppInviteMessage(data);

  return fetch(WHATSAPP_WEBHOOK_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      groomPhone,
      bridePhone,
      guestPhone,
      recipients,
      message,
      weddingDetails: {
        date: 'Monday, 14 December 2026',
        muhurat: '12:21 pm',
        receptionTime: '3:00 pm onwards',
        venue: FULL_VENUE_ADDRESS,
        googleMapsUrl: GOOGLE_MAPS_URL
      },
      rsvp: {
        name: data.name,
        whatsapp: guestPhone,
        status: data.status,
        statusLabel: data.status === 'attending' ? 'Joyfully Accepts' : 'Regretfully Declines',
        guests: data.guests,
        note: data.note,
        language: currentLang
      }
    })
  })
    .then((res) => res.ok)
    .catch(() => false);
}

function openRsvpPopup(data) {
  const modal = document.getElementById('rsvp-popup-modal');
  const popupBody = document.getElementById('popup-thanks-body');
  if (!modal) return;

  if (popupBody) {
    popupBody.textContent = formatRsvpMessage(data);
  }
  modal.classList.remove('hidden');
  modal.classList.add('flex');
}

function closeRsvpPopup() {
  const modal = document.getElementById('rsvp-popup-modal');
  if (!modal) return;
  modal.classList.add('hidden');
  modal.classList.remove('flex');
}

function showToast(message) {
  const toast = document.getElementById('toast-msg');
  toast.textContent = message;
  toast.classList.remove('opacity-0');
  setTimeout(() => toast.classList.add('opacity-0'), 2400);
}

const copyBtn = document.getElementById('copy-address-btn');
copyBtn.addEventListener('click', () => {
  const tempInput = document.createElement('textarea');
  tempInput.value = FULL_VENUE_ADDRESS;
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand('copy');
  document.body.removeChild(tempInput);

  const labelSpan = copyBtn.querySelector('span');
  labelSpan.textContent = i18n[currentLang].copiedButton;
  showToast(i18n[currentLang].copiedToast);
  setTimeout(() => {
    labelSpan.textContent = i18n[currentLang].copyAddress;
  }, 2200);
});

const rsvpForm = document.getElementById('rsvp-form');
const rsvpConfirmation = document.getElementById('rsvp-confirmation');

rsvpForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('rsvp-name').value.trim();
  const whatsappInput = document.getElementById('rsvp-whatsapp');
  const whatsapp = whatsappInput ? whatsappInput.value.trim() : '';
  const status = document.getElementById('rsvp-status').value;
  const guests = document.getElementById('rsvp-guests').value;
  const note = document.getElementById('rsvp-note').value.trim();

  lastRsvpSubmission = { name, whatsapp, status, guests, note };
  document.getElementById('rsvp-confirm-text').textContent = formatRsvpMessage(lastRsvpSubmission);

  rsvpForm.classList.add('hidden');
  rsvpConfirmation.classList.remove('hidden');
  triggerBurst(window.innerWidth / 2, window.innerHeight * 0.65, 32);

  openRsvpPopup(lastRsvpSubmission);
  saveRsvpToGoogleSheet(lastRsvpSubmission);
  sendRsvpDirectlyToWhatsApp(lastRsvpSubmission);
});

document.getElementById('rsvp-reset').addEventListener('click', () => {
  rsvpConfirmation.classList.add('hidden');
  rsvpForm.classList.remove('hidden');
});

document.getElementById('close-rsvp-popup').addEventListener('click', closeRsvpPopup);

document.getElementById('rsvp-popup-modal').addEventListener('click', (e) => {
  if (e.target.id === 'rsvp-popup-modal') {
    closeRsvpPopup();
  }
});

window.onload = function () {
  animatePetals();
};


// For smooth scroling animation 
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', (e) => {
    const targetId = anchor.getAttribute('href');
    if (!targetId || targetId === '#') return;
    const targetEl = document.querySelector(targetId);
    if (targetEl) {
      e.preventDefault();
      targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});