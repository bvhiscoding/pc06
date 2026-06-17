/**
 * auth.js — PC06 Authentication Module
 * Quản lý session đăng nhập bằng localStorage.
 * Không cần backend — dùng cho môi trường demo / prototype.
 */

const PC06_SESSION_KEY = 'pc06_session';

// ─────────────────────────────────────────────────────────
// DANH SÁCH TÀI KHOẢN DEMO
// ─────────────────────────────────────────────────────────
const DEMO_ACCOUNTS = [
  {
    username: 'admin',
    password: 'admin123',
    role: 'admin',
    name: 'Nguyễn Văn A',
    unit: 'Phòng CS QLHC về TTXH',
    avatar: 'A',
    avatarColor: '#bd0000',
  },
  {
    username: 'cb.tranthi',
    password: 'canbo123',
    role: 'admin',
    name: 'Trần Thị B',
    unit: 'Cán bộ PC06 – Ninh Bình',
    avatar: 'T',
    avatarColor: '#0d6efd',
  },
  {
    username: 'congdan01',
    password: 'user123',
    role: 'user',
    name: 'Lê Văn Công',
    unit: 'Công dân',
    avatar: 'C',
    avatarColor: '#16a34a',
  },
  {
    username: 'doanhso.khaibao',
    password: 'user123',
    role: 'user',
    name: 'Doanh nghiệp Tràng An',
    unit: 'Chủ cơ sở kinh doanh',
    avatar: 'D',
    avatarColor: '#d97706',
  },
];

// ─────────────────────────────────────────────────────────
// CORE API
// ─────────────────────────────────────────────────────────

const Auth = {
  /**
   * Đăng nhập — trả về object user nếu thành công, null nếu sai.
   * @param {string} username
   * @param {string} password
   * @returns {{ username, name, unit, role, avatar, avatarColor, loginAt } | null}
   */
  login(username, password) {
    const found = DEMO_ACCOUNTS.find(
      (acc) =>
        acc.username.toLowerCase() === username.trim().toLowerCase() &&
        acc.password === password
    );
    if (!found) return null;

    const session = {
      username: found.username,
      name: found.name,
      unit: found.unit,
      role: found.role,
      avatar: found.avatar,
      avatarColor: found.avatarColor,
      loginAt: new Date().toISOString(),
    };
    localStorage.setItem(PC06_SESSION_KEY, JSON.stringify(session));
    return session;
  },

  /** Đăng xuất — xóa session và redirect về trang login */
  logout(redirectTo = '../html/DangNhap.html') {
    localStorage.removeItem(PC06_SESSION_KEY);
    // Detect nếu đang ở root (index.html) hay trong html/
    const onRoot = !window.location.pathname.includes('/html/');
    window.location.href = onRoot ? 'html/DangNhap.html' : redirectTo;
  },

  /** Trả về session object hoặc null */
  getSession() {
    try {
      const raw = localStorage.getItem(PC06_SESSION_KEY);
      return raw ? JSON.parse(raw) : null;
    } catch {
      return null;
    }
  },

  /** Kiểm tra đã đăng nhập */
  isLoggedIn() {
    return this.getSession() !== null;
  },

  /** Kiểm tra là admin */
  isAdmin() {
    const s = this.getSession();
    return s?.role === 'admin';
  },

  /**
   * Guard cho trang Admin:
   * Nếu không phải admin → redirect về DangNhap.html ngay.
   */
  requireAdmin() {
    if (!this.isAdmin()) {
      const onRoot = !window.location.pathname.includes('/html/');
      window.location.replace(onRoot ? 'html/DangNhap.html' : 'DangNhap.html');
      return false;
    }
    return true;
  },

  /**
   * Guard mềm: trả về session nếu đã đăng nhập user, null nếu chưa.
   * Không redirect — dùng để hiển thị/ẩn UI.
   */
  requireLogin() {
    return this.getSession();
  },

  /** Trả về danh sách tài khoản demo (không có password) */
  getDemoAccounts() {
    return DEMO_ACCOUNTS.map(({ password, ...rest }) => rest);
  },
};

// Expose ra global
window.Auth = Auth;
