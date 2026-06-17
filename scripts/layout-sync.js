(() => {
  // Detect if Tailwind CSS is loaded, if not add class to document element
  if (typeof tailwind === 'undefined' && !window.tailwind) {
    document.documentElement.classList.add('no-tailwind');
  }
  window.addEventListener('load', () => {
    if (typeof tailwind !== 'undefined' || window.tailwind) {
      document.documentElement.classList.remove('no-tailwind');
    } else {
      document.documentElement.classList.add('no-tailwind');
    }
  });

  // ── Auth Guard: chỉ admin mới được vào ─────────────────────────
  // Đảm bảo auth.js đã load (các trang admin đều include layout-sync.js)
  if (typeof Auth !== 'undefined') {
    if (!Auth.requireAdmin()) return;  // redirect + halt
  }

  const session = (typeof Auth !== 'undefined') ? Auth.getSession() : null;
  const sessionName = session?.name || 'Nguyễn Văn A';
  const sessionUnit = session?.unit || 'Phòng CS QLHC về TTXH';
  const sessionAvatar = session?.avatar || 'A';
  const sessionAvatarColor = session?.avatarColor || '#bd0000';

  const currentFile = decodeURIComponent(window.location.pathname.split('/').pop() || '');
  const isActive = (...files) => files.includes(currentFile) ? ' active' : '';
  const icon = (name, cls = '') => `<i data-lucide="${name}"${cls ? ` class="${cls}"` : ''}></i>`;

  const notifications = [
    ['Hồ sơ mới cần tiếp nhận', 'HS-2026-00125 vừa được nộp từ cơ sở.', 'file-plus-2'],
    ['Khai báo lưu trú chờ duyệt', 'Khách sạn Tràng An gửi 03 khách lưu trú.', 'bed'],
    ['Giấy phép sắp hết hạn', 'NB-ANTT-0256 còn dưới ngưỡng cảnh báo.', 'triangle-alert'],
    ['Lịch kiểm tra sắp tới', 'Đoàn kiểm tra PC06 có lịch ngày 22/06/2026.', 'calendar-days']
  ];

  function injectStyles() {
    if (document.getElementById('layout-sync-styles')) return;
    const style = document.createElement('style');
    style.id = 'layout-sync-styles';
    style.textContent = `
      .topbar-search {
        display: flex !important;
        width: min(50vw, 600px) !important;
        height: 46px !important;
        align-items: center !important;
        gap: 9px !important;
        border: 1px solid rgba(255, 255, 255, 0.2) !important;
        border-radius: 8px !important;
        background: rgba(255, 255, 255, 0.13) !important;
        padding: 0 12px !important;
        color: #fff !important;
        box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.06) !important;
        position: relative !important;
        box-sizing: border-box !important;
      }
      @media (min-width: 1200px) {
        .topbar-search {
          position: absolute !important;
          left: 50% !important;
          transform: translateX(-50%) !important;
        }
      }
      @media (max-width: 1080px) {
        .topbar-search {
          display: none !important;
        }
      }
      .topbar-search input {
        min-width: 0 !important;
        flex: 1 !important;
        border: 0 !important;
        outline: 0 !important;
        background: transparent !important;
        color: #fff !important;
        font-size: 14px !important;
        font-weight: 600 !important;
        box-shadow: none !important;
        padding: 0 !important;
        height: auto !important;
      }
      .topbar-search input::placeholder {
        color: rgba(255, 255, 255, 0.78) !important;
      }
      .topbar-search svg,
      .topbar-search i {
        color: #fff !important;
        flex-shrink: 0 !important;
      }

      /* Global Scoped Modal Styles */
      .modal-backdrop {
        position: fixed;
        inset: 0;
        z-index: 900;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 20px;
        background: rgba(15, 23, 42, 0.54);
      }
      .modal-backdrop[hidden] {
        display: none !important;
      }
      .module-modal {
        width: min(600px, 100%);
        overflow: hidden;
        border: 1px solid #e3e8f0;
        border-radius: 10px;
        background: #fff;
        box-shadow: 0 22px 54px rgba(15, 23, 42, 0.25);
        display: flex;
        flex-direction: column;
        font-family: 'Roboto', Arial, sans-serif !important;
      }
      .module-modal-head,
      .module-modal-foot {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
        border-bottom: 1px solid #edf1f6;
        padding: 16px 18px;
        box-sizing: border-box;
      }
      .module-modal-foot {
        justify-content: flex-end;
        border-top: 1px solid #edf1f6;
        border-bottom: 0;
      }
      .module-modal-title {
        color: #111827;
        font-size: 17px;
        font-weight: 800;
        display: flex;
        align-items: center;
        gap: 8px;
        margin: 0;
      }
      .module-modal-body {
        max-height: min(68vh, 620px);
        overflow-y: auto;
        padding: 20px;
        box-sizing: border-box;
      }
      .close-icon-btn {
        display: grid;
        width: 36px;
        height: 36px;
        place-items: center;
        border-radius: 6px;
        color: #4b5563;
        border: none;
        background: transparent;
        cursor: pointer;
        transition: all 150ms ease;
      }
      .close-icon-btn:hover {
        background: #fff3f3;
        color: #c50000;
      }
      .field {
        width: 100%;
        height: 40px;
        border: 1px solid #d9dfe8;
        border-radius: 6px;
        padding: 0 12px;
        font-size: 14px;
        outline: none;
        transition: all 150ms ease;
        box-sizing: border-box;
      }
      .field:focus {
        border-color: #c50000;
        box-shadow: 0 0 0 3px rgba(197, 0, 0, 0.1);
      }
    `;
    document.head.appendChild(style);
  }
  injectStyles();

  function headerTemplate() {
    return `
      <header class="app-header fixed left-0 right-0 top-0 z-30 flex h-[80px] items-center justify-between px-6 text-white">
        <div class="flex h-full items-center">
          <img class="crest" src="../public/logocongan.png" alt="Logo Bộ Công an" />
          <div class="brand-copy ml-4">
            <div class="text-[22px] font-semibold leading-tight tracking-[0]">CÔNG AN TỈNH NINH BÌNH</div>
            <div class="mt-1 text-[15px] font-medium tracking-[0] text-white/95">HỆ THỐNG QUẢN LÝ CƠ SỞ KINH DOANH CÓ ĐIỀU KIỆN VỀ ANTT</div>
          </div>
        </div>

        <label class="topbar-search" aria-label="Tìm kiếm toàn hệ thống">
          ${icon('search', 'h-4 w-4')}
          <input id="globalSearchInput" type="search" placeholder="Tìm hồ sơ, cơ sở, khai báo..." />
        </label>

        <div class="topbar-actions flex h-full items-center gap-4">
          <div class="topbar-menu-wrap">
            <button id="notificationToggle" class="topbar-icon-btn relative" type="button" aria-label="Thông báo" aria-expanded="false">
              ${icon('bell', 'h-[26px] w-[26px]')}
              <span id="notificationBadge" class="absolute right-0 top-1 grid h-5 min-w-5 place-items-center rounded-full bg-[#ff1e1e] px-1 text-[11px] font-semibold leading-none shadow">${notifications.length}</span>
            </button>
            <div id="notificationMenu" class="topbar-dropdown notification-dropdown" hidden>
              <div class="dropdown-head"><span>Thông báo</span><button id="markAllReadBtn" type="button">Đánh dấu đã đọc</button></div>
              <div id="notificationList" class="notification-list"></div>
              <div class="dropdown-foot border-t border-[#edf1f6] p-2 text-center">
                <a href="TrungTamThongBao.html" class="w-full block py-1.5 text-xs font-bold text-[#c90000] hover:bg-slate-50 transition rounded">Xem toàn bộ</a>
              </div>
            </div>
          </div>

          <div class="topbar-menu-wrap">
            <button id="userMenuToggle" class="user-menu-btn" type="button" aria-label="Mở menu tài khoản" aria-expanded="false">
              <div class="grid h-[46px] w-[46px] place-items-center rounded-full shadow-sm text-white text-[18px] font-black" style="background:${sessionAvatarColor}">${sessionAvatar}</div>
              <div class="hidden text-left sm:block"><div class="text-[15px] font-semibold leading-5">${sessionName}</div><div class="text-[13px] font-medium text-white/92">${sessionUnit}</div></div>
              ${icon('chevron-down', 'user-chevron h-5 w-5 text-white')}
            </button>
            <div id="userMenu" class="topbar-dropdown user-dropdown" hidden>
              <div class="user-card"><div class="grid h-11 w-11 place-items-center rounded-full text-white text-[16px] font-black" style="background:${sessionAvatarColor}">${sessionAvatar}</div><div><div class="user-name">${sessionName}</div><div class="user-role">${sessionUnit}</div></div></div>
              <a class="dropdown-action" href="HoSoCaNhan.html">${icon('id-card', 'h-4 w-4')}Hồ sơ cá nhân</a>
              <a class="dropdown-action" href="CauHinhHeThong.html">${icon('settings', 'h-4 w-4')}Cài đặt hiển thị</a>
              <button class="dropdown-action danger" type="button" id="logoutBtn">${icon('log-out', 'h-4 w-4')}Đăng xuất</button>
            </div>
          </div>
        </div>
      </header>`;
  }

  function navItem(href, iconName, label, activeFiles) {
    return `<a href="${href}" class="nav-item${isActive(...activeFiles)}">${icon(iconName)}<span class="nav-copy">${label}</span></a>`;
  }

  function sidebarTemplate() {
    return `
      <aside class="sidebar fixed bottom-0 left-0 top-[80px] z-20 px-2 text-white">
        <div class="sidebar-scroll">
          <div class="nav-section mt-0">Tổng quan</div>
          ${navItem('Dashboard.html', 'layout-dashboard', 'Dashboard', ['Dashboard.html'])}

          <div class="nav-section">Giám sát địa bàn</div>
          ${navItem('BanDoSoGis.html', 'map-pin', 'Bản đồ số GIS', ['BanDoSoGis.html'])}

          <div class="nav-section">Nghiệp vụ</div>
          ${navItem('QuanLyHoSo.html', 'file-text', 'Quản lý hồ sơ', ['QuanLyHoSo.html', 'ChiTietHoSo.html'])}
          ${navItem('CoSoDuLieuCSKD.html', 'database', 'Cơ sở dữ liệu CSKD-ANTT', ['CoSoDuLieuCSKD.html', 'CoSoDuLieuCSKD-ChiTiet.html', 'CoSoDuLieuCSKD-TaoMoi.html'])}
          ${navItem('QuanLyKhaiBao.html', 'inbox', 'Khai báo từ cơ sở', ['QuanLyKhaiBao.html', 'CongCSKD-KhaiBaoLuuTru.html', 'CongCSKD-KhaiBaoTaiSan.html', 'CongCSKD-BaoCaoDinhKy.html'])}
          ${navItem('KiemTraCoSo.html', 'clipboard-check', 'Kiểm tra cơ sở', ['KiemTraCoSo.html', 'KiemTraCoSo-LichKiemTra.html', 'KiemTraCoSo-TaoKeHoach.html', 'KiemTraCoSo-ChiTietKiemTra.html', 'QuanLyMauChecklist.html'])}
          ${navItem('XuLyViPham.html', 'octagon-alert', 'Vi phạm / Xử lý vi phạm', ['XuLyViPham.html', 'XuLyViPham-ThemViPham.html', 'XuLyViPham-ChiTietViPham.html', 'XuLyViPham-CapNhatXuLy.html'])}
          ${navItem('QuanLyPhanAnh.html', 'message-square-warning', 'Phản ánh kiến nghị', ['QuanLyPhanAnh.html', 'QuanLyPhanAnh-TaoMoiPhanAnh.html', 'QuanLyPhanAnh-ChiTietPhanAnh.html', 'QuanLyPhanAnh-ChinhSuaPhanAnh.html'])}

          <div class="nav-section">Báo cáo</div>
          ${navItem('BaoCao-ThongKe.html', 'chart-column-big', 'Báo cáo - thống kê', ['BaoCao-ThongKe.html'])}

          <div class="nav-section">Thủ tục & thông báo</div>
          ${navItem('ThuTuc-QuanTri.html', 'clipboard-list', 'Quản trị thủ tục', ['ThuTuc-QuanTri.html', 'ThuTuc-ChiTiet.html'])}
          ${navItem('TrungTamThongBao.html', 'bell-ring', 'Trung tâm thông báo', ['TrungTamThongBao.html'])}

          <div class="nav-section">Cấu hình</div>
          ${navItem('DanhMuc.html', 'folder', 'Danh mục dùng chung', ['DanhMuc.html'])}
          ${navItem('QuanLyTaiKhoan.html', 'users', 'Người dùng', ['QuanLyTaiKhoan.html', 'HoSoCaNhan.html', 'PhanCongDiaBan.html'])}
          ${navItem('QuanLyVaiTro.html', 'shield-check', 'Quản lý vai trò', ['QuanLyVaiTro.html', 'MaTranPhanQuyen.html'])}
          ${navItem('QuanLyCanBo.html', 'users-round', 'Quản lý cán bộ', ['QuanLyCanBo.html', 'ChiTietCanBo.html'])}
          ${navItem('NhatKyHeThong.html', 'history', 'Nhật ký hệ thống', ['NhatKyHeThong.html'])}
          ${navItem('CauHinhHeThong.html', 'settings', 'Cấu hình hệ thống', ['CauHinhHeThong.html'])}
        </div>
        <div class="sidebar-action"><button id="sidebarToggle" class="sidebar-toggle" type="button" aria-label="Thu gọn menu" aria-expanded="true">${icon('chevron-left', 'toggle-icon')}<span class="collapse-label">Thu gọn</span></button></div>
      </aside>`;
  }

  function replaceLayout() {
    const header = document.querySelector('header.app-header');
    const sidebar = document.querySelector('aside.sidebar');
    if (header) header.outerHTML = headerTemplate();
    if (sidebar) sidebar.outerHTML = sidebarTemplate();
  }

  function bindLayout() {
    const shell = document.querySelector('.desktop-shell');
    const sidebarToggle = document.querySelector('#sidebarToggle');
    const notificationToggle = document.querySelector('#notificationToggle');
    const notificationMenu = document.querySelector('#notificationMenu');
    const userMenuToggle = document.querySelector('#userMenuToggle');
    const userMenu = document.querySelector('#userMenu');
    const notificationList = document.querySelector('#notificationList');
    const notificationBadge = document.querySelector('#notificationBadge');
    const markAllReadBtn = document.querySelector('#markAllReadBtn');
    const globalSearchInput = document.querySelector('#globalSearchInput');

    if (notificationList && !notificationList.children.length) {
      notificationList.innerHTML = notifications.map(([title, text, iconName]) => `
        <button class="notification-item" type="button">
          <span class="notification-dot">${icon(iconName, 'h-4 w-4')}</span>
          <span><span class="notification-title">${title}</span><span class="notification-text">${text}</span><span class="notification-time">15/06/2026</span></span>
        </button>`).join('');
    }

    sidebarToggle?.addEventListener('click', () => {
      const collapsed = shell?.classList.toggle('is-collapsed');
      sidebarToggle.setAttribute('aria-expanded', String(!collapsed));
    });

    const setOpen = (toggle, menu, open) => {
      toggle?.classList.toggle('is-open', open);
      toggle?.setAttribute('aria-expanded', String(open));
      if (menu) menu.hidden = !open;
    };
    const closeMenus = () => {
      setOpen(notificationToggle, notificationMenu, false);
      setOpen(userMenuToggle, userMenu, false);
    };

    notificationToggle?.addEventListener('click', (event) => {
      event.stopPropagation();
      const open = notificationMenu?.hidden;
      closeMenus();
      setOpen(notificationToggle, notificationMenu, Boolean(open));
    });
    userMenuToggle?.addEventListener('click', (event) => {
      event.stopPropagation();
      const open = userMenu?.hidden;
      closeMenus();
      setOpen(userMenuToggle, userMenu, Boolean(open));
    });
    markAllReadBtn?.addEventListener('click', (event) => {
      event.stopPropagation();
      if (notificationList) notificationList.innerHTML = '<div class="empty-state">Không còn thông báo chưa đọc.</div>';
      if (notificationBadge) notificationBadge.hidden = true;
      closeMenus();
    });
    globalSearchInput?.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' && event.currentTarget.value.trim()) {
        alert(`Tìm kiếm toàn hệ thống: ${event.currentTarget.value.trim()}`);
      }
    });
    document.addEventListener('click', (event) => {
      if (!event.target.closest('.topbar-menu-wrap')) closeMenus();
    });

    // Logout button
    document.querySelector('#logoutBtn')?.addEventListener('click', () => {
      if (typeof Auth !== 'undefined') Auth.logout();
      else window.location.href = 'DangNhap.html';
    });
  }

  function injectModals() {
    if (document.getElementById('importModal')) return;

    // 1. Create Import Modal element
    const importModal = document.createElement('div');
    importModal.id = 'importModal';
    importModal.className = 'modal-backdrop';
    importModal.hidden = true;
    importModal.innerHTML = `
      <section class="module-modal w-[600px]" role="dialog" aria-modal="true" aria-labelledby="importModalTitle">
        <div class="module-modal-head">
          <h2 id="importModalTitle" class="module-modal-title">
            <i data-lucide="file-up" class="h-5 w-5 text-[#c50000]"></i>Nhập dữ liệu từ tệp Excel
          </h2>
          <button class="close-icon-btn" type="button" onclick="document.getElementById('importModal').hidden = true" aria-label="Đóng">
            <i data-lucide="x" class="h-5 w-5"></i>
          </button>
        </div>
        <div class="module-modal-body">
          <div class="mb-4" style="margin-bottom:16px;">
            <div class="flex items-center justify-between mb-1.5" style="display:flex; justify-content:space-between; align-items:center; margin-bottom:6px;">
              <label class="form-label block font-semibold text-[#374151]" style="font-weight:600; color:#374151;">Tệp dữ liệu mẫu</label>
              <a href="#" class="text-[13px] font-bold text-[#c50000] hover:underline flex items-center gap-1" style="font-size:13px; font-weight:700; color:#c50000; text-decoration:none;" onclick="alert('Bắt đầu tải xuống tệp mẫu Excel...'); return false;">
                <i data-lucide="download" class="h-3.5 w-3.5" style="width:14px; height:14px; margin-right:4px; vertical-align:middle;"></i>Tải tệp mẫu (.xlsx)
              </a>
            </div>
          </div>

          <!-- Drag & Drop Zone -->
          <div class="border-2 border-dashed border-[#d1d5db] hover:border-[#c50000] transition rounded-lg p-6 text-center bg-[#f9fafb] cursor-pointer mb-4" id="globalDropzone" style="border:2px dashed #d1d5db; border-radius:8px; padding:24px; text-align:center; background:#f9fafb; cursor:pointer; margin-bottom:16px; transition: all 150ms ease;">
            <div class="flex flex-col items-center justify-center" style="display:flex; flex-direction:column; align-items:center; justify-content:center;">
              <div class="grid h-12 w-12 place-items-center rounded-full bg-[#fee2e2] text-[#c50000] mb-3" style="display:grid; width:48px; height:48px; place-items:center; border-radius:999px; background:#fee2e2; color:#c50000; margin-bottom:12px;">
                <i data-lucide="upload-cloud" class="h-6 w-6" style="width:24px; height:24px;"></i>
              </div>
              <p class="text-[14px] font-bold text-[#1f2937] mb-1" style="font-size:14px; font-weight:700; color:#1f2937; margin:0 0 4px 0;">Kéo thả tệp tin vào đây</p>
              <p class="text-[12px] text-[#6b7280] mb-3" style="font-size:12px; color:#6b7280; margin:0 0 12px 0;">Hỗ trợ định dạng tệp Excel (.xlsx, .xls) dung lượng tối đa 10MB</p>
              <label class="inline-flex h-9 items-center gap-1.5 rounded-md border border-[#c50000] bg-white px-4 text-[13px] font-bold text-[#c50000] cursor-pointer hover:bg-[#fffafa] transition" style="display:inline-flex; align-items:center; height:36px; border:1px solid #c50000; border-radius:6px; background:#fff; padding:0 16px; font-size:13px; font-weight:700; color:#c50000; cursor:pointer; transition: all 150ms ease;">
                <input type="file" id="globalFileInput" accept=".xlsx, .xls" style="display:none;" />
                Chọn tệp từ máy tính
              </label>
            </div>
          </div>

          <div id="globalFileUploadStatus" class="hidden rounded-md bg-[#f0fdf4] border border-[#bbf7d0] p-3 flex items-center justify-between mb-4" style="display:none; border-radius:6px; background:#f0fdf4; border:1px solid #bbf7d0; padding:12px; align-items:center; justify-content:space-between; margin-bottom:16px;">
            <div class="flex items-center gap-2" style="display:flex; align-items:center; gap:8px;">
              <i data-lucide="file-spreadsheet" class="h-5 w-5 text-[#16a34a]" style="width:20px; height:20px; color:#16a34a;"></i>
              <div>
                <div class="text-[13px] font-bold text-[#14532d]" id="globalSelectedFileName" style="font-size:13px; font-weight:700; color:#14532d;">cskd_import_temp.xlsx</div>
                <div class="text-[11px] text-[#15803d]" id="globalSelectedFileSize" style="font-size:11px; color:#15803d;">1.2 MB</div>
              </div>
            </div>
            <button type="button" class="text-[#4b5563] hover:text-[#c50000] transition" id="globalClearFileBtn" style="border:none; background:transparent; color:#4b5563; cursor:pointer; transition:all 150ms ease;">
              <i data-lucide="trash-2" class="h-4 w-4" style="width:16px; height:16px;"></i>
            </button>
          </div>
        </div>
        <div class="module-modal-foot">
          <button class="inline-flex h-10 items-center justify-center rounded-md border border-[#d9dfe8] bg-white px-5 text-[14px] font-bold text-[#4b5563] shadow-sm transition hover:bg-[#f9fafb]" type="button" onclick="document.getElementById('importModal').hidden = true" style="display:inline-flex; align-items:center; justify-content:center; height:40px; border:1px solid #d9dfe8; border-radius:6px; background:#fff; padding:0 20px; font-size:14px; font-weight:700; color:#4b5563; cursor:pointer; transition:all 150ms ease; box-shadow: 0 1px 2px rgba(15, 23, 42, 0.05);">Hủy bỏ</button>
          <button class="inline-flex h-10 items-center justify-center rounded-md border border-[#c50000] bg-[#c50000] px-5 text-[14px] font-bold text-white shadow-sm transition hover:bg-[#b00000]" type="button" id="globalImportSubmitBtn" style="display:inline-flex; align-items:center; justify-content:center; height:40px; border:1px solid #c50000; border-radius:6px; background:#c50000; padding:0 20px; font-size:14px; font-weight:700; color:#fff; cursor:pointer; transition:all 150ms ease; margin-left:12px; box-shadow: 0 1px 2px rgba(15, 23, 42, 0.05);">
            <i data-lucide="check" class="h-4 w-4" style="width:16px; height:16px; margin-right:4px;"></i>Tải lên &amp; Nhập dữ liệu
          </button>
        </div>
      </section>`;
    document.body.appendChild(importModal);

    // 2. Create Export Modal element
    const exportModal = document.createElement('div');
    exportModal.id = 'exportModal';
    exportModal.className = 'modal-backdrop';
    exportModal.hidden = true;
    exportModal.innerHTML = `
      <section class="module-modal w-[600px]" role="dialog" aria-modal="true" aria-labelledby="exportModalTitle">
        <div class="module-modal-head">
          <h2 id="exportModalTitle" class="module-modal-title">
            <i data-lucide="file-spreadsheet" class="h-5 w-5 text-[#c50000]"></i>Xuất dữ liệu hệ thống
          </h2>
          <button class="close-icon-btn" type="button" onclick="document.getElementById('exportModal').hidden = true" aria-label="Đóng">
            <i data-lucide="x" class="h-5 w-5"></i>
          </button>
        </div>
        <div class="module-modal-body">
          <!-- Format Selection -->
          <div class="mb-5" style="margin-bottom:20px;">
            <label class="form-label mb-2 block font-semibold text-[#374151]" style="font-weight:600; color:#374151; margin-bottom:8px; display:block;">Định dạng tệp xuất ra</label>
            <div class="grid grid-cols-3 gap-3" style="display:grid; grid-template-columns: repeat(3, 1fr); gap: 12px;">
              <label class="flex flex-col items-center justify-center border border-[#c50000] rounded-lg p-4 cursor-pointer hover:border-[#c50000] transition bg-white relative" style="position:relative; display:flex; flex-direction:column; align-items:center; justify-content:center; border:1px solid #c50000; border-radius:8px; padding:16px; cursor:pointer;">
                <input type="radio" name="globalExportFormat" value="xlsx" checked class="accent-[#c50000]" style="position:absolute; top:8px; right:8px;" />
                <i data-lucide="file-spreadsheet" class="h-8 w-8 text-[#16a34a] mb-2" style="width:32px; height:32px; margin-bottom:8px; color:#16a34a;"></i>
                <span class="text-[13px] font-bold text-[#1f2937]" style="font-size:13px; font-weight:700; color:#1f2937;">Microsoft Excel</span>
                <span class="text-[11px] text-[#6b7280]" style="font-size:11px; color:#6b7280;">Tệp tin .xlsx</span>
              </label>
              <label class="flex flex-col items-center justify-center border border-[#e5e7eb] rounded-lg p-4 cursor-pointer hover:border-[#c50000] transition bg-[#f9fafb] relative" style="position:relative; display:flex; flex-direction:column; align-items:center; justify-content:center; border:1px solid #e5e7eb; border-radius:8px; padding:16px; background:#f9fafb; cursor:pointer;">
                <input type="radio" name="globalExportFormat" value="csv" class="accent-[#c50000]" style="position:absolute; top:8px; right:8px;" />
                <i data-lucide="file-text" class="h-8 w-8 text-[#2563eb] mb-2" style="width:32px; height:32px; margin-bottom:8px; color:#2563eb;"></i>
                <span class="text-[13px] font-bold text-[#1f2937]" style="font-size:13px; font-weight:700; color:#1f2937;">CSV (Phẩy)</span>
                <span class="text-[11px] text-[#6b7280]" style="font-size:11px; color:#6b7280;">Tệp văn bản .csv</span>
              </label>
              <label class="flex flex-col items-center justify-center border border-[#e5e7eb] rounded-lg p-4 cursor-pointer hover:border-[#c50000] transition bg-[#f9fafb] relative" style="position:relative; display:flex; flex-direction:column; align-items:center; justify-content:center; border:1px solid #e5e7eb; border-radius:8px; padding:16px; background:#f9fafb; cursor:pointer;">
                <input type="radio" name="globalExportFormat" value="pdf" class="accent-[#c50000]" style="position:absolute; top:8px; right:8px;" />
                <i data-lucide="file-pie-chart" class="h-8 w-8 text-[#dc2626] mb-2" style="width:32px; height:32px; margin-bottom:8px; color:#dc2626;"></i>
                <span class="text-[13px] font-bold text-[#1f2937]" style="font-size:13px; font-weight:700; color:#1f2937;">Tệp tài liệu PDF</span>
                <span class="text-[11px] text-[#6b7280]" style="font-size:11px; color:#6b7280;">Tài liệu in ấn .pdf</span>
              </label>
            </div>
          </div>

          <!-- Date Range Selection -->
          <div class="mb-5" style="margin-bottom:20px;">
            <label class="form-label mb-2 block font-semibold text-[#374151]" style="font-weight:600; color:#374151; margin-bottom:8px; display:block;">Phạm vi thời gian</label>
            <div class="grid grid-cols-4 gap-2 mb-3" style="display:grid; grid-template-columns: repeat(4, 1fr); gap: 8px; margin-bottom: 12px;">
              <label class="inline-flex h-9 items-center justify-center border border-[#c50000] bg-[#fff3f3] rounded-md text-[13px] font-bold text-[#c50000] cursor-pointer hover:bg-[#fffafa] text-center" id="globalDateAllLabel" style="display:inline-flex; align-items:center; justify-content:center; height:36px; border:1px solid #c50000; background:#fff3f3; color:#c50000; font-size:13px; font-weight:700; border-radius:6px; cursor:pointer;">
                <input type="radio" name="globalExportDateRange" value="all" checked style="display:none;" />
                Tất cả
              </label>
              <label class="inline-flex h-9 items-center justify-center border border-[#d9dfe8] bg-white rounded-md text-[13px] font-bold text-[#4b5563] cursor-pointer hover:bg-[#f9fafb] text-center" id="globalDateMonthLabel" style="display:inline-flex; align-items:center; justify-content:center; height:36px; border:1px solid #d9dfe8; background:#fff; color:#4b5563; font-size:13px; font-weight:700; border-radius:6px; cursor:pointer;">
                <input type="radio" name="globalExportDateRange" value="month" style="display:none;" />
                Tháng này
              </label>
              <label class="inline-flex h-9 items-center justify-center border border-[#d9dfe8] bg-white rounded-md text-[13px] font-bold text-[#4b5563] cursor-pointer hover:bg-[#f9fafb] text-center" id="globalDateQuarterLabel" style="display:inline-flex; align-items:center; justify-content:center; height:36px; border:1px solid #d9dfe8; background:#fff; color:#4b5563; font-size:13px; font-weight:700; border-radius:6px; cursor:pointer;">
                <input type="radio" name="globalExportDateRange" value="quarter" style="display:none;" />
                Quý này
              </label>
              <label class="inline-flex h-9 items-center justify-center border border-[#d9dfe8] bg-white rounded-md text-[13px] font-bold text-[#4b5563] cursor-pointer hover:bg-[#f9fafb] text-center" id="globalDateCustomLabel" style="display:inline-flex; align-items:center; justify-content:center; height:36px; border:1px solid #d9dfe8; background:#fff; color:#4b5563; font-size:13px; font-weight:700; border-radius:6px; cursor:pointer;">
                <input type="radio" name="globalExportDateRange" value="custom" style="display:none;" />
                Tùy chọn
              </label>
            </div>
            
            <div class="grid grid-cols-2 gap-3" id="globalCustomDateInputs" style="display:none; grid-template-columns: 1fr 1fr; gap:12px;">
              <div>
                <label class="text-[12px] text-[#6b7280] font-medium block mb-1" style="font-size:12px; color:#6b7280; display:block; margin-bottom:4px;">Từ ngày</label>
                <input type="date" class="field w-full" id="globalExportDateFrom" style="width:100%; height:40px; border:1px solid #d9dfe8; border-radius:6px; padding:0 12px; font-size:14px; outline:none;" />
              </div>
              <div>
                <label class="text-[12px] text-[#6b7280] font-medium block mb-1" style="font-size:12px; color:#6b7280; display:block; margin-bottom:4px;">Đến ngày</label>
                <input type="date" class="field w-full" id="globalExportDateTo" style="width:100%; height:40px; border:1px solid #d9dfe8; border-radius:6px; padding:0 12px; font-size:14px; outline:none;" />
              </div>
            </div>
          </div>

          <!-- Column Selection -->
          <div class="mb-2">
            <div class="flex items-center justify-between mb-2" style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
              <label class="form-label block font-semibold text-[#374151]" style="font-weight:600; color:#374151;">Chọn các trường dữ liệu cần xuất</label>
              <label class="flex items-center gap-1.5 text-[13px] font-bold text-[#c50000] cursor-pointer" style="display:flex; align-items:center; gap:6px; cursor:pointer; font-size:13px; font-weight:700; color:#c50000;">
                <input type="checkbox" id="globalSelectAllColumns" checked class="accent-[#c50000]" />
                Chọn tất cả
              </label>
            </div>
            <div class="grid grid-cols-2 gap-x-6 gap-y-2.5 border border-[#e5e7eb] rounded-lg p-4 bg-[#f9fafb]" style="display:grid; grid-template-columns: 1fr 1fr; gap: 10px 24px; border:1px solid #e5e7eb; border-radius:8px; padding:16px; background:#f9fafb;">
              <label class="flex items-center gap-2 text-[13px] text-[#374151] font-medium cursor-pointer" style="display:flex; align-items:center; gap:8px; cursor:pointer; font-size:13px; font-weight:500; color:#374151;">
                <input type="checkbox" name="globalExportColumns" value="code" checked class="accent-[#c50000]" /> Mã dữ liệu / Số quyết định
              </label>
              <label class="flex items-center gap-2 text-[13px] text-[#374151] font-medium cursor-pointer" style="display:flex; align-items:center; gap:8px; cursor:pointer; font-size:13px; font-weight:500; color:#374151;">
                <input type="checkbox" name="globalExportColumns" value="name" checked class="accent-[#c50000]" /> Tên cơ sở / Đối tượng
              </label>
              <label class="flex items-center gap-2 text-[13px] text-[#374151] font-medium cursor-pointer" style="display:flex; align-items:center; gap:8px; cursor:pointer; font-size:13px; font-weight:500; color:#374151;">
                <input type="checkbox" name="globalExportColumns" value="owner" checked class="accent-[#c50000]" /> Người đại diện / Chủ cơ sở
              </label>
              <label class="flex items-center gap-2 text-[13px] text-[#374151] font-medium cursor-pointer" style="display:flex; align-items:center; gap:8px; cursor:pointer; font-size:13px; font-weight:500; color:#374151;">
                <input type="checkbox" name="globalExportColumns" value="type" checked class="accent-[#c50000]" /> Loại hình / Hành vi vi phạm
              </label>
              <label class="flex items-center gap-2 text-[13px] text-[#374151] font-medium cursor-pointer" style="display:flex; align-items:center; gap:8px; cursor:pointer; font-size:13px; font-weight:500; color:#374151;">
                <input type="checkbox" name="globalExportColumns" value="date" checked class="accent-[#c50000]" /> Ngày nộp / Ngày ban hành
              </label>
              <label class="flex items-center gap-2 text-[13px] text-[#374151] font-medium cursor-pointer" style="display:flex; align-items:center; gap:8px; cursor:pointer; font-size:13px; font-weight:500; color:#374151;">
                <input type="checkbox" name="globalExportColumns" value="status" checked class="accent-[#c50000]" /> Trạng thái thực hiện
              </label>
            </div>
          </div>
        </div>
        <div class="module-modal-foot">
          <button class="inline-flex h-10 items-center justify-center rounded-md border border-[#d9dfe8] bg-white px-5 text-[14px] font-bold text-[#4b5563] shadow-sm transition hover:bg-[#f9fafb]" type="button" onclick="document.getElementById('exportModal').hidden = true" style="display:inline-flex; align-items:center; justify-content:center; height:40px; border:1px solid #d9dfe8; border-radius:6px; background:#fff; padding:0 20px; font-size:14px; font-weight:700; color:#4b5563; cursor:pointer; transition:all 150ms ease; box-shadow: 0 1px 2px rgba(15, 23, 42, 0.05);">Hủy bỏ</button>
          <button class="inline-flex h-10 items-center justify-center rounded-md border border-[#c50000] bg-[#c50000] px-5 text-[14px] font-bold text-white shadow-sm transition hover:bg-[#b00000]" type="button" id="globalExportSubmitBtn" style="display:inline-flex; align-items:center; justify-content:center; height:40px; border:1px solid #c50000; border-radius:6px; background:#c50000; padding:0 20px; font-size:14px; font-weight:700; color:#fff; cursor:pointer; transition:all 150ms ease; margin-left:12px; box-shadow: 0 1px 2px rgba(15, 23, 42, 0.05);">
            <i data-lucide="download" class="h-4 w-4" style="width:16px; height:16px; margin-right:4px;"></i>Thực hiện xuất file
          </button>
        </div>
      </section>`;
    document.body.appendChild(exportModal);

    // Setup events for components inside modals
    const dropzone = document.getElementById('globalDropzone');
    const fileInput = document.getElementById('globalFileInput');
    const fileUploadStatus = document.getElementById('globalFileUploadStatus');
    const selectedFileName = document.getElementById('globalSelectedFileName');
    const selectedFileSize = document.getElementById('globalSelectedFileSize');
    const clearFileBtn = document.getElementById('globalClearFileBtn');
    const importSubmitBtn = document.getElementById('globalImportSubmitBtn');

    if (dropzone && fileInput) {
      dropzone.addEventListener('click', (e) => {
        if (e.target.tagName !== 'INPUT' && e.target.tagName !== 'LABEL') {
          fileInput.click();
        }
      });
      fileInput.addEventListener('change', () => {
        if (fileInput.files.length > 0) {
          handleFile(fileInput.files[0]);
        }
      });

      ['dragenter', 'dragover'].forEach(name => {
        dropzone.addEventListener(name, (e) => {
          e.preventDefault();
          dropzone.classList.add('border-[#c50000]', 'bg-[#fffafa]');
        }, false);
      });
      ['dragleave', 'drop'].forEach(name => {
        dropzone.addEventListener(name, (e) => {
          e.preventDefault();
          dropzone.classList.remove('border-[#c50000]', 'bg-[#fffafa]');
        }, false);
      });
      dropzone.addEventListener('drop', (e) => {
        const files = e.dataTransfer.files;
        if (files.length > 0) handleFile(files[0]);
      });
    }

    function handleFile(file) {
      if (!file.name.endsWith('.xlsx') && !file.name.endsWith('.xls')) {
        alert('Vui lòng chọn tệp tin Excel (.xlsx hoặc .xls)');
        return;
      }
      selectedFileName.textContent = file.name;
      selectedFileSize.textContent = (file.size / (1024 * 1024)).toFixed(2) + ' MB';
      fileUploadStatus.style.display = 'flex';
      dropzone.style.display = 'none';
      if (window.lucide?.createIcons) window.lucide.createIcons();
    }

    clearFileBtn?.addEventListener('click', () => {
      fileInput.value = '';
      fileUploadStatus.style.display = 'none';
      dropzone.style.display = 'block';
    });

    importSubmitBtn?.addEventListener('click', () => {
      if (!fileInput.files.length) {
        alert('Vui lòng chọn tệp dữ liệu trước khi tải lên.');
        return;
      }
      alert('Tải lên tệp thành công! Đang kiểm tra cấu trúc dữ liệu và thực hiện nhập...');
      fileInput.value = '';
      fileUploadStatus.style.display = 'none';
      dropzone.style.display = 'block';
      importModal.hidden = true;
    });

    // Export formats selection card highlight
    const formatRadios = document.querySelectorAll('input[name="globalExportFormat"]');
    formatRadios.forEach(radio => {
      radio.addEventListener('change', (e) => {
        formatRadios.forEach(r => {
          const lbl = r.closest('label');
          lbl.style.borderColor = '#e5e7eb';
          lbl.style.background = '#f9fafb';
        });
        const activeLbl = e.target.closest('label');
        activeLbl.style.borderColor = '#c50000';
        activeLbl.style.background = '#fff';
      });
    });

    // Export date range toggling
    const dateRadios = document.querySelectorAll('input[name="globalExportDateRange"]');
    const customDateInputs = document.getElementById('globalCustomDateInputs');
    dateRadios.forEach(radio => {
      radio.addEventListener('change', (e) => {
        dateRadios.forEach(r => {
          const lbl = r.closest('label');
          lbl.style.borderColor = '#d9dfe8';
          lbl.style.background = '#fff';
          lbl.style.color = '#4b5563';
        });
        const activeLbl = e.target.closest('label');
        activeLbl.style.borderColor = '#c50000';
        activeLbl.style.background = '#fff3f3';
        activeLbl.style.color = '#c50000';

        if (e.target.value === 'custom') {
          customDateInputs.style.display = 'grid';
        } else {
          customDateInputs.style.display = 'none';
        }
      });
    });

    // Select all columns toggle
    const selectAllCheckbox = document.getElementById('globalSelectAllColumns');
    const columnCheckboxes = document.querySelectorAll('input[name="globalExportColumns"]');
    selectAllCheckbox?.addEventListener('change', (e) => {
      columnCheckboxes.forEach(cb => {
        cb.checked = e.target.checked;
      });
    });

    document.getElementById('globalExportSubmitBtn')?.addEventListener('click', () => {
      const checkedCols = document.querySelectorAll('input[name="globalExportColumns"]:checked');
      if (checkedCols.length === 0) {
        alert('Vui lòng chọn ít nhất một trường dữ liệu cần xuất.');
        return;
      }
      const format = document.querySelector('input[name="globalExportFormat"]:checked').value.toUpperCase();
      alert(`Bắt đầu xuất dữ liệu với định dạng ${format}. File kết xuất sẽ được tự động tải xuống sau vài giây.`);
      exportModal.hidden = true;
    });

    if (window.lucide?.createIcons) window.lucide.createIcons();
  }

  document.addEventListener('click', (e) => {
    const btn = e.target.closest('button, a');
    if (!btn) return;

    // Check if it's an Import button
    const isImportBtn = btn.id === 'importBtn' || 
                        btn.getAttribute('id') === 'importBtn' ||
                        btn.textContent.trim().includes('Nhập dữ liệu') || 
                        btn.querySelector('i[data-lucide="file-up"]') || 
                        btn.querySelector('svg[data-lucide="file-up"]');
    
    // Check if it's an Export button
    const isExportBtn = btn.id === 'exportBtn' || 
                        btn.getAttribute('id') === 'exportBtn' ||
                        btn.textContent.trim().includes('Xuất dữ liệu') || 
                        btn.querySelector('i[data-lucide="file-spreadsheet"]') || 
                        btn.querySelector('svg[data-lucide="file-spreadsheet"]');

    if (isImportBtn) {
      e.preventDefault();
      e.stopPropagation();
      injectModals();
      document.getElementById('importModal').hidden = false;
      if (window.lucide?.createIcons) window.lucide.createIcons();
    } else if (isExportBtn) {
      e.preventDefault();
      e.stopPropagation();
      injectModals();
      document.getElementById('exportModal').hidden = false;
      if (window.lucide?.createIcons) window.lucide.createIcons();
    }
  });

  replaceLayout();
  bindLayout();
  if (window.lucide?.createIcons) window.lucide.createIcons();
})();
