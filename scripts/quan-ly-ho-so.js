/**
 * quan-ly-ho-so.js — Quản lý hồ sơ CSKD
 * Dữ liệu được lấy từ AppData (app-data.js) và phân quyền theo session.
 * Phụ thuộc: auth.js, app-data.js
 */

// Lấy danh sách hồ sơ đã được phân quyền theo session
const records = window.AppData ? window.AppData.getHoSo() : [];


const notifications = [
  { title: 'Hồ sơ mới chờ tiếp nhận', text: 'HS-2026-00125 - Karaoke Hoa Sen vừa được nộp.', time: '5 phút trước', icon: 'file-plus-2' },
  { title: 'Hồ sơ quá hạn', text: 'HS-2026-00118 cần được rà soát tiến độ xử lý.', time: '18 phút trước', icon: 'triangle-alert' },
  { title: 'Yêu cầu bổ sung', text: 'Khách sạn Tràng An đã gửi tài liệu bổ sung.', time: '35 phút trước', icon: 'paperclip' },
  { title: 'Phân công xử lý', text: 'Bạn được phân công xử lý 2 hồ sơ mới.', time: '1 giờ trước', icon: 'user-check' },
  { title: 'Hoàn thành hồ sơ', text: 'Karaoke Hải Đăng đã hoàn thành quy trình xử lý.', time: '2 giờ trước', icon: 'check-circle-2' }
];

const statusOrder = ['Tất cả', 'Chờ tiếp nhận', 'Đã tiếp nhận', 'Đang xử lý', 'Cần bổ sung', 'Đã hoàn thành', 'Từ chối', 'Quá hạn'];
const statusClass = {
  'Chờ tiếp nhận': 'st-orange',
  'Đã tiếp nhận': 'st-blue',
  'Đang xử lý': 'st-blue',
  'Cần bổ sung': 'st-warn',
  'Đã hoàn thành': 'st-green',
  'Từ chối': 'st-red',
  'Quá hạn': 'st-purple'
};

const state = {
  query: '',
  status: 'Tất cả',
  type: 'Tất cả',
  area: 'Tất cả',
  unit: 'Tất cả',
  officer: 'Tất cả',
  dateFrom: '',
  dateTo: '',
  page: 1,
  pageSize: 10,
  openActionId: ''
};

const els = {
  searchInput: document.querySelector('#searchInput'),
  statusSelect: document.querySelector('#statusSelect'),
  typeSelect: document.querySelector('#typeSelect'),
  areaSelect: document.querySelector('#areaSelect'),
  unitSelect: document.querySelector('#unitSelect'),
  officerSelect: document.querySelector('#officerSelect'),
  dateFrom: document.querySelector('#dateFrom'),
  dateTo: document.querySelector('#dateTo'),
  searchBtn: document.querySelector('#searchBtn'),
  resetBtn: document.querySelector('#resetBtn'),
  statusTabs: document.querySelector('#statusTabs'),
  body: document.querySelector('#recordsBody'),
  resultSummary: document.querySelector('#resultSummary'),
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
const uniqueValues = (key) => [...new Set(records.map((record) => record[key]).filter(Boolean))].sort((a, b) => a.localeCompare(b, 'vi'));

function fillSelect(select, values) {
  select.innerHTML = ['Tất cả', ...values].map((value) => {
    const label = value === 'Tất cả' ? '-- Tất cả --' : value;
    return `<option value="${escapeHTML(value)}">${escapeHTML(label)}</option>`;
  }).join('');
}

function formatSubmitted(value) {
  const date = new Date(value);
  return `${date.toLocaleDateString('vi-VN')}<br>${date.toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' })}`;
}

function formatDate(value) {
  return new Date(`${value}T00:00:00`).toLocaleDateString('vi-VN');
}

function areaLines(value) {
  return escapeHTML(value).replace(', ', ',<br>');
}

function matchesFilters(record, { ignoreStatus = false } = {}) {
  const haystack = normalize([record.id, record.procedure, record.business, record.owner, record.phone, record.area, record.officer, record.unit].join(' '));
  const submittedDate = record.submittedAt.slice(0, 10);

  return (!state.query || haystack.includes(normalize(state.query)))
    && (ignoreStatus || state.status === 'Tất cả' || record.status === state.status)
    && (state.type === 'Tất cả' || record.procedure === state.type)
    && (state.area === 'Tất cả' || record.area === state.area)
    && (state.unit === 'Tất cả' || record.unit === state.unit)
    && (state.officer === 'Tất cả' || record.officer === state.officer)
    && (!state.dateFrom || submittedDate >= state.dateFrom)
    && (!state.dateTo || submittedDate <= state.dateTo);
}

function getFilteredRecords() {
  return records.filter((record) => matchesFilters(record));
}

function syncStateFromInputs() {
  state.query = els.searchInput.value.trim();
  state.status = els.statusSelect.value;
  state.type = els.typeSelect.value;
  state.area = els.areaSelect.value;
  state.unit = els.unitSelect.value;
  state.officer = els.officerSelect.value;
  state.dateFrom = els.dateFrom.value;
  state.dateTo = els.dateTo.value;
  state.pageSize = Number(els.pageSize.value);
}

function renderTabs() {
  const baseRecords = records.filter((record) => matchesFilters(record, { ignoreStatus: true }));
  const countFor = (status) => status === 'Tất cả'
    ? baseRecords.length
    : baseRecords.filter((record) => record.status === status).length;

  els.statusTabs.innerHTML = statusOrder.map((status) => {
    const active = state.status === status ? ' active' : '';
    const danger = status === 'Quá hạn' ? ' danger' : '';
    return `<button class="tab${active}${danger}" type="button" data-status="${escapeHTML(status)}">${escapeHTML(status)} (${countFor(status)})</button>`;
  }).join('');
}

function renderRows(filtered) {
  const startIndex = (state.page - 1) * state.pageSize;
  const rows = filtered.slice(startIndex, startIndex + state.pageSize);

  if (!rows.length) {
    els.body.innerHTML = '<tr><td class="empty-state" colspan="12">Không tìm thấy hồ sơ phù hợp với điều kiện lọc.</td></tr>';
    return;
  }

  els.body.innerHTML = rows.map((record, index) => `
        <tr>
          <td class="text-center"><input type="checkbox" aria-label="Chọn dòng ${startIndex + index + 1}" /></td>
          <td class="text-center">${startIndex + index + 1}</td>
          <td class="text-center font-semibold text-[#ff0000]">${escapeHTML(record.id)}</td>
          <td>${escapeHTML(record.procedure)}</td>
          <td>${escapeHTML(record.business)}</td>
          <td class="text-center">${escapeHTML(record.owner)}</td>
          <td class="text-center">${areaLines(record.area)}</td>
          <td class="text-center">${formatSubmitted(record.submittedAt)}</td>
          <td class="text-center">${formatDate(record.deadline)}</td>
          <td class="text-center"><span class="status ${statusClass[record.status]}">${escapeHTML(record.status)}</span></td>
          <td class="text-center">${escapeHTML(record.officer)}</td>
          <td class="text-center action-cell">
            <button class="mx-auto grid h-9 w-9 place-items-center rounded-md border border-[#dfe5ed] bg-white shadow-sm transition hover:border-[#c90000] hover:text-[#c90000]" type="button" data-action-toggle="${escapeHTML(record.id)}" aria-label="Mở thao tác hồ sơ ${escapeHTML(record.id)}">
              <i data-lucide="ellipsis-vertical" class="h-5 w-5"></i>
            </button>
            ${state.openActionId === record.id ? `
              <div class="row-action-menu">
                <button type="button" data-row-action="detail" data-id="${escapeHTML(record.id)}"><i data-lucide="eye" class="h-4 w-4"></i>Xem chi tiết</button>
                <button type="button" data-row-action="receive" data-id="${escapeHTML(record.id)}"><i data-lucide="inbox" class="h-4 w-4"></i>Tiếp nhận</button>
                <button type="button" data-row-action="complete" data-id="${escapeHTML(record.id)}"><i data-lucide="check-circle" class="h-4 w-4"></i>Hoàn thành</button>
              </div>
            ` : ''}
          </td>
        </tr>
      `).join('');
}

function renderPagination(filtered) {
  const total = filtered.length;
  const totalPages = Math.max(1, Math.ceil(total / state.pageSize));
  state.page = Math.min(state.page, totalPages);
  const start = total ? (state.page - 1) * state.pageSize + 1 : 0;
  const end = Math.min(state.page * state.pageSize, total);
  els.resultSummary.textContent = `Hiển thị ${start} - ${end} trong tổng số ${total} hồ sơ`;

  const pages = [];
  for (let page = 1; page <= totalPages; page += 1) {
    if (page === 1 || page === totalPages || Math.abs(page - state.page) <= 1) {
      pages.push(page);
    } else if (pages[pages.length - 1] !== '...') {
      pages.push('...');
    }
  }

  els.pagination.innerHTML = `
        <button class="pager-btn" type="button" data-page="${state.page - 1}" ${state.page === 1 ? 'disabled' : ''}><i data-lucide="chevron-left" class="h-5 w-5"></i></button>
        ${pages.map((page) => page === '...'
    ? '<span class="pager-btn">...</span>'
    : `<button class="pager-btn${page === state.page ? ' active' : ''}" type="button" data-page="${page}">${page}</button>`
  ).join('')}
        <button class="pager-btn" type="button" data-page="${state.page + 1}" ${state.page === totalPages ? 'disabled' : ''}><i data-lucide="chevron-right" class="h-5 w-5"></i></button>
      `;
}

function render() {
  const filtered = getFilteredRecords();
  const totalPages = Math.max(1, Math.ceil(filtered.length / state.pageSize));
  state.page = Math.min(state.page, totalPages);

  renderTabs();
  renderRows(filtered);
  renderPagination(filtered);
  lucide.createIcons();
}

function applyFilters() {
  syncStateFromInputs();
  state.page = 1;
  state.openActionId = '';
  render();
}

function resetFilters() {
  els.searchInput.value = '';
  els.statusSelect.value = 'Tất cả';
  els.typeSelect.value = 'Tất cả';
  els.areaSelect.value = 'Tất cả';
  els.unitSelect.value = 'Tất cả';
  els.officerSelect.value = 'Tất cả';
  els.dateFrom.value = '';
  els.dateTo.value = '';
  els.pageSize.value = '10';
  Object.assign(state, { query: '', status: 'Tất cả', type: 'Tất cả', area: 'Tất cả', unit: 'Tất cả', officer: 'Tất cả', dateFrom: '', dateTo: '', page: 1, pageSize: 10, openActionId: '' });
  render();
}

function handleRowAction(action, id) {
  const record = records.find((item) => item.id === id);
  if (!record) return;

  if (action === 'detail') {
    window.location.href = `ChiTietHoSo.html?id=${encodeURIComponent(record.id)}`;
    return;
  }

  if (action === 'receive') {
    record.status = 'Đã tiếp nhận';
    record.officer = record.officer === '-' ? 'Nguyễn Văn A' : record.officer;
  }

  if (action === 'complete') {
    record.status = 'Đã hoàn thành';
    record.officer = record.officer === '-' ? 'Nguyễn Văn A' : record.officer;
  }

  state.openActionId = '';
  render();
}

function initFilters() {
  fillSelect(els.statusSelect, statusOrder.filter((status) => status !== 'Tất cả'));
  fillSelect(els.typeSelect, uniqueValues('procedure'));
  fillSelect(els.areaSelect, uniqueValues('area'));
  fillSelect(els.unitSelect, uniqueValues('unit'));
  fillSelect(els.officerSelect, uniqueValues('officer').filter((officer) => officer !== '-'));
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
  els.notificationList.innerHTML = notifications.map((item) => `
        <button class="notification-item" type="button" data-notification-title="${escapeHTML(item.title)}">
          <span class="notification-dot"><i data-lucide="${escapeHTML(item.icon)}" class="h-4 w-4"></i></span>
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

  if (collapseLabel) {
    collapseLabel.textContent = isCollapsed ? 'Mở rộng' : 'Thu gọn';
  }
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
  if (item) {
    alert(`Thông báo: ${item.dataset.notificationTitle}`);
  }
});

els.userMenu?.addEventListener('click', (event) => {
  event.stopPropagation();
  const action = event.target.closest('[data-user-action]');
  if (!action) return;

  const message = action.dataset.userAction === 'profile'
    ? 'Mở thông tin tài khoản Nguyễn Văn A'
    : 'Mở cài đặt hiển thị';
  alert(message);
  closeTopbarMenus();
});

els.markAllReadBtn?.addEventListener('click', (event) => {
  event.stopPropagation();
  notifications.length = 0;
  renderNotifications();
  closeTopbarMenus();
  lucide.createIcons();
});

els.searchBtn.addEventListener('click', applyFilters);
els.resetBtn.addEventListener('click', resetFilters);
els.searchInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') applyFilters();
});

[els.statusSelect, els.typeSelect, els.areaSelect, els.unitSelect, els.officerSelect, els.dateFrom, els.dateTo, els.pageSize].forEach((element) => {
  element.addEventListener('change', applyFilters);
});

els.statusTabs.addEventListener('click', (event) => {
  const tab = event.target.closest('[data-status]');
  if (!tab) return;
  els.statusSelect.value = tab.dataset.status;
  applyFilters();
});

els.pagination.addEventListener('click', (event) => {
  const button = event.target.closest('[data-page]');
  if (!button || button.disabled) return;
  state.page = Number(button.dataset.page);
  state.openActionId = '';
  render();
});

els.body.addEventListener('click', (event) => {
  const toggle = event.target.closest('[data-action-toggle]');
  const action = event.target.closest('[data-row-action]');

  if (toggle) {
    state.openActionId = state.openActionId === toggle.dataset.actionToggle ? '' : toggle.dataset.actionToggle;
    render();
    return;
  }

  if (action) {
    handleRowAction(action.dataset.rowAction, action.dataset.id);
  }
});

document.addEventListener('click', (event) => {
  if (!event.target.closest('.topbar-menu-wrap')) {
    closeTopbarMenus();
  }

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

initFilters();
renderNotifications();
render();
