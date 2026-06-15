(() => {
  const config = {
    totalCount: 128,
    summaryNoun: 'phản ánh',
    dateKey: 'dateIso',
    searchKeys: ['code', 'name', 'meta', 'topic', 'business', 'status', 'officer'],
    filters: {
      status: ['Mới', 'Đang xử lý', 'Đã phản hồi'],
      topic: ['Thủ tục hành chính', 'Hồ sơ trực tuyến', 'Mất an ninh trật tự', 'Điều kiện kinh doanh'],
      business: ['Khách sạn Hoa Lư', 'Karaoke New Star', 'Công ty TNHH Hoàng Gia', 'Công ty CP DV Bảo vệ An Ninh']
    },
    badge: {
      'Mới': 'badge-blue',
      'Đang xử lý': 'badge-orange',
      'Đã phản hồi': 'badge-green',
      'Thủ tục hành chính': 'badge-blue',
      'Hồ sơ trực tuyến': 'badge-green',
      'Mất an ninh trật tự': 'badge-red',
      'Điều kiện kinh doanh': 'badge-purple'
    },
    actions: [
      { label: 'Xem chi tiết', icon: 'eye', route: 'QuanLyPhanAnh-ChiTietPhanAnh.html' },
      { label: 'Chỉnh sửa', icon: 'square-pen', route: 'QuanLyPhanAnh-ChinhSuaPhanAnh.html' },
      { label: 'Phân công xử lý', icon: 'refresh-cw', route: 'QuanLyPhanAnh-ChiTietPhanAnh.html' }
    ],
    columns: [
      { type: 'index' },
      { key: 'code', type: 'code', red: true },
      { type: 'stack', primary: 'name', secondary: 'meta' },
      { key: 'topic', type: 'badge' },
      { type: 'datetime', render: (record) => ({ date: record.receivedDate, time: record.receivedTime }) },
      { key: 'status', type: 'badge', center: true },
      { key: 'officer' }
    ],
    notifications: [
      { title: 'Phản ánh mới', text: 'PA000128 cần được tiếp nhận và phân công xử lý.', time: '5 phút trước', icon: 'message-square-warning' },
      { title: 'Phản hồi đã gửi', text: 'PA000126 đã được phản hồi cho người dân.', time: '30 phút trước', icon: 'send' },
      { title: 'Phản ánh quá hạn', text: 'Một phản ánh đang xử lý cần rà soát tiến độ.', time: '1 giờ trước', icon: 'clock' }
    ],
    records: [
      { id: 'PA000128', code: 'PA000128', name: 'Nguyễn Văn Hùng', meta: 'SĐT: 0912 345 678', topic: 'Thủ tục hành chính', business: 'Khách sạn Hoa Lư', receivedDate: '20/05/2024', receivedTime: '14:30', dateIso: '2024-05-20', status: 'Mới', officer: 'Trần Văn B' },
      { id: 'PA000127', code: 'PA000127', name: 'Công ty TNHH Hoàng Gia', meta: 'MST: 2701234567', topic: 'Hồ sơ trực tuyến', business: 'Công ty TNHH Hoàng Gia', receivedDate: '19/05/2024', receivedTime: '09:15', dateIso: '2024-05-19', status: 'Đang xử lý', officer: 'Nguyễn Văn A' },
      { id: 'PA000126', code: 'PA000126', name: 'Lê Thi Mai', meta: 'SĐT: 0987 654 321', topic: 'Mất an ninh trật tự', business: 'Karaoke New Star', receivedDate: '18/05/2024', receivedTime: '20:45', dateIso: '2024-05-18', status: 'Đã phản hồi', officer: 'Phạm Văn C' },
      { id: 'PA000125', code: 'PA000125', name: 'Công ty CP DV Bảo vệ An Ninh', meta: 'MST: 0102030405', topic: 'Thủ tục hành chính', business: 'Công ty CP DV Bảo vệ An Ninh', receivedDate: '18/05/2024', receivedTime: '10:20', dateIso: '2024-05-18', status: 'Đang xử lý', officer: 'Trần Văn B' },
      { id: 'PA000124', code: 'PA000124', name: 'Phạm Thanh Tùng', meta: 'SĐT: 0933 222 111', topic: 'Hồ sơ trực tuyến', business: 'Khách sạn Hoa Lư', receivedDate: '17/05/2024', receivedTime: '16:05', dateIso: '2024-05-17', status: 'Mới', officer: 'Nguyễn Văn A' },
      { id: 'PA000123', code: 'PA000123', name: 'Công ty TNHH Phát Đạt', meta: 'MST: 2707654321', topic: 'Điều kiện kinh doanh', business: 'Công ty TNHH Hoàng Gia', receivedDate: '17/05/2024', receivedTime: '09:40', dateIso: '2024-05-17', status: 'Đã phản hồi', officer: 'Phạm Văn C' },
      { id: 'PA000122', code: 'PA000122', name: 'Vũ Thị Hạnh', meta: 'SĐT: 0901 234 567', topic: 'Mật an ninh trật tự', business: 'Karaoke New Star', receivedDate: '16/05/2024', receivedTime: '21:10', dateIso: '2024-05-16', status: 'Đang xử lý', officer: 'Nguyễn Văn A' },
      { id: 'PA000121', code: 'PA000121', name: 'Công ty TNHH Nam Phong', meta: 'MST: 0109654321', topic: 'Hồ sơ trực tuyến', business: 'Công ty TNHH Hoàng Gia', receivedDate: '16/05/2024', receivedTime: '11:30', dateIso: '2024-05-16', status: 'Đã phản hồi', officer: 'Trần Văn B' },
      { id: 'PA000120', code: 'PA000120', name: 'Đỗ Văn Nam', meta: 'SĐT: 0977 888 999', topic: 'Thủ tục hành chính', business: 'Khách sạn Hoa Lư', receivedDate: '15/05/2024', receivedTime: '15:50', dateIso: '2024-05-15', status: 'Mới', officer: 'Nguyễn Văn A' },
      { id: 'PA000119', code: 'PA000119', name: 'Công ty CP Dịch vụ Việt', meta: 'MST: 0304050607', topic: 'Điều kiện kinh doanh', business: 'Công ty CP DV Bảo vệ An Ninh', receivedDate: '15/05/2024', receivedTime: '09:25', dateIso: '2024-05-15', status: 'Đang xử lý', officer: 'Phạm Văn C' }
    ]
  };

  initModuleList(config);
})();

function initModuleList(config) {
  const state = { page: 1, pageSize: 10, filters: {}, openActionId: '' };
  const allValue = '__all';
  const els = {
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

  const escapeHTML = (value) => String(value ?? '').replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' }[char]));
  const normalize = (value) => String(value ?? '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  const getValue = (record, key) => key ? key.split('.').reduce((value, part) => value?.[part], record) : undefined;
  const isAll = (value) => !value || value === allValue;
  const hasFilters = () => Object.values(state.filters).some((value) => !isAll(value));
  const safeCreateIcons = (attempt = 0) => {
    if (window.lucide && typeof window.lucide.createIcons === 'function') {
      window.lucide.createIcons();
      return;
    }
    if (attempt < 12) window.setTimeout(() => safeCreateIcons(attempt + 1), 120);
  };

  function fillSelects() {
    document.querySelectorAll('select[data-filter]').forEach((select) => {
      const key = select.dataset.filter;
      const values = config.filters[key] || [...new Set(config.records.map((record) => getValue(record, key)).filter(Boolean))];
      const label = select.dataset.allLabel || 'Tat ca';
      select.innerHTML = [`<option value="${allValue}">${escapeHTML(label)}</option>`, ...values.map((value) => `<option value="${escapeHTML(value)}">${escapeHTML(value)}</option>`)].join('');
    });
  }

  function syncState() {
    state.filters = {};
    document.querySelectorAll('[data-filter]').forEach((input) => {
      state.filters[input.dataset.filter] = input.tagName === 'SELECT' && input.selectedIndex === 0 ? allValue : input.value.trim();
    });
    state.pageSize = Number(els.pageSize?.value || 10);
  }

  function getFilteredRecords() {
    return config.records.filter((record) => Object.entries(state.filters).every(([key, value]) => {
      if (isAll(value)) return true;
      if (key === 'query') return normalize(config.searchKeys.map((searchKey) => getValue(record, searchKey)).join(' ')).includes(normalize(value));
      if (key === 'dateFrom') return String(getValue(record, config.dateKey) || '') >= value;
      if (key === 'dateTo') return String(getValue(record, config.dateKey) || '') <= value;
      return String(getValue(record, key) || '') === value;
    }));
  }

  function cell(record, column) {
    if (column.type === 'index') return `<td class="center">${record.__index}</td>`;
    const value = column.render ? column.render(record) : getValue(record, column.key);
    if (column.type === 'code') return `<td><span class="${column.red ? 'red-code' : 'code-link'}">${escapeHTML(value)}</span></td>`;
    if (column.type === 'badge') return `<td class="${column.center ? 'center' : ''}"><span class="module-badge ${config.badge[value] || 'badge-gray'}">${escapeHTML(value)}</span></td>`;
    if (column.type === 'stack') return `<td><span class="primary-text">${escapeHTML(getValue(record, column.primary))}</span><span class="secondary-text">${escapeHTML(getValue(record, column.secondary))}</span></td>`;
    if (column.type === 'datetime') return `<td class="nowrap">${escapeHTML(value.date)}<br>${escapeHTML(value.time)}</td>`;
    return `<td class="${column.center ? 'center' : ''}${column.nowrap ? ' nowrap' : ''}">${escapeHTML(value)}</td>`;
  }

  function go(route, id) {
    window.location.href = `${route}${id ? `?id=${encodeURIComponent(id)}` : ''}`;
  }

  function renderRows(filtered) {
    const start = (state.page - 1) * state.pageSize;
    const rows = filtered.slice(start, start + state.pageSize);
    if (!rows.length) {
      els.body.innerHTML = `<tr><td class="module-empty" colspan="${config.columns.length + 1}">Khong tim thay du lieu phu hop voi dieu kien loc.</td></tr>`;
      return;
    }
    els.body.innerHTML = rows.map((record, index) => {
      const row = { ...record, __index: start + index + 1 };
      return `<tr>${config.columns.map((column) => cell(row, column)).join('')}
        <td class="action-cell">
          <button class="row-action${state.openActionId === record.id ? ' is-open' : ''}" type="button" data-action-toggle="${escapeHTML(record.id)}" aria-label="Mo thao tac ${escapeHTML(record.id)}">
            <i data-lucide="ellipsis-vertical" class="h-4 w-4"></i>
          </button>
          ${state.openActionId === record.id ? `<div class="module-action-menu">${config.actions.map((action) => `<button type="button" data-action-route="${escapeHTML(action.route)}" data-id="${escapeHTML(record.id)}"><i data-lucide="${escapeHTML(action.icon)}" class="h-4 w-4"></i>${escapeHTML(action.label)}</button>`).join('')}</div>` : ''}
        </td>
      </tr>`;
    }).join('');
  }

  function renderPagination(filtered) {
    const total = hasFilters() ? filtered.length : (config.totalCount || filtered.length);
    const totalPages = Math.max(1, Math.ceil(total / state.pageSize));
    state.page = Math.min(state.page, totalPages);
    const start = total ? (state.page - 1) * state.pageSize + 1 : 0;
    const end = Math.min(state.page * state.pageSize, total);
    if (els.summary) els.summary.textContent = `Hien thi ${start} - ${end} trong tong so ${total.toLocaleString('vi-VN')} ${config.summaryNoun}`;
    if (els.total) els.total.textContent = `${total.toLocaleString('vi-VN')} ${config.summaryNoun}`;
    const pages = [];
    for (let page = 1; page <= totalPages; page += 1) {
      if (page === 1 || page === totalPages || Math.abs(page - state.page) <= 1) pages.push(page);
      else if (pages[pages.length - 1] !== '...') pages.push('...');
    }
    els.pagination.innerHTML = `<button class="pager-btn" type="button" data-page="${state.page - 1}" ${state.page === 1 ? 'disabled' : ''}><i data-lucide="chevron-left" class="h-4 w-4"></i></button>${pages.map((page) => page === '...' ? '<span class="pager-btn wide">...</span>' : `<button class="pager-btn${page === state.page ? ' active' : ''}" type="button" data-page="${page}">${page}</button>`).join('')}<button class="pager-btn" type="button" data-page="${state.page + 1}" ${state.page === totalPages ? 'disabled' : ''}><i data-lucide="chevron-right" class="h-4 w-4"></i></button>`;
  }

  function renderNotifications() {
    if (!els.notificationList) return;
    els.notificationList.innerHTML = config.notifications.map((item) => `<button class="notification-item" type="button"><span class="notification-dot"><i data-lucide="${escapeHTML(item.icon)}" class="h-4 w-4"></i></span><span><span class="notification-title">${escapeHTML(item.title)}</span><span class="notification-text">${escapeHTML(item.text)}</span><span class="notification-time">${escapeHTML(item.time)}</span></span></button>`).join('');
    if (els.notificationBadge) {
      els.notificationBadge.textContent = config.notifications.length;
      els.notificationBadge.hidden = config.notifications.length === 0;
    }
  }

  function render() {
    const filtered = getFilteredRecords();
    renderRows(filtered);
    renderPagination(filtered);
    safeCreateIcons();
  }

  function applyFilters() {
    syncState();
    state.page = 1;
    state.openActionId = '';
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

  document.querySelector('#sidebarToggle')?.addEventListener('click', () => {
    const shell = document.querySelector('.desktop-shell');
    const isCollapsed = shell.classList.toggle('is-collapsed');
    document.querySelector('#sidebarToggle').setAttribute('aria-expanded', String(!isCollapsed));
  });
  els.notificationToggle?.addEventListener('click', (event) => {
    event.stopPropagation();
    const open = els.notificationMenu.hidden;
    closeTopbarMenus();
    setDropdownOpen(els.notificationToggle, els.notificationMenu, open);
    safeCreateIcons();
  });
  els.userMenuToggle?.addEventListener('click', (event) => {
    event.stopPropagation();
    const open = els.userMenu.hidden;
    closeTopbarMenus();
    setDropdownOpen(els.userMenuToggle, els.userMenu, open);
    safeCreateIcons();
  });
  els.markAllReadBtn?.addEventListener('click', (event) => {
    event.stopPropagation();
    config.notifications.length = 0;
    renderNotifications();
    safeCreateIcons();
  });
  els.searchBtn?.addEventListener('click', applyFilters);
  els.resetBtn?.addEventListener('click', () => {
    document.querySelectorAll('[data-filter]').forEach((input) => {
      if (input.tagName === 'SELECT') input.selectedIndex = 0;
      else input.value = '';
    });
    state.page = 1;
    syncState();
    render();
  });
  document.querySelectorAll('select[data-filter], input[type="date"][data-filter], #pageSizeSelect').forEach((input) => input.addEventListener('change', applyFilters));
  document.querySelectorAll('[data-route]').forEach((button) => button.addEventListener('click', () => go(button.dataset.route)));
  document.querySelectorAll('[data-module-action]').forEach((button) => button.addEventListener('click', () => alert(button.dataset.moduleAction || 'Dang cap nhat')));
  els.pagination?.addEventListener('click', (event) => {
    const button = event.target.closest('[data-page]');
    if (!button || button.disabled) return;
    state.page = Number(button.dataset.page);
    state.openActionId = '';
    render();
  });
  els.body?.addEventListener('click', (event) => {
    const toggle = event.target.closest('[data-action-toggle]');
    const route = event.target.closest('[data-action-route]');
    if (toggle) {
      state.openActionId = state.openActionId === toggle.dataset.actionToggle ? '' : toggle.dataset.actionToggle;
      render();
      return;
    }
    if (route) go(route.dataset.actionRoute, route.dataset.id);
  });
  document.addEventListener('click', (event) => {
    if (!event.target.closest('.topbar-menu-wrap')) closeTopbarMenus();
    if (!event.target.closest('.action-cell') && state.openActionId) {
      state.openActionId = '';
      render();
    }
  });

  fillSelects();
  syncState();
  renderNotifications();
  render();
  window.addEventListener('load', () => safeCreateIcons());
}
