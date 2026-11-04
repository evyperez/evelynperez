const nav = document.getElementById('nav');
if (nav) {
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 40);
  }, { passive: true });
}

const hamburger = document.getElementById('nav-hamburger');
if (nav && hamburger) {
  hamburger.addEventListener('click', (e) => {
    e.stopPropagation();
    const open = nav.classList.toggle('menu-open');
    hamburger.setAttribute('aria-expanded', String(open));
  });

  document.querySelectorAll('#nav-links a').forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('menu-open');
      hamburger.setAttribute('aria-expanded', 'false');
    });
  });

  document.addEventListener('click', (e) => {
    if (nav.classList.contains('menu-open') && !nav.contains(e.target)) {
      nav.classList.remove('menu-open');
      hamburger.setAttribute('aria-expanded', 'false');
    }
  });
}

const langBtn      = document.getElementById('lang-btn');
const langDropdown = document.getElementById('lang-dropdown');

if (langBtn && langDropdown) {
  langBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    const isOpen = langDropdown.classList.toggle('open');
    langBtn.setAttribute('aria-expanded', String(isOpen));
  });

  document.addEventListener('click', () => {
    langDropdown.classList.remove('open');
    langBtn.setAttribute('aria-expanded', 'false');
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && langDropdown.classList.contains('open')) {
      langDropdown.classList.remove('open');
      langBtn.setAttribute('aria-expanded', 'false');
      langBtn.focus();
    }
  });

  langDropdown.addEventListener('click', (e) => e.stopPropagation());
}

const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = contactForm.querySelector('[type="submit"]');
    const status = contactForm.querySelector('.contact__status');
    // key: 'sent', 'error' or null to clear the message
    const showStatus = (key) => {
      if (!status) return;
      status.textContent = key ? status.dataset[key] : '';
      status.classList.toggle('contact__status--error', key === 'error');
    };
    if (btn) btn.disabled = true;
    showStatus(null);

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(new FormData(contactForm)).toString(),
    })
      .then((res) => {
        if (!res.ok) throw new Error(res.statusText);
        showStatus('sent');
        contactForm.reset();
        if (btn) btn.disabled = false;
      })
      .catch(() => {
        showStatus('error');
        if (btn) btn.disabled = false;
      });
  });
}

if (typeof Glide !== 'undefined' && document.getElementById('testimonials-glide')) {
  new Glide('#testimonials-glide', {
    type:        'carousel',
    autoplay:    5000,
    hoverpause:  true,
    animationDuration: 500,
  }).mount();
}

const projectsRoot = document.getElementById('projects-glide');
if (typeof Glide !== 'undefined' && projectsRoot) {
  const perView = () => (window.innerWidth < 640 ? 1 : window.innerWidth < 1000 ? 2 : 3);

  const projectsGlide = new Glide(projectsRoot, {
    type: 'slider',
    rewind: false,
    bound: true,
    perView: perView(),
    gap: 20,
    animationDuration: 500,
  }).mount();

  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => projectsGlide.update({ perView: perView() }), 150);
  });
}

const blogListPage = document.getElementById('blog-list-page');
const blogSearch = document.getElementById('blog-search');
const blogViewToggle = document.getElementById('blog-view-toggle');
const postRows = document.getElementById('post-rows');
const blogListEmpty = document.getElementById('blog-list-empty');

if (blogListPage && postRows) {
  const BLOG_VIEW_KEY = 'ep-blog-view';
  const blogItems = Array.from(postRows.querySelectorAll('[data-post-item]'));

  function applyBlogView(view) {
    const normalizedView = view === 'grid' ? 'grid' : 'list';
    postRows.dataset.blogView = normalizedView;
    localStorage.setItem(BLOG_VIEW_KEY, normalizedView);
    if (blogViewToggle) {
      const isGrid = normalizedView === 'grid';
      blogViewToggle.textContent = isGrid
        ? (blogViewToggle.dataset.listLabel || 'List')
        : (blogViewToggle.dataset.gridLabel || 'Grid');
      blogViewToggle.setAttribute('aria-pressed', String(isGrid));
    }
    if (normalizedView === 'list') measureExcerpts();
  }

  // List view: show a good part of each article; "read more" opens the rest in place.
  const fullBlocks = Array.from(postRows.querySelectorAll('[data-post-full]'));

  function measureExcerpts() {
    fullBlocks.forEach((block) => {
      const body = block.querySelector('.post-row__body');
      if (block.classList.contains('is-open')) return;
      // short posts fit entirely: no fade, no button
      block.classList.toggle('is-short', body.scrollHeight <= body.clientHeight + 24);
    });
  }

  fullBlocks.forEach((block) => {
    const btn = block.querySelector('.post-row__more');
    btn?.addEventListener('click', () => {
      const open = block.classList.toggle('is-open');
      btn.setAttribute('aria-expanded', String(open));
      btn.textContent = open ? btn.dataset.less : btn.dataset.more;
      if (!open) block.closest('.post-row')?.scrollIntoView({ block: 'start', behavior: 'smooth' });
    });
  });
  window.addEventListener('load', () => {
    if (postRows.dataset.blogView === 'list') measureExcerpts();
  });

  // Searches all posts (not only the current page). Ignores accents and case.
  const blogPagination = document.getElementById('blog-pagination');
  const currentPage = postRows.dataset.currentPage || '1';
  const normalize = (text) => text.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
  blogItems.forEach((item) => { item.dataset.search = normalize(item.dataset.search || ''); });

  function filterBlogPosts(query) {
    const words = normalize(query.trim()).split(/\s+/).filter(Boolean);
    const searching = words.length > 0;
    let visibleCount = 0;

    blogItems.forEach((item) => {
      const matches = searching
        ? words.every((word) => item.dataset.search.includes(word))
        : (item.dataset.page || '1') === currentPage;
      item.hidden = !matches;
      if (matches) visibleCount += 1;
    });

    if (blogPagination) blogPagination.hidden = searching;
    if (blogListEmpty) blogListEmpty.hidden = visibleCount !== 0;
    if (postRows.dataset.blogView === 'list') measureExcerpts();
  }

  applyBlogView(localStorage.getItem(BLOG_VIEW_KEY) || 'grid');
  filterBlogPosts('');

  blogViewToggle?.addEventListener('click', () => {
    applyBlogView(postRows.dataset.blogView === 'grid' ? 'list' : 'grid');
  });

  blogSearch?.addEventListener('input', () => {
    filterBlogPosts(blogSearch.value);
  });
}

const html       = document.documentElement;
const themeBtn   = document.getElementById('theme-btn');
const darkBtn    = document.getElementById('dark-btn');

const THEMES = ['forest', 'tejo', 'lighthouse', 'flowers'];

let savedTheme = localStorage.getItem('ep-theme') || 'flowers';
let savedMode  = localStorage.getItem('ep-mode')  || 'light';

if (!THEMES.includes(savedTheme)) {
  savedTheme = 'flowers';
}

function applyTheme(theme) {
  html.dataset.theme = theme;
  localStorage.setItem('ep-theme', theme);
}

function applyMode(mode) {
  html.dataset.mode = mode;
  localStorage.setItem('ep-mode', mode);
}

applyTheme(savedTheme);
applyMode(savedMode);

if (themeBtn) {
  themeBtn.addEventListener('click', () => {
    const next = THEMES[(THEMES.indexOf(html.dataset.theme) + 1) % THEMES.length];
    applyTheme(next);
  });
}

if (darkBtn) {
  darkBtn.addEventListener('click', () => {
    applyMode(html.dataset.mode === 'dark' ? 'light' : 'dark');
  });
}

// ── Full-screen images for articles and projects ──
const lightbox = document.getElementById('lightbox');
const lightboxFigures = Array.from(document.querySelectorAll('.article__body .content-figure'));

if (lightbox && lightboxFigures.length) {
  const lbImg     = lightbox.querySelector('.lightbox__img');
  const lbStage   = lightbox.querySelector('.lightbox__stage');
  const lbCaption = lightbox.querySelector('.lightbox__caption');
  const lbCount   = lightbox.querySelector('.lightbox__count');
  const lbPrev    = lightbox.querySelector('.lightbox__nav--prev');
  const lbNext    = lightbox.querySelector('.lightbox__nav--next');
  const total     = lightboxFigures.length;
  let current = 0;

  // Each image becomes a button (opens on click, Enter or Space)
  const images = lightboxFigures.map((figure, i) => {
    const img = figure.querySelector('img');
    const media = img.closest('picture') || img;
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'content-figure__zoom';
    btn.setAttribute('aria-label', `${lightbox.dataset.openLabel}: ${img.alt}`);
    media.replaceWith(btn);
    btn.appendChild(media);
    btn.addEventListener('click', () => openLightbox(i));
    return img;
  });

  function show(i) {
    current = (i + total) % total;
    const img = images[current];
    lbImg.src = img.currentSrc || img.src;
    lbImg.alt = img.alt;
    lbCaption.textContent = lightboxFigures[current].querySelector('figcaption')?.textContent.trim() || '';
    lbCount.textContent = total > 1 ? `${current + 1} / ${total}` : '';
    lbStage.scrollTop = 0;
  }

  function openLightbox(i) {
    show(i);
    lbPrev.hidden = lbNext.hidden = total < 2;
    document.documentElement.style.overflow = 'hidden';
    lightbox.showModal();
    lbStage.focus();
  }

  lightbox.addEventListener('close', () => { document.documentElement.style.overflow = ''; });
  lightbox.querySelector('.lightbox__close').addEventListener('click', () => lightbox.close());
  lbPrev.addEventListener('click', () => show(current - 1));
  lbNext.addEventListener('click', () => show(current + 1));

  lightbox.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft')  { e.preventDefault(); show(current - 1); }
    if (e.key === 'ArrowRight') { e.preventDefault(); show(current + 1); }
  });

  // Clicking outside the image closes it
  lbStage.addEventListener('click', (e) => { if (e.target === lbStage) lightbox.close(); });

  // Swipe on mobile
  let touchX = null;
  lbStage.addEventListener('touchstart', (e) => { touchX = e.touches[0].clientX; }, { passive: true });
  lbStage.addEventListener('touchend', (e) => {
    if (touchX === null) return;
    const dx = e.changedTouches[0].clientX - touchX;
    if (Math.abs(dx) > 50) show(current + (dx < 0 ? 1 : -1));
    touchX = null;
  });
}

// Project navigation: if the names don't fit on one line, show only the arrows.
const projectNav = document.querySelector('[data-project-nav]');
if (projectNav) {
  const fitProjectNav = () => {
    projectNav.classList.remove('is-compact');
    const gap = parseFloat(getComputedStyle(projectNav).columnGap) || 0;
    const needed = Array.from(projectNav.querySelectorAll('.project-nav__link'))
      .reduce((sum, el) => sum + el.scrollWidth, 0) + gap;
    projectNav.classList.toggle('is-compact', needed > projectNav.clientWidth);
  };
  fitProjectNav();
  window.addEventListener('resize', fitProjectNav);
  document.fonts?.ready.then(fitProjectNav);
}
