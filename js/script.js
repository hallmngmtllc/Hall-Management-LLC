document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('#year').forEach(el => el.textContent = new Date().getFullYear());
  const items = document.querySelectorAll('.card, .stat, .service-item');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if(e.isIntersecting) e.target.classList.add('in-view');
    });
  }, {threshold: 0.12});
  items.forEach(i => { i.style.opacity = 0; i.style.transform = 'translateY(18px)'; i.style.transition = 'all 0.6s cubic-bezier(.2,.9,.3,1)'; io.observe(i); });
  const navToggle = document.getElementById('nav-toggle');
  const nav = document.querySelector('.site-nav');
  const navToggle2 = document.getElementById('nav-toggle-2');
  const navToggle3 = document.getElementById('nav-toggle-3');
  [navToggle, navToggle2, navToggle3].forEach(btn => {
    if(!btn) return;
    btn.addEventListener('click', () => {
      if(nav.classList.contains('open')) nav.classList.remove('open'); else nav.classList.add('open');
    });
  });
  const animateIn = () => { document.querySelectorAll('.in-view').forEach(el => { el.style.opacity = 1; el.style.transform = 'translateY(0)'; }); };
  setInterval(animateIn, 150);
});