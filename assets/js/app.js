

document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('search-input');

  window.addEventListener('keydown', (e) => {
    if (e.key === '/' && document.activeElement !== searchInput && !['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) {
      e.preventDefault();
      if (searchInput) {
        searchInput.focus();
      }
    } else if (e.key === 'Escape' && document.activeElement === searchInput) {
      searchInput.blur();
    }
  });
});