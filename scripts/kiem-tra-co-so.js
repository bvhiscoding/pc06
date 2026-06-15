(() => {
  const config = {
    totalCount: 120,
    summaryNoun: 'bản ghi',
    dateKey: 'dateIso',
    searchKeys: ['code', 'type', 'unit', 'inspector', 'status'],
    filters: {
      type: ['Định kỳ', 'Đột xuất'],
      status: ['Đạt', 'Không đạt', 'Đang thực hiện', 'Chờ kiểm tra lại', 'Hủy']
    },
    badge: {
      'Đạt': 'badge-green',
      'Không đạt': 'badge-red',
      'Đang thực hiện': 'badge-blue',
      'Chờ kiểm tra lại': 'badge-orange',
      'Hủy': 'badge-gray'
    },
    actions: [
      { label: 'Xem chi tiết', icon: 'eye', route: 'KiemTraCoSo-ChiTietKiemTra.html' },
      { label: 'Chỉnh sửa', icon: 'square-pen', route: 'KiemTraCoSo-ChinhSuaKiemTra.html' },
      { label: 'Cập nhật kết quả', icon: 'refresh-cw', route: 'KiemTraCoSo-ChiTietKiemTra.html' }
    ],
    columns: [
      { type: 'index' },
      { key: 'code', type: 'code' },
      { key: 'type' },
      { key: 'unit' },
      { key: 'inspector' },
      { key: 'date', nowrap: true },
      { key: 'status', type: 'badge', center: true }
    ],
    notifications: [
      { title: 'Cuộc kiểm tra sắp diễn ra', text: 'KT-2024-0006 cần chuẩn bị hồ sơ kiểm tra.', time: '10 phút trước', icon: 'calendar-days' },
      { title: 'Có kết quả không đạt', text: 'KT-2024-0007 đã ghi nhận kết quả không đạt.', time: '35 phút trước', icon: 'triangle-alert' },
      { title: 'Kế hoạch mới', text: 'Một kế hoạch kiểm tra định kỳ vừa được tạo.', time: '1 giờ trước', icon: 'clipboard-check' }
    ],
    records: [
      { id: 'KT-2024-0001', code: 'KT-2024-0001', type: 'Định kỳ', unit: 'Phòng CS QLHC về TTXH', inspector: 'Nguyễn Văn A', date: '15/05/2024', dateIso: '2024-05-15', status: 'Đạt' },
      { id: 'KT-2024-0002', code: 'KT-2024-0002', type: 'Đột xuất', unit: 'Đội QLHC về TTXH - CA TP. Ninh Bình', inspector: 'Trần Thị B', date: '12/05/2024', dateIso: '2024-05-12', status: 'Không đạt' },
      { id: 'KT-2024-0003', code: 'KT-2024-0003', type: 'Định kỳ', unit: 'Phòng Cảnh sát PCCC và CNCH', inspector: 'Phạm Văn C', date: '10/05/2024', dateIso: '2024-05-10', status: 'Đạt' },
      { id: 'KT-2024-0004', code: 'KT-2024-0004', type: 'Đột xuất', unit: 'Đội QLHC về TTXH - CA huyện Hoa Lư', inspector: 'Lê Văn D', date: '08/05/2024', dateIso: '2024-05-08', status: 'Không đạt' },
      { id: 'KT-2024-0005', code: 'KT-2024-0005', type: 'Định kỳ', unit: 'Phòng CS QLHC về TTXH', inspector: 'Nguyễn Văn A', date: '05/05/2024', dateIso: '2024-05-05', status: 'Đạt' },
      { id: 'KT-2024-0006', code: 'KT-2024-0006', type: 'Định kỳ', unit: 'Phòng CS QLHC về TTXH', inspector: 'Trần Thị B', date: '02/05/2024', dateIso: '2024-05-02', status: 'Đang thực hiện' },
      { id: 'KT-2024-0007', code: 'KT-2024-0007', type: 'Đột xuất', unit: 'Đội QLHC về TTXH - CA huyện Gia Viễn', inspector: 'Phạm Văn C', date: '28/04/2024', dateIso: '2024-04-28', status: 'Không đạt' },
      { id: 'KT-2024-0008', code: 'KT-2024-0008', type: 'Định kỳ', unit: 'Phòng CS QLHC về TTXH', inspector: 'Lê Văn D', date: '25/04/2024', dateIso: '2024-04-25', status: 'Đạt' },
      { id: 'KT-2024-0009', code: 'KT-2024-0009', type: 'Đột xuất', unit: 'Đội QLHC về TTXH - CA TP. Ninh Bình', inspector: 'Nguyễn Văn A', date: '22/04/2024', dateIso: '2024-04-22', status: 'Chờ kiểm tra lại' },
      { id: 'KT-2024-0010', code: 'KT-2024-0010', type: 'Định kỳ', unit: 'Phòng Cảnh sát PCCC và CNCH', inspector: 'Trần Thị B', date: '20/04/2024', dateIso: '2024-04-20', status: 'Hủy' }
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
