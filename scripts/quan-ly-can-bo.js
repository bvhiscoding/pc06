const officerRecords = [
  { name: 'Nguyễn Văn A', username: 'nguyenvana', role: 'Quản trị hệ thống', roleClass: 'role-admin', position: 'Trưởng phòng', unit: 'Phòng CSQHCC về TTXH', phone: '0912 345 678', status: 'Hoạt động', createdAt: '01/03/2024 08:30' },
  { name: 'Trần Thị Bích', username: 'tranthibich', role: 'Lãnh đạo phòng', roleClass: 'role-leader', position: 'Phó Trưởng phòng', unit: 'Phòng CSQHCC về TTXH', phone: '0987 654 321', status: 'Hoạt động', createdAt: '05/03/2024 09:15' },
  { name: 'Lê Văn Cường', username: 'levancuong', role: 'Cán bộ tiếp nhận', roleClass: 'role-staff', position: 'Cán bộ', unit: 'Đội QLHC về TTXH', phone: '0901 234 567', status: 'Hoạt động', createdAt: '10/03/2024 10:45' },
  { name: 'Phạm Thu Hà', username: 'phamthuha', role: 'Vai trò phụ', roleClass: 'role-sub', position: 'Cán bộ', unit: 'Đội QLHC về TTXH', phone: '0932 111 222', status: 'Hoạt động', createdAt: '15/03/2024 14:20' },
  { name: 'Đỗ Minh Tuấn', username: 'dominhtuan', role: 'Vai trò phụ', roleClass: 'role-sub', position: 'Cán bộ', unit: 'Đội QLHC về TTXH', phone: '0945 333 444', status: 'Tạm khóa', createdAt: '20/03/2024 16:10' },
  { name: 'Bùi Thanh Mai', username: 'buithanhmai', role: 'Vai trò phụ', roleClass: 'role-sub', position: 'Cán bộ', unit: 'Đội QLHC về TTXH', phone: '0977 888 999', status: 'Hoạt động', createdAt: '25/03/2024 11:05' }
];

const notifications = [
  ['Tài khoản cán bộ mới', 'Nguyễn Lan đã được gắn tài khoản chờ duyệt.', 'user-plus'],
  ['Phân công địa bàn', 'Có 2 phân công địa bàn cần rà soát hiệu lực.', 'map-pin'],
  ['Cán bộ tạm khóa', 'Đỗ Minh Tuấn đang ở trạng thái tạm khóa.', 'lock']
];

const state = {
  query: '',
  unit: 'Tất cả',
  position: 'Tất cả',
  role: 'Tất cả',
  status: 'Tất cả',
  page: 1,
  pageSize: 6,
  openActionId: ''
};

const $ = (selector) => document.querySelector(selector);
const hasSharedLayout = Boolean(document.querySelector('script[src*="layout-sync.js"]'));
const escapeHTML = (value) => String(value ?? '').replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' }[char]));
const normalize = (value) => String(value ?? '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
const unique = (key) => [...new Set(officerRecords.map((item) => item[key]))].sort((a, b) => a.localeCompare(b, 'vi'));

function fillSelect(selector, values) {
  const select = $(selector);
  if (!select) return;
  select.innerHTML = ['Tất cả', ...values].map((value) => `<option value="${escapeHTML(value)}">${value === 'Tất cả' ? '-- Tất cả --' : escapeHTML(value)}</option>`).join('');
}

function syncFilters() {
  state.query = $('#searchInput')?.value.trim() || '';
  state.unit = $('#unitSelect')?.value || 'Tất cả';
  state.position = $('#positionSelect')?.value || 'Tất cả';
  state.role = $('#roleSelect')?.value || 'Tất cả';
  state.status = $('#statusSelect')?.value || 'Tất cả';
}

function filteredRecords() {
  const query = normalize(state.query);
  return officerRecords.filter((item) => {
    const haystack = normalize([item.name, item.username, item.phone, item.role, item.position, item.unit].join(' '));
    return (!query || haystack.includes(query))
      && (state.unit === 'Tất cả' || item.unit === state.unit)
      && (state.position === 'Tất cả' || item.position === state.position)
      && (state.role === 'Tất cả' || item.role === state.role)
      && (state.status === 'Tất cả' || item.status === state.status);
  });
}

function renderRows() {
  const body = $('#officerBody');
  if (!body) return;
  const rows = filteredRecords();
  const totalPages = Math.max(1, Math.ceil(rows.length / state.pageSize));
  state.page = Math.min(state.page, totalPages);
  const start = (state.page - 1) * state.pageSize;
  const visible = rows.slice(start, start + state.pageSize);

  body.innerHTML = visible.length ? visible.map((item, index) => `
    <tr>
      <td class="text-center"><input type="checkbox" aria-label="Chọn dòng ${start + index + 1}" /></td>
      <td class="text-center">${start + index + 1}</td>
      <td>${escapeHTML(item.name)}</td>
      <td>${escapeHTML(item.username)}</td>
      <td><span class="role-tag ${escapeHTML(item.roleClass)}">${escapeHTML(item.role)}</span></td>
      <td>${escapeHTML(item.position)}</td>
      <td>${escapeHTML(item.unit)}</td>
      <td>${escapeHTML(item.phone)}</td>
      <td class="text-center"><span class="status-pill ${item.status === 'Tạm khóa' ? 'status-locked' : ''}">${escapeHTML(item.status)}</span></td>
      <td>${escapeHTML(item.createdAt)}</td>
      <td class="text-center action-cell">
        <button class="action-dots mx-auto" type="button" data-action-toggle="${escapeHTML(item.username)}" aria-label="Thao tác ${escapeHTML(item.name)}"><i data-lucide="ellipsis-vertical"></i></button>
        ${state.openActionId === item.username ? `
          <div class="row-action-menu officer-action-menu">
            <button type="button" data-row-action="detail" data-username="${escapeHTML(item.username)}"><i data-lucide="eye" class="h-4 w-4"></i>Xem chi tiết</button>
            <button type="button" data-row-action="edit" data-username="${escapeHTML(item.username)}"><i data-lucide="pencil" class="h-4 w-4"></i>Chỉnh sửa</button>
            <button type="button" data-row-action="lock" data-username="${escapeHTML(item.username)}"><i data-lucide="lock" class="h-4 w-4"></i>Tạm khóa</button>
          </div>
        ` : ''}
      </td>
    </tr>
  `).join('') : '<tr><td class="empty-state" colspan="11">Không tìm thấy cán bộ phù hợp với điều kiện lọc.</td></tr>';

  const summary = $('#resultSummary');
  if (summary) {
    const end = Math.min(start + state.pageSize, rows.length);
    summary.textContent = `Hiển thị ${rows.length ? start + 1 : 0} - ${end} trong tổng số ${rows.length} cán bộ`;
  }
  renderPagination(rows.length);
  window.lucide?.createIcons();
}

function renderPagination(total) {
  const pagination = $('#pagination');
  if (!pagination) return;
  const totalPages = Math.max(1, Math.ceil(total / state.pageSize));
  state.page = Math.min(state.page, totalPages);

  const pages = [];
  for (let page = 1; page <= totalPages; page += 1) {
    if (page === 1 || page === totalPages || Math.abs(page - state.page) <= 1) {
      pages.push(page);
    } else if (pages[pages.length - 1] !== '...') {
      pages.push('...');
    }
  }

  pagination.innerHTML = `
    <button class="pager-btn" type="button" data-page="${state.page - 1}" ${state.page === 1 ? 'disabled' : ''}><i data-lucide="chevron-left" class="h-5 w-5"></i></button>
    ${pages.map((page) => page === '...'
      ? '<span class="pager-btn">...</span>'
      : `<button class="pager-btn${page === state.page ? ' active' : ''}" type="button" data-page="${page}">${page}</button>`
    ).join('')}
    <button class="pager-btn" type="button" data-page="${state.page + 1}" ${state.page === totalPages ? 'disabled' : ''}><i data-lucide="chevron-right" class="h-5 w-5"></i></button>`;
}

function initFilters() {
  fillSelect('#unitSelect', unique('unit'));
  fillSelect('#positionSelect', unique('position'));
  fillSelect('#roleSelect', unique('role'));
  fillSelect('#statusSelect', unique('status'));
}

function renderNotifications() {
  const list = $('#notificationList');
  if (!list) return;
  list.innerHTML = notifications.map(([title, text, iconName]) => `
    <button class="notification-item" type="button">
      <span class="notification-dot"><i data-lucide="${escapeHTML(iconName)}" class="h-4 w-4"></i></span>
      <span><span class="notification-title">${escapeHTML(title)}</span><span class="notification-text">${escapeHTML(text)}</span><span class="notification-time">Hôm nay</span></span>
    </button>
  `).join('');
}

function setDropdownOpen(toggle, menu, open) {
  if (!toggle || !menu) return;
  toggle.classList.toggle('is-open', open);
  toggle.setAttribute('aria-expanded', String(open));
  menu.hidden = !open;
}

function closeTopbarMenus() {
  setDropdownOpen($('#notificationToggle'), $('#notificationMenu'), false);
  setDropdownOpen($('#userMenuToggle'), $('#userMenu'), false);
}

function openModal(open) {
  const modal = $('#officerModal');
  if (!modal) return;
  modal.hidden = !open;
  window.lucide?.createIcons();
}

function initDetailInlineEdit() {
  const editBtn = $('#editOfficerBtn');
  const profileInfo = $('.profile-info');
  if (!editBtn || !profileInfo) return;

  const cancelBtn = document.createElement('button');
  cancelBtn.className = 'btn-light';
  cancelBtn.type = 'button';
  cancelBtn.hidden = true;
  cancelBtn.innerHTML = '<i data-lucide="x"></i>Hủy';
  editBtn.insertAdjacentElement('afterend', cancelBtn);

  const rows = [...profileInfo.querySelectorAll('.info-row')];
  let originalValues = [];
  let isEditing = false;

  const getRowLabel = (row) => row.querySelector('span')?.textContent.trim() || '';
  const getRowValue = (row) => row.querySelector('strong, input, select, textarea')?.value
    ?? row.querySelector('strong')?.textContent.trim()
    ?? '';

  function createEditor(label, value) {
    if (label === 'Giới tính') {
      const select = document.createElement('select');
      select.className = 'profile-edit-field';
      ['Nam', 'Nữ'].forEach((optionValue) => {
        const option = document.createElement('option');
        option.value = optionValue;
        option.textContent = optionValue;
        option.selected = optionValue === value;
        select.appendChild(option);
      });
      return select;
    }

    if (label === 'Địa chỉ' || value.length > 58) {
      const textarea = document.createElement('textarea');
      textarea.className = 'profile-edit-field';
      textarea.value = value;
      return textarea;
    }

    const input = document.createElement('input');
    input.className = 'profile-edit-field';
    input.value = value;
    input.type = label === 'Email' ? 'email' : 'text';
    return input;
  }

  function setEditing(nextEditing, { restore = false } = {}) {
    isEditing = nextEditing;

    if (nextEditing) {
      originalValues = rows.map((row) => ({
        label: getRowLabel(row),
        value: row.querySelector('strong')?.textContent.trim() || ''
      }));

      rows.forEach((row, index) => {
        const strong = row.querySelector('strong');
        if (!strong) return;
        strong.replaceWith(createEditor(originalValues[index].label, originalValues[index].value));
      });

      editBtn.innerHTML = '<i data-lucide="save"></i>Lưu thông tin';
      cancelBtn.hidden = false;
      window.lucide?.createIcons();
      profileInfo.querySelector('.profile-edit-field')?.focus();
      return;
    }

    rows.forEach((row, index) => {
      const editor = row.querySelector('input, select, textarea');
      if (!editor) return;
      const strong = document.createElement('strong');
      strong.textContent = restore ? originalValues[index].value : editor.value.trim();
      editor.replaceWith(strong);
    });

    const nameValue = rows.find((row) => getRowLabel(row) === 'Họ và tên')?.querySelector('strong')?.textContent.trim();
    const heroName = $('.profile-hero h2');
    if (nameValue && heroName) heroName.textContent = nameValue;

    editBtn.innerHTML = '<i data-lucide="pencil"></i>Chỉnh sửa';
    cancelBtn.hidden = true;
    window.lucide?.createIcons();
  }

  editBtn.addEventListener('click', () => {
    if (isEditing) {
      setEditing(false);
      return;
    }
    setEditing(true);
  });

  cancelBtn.addEventListener('click', () => setEditing(false, { restore: true }));
}

function bindEvents() {
  if (!hasSharedLayout) {
    const shell = $('.desktop-shell');
    const sidebarToggle = $('#sidebarToggle');
    const collapseLabel = sidebarToggle?.querySelector('.collapse-label');

    sidebarToggle?.addEventListener('click', () => {
      const isCollapsed = shell.classList.toggle('is-collapsed');
      sidebarToggle.setAttribute('aria-expanded', String(!isCollapsed));
      if (collapseLabel) collapseLabel.textContent = isCollapsed ? 'Mở rộng' : 'Thu gọn';
    });

    $('#notificationToggle')?.addEventListener('click', (event) => {
      event.stopPropagation();
      const shouldOpen = $('#notificationMenu').hidden;
      closeTopbarMenus();
      setDropdownOpen($('#notificationToggle'), $('#notificationMenu'), shouldOpen);
    });

    $('#userMenuToggle')?.addEventListener('click', (event) => {
      event.stopPropagation();
      const shouldOpen = $('#userMenu').hidden;
      closeTopbarMenus();
      setDropdownOpen($('#userMenuToggle'), $('#userMenu'), shouldOpen);
    });

    $('#markAllReadBtn')?.addEventListener('click', () => {
      $('#notificationList').innerHTML = '<div class="empty-state">Không còn thông báo chưa đọc.</div>';
      $('#notificationBadge').hidden = true;
      closeTopbarMenus();
    });
  }

  $('#searchBtn')?.addEventListener('click', () => {
    syncFilters();
    state.page = 1;
    renderRows();
  });

  $('#resetBtn')?.addEventListener('click', () => {
    ['#searchInput', '#unitSelect', '#positionSelect', '#roleSelect', '#statusSelect'].forEach((selector) => {
      const el = $(selector);
      if (!el) return;
      el.value = selector === '#searchInput' ? '' : 'Tất cả';
    });
    Object.assign(state, { query: '', unit: 'Tất cả', position: 'Tất cả', role: 'Tất cả', status: 'Tất cả', page: 1 });
    renderRows();
  });

  $('#searchInput')?.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      syncFilters();
      state.page = 1;
      renderRows();
    }
  });

  ['#unitSelect', '#positionSelect', '#roleSelect', '#statusSelect'].forEach((selector) => {
    $(selector)?.addEventListener('change', () => {
      syncFilters();
      state.page = 1;
      renderRows();
    });
  });

  $('#pageSizeSelect')?.addEventListener('change', (event) => {
    state.pageSize = Number(event.target.value);
    state.page = 1;
    renderRows();
  });

  $('#pagination')?.addEventListener('click', (event) => {
    const button = event.target.closest('[data-page]');
    if (!button || button.disabled) return;
    state.page = Number(button.dataset.page);
    state.openActionId = '';
    renderRows();
  });

  $('#officerBody')?.addEventListener('click', (event) => {
    const toggle = event.target.closest('[data-action-toggle]');
    const action = event.target.closest('[data-row-action]');

    if (toggle) {
      state.openActionId = state.openActionId === toggle.dataset.actionToggle ? '' : toggle.dataset.actionToggle;
      renderRows();
      return;
    }

    if (!action) return;
    if (action.dataset.rowAction === 'detail') {
      window.location.href = `ChiTietCanBo.html?username=${encodeURIComponent(action.dataset.username)}`;
      return;
    }

    state.openActionId = '';
    renderRows();
  });

  $('#openOfficerModal')?.addEventListener('click', () => openModal(true));
  $('#closeOfficerModal')?.addEventListener('click', () => openModal(false));
  document.querySelectorAll('[data-close-modal]').forEach((button) => button.addEventListener('click', () => openModal(false)));
  $('#officerModal')?.addEventListener('click', (event) => {
    if (event.target.id === 'officerModal') openModal(false);
  });
  $('#officerForm')?.addEventListener('submit', (event) => {
    event.preventDefault();
    openModal(false);
  });

  document.addEventListener('click', (event) => {
    if (!event.target.closest('.topbar-menu-wrap')) closeTopbarMenus();
    if (!event.target.closest('.action-cell') && state.openActionId) {
      state.openActionId = '';
      renderRows();
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeTopbarMenus();
      openModal(false);
      if (state.openActionId) {
        state.openActionId = '';
        renderRows();
      }
    }
  });

  initDetailInlineEdit();
}

initFilters();
if (!hasSharedLayout) renderNotifications();
bindEvents();
renderRows();
window.lucide?.createIcons();
