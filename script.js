(() => {
  const songData = [
    {
      title: 'Pandama',
      image: 'assets/EHEMA DEWAL NA HITHE MAGE-1.png',
      sub: 'Figma export'
    },
    {
      title: 'Adariye',
      image: 'assets/ADARIYE.png',
      sub: 'Figma export'
    },
    {
      title: 'Alokawarsha',
      image: 'assets/ALOKWARSHA.png',
      sub: 'Figma export'
    },
    {
      title: 'Aetha Isawwe',
      image: 'assets/AETHA ISAWWE.png',
      sub: 'Figma export'
    },
        {
      title: 'Aetha Isawwe',
      image: 'assets/sandaganawa.png',
      sub: 'Figma export'
    },
    {
      title: 'Aetha Isawwe',
      image: 'assets/rap lanthaya.png',
      sub: 'Figma export'
    },
    {
      title: 'Aloke',
      image: 'assets/ALOKE.png',
      sub: 'Figma export'
    },
    {
      title: 'Ananthe Pura',
      image: 'assets/ANANTHE PURA.png',
      sub: 'Figma export'
    },
    {
      title: 'Apa Hamuwee',
      image: 'assets/APA HAMUWEE.png',
      sub: 'Figma export'
    },
    {
      title: 'Digasiye',
      image: 'assets/DIGASIYE.png',
      sub: 'Figma export'
    },
    {
      title: 'Ehema Dewal Na Hithe Mage',
      image: 'assets/EHEMA DEWAL NA HITHE MAGE.png',
      sub: 'Figma export'
    },
    {
      title: 'Gindara',
      image: 'assets/GINDARA.png',
      sub: 'Figma export'
    },
    {
      title: 'Ithihasaye Katha',
      image: 'assets/ITHIHASAYE KATHA.png',
      sub: 'Figma export'
    },
    {
      title: 'Naukawa',
      image: 'assets/NAUKAWA.png',
      sub: 'Figma export'
    },
    {
      title: 'Niwalanna Ma',
      image: 'assets/NIWALANNA MA.png',
      sub: 'Figma export'
    },
    {
      title: 'Pawee',
      image: 'assets/PAWEE.png',
      sub: 'Figma export'
    },
    {
      title: 'Roja',
      image: 'assets/ROJA.png',
      sub: 'Figma export'
    },
    {
      title: 'Wedikawe',
      image: 'assets/WEDIKAWE.png',
      sub: 'Figma export'
    }
  ];

  // Collabs section removed — no collab data or embeds.

  const awardData = [
    {
      icon: '🏆',
      event: 'Derana CloseUp Music Video Awards 2025',
      name: 'Best Alternative Video',
      song: 'Mawa Hoyan',
      detail: 'Co-Directed with Sahan Wickramarachchi',
      image: 'assets/awards.jpg',
      caption: 'Derana CloseUp Music Video Awards'
    },
    {
      icon: '🏆',
      event: 'Derana CloseUp Music Video Awards 2025',
      name: 'Best R&B Video',
      song: 'Aprakashitha',
      detail: 'Directed by Dhanith Sri himself',
      image: 'assets/derana music awards.jpg',
      caption: 'Derana Music Awards'
    }
  ];

  const fanLettersStorageKey = 'dhanith-sri-fan-letters';

  // Build gallery entries from the RANDOMS folder (use every file)
  const _randomFiles = [
    'assets/RANDOMS/470177923_1131732371642781_512425327986212773_n.jpg',
    'assets/RANDOMS/470806580_1132753284874023_3412145222618926203_n.jpg',
    'assets/RANDOMS/472870004_1147064010109617_3693071732434534419_n.jpg',
    'assets/RANDOMS/475662289_1163514778464540_6268218819984952902_n.jpg',
    'assets/RANDOMS/476292691_1167127891436562_172734698715751652_n.jpg',
    'assets/RANDOMS/476442722_1169153104567374_2009302438439957908_n.jpg',
    'assets/RANDOMS/476960159_1170543517761666_4526326489397221372_n.jpg',
    'assets/RANDOMS/479957046_1174401994042485_4445357931132210670_n.jpg',
    'assets/RANDOMS/482322391_1190412049108146_2555399154807959343_n.jpg',
    'assets/RANDOMS/499401255_1246188680197149_8674648000627975689_n.jpg',
    'assets/RANDOMS/530222836_1311828970299786_1114778697364241605_n.jpg',
    'assets/RANDOMS/531670048_1311829043633112_3766366517050029322_n.jpg',
    'assets/RANDOMS/644863439_1472814730867875_2221428858281783622_n.jpg',
    'assets/RANDOMS/702144399_1534146894734658_9117525158834842689_n.jpg'
  ];

  const galleryData = _randomFiles.map((src, i) => {
    const gap = 360; // tighter horizontal rhythm
    const x = i * gap;
    const y = (i % 4) * 24; // gentler vertical staggering
    const widths = [520, 420, 360, 300];
    const w = widths[i % widths.length];
    const h = Math.round(w * 0.75); // consistent aspect ratio for neatness
    const rotate = ((i % 5) - 2); // -2..2 deg
    const tone = w > 480 ? 'hero' : w > 360 ? 'tall' : 'small';
    return { image: src, x, y, w, h, rotate, tone };
  });

  // insert a quote card near the middle of the strip
  const mid = Math.max(3, Math.floor(galleryData.length / 2));
  galleryData.splice(mid, 0, {
    type: 'quote',
    x: mid * 420 + 40,
    y: 40,
    w: 480,
    h: 260,
    title: "It doesn't matter where you start, it's how you progress from there.",
    copy: '— a clean editorial break inside the strip.'
  });

  const songsGrid = document.getElementById('songsGrid');
  const awardsGrid = document.getElementById('awardsGrid');
  const fanLetterForm = document.getElementById('fanLetterForm');
  const fanLetterList = document.getElementById('fanLetterList');
  const fanLetterCount = document.getElementById('fanLetterCount');
  const fanLetterStatus = document.getElementById('fanLetterStatus');
  const fanNameInput = document.getElementById('fanName');
  const fanSubjectInput = document.getElementById('fanSubject');
  const fanMessageInput = document.getElementById('fanMessage');
  const galleryTrack = document.getElementById('galleryTrack');
  const mobileMenu = document.getElementById('mobileMenu');
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.getElementById('siteNav');
  const loader = document.querySelector('.loader');
  const loaderFill = document.querySelector('.loader-fill');
  const html = document.documentElement;

  let lastScroll = 0;
  let heroPlayed = false;
  let loaderStarted = false;
  let animationsBooted = false;
  let cursorScaleTween = null;

  function loadFanLetters() {
    try {
      const raw = window.localStorage.getItem(fanLettersStorageKey);
      const letters = raw ? JSON.parse(raw) : [];
      return Array.isArray(letters) ? letters : [];
    } catch (error) {
      return [];
    }
  }

  function saveFanLetters(letters) {
    window.localStorage.setItem(fanLettersStorageKey, JSON.stringify(letters));
  }

  function escapeHtml(value) {
    return String(value)
      .replaceAll('&', '&amp;')
      .replaceAll('<', '&lt;')
      .replaceAll('>', '&gt;')
      .replaceAll('"', '&quot;')
      .replaceAll("'", '&#39;');
  }

  function formatLetterDate(timestamp) {
    try {
      return new Intl.DateTimeFormat('en', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
      }).format(new Date(timestamp));
    } catch (error) {
      return new Date(timestamp).toLocaleDateString();
    }
  }

  function renderFanLetters() {
    if (!fanLetterList) {
      return;
    }

    const letters = loadFanLetters();
    fanLetterCount.textContent = `${letters.length} ${letters.length === 1 ? 'letter' : 'letters'}`;

    if (!letters.length) {
      fanLetterList.innerHTML = `
        <article class="fan-letter-empty">
          <p>No fan letters yet. Be the first to leave a note.</p>
        </article>
      `;
      return;
    }

    fanLetterList.innerHTML = letters.map((letter) => `
      <article class="fan-letter-card">
        <div class="fan-letter-card-top">
          <span class="fan-letter-author">${escapeHtml(letter.name)}</span>
          <span class="fan-letter-date">${escapeHtml(formatLetterDate(letter.createdAt))}</span>
        </div>
        <h3 class="fan-letter-subject">${escapeHtml(letter.subject)}</h3>
        <p class="fan-letter-message">${escapeHtml(letter.message)}</p>
      </article>
    `).join('');
  }

  function initFanLetters() {
    if (!fanLetterForm) {
      return;
    }

    renderFanLetters();

    fanLetterForm.addEventListener('submit', (event) => {
      event.preventDefault();

      const name = fanNameInput.value.trim();
      const subject = fanSubjectInput.value.trim();
      const message = fanMessageInput.value.trim();

      if (!name || !subject || !message) {
        fanLetterStatus.textContent = 'Please fill in your name, subject, and message.';
        return;
      }

      const letters = loadFanLetters();
      letters.unshift({
        name,
        subject,
        message,
        createdAt: new Date().toISOString()
      });

      saveFanLetters(letters.slice(0, 50));
      fanLetterForm.reset();
      fanLetterStatus.textContent = 'Your fan letter was saved on this device.';
      renderFanLetters();
      fanNameInput.focus();
    });
  }

  function renderSongs() {
    songsGrid.innerHTML = songData.map((song, index) => {
      const imagePath = encodeURI(song.image);
      const loading = index < 4 ? 'eager' : 'lazy';

      return `
        <article class="song-card song-card--poster">
          <a class="song-card-poster" href="${imagePath}" target="_blank" rel="noreferrer" aria-label="Open ${song.title} artwork">
            <img src="${imagePath}" alt="${song.title} artwork" loading="${loading}" />
          </a>
          <div class="song-card-meta">
            <h3 class="song-title">${song.title}</h3>
          </div>
        </article>`;
    }).join('');
  }

  // Collabs removed — no renderCollabs()

  function renderAwards() {
    awardsGrid.innerHTML = awardData.map((item) => `
      <article class="award-card">
        <div class="award-media">
          <img class="award-image" src="${item.image}" alt="${item.caption}" loading="eager" />
          <p class="award-caption">${item.caption}</p>
        </div>
        <div class="award-icon">${item.icon}</div>
        <div class="award-event">${item.event}</div>
        <h3 class="award-name">${item.name}</h3>
        <div class="award-bar"></div>
        <div class="award-song">${item.song}</div>
        <p class="award-detail">${item.detail}</p>
      </article>
    `).join('');
  }

  function renderGallery() {
    if (!galleryTrack) {
      return;
    }

    galleryTrack.innerHTML = galleryData.map((item, index) => {
      if (item.type === 'quote') {
        return `
          <article class="gallery-quote" style="--card-x:${item.x}px;--card-y:${item.y}px;--card-w:${item.w}px;--card-h:${item.h}px;">
            <p class="gallery-quote-text">${item.title}</p>
            <p class="gallery-quote-copy">${item.copy}</p>
          </article>
        `;
      }

      return `
          <article class="gallery-card gallery-card--${item.tone || 'base'}" style="--gallery-image:url('${item.image}');--card-x:${item.x}px;--card-y:${item.y}px;--card-w:${item.w}px;--card-h:${item.h}px;--card-rotate:${item.rotate || 0}deg;--card-delay:${index * 0.08}s;">
            <div class="gallery-image"></div>
          </article>
        `;
    }).join('');
  }

  function initRevealText() {
    document.querySelectorAll('.reveal-text').forEach((el) => {
      gsap.from(el, {
        clipPath: 'inset(100% 0 0 0)',
        duration: 0.9,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        }
      });
    });
  }

  function initCursor() {
    if (window.matchMedia('(pointer: coarse)').matches) {
      html.classList.add('touch-device');
      return;
    }

    const dot = document.querySelector('.cursor-dot');
    const ring = document.querySelector('.cursor-ring');
    const ringLabel = document.querySelector('.cursor-ring-label');
    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;

    document.addEventListener('mousemove', (event) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
      gsap.set(dot, { x: mouseX, y: mouseY });
    });

    gsap.ticker.add(() => {
      ringX += (mouseX - ringX) * 0.1;
      ringY += (mouseY - ringY) * 0.1;
      gsap.set(ring, { x: ringX, y: ringY });
    });

    function setRingScale(scale) {
      if (cursorScaleTween) {
        cursorScaleTween.kill();
      }
      cursorScaleTween = gsap.to(ring, {
        scale,
        duration: 0.25,
        ease: 'power2.out',
        overwrite: true
      });
    }

    function setLabel(text) {
      ringLabel.textContent = text || '';
      ring.classList.toggle('is-active', Boolean(text));
    }

    document.querySelectorAll('[data-cursor]').forEach((el) => {
      el.addEventListener('mouseenter', () => {
        setRingScale(2.5);
        setLabel(el.dataset.cursor || 'VIEW');
      });
      el.addEventListener('mouseleave', () => {
        setLabel('');
        setRingScale(1);
      });
    });

    document.querySelectorAll('a, button').forEach((el) => {
      el.addEventListener('mouseenter', () => {
        if (!el.hasAttribute('data-cursor')) {
          setRingScale(1.6);
        }
      });
      el.addEventListener('mouseleave', () => {
        if (!el.hasAttribute('data-cursor')) {
          setRingScale(1);
        }
      });
    });
  }

  function initHeroAnimation() {
    if (document.body.classList.contains('hero-ready')) {
      return;
    }

    if (heroPlayed) {
      return;
    }
    heroPlayed = true;

    if (typeof gsap === 'undefined') {
      document.body.classList.add('hero-ready');
      return;
    }

    const tl = gsap.timeline();
    tl.from('.hero-line-1 .char', {
      yPercent: 120,
      stagger: 0.04,
      duration: 1,
      ease: 'power4.out'
    })
      .from('.hero-line-2 .char', {
        yPercent: 120,
        stagger: 0.04,
        duration: 1,
        ease: 'power4.out'
      }, '-=0.6')
      .from('.hero-sinhala', {
        opacity: 0,
        y: 20,
        duration: 0.6
      }, '-=0.4')
      .from('.hero-tags .hero-tag', {
        opacity: 0,
        y: 10,
        stagger: 0.1,
        duration: 0.4
      }, '-=0.3')
      .from('.hero-side-label', {
        opacity: 0,
        duration: 0.6
      }, '-=0.4')
      .from('.hero-scroll', {
        opacity: 0,
        y: 10,
        duration: 0.5
      }, '-=0.2');
  }

  function initScrollAnimations() {
    gsap.from('.song-card', {
      y: 60,
      opacity: 0,
      scale: 0.96,
      stagger: 0.07,
      duration: 0.7,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.songs-grid',
        start: 'top 80%'
      }
    });

    // Collabs animations removed

    gsap.from('.award-card', {
      y: 50,
      opacity: 0,
      stagger: 0.15,
      duration: 0.8,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.awards-grid',
        start: 'top 80%'
      }
    });

    ScrollTrigger.create({
      trigger: '.stats-grid',
      start: 'top 75%',
      once: true,
      onEnter: () => {
        document.querySelectorAll('.stat-num').forEach((el) => {
          const target = Number(el.dataset.target || 0);
          const prefix = el.dataset.prefix || '';
          const suffix = el.dataset.suffix || '';

          gsap.to({ val: 0 }, {
            val: target,
            duration: 2,
            ease: 'power2.out',
            onUpdate: function () {
              el.textContent = prefix + Math.ceil(this.targets()[0].val) + suffix;
            },
            onComplete: () => {
              gsap.to(el, {
                color: '#E2C4FF',
                duration: 0.2,
                yoyo: true,
                repeat: 1
              });
            }
          });
        });
      }
    });

    if (galleryTrack) {
      const cards = gsap.utils.toArray('.gallery-card');
      const distance = () => Math.max(0, galleryTrack.scrollWidth - window.innerWidth + 80);

      gsap.to(galleryTrack, {
        x: () => -distance(),
        ease: 'none',
        scrollTrigger: {
          trigger: '.section--gallery',
          start: 'top top',
          end: () => `+=${distance() + window.innerHeight * 2.4}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true
        }
      });

      gsap.from(cards, {
        y: 40,
        opacity: 0,
        stagger: 0.08,
        duration: 0.7,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.section--gallery',
          start: 'top 80%'
        }
      });
    }
  }

  function initNav() {
    window.addEventListener('scroll', () => {
      const current = window.scrollY;
      nav.classList.toggle('scrolled', current > 100);

      if (current > lastScroll && current > 200) {
        gsap.to(nav, { yPercent: -100, duration: 0.4, ease: 'power2.in', overwrite: true });
      } else {
        gsap.to(nav, { yPercent: 0, duration: 0.4, ease: 'power2.out', overwrite: true });
      }

      lastScroll = current;
    }, { passive: true });
  }

  function initMenu() {
    const links = mobileMenu.querySelectorAll('a');

    const setOpen = (open) => {
      mobileMenu.classList.toggle('open', open);
      mobileMenu.setAttribute('aria-hidden', String(!open));
      menuToggle.setAttribute('aria-expanded', String(open));
      document.body.classList.toggle('menu-open', open);
    };

    menuToggle.addEventListener('click', () => {
      setOpen(!mobileMenu.classList.contains('open'));
    });

    links.forEach((link) => {
      link.addEventListener('click', () => setOpen(false));
    });

    window.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        setOpen(false);
      }
    });
  }

  function prepareHeroChars() {
    const chars = [
      ...document.querySelectorAll('.hero-line-1 .char'),
      ...document.querySelectorAll('.hero-line-2 .char')
    ];

    chars.forEach((char, index) => {
      char.style.transitionDelay = `${index * 45}ms`;
    });
  }

  function startLoader() {
    if (loaderStarted) {
      return;
    }
    loaderStarted = true;

    if (typeof gsap === 'undefined') {
      loaderFill.style.width = '100%';
      window.setTimeout(() => {
        loader.style.transition = 'transform 0.8s cubic-bezier(0.76, 0, 0.24, 1)';
        loader.style.transform = 'translateY(-100%)';
        window.setTimeout(() => {
          loader.remove();
          document.body.classList.remove('is-loading');
          document.body.classList.add('hero-ready');
          initHeroAnimation();
        }, 900);
      }, 2100);
      return;
    }

    gsap.to(loaderFill, {
      width: '100%',
      duration: 2,
      ease: 'none',
      onComplete: () => {
        gsap.to(loader, {
          yPercent: -100,
          duration: 0.8,
          ease: 'power4.inOut',
          delay: 0.2,
          onComplete: () => {
            loader.remove();
            document.body.classList.remove('is-loading');
            document.body.classList.add('hero-ready');
            initHeroAnimation();
            if (typeof ScrollTrigger !== 'undefined') {
              ScrollTrigger.refresh();
            }
          }
        });
      }
    });
  }

  function initPage() {
    renderSongs();
    renderAwards();
    renderGallery();
    initFanLetters();
    prepareHeroChars();
    startLoader();
    bootAnimations();
  }

  function bootAnimations() {
    if (animationsBooted) {
      return;
    }

    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') {
      window.setTimeout(bootAnimations, 100);
      return;
    }

    animationsBooted = true;
    gsap.registerPlugin(ScrollTrigger);
    initRevealText();
    initCursor();
    initNav();
    initMenu();
    initScrollAnimations();
  }

  document.addEventListener('DOMContentLoaded', initPage);
})();
