// Mobile Menu Toggle
const menuToggle = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  menuToggle.classList.toggle('is-active');
});

// Close mobile menu when a link is clicked
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
    menuToggle.classList.remove('is-active');
  });
});

// Single Page Navigation - Show only one section
const sections = document.querySelectorAll('.page-section');
const navItems = document.querySelectorAll('.nav-link');

function showSection(id) {
  sections.forEach(sec => sec.classList.remove('active'));
  document.getElementById(id)?.classList.add('active');

  // Update active navbar link
  navItems.forEach(item => item.classList.remove('active'));
  document.querySelector(`a[href="#${id}"]`)?.classList.add('active');

  // Update URL
  history.pushState(null, null, `#${id}`);
}

// Click handlers
navItems.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const target = link.getAttribute('href').substring(1);
    showSection(target);
  });
});

// On load & back button
window.addEventListener('load', () => {
  const hash = window.location.hash.substring(1) || 'home';
  showSection(hash);
});
window.addEventListener('popstate', () => {
  const hash = window.location.hash.substring(1) || 'home';
  showSection(hash);
});

// Scroll Reveal Animation
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.hidden').forEach(el => observer.observe(el));

// Floating Chat
document.querySelector('.floating-chat').addEventListener('click', () => {
  alert("AI Chatbot coming soon!");
});
// Contact Form Success Message
document.getElementById('contactForm')?.addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Thank you! We have received your message. Will reply within 24 hours');
  this.reset();
});

// Close button goes back to home
document.querySelector('.close-contact')?.addEventListener('click', () => {
  showSection('home');
});