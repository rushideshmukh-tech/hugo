const localMode = localStorage.getItem('theme');

// Default to dark mode if no preference has been set
if (localMode === null) {
  localStorage.setItem('theme', 'dark');
  document.documentElement.setAttribute('data-dark-mode', '');
}

if (localMode === 'dark') {
  document.documentElement.setAttribute('data-dark-mode', '');
}
