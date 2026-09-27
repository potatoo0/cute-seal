document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', event => {
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      event.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

const cards = document.querySelectorAll('.fact-card, .gallery-card');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: .12 });

cards.forEach(card => {
  card.style.opacity = '0';
  card.style.transform = 'translateY(22px)';
  card.style.transition = 'opacity .7s ease, transform .7s ease';
  observer.observe(card);
});
