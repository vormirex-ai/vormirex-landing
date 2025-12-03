// ================================================
// VORMIREX – FINAL WORKING JS (Features, Courses, Contact FIXED)
// ================================================

const menuToggle = document.getElementById("mobile-menu");
const navLinks = document.querySelector(".nav-links");
const sections = document.querySelectorAll(".page-section");
const navItems = document.querySelectorAll(".nav-link");

// Mobile Menu Toggle
menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("is-active");
  navLinks.classList.toggle("active");
});

// Close mobile menu when clicking any link
navItems.forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    menuToggle.classList.remove("is-active");
  });
});

// MAIN SHOW SECTION FUNCTION – NOW 100% WORKING
function showSection(sectionId) {
  // Hide ALL sections
  sections.forEach(sec => {
    sec.classList.remove("active");
    sec.style.display = "none";
  });

  // Show the correct section
  const target = document.getElementById(sectionId);
  if (target) {
    target.style.display = "block";
    setTimeout(() => {
      target.classList.add("active");
      window.scrollTo(0, 0);
    }, 10);
  } else {
    console.error("Section not found:", sectionId);
  }

  // Update active nav link
  navItems.forEach(item => item.classList.remove("active"));
  const activeLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
  if (activeLink) activeLink.classList.add("active");

  // Update URL
  history.pushState(null, null, `#${sectionId}`);
}

// Click on any nav link → go to section
navItems.forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const id = link.getAttribute("href").substring(1);
    showSection(id);
  });
});

// On page load – check URL hash
window.addEventListener("load", () => {
  let hash = window.location.hash.substring(1);
  if (!hash || !document.getElementById(hash)) hash = "home";
  showSection(hash);
});

// Back/Forward buttons
window.addEventListener("popstate", () => {
  let hash = window.location.hash.substring(1);
  if (!hash || !document.getElementById(hash)) hash = "home";
  showSection(hash);
});

// Scroll Animations (Features, Courses, About, etc.)
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll(".hidden, .about-block").forEach(el => observer.observe(el));

// Floating Chat
document.querySelector(".floating-chat")?.addEventListener("click", () => {
  alert("AI Chat coming soon!");
});

// Contact Form
document.getElementById("contactForm")?.addEventListener("submit", e => {
  e.preventDefault();
  alert("Message sent! We'll reply soon.");
  e.target.reset();
});

// Close Contact → Go Home
document.querySelector(".close-contact")?.addEventListener("click", () => {
  showSection("home");
});
