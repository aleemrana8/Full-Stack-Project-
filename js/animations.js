/* ============================================
   Aleem Tech AI - Animations JavaScript
   Intersection Observer & Scroll Animations
   ============================================ */

'use strict';

document.addEventListener('DOMContentLoaded', () => {
  initParallax();
  initProgressBars();
  initStaggerAnimations();
});

// ---------- Parallax Effect ----------
function initParallax() {
  const layers = document.querySelectorAll('.parallax-layer');
  if (!layers.length) return;

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    layers.forEach(layer => {
      const speed = parseFloat(layer.dataset.speed) || 0.5;
      layer.style.transform = `translateY(${scrollY * speed}px)`;
    });
  }, { passive: true });
}

// ---------- Progress Bars ----------
function initProgressBars() {
  const bars = document.querySelectorAll('.progress-fill');
  if (!bars.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  bars.forEach(bar => observer.observe(bar));
}

// ---------- Stagger Animations ----------
function initStaggerAnimations() {
  const grids = document.querySelectorAll('[data-stagger]');
  if (!grids.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const children = entry.target.children;
        Array.from(children).forEach((child, i) => {
          child.style.transitionDelay = `${i * 0.1}s`;
          child.classList.add('active');
        });
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  grids.forEach(grid => observer.observe(grid));
}
