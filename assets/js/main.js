/* ==========================================================================
   main.js: interactive features. Each feature is its own function.
   Needs projects.js to be loaded first (project cards are created there).
   ========================================================================== */
(function () {
  'use strict';

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---- 1. Mobile navigation ---- */
  function initNav() {
    var toggle = document.querySelector('.nav-toggle');
    var nav = document.getElementById('site-nav');
    if (!toggle || !nav) return;

    function setOpen(open) {
      nav.setAttribute('data-open', open ? 'true' : 'false');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      toggle.textContent = open ? 'Close' : 'Menu';
    }
    toggle.addEventListener('click', function () { setOpen(nav.getAttribute('data-open') !== 'true'); });
    nav.addEventListener('click', function (e) { if (e.target.closest('a')) setOpen(false); });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && nav.getAttribute('data-open') === 'true') { setOpen(false); toggle.focus(); }
    });
  }

  /* ---- 2. Light / dark theme ---- */
  function initTheme() {
    var btn = document.querySelector('.theme-toggle');
    if (!btn) return;
    var root = document.documentElement;

    function apply(theme) {
      root.setAttribute('data-theme', theme);
      btn.textContent = theme === 'dark' ? 'Light' : 'Dark';
      btn.setAttribute('aria-label', 'Switch to ' + (theme === 'dark' ? 'light' : 'dark') + ' theme');
    }
    apply(root.getAttribute('data-theme') || 'light');

    btn.addEventListener('click', function () {
      var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      apply(next);
      try { localStorage.setItem('theme', next); } catch (e) { /* storage unavailable */ }
    });
  }

  /* ---- 3. Typing line under the profile photo ---- */
  function initTyping() {
    var target = document.querySelector('.typed');
    if (!target) return;
    var phrases;
    try { phrases = JSON.parse(target.getAttribute('data-phrases')); } catch (e) { return; }
    if (!phrases || !phrases.length) return;

    // Respect reduced motion: show the first phrase and stop.
    if (reduceMotion) { target.textContent = phrases[0]; return; }

    var p = 0, i = 0, deleting = false;
    function tick() {
      var full = phrases[p];
      i += deleting ? -1 : 1;
      target.textContent = full.slice(0, i);

      var delay = deleting ? 25 : 55;
      if (!deleting && i === full.length) { deleting = true; delay = 1800; }
      else if (deleting && i === 0) { deleting = false; p = (p + 1) % phrases.length; delay = 400; }
      setTimeout(tick, delay);
    }
    tick();
  }

  /* ---- 4. Scroll reveal (once per element) ---- */
  function initReveal() {
    var items = document.querySelectorAll('.reveal');
    if (!items.length) return;
    if (reduceMotion || !('IntersectionObserver' in window)) {
      items.forEach(function (n) { n.classList.add('is-visible'); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('is-visible'); io.unobserve(e.target); }
      });
    }, { threshold: 0.12 });
    items.forEach(function (n) { io.observe(n); });
  }

  /* ---- 5. Highlight the current section in the navigation ---- */
  function initScrollSpy() {
    var links = document.querySelectorAll('.nav__link[href^="#"]');
    if (!links.length || !('IntersectionObserver' in window)) return;
    var map = {};
    links.forEach(function (a) { map[a.getAttribute('href').slice(1)] = a; });

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        links.forEach(function (a) { a.removeAttribute('aria-current'); });
        var link = map[e.target.id];
        if (link) link.setAttribute('aria-current', 'true');
      });
    }, { rootMargin: '-45% 0px -50% 0px' });

    Object.keys(map).forEach(function (id) {
      var section = document.getElementById(id);
      if (section) io.observe(section);
    });
  }

  /* ---- 6. Project filter ---- */
  function initFilter() {
    var bar = document.querySelector('.filter-bar');
    var cards = document.querySelectorAll('.project-card');
    if (!bar || !cards.length) return;

    bar.addEventListener('click', function (e) {
      var btn = e.target.closest('.filter-btn');
      if (!btn) return;
      var filter = btn.getAttribute('data-filter');
      bar.querySelectorAll('.filter-btn').forEach(function (b) {
        b.setAttribute('aria-pressed', b === btn ? 'true' : 'false');
      });
      cards.forEach(function (c) {
        c.hidden = !(filter === 'all' || c.getAttribute('data-category') === filter);
      });
    });
  }

  /* ---- 7. Copy email ---- */
  function initCopyEmail() {
    var btn = document.querySelector('[data-copy-email]');
    var status = document.querySelector('.copy-status');
    if (!btn) return;
    btn.addEventListener('click', function () {
      var email = btn.getAttribute('data-copy-email');
      var done = function (msg) { if (status) status.textContent = msg; };
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(email).then(
          function () { done('Email address copied.'); },
          function () { done('Could not copy. Please select the address and copy it manually.'); }
        );
      } else {
        done('Copy is not supported in this browser. Please copy the address manually.');
      }
    });
  }

  /* ---- 8. Back to top ---- */
  function initToTop() {
    var btn = document.querySelector('.to-top');
    if (!btn) return;
    window.addEventListener('scroll', function () {
      btn.classList.toggle('is-shown', window.scrollY > 700);
    }, { passive: true });
    btn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
    });
  }

  initNav(); initTheme(); initTyping(); initReveal();
  initScrollSpy(); initFilter(); initCopyEmail(); initToTop();
})();
