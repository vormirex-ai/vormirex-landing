document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.menu-toggle'); // Changed ID to class
  const navLinks = document.querySelector('.nav-links');
  const navItems = document.querySelectorAll('.nav-link');

  // 1. Mobile Menu Toggle - USES .open CLASS (matches CSS)
  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      menuToggle.classList.toggle('open'); // Changed from 'is-active'
      navLinks.classList.toggle('open'); // Changed from 'active'
    });
  }

  // 2. Highlight Active Page (unchanged)
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  navItems.forEach((link) => {
    link.classList.remove('active');
    if (link.getAttribute('href') === currentPath) {
      link.classList.add('active');
    }
  });

  // 3. Close mobile menu when clicking any link
  navItems.forEach((link) => {
    link.addEventListener('click', () => {
      menuToggle.classList.remove('open');
      navLinks.classList.remove('open');
    });
  });

  // 4. Floating Chat (unchanged)
  document.querySelector('.floating-chat')?.addEventListener('click', () => {
    alert('AI Chat coming soon!');
  });
});
