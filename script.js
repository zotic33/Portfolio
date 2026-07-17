const switchBtn = document.getElementById('theme-switch');
const bgLight = document.getElementById('bg-light');
const bgDark = document.getElementById('bg-dark');
const workLinks = document.getElementById('work-links');
const links = document.querySelectorAll('.work-link');
let isLight = true;

function resetLinksAnimation() {
  links.forEach(link => {
    link.style.transition = '';
    link.style.transform = '';
  });
}

function animateLink(link) {
  const radius = 30;
  const deltaX = (Math.random() - 0.5) * radius * 2;
  const deltaY = (Math.random() - 0.5) * radius * 2;
  const duration = 3000 + Math.random() * 4000;

  link.style.transition = `transform ${duration}ms ease-in-out`;
  link.style.transform = `translate(${deltaX}px, ${deltaY}px)`;

  link.addEventListener('transitionend', function handler() {
    link.removeEventListener('transitionend', handler);
    animateLink(link);
  }, { once: true });
}

function startDrift() {
  links.forEach(link => animateLink(link));
}

function toggleTheme() {
  if (isLight) {
    bgLight.classList.add('hidden');
    bgDark.classList.remove('hidden');
    workLinks.classList.remove('hidden');
    isLight = false;
    startDrift();
  } else {
    bgDark.classList.add('hidden');
    bgLight.classList.remove('hidden');
    workLinks.classList.add('hidden');
    resetLinksAnimation();
    isLight = true;
  }
}

switchBtn.addEventListener('click', toggleTheme);

document.addEventListener('keydown', (e) => {
  if (e.code === 'Space') {
    e.preventDefault();
    toggleTheme();
  }
});

const modalLinks = document.querySelectorAll('.work-link');
const modals = document.querySelectorAll('.modal-overlay');
const closeButtons = document.querySelectorAll('.modal-close');

modalLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const modalId = link.getAttribute('data-modal');
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
    }
  });
});

function closeModal(modal) {
  modal.classList.add('hidden');
  document.body.style.overflow = '';
}

closeButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const modal = btn.closest('.modal-overlay');
    closeModal(modal);
  });
});

modals.forEach(modal => {
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal(modal);
    }
  });
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    modals.forEach(modal => {
      if (!modal.classList.contains('hidden')) {
        closeModal(modal);
      }
    });
  }
});
