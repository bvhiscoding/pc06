/**
 * dang-nhap.js — Login page logic
 * Phụ thuộc: auth.js
 */

(function () {
  // ── Nếu đã đăng nhập → redirect ngay ────────────────────────
  const existingSession = Auth.getSession();
  if (existingSession) {
    if (existingSession.role === 'admin') {
      window.location.replace('Dashboard.html');
    } else {
      window.location.replace('../index.html');
    }
    return;
  }

  // Khởi tạo icons
  lucide.createIcons();

  const fab = document.getElementById('quickLoginFab');
  const drawer = document.getElementById('quickLoginDrawer');
  const closeBtn = document.getElementById('quickLoginClose');
  const accList = document.getElementById('quickAccList');

  // Toggle Drawer
  fab?.addEventListener('click', () => {
    drawer?.classList.toggle('open');
  });

  closeBtn?.addEventListener('click', () => {
    drawer?.classList.remove('open');
  });

  // Đóng drawer khi click ra ngoài
  document.addEventListener('click', (e) => {
    if (drawer && fab && !drawer.contains(e.target) && !fab.contains(e.target)) {
      drawer.classList.remove('open');
    }
  });

  // Render danh sách tài khoản demo vào Drawer
  const demoAccounts = Auth.getDemoAccounts();
  const passwords = {
    'admin': 'admin123',
    'cb.tranthi': 'canbo123',
    'congdan01': 'user123',
    'doanhso.khaibao': 'user123'
  };

  if (accList) {
    accList.innerHTML = demoAccounts.map(acc => {
      const roleClass = acc.role === 'admin' ? 'role-admin' : 'role-user';
      return `
        <button class="quick-acc-item ${roleClass}" type="button" data-username="${acc.username}">
          <div class="acc-avatar" style="background:${acc.avatarColor}">${acc.avatar}</div>
          <div class="acc-details">
            <div class="acc-name">${acc.name}</div>
            <div class="acc-desc">${acc.unit} (${acc.role === 'admin' ? 'Cán bộ' : 'Người dân'})</div>
          </div>
        </button>
      `;
    }).join('');

    // Xử lý click chọn tài khoản nhanh
    accList.addEventListener('click', (e) => {
      const btn = e.target.closest('.quick-acc-item');
      if (!btn) return;
      const username = btn.dataset.username;
      const password = passwords[username];
      
      // Điền vào form và submit tự động
      if (usernameInput) usernameInput.value = username;
      if (passwordInput) passwordInput.value = password;
      
      drawer.classList.remove('open');
      doSubmit(username, password);
    });
  }

  // ── Xử lý form đăng nhập thủ công ────────────────────────────
  const form = document.getElementById('loginForm');
  const usernameInput = document.getElementById('usernameInput');
  const passwordInput = document.getElementById('passwordInput');
  const alertBox = document.getElementById('loginAlert');
  const alertMsg = document.getElementById('loginAlertMsg');
  const togglePass = document.getElementById('togglePassword');

  // Toggle ẩn hiện mật khẩu
  togglePass?.addEventListener('click', () => {
    const isPass = passwordInput.type === 'password';
    passwordInput.type = isPass ? 'text' : 'password';
    
    // Đổi icon
    const icon = togglePass.querySelector('i');
    if (icon) {
      icon.setAttribute('data-lucide', isPass ? 'eye' : 'eye-off');
      lucide.createIcons();
    }
  });

  // Ẩn thông báo lỗi khi gõ lại
  [usernameInput, passwordInput].forEach(inp => {
    inp?.addEventListener('input', () => {
      if (alertBox) alertBox.style.display = 'none';
    });
  });

  form?.addEventListener('submit', (e) => {
    e.preventDefault();
    const u = usernameInput?.value.trim();
    const p = passwordInput?.value;

    if (!u || !p) {
      showAlert('Vui lòng điền đầy đủ tên đăng nhập và mật khẩu.');
      return;
    }

    doSubmit(u, p);
  });

  function doSubmit(username, password) {
    if (alertBox) alertBox.style.display = 'none';
    
    const session = Auth.login(username, password);
    if (!session) {
      showAlert('Tên đăng nhập hoặc mật khẩu không chính xác.');
      return;
    }

    // Redirect dựa theo quyền hạn
    if (session.role === 'admin') {
      window.location.href = 'Dashboard.html';
    } else {
      window.location.href = '../index.html';
    }
  }

  function showAlert(msg) {
    if (alertMsg) alertMsg.textContent = msg;
    if (alertBox) {
      alertBox.style.display = 'flex';
      lucide.createIcons();
    }
  }
})();
