(() => {
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
              <div class="grid h-[46px] w-[46px] place-items-center rounded-full bg-white text-[#cf0000] shadow-sm">${icon('user-round', 'h-7 w-7 fill-[#cf0000]/15')}</div>
              <div class="hidden text-left sm:block"><div class="text-[15px] font-semibold leading-5">Nguyễn Văn A</div><div class="text-[13px] font-medium text-white/92">Phòng CS QLHC về TTXH</div></div>
              ${icon('chevron-down', 'user-chevron h-5 w-5 text-white')}
            </button>
            <div id="userMenu" class="topbar-dropdown user-dropdown" hidden>
              <div class="user-card"><div class="grid h-11 w-11 place-items-center rounded-full bg-[#fff2f2] text-[#cf0000]">${icon('user-round', 'h-6 w-6')}</div><div><div class="user-name">Nguyễn Văn A</div><div class="user-role">Phòng CS QLHC về TTXH</div></div></div>
              <a class="dropdown-action" href="HoSoCaNhan.html">${icon('id-card', 'h-4 w-4')}Hồ sơ cá nhân</a>
              <a class="dropdown-action" href="CauHinhHeThong.html">${icon('settings', 'h-4 w-4')}Cài đặt hiển thị</a>
              <a class="dropdown-action danger" href="DangNhap.html">${icon('log-out', 'h-4 w-4')}Đăng xuất</a>
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
          ${navItem('CongCSKD-Dashboard.html', 'layout-dashboard', 'Dashboard cơ sở', ['CongCSKD-Dashboard.html'])}

          <div class="nav-section">Giám sát địa bàn</div>
          ${navItem('BanDoSoGis.html', 'map-pin', 'Bản đồ số GIS', ['BanDoSoGis.html'])}

          <div class="nav-section">Nghiệp vụ</div>
          ${navItem('QuanLyHoSo.html', 'file-text', 'Quản lý hồ sơ', ['QuanLyHoSo.html', 'ChiTietHoSo.html'])}
          ${navItem('CoSoDuLieuCSKD.html', 'database', 'Cơ sở dữ liệu CSKD-ANTT', ['CoSoDuLieuCSKD.html', 'CoSoDuLieuCSKD-ChiTiet.html', 'CoSoDuLieuCSKD-TaoMoi.html'])}
          ${navItem('QuanLyKhaiBao.html', 'inbox', 'Khai báo từ cơ sở', ['QuanLyKhaiBao.html', 'CongCSKD-KhaiBaoLuuTru.html', 'CongCSKD-KhaiBaoTaiSan.html', 'CongCSKD-BaoCaoDinhKy.html'])}
          ${navItem('KiemTraCoSo.html', 'clipboard-check', 'Kiểm tra cơ sở', ['KiemTraCoSo.html', 'KiemTraCoSo-LichKiemTra.html', 'KiemTraCoSo-TaoKeHoach.html', 'KiemTraCoSo-ChinhSuaKiemTra.html', 'KiemTraCoSo-ChiTietKiemTra.html', 'QuanLyMauChecklist.html'])}
          ${navItem('XuLyViPham.html', 'octagon-alert', 'Vi phạm / Xử lý vi phạm', ['XuLyViPham.html', 'XuLyViPham-ThemViPham.html', 'XuLyViPham-ChiTietViPham.html', 'XuLyViPham-CapNhatXuLy.html'])}
          ${navItem('QuanLyPhanAnh.html', 'message-square-warning', 'Phản ánh kiến nghị', ['QuanLyPhanAnh.html', 'QuanLyPhanAnh-TaoMoiPhanAnh.html', 'QuanLyPhanAnh-ChiTietPhanAnh.html', 'QuanLyPhanAnh-ChinhSuaPhanAnh.html'])}

          <div class="nav-section">Cổng cơ sở</div>
          ${navItem('CongCSKD-HoSoCuaToi.html', 'store', 'Hồ sơ cơ sở của tôi', ['CongCSKD-HoSoCuaToi.html'])}

          <div class="nav-section">Báo cáo</div>
          ${navItem('BaoCao-ThongKe.html', 'chart-column-big', 'Báo cáo - thống kê', ['BaoCao-ThongKe.html'])}

          <div class="nav-section">Thủ tục & thông báo</div>
          ${navItem('ThuTuc-QuanTri.html', 'clipboard-list', 'Quản trị thủ tục', ['ThuTuc-QuanTri.html', 'ThuTuc-ChiTiet.html'])}
          ${navItem('TrungTamThongBao.html', 'bell-ring', 'Trung tâm thông báo', ['TrungTamThongBao.html'])}

          <div class="nav-section">Cấu hình</div>
          ${navItem('DanhMuc.html', 'folder', 'Danh mục dùng chung', ['DanhMuc.html'])}
          ${navItem('QuanLyTaiKhoan.html', 'users', 'Người dùng & phân quyền', ['QuanLyTaiKhoan.html', 'HoSoCaNhan.html', 'MaTranPhanQuyen.html', 'PhanCongDiaBan.html'])}
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
  }

  replaceLayout();
  bindLayout();
  if (window.lucide?.createIcons) window.lucide.createIcons();
})();
