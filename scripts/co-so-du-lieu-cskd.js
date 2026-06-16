let businesses = JSON.parse(sessionStorage.getItem('mockBusinesses'));
if (!businesses) {
  const rawList = [
    { code: 'CSDD01248', name: 'Khách sạn Ninh Bình Hotel', type: 'Khách sạn', address: 'Số 12, đường Trần Hưng Đạo, TP. Ninh Bình, Ninh Bình', owner: 'Nguyễn Văn Hùng', status: 'Đang hoạt động', license: 'Đã cấp' },
    { code: 'CSDD01247', name: 'Karaoke New Star', type: 'Karaoke', address: 'Số 45, đường Lê Thái Tổ, TP. Ninh Bình, Ninh Bình', owner: 'Trần Văn Nam', status: 'Đang hoạt động', license: 'Đã cấp' },
    { code: 'CSDD01246', name: 'Quán bar Paradise', type: 'Quán bar', address: 'Số 8, đường Nguyễn Huệ, TP. Ninh Bình, Ninh Bình', owner: 'Lê Minh Tuấn', status: 'Đang hoạt động', license: 'Đã cấp' },
    { code: 'CSDD01245', name: 'Nhà hàng Tràng An', type: 'Nhà hàng', address: 'Thôn Tràng An, xã Trường Yên, H. Hoa Lư, Ninh Bình', owner: 'Phạm Thị Lan', status: 'Đang hoạt động', license: 'Đã cấp' },
    { code: 'CSDD01244', name: 'Cửa hàng vàng Kim Phát', type: 'Kinh doanh vàng', address: 'Số 69, đường Đinh Tiên Hoàng, TP. Ninh Bình, Ninh Bình', owner: 'Đỗ Văn Phát', status: 'Đang hoạt động', license: 'Chưa cấp' },
    { code: 'CSDD01243', name: 'Massage An Nhiên', type: 'Massage', address: 'Số 22, đường Lý Thái Tổ, TP. Ninh Bình, Ninh Bình', owner: 'Nguyễn Thị Hoa', status: 'Tạm dừng', license: 'Đã cấp' },
    { code: 'CSDD01242', name: 'Game Center 68', type: 'Dịch vụ trò chơi điện tử', address: 'Số 68, đường Trần Hưng Đạo, TP. Ninh Bình, Ninh Bình', owner: 'Hoàng Văn Dũng', status: 'Đang hoạt động', license: 'Đã cấp' },
    { code: 'CSDD01241', name: 'Cầm đồ Hoàng Long', type: 'Cầm đồ', address: 'Số 15, đường Hoàng Diệu, TP. Ninh Bình, Ninh Bình', owner: 'Vũ Quốc Long', status: 'Đang hoạt động', license: 'Đã cấp' },
    { code: 'CSDD01240', name: 'Studio Mộc Miên', type: 'Dịch vụ chụp ảnh', address: 'Số 33, đường Lê Duẩn, TP. Ninh Bình, Ninh Bình', owner: 'Trương Thị Mai', status: 'Đang hoạt động', license: 'Không thuộc diện' },
    { code: 'CSDD01239', name: 'Nhà nghỉ Bình An', type: 'Nhà nghỉ', address: 'Thôn 5, xã Ninh Nhất, TP. Ninh Bình, Ninh Bình', owner: 'Bùi Văn An', status: 'Ngừng hoạt động', license: 'Đã cấp' },
    { code: 'CSDD01238', name: 'Khách sạn Hoa Lư', type: 'Khách sạn', address: 'Số 27, đường Trương Hán Siêu, TP. Ninh Bình, Ninh Bình', owner: 'Đinh Thị Hạnh', status: 'Đang hoạt động', license: 'Đã cấp' },
    { code: 'CSDD01237', name: 'Karaoke Sao Mai', type: 'Karaoke', address: 'Số 9, đường Vân Giang, TP. Ninh Bình, Ninh Bình', owner: 'Ngô Văn Sơn', status: 'Tạm dừng', license: 'Đã cấp' },
    { code: 'CSDD01236', name: 'Cầm đồ Tín Phát', type: 'Cầm đồ', address: 'P. Ninh Khánh, TP. Ninh Bình, Ninh Bình', owner: 'Dương Văn Tín', status: 'Đang hoạt động', license: 'Chưa cấp' },
    { code: 'CSDD01235', name: 'Nhà hàng Bến Đò', type: 'Nhà hàng', address: 'P. Thanh Bình, TP. Ninh Bình, Ninh Bình', owner: 'Lương Thị Oanh', status: 'Đang hoạt động', license: 'Đã cấp' },
    { code: 'CSDD01234', name: 'Bar Riverside', type: 'Quán bar', address: 'P. Nam Thành, TP. Ninh Bình, Ninh Bình', owner: 'Cao Văn Rạng', status: 'Ngừng hoạt động', license: 'Đã cấp' }
  ];

  businesses = rawList.map((b, i) => ({
    ...b,
    ownerId: b.ownerId || `03708${800000 + i}`,
    phone: b.phone || `0912 ${100 + i} ${200 + i}`,
    email: b.email || `${b.code.toLowerCase()}@gmail.com`,
    website: b.website || `www.${b.code.toLowerCase()}.com.vn`,
    taxCode: b.taxCode || `27008${10000 + i}`,
    regNo: b.regNo || `27008${10000 + i}-001`,
    estDate: b.estDate || '12/03/2018',
    risk: b.risk || (i % 3 === 0 ? 'Thấp' : i % 3 === 1 ? 'Trung bình' : 'Cao'),
    officer: b.officer || 'Đ/c Nguyễn Văn C',
    rooms: b.rooms || (b.type === 'Khách sạn' ? '45' : '12'),
    capacity: b.capacity || '150',
    lat: b.lat || (20.25 + (i * 0.002)).toFixed(4),
    lng: b.lng || (105.97 - (i * 0.002)).toFixed(4)
  }));
  sessionStorage.setItem('mockBusinesses', JSON.stringify(businesses));
}

const notifications = [
  { title: 'Cơ sở mới được thêm', text: 'Khách sạn Hoa Lư vừa được cập nhật vào cơ sở dữ liệu.', time: '8 phút trước', icon: 'database' },
  { title: 'Giấy phép cần rà soát', text: '02 cơ sở đang có trạng thái chưa cấp giấy phép ANTT.', time: '22 phút trước', icon: 'shield-alert' },
  { title: 'Cơ sở tạm dừng hoạt động', text: 'Massage An Nhiên được cập nhật trạng thái tạm dừng.', time: '1 giờ trước', icon: 'pause-circle' },
  { title: 'Đồng bộ dữ liệu bản đồ', text: '11 cơ sở đã được đồng bộ vị trí lên bản đồ GIS.', time: '2 giờ trước', icon: 'map-pin' },
  { title: 'Xuất danh sách hoàn tất', text: 'File Excel danh sách cơ sở kinh doanh đã sẵn sàng.', time: '3 giờ trước', icon: 'file-spreadsheet' },
  { title: 'Cảnh báo hồ sơ thiếu', text: 'Cửa hàng vàng Kim Phát cần bổ sung giấy phép ANTT.', time: '4 giờ trước', icon: 'triangle-alert' }
];

const state = {
  query: '',
  type: 'Tất cả',
  status: 'Tất cả',
  license: 'Tất cả',
  page: 1,
  pageSize: 10,
  openActionId: ''
};

const els = {
  searchInput: document.querySelector('#searchInput'),
  typeSelect: document.querySelector('#typeSelect'),
  statusSelect: document.querySelector('#statusSelect'),
  licenseSelect: document.querySelector('#licenseSelect'),
  searchBtn: document.querySelector('#searchBtn'),
  resetBtn: document.querySelector('#resetBtn'),
  body: document.querySelector('#businessBody'),
  resultSummary: document.querySelector('#resultSummary'),
  pageSize: document.querySelector('#pageSizeSelect'),
  pagination: document.querySelector('#pagination'),
  exportBtn: document.querySelector('#exportBtn'),
  addBusinessBtn: document.querySelector('#addBusinessBtn'),
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
const uniqueValues = (key) => [...new Set(businesses.map((item) => item[key]))].sort((a, b) => a.localeCompare(b, 'vi'));

const statusClass = {
  'Đang hoạt động': 'st-green',
  'Tạm dừng': 'st-orange',
  'Ngừng hoạt động': 'st-red'
};

const licenseClass = {
  'Đã cấp': 'st-green',
  'Sắp hết hạn': 'st-orange',
  'Chưa cấp': 'st-red',
  'Không thuộc diện': 'st-gray'
};

function fillSelect(select, values) {
  select.innerHTML = ['Tất cả', ...values].map((value) => {
    const label = value === 'Tất cả' ? '-- Tất cả --' : value;
    return `<option value="${escapeHTML(value)}">${escapeHTML(label)}</option>`;
  }).join('');
}

function syncStateFromInputs() {
  state.query = els.searchInput.value.trim();
  state.type = els.typeSelect.value;
  state.status = els.statusSelect.value;
  state.license = els.licenseSelect.value;
  state.pageSize = Number(els.pageSize.value);
}

function getFilteredBusinesses() {
  return businesses.filter((item) => {
    const haystack = normalize([item.code, item.name, item.type, item.address, item.owner, item.status, item.license].join(' '));
    return (!state.query || haystack.includes(normalize(state.query)))
      && (state.type === 'Tất cả' || item.type === state.type)
      && (state.status === 'Tất cả' || item.status === state.status)
      && (state.license === 'Tất cả' || item.license === state.license);
  });
}

function formatTotal(count) {
  return `${count.toLocaleString('vi-VN')} cơ sở`;
}

function renderRows(filtered) {
  const startIndex = (state.page - 1) * state.pageSize;
  const rows = filtered.slice(startIndex, startIndex + state.pageSize);

  if (!rows.length) {
    els.body.innerHTML = '<tr><td class="empty-state" colspan="9">Không tìm thấy cơ sở phù hợp với điều kiện lọc.</td></tr>';
    return;
  }

  els.body.innerHTML = rows.map((item) => `
    <tr>
      <td class="text-center"><input type="checkbox" aria-label="Chọn dòng ${item.code}" /></td>
      <td class="text-center font-medium">${escapeHTML(item.code)}</td>
      <td class="business-name fw-semibold">${escapeHTML(item.name)}</td>
      <td>${escapeHTML(item.type)}</td>
      <td class="business-address">${escapeHTML(item.address)}</td>
      <td class="text-center">${escapeHTML(item.owner)}</td>
      <td class="text-center"><span class="status ${statusClass[item.status]}">${escapeHTML(item.status)}</span></td>
      <td class="text-center"><span class="status ${licenseClass[item.license]}">${escapeHTML(item.license)}</span></td>
      <td class="action-cell text-center">
        <button class="btn-icon mx-auto${state.openActionId === item.code ? ' is-open' : ''}" type="button" data-action-toggle="${escapeHTML(item.code)}" aria-label="Mở thao tác cơ sở ${escapeHTML(item.code)}">
          <i data-lucide="ellipsis-vertical" class="h-5 w-5"></i>
        </button>
        ${state.openActionId === item.code ? `
          <div class="row-action-menu">
            <button type="button" data-row-action="detail" data-id="${escapeHTML(item.code)}"><i data-lucide="eye" class="h-4 w-4"></i>Xem chi tiết</button>
            <button type="button" data-row-action="edit" data-id="${escapeHTML(item.code)}"><i data-lucide="square-pen" class="h-4 w-4"></i>Chỉnh sửa</button>
            <button type="button" data-row-action="license" data-id="${escapeHTML(item.code)}"><i data-lucide="shield-check" class="h-4 w-4"></i>Giấy phép</button>
          </div>
        ` : ''}
      </td>
    </tr>
  `).join('');
}

function renderPagination(filtered) {
  const totalPages = Math.max(1, Math.ceil(filtered.length / state.pageSize));
  state.page = Math.min(state.page, totalPages);

  const pages = [];
  for (let page = 1; page <= totalPages; page += 1) {
    if (page === 1 || page === totalPages || Math.abs(page - state.page) <= 1) {
      pages.push(page);
    } else if (pages[pages.length - 1] !== '...') {
      pages.push('...');
    }
  }

  els.pagination.innerHTML = `
    <button class="pager-btn" type="button" data-page="1" ${state.page === 1 ? 'disabled' : ''}><i data-lucide="chevrons-left" class="h-4 w-4"></i></button>
    <button class="pager-btn" type="button" data-page="${state.page - 1}" ${state.page === 1 ? 'disabled' : ''}><i data-lucide="chevron-left" class="h-4 w-4"></i></button>
    ${pages.map((page) => page === '...'
      ? '<span class="pager-btn wide">...</span>'
      : `<button class="pager-btn${page === state.page ? ' active' : ''}" type="button" data-page="${page}">${page}</button>`
    ).join('')}
    <button class="pager-btn" type="button" data-page="${state.page + 1}" ${state.page === totalPages ? 'disabled' : ''}><i data-lucide="chevron-right" class="h-4 w-4"></i></button>
    <button class="pager-btn" type="button" data-page="${totalPages}" ${state.page === totalPages ? 'disabled' : ''}><i data-lucide="chevrons-right" class="h-4 w-4"></i></button>
  `;
}

function render() {
  const filtered = getFilteredBusinesses();
  const total = state.query || state.type !== 'Tất cả' || state.status !== 'Tất cả' || state.license !== 'Tất cả' ? filtered.length : 1248;
  const start = filtered.length === 0 ? 0 : (state.page - 1) * state.pageSize + 1;
  const end = Math.min(state.page * state.pageSize, filtered.length);
  els.resultSummary.textContent = `Hiển thị ${start} - ${end} trong tổng số ${total.toLocaleString('vi-VN')} cơ sở`;
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
  els.typeSelect.value = 'Tất cả';
  els.statusSelect.value = 'Tất cả';
  els.licenseSelect.value = 'Tất cả';
  els.pageSize.value = '10';
  Object.assign(state, { query: '', type: 'Tất cả', status: 'Tất cả', license: 'Tất cả', page: 1, pageSize: 10, openActionId: '' });
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

function initFilters() {
  fillSelect(els.typeSelect, uniqueValues('type'));
  fillSelect(els.statusSelect, uniqueValues('status'));
  fillSelect(els.licenseSelect, uniqueValues('license'));
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

[els.typeSelect, els.statusSelect, els.licenseSelect, els.pageSize].forEach((element) => {
  element.addEventListener('change', applyFilters);
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
    const business = businesses.find((item) => item.code === action.dataset.id);
    if (action.dataset.rowAction === 'detail') {
      window.location.href = `CoSoDuLieuCSKD-ChiTiet.html?code=${business.code}`;
    } else if (action.dataset.rowAction === 'edit') {
      window.location.href = `CoSoDuLieuCSKD-ChiTiet.html?code=${business.code}&mode=edit`;
    } else {
      alert(`${action.textContent.trim()}: ${business?.name ?? action.dataset.id}`);
    }
    state.openActionId = '';
    render();
  }
});

els.exportBtn.addEventListener('click', () => alert('Đã tạo file Excel danh sách cơ sở kinh doanh.'));
els.addBusinessBtn.addEventListener('click', () => {
  window.location.href = 'CoSoDuLieuCSKD-TaoMoi.html';
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

initFilters();
renderNotifications();
render();
