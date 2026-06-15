(function () {
  const config = window.adminListConfig;
  if (!config) return;

  const state = {
    page: 1,
    pageSize: 10,
    filters: {},
    openActionId: ''
  };

  const els = {
    filterForm: document.querySelector('#moduleFilter'),
    searchBtn: document.querySelector('#searchBtn'),
    resetBtn: document.querySelector('#resetBtn'),
    body: document.querySelector('#moduleTableBody'),
    total: document.querySelector('#moduleTotal'),
    summary: document.querySelector('#moduleSummary'),
    pageSize: document.querySelector('#pageSizeSelect'),
    pagination: document.querySelector('#pagination'),
    notificationToggle: document.querySelector('#notificationToggle'),
    notificationMenu: document.querySelector('#notificationMenu'),
    notificationList: document.querySelector('#notificationList'),
    notificationBadge: document.querySelector('#notificationBadge'),
    markAllReadBtn: document.querySelector('#markAllReadBtn'),
    userMenuToggle: document.querySelector('#userMenuToggle'),
    userMenu: document.querySelector('#userMenu')
  };

  const escapeHTML = (value) => String(value ?? '').replace(/[&<>"']/g, (char) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;'
  }[char]));

  const normalize = (value) => String(value ?? '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  const getValue = (record, key) => key ? key.split('.').reduce((value, part) => value?.[part], record) : undefined;
  const isAll = (value) => !value || value === 'Tất cả' || value === 'all';

  function fillSelects() {
    document.querySelectorAll('select[data-filter]').forEach((select) => {
      const key = select.dataset.filter;
      const label = select.dataset.allLabel || 'Tất cả';
      const explicit = config.filterOptions?.[key];
      const values = explicit || [...new Set(config.records.map((record) => getValue(record, key)).filter(Boolean))]
        .sort((a, b) => String(a).localeCompare(String(b), 'vi'));

      select.innerHTML = [`<option value="Tất cả">${escapeHTML(label)}</option>`, ...values.map((value) => (
        `<option value="${escapeHTML(value)}">${escapeHTML(value)}</option>`
      ))].join('');
    });
  }

  function syncState() {
    state.filters = {};
    document.querySelectorAll('[data-filter]').forEach((input) => {
      state.filters[input.dataset.filter] = input.value.trim();
    });
    state.pageSize = Number(els.pageSize?.value || 10);
  }

  function recordMatches(record) {
    const searchKeys = config.searchKeys || config.columns.map((column) => column.key).filter(Boolean);
    return Object.entries(state.filters).every(([key, value]) => {
      if (isAll(value)) return true;

      if (key === 'query') {
        const haystack = searchKeys.map((searchKey) => getValue(record, searchKey)).join(' ');
        return normalize(haystack).includes(normalize(value));
      }

      if (key === 'dateFrom') {
        return String(getValue(record, config.dateKey) || '') >= value;
      }

      if (key === 'dateTo') {
        return String(getValue(record, config.dateKey) || '') <= value;
      }

      return String(getValue(record, key) || '') === value;
    });
  }

  function getFilteredRecords() {
    return config.records.filter(recordMatches);
  }

  function hasActiveFilters() {
    return Object.values(state.filters).some((value) => !isAll(value));
  }

  function formatCell(record, column) {
    const value = column.render ? column.render(record) : getValue(record, column.key);

    if (column.type === 'index') {
      return `<td class="center">${record.__index}</td>`;
    }

    if (column.type === 'code') {
      const className = column.red ? 'red-code' : 'code-link';
      return `<td><span class="${className}">${escapeHTML(value)}</span></td>`;
    }

    if (column.type === 'badge') {
      const badgeClass = config.badgeMap?.[value] || 'badge-gray';
      return `<td class="${column.center ? 'center' : ''}"><span class="module-badge ${badgeClass}">${escapeHTML(value)}</span></td>`;
    }

    if (column.type === 'stack') {
      const primary = getValue(record, column.primary);
      const secondary = getValue(record, column.secondary);
      return `<td><span class="primary-text">${escapeHTML(primary)}</span><span class="secondary-text">${escapeHTML(secondary)}</span></td>`;
    }

    if (column.type === 'datetime') {
      return `<td class="nowrap">${escapeHTML(value.date)}<br>${escapeHTML(value.time)}</td>`;
    }

    return `<td class="${column.center ? 'center' : ''}${column.nowrap ? ' nowrap' : ''}">${escapeHTML(value)}</td>`;
  }

  function renderRows(filtered) {
    const effectiveTotal = hasActiveFilters() ? filtered.length : (config.totalCount || filtered.length);
    const totalPages = Math.max(1, Math.ceil(effectiveTotal / state.pageSize));
    state.page = Math.min(state.page, totalPages);
    const startIndex = (state.page - 1) * state.pageSize;
    let rows = filtered.slice(startIndex, startIndex + state.pageSize);
    if (!rows.length && filtered.length) rows = filtered.slice(0, state.pageSize);

    if (!rows.length) {
      els.body.innerHTML = `<tr><td class="module-empty" colspan="${config.columns.length + 1}">Không tìm thấy dữ liệu phù hợp với điều kiện lọc.</td></tr>`;
      return;
    }

    els.body.innerHTML = rows.map((record, index) => {
      const row = { ...record, __index: startIndex + index + 1 };
      return `
        <tr>
          ${config.columns.map((column) => formatCell(row, column)).join('')}
          <td class="action-cell">
            <button class="row-action${state.openActionId === record.id ? ' is-open' : ''}" type="button" data-action-toggle="${escapeHTML(record.id)}" aria-label="Mở thao tác ${escapeHTML(record.id)}">
              <i data-lucide="ellipsis-vertical" class="h-4 w-4"></i>
            </button>
            ${state.openActionId === record.id ? `
              <div class="module-action-menu">
                ${(config.rowActions || ['Xem chi tiết', 'Chỉnh sửa', 'Cập nhật trạng thái']).map((action) => (
                  `<button type="button" data-row-action="${escapeHTML(action)}" data-id="${escapeHTML(record.id)}"><i data-lucide="${action.includes('Xem') ? 'eye' : action.includes('Sửa') || action.includes('Chỉnh') ? 'square-pen' : 'refresh-cw'}" class="h-4 w-4"></i>${escapeHTML(action)}</button>`
                )).join('')}
              </div>
            ` : ''}
          </td>
        </tr>
      `;
    }).join('');
  }

  function renderPagination(filtered) {
    const effectiveTotal = hasActiveFilters() ? filtered.length : (config.totalCount || filtered.length);
    const totalPages = Math.max(1, Math.ceil(effectiveTotal / state.pageSize));
    const start = effectiveTotal ? (state.page - 1) * state.pageSize + 1 : 0;
    const end = Math.min(state.page * state.pageSize, effectiveTotal);
    if (els.summary) els.summary.textContent = `Hiển thị ${start} - ${end} trong tổng số ${effectiveTotal.toLocaleString('vi-VN')} ${config.summaryNoun || 'bản ghi'}`;
    if (els.total) els.total.textContent = `${effectiveTotal.toLocaleString('vi-VN')} ${config.totalNoun || config.summaryNoun || 'bản ghi'}`;

    const pages = [];
    for (let page = 1; page <= totalPages; page += 1) {
      if (page === 1 || page === totalPages || Math.abs(page - state.page) <= 1) {
        pages.push(page);
      } else if (pages[pages.length - 1] !== '...') {
        pages.push('...');
      }
    }

    els.pagination.innerHTML = `
      <button class="pager-btn" type="button" data-page="${state.page - 1}" ${state.page === 1 ? 'disabled' : ''}><i data-lucide="chevron-left" class="h-4 w-4"></i></button>
      ${pages.map((page) => page === '...'
        ? '<span class="pager-btn wide">...</span>'
        : `<button class="pager-btn${page === state.page ? ' active' : ''}" type="button" data-page="${page}">${page}</button>`
      ).join('')}
      <button class="pager-btn" type="button" data-page="${state.page + 1}" ${state.page === totalPages ? 'disabled' : ''}><i data-lucide="chevron-right" class="h-4 w-4"></i></button>
    `;
  }

  function render() {
    const filtered = getFilteredRecords();
    renderRows(filtered);
    renderPagination(filtered);
    lucide.createIcons();
  }

  function applyFilters() {
    syncState();
    state.page = 1;
    state.openActionId = '';
    render();
  }

  function resetFilters() {
    document.querySelectorAll('[data-filter]').forEach((input) => {
      input.value = input.tagName === 'SELECT' ? 'Tất cả' : '';
    });
    if (els.pageSize) els.pageSize.value = '10';
    state.page = 1;
    state.pageSize = 10;
    state.openActionId = '';
    syncState();
    render();
  }

  function setDropdownOpen(toggle, menu, open) {
    if (!toggle || !menu) return;
    toggle.classList.toggle('is-open', open);
    toggle.setAttribute('aria-expanded', String(open));
    menu.hidden = !open;
  }

  function closeTopbarMenus() {
    setDropdownOpen(els.notificationToggle, els.notificationMenu, false);
    setDropdownOpen(els.userMenuToggle, els.userMenu, false);
  }

  function renderNotifications() {
    const notifications = config.notifications || [];
    els.notificationList.innerHTML = notifications.map((item) => `
      <button class="notification-item" type="button" data-notification-title="${escapeHTML(item.title)}">
        <span class="notification-dot"><i data-lucide="${escapeHTML(item.icon || 'bell')}" class="h-4 w-4"></i></span>
        <span>
          <span class="notification-title">${escapeHTML(item.title)}</span>
          <span class="notification-text">${escapeHTML(item.text)}</span>
          <span class="notification-time">${escapeHTML(item.time)}</span>
        </span>
      </button>
    `).join('');
    els.notificationBadge.textContent = notifications.length;
    els.notificationBadge.hidden = notifications.length === 0;
  }

  const shell = document.querySelector('.desktop-shell');
  const sidebarToggle = document.querySelector('#sidebarToggle');
  const collapseLabel = sidebarToggle?.querySelector('.collapse-label');

  sidebarToggle?.addEventListener('click', () => {
    const isCollapsed = shell.classList.toggle('is-collapsed');
    sidebarToggle.setAttribute('aria-expanded', String(!isCollapsed));
    sidebarToggle.setAttribute('aria-label', isCollapsed ? 'Mở rộng menu' : 'Thu gọn menu');
    if (collapseLabel) collapseLabel.textContent = isCollapsed ? 'Mở rộng' : 'Thu gọn';
  });

  els.notificationToggle?.addEventListener('click', (event) => {
    event.stopPropagation();
    const shouldOpen = els.notificationMenu.hidden;
    closeTopbarMenus();
    setDropdownOpen(els.notificationToggle, els.notificationMenu, shouldOpen);
    lucide.createIcons();
  });

  els.userMenuToggle?.addEventListener('click', (event) => {
    event.stopPropagation();
    const shouldOpen = els.userMenu.hidden;
    closeTopbarMenus();
    setDropdownOpen(els.userMenuToggle, els.userMenu, shouldOpen);
    lucide.createIcons();
  });

  els.notificationMenu?.addEventListener('click', (event) => {
    event.stopPropagation();
    const item = event.target.closest('[data-notification-title]');
    if (item) alert(`Thông báo: ${item.dataset.notificationTitle}`);
  });

  els.userMenu?.addEventListener('click', (event) => {
    event.stopPropagation();
    const action = event.target.closest('[data-user-action]');
    if (!action) return;
    alert(action.dataset.userAction === 'profile' ? 'Mở thông tin tài khoản Nguyễn Văn A' : 'Mở cài đặt hiển thị');
    closeTopbarMenus();
  });

  els.markAllReadBtn?.addEventListener('click', (event) => {
    event.stopPropagation();
    config.notifications.length = 0;
    renderNotifications();
    closeTopbarMenus();
    lucide.createIcons();
  });

  els.searchBtn?.addEventListener('click', applyFilters);
  els.resetBtn?.addEventListener('click', resetFilters);
  els.filterForm?.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      applyFilters();
    }
  });
  document.querySelectorAll('select[data-filter], input[type="date"][data-filter], #pageSizeSelect').forEach((element) => {
    element.addEventListener('change', applyFilters);
  });
  els.pagination?.addEventListener('click', (event) => {
    const button = event.target.closest('[data-page]');
    if (!button || button.disabled) return;
    state.page = Number(button.dataset.page);
    state.openActionId = '';
    render();
  });
  els.body?.addEventListener('click', (event) => {
    const toggle = event.target.closest('[data-action-toggle]');
    const action = event.target.closest('[data-row-action]');
    if (toggle) {
      state.openActionId = state.openActionId === toggle.dataset.actionToggle ? '' : toggle.dataset.actionToggle;
      render();
      return;
    }
    if (action) {
      alert(`${action.dataset.rowAction}: ${action.dataset.id}`);
      state.openActionId = '';
      render();
    }
  });
  document.querySelectorAll('[data-module-action]').forEach((button) => {
    button.addEventListener('click', () => alert(button.dataset.moduleAction));
  });
  document.addEventListener('click', (event) => {
    if (!event.target.closest('.topbar-menu-wrap')) closeTopbarMenus();
    if (!event.target.closest('.action-cell') && state.openActionId) {
      state.openActionId = '';
      render();
    }
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeTopbarMenus();
      if (state.openActionId) {
        state.openActionId = '';
        render();
      }
    }
  });

  fillSelects();
  syncState();
  renderNotifications();
  render();
})();
