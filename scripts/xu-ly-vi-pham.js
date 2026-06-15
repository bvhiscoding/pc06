(() => {
  const config = {
    totalCount: 128,
    summaryNoun: 'vi phạm',
    dateKey: 'dateIso',
    searchKeys: ['code', 'facility', 'address', 'violation', 'severity', 'status', 'unit'],
    filters: {
      facility: ['Khách sạn Hoa Lư', 'Quán Karaoke New Star', 'Công ty TNHH Bảo vệ An Ninh', 'Nhà nghỉ Hoàng Gia', 'Cửa hàng cầm đồ Minh Phát'],
      violation: ['Không chấp hành quy định về PCCC', 'Sử dụng lao động không khai báo tạm trú', 'Không đảm bảo điều kiện về ANTT', 'Không thực hiện chế độ báo cáo', 'Không lưu giữ thông tin khách hàng'],
      severity: ['Nhẹ', 'Trung bình', 'Nặng'],
      status: ['Mới phát hiện', 'Đang xử lý', 'Chờ khắc phục', 'Đã khắc phục', 'Đã xử lý', 'Tái phạm'],
      unit: ['Đội QLHC về TTXH TP. Ninh Bình', 'Phòng CS QLHC về TTXH', 'Đội QLHC về TTXH H. Hoa Lư', 'Đội QLHC về TTXH H. Nho Quan']
    },
    badge: {
      'Nhẹ': 'badge-green',
      'Trung bình': 'badge-orange',
      'Nặng': 'badge-red',
      'Mới phát hiện': 'badge-purple',
      'Đang xử lý': 'badge-blue',
      'Chờ khắc phục': 'badge-orange',
      'Đã khắc phục': 'badge-green',
      'Đã xử lý': 'badge-blue',
      'Tái phạm': 'badge-purple'
    },
    actions: [
      { label: 'Xem chi tiết', icon: 'eye', route: 'XuLyViPham-ChiTietViPham.html' },
      { label: 'Chỉnh sửa', icon: 'square-pen', route: 'XuLyViPham-ChiTietViPham.html' },
      { label: 'Cập nhật xử lý', icon: 'refresh-cw', route: 'XuLyViPham-CapNhatXuLy.html' }
    ],
    columns: [
      { type: 'index' },
      { key: 'code', type: 'code', red: true },
      { type: 'stack', primary: 'facility', secondary: 'address' },
      { key: 'violation' },
      { key: 'severity', type: 'badge' },
      { type: 'datetime', render: (record) => ({ date: record.detectedDate, time: record.detectedTime }) },
      { key: 'status', type: 'badge', center: true },
      { key: 'deadline', nowrap: true },
      { key: 'unit' }
    ],
    notifications: [
      { title: 'Vi phạm mới phát hiện', text: 'VP000126 cần được phân công xử lý.', time: '6 phút trước', icon: 'octagon-alert' },
      { title: 'Hạn khắc phục sắp tới', text: 'VP000121 còn 2 ngày đến hạn khắc phục.', time: '40 phút trước', icon: 'calendar-days' },
      { title: 'Cơ sở đã khắc phục', text: 'Nhà nghỉ Hoàng Gia gửi báo cáo khắc phục.', time: '1 giờ trước', icon: 'shield-check' }
    ],
    records: [
      { id: 'VP000128', code: 'VP000128', facility: 'Khách sạn Hoa Lư', address: 'Số 12, Trần Hưng Đạo, TP. Ninh Bình', violation: 'Không chấp hành quy định về PCCC', severity: 'Nặng', detectedDate: '20/05/2024', detectedTime: '10:15', dateIso: '2024-05-20', status: 'Đang xử lý', deadline: '30/05/2024', unit: 'Đội QLHC về TTXH TP. Ninh Bình' },
      { id: 'VP000127', code: 'VP000127', facility: 'Quán Karaoke New Star', address: '68 Lê Thái Tổ, TP. Ninh Bình', violation: 'Sử dụng lao động không khai báo tạm trú', severity: 'Trung bình', detectedDate: '19/05/2024', detectedTime: '14:30', dateIso: '2024-05-19', status: 'Chờ khắc phục', deadline: '02/06/2024', unit: 'Đội QLHC về TTXH TP. Ninh Bình' },
      { id: 'VP000126', code: 'VP000126', facility: 'Công ty TNHH Bảo vệ An Ninh', address: 'KCN Khánh Phú, Yên Khánh, NB', violation: 'Không đảm bảo điều kiện về ANTT', severity: 'Nặng', detectedDate: '18/05/2024', detectedTime: '09:05', dateIso: '2024-05-18', status: 'Mới phát hiện', deadline: '28/05/2024', unit: 'Phòng CS QLHC về TTXH' },
      { id: 'VP000125', code: 'VP000125', facility: 'Nhà nghỉ Hoàng Gia', address: '99 Nguyễn Huệ, TP. Ninh Bình', violation: 'Không thực hiện chế độ báo cáo', severity: 'Nhẹ', detectedDate: '17/05/2024', detectedTime: '16:20', dateIso: '2024-05-17', status: 'Đã khắc phục', deadline: '22/05/2024', unit: 'Đội QLHC về TTXH TP. Ninh Bình' },
      { id: 'VP000124', code: 'VP000124', facility: 'Cửa hàng cầm đồ Minh Phát', address: '32 Tràng An, TP. Ninh Bình', violation: 'Không lưu giữ thông tin khách hàng', severity: 'Trung bình', detectedDate: '16/05/2024', detectedTime: '11:45', dateIso: '2024-05-16', status: 'Đã xử lý', deadline: '20/05/2024', unit: 'Đội QLHC về TTXH TP. Ninh Bình' },
      { id: 'VP000123', code: 'VP000123', facility: 'Bar Luxury Club', address: '01 Đinh Tiên Hoàng, TP. Ninh Bình', violation: 'Hoạt động quá thời gian quy định', severity: 'Nặng', detectedDate: '15/05/2024', detectedTime: '23:40', dateIso: '2024-05-15', status: 'Tái phạm', deadline: '25/05/2024', unit: 'Phòng CS QLHC về TTXH' },
      { id: 'VP000122', code: 'VP000122', facility: 'Dịch vụ lưu trú Tràng An', address: 'Thôn Vụng Lầm, Hoa Lư, Ninh Bình', violation: 'Không lưu giữ thông tin khách hàng', severity: 'Trung bình', detectedDate: '14/05/2024', detectedTime: '08:20', dateIso: '2024-05-14', status: 'Đã xử lý', deadline: '21/05/2024', unit: 'Đội QLHC về TTXH H. Hoa Lư' },
      { id: 'VP000121', code: 'VP000121', facility: 'Karaoke Ruby', address: '25 Lê Đại Hành, TP. Ninh Bình', violation: 'Không đảm bảo điều kiện về ANTT', severity: 'Nặng', detectedDate: '13/05/2024', detectedTime: '22:15', dateIso: '2024-05-13', status: 'Chờ khắc phục', deadline: '18/05/2024', unit: 'Đội QLHC về TTXH TP. Ninh Bình' },
      { id: 'VP000120', code: 'VP000120', facility: 'Hotel Minh Châu', address: '07 Nguyễn Công Trứ, TP. Ninh Bình', violation: 'Sử dụng lao động không khai báo tạm trú', severity: 'Nhẹ', detectedDate: '12/05/2024', detectedTime: '09:30', dateIso: '2024-05-12', status: 'Đã khắc phục', deadline: '19/05/2024', unit: 'Phòng CS QLHC về TTXH' },
      { id: 'VP000119', code: 'VP000119', facility: 'Cầm đồ An Phát', address: '15 Tam Điệp, Ninh Bình', violation: 'Không thực hiện chế độ báo cáo', severity: 'Trung bình', detectedDate: '11/05/2024', detectedTime: '13:10', dateIso: '2024-05-11', status: 'Đang xử lý', deadline: '24/05/2024', unit: 'Đội QLHC về TTXH H. Nho Quan' }
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

document.addEventListener('DOMContentLoaded', () => {
  const modal = document.querySelector('#reconcileModal');
  const openButton = document.querySelector('[data-reconcile-open]');
  const closeButtons = document.querySelectorAll('[data-reconcile-close]');
  const confirmButton = document.querySelector('[data-reconcile-confirm]');

  const setOpen = (open) => {
    if (!modal) return;
    modal.hidden = !open;
    if (window.lucide && typeof window.lucide.createIcons === 'function') {
      window.lucide.createIcons();
    }
  };

  openButton?.addEventListener('click', () => setOpen(true));
  closeButtons.forEach((button) => button.addEventListener('click', () => setOpen(false)));
  confirmButton?.addEventListener('click', () => {
    setOpen(false);
    alert('Đã xác nhận đối soát dữ liệu nghi vấn và ghi nhận nhật ký thao tác.');
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') setOpen(false);
  });
});
