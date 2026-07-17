const switchBtn = document.getElementById('theme-switch');
const bgLight = document.getElementById('bg-light');
const bgDark = document.getElementById('bg-dark');
const workLinks = document.getElementById('work-links');
let isLight = true;

function toggleTheme() {
  if (isLight) {
    bgLight.classList.add('hidden');
    bgDark.classList.remove('hidden');
    workLinks.classList.remove('hidden');
    isLight = false;
  } else {
    bgDark.classList.add('hidden');
    bgLight.classList.remove('hidden');
    workLinks.classList.add('hidden');
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
