

document.addEventListener('DOMContentLoaded', () => {
  const sidebarTrigger = document.getElementById('sidebar-trigger');
  const sidebar = document.getElementById('sidebar');
  const mask = document.getElementById('mask');
  const searchTrigger = document.getElementById('search-trigger');
  const searchCancel = document.getElementById('search-cancel');
  const topbar = document.getElementById('topbar');
  const searchInput = document.getElementById('search-input');

  function openSidebar() {
    if (sidebar && mask) {
      sidebar.classList.add('open');
      mask.classList.remove('d-none');
      mask.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
      if (sidebarTrigger) {
        sidebarTrigger.setAttribute('aria-expanded', 'true');
      }
    }
  }

  function closeSidebar() {
    if (sidebar && mask) {
      sidebar.classList.remove('open');
      mask.classList.add('d-none');
      mask.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
      if (sidebarTrigger) {
        sidebarTrigger.setAttribute('aria-expanded', 'false');
      }
    }
  }

  if (sidebarTrigger) {
    sidebarTrigger.addEventListener('click', (e) => {
      e.stopPropagation();
      if (sidebar && sidebar.classList.contains('open')) {
        closeSidebar();
      } else {
        openSidebar();
      }
    });
  }

  if (mask) {
    mask.addEventListener('click', () => {
      closeSidebar();
    });
  }

  if (searchTrigger && topbar) {
    searchTrigger.addEventListener('click', (e) => {
      e.stopPropagation();
      topbar.classList.add('search-active');
      if (searchInput) {
        searchInput.focus();
      }
    });
  }

  if (searchCancel && topbar) {
    searchCancel.addEventListener('click', (e) => {
      e.stopPropagation();
      topbar.classList.remove('search-active');
      if (searchInput) {
        searchInput.value = '';
        searchInput.blur();
      }
    });
  }

  window.addEventListener('resize', () => {
    if (window.innerWidth >= 850) {
      closeSidebar();
      if (topbar && topbar.classList.contains('search-active')) {
        topbar.classList.remove('search-active');
      }
    }
  });
});