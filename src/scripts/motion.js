/**
 * motion.js — the whole interaction layer, ~2KB, no dependencies.
 *
 * Reimplements only the site-kit primitives this page actually uses (scroll
 * reveals, staggered groups, nav solidify, footer aurora dots, magnetic CTAs).
 * The scrub/flipbook engine that GSAP + ScrollTrigger + Lenis exist for is not
 * used here, so pulling ~100KB of render-blocking CDN libraries would cost
 * mobile LCP for nothing.
 *
 * Everything below is progressive enhancement: with JS disabled the CSS
 * `html:not(.js)` rules leave all content visible.
 */
(function () {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---- film grain (injected, so the markup stays clean) ---- */
  if (!document.querySelector('.grain')) {
    const g = document.createElement('div');
    g.className = 'grain';
    g.setAttribute('aria-hidden', 'true');
    document.body.appendChild(g);
  }

  /* ---- nav solidify on scroll ---- */
  const nav = document.querySelector('.nav');
  if (nav) {
    const onScroll = () => nav.classList.toggle('solid', window.scrollY > 60);
    addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ---- footer aurora dots ---- */
  const fx = document.querySelector('.footfx');
  if (fx && !reduce) {
    for (let i = 0; i < 18; i++) {
      const d = document.createElement('span');
      d.className = 'dot';
      d.style.left = (4 + Math.random() * 92).toFixed(1) + '%';
      d.style.animationDuration = (6 + Math.random() * 7).toFixed(1) + 's';
      d.style.animationDelay = (-Math.random() * 9).toFixed(1) + 's';
      fx.appendChild(d);
    }
  }

  /* ---- reveals ---- */
  if (reduce) return;

  // Index the children of every stagger group so CSS can delay them in turn.
  document.querySelectorAll('[data-reveal-group]').forEach((group) => {
    [...group.children].forEach((child, i) => child.style.setProperty('--i', i));
  });

  const targets = document.querySelectorAll('[data-reveal],[data-reveal-group]');
  if (!('IntersectionObserver' in window) || !targets.length) {
    targets.forEach((t) => t.classList.add('in'));
    return;
  }

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        // Reveal on entry, but ALSO reveal anything that is already above the
        // viewport. A fast scroll or a nav anchor jump can carry a section past
        // the fold without it ever intersecting, and without this it would stay
        // at opacity 0 permanently.
        const passed = e.boundingClientRect.bottom < 0;
        if (!e.isIntersecting && !passed) return;
        e.target.classList.add('in');
        io.unobserve(e.target);
      });
    },
    { rootMargin: '0px 0px -10% 0px', threshold: 0.12 }
  );

  targets.forEach((t) => io.observe(t));

  /* ---- magnetic buttons (pointer devices only) ---- */
  if (matchMedia('(hover:hover) and (pointer:fine)').matches) {
    document.querySelectorAll('[data-magnetic]').forEach((b) => {
      b.addEventListener('mousemove', (e) => {
        const r = b.getBoundingClientRect();
        const x = e.clientX - r.left - r.width / 2;
        const y = e.clientY - r.top - r.height / 2;
        b.style.transform = `translate(${x * 0.18}px, ${y * 0.18}px)`;
      });
      b.addEventListener('mouseleave', () => {
        b.style.transform = '';
      });
    });
  }
})();
