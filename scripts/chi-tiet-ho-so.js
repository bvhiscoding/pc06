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

function initReceiveModalData() {
  const now = new Date();
  const tzoffset = now.getTimezoneOffset() * 60000;
  const localISOTime = (new Date(now - tzoffset)).toISOString().slice(0, 16);
  
  // Điền thông tin lên các phần tử của modal tiếp nhận trùng ID với QuanLyHoSo.html
  document.querySelector('#recDossierId').textContent = 'HS-2026-00125';
  document.querySelector('#recBusinessName').textContent = 'Karaoke Hoa Sen';
  document.querySelector('#recProcedureName').textContent = 'Cấp mới giấy chứng nhận đủ điều kiện về ANTT';

  const recDateInput = document.querySelector('#recDate');
  if (recDateInput) recDateInput.value = localISOTime;

  const recNotesInput = document.querySelector('#recNotes');
  if (recNotesInput) recNotesInput.value = '';
}

function initRejectModalData() {
  const rejDetailInput = document.querySelector('#rejDetailInput');
  const rejBasisInput = document.querySelector('#rejBasisInput');
  const rejNotesInput = document.querySelector('#rejNotesInput');

  if (rejDetailInput) {
    rejDetailInput.value = `Hồ sơ nộp không thuộc thủ tục "Cấp mới giấy chứng nhận đủ điều kiện về ANTT". Theo thông tin khai báo, cơ sở chỉ thay đổi thông tin về người đại diện và địa chỉ hoạt động, cần thực hiện thủ tục "Thay đổi thông tin giấy chứng nhận đủ điều kiện về ANTT". Đề nghị cơ sở nộp đúng thủ tục theo quy định.`;
    updateCharCount(rejDetailInput, '#rejDetailCount');
  }

  if (rejBasisInput) {
    rejBasisInput.value = `- Nghị định số 96/2016/NĐ-CP ngày 01/07/2016 của Chính phủ\n- Thông tư số 04/2021/TT-BCA ngày 16/03/2021 của Bộ Công an`;
    updateCharCount(rejBasisInput, '#rejBasisCount');
  }

  if (rejNotesInput) {
    rejNotesInput.value = `Vui lòng kiểm tra lại và nộp đúng thủ tục tương ứng với nội dung đề nghị giải quyết.`;
    updateCharCount(rejNotesInput, '#rejNotesCount');
  }

  const fileInput = document.querySelector('#rejFileInput');
  const fileNameDisplay = document.querySelector('#rejFileName');
  if (fileInput) fileInput.value = '';
  if (fileNameDisplay) fileNameDisplay.textContent = '';
}

function updateCharCount(textarea, countSelector) {
  const countLabel = document.querySelector(countSelector);
  if (countLabel) {
    countLabel.textContent = `${textarea.value.length}/1000`;
  }
}

document.querySelectorAll('.action-btn').forEach((button) => {
  button.addEventListener('click', () => {
    const modalTarget = button.dataset.modalTarget;
    if (modalTarget) {
      openModal(modalTarget);
      if (modalTarget === 'receiveModal') {
        initReceiveModalData();
      } else if (modalTarget === 'rejectModal') {
        initRejectModalData();
      }
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

// Đăng ký sự kiện đếm ký tự cho các textarea của modal từ chối
['#rejDetailInput', '#rejBasisInput', '#rejNotesInput'].forEach((selector) => {
  const textarea = document.querySelector(selector);
  const countSelector = selector.replace('Input', 'Count');
  if (textarea) {
    textarea.addEventListener('input', () => {
      updateCharCount(textarea, countSelector);
    });
  }
});

// Đính kèm tệp cho modal Từ chối
const rejFileInput = document.querySelector('#rejFileInput');
const btnAttachRejFile = document.querySelector('#btnAttachRejFile');
const rejFileName = document.querySelector('#rejFileName');

if (btnAttachRejFile && rejFileInput) {
  btnAttachRejFile.addEventListener('click', () => rejFileInput.click());
  rejFileInput.addEventListener('change', () => {
    if (rejFileInput.files.length) {
      const file = rejFileInput.files[0];
      rejFileName.textContent = `Đã chọn: ${file.name} (${(file.size / 1024 / 1024).toFixed(2)} MB)`;
    } else {
      rejFileName.textContent = '';
    }
  });
}

// Click xác nhận tiếp nhận
document.querySelector('#btnConfirmReceive')?.addEventListener('click', () => {
  const officer = document.querySelector('#recOfficer').value;
  
  const summaryStatus = document.querySelector('#summaryStatus');
  const sideStatus = document.querySelector('#sideStatus');
  const summaryOfficer = document.querySelector('#summaryOfficer');
  const sideOfficer = document.querySelector('#sideOfficer');

  if (summaryStatus) {
    summaryStatus.textContent = 'Đã tiếp nhận';
    summaryStatus.className = 'status st-blue';
  }
  if (sideStatus) {
    sideStatus.textContent = 'Đã tiếp nhận';
    sideStatus.className = 'status st-blue';
  }
  if (summaryOfficer) {
    summaryOfficer.textContent = officer;
  }
  if (sideOfficer) {
    sideOfficer.textContent = officer;
  }

  // Thêm thông báo giả lập
  notifications.unshift({
    title: 'Đã tiếp nhận hồ sơ',
    text: `Hồ sơ HS-2026-00125 đã được tiếp nhận và phân công cho ${officer}.`,
    time: 'Vừa xong',
    icon: 'user-check'
  });
  renderNotifications();

  closeModal();
  alert(`Đã tiếp nhận hồ sơ HS-2026-00125 thành công!`);
});

// Click xác nhận từ chối
document.querySelector('#btnSubmitReject')?.addEventListener('click', () => {
  const reason = document.querySelector('#rejReasonSelect').value;
  const detail = document.querySelector('#rejDetailInput').value.trim();

  if (!detail) {
    alert('Vui lòng nhập Chi tiết lý do từ chối.');
    return;
  }

  const summaryStatus = document.querySelector('#summaryStatus');
  const sideStatus = document.querySelector('#sideStatus');

  if (summaryStatus) {
    summaryStatus.textContent = 'Từ chối';
    summaryStatus.className = 'status st-red';
  }
  if (sideStatus) {
    sideStatus.textContent = 'Từ chối';
    sideStatus.className = 'status st-red';
  }

  // Thêm thông báo giả lập
  notifications.unshift({
    title: 'Từ chối hồ sơ',
    text: `Hồ sơ HS-2026-00125 đã bị từ chối với lý do: ${reason}.`,
    time: 'Vừa xong',
    icon: 'x-circle'
  });
  renderNotifications();

  closeModal();
  alert(`Đã từ chối hồ sơ HS-2026-00125. Trạng thái đã được cập nhật thành "Từ chối".`);
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
