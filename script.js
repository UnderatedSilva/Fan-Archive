(() => {
  const songData = [
    {
      title: 'Pandama',
      image: 'assets/EHEMA DEWAL NA HITHE MAGE-1.png',
      genre: 'Alternative Fusion',
      year: '2018',
      desc: 'The breakthrough fusion track that reshaped the contemporary Sri Lankan music scene, blending alternative rock with traditional folk rhythms and soaring synth structures.',
      youtubeId: 'kYJvYgJ1RGs'
    },
    {
      title: 'Adariye',
      image: 'assets/ADARIYE.png',
      genre: 'Contemporary Pop',
      year: '2020',
      desc: 'A melodic acoustic-led ballad that showcases Dhanith\'s range and expressive vocals, speaking to the simplicity of deep romance.',
      youtubeId: '4W7oK3h-N3Y'
    },
    {
      title: 'Alokawarsha',
      image: 'assets/ALOKWARSHA.png',
      genre: 'Acoustic Pop',
      year: '2021',
      desc: 'A vibrant, uplifting single that celebrates the richness of human connections and the limitlessness of creative expression.',
      youtubeId: 'NqQp6ZtYlq8'
    },
    {
      title: 'Aetha Isawwe',
      image: 'assets/AETHA ISAWWE.png',
      genre: 'Symphonic Indie',
      year: '2021',
      desc: 'An expansive track featuring soaring orchestral backing and rich storytelling, tracing journeys through long distances and hearts.',
      youtubeId: 'b3C18j9iR54'
    },
    {
      title: 'Sandaganawa',
      image: 'assets/sandaganawa.png',
      genre: 'Classical Fusion',
      year: '2019',
      desc: 'An elegant fusion piece that weaves classical Sri Lankan vocal textures with a modern chamber-pop arrangement.',
      youtubeId: 'w13_LSwqC98'
    },
    {
      title: 'Raplanthaya',
      image: 'assets/rap lanthaya.png',
      genre: 'Alternative Hip-Hop',
      year: '2023',
      desc: 'The title track from Dhanith Sri\'s experimental rap album, introducing fans to his rapid flow and sharp lyrical insights.',
      youtubeId: 'P2t8Z7tQj1k'
    },
    {
      title: 'Aloke',
      image: 'assets/ALOKE.png',
      genre: 'Electronic Pop',
      year: '2020',
      desc: 'A glowing synth-pop track that builds into an energetic anthem of light, resilience, and personal discovery.',
      youtubeId: 's8O3_Vn2w4g'
    },
    {
      title: 'Ananthe Pura',
      image: 'assets/ANANTHE PURA.png',
      genre: 'Soul / Ballad',
      year: '2022',
      desc: 'A deep, soulful composition with ambient guitars and a slow-burning melody that travels to the edge of the infinite.',
      youtubeId: '7Lp5q8R92Qc'
    },
    {
      title: 'Apa Hamuwee',
      image: 'assets/APA HAMUWEE.png',
      genre: 'Indie Folk',
      year: '2020',
      desc: 'A wistful acoustic song detailing a serendipitous encounter, featuring delicate classical guitar and poetic Sinhala lyrics.',
      youtubeId: 'nQ5p_Wn1Q3g'
    },
    {
      title: 'Digasiye',
      image: 'assets/DIGASIYE.png',
      genre: 'Acoustic Pop',
      year: '2021',
      desc: 'A bouncy, feel-good romantic single featuring rhythmic guitar strumming and a light-hearted, infectious chorus.',
      youtubeId: '3x8c1b2t_4g'
    },
    {
      title: 'Ehema Dewal Na Hithe Mage',
      image: 'assets/EHEMA DEWAL NA HITHE MAGE.png',
      genre: 'Alternative Rock',
      year: '2019',
      desc: 'An emotional, raw rock track addressing misunderstandings, filled with high-energy drum rolls and passionate vocal runs.',
      youtubeId: '1t8p4Q7f9wU'
    },
    {
      title: 'Gindara',
      image: 'assets/GINDARA.png',
      genre: 'Electro Rock',
      year: '2022',
      desc: 'A fiery track that blends punchy rock drums, fuzzy electric guitars, and high-pitched vocal textures for a high-intensity listen.',
      youtubeId: '5Q8e7q8b_1g'
    },
    {
      title: 'Ithihasaye Katha',
      image: 'assets/ITHIHASAYE KATHA.png',
      genre: 'Historical Narrative',
      year: '2021',
      desc: 'A powerful anthem exploring stories of the past, featuring rich cultural metaphors and high-production acoustic instrumentation.',
      youtubeId: '4a8c9b2t_1g'
    },
    {
      title: 'Naukawa',
      image: 'assets/NAUKAWA.png',
      genre: 'Dream Pop',
      year: '2022',
      desc: 'A serene musical voyage that uses a sailboat metaphor to describe moving forward through the storms of life.',
      youtubeId: '8p7c1b2t_5g'
    },
    {
      title: 'Niwalanna Ma',
      image: 'assets/NIWALANNA MA.png',
      genre: 'Lyrical Fusion',
      year: '2022',
      desc: 'A comforting song featuring calm acoustic production and lush vocal harmonies, offering solace and healing.',
      youtubeId: '2x7b9c1t_3g'
    },
    {
      title: 'Pawee',
      image: 'assets/PAWEE.png',
      genre: 'Ambient Pop',
      year: '2020',
      desc: 'A floating, atmospheric single with ambient pad synths and a gentle rhythm that invites the listener to drift away.',
      youtubeId: '9q8c1b2t_8g'
    },
    {
      title: 'Roja',
      image: 'assets/ROJA.png',
      genre: 'Romantic Acoustic',
      year: '2021',
      desc: 'A sweet, lyrical dedication built around soft acoustic layers and direct, heartfelt declarations of love.',
      youtubeId: '7p8c1b2t_9g'
    },
    {
      title: 'Wedikawe',
      image: 'assets/WEDIKAWE.png',
      genre: 'Theatrical Rock',
      year: '2022',
      desc: 'An energetic, dramatic track that compares life to a stage play, blending rock energy with theatrical vocal delivery.',
      youtubeId: '1p8c1b2t_2g'
    }
  ];

  // Collabs section removed — no collab data or embeds.

  const awardData = [
    {
      event: 'Derana CloseUp Music Video Awards 2025',
      name: 'Best Alternative Video',
      song: 'Mawa Hoyan',
      detail: 'Awarded Best Alternative Video for "Mawa Hoyan"',
      image: 'assets/derana music awards.jpg',
      caption: 'Derana Music Video Awards'
    },
    {
      event: 'Derana CloseUp Music Video Awards 2025',
      name: 'Best R&B Video',
      song: 'Aprakashitha',
      detail: 'Awarded Best R&B Video for "Aprakashitha"',
      image: 'assets/derana music awards.jpg',
      caption: 'Derana Music Video Awards'
    },
    {
      event: 'Derana CloseUp Music Video Awards 2025',
      name: 'Jury Award — Cinematography',
      song: 'Mawa Hoyan',
      detail: 'Jury recognition for cinematography for "Mawa Hoyan"',
      image: 'assets/derana music awards.jpg',
      caption: 'Derana Music Video Awards'
    },
    {
      event: 'Derana CloseUp Music Video Awards 2025',
      name: 'Award for Collaborating Talents',
      song: 'Mawa Hoyan & Aprakashitha',
      detail: 'Recognising collaborating talents and crew across both music videos',
      image: 'assets/trophy.jpg',
      caption: 'Derana Music Video Awards'
    },
    {
      event: 'Raigam Tele Awards',
      name: 'Best Music Video',
      song: 'Pandama',
      detail: 'Awarded Best Music Video at the Raigam Tele Awards',
      image: 'assets/raigam.jpg',
      caption: 'Raigam Tele Awards'
    }
  ];

  const fanLettersStorageKey = 'dhanith-sri-fan-letters';
  

  const songsGrid = document.getElementById('songsGrid');
  const awardsGrid = document.getElementById('awardsGrid');
  const fanLetterForm = document.getElementById('fanLetterForm');
  const fanLetterList = document.getElementById('fanLetterList');
  const fanLetterCount = document.getElementById('fanLetterCount');
  const fanLetterStatus = document.getElementById('fanLetterStatus');
  const fanNameInput = document.getElementById('fanName');
  const fanSubjectInput = document.getElementById('fanSubject');
  const fanMessageInput = document.getElementById('fanMessage');
  const mobileMenu = document.getElementById('mobileMenu');
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.getElementById('siteNav');
  const loader = document.querySelector('.loader');
  const loaderFill = document.querySelector('.loader-fill');
  const html = document.documentElement;

  // Immersive Modal Constants
  const songModal = document.getElementById('songModal');
  const modalPoster = document.getElementById('modalPoster');
  const modalGenre = document.getElementById('modalGenre');
  const modalYear = document.getElementById('modalYear');
  const modalSongTitle = document.getElementById('modalSongTitle');
  const modalDescription = document.getElementById('modalDescription');
  const modalEmbed = document.getElementById('modalEmbed');
  const modalYoutubeLink = document.getElementById('modalYoutubeLink');
  const modalSpotifyLink = document.getElementById('modalSpotifyLink');
  const modalCloseBtn = document.getElementById('modalCloseBtn');

  function openSongModal(song) {
    if (!songModal) return;

    modalPoster.src = song.image;
    modalPoster.alt = `${song.title} artwork`;
    modalGenre.textContent = song.genre || 'Alternative Fusion';
    modalYear.textContent = song.year || '2018';
    modalSongTitle.textContent = song.title;
    modalDescription.textContent = song.desc || 'A premium track by Dhanith Sri celebrating alternative and traditional Sri Lankan music.';

    // YouTube Embed Player
    if (song.youtubeId) {
      modalEmbed.innerHTML = `
        <iframe src="https://www.youtube.com/embed/${song.youtubeId}?autoplay=0" 
                title="${song.title} video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowfullscreen></iframe>`;
    } else {
      modalEmbed.innerHTML = `
        <div class="no-player-preview">
          <p>No audio preview available for this track.</p>
        </div>`;
    }

    // Streaming Links
    const searchName = encodeURIComponent(`Dhanith Sri ${song.title}`);
    modalYoutubeLink.href = song.youtubeId ? `https://www.youtube.com/watch?v=${song.youtubeId}` : `https://www.youtube.com/results?search_query=${searchName}`;
    modalSpotifyLink.href = `https://open.spotify.com/search/${searchName}`;

    // Display overlay and body scroll-lock
    songModal.classList.add('is-visible');
    songModal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');

    // GSAP Immersive Entry Transition
    gsap.fromTo(songModal, 
      { opacity: 0 }, 
      { opacity: 1, duration: 0.4, ease: 'power2.out' }
    );
    gsap.fromTo('.modal-wrapper', 
      { scale: 0.9, y: 30, opacity: 0 }, 
      { scale: 1, y: 0, opacity: 1, duration: 0.6, ease: 'back.out(1.2)', delay: 0.1 }
    );
  }

  function closeSongModal() {
    if (!songModal || !songModal.classList.contains('is-visible')) return;

    // GSAP Exit Transition
    gsap.to('.modal-wrapper', {
      scale: 0.94,
      y: 20,
      opacity: 0,
      duration: 0.35,
      ease: 'power2.in'
    });
    
    gsap.to(songModal, {
      opacity: 0,
      duration: 0.35,
      ease: 'power2.inOut',
      onComplete: () => {
        songModal.classList.remove('is-visible');
        songModal.setAttribute('aria-hidden', 'true');
        document.body.classList.remove('modal-open');
        modalEmbed.innerHTML = ''; // Stop video playback
      }
    });
  }

  function initModalEvents() {
    if (!songModal) return;

    modalCloseBtn.addEventListener('click', closeSongModal);
    
    songModal.addEventListener('click', (e) => {
      if (e.target === songModal) {
        closeSongModal();
      }
    });

    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeSongModal();
      }
    });
  }

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
        <article class="song-card song-card--poster" data-song-index="${index}" data-cursor="PLAY">
          <div class="song-card-poster">
            <img src="${imagePath}" alt="${song.title} artwork" loading="${loading}" />
          </div>
          <div class="song-card-meta">
            <h3 class="song-title">${song.title}</h3>
          </div>
        </article>`;
    }).join('');

    // Add click listeners to launch premium modal
    document.querySelectorAll('.songs-grid .song-card').forEach((card) => {
      card.addEventListener('click', () => {
        const index = card.getAttribute('data-song-index');
        openSongModal(songData[index]);
      });
    });
  }

  // Collabs removed — no renderCollabs()

  function renderAwards() {
    awardsGrid.innerHTML = awardData.map((item) => `
      <article class="award-card">
        ${item.icon ? `<div class="award-icon">${item.icon}</div>` : ''}
        <div class="award-event">${item.event}</div>
        <h3 class="award-name">${item.name}</h3>
        <div class="award-bar"></div>
        <div class="award-song">${item.song}</div>
        <p class="award-detail">${item.detail}</p>
      </article>
    `).join('');
  }

  function renderGallery() {
    // Guard: gallery markup/data were removed from the page in some builds.
    // Use `typeof` checks to avoid ReferenceError when variables/elems don't exist.
    if (typeof galleryTrack === 'undefined' || typeof galleryData === 'undefined') {
      return;
    }

    const galleryTrackEl = document.getElementById('galleryTrack');
    if (!galleryTrackEl) return;

    galleryTrackEl.innerHTML = galleryData.map((item, index) => {
      if (item.type === 'quote') {
        return `
          <article class="gallery-quote" style="--card-x:${item.x}px;--card-y:${item.y}px;--card-w:${item.w}px;--card-h:${item.h}px;">
            <p class="gallery-quote-text">${item.title}</p>
            <div class="gallery-quote-sig-wrap">
              <img class="gallery-quote-sig" src="assets/sign.png" alt="Dhanith Sri Signature" />
            </div>
          </article>
        `;
      }

      return `
        <article class="gallery-card" style="--gallery-image:url('${encodeURI(item.image)}');--card-x:${item.x}px;--card-y:${item.y}px;--card-w:${item.w}px;--card-h:${item.h}px;--card-rotate:${item.rotate || 0}deg;--card-delay:${index * 0.08}s;">
          <div class="gallery-image-wrap">
            <div class="gallery-image"></div>
          </div>
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
    // Start loader immediately so the page doesn't get visually stuck
    // if any subsequent initialization throws an error.
    startLoader();

    try {
      renderSongs();
      renderAwards();
      renderGallery();
      initFanLetters();
      initModalEvents();
      prepareHeroChars();
      bootAnimations();
    } catch (err) {
      // Log and continue — loader already running.
      console.error('initPage error:', err);
    }
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
