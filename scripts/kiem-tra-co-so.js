(() => {
  /**
   * kiem-tra-co-so.js — Kiểm tra cơ sở CSKD
   * Dữ liệu được lấy từ AppData (app-data.js) và phân quyền theo session.
   * Phụ thuộc: auth.js, app-data.js
   */
  const scopedRecords = window.AppData ? window.AppData.getKiemTra() : [];

  const config = {
    totalCount: scopedRecords.length,
    summaryNoun: 'bản ghi',
    dateKey: 'dateIso',
    searchKeys: ['code', 'establishment', 'type', 'unit', 'inspector', 'status', 'ket_qua'],
    filters: {
      type: ['Định kỳ', 'Đột xuất', 'Kế hoạch'],
      status: ['Kế hoạch', 'Đã kiểm tra', 'Cần tái kiểm tra'],
    },
    badge: {
      'Kế hoạch': 'st-blue',
      'Đã kiểm tra': 'st-green',
      'Cần tái kiểm tra': 'st-orange',
    },
    actions: [
      { label: 'Xem chi tiết', icon: 'eye', route: 'KiemTraCoSo-ChiTietKiemTra.html' },
      { label: 'Chỉnh sửa', icon: 'square-pen', route: 'KiemTraCoSo-ChiTietKiemTra.html?edit=true' },
      { label: 'Cập nhật kết quả', icon: 'refresh-cw', route: 'KiemTraCoSo-ChiTietKiemTra.html' }
    ],
    columns: [
      { type: 'checkbox' },
      { type: 'index' },
      { key: 'code', type: 'code' },
      { key: 'establishment' },
      { key: 'type' },
      { key: 'unit' },
      { key: 'inspector' },
      { key: 'date', nowrap: true },
      { key: 'status', type: 'badge', center: true }
    ],
    notifications: [
      { title: 'Cuộc kiểm tra sắp diễn ra', text: 'KT-2026-0031 cần chuẩn bị hồ sơ kiểm tra.', time: '10 phút trước', icon: 'calendar-days' },
      { title: 'Có cơ sở cần tái kiểm tra', text: 'KT-2026-0034 đã ghi nhận cần bổ sung và tái kiểm tra.', time: '35 phút trước', icon: 'triangle-alert' },
      { title: 'Kế hoạch mới', text: 'Một kế hoạch kiểm tra vừa được lập cho địa bàn.', time: '1 giờ trước', icon: 'clipboard-check' }
    ],
    records: scopedRecords,
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
    summary: document.querySelector('#resultSummary'),
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
    if (column.type === 'checkbox') return `<td class="text-center"><input type="checkbox" aria-label="Chọn dòng ${record.code || record.id}" /></td>`;
    if (column.type === 'index') return `<td class="text-center font-medium">${record.__index}</td>`;
    const value = column.render ? column.render(record) : getValue(record, column.key);
    if (column.type === 'code') return `<td class="text-center font-medium text-[#ff0000]">${escapeHTML(value)}</td>`;
    if (column.type === 'badge') return `<td class="${column.center ? 'text-center' : ''}"><span class="status ${config.badge[value] || 'st-gray'}">${escapeHTML(value)}</span></td>`;
    if (column.type === 'stack') return `<td><span class="primary-text fw-semibold">${escapeHTML(getValue(record, column.primary))}</span><span class="secondary-text">${escapeHTML(getValue(record, column.secondary))}</span></td>`;
    if (column.type === 'datetime') return `<td class="nowrap text-center">${escapeHTML(value.date)}<br>${escapeHTML(value.time)}</td>`;
    return `<td class="${column.center ? 'text-center' : ''}${column.nowrap ? ' nowrap' : ''}">${escapeHTML(value)}</td>`;
  }

  function go(route, id) {
    if (id) {
      const separator = route.includes('?') ? '&' : '?';
      window.location.href = `${route}${separator}id=${encodeURIComponent(id)}`;
    } else {
      window.location.href = route;
    }
  }

  function renderRows(filtered) {
    const start = (state.page - 1) * state.pageSize;
    const rows = filtered.slice(start, start + state.pageSize);
    if (!rows.length) {
      els.body.innerHTML = `<tr><td class="empty-state" colspan="${config.columns.length + 1}">Không tìm thấy dữ liệu phù hợp với điều kiện lọc.</td></tr>`;
      return;
    }
    els.body.innerHTML = rows.map((record, index) => {
      const row = { ...record, __index: start + index + 1 };
      return `<tr>${config.columns.map((column) => cell(row, column)).join('')}
        <td class="action-cell text-center">
          <button class="btn-icon mx-auto${state.openActionId === record.id ? ' is-open' : ''}" type="button" data-action-toggle="${escapeHTML(record.id)}" aria-label="Mở thao tác ${escapeHTML(record.id)}">
            <i data-lucide="ellipsis-vertical" class="h-5 w-5"></i>
          </button>
          ${state.openActionId === record.id ? `<div class="row-action-menu">${config.actions.map((action) => `<button type="button" data-action-route="${escapeHTML(action.route)}" data-id="${escapeHTML(record.id)}"><i data-lucide="${escapeHTML(action.icon)}" class="h-4 w-4"></i>${escapeHTML(action.label)}</button>`).join('')}</div>` : ''}
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
    if (els.summary) els.summary.textContent = `Hiển thị ${start} - ${end} trong tổng số ${total.toLocaleString('vi-VN')} ${config.summaryNoun || 'bản ghi'}`;
    if (els.total) els.total.textContent = `${total.toLocaleString('vi-VN')} ${config.summaryNoun || 'bản ghi'}`;
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
  function showToast(message) {
    const toast = document.querySelector('#toast');
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add('is-visible');
    window.setTimeout(() => toast.classList.remove('is-visible'), 2200);
  }

  function openResultModal(id) {
    const record = config.records.find(r => r.id === id);
    if (!record) return;
    
    document.querySelector('#modalRecordCode').textContent = record.code || id;
    document.querySelector('#modalRecordEstablishment').textContent = record.establishment || '-';
    document.querySelector('#modalRecordType').textContent = record.type || '-';
    document.querySelector('#modalRecordInspector').textContent = record.inspector || '-';
    
    const radios = document.getElementsByName('checkResult');
    radios.forEach(radio => {
      if (radio.value === 'Đạt yêu cầu') radio.checked = true;
    });
    
    document.querySelector('#checkConclusion').value = `Qua kiểm tra, cơ sở đáp ứng đầy đủ các điều kiện về ANTT, phòng cháy chữa cháy. Các sổ quản lý lưu trú ghi chép đầy đủ đúng quy định.`;
    document.querySelector('#uploadedDocName').textContent = 'Chưa chọn tệp';
    
    const modal = document.querySelector('#resultModal');
    if (modal) {
      modal.hidden = false;
      state.openActionId = '';
      render();
    }
  }

  els.body?.addEventListener('click', (event) => {
    const toggle = event.target.closest('[data-action-toggle]');
    const route = event.target.closest('[data-action-route]');
    if (toggle) {
      state.openActionId = state.openActionId === toggle.dataset.actionToggle ? '' : toggle.dataset.actionToggle;
      render();
      return;
    }
    if (route) {
      const label = route.textContent.trim();
      if (label === 'Cập nhật kết quả') {
        openResultModal(route.dataset.id);
      } else {
        go(route.dataset.actionRoute, route.dataset.id);
      }
    }
  });

  document.addEventListener('click', (event) => {
    if (!event.target.closest('.topbar-menu-wrap')) closeTopbarMenus();
    if (!event.target.closest('.action-cell') && state.openActionId) {
      state.openActionId = '';
      render();
    }
    const closeModal = event.target.closest('[data-close-modal]');
    if (closeModal) {
      document.querySelector('#resultModal').hidden = true;
    }
  });

  document.querySelector('#btnUploadDoc')?.addEventListener('click', () => {
    const code = document.querySelector('#modalRecordCode').textContent;
    document.querySelector('#uploadedDocName').textContent = 'bien_ban_kiem_tra_' + code.toLowerCase() + '.pdf';
    showToast('Đã tải lên tệp biên bản thành công.');
  });

  document.querySelector('#btnConfirmResult')?.addEventListener('click', () => {
    const radios = document.getElementsByName('checkResult');
    let resultVal = 'Đạt yêu cầu';
    radios.forEach(radio => {
      if (radio.checked) resultVal = radio.value;
    });

    const code = document.querySelector('#modalRecordCode').textContent;
    const record = config.records.find(r => r.id === code);
    if (record) {
      if (resultVal === 'Đạt yêu cầu') {
        record.status = 'Đã kiểm tra';
        record.ket_qua = 'Đạt yêu cầu';
      } else if (resultVal === 'Cần khắc phục') {
        record.status = 'Cần tái kiểm tra';
        record.ket_qua = 'Cần khắc phục';
      } else if (resultVal === 'Vi phạm hành chính') {
        record.status = 'Đã kiểm tra';
        record.ket_qua = 'Có vi phạm';
      }
      
      showToast(`Đã cập nhật kết quả cuộc kiểm tra ${code} thành công.`);
      document.querySelector('#resultModal').hidden = true;
      render();
    }
  });

  fillSelects();
  syncState();
  renderNotifications();
  render();
  window.addEventListener('load', () => safeCreateIcons());
}
