

document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('search-input');
  const searchResultWrapper = document.getElementById('search-result-wrapper');
  const searchResults = document.getElementById('search-results');
  const layoutRow = document.querySelector('.layout-row');
  const searchCancel = document.getElementById('search-cancel');
  const topbar = document.getElementById('topbar');

  const postCards = Array.from(document.querySelectorAll('#post-list .card-wrapper'));
  const postsIndex = postCards.map((card) => {
    const titleEl = card.querySelector('.card-title');
    const contentEl = card.querySelector('.card-text p');
    const linkEl = card.querySelector('a.post-preview');
    const timeEl = card.querySelector('.post-meta time');
    const categoryEl = card.querySelector('.post-meta .categories');

    return {
      title: titleEl ? titleEl.textContent.trim() : '',
      content: contentEl ? contentEl.textContent.trim() : '',
      url: linkEl ? linkEl.getAttribute('href') : '#',
      date: timeEl ? timeEl.textContent.trim() : '',
      categories: categoryEl ? categoryEl.textContent.trim() : ''
    };
  });

  function closeSearch() {
    if (searchInput) {
      searchInput.value = '';
      searchInput.blur();
    }
    if (searchResultWrapper) {
      searchResultWrapper.classList.remove('active');
    }
    if (layoutRow) {
      layoutRow.style.display = '';
    }
    if (topbar) {
      topbar.classList.remove('search-active');
    }
    if (searchResults) {
      searchResults.innerHTML = '';
    }
  }

  function performSearch(query) {
    const cleanQuery = query.trim().toLowerCase();
    if (!cleanQuery) {
      closeSearch();
      return;
    }

    if (layoutRow) {
      layoutRow.style.display = 'none';
    }
    if (searchResultWrapper) {
      searchResultWrapper.classList.add('active');
    }

    const matches = postsIndex.filter((post) => {
      return (
        post.title.toLowerCase().includes(cleanQuery) ||
        post.content.toLowerCase().includes(cleanQuery) ||
        post.categories.toLowerCase().includes(cleanQuery)
      );
    });

    if (!searchResults) return;

    if (matches.length === 0) {
      searchResults.innerHTML = `
        <div class="no-results">
          <p class="mt-4 text-muted">Oops! No results found for "<strong>${escapeHtml(cleanQuery)}</strong>".</p>
        </div>
      `;
    } else {
      searchResults.innerHTML = matches
        .map(
          (match) => `
          <article>
            <h2><a href="${escapeHtml(match.url)}">${escapeHtml(match.title)}</a></h2>
            <div class="post-meta text-muted mb-2">
              <i class="far fa-calendar fa-fw me-1"></i> ${escapeHtml(match.date)}
              ${match.categories ? `<i class="far fa-folder-open fa-fw ms-3 me-1"></i> ${escapeHtml(match.categories)}` : ''}
            </div>
            <p>${escapeHtml(match.content)}</p>
          </article>
        `
        )
        .join('');
    }
  }

  function escapeHtml(str) {
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  window.addEventListener('keydown', (e) => {
    if (e.key === '/' && document.activeElement !== searchInput && !['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) {
      e.preventDefault();
      if (searchInput) {
        searchInput.focus();
      }
    } else if (e.key === 'Escape') {
      closeSearch();
    }
  });

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      performSearch(e.target.value);
    });
  }

  if (searchCancel) {
    searchCancel.addEventListener('click', () => {
      closeSearch();
    });
  }
});