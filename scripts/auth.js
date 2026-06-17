/**
 * auth.js — PC06 Authentication Module
 * Quản lý session đăng nhập bằng localStorage.
 * Không cần backend — dùng cho môi trường demo / prototype.
 *
 * Nguồn tài khoản: ninh-binh-sync-3-accounts.json
 * Phân quyền:
 *   - CONG_AN_TINH (pc06.ninhbinh): xem toàn bộ dữ liệu tỉnh
 *   - CONG_AN_XA   (dongthanh.ca, namthanh.ca): chỉ xem dữ liệu địa bàn được phân công
 */

const PC06_SESSION_KEY = 'pc06_session';

// ─────────────────────────────────────────────────────────
// DANH SÁCH TÀI KHOẢN DEMO
// Nguồn: ninh-binh-sync-3-accounts.json và tài khoản demo công dân/doanh nghiệp
// ─────────────────────────────────────────────────────────
const DEMO_ACCOUNTS = [
  {
    // TK-NB-001 — Công an tỉnh Ninh Bình (xem toàn bộ)
    username: 'pc06.ninhbinh',
    password: '123456',
    role: 'admin',
    ma_vai_tro: 'CONG_AN_TINH',
    ma_don_vi: 'NB-PC06',
    name: 'Nguyễn Văn A',
    cap_bac: 'Thiếu tá',
    chuc_vu: 'Cán bộ Phòng Cảnh sát QLHC về TTXH',
    unit: 'Phòng CS QLHC về TTXH – Công an tỉnh Ninh Bình',
    avatar: 'A',
    avatarColor: '#bd0000',
    pham_vi_quan_ly: {
      tinh: 'Ninh Bình',
      quan_huyen: ['Thành phố Ninh Bình'],
      phuong_xa: ['Phường Đông Thành', 'Phường Nam Thành'],
    },
  },
  {
    // TK-NB-002 — Công an phường Đông Thành (chỉ xem Đông Thành)
    username: 'dongthanh.ca',
    password: '123456',
    role: 'admin',
    ma_vai_tro: 'CONG_AN_XA',
    ma_don_vi: 'NB-DT',
    name: 'Trần Văn K',
    cap_bac: 'Đại úy',
    chuc_vu: 'Cán bộ Công an phường Đông Thành',
    unit: 'Công an phường Đông Thành',
    avatar: 'K',
    avatarColor: '#0d6efd',
    pham_vi_quan_ly: {
      tinh: 'Ninh Bình',
      quan_huyen: ['Thành phố Ninh Bình'],
      phuong_xa: ['Phường Đông Thành'],
    },
  },
  {
    // TK-NB-003 — Công an phường Nam Thành (chỉ xem Nam Thành)
    username: 'namthanh.ca',
    password: '123456',
    role: 'admin',
    ma_vai_tro: 'CONG_AN_XA',
    ma_don_vi: 'NB-NT',
    name: 'Phạm Thị H',
    cap_bac: 'Đại úy',
    chuc_vu: 'Cán bộ Công an phường Nam Thành',
    unit: 'Công an phường Nam Thành',
    avatar: 'H',
    avatarColor: '#16a34a',
    pham_vi_quan_ly: {
      tinh: 'Ninh Bình',
      quan_huyen: ['Thành phố Ninh Bình'],
      phuong_xa: ['Phường Nam Thành'],
    },
  },
  {
    // TK-NB-004 — Công dân
    username: 'congdan01',
    password: 'user123',
    role: 'user',
    ma_vai_tro: 'CONG_DAN',
    ma_don_vi: 'DAN-01',
    name: 'Lê Văn Công',
    chuc_vu: 'Công dân',
    unit: 'Công dân',
    avatar: 'C',
    avatarColor: '#16a34a',
  },
  {
    // TK-NB-005 — Chủ cơ sở kinh doanh
    username: 'doanhso.khaibao',
    password: 'user123',
    role: 'user',
    ma_vai_tro: 'CHU_CO_SO',
    ma_don_vi: 'DN-TA',
    name: 'Doanh nghiệp Tràng An',
    chuc_vu: 'Chủ cơ sở kinh doanh',
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
      // Phân quyền theo chức vụ
      ma_vai_tro: found.ma_vai_tro || null,
      ma_don_vi: found.ma_don_vi || null,
      cap_bac: found.cap_bac || '',
      chuc_vu: found.chuc_vu || '',
      pham_vi_quan_ly: found.pham_vi_quan_ly || null,
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

  /** Trả về session object hoặc null.
   * Session cũ (không có ma_vai_tro) sẽ bị tự động xóa để buộc đăng nhập lại. */
  getSession() {
    try {
      const raw = localStorage.getItem(PC06_SESSION_KEY);
      if (!raw) return null;
      const session = JSON.parse(raw);
      // Invalidate session cũ không có ma_vai_tro (từ hệ thống cũ)
      if (!session.ma_vai_tro) {
        localStorage.removeItem(PC06_SESSION_KEY);
        // Xóa cả sessionStorage cache cũ
        sessionStorage.removeItem('mockBusinesses');
        return null;
      }
      return session;
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
