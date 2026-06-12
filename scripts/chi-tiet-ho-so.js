const notifications = [
  { title: 'Hồ sơ mới chờ tiếp nhận', text: 'HS-2026-00125 - Karaoke Hoa Sen vừa được nộp.', time: '5 phút trước', icon: 'file-plus-2' },
  { title: 'Hồ sơ quá hạn', text: 'HS-2026-00118 cần được rà soát tiến độ xử lý.', time: '18 phút trước', icon: 'triangle-alert' },
  { title: 'Yêu cầu bổ sung', text: 'Khách sạn Tràng An đã gửi tài liệu bổ sung.', time: '35 phút trước', icon: 'paperclip' },
  { title: 'Phân công xử lý', text: 'Bạn được phân công xử lý 2 hồ sơ mới.', time: '1 giờ trước', icon: 'user-check' },
  { title: 'Hoàn thành hồ sơ', text: 'Karaoke Hải Đăng đã hoàn thành quy trình xử lý.', time: '2 giờ trước', icon: 'check-circle-2' }
];

const els = {
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
let activeModal = null;

function openModal(modalId) {
  const modal = document.querySelector(`#${modalId}`);
  if (!modal) return;
  activeModal = modal;
  modal.hidden = false;
  document.body.classList.add('modal-open');
  closeTopbarMenus();
  lucide.createIcons();
}

function closeModal() {
  if (!activeModal) return;
  activeModal.hidden = true;
  activeModal = null;
  document.body.classList.remove('modal-open');
}

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

document.querySelectorAll('.detail-tab').forEach((tab) => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.detail-tab').forEach((item) => item.classList.remove('active'));
    tab.classList.add('active');
  });
});

document.querySelectorAll('.action-btn').forEach((button) => {
  button.addEventListener('click', () => {
    const modalTarget = button.dataset.modalTarget;
    if (modalTarget) {
      openModal(modalTarget);
      return;
    }

    const label = button.textContent.trim();
    if (label.includes('In phiếu')) {
      window.print();
      return;
    }
    alert(`${label}: HS-2026-00125`);
  });
});

document.querySelectorAll('[data-modal-close]').forEach((button) => {
  button.addEventListener('click', closeModal);
});

document.querySelectorAll('[data-modal-submit]').forEach((button) => {
  button.addEventListener('click', () => {
    const action = button.dataset.modalSubmit === 'transfer'
      ? 'Đã xác nhận chuyển xử lý hồ sơ HS-2026-00125'
      : 'Đã gửi yêu cầu bổ sung hồ sơ HS-2026-00125';
    closeModal();
    alert(action);
  });
});

document.querySelectorAll('.modal-overlay').forEach((overlay) => {
  overlay.addEventListener('click', (event) => {
    if (event.target === overlay) {
      closeModal();
    }
  });
});

document.addEventListener('click', (event) => {
  if (!event.target.closest('.topbar-menu-wrap')) {
    closeTopbarMenus();
  }
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    closeModal();
    closeTopbarMenus();
  }
});

renderNotifications();
lucide.createIcons();
