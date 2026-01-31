(async () => {
  // Load shared header
  const header = document.getElementById('site-header');
  if (header) {
    const res = await fetch('header.html?v=' + Date.now());
    header.innerHTML = await res.text();
  }

  // Load shared footer
  const footer = document.getElementById('site-footer');
  if (footer) {
    const res = await fetch('footer.html?v=' + Date.now());
    footer.innerHTML = await res.text();
  }

  // Highlight current page in navbar
  const path = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
  document.querySelectorAll('.nav a').forEach(a => {
    const href = (a.getAttribute('href') || '').toLowerCase();
    if (href === path) a.classList.add('active');
  });

  // Set year everywhere
  const y = document.getElementById('y');
  if (y) y.textContent = new Date().getFullYear();
})();
