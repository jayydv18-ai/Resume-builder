const navToggle = document.querySelector('.nav-toggle');
const siteNav = document.querySelector('.site-nav');
if (navToggle && siteNav) {
  navToggle.addEventListener('click', () => {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!expanded));
    siteNav.classList.toggle('active');
  });
}

const startBuilderButton = document.getElementById('start-builder-btn');
const resumeToolSection = document.querySelector('#resume-tool');
if (startBuilderButton && resumeToolSection) {
  startBuilderButton.addEventListener('click', (event) => {
    if (window.location.pathname.endsWith('index.html') || window.location.pathname.endsWith('/')) {
      event.preventDefault();
      resumeToolSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
}

const contactForm = document.querySelector('.contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    alert('Thank you! Your message has been submitted.');
    contactForm.reset();
  });
}
