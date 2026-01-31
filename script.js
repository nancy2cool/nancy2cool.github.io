(async () => {
  // Load shared header
  const header = document.getElementById('site-header');
  if (header) {
    const res = await fetch('header.html');
    header.innerHTML = await res.text();
  }

  // Highlight current page
  const path = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
  document.querySelectorAll('.nav a').forEach(a => {
    const href = (a.getAttribute('href') || '').toLowerCase();
    if (href === path) a.classList.add('active');
  });
})();
