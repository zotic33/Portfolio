const switchBtn = document.getElementById('theme-switch');
const body = document.body;
const linksContainer = document.getElementById('work-links');

switchBtn.addEventListener('click', () => {
  if (body.classList.contains('light')) {
    body.classList.replace('light', 'dark');
    linksContainer.classList.remove('hidden');
  } else {
    body.classList.replace('dark', 'light');
    linksContainer.classList.add('hidden');
  }
});