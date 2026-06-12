const records = [
  { id: 'HS-2026-00125', procedure: 'Cấp mới giấy chứng nhận đủ ĐK ANTT', business: 'Karaoke Hoa Sen', owner: 'Nguyễn Văn B', phone: '0912 345 125', area: 'P. Đông Thành, TP. Ninh Bình', submittedAt: '2026-05-20T09:15:00', deadline: '2026-06-04', status: 'Chờ tiếp nhận', officer: '-', unit: 'Đội QLHC số 1' },
  { id: 'HS-2026-00124', procedure: 'Cấp giấy chứng nhận đủ ĐK ANTT', business: 'Nhà nghỉ Bình Minh', owner: 'Trần Thị C', phone: '0988 400 124', area: 'P. Nam Thành, TP. Ninh Bình', submittedAt: '2026-05-20T08:42:00', deadline: '2026-06-04', status: 'Đang xử lý', officer: 'Nguyễn Văn A', unit: 'Đội QLHC số 2' },
  { id: 'HS-2026-00123', procedure: 'Cấp đổi giấy chứng nhận đủ ĐK ANTT', business: 'Khách sạn Tràng An', owner: 'Lê Văn D', phone: '0977 210 123', area: 'P. Đông Thành, TP. Ninh Bình', submittedAt: '2026-05-19T16:28:00', deadline: '2026-06-03', status: 'Cần bổ sung', officer: 'Phạm Thị H', unit: 'Đội QLHC số 1' },
  { id: 'HS-2026-00122', procedure: 'Cấp lại giấy chứng nhận đủ ĐK ANTT', business: 'Bar New Life', owner: 'Hoàng Quốc E', phone: '0904 800 122', area: 'P. Nam Bình, TP. Ninh Bình', submittedAt: '2026-05-19T10:05:00', deadline: '2026-06-03', status: 'Đã tiếp nhận', officer: 'Trần Văn K', unit: 'Đội QLHC số 3' },
  { id: 'HS-2026-00121', procedure: 'Khai báo thay đổi thông tin cơ sở', business: 'Nhà hàng Thắng Cố 36', owner: 'Phạm Văn F', phone: '0936 500 121', area: 'P. Phúc Thành, TP. Ninh Bình', submittedAt: '2026-05-18T14:30:00', deadline: '2026-06-01', status: 'Đang xử lý', officer: 'Nguyễn Văn A', unit: 'Đội QLHC số 2' },
  { id: 'HS-2026-00120', procedure: 'Tạm dừng hoạt động', business: 'Karaoke Hải Đăng', owner: 'Vũ Thị G', phone: '0915 700 120', area: 'P. Đông Thành, TP. Ninh Bình', submittedAt: '2026-05-18T09:10:00', deadline: '2026-05-30', status: 'Đã hoàn thành', officer: 'Phạm Thị H', unit: 'Đội QLHC số 1' },
  { id: 'HS-2026-00119', procedure: 'Cấp mới giấy chứng nhận đủ ĐK ANTT', business: 'Dịch vụ cầm đồ Phát Lộc', owner: 'Đinh Văn H', phone: '0968 119 119', area: 'P. Tân Thành, TP. Ninh Bình', submittedAt: '2026-05-17T11:22:00', deadline: '2026-05-31', status: 'Từ chối', officer: 'Trần Văn K', unit: 'Đội QLHC số 3' },
  { id: 'HS-2026-00118', procedure: 'Ngừng hoạt động', business: 'Nhà nghỉ Hoàng Gia', owner: 'Bùi Thị I', phone: '0945 118 118', area: 'P. Nam Thành, TP. Ninh Bình', submittedAt: '2026-05-17T08:55:00', deadline: '2026-05-30', status: 'Quá hạn', officer: 'Nguyễn Văn A', unit: 'Đội QLHC số 2' },
  { id: 'HS-2026-00117', procedure: 'Cấp mới giấy chứng nhận đủ ĐK ANTT', business: 'Massage An Nhiên', owner: 'Mai Thanh L', phone: '0913 117 777', area: 'P. Bích Đào, TP. Ninh Bình', submittedAt: '2026-05-16T15:40:00', deadline: '2026-05-31', status: 'Chờ tiếp nhận', officer: '-', unit: 'Đội QLHC số 1' },
  { id: 'HS-2026-00116', procedure: 'Cấp đổi giấy chứng nhận đủ ĐK ANTT', business: 'Khách sạn Hoa Lư', owner: 'Đỗ Minh M', phone: '0888 116 116', area: 'P. Vân Giang, TP. Ninh Bình', submittedAt: '2026-05-16T10:18:00', deadline: '2026-05-30', status: 'Đã tiếp nhận', officer: 'Phạm Thị H', unit: 'Đội QLHC số 1' },
  { id: 'HS-2026-00115', procedure: 'Kiểm tra điều kiện ANTT định kỳ', business: 'Karaoke Sao Mai', owner: 'Ngô Văn N', phone: '0972 115 115', area: 'P. Ninh Khánh, TP. Ninh Bình', submittedAt: '2026-05-15T13:20:00', deadline: '2026-05-29', status: 'Đang xử lý', officer: 'Trần Văn K', unit: 'Đội QLHC số 3' },
  { id: 'HS-2026-00114', procedure: 'Khai báo thay đổi thông tin cơ sở', business: 'Nhà hàng Bến Đò', owner: 'Lương Thị O', phone: '0906 114 114', area: 'P. Thanh Bình, TP. Ninh Bình', submittedAt: '2026-05-15T09:08:00', deadline: '2026-05-28', status: 'Cần bổ sung', officer: 'Nguyễn Văn A', unit: 'Đội QLHC số 2' },
  { id: 'HS-2026-00113', procedure: 'Cấp mới giấy chứng nhận đủ ĐK ANTT', business: 'Cầm đồ Minh Quân', owner: 'Tạ Quốc P', phone: '0932 113 113', area: 'P. Nam Bình, TP. Ninh Bình', submittedAt: '2026-05-14T16:05:00', deadline: '2026-05-29', status: 'Đã hoàn thành', officer: 'Trần Văn K', unit: 'Đội QLHC số 3' },
  { id: 'HS-2026-00112', procedure: 'Cấp lại giấy chứng nhận đủ ĐK ANTT', business: 'Nhà nghỉ Sen Vàng', owner: 'Hà Thị Q', phone: '0917 112 112', area: 'P. Đông Thành, TP. Ninh Bình', submittedAt: '2026-05-14T07:52:00', deadline: '2026-05-28', status: 'Quá hạn', officer: 'Phạm Thị H', unit: 'Đội QLHC số 1' },
  { id: 'HS-2026-00111', procedure: 'Tạm dừng hoạt động', business: 'Bar Riverside', owner: 'Cao Văn R', phone: '0966 111 111', area: 'P. Nam Thành, TP. Ninh Bình', submittedAt: '2026-05-13T14:48:00', deadline: '2026-05-27', status: 'Từ chối', officer: 'Nguyễn Văn A', unit: 'Đội QLHC số 2' },
  { id: 'HS-2026-00110', procedure: 'Cấp giấy chứng nhận đủ ĐK ANTT', business: 'Khách sạn Cố Đô', owner: 'Tô Thị S', phone: '0909 110 110', area: 'P. Phúc Thành, TP. Ninh Bình', submittedAt: '2026-05-13T08:30:00', deadline: '2026-05-27', status: 'Đang xử lý', officer: 'Trần Văn K', unit: 'Đội QLHC số 3' },
  { id: 'HS-2026-00109', procedure: 'Ngừng hoạt động', business: 'Karaoke Ruby', owner: 'Võ Văn T', phone: '0981 109 109', area: 'P. Tân Thành, TP. Ninh Bình', submittedAt: '2026-05-12T15:22:00', deadline: '2026-05-26', status: 'Đã hoàn thành', officer: 'Phạm Thị H', unit: 'Đội QLHC số 1' },
  { id: 'HS-2026-00108', procedure: 'Cấp mới giấy chứng nhận đủ ĐK ANTT', business: 'Massage Hương Sen', owner: 'Lý Thị U', phone: '0911 108 108', area: 'P. Bích Đào, TP. Ninh Bình', submittedAt: '2026-05-12T09:45:00', deadline: '2026-05-26', status: 'Chờ tiếp nhận', officer: '-', unit: 'Đội QLHC số 2' },
  { id: 'HS-2026-00107', procedure: 'Cấp đổi giấy chứng nhận đủ ĐK ANTT', business: 'Nhà nghỉ Đại Nam', owner: 'Phan Văn V', phone: '0974 107 107', area: 'P. Vân Giang, TP. Ninh Bình', submittedAt: '2026-05-11T11:35:00', deadline: '2026-05-25', status: 'Đã tiếp nhận', officer: 'Nguyễn Văn A', unit: 'Đội QLHC số 1' },
  { id: 'HS-2026-00106', procedure: 'Kiểm tra điều kiện ANTT định kỳ', business: 'Cầm đồ Tín Phát', owner: 'Dương Văn X', phone: '0939 106 106', area: 'P. Ninh Khánh, TP. Ninh Bình', submittedAt: '2026-05-11T08:15:00', deadline: '2026-05-25', status: 'Cần bổ sung', officer: 'Trần Văn K', unit: 'Đội QLHC số 3' },
  { id: 'HS-2026-00105', procedure: 'Khai báo thay đổi thông tin cơ sở', business: 'Nhà hàng Lam Sơn', owner: 'Trịnh Thị Y', phone: '0948 105 105', area: 'P. Thanh Bình, TP. Ninh Bình', submittedAt: '2026-05-10T16:42:00', deadline: '2026-05-24', status: 'Quá hạn', officer: 'Phạm Thị H', unit: 'Đội QLHC số 1' },
  { id: 'HS-2026-00104', procedure: 'Cấp mới giấy chứng nhận đủ ĐK ANTT', business: 'Karaoke Thiên Thanh', owner: 'Nguyễn Hoàng Z', phone: '0963 104 104', area: 'P. Đông Thành, TP. Ninh Bình', submittedAt: '2026-05-10T10:12:00', deadline: '2026-05-24', status: 'Đang xử lý', officer: 'Nguyễn Văn A', unit: 'Đội QLHC số 2' },
  { id: 'HS-2026-00103', procedure: 'Cấp lại giấy chứng nhận đủ ĐK ANTT', business: 'Khách sạn Bình An', owner: 'Trần Văn AA', phone: '0902 103 103', area: 'P. Nam Thành, TP. Ninh Bình', submittedAt: '2026-05-09T14:25:00', deadline: '2026-05-23', status: 'Đã hoàn thành', officer: 'Trần Văn K', unit: 'Đội QLHC số 3' },
  { id: 'HS-2026-00102', procedure: 'Tạm dừng hoạt động', business: 'Bar Galaxy', owner: 'Phạm Thị BB', phone: '0987 102 102', area: 'P. Nam Bình, TP. Ninh Bình', submittedAt: '2026-05-09T09:18:00', deadline: '2026-05-23', status: 'Từ chối', officer: 'Phạm Thị H', unit: 'Đội QLHC số 1' },
  { id: 'HS-2026-00101', procedure: 'Cấp giấy chứng nhận đủ ĐK ANTT', business: 'Nhà nghỉ Trúc Xanh', owner: 'Vũ Văn CC', phone: '0919 101 101', area: 'P. Phúc Thành, TP. Ninh Bình', submittedAt: '2026-05-08T15:05:00', deadline: '2026-05-22', status: 'Chờ tiếp nhận', officer: '-', unit: 'Đội QLHC số 2' }
];

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
    els.body.innerHTML = '<tr><td class="empty-state" colspan="11">Không tìm thấy hồ sơ phù hợp với điều kiện lọc.</td></tr>';
    return;
  }

  els.body.innerHTML = rows.map((record, index) => `
        <tr>
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
