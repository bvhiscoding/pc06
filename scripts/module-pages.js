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

const commonStats = [
  ['Tổng bản ghi', '128', 'Đang quản lý trong phạm vi demo'],
  ['Chờ xử lý', '18', 'Cần rà soát trong hôm nay'],
  ['Đúng hạn', '92%', 'Theo chu kỳ nghiệp vụ'],
  ['Cảnh báo', '05', 'Ưu tiên kiểm tra trước']
];

const roleOptions = ['Quản trị hệ thống', 'Lãnh đạo PC06', 'Cán bộ PC06', 'Công an xã/phường', 'Chủ cơ sở kinh doanh', 'Người xem báo cáo'];
const wardOptions = ['P. Đông Thành', 'P. Nam Thành', 'P. Nam Bình', 'P. Tân Thành', 'P. Phúc Thành', 'P. Vân Giang'];
const statusOptions = ['Đang hoạt động', 'Chờ duyệt', 'Đang xử lý', 'Cần bổ sung', 'Đã hoàn thành', 'Tạm khóa'];

const accountRows = [
  ['Nguyễn Văn A', 'nva.pc06', 'Quản trị hệ thống', 'Phòng PC06', 'Toàn tỉnh', '0912 345 678', 'Đang hoạt động', '08:35 15/06/2026'],
  ['Phạm Thị H', 'pth.hoso', 'Cán bộ PC06', 'Đội hồ sơ', 'P. Đông Thành', '0988 400 124', 'Đang hoạt động', '17:10 14/06/2026'],
  ['Trần Văn K', 'tvk.xa', 'Công an xã/phường', 'CA P. Nam Thành', 'P. Nam Thành', '0977 210 123', 'Đang hoạt động', '09:42 13/06/2026'],
  ['Lê Minh D', 'lmd.gis', 'Lãnh đạo PC06', 'Đội địa bàn', 'Toàn tỉnh', '0904 800 122', 'Tạm khóa', '15:20 10/06/2026']
];

const declarationRows = [
  ['KB-2026-0188', 'Lưu trú', 'Khách sạn Tràng An', 'P. Đông Thành', '03 khách', '07:30 15/06/2026', 'Chờ duyệt', 'Nguyễn Văn A'],
  ['KB-2026-0187', 'Tài sản', 'Cầm đồ Phát Lộc', 'P. Tân Thành', 'Xe máy SH 150i', '20:10 14/06/2026', 'Cần bổ sung', 'Trần Văn K'],
  ['KB-2026-0186', 'Lưu trú', 'Nhà nghỉ Bình Minh', 'P. Nam Thành', '05 khách', '18:45 14/06/2026', 'Đã hoàn thành', 'Phạm Thị H'],
  ['KB-2026-0185', 'Báo cáo định kỳ', 'Karaoke Hoa Sen', 'P. Đông Thành', 'Tháng 06/2026', '10:15 13/06/2026', 'Đang xử lý', 'Nguyễn Văn A'],
  ['KB-2026-0184', 'Lưu trú', 'Nhà nghỉ Cát Tường', 'P. Phúc Thành', '02 khách (Nộp muộn)', '09:00 12/06/2026', 'Nộp muộn', 'Phạm Thị H'],
  ['KB-2026-0183', 'Tài sản', 'Cầm đồ Kim Long', 'P. Nam Bình', 'Điện thoại iPhone 15', '15:30 11/06/2026', 'Có cảnh báo', 'Trần Văn K'],
  ['KB-2026-0182', 'Báo cáo định kỳ', 'Khách sạn Hoa Lư', 'P. Đông Thành', 'Tháng 05/2026', '08:45 10/06/2026', 'Chờ xử lý', 'Nguyễn Văn A']
];

const procedureRows = [
  ['ANTT-001', 'Cấp mới giấy chứng nhận đủ điều kiện ANTT', 'Cấp phép', '15 ngày', '05 biểu mẫu', 'Đang hoạt động', '12/06/2026'],
  ['ANTT-002', 'Cấp đổi giấy chứng nhận đủ điều kiện ANTT', 'Cấp phép', '10 ngày', '04 biểu mẫu', 'Đang hoạt động', '11/06/2026'],
  ['ANTT-003', 'Cấp lại giấy chứng nhận đủ điều kiện ANTT', 'Cấp phép', '07 ngày', '03 biểu mẫu', 'Đang hoạt động', '10/06/2026'],
  ['ANTT-004', 'Khai báo thay đổi thông tin cơ sở', 'Khai báo', '05 ngày', '02 biểu mẫu', 'Chờ duyệt', '09/06/2026']
];

const logRows = [
  ['08:42 15/06/2026', 'nva.pc06', 'Quản trị hệ thống', 'Duyệt hồ sơ', 'Quản lý hồ sơ', 'HS-2026-00124', 'Duyệt hồ sơ Nhà nghỉ Bình Minh', '10.12.6.24', 'Thành công'],
  ['08:35 15/06/2026', 'pth.hoso', 'Cán bộ PC06', 'Đăng nhập', 'Xác thực', 'SESSION-8841', 'Đăng nhập bằng tài khoản mẫu', '10.12.6.31', 'Thành công'],
  ['08:18 15/06/2026', 'tvk.xa', 'Công an xã/phường', 'Cập nhật', 'Kiểm tra cơ sở', 'KT-2026-0032', 'Cập nhật biên bản kiểm tra', '10.12.8.11', 'Thành công'],
  ['17:02 14/06/2026', 'lmd.gis', 'Lãnh đạo PC06', 'Xuất báo cáo', 'Báo cáo', 'BC-TH-06', 'Xuất báo cáo tổng hợp tháng', '10.12.6.50', 'Thành công']
];

const moduleConfigs = {
  profile: {
    title: 'Hồ sơ cá nhân',
    section: 'Người dùng và phân quyền',
    icon: 'id-card',
    description: 'Thông tin cán bộ, vai trò, địa bàn phụ trách và bảo mật tài khoản.',
    action: 'Cập nhật thông tin',
    entities: ['UserProfile', 'Role', 'WardAssignment', 'ActivityLog'],
    stats: [['Mã cán bộ', 'PC06-001', 'Phòng CS QLHC về TTXH'], ['Vai trò', 'Cán bộ PC06', 'Quản lý hồ sơ toàn tỉnh theo phân công'], ['Địa bàn', '03', 'Đông Thành, Nam Thành, Tân Thành'], ['Bảo mật', 'OTP', 'Đã bật xác thực 2 lớp']],
    formSections: [
      section('Thông tin cá nhân', 'user-round', [['Họ và tên *', 'Nguyễn Văn A'], ['Mã cán bộ *', 'PC06-001'], ['Chức vụ', 'Cán bộ xử lý hồ sơ'], ['Đơn vị', 'Phòng CS QLHC về TTXH']]),
      section('Liên hệ và bảo mật', 'shield-check', [['Điện thoại *', '0912 345 678'], ['Email công vụ *', 'nva.pc06@ninhbinh.gov.vn'], ['Lần đăng nhập cuối', '08:35 15/06/2026'], ['Trạng thái OTP', 'Đã bật']]),
      section('Địa bàn phụ trách', 'map-pin', [['Phạm vi dữ liệu', 'Toàn tỉnh theo nhiệm vụ'], ['Xã/phường phụ trách', 'P. Đông Thành, P. Nam Thành, P. Tân Thành']], 'textarea')
    ],
    details: [['Tài khoản', 'nva.pc06'], ['Vai trò chính', 'Cán bộ PC06'], ['Quyền nổi bật', 'Xem, tiếp nhận, duyệt hồ sơ được phân công'], ['Trạng thái', 'Đang hoạt động']],
    workflow: ['Mở hồ sơ cá nhân', 'Cập nhật thông tin liên hệ', 'Xác nhận bằng mật khẩu/OTP', 'Ghi nhật ký thay đổi'],
    docs: ['Quyết định phân công địa bàn', 'Chứng thư số nội bộ', 'Lịch sử đăng nhập gần nhất']
  },
  accounts: {
    title: 'Danh sách tài khoản',
    section: 'Người dùng và phân quyền',
    icon: 'users',
    description: 'Quản lý cán bộ, vai trò, đơn vị, địa bàn và trạng thái truy cập hệ thống.',
    action: 'Thêm tài khoản',
    entities: ['UserProfile', 'Role', 'WardAssignment'],
    filters: filters(['Từ khóa', 'Vai trò', 'Đơn vị', 'Xã/phường', 'Trạng thái']),
    tabs: ['Tất cả', 'Đang hoạt động', 'Tạm khóa', 'Chờ kích hoạt'],
    columns: ['Họ tên', 'Tên đăng nhập', 'Vai trò', 'Đơn vị', 'Địa bàn', 'Điện thoại', 'Trạng thái', 'Đăng nhập cuối'],
    rows: accountRows,
    details: [['Tổng tài khoản', '46'], ['Chủ cơ sở', '12 tài khoản'], ['Công an xã/phường', '18 tài khoản'], ['Tài khoản cần rà soát', '03 tạm khóa']],
    workflow: ['Tạo tài khoản', 'Gán vai trò', 'Phân công địa bàn', 'Kích hoạt và gửi thông báo'],
    docs: ['Mẫu import tài khoản', 'Danh sách vai trò chuẩn', 'Biên bản bàn giao tài khoản']
  },
  'account-form': {
    title: 'Thêm / sửa tài khoản',
    section: 'Người dùng và phân quyền',
    icon: 'user-plus',
    description: 'Biểu mẫu nhiều nhóm thông tin, có điều kiện theo vai trò chủ cơ sở hoặc cán bộ xã/phường.',
    action: 'Lưu tài khoản',
    entities: ['UserProfile', 'Role', 'WardAssignment', 'Business'],
    formSections: [
      section('Thông tin đăng nhập', 'key-round', [['Tên đăng nhập *', 'ltt.pc06'], ['Email đăng nhập *', 'ltt.pc06@ninhbinh.gov.vn'], ['Mật khẩu tạm *', 'Tự sinh khi lưu'], ['Yêu cầu đổi mật khẩu', 'Có']]),
      section('Thông tin cá nhân', 'user-round', [['Họ tên *', 'Lê Thị Tâm'], ['Số điện thoại *', '0988 200 116'], ['Mã cán bộ', 'PC06-018'], ['Chức vụ', 'Cán bộ tiếp nhận']]),
      section('Đơn vị, vai trò và phạm vi', 'shield-check', [['Đơn vị *', 'Đội quản lý hồ sơ'], ['Vai trò *', 'Cán bộ PC06'], ['Xã/phường bắt buộc nếu là cán bộ xã', 'P. Đông Thành'], ['Cơ sở bắt buộc nếu là chủ CSKD', 'Không áp dụng']]),
      section('Trạng thái và ghi chú', 'notebook-pen', [['Trạng thái', 'Đang hoạt động'], ['Ghi chú', 'Được tiếp nhận hồ sơ mới, yêu cầu bổ sung và xem báo cáo theo đơn vị']], 'textarea')
    ],
    details: [['Rule hiển thị động', 'Chủ cơ sở: chọn cơ sở. Cán bộ xã: bắt buộc chọn xã/phường'], ['Validation', 'Tên đăng nhập, email, vai trò, đơn vị là bắt buộc'], ['Soft delete', 'Khóa tài khoản thay vì xóa vật lý']],
    workflow: ['Nhập thông tin đăng nhập', 'Gán vai trò và phạm vi', 'Kiểm tra điều kiện theo role', 'Lưu và ghi ActivityLog'],
    docs: ['Chính sách mật khẩu', 'Danh mục vai trò', 'Danh sách địa bàn']
  },
  permissions: {
    title: 'Ma trận phân quyền',
    section: 'Người dùng và phân quyền',
    icon: 'shield-check',
    description: 'Thiết lập quyền theo module: xem, thêm, sửa, xóa mềm, duyệt, xuất dữ liệu và quản trị.',
    action: 'Lưu phân quyền',
    entities: ['Role', 'Permission', 'RolePermission'],
    variant: 'permission',
    details: [['Vai trò đang chọn', 'Cán bộ PC06'], ['Số quyền bật', '42/63'], ['Quyền quản trị', 'Cần xác nhận khi thay đổi'], ['Ảnh hưởng UI', 'Ẩn/hiện menu và nút thao tác']],
    workflow: ['Chọn vai trò', 'Chọn quyền theo hàng/cột', 'Cảnh báo quyền nhạy cảm', 'Lưu RolePermission'],
    docs: ['Danh sách quyền chuẩn', 'Lịch sử thay đổi quyền', 'Tài khoản bị ảnh hưởng']
  },
  'area-assignment': {
    title: 'Phân công địa bàn',
    section: 'Người dùng và phân quyền',
    icon: 'map',
    description: 'Giao xã/phường, loại phân công chính/phối hợp, thời hạn và trạng thái hiệu lực cho cán bộ.',
    action: 'Thêm phân công',
    entities: ['WardAssignment', 'UserProfile', 'Ward'],
    filters: filters(['Cán bộ', 'Đơn vị', 'Xã/phường', 'Loại phân công', 'Trạng thái']),
    columns: ['Cán bộ', 'Đơn vị', 'Xã/phường', 'Loại phân công', 'Từ ngày', 'Đến ngày', 'Số cơ sở', 'Trạng thái'],
    rows: [['Nguyễn Văn A', 'Phòng PC06', 'P. Đông Thành', 'Chính', '01/01/2026', '31/12/2026', '42', 'Đang hoạt động'], ['Phạm Thị H', 'Đội hồ sơ', 'P. Tân Thành', 'Phối hợp', '01/03/2026', '31/12/2026', '28', 'Đang hoạt động'], ['Trần Văn K', 'CA P. Nam Thành', 'P. Nam Thành', 'Chính', '15/02/2026', 'Không thời hạn', '31', 'Đang hoạt động']],
    details: [['Địa bàn nhiều cơ sở nhất', 'P. Đông Thành - 42 cơ sở'], ['Phân công chính', '18'], ['Phân công phối hợp', '07'], ['Sắp hết hạn', '02']],
    workflow: ['Chọn cán bộ', 'Chọn xã/phường', 'Khai báo thời hạn', 'Kích hoạt phân công'],
    docs: ['Quyết định phân công', 'Danh sách xã/phường', 'Bản đồ phạm vi quản lý']
  },
  'business-dashboard': {
    title: 'Dashboard cơ sở kinh doanh',
    section: 'Cổng cơ sở kinh doanh',
    icon: 'layout-dashboard',
    description: 'Không gian làm việc của chủ cơ sở: giấy phép, khai báo, báo cáo, lịch kiểm tra và thông báo.',
    action: 'Tạo khai báo',
    entities: ['Business', 'BusinessDocument', 'Declaration', 'PeriodicReport', 'Notification'],
    stats: [['Giấy CN ANTT', 'Còn 128 ngày', 'NB-ANTT-0256'], ['Khai báo tháng này', '18', '3 khai báo chờ duyệt'], ['Báo cáo định kỳ', 'Đúng hạn', 'Kỳ tháng 06/2026'], ['Thông báo mới', '05', '2 yêu cầu cần phản hồi']],
    columns: ['Việc cần làm', 'Loại', 'Hạn xử lý', 'Đối tượng', 'Trạng thái', 'Gợi ý thao tác'],
    rows: [['Nộp báo cáo định kỳ tháng 06', 'Báo cáo', '20/06/2026', 'Khách sạn Tràng An', 'Đang xử lý', 'Mở biểu mẫu'], ['Bổ sung danh sách nhân sự trực đêm', 'Hồ sơ', '18/06/2026', 'Khách sạn Tràng An', 'Cần bổ sung', 'Cập nhật hồ sơ'], ['Xác nhận lịch kiểm tra', 'Kiểm tra', '22/06/2026', 'Đoàn kiểm tra PC06', 'Chờ duyệt', 'Xác nhận lịch']],
    details: [['Cơ sở đăng nhập', 'Khách sạn Tràng An'], ['Loại hình', 'Lưu trú'], ['Quản lý trực tiếp', 'P. Đông Thành'], ['Cán bộ phụ trách', 'Nguyễn Văn A']],
    workflow: ['Nhận thông báo', 'Chuẩn bị dữ liệu', 'Gửi khai báo/báo cáo', 'Theo dõi phản hồi cán bộ'],
    docs: ['Giấy chứng nhận ANTT', 'Giấy PCCC', 'Mẫu báo cáo định kỳ']
  },
  'my-business': businessProfileConfig(),
  'stay-declaration': declarationFormConfig('Khai báo lưu trú', 'bed', 'DeclarationStay', [
    section('Thông tin cơ sở và kỳ khai báo', 'store', [['Cơ sở *', 'Khách sạn Tràng An'], ['Ngày khai báo *', '15/06/2026'], ['Ca trực', 'Ca đêm'], ['Người khai báo', 'Lê Văn D']]),
    section('Thông tin khách lưu trú', 'users', [['Họ tên khách *', 'Nguyễn Minh Quân'], ['CCCD/Hộ chiếu *', '035092012345'], ['Số phòng *', '305'], ['Thời gian lưu trú *', '14:00 15/06/2026 - 10:00 16/06/2026']]),
    section('Kiểm tra và ghi chú', 'file-check-2', [['Tình trạng giấy tờ', 'Hợp lệ'], ['Ghi chú', 'Khách đi cùng đoàn công tác 03 người, đã kiểm tra giấy tờ.']], 'textarea')
  ]),
  'asset-declaration': declarationFormConfig('Khai báo tài sản / giao dịch', 'receipt-text', 'AssetTransaction', [
    section('Thông tin giao dịch', 'receipt-text', [['Cơ sở *', 'Cầm đồ Phát Lộc'], ['Loại giao dịch *', 'Cầm cố tài sản'], ['Ngày giao dịch *', '15/06/2026'], ['Giá trị giao dịch', '45.000.000 VNĐ']]),
    section('Khách hàng và tài sản', 'badge-check', [['Khách hàng *', 'Trần Quốc Bảo'], ['CCCD đã mask', '0370******91'], ['Tài sản *', 'Xe máy Honda SH 150i'], ['Biển kiểm soát', '35B1-123.45']]),
    section('Đối soát', 'scan-search', [['Nguồn kiểm tra', 'Đăng ký xe / CCCD'], ['Ghi chú', 'Kèm giấy đăng ký bản gốc, chờ đối soát số khung số máy.']], 'textarea')
  ]),
  'periodic-report': periodicReportConfig(),
  'declaration-admin': {
    title: 'Quản lý khai báo',
    section: 'Khai báo từ cơ sở',
    icon: 'inbox',
    description: 'Cán bộ tiếp nhận, lọc, xem chi tiết, duyệt, từ chối hoặc yêu cầu bổ sung khai báo.',
    action: 'Duyệt hàng loạt',
    entities: ['DeclarationStay', 'AssetTransaction', 'PeriodicReport', 'Notification'],
    filters: filters(['Từ khóa', 'Loại khai báo', 'Cơ sở', 'Địa bàn', 'Trạng thái', 'Ngày gửi', 'Mức độ cảnh báo']),
    tabs: ['Khai báo lưu trú', 'Khai báo tài sản', 'Báo cáo định kỳ', 'Nộp muộn', 'Có cảnh báo', 'Chờ xử lý'],
    columns: ['Mã khai báo', 'Loại', 'Cơ sở', 'Địa bàn', 'Nội dung', 'Ngày gửi', 'Trạng thái', 'Cán bộ'],
    rows: declarationRows,
    stats: [
      ['Tổng khai báo', '128', 'Đã tiếp nhận trong tháng'],
      ['Chờ xử lý', '18', 'Cần duyệt trong ngày'],
      ['Cảnh báo đối soát', '03', 'Hệ thống tự động phát hiện'],
      ['Nộp muộn', '05', 'Cần gửi nhắc nhở cơ sở']
    ],
    details: [['Chờ duyệt', '18'], ['Cần bổ sung', '12'], ['Khai báo lưu trú', '86'], ['Khai báo tài sản', '40']],
    workflow: ['Tiếp nhận khai báo', 'Kiểm tra trường bắt buộc', 'Đối chiếu dữ liệu liên quan', 'Duyệt hoặc yêu cầu bổ sung'],
    docs: ['Tệp CCCD đính kèm', 'Ảnh tài sản', 'Phiếu báo cáo định kỳ']
  },
  'declaration-detail': declarationDetailConfig(),
  'checklist-template': checklistConfig(),
  'procedure-detail': procedureDetailConfig(),
  'procedure-admin': {
    title: 'Quản trị thủ tục',
    section: 'Thủ tục hành chính',
    icon: 'clipboard-list',
    description: 'Quản lý thủ tục công khai, thành phần hồ sơ, phiên bản, biểu mẫu và trạng thái áp dụng.',
    action: 'Thêm thủ tục',
    entities: ['Procedure', 'BusinessType', 'DocumentType'],
    filters: filters(['Từ khóa', 'Loại hình', 'Đối tượng', 'Trạng thái', 'Ngày cập nhật']),
    tabs: ['Đang công khai', 'Bản nháp', 'Ngừng áp dụng', 'Chờ duyệt'],
    columns: ['Mã thủ tục', 'Tên thủ tục', 'Lĩnh vực', 'Thời hạn', 'Biểu mẫu', 'Trạng thái', 'Cập nhật'],
    rows: procedureRows,
    details: [['Thủ tục công khai', '12'], ['Bản nháp', '03'], ['Có biểu mẫu', '10'], ['Sắp hết hiệu lực', '01']],
    workflow: ['Soạn nội dung', 'Gắn biểu mẫu', 'Xem trước công khai', 'Đăng công khai hoặc ngừng áp dụng'],
    docs: ['Mẫu đơn đề nghị', 'Căn cứ pháp lý', 'Lịch sử phiên bản']
  },
  'notifications-center': notificationsConfig(),
  'activity-log': {
    title: 'Nhật ký hoạt động',
    section: 'Nhật ký hệ thống',
    icon: 'history',
    description: 'Theo dõi thao tác người dùng, đối tượng dữ liệu, IP, kết quả và chi tiết dữ liệu cũ/mới.',
    action: 'Xuất nhật ký',
    entities: ['ActivityLog', 'UserProfile'],
    filters: filters(['Người dùng', 'Module', 'Hành động', 'Khoảng thời gian', 'Kết quả', 'Đối tượng dữ liệu']),
    tabs: ['Hôm nay', 'Đăng nhập', 'Cập nhật dữ liệu', 'Cảnh báo', 'Thất bại'],
    columns: ['Thời gian', 'Người dùng', 'Vai trò', 'Hành động', 'Module', 'Đối tượng', 'Mô tả', 'IP', 'Kết quả'],
    rows: logRows,
    details: [['Không cho sửa/xóa', 'Nhật ký chỉ đọc'], ['Phiên đăng nhập', 'SESSION-8841'], ['User agent', 'Chrome / Windows'], ['Dữ liệu cũ/mới', 'Xem trong modal chi tiết']],
    workflow: ['Ghi nhận hành động', 'Lưu đối tượng và IP', 'Hiển thị chi tiết log', 'Xuất CSV phục vụ kiểm tra'],
    docs: ['Dữ liệu cũ', 'Dữ liệu mới', 'Thông tin phiên đăng nhập']
  },
  'system-config': systemConfig(),
  'data-import': importConfig(),
  'seed-data': seedConfig(),
  'module-check': moduleCheckConfig(),
  'frontend-security': securityConfig(),
  'demo-guide': guideConfig()
};

function businessProfileConfig() {
  return {
    title: 'Hồ sơ cơ sở của tôi',
    section: 'Cổng cơ sở kinh doanh',
    icon: 'store',
    description: 'Chủ cơ sở xem thông tin pháp lý, giấy phép, nhân sự, cơ sở vật chất và gửi yêu cầu chỉnh sửa.',
    action: 'Yêu cầu chỉnh sửa',
    entities: ['Business', 'BusinessDocument', 'BusinessPerson', 'BusinessChangeHistory'],
    stats: [['Mã cơ sở', 'CSKD-000256', 'Khách sạn Tràng An'], ['Giấy CN ANTT', 'NB-ANTT-0256', 'Còn hiệu lực'], ['Nhân sự', '18', '3 người mới cập nhật'], ['Yêu cầu sửa', '01', 'Đang chờ duyệt']],
    formSections: [
      section('Thông tin nhận diện', 'store', [['Tên cơ sở *', 'Khách sạn Tràng An'], ['Loại hình *', 'Lưu trú'], ['Mã số thuế', '2700 123 456'], ['Số ĐKKD', '35A-2024-0123']]),
      section('Địa chỉ và vị trí', 'map-pin', [['Tỉnh', 'Ninh Bình'], ['Xã/phường', 'P. Đông Thành'], ['Địa chỉ chi tiết', 'Số 18 đường Tràng An'], ['Tọa độ', '20.2531, 105.9748']]),
      section('Người đại diện và giấy phép', 'badge-check', [['Chủ cơ sở *', 'Lê Văn D'], ['CCCD đã mask', '0350******45'], ['Số giấy CN ANTT', 'NB-ANTT-0256'], ['Ngày hết hạn', '20/10/2026']]),
      section('Nội dung yêu cầu chỉnh sửa', 'notebook-pen', [['Lý do', 'Cập nhật số điện thoại quản lý ca đêm và danh sách nhân sự mới.']], 'textarea')
    ],
    details: [['Trạng thái hồ sơ', 'Đã xác minh'], ['Cán bộ phụ trách', 'Nguyễn Văn A'], ['Kiểm tra gần nhất', '22/02/2026'], ['Kiểm tra tiếp theo', '22/08/2026']],
    workflow: ['Chủ cơ sở gửi yêu cầu chỉnh sửa', 'Cán bộ xã tiếp nhận', 'PC06 xác minh nếu thay đổi pháp lý', 'Cập nhật lịch sử thay đổi'],
    docs: ['Giấy chứng nhận ANTT', 'Giấy đăng ký kinh doanh', 'Danh sách nhân sự', 'Ảnh cơ sở']
  };
}

function declarationFormConfig(title, icon, entity, sections) {
  return {
    title,
    section: 'Cổng cơ sở kinh doanh',
    icon,
    description: 'Biểu mẫu khai báo có trường bắt buộc, kiểm tra dữ liệu, lưu nháp, gửi duyệt và lịch sử xử lý.',
    action: 'Gửi khai báo',
    entities: ['Business', entity, 'Notification', 'ActivityLog'],
    stats: [['Trạng thái', 'Nháp', 'Chưa gửi cán bộ'], ['Trường bắt buộc', '06', 'Cần nhập đủ trước khi gửi'], ['Tệp đính kèm', '02', 'Ảnh/giấy tờ liên quan'], ['Hạn xử lý', '24 giờ', 'Theo quy trình tiếp nhận']],
    formSections: sections,
    details: [['Lưu nháp', 'Có'], ['Gửi duyệt', 'Tạo Notification cho cán bộ'], ['Validation', 'CCCD, ngày khai báo, cơ sở là bắt buộc'], ['Sau khi gửi', 'Không sửa trực tiếp, chỉ gửi bổ sung']],
    workflow: ['Nhập tờ khai', 'Lưu nháp hoặc kiểm tra dữ liệu', 'Gửi cơ quan Công an', 'Theo dõi trạng thái xử lý'],
    docs: ['Ảnh giấy tờ tùy thân', 'Tệp chứng minh giao dịch', 'Lịch sử gửi khai báo']
  };
}

function periodicReportConfig() {
  return {
    title: 'Báo cáo định kỳ',
    section: 'Cổng cơ sở kinh doanh',
    icon: 'calendar-check',
    description: 'Nộp báo cáo tháng/quý, lưu nháp, gửi duyệt, nhận yêu cầu bổ sung và theo dõi lịch sử.',
    action: 'Nộp báo cáo',
    entities: ['PeriodicReport', 'Business', 'Notification'],
    stats: [['Kỳ báo cáo', '06/2026', 'Báo cáo tháng'], ['Hạn nộp', '20/06', 'Còn 5 ngày'], ['Chỉ tiêu', '08', 'Phát sinh trong kỳ'], ['Trạng thái', 'Nháp', 'Chưa gửi']],
    formSections: [
      section('Thông tin kỳ báo cáo', 'calendar-check', [['Cơ sở *', 'Khách sạn Tràng An'], ['Kỳ báo cáo *', 'Tháng 06/2026'], ['Người lập *', 'Lê Văn D'], ['Hạn nộp', '20/06/2026']]),
      section('Số liệu phát sinh', 'chart-column-big', [['Lượt khách / giao dịch', '326'], ['Sự cố ANTT', '0'], ['Thay đổi nhân sự', '03'], ['Giấy phép cập nhật', '0']]),
      section('Kiến nghị và cam kết', 'file-signature', [['Nội dung', 'Cơ sở hoạt động ổn định, không phát sinh vụ việc mất ANTT trong kỳ.']], 'textarea')
    ],
    details: [['Báo cáo đúng hạn', '11/12 kỳ'], ['Kỳ bị yêu cầu bổ sung', '01'], ['Cán bộ tiếp nhận', 'Nguyễn Văn A'], ['Liên kết dashboard', 'Cập nhật sau khi được duyệt']],
    workflow: ['Hệ thống sinh kỳ báo cáo', 'Cơ sở nhập và lưu nháp', 'Gửi báo cáo', 'Cán bộ chấp nhận hoặc yêu cầu bổ sung'],
    docs: ['Mẫu báo cáo tháng', 'Tệp đính kèm nếu có', 'Lịch sử các kỳ trước']
  };
}

function declarationDetailConfig() {
  return {
    title: 'Chi tiết khai báo',
    section: 'Khai báo từ cơ sở',
    icon: 'file-search',
    description: 'Xem toàn bộ tờ khai, thông tin người gửi, tài liệu đính kèm, xử lý và phản hồi cho cơ sở.',
    action: 'Phê duyệt',
    entities: ['DeclarationStay', 'Business', 'Notification', 'ActivityLog'],
    stats: [['Mã khai báo', 'KB-2026-0188', 'Lưu trú'], ['Trạng thái', 'Chờ duyệt', 'Cán bộ chưa xử lý'], ['Tệp đính kèm', '03', 'CCCD và danh sách khách'], ['SLA', '22 giờ', 'Còn trong hạn']],
    formSections: [
      section('Nội dung khai báo', 'file-text', [['Cơ sở', 'Khách sạn Tràng An'], ['Loại khai báo', 'Lưu trú'], ['Số khách', '03'], ['Ngày gửi', '07:30 15/06/2026']]),
      section('Phản hồi xử lý', 'message-square-reply', [['Kết quả', 'Chờ phê duyệt'], ['Nội dung phản hồi', 'Kiểm tra CCCD và thông tin lưu trú trước khi duyệt.']], 'textarea')
    ],
    details: [['Người gửi', 'Lê Văn D'], ['Địa bàn', 'P. Đông Thành'], ['Cán bộ phụ trách', 'Nguyễn Văn A'], ['Đối tượng liên quan', '03 khách lưu trú']],
    workflow: ['Cơ sở gửi khai báo', 'Hệ thống tạo thông báo', 'Cán bộ kiểm tra tệp đính kèm', 'Duyệt hoặc yêu cầu bổ sung'],
    docs: ['Danh sách khách lưu trú.xlsx', 'Ảnh CCCD mặt trước', 'Ảnh CCCD mặt sau']
  };
}

function checklistConfig() {
  return {
    title: 'Quản lý mẫu checklist',
    section: 'Kiểm tra cơ sở',
    icon: 'list-checks',
    description: 'Thiết kế nhóm tiêu chí kiểm tra động theo loại hình, mức rủi ro, tần suất và trạng thái áp dụng.',
    action: 'Thêm tiêu chí',
    entities: ['InspectionCategory', 'BusinessType', 'ChecklistTemplate'],
    filters: filters(['Từ khóa', 'Loại hình', 'Nhóm nội dung', 'Mức rủi ro', 'Trạng thái']),
    tabs: ['Tất cả mẫu', 'Lưu trú', 'Cầm đồ', 'Karaoke', 'Ngừng áp dụng'],
    columns: ['Mã mẫu', 'Tên checklist', 'Loại hình', 'Nhóm nội dung', 'Số tiêu chí', 'Tần suất', 'Trạng thái', 'Cập nhật'],
    rows: [['CL-LT-01', 'Điều kiện cơ sở lưu trú', 'Lưu trú', 'Hồ sơ pháp lý/PCCC/Lưu trú', '32', '06 tháng', 'Đang hoạt động', '12/06/2026'], ['CL-CD-02', 'Kiểm tra cơ sở cầm đồ', 'Cầm đồ', 'Tài sản/nhân sự', '28', '03 tháng', 'Đang hoạt động', '11/06/2026'], ['CL-KR-03', 'An toàn karaoke', 'Karaoke', 'PCCC/Cơ sở vật chất', '35', '03 tháng', 'Đang xử lý', '09/06/2026']],
    details: [['Tiêu chí bắt buộc', '21'], ['Tiêu chí rủi ro cao', '08'], ['Được dùng trong kế hoạch', '14'], ['Không cho xóa', 'Nếu đã phát sinh biên bản']],
    workflow: ['Chọn loại hình', 'Cấu hình nhóm tiêu chí', 'Đặt mức bắt buộc/rủi ro', 'Kích hoạt để dùng trong kế hoạch'],
    docs: ['Căn cứ pháp lý checklist', 'Phiên bản mẫu', 'Lịch sử áp dụng']
  };
}

function procedureDetailConfig() {
  return {
    title: 'Chi tiết thủ tục',
    section: 'Thủ tục hành chính',
    icon: 'file-text',
    description: 'Công khai quy trình, hồ sơ cần chuẩn bị, lệ phí, thời hạn, căn cứ pháp lý và câu hỏi thường gặp.',
    action: 'Tải biểu mẫu',
    entities: ['Procedure', 'DocumentType', 'BusinessType'],
    stats: [['Mã thủ tục', 'ANTT-001', 'Cấp mới giấy CN ANTT'], ['Thời hạn', '15 ngày', 'Tính từ ngày nhận đủ hồ sơ'], ['Thành phần hồ sơ', '05', 'Biểu mẫu và giấy tờ bắt buộc'], ['Lệ phí', 'Theo quy định', 'Niêm yết tại bộ phận một cửa']],
    formSections: [
      section('Thông tin thủ tục', 'file-text', [['Tên thủ tục', 'Cấp mới giấy chứng nhận đủ điều kiện ANTT'], ['Đối tượng', 'Cơ sở kinh doanh có điều kiện'], ['Cơ quan tiếp nhận', 'Phòng PC06 Công an tỉnh Ninh Bình'], ['Thời hạn giải quyết', '15 ngày làm việc']]),
      section('Trình tự thực hiện', 'list-ordered', [['Bước 1', 'Chuẩn bị hồ sơ theo danh mục'], ['Bước 2', 'Nộp trực tuyến hoặc tại bộ phận một cửa'], ['Bước 3', 'Cán bộ kiểm tra, yêu cầu bổ sung nếu thiếu'], ['Bước 4', 'Nhận kết quả hoặc thông báo từ chối']]),
      section('Căn cứ pháp lý và FAQ', 'scale', [['Căn cứ pháp lý', 'Nghị định và văn bản hướng dẫn hiện hành'], ['Câu hỏi thường gặp', 'Có thể theo dõi trạng thái hồ sơ trong mục Quản lý hồ sơ']], 'textarea')
    ],
    details: [['File biểu mẫu', '03 tệp'], ['Hồ sơ cần chuẩn bị', '05 loại giấy tờ'], ['Kênh tiếp nhận', 'Trực tuyến / Một cửa'], ['In hướng dẫn', 'Có']],
    workflow: ['Tra cứu thủ tục', 'Tải biểu mẫu', 'Chuẩn bị hồ sơ', 'Nộp và theo dõi trạng thái'],
    docs: ['Đơn đề nghị cấp giấy chứng nhận', 'Danh mục giấy tờ bắt buộc', 'Mẫu cam kết ANTT']
  };
}

function notificationsConfig() {
  return {
    title: 'Trung tâm thông báo',
    section: 'Thông báo hệ thống',
    icon: 'bell-ring',
    description: 'Quản lý thông báo đã đọc/chưa đọc, lọc theo loại, ưu tiên và mở đúng đối tượng liên quan.',
    action: 'Tạo thông báo',
    entities: ['Notification', 'UserProfile', 'Business'],
    filters: filters(['Từ khóa', 'Loại thông báo', 'Người nhận', 'Ưu tiên', 'Đã đọc/chưa đọc']),
    tabs: ['Tất cả', 'Chưa đọc', 'Hồ sơ', 'Khai báo', 'Kiểm tra', 'Vi phạm'],
    columns: ['Tiêu đề', 'Loại', 'Người nhận', 'Đối tượng liên quan', 'Ưu tiên', 'Thời gian', 'Trạng thái'],
    rows: [['Hồ sơ được tiếp nhận', 'Hồ sơ', 'Chủ cơ sở', 'HS-2026-00124', 'Cao', '08:00 15/06/2026', 'Chưa đọc'], ['Nhắc nộp báo cáo tháng', 'Báo cáo', 'Khách sạn Tràng An', 'BC-06-2026', 'Trung bình', '09:00 14/06/2026', 'Đã đọc'], ['Lịch kiểm tra sắp tới', 'Kiểm tra', 'Karaoke Hoa Sen', 'KT-2026-0041', 'Cao', '16:30 13/06/2026', 'Chưa đọc']],
    details: [['Chưa đọc', '05'], ['Ưu tiên cao', '08'], ['Liên kết đối tượng', 'Hồ sơ, báo cáo, kiểm tra, vi phạm'], ['Đánh dấu tất cả', 'Có']],
    workflow: ['Hệ thống tạo thông báo', 'Gửi theo vai trò/đối tượng', 'Người dùng mở đối tượng liên quan', 'Đánh dấu đã đọc'],
    docs: ['Mẫu nội dung thông báo', 'Danh sách người nhận', 'Log gửi thông báo']
  };
}

function systemConfig() {
  return {
    title: 'Cấu hình hệ thống',
    section: 'Cấu hình hệ thống',
    icon: 'settings',
    description: 'Thiết lập thông tin đơn vị, logo, cảnh báo hết hạn, chu kỳ báo cáo/kiểm tra và phiên đăng nhập.',
    action: 'Lưu cấu hình',
    entities: ['SystemSetting', 'ActivityLog'],
    formSections: [
      section('Thông tin hệ thống', 'building-2', [['Tên hệ thống *', 'CSKD-ANTT Ninh Bình'], ['Đơn vị chủ quản *', 'Công an tỉnh Ninh Bình'], ['Logo', 'public/logocongan.png'], ['Ngôn ngữ', 'Tiếng Việt']]),
      section('Chu kỳ nghiệp vụ', 'calendar-clock', [['Cảnh báo giấy phép hết hạn', '30 ngày'], ['Chu kỳ báo cáo mặc định', 'Hàng tháng'], ['Chu kỳ kiểm tra định kỳ', '06 tháng'], ['Số ngày nhắc hồ sơ quá hạn', '03 ngày']]),
      section('Upload, thông báo và phiên', 'sliders-horizontal', [['Giới hạn upload', '20 MB'], ['Định dạng file', 'pdf, docx, xlsx, jpg, png'], ['Thời gian phiên', '120 phút'], ['Yêu cầu đăng nhập lại khi thao tác nhạy cảm', 'Có']])
    ],
    details: [['Nhóm setting', 'Thông tin, nghiệp vụ, upload, bản đồ, phiên'], ['Có thể sửa', 'Chỉ quản trị hệ thống'], ['Ghi log', 'Mọi thay đổi đều ghi ActivityLog'], ['Khôi phục mặc định', 'Có xác nhận']],
    workflow: ['Mở nhóm cấu hình', 'Cập nhật giá trị', 'Kiểm tra định dạng', 'Lưu và ghi nhật ký'],
    docs: ['Logo hiện tại', 'Chính sách upload', 'Cấu hình thông báo']
  };
}

function importConfig() {
  return {
    title: 'Quản lý import dữ liệu',
    section: 'Vận hành hệ thống',
    icon: 'file-up',
    description: 'Import Excel theo luồng chọn loại dữ liệu, tải mẫu, upload, kiểm tra lỗi, xác nhận và tải file lỗi.',
    action: 'Upload Excel',
    entities: ['DataImportJob', 'Business', 'BusinessPerson', 'Ward', 'DocumentType'],
    stats: [['File chờ xử lý', '03', 'Excel cơ sở và cán bộ'], ['Dòng hợp lệ', '1.248', 'Qua kiểm tra cấu trúc'], ['Dòng lỗi', '17', 'Có file lỗi để tải'], ['Import gần nhất', '14/06', 'Hoàn thành']],
    filters: filters(['Loại dữ liệu', 'Người tải', 'Trạng thái', 'Ngày tải']),
    columns: ['Tên file', 'Loại dữ liệu', 'Tổng dòng', 'Hợp lệ', 'Lỗi', 'Người tải', 'Trạng thái', 'Ngày tải'],
    rows: [['cskd_ninhbinh_062026.xlsx', 'Cơ sở kinh doanh', '850', '838', '12', 'Nguyễn Văn A', 'Chờ duyệt', '15/06/2026'], ['canbo_dia_ban.xlsx', 'Cán bộ', '124', '124', '0', 'Phạm Thị H', 'Đã hoàn thành', '14/06/2026'], ['giayphep_mau.xlsx', 'Giấy phép', '274', '269', '5', 'Trần Văn K', 'Cần bổ sung', '13/06/2026']],
    details: [['Bước hiện tại', 'Kiểm tra dữ liệu'], ['Loại import', 'Cơ sở, nhân sự, xã/phường, danh mục, giấy phép'], ['Không tạo trùng', 'Kiểm tra mã cơ sở/mã cán bộ'], ['Tải file lỗi', 'Có']],
    workflow: ['Chọn loại dữ liệu', 'Tải file mẫu', 'Upload Excel', 'Kiểm tra hợp lệ/lỗi', 'Xác nhận import', 'Tải file lỗi nếu có'],
    docs: ['Mẫu import cơ sở', 'File lỗi gần nhất', 'Lịch sử import']
  };
}

function seedConfig() {
  return {
    title: 'Seed Data Manager',
    section: 'Vận hành hệ thống',
    icon: 'database-zap',
    description: 'Sinh dữ liệu demo có kiểm soát, không tạo trùng, có tiến trình và cảnh báo xác nhận trước khi chạy.',
    action: 'Tạo dữ liệu demo',
    entities: ['Business', 'UserProfile', 'Declaration', 'InspectionPlan', 'Violation', 'Notification'],
    stats: [['Xã/phường', '30', 'Dữ liệu Ninh Bình'], ['Loại hình', '23', 'Ngành nghề có điều kiện'], ['Cơ sở', '150', 'Nhiều trạng thái/rủi ro'], ['Luồng demo', '04', 'End-to-end']],
    columns: ['Gói dữ liệu', 'Số lượng', 'Phụ thuộc', 'Trạng thái', 'Chống trùng', 'Ghi chú'],
    rows: [['Xã/phường và danh mục', '30 + 23', 'Province/Ward', 'Sẵn sàng', 'Theo mã', 'Nền tảng toàn hệ thống'], ['Cơ sở kinh doanh', '150', 'BusinessType/Ward', 'Sẵn sàng', 'Theo mã CSKD', 'Có giấy phép và tọa độ'], ['Kiểm tra và vi phạm', '80 + 36', 'Business/User', 'Sẵn sàng', 'Theo mã kế hoạch', 'Có timeline xử lý'], ['Khai báo và báo cáo', '420 + 72', 'Business', 'Sẵn sàng', 'Theo kỳ', 'Dữ liệu dashboard']],
    details: [['Cảnh báo xác nhận', 'Bắt buộc trước khi seed'], ['Tiến trình', 'Hiển thị từng nhóm dữ liệu'], ['Rollback', 'Không xóa dữ liệu thật'], ['Tài khoản mẫu', roleOptions.join(', ')]],
    workflow: ['Chọn gói seed', 'Xác nhận không trùng dữ liệu', 'Chạy tiến trình', 'Thông báo kết quả và link kiểm tra'],
    docs: ['Danh sách tài khoản mẫu', 'Kịch bản dữ liệu demo', 'Log seed gần nhất']
  };
}

function moduleCheckConfig() {
  return {
    title: 'Kiểm tra module',
    section: 'Vận hành hệ thống',
    icon: 'route',
    description: 'Rà soát route, quyền, entity, link hỏng, menu không có quyền và trạng thái loading/empty/error.',
    action: 'Chạy kiểm tra',
    entities: ['SystemSetting', 'Permission', 'ActivityLog'],
    filters: filters(['Module', 'Route', 'Quyền', 'Trạng thái']),
    columns: ['Module', 'Số màn', 'Route chính', 'Entity sử dụng', 'Quyền', 'Link', 'State', 'Trạng thái'],
    rows: [['Người dùng và phân quyền', '05', 'QuanLyTaiKhoan.html', 'UserProfile/Role', 'admin', 'OK', 'Đủ', 'Thành công'], ['Cổng cơ sở', '07', 'Dashboard.html', 'Business/Declaration', 'business', 'OK', 'Đủ', 'Thành công'], ['Kiểm tra/vi phạm', '02', 'QuanLyMauChecklist.html', 'Checklist/Violation', 'officer', 'OK', 'Đủ', 'Thành công'], ['Vận hành', '07', 'NhatKyHeThong.html', 'ActivityLog/Setting', 'admin', 'OK', 'Đủ', 'Thành công']],
    details: [['Route kiểm tra', '64'], ['Link hợp lệ', '64'], ['Màn có state', '24/24 màn mới'], ['Quyền mô phỏng', '06 vai trò']],
    workflow: ['Quét danh sách route', 'Kiểm tra menu và quyền', 'Kiểm tra state cơ bản', 'Xuất kết quả kiểm tra'],
    docs: ['Báo cáo link', 'Báo cáo quyền', 'Danh sách màn mới']
  };
}

function securityConfig() {
  return {
    title: 'Bảo mật phía giao diện',
    section: 'Vận hành hệ thống',
    icon: 'lock-keyhole',
    description: 'Mô phỏng ẩn menu theo role, chặn URL trực tiếp, mask dữ liệu nhạy cảm và xác nhận thao tác nguy hiểm.',
    action: 'Áp dụng vai trò',
    entities: ['RolePermission', 'UserProfile', 'ActivityLog'],
    stats: [['Vai trò', '06', 'Có menu riêng'], ['Menu bị ẩn', '18', 'Theo quyền'], ['Dữ liệu mask', 'CCCD', 'Không hiện đầy đủ trên bảng'], ['Phiên', '120 phút', 'Hết hạn yêu cầu đăng nhập lại']],
    columns: ['Kiểm soát', 'Mô tả', 'Vai trò áp dụng', 'Trạng thái', 'Ghi log', 'Ghi chú'],
    rows: [['Ẩn menu', 'Ẩn module không có quyền', 'Tất cả', 'Đang hoạt động', 'Có', 'Dựa trên RolePermission'], ['Chặn URL', 'Hiện màn không có quyền khi truy cập trực tiếp', 'Chủ cơ sở', 'Đang hoạt động', 'Có', 'Mô phỏng trên UI'], ['Mask CCCD', 'Chỉ hiển thị 4 số cuối', 'Danh sách', 'Đang hoạt động', 'Không', 'Chi tiết mới xem đủ theo quyền'], ['Xác nhận nguy hiểm', 'Khóa tài khoản, seed data, đổi quyền admin', 'Quản trị', 'Đang hoạt động', 'Có', 'Modal bắt buộc']],
    details: [['Không lưu nhạy cảm', 'Không đưa CCCD đầy đủ vào localStorage'], ['Tự đăng xuất', 'Theo cấu hình phiên'], ['Nút nhạy cảm', 'Yêu cầu xác nhận'], ['Audit', 'Ghi ActivityLog']],
    workflow: ['Chọn vai trò mô phỏng', 'Áp dụng menu và quyền nút', 'Mask dữ liệu nhạy cảm', 'Ghi log khi thao tác nhạy cảm'],
    docs: ['Bảng quyền vai trò', 'Danh sách trường nhạy cảm', 'Log bảo mật']
  };
}

function guideConfig() {
  return {
    title: 'Hướng dẫn demo hệ thống',
    section: 'Hoàn thiện demo',
    icon: 'presentation',
    description: 'Kịch bản trình diễn tài khoản mẫu và các luồng end-to-end chính của hệ thống.',
    action: 'Bắt đầu demo',
    entities: ['UserProfile', 'Business', 'Declaration', 'InspectionPlan', 'Violation', 'Notification'],
    stats: [['Tài khoản mẫu', '06', 'Theo từng vai trò'], ['Luồng demo', '04', 'Hồ sơ, kiểm tra, báo cáo, cảnh báo'], ['Dữ liệu cơ sở', '150', 'Ninh Bình'], ['Thời lượng', '35 phút', 'Kịch bản trình chiếu']],
    columns: ['Luồng', 'Tài khoản bắt đầu', 'Màn hình chính', 'Dữ liệu mẫu', 'Kết quả cần thấy', 'Thời lượng'],
    rows: [['Đăng ký và phê duyệt cơ sở', 'chucoso.trangan', 'Hồ sơ cơ sở của tôi', 'Khách sạn Tràng An', 'Cơ sở xuất hiện trên bản đồ', '10 phút'], ['Kiểm tra và vi phạm', 'nva.pc06', 'Kiểm tra cơ sở', 'Karaoke Hoa Sen', 'Vi phạm có yêu cầu khắc phục', '10 phút'], ['Báo cáo định kỳ', 'chucoso.trangan', 'Báo cáo định kỳ', 'Kỳ 06/2026', 'Dashboard cập nhật số liệu', '7 phút'], ['Cảnh báo giấy phép', 'tvk.xa', 'Trung tâm thông báo', 'NB-ANTT-0256', 'Cảnh báo được giải quyết', '8 phút']],
    details: [['Admin', 'admin.pc06 / 123456'], ['Cán bộ PC06', 'nva.pc06 / 123456'], ['Công an xã', 'tvk.xa / 123456'], ['Chủ cơ sở', 'chucoso.trangan / 123456']],
    workflow: ['Đăng nhập theo vai trò', 'Mở màn nghiệp vụ', 'Thực hiện thao tác chính', 'Kiểm tra thông báo/log/dashboard'],
    docs: ['Tài khoản mẫu', 'Luồng 1: hồ sơ', 'Luồng 2: kiểm tra và vi phạm', 'Luồng 3: báo cáo', 'Luồng 4: cảnh báo']
  };
}

function section(title, icon, fields, mode = 'grid') {
  return { title, icon, fields, mode };
}

function filters(labels) {
  return labels.map((label) => {
    const options = /vai trò/i.test(label) ? roleOptions 
      : /xã|phường|địa bàn/i.test(label) ? wardOptions 
      : /trạng thái|kết quả/i.test(label) ? statusOptions 
      : /cảnh báo/i.test(label) ? ['Bình thường', 'Trung bình', 'Cao', 'Nghi vấn']
      : null;
    return { label, options };
  });
}

const currentModule = document.querySelector('#moduleApp')?.dataset.module || 'accounts';
const config = moduleConfigs[currentModule] || moduleConfigs.accounts;
const noSidePanelModules = new Set(['accounts', 'procedure-admin', 'notifications-center', 'activity-log', 'declaration-admin', 'my-business', 'business-dashboard', 'system-config']);
const modulesWithoutStats = new Set(['declaration-admin', 'procedure-admin', 'notifications-center', 'accounts', 'activity-log']);

const state = {
  query: '',
  activeTab: 0,
  page: 1,
  pageSize: 10,
  sortIndex: null,
  sortDir: 1,
  selectedDeclarationId: 'KB-2026-0188'
};

const esc = (value) => String(value ?? '').replace(/[&<>"']/g, (char) => ({
  '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;'
}[char]));

const normalize = (value) => String(value ?? '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');

function statusClass(value) {
  const text = normalize(value);
  if (/qua han|khoa|bo sung|canh bao|loi|that bai|cao/.test(text)) return 'st-red';
  if (/cho|nhap|dang xu ly|dang soan/.test(text)) return 'st-orange';
  if (/duyet|hoat dong|con hieu luc|cong khai|thanh cong|dung han|hoan thanh|san sang/.test(text)) return 'st-green';
  return 'st-blue';
}

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
        <i data-lucide="search" class="h-4 w-4"></i>
        <input id="globalSearchInput" type="search" placeholder="Tìm hồ sơ, cơ sở, khai báo..." />
      </label>

      <div class="topbar-actions flex h-full items-center gap-4">
        <div class="topbar-menu-wrap">
          <button id="notificationToggle" class="topbar-icon-btn relative" type="button" aria-label="Thông báo" aria-expanded="false">
            <i data-lucide="bell" class="h-[26px] w-[26px]"></i>
            <span id="notificationBadge" class="absolute right-0 top-1 grid h-5 min-w-5 place-items-center rounded-full bg-[#ff1e1e] px-1 text-[11px] font-semibold leading-none shadow">5</span>
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
            <div class="grid h-[46px] w-[46px] place-items-center rounded-full bg-white text-[#cf0000] shadow-sm"><i data-lucide="user-round" class="h-7 w-7 fill-[#cf0000]/15"></i></div>
            <div class="hidden text-left sm:block"><div class="text-[15px] font-semibold leading-5">Nguyễn Văn A</div><div class="text-[13px] font-medium text-white/92">Phòng CS QLHC về TTXH</div></div>
            <i data-lucide="chevron-down" class="user-chevron h-5 w-5 text-white"></i>
          </button>
          <div id="userMenu" class="topbar-dropdown user-dropdown" hidden>
            <div class="user-card"><div class="grid h-11 w-11 place-items-center rounded-full bg-[#fff2f2] text-[#cf0000]"><i data-lucide="user-round" class="h-6 w-6"></i></div><div><div class="user-name">Nguyễn Văn A</div><div class="user-role">Phòng CS QLHC về TTXH</div></div></div>
            <a class="dropdown-action" href="HoSoCaNhan.html"><i data-lucide="id-card" class="h-4 w-4"></i>Hồ sơ cá nhân</a>
            <button class="dropdown-action" type="button" data-open-modal><i data-lucide="key-round" class="h-4 w-4"></i>Đổi mật khẩu</button>
            <a class="dropdown-action danger" href="DangNhap.html"><i data-lucide="log-out" class="h-4 w-4"></i>Đăng xuất</a>
          </div>
        </div>
      </div>
    </header>`;
}

function navItem(href, icon, label, keys = []) {
  const active = keys.includes(currentModule) ? ' active' : '';
  return `<a href="${href}" class="nav-item${active}"><i data-lucide="${icon}"></i><span class="nav-copy">${label}</span></a>`;
}

function sidebarTemplate() {
  return `
    <aside class="sidebar fixed bottom-0 left-0 top-[80px] z-20 px-2 text-white">
      <div class="sidebar-scroll">
        <div class="nav-section mt-0">Tổng quan</div>
        ${navItem('Dashboard.html', 'layout-dashboard', 'Dashboard', ['business-dashboard', 'dashboard'])}
        <div class="nav-section">Giám sát địa bàn</div>
        ${navItem('BanDoSoGis.html', 'map-pin', 'Bản đồ số GIS')}
        <div class="nav-section">Nghiệp vụ</div>
        ${navItem('QuanLyHoSo.html', 'file-text', 'Quản lý hồ sơ')}
        ${navItem('CoSoDuLieuCSKD.html', 'database', 'Cơ sở dữ liệu CSKD-ANTT')}
        ${navItem('QuanLyKhaiBao.html', 'inbox', 'Khai báo từ cơ sở', ['declaration-admin', 'stay-declaration', 'asset-declaration', 'periodic-report'])}
        ${navItem('KiemTraCoSo.html', 'clipboard-check', 'Kiểm tra cơ sở', ['checklist-template'])}
        ${navItem('XuLyViPham.html', 'octagon-alert', 'Vi phạm / Xử lý vi phạm')}
        ${navItem('QuanLyPhanAnh.html', 'message-square-warning', 'Phản ánh kiến nghị')}
        <div class="nav-section">Cổng cơ sở</div>
        ${navItem('CongCSKD-HoSoCuaToi.html', 'store', 'Hồ sơ cơ sở của tôi', ['my-business'])}
        <div class="nav-section">Báo cáo</div>
        ${navItem('BaoCao-ThongKe.html', 'chart-column-big', 'Báo cáo - thống kê')}
        <div class="nav-section">Thủ tục & thông báo</div>
        ${navItem('ThuTuc-QuanTri.html', 'clipboard-list', 'Quản trị thủ tục', ['procedure-admin', 'procedure-detail'])}
        ${navItem('TrungTamThongBao.html', 'bell-ring', 'Trung tâm thông báo', ['notifications-center'])}
        <div class="nav-section">Cấu hình</div>
        ${navItem('DanhMuc.html', 'folder', 'Danh mục dùng chung')}
        ${navItem('QuanLyTaiKhoan.html', 'users', 'Người dùng & phân quyền', ['accounts', 'permissions', 'area-assignment', 'profile'])}
        ${navItem('QuanLyCanBo.html', 'users-round', 'Quản lý cán bộ')}
        ${navItem('NhatKyHeThong.html', 'history', 'Nhật ký hệ thống', ['activity-log'])}
        ${navItem('CauHinhHeThong.html', 'settings', 'Cấu hình hệ thống', ['system-config'])}
      </div>
      <div class="sidebar-action"><button id="sidebarToggle" class="sidebar-toggle" type="button" aria-label="Thu gọn menu" aria-expanded="true"><i data-lucide="chevron-left" class="toggle-icon"></i><span class="collapse-label">Thu gọn</span></button></div>
    </aside>`;
}

function entityStrip() {
  return `<div class="entity-strip">${(config.entities || []).map((name) => `<span class="entity-chip"><i data-lucide="database"></i>${esc(name)}</span>`).join('')}</div>`;
}

function statsTemplate(stats = commonStats) {
  return `<section class="module-stats">${stats.map((item, index) => `
    <div class="stat-card ${index === 3 ? 'is-alert' : ''}">
      <div class="stat-label">${esc(item[0])}</div>
      <div class="stat-value">${esc(item[1])}</div>
      <div class="stat-note">${esc(item[2])}</div>
    </div>`).join('')}</section>`;
}

function filtersTemplate() {
  const filtersConfig = config.filters || filters(['Từ khóa', 'Trạng thái', 'Địa bàn', 'Ngày tạo']);
  return `<section class="filter-panel">
    <div class="grid grid-cols-12 gap-x-7 gap-y-4">
      ${filtersConfig.map((filter, index) => {
    const span = index === 0 ? 'col-span-12 xl:col-span-4' : 'col-span-12 md:col-span-4 xl:col-span-2';
    if (filter.options) {
      return `<label class="${span}"><span class="form-label">${esc(filter.label)}</span><span class="field-wrap block"><select class="field appearance-none font-medium" data-filter><option>-- Tất cả --</option>${filter.options.map((option) => `<option>${esc(option)}</option>`).join('')}</select><i data-lucide="chevron-down" class="field-icon h-4 w-4"></i></span></label>`;
    }
    const type = /ngày|thời gian|khoảng/i.test(filter.label) ? 'date' : 'text';
    return `<label class="${span}"><span class="form-label">${esc(filter.label)}</span><span class="field-wrap block"><input class="field" type="${type}" ${index === 0 ? 'id="keywordInput"' : 'data-filter'} placeholder="Nhập ${esc(filter.label.toLowerCase())}..." /><i data-lucide="${index === 0 ? 'search' : type === 'date' ? 'calendar-days' : 'filter'}" class="field-icon"></i></span></label>`;
  }).join('')}
    </div>
    <div class="mt-4 flex flex-wrap justify-end gap-3">
      <button class="btn btn-secondary" type="button" data-reset><i data-lucide="rotate-ccw"></i>Đặt lại</button>
      <button class="btn btn-primary" type="button" data-search><i data-lucide="search"></i>Tìm kiếm</button>
    </div>
  </section>`;
}

function renderTabLabel(tab, index) {
  if (currentModule === 'declaration-admin') {
    let count = 0;
    if (tab === 'Khai báo lưu trú') count = 86;
    else if (tab === 'Khai báo tài sản') count = 40;
    else if (tab === 'Báo cáo định kỳ') count = 25;
    else if (tab === 'Nộp muộn') count = 5;
    else if (tab === 'Có cảnh báo') count = 3;
    else if (tab === 'Chờ xử lý') count = 18;

    if (count > 0) {
      let badgeClass = 'bg-slate-100 text-slate-700';
      if (tab === 'Có cảnh báo' || tab === 'Nộp muộn') {
        badgeClass = 'bg-[#fff2f2] text-[#e53e3e] border border-[#fed7d7]';
      } else if (tab === 'Chờ xử lý') {
        badgeClass = 'bg-[#fffaf0] text-[#dd6b20] border border-[#fbd38d]';
      }
      return `${esc(tab)} <span class="ml-1.5 inline-flex items-center justify-center px-1.5 py-0.5 text-[11px] font-bold rounded-full ${badgeClass}">${count}</span>`;
    }
  }
  return esc(tab);
}

function tableTemplate() {
  if (!config.columns || !config.rows) return '';
  const tabs = config.tabs || ['Tất cả', 'Đang xử lý', 'Đã hoàn thành'];
  const bulkBtn = currentModule === 'declaration-admin' ? '' : '<button class="btn btn-secondary" type="button" data-bulk><i data-lucide="check-square"></i>Chọn nhiều</button>';
  const panelHead = currentModule === 'declaration-admin' ? '' : `
      <div class="panel-head">
        <div></div>
        <div class="flex gap-2">${bulkBtn}</div>
      </div>`;
  return `
    ${filtersTemplate()}
    <div class="module-tabs">${tabs.map((tab, index) => `<button class="tab ${index === state.activeTab ? 'active' : ''}" type="button" data-tab="${index}">${renderTabLabel(tab, index)}</button>`).join('')}</div>
    <section class="content-panel overflow-hidden">
      ${panelHead}
      <div class="table-wrap"><table class="data-table module-table w-full">
        <thead><tr><th class="w-[48px]"><input type="checkbox" aria-label="Chọn tất cả" /></th><th class="w-[56px]">STT</th>${config.columns.map((col, index) => `<th><button type="button" data-sort="${index}" class="font-semibold">${esc(col)}</button></th>`).join('')}<th class="w-[116px]">Thao tác</th></tr></thead>
        <tbody id="moduleTableBody"></tbody>
      </table></div>
    </section>
    <section id="table-footer-component" class="table-footer-component mt-5 flex flex-col gap-4 text-[14px] text-[#5f6877] md:flex-row md:items-center md:justify-between">
      <div class="flex flex-wrap items-center gap-3">
        <div id="resultSummary"></div>
        <select id="pageSizeSelect" class="field h-10 w-[120px] appearance-none pr-8 text-left font-medium">
          <option value="10">10 / trang</option>
          <option value="20">20 / trang</option>
          <option value="50">50 / trang</option>
        </select>
      </div>
      <div id="pagination" class="flex flex-wrap items-center gap-2"></div>
      <div class="flex items-center gap-2">
        <a href="ImportDuLieu.html" class="inline-flex h-10 items-center gap-2 rounded-md border border-[#d9dfe8] bg-white px-4 text-[14px] font-bold text-[#202833] shadow-sm transition hover:border-[#c50000] hover:text-[#c50000] hover:bg-[#fffafa]">
          <i data-lucide="file-up" class="h-4 w-4"></i>Nhập dữ liệu
        </a>
        <button class="inline-flex h-10 items-center gap-2 rounded-md border border-[#d9dfe8] bg-white px-4 text-[14px] font-bold text-[#202833] shadow-sm transition hover:border-[#c50000] hover:text-[#c50000] hover:bg-[#fffafa]" type="button" data-toast="Đã tạo file Excel kết xuất dữ liệu.">
          <i data-lucide="file-spreadsheet" class="h-4 w-4"></i>Xuất dữ liệu
        </button>
      </div>
    </section>`;
}

function renderRows() {
  const body = document.querySelector('#moduleTableBody');
  if (!body || !config.rows) return;
  let rows = config.rows;
  if (currentModule === 'declaration-admin') {
    const tabName = config.tabs[state.activeTab];
    if (tabName === 'Khai báo lưu trú') {
      rows = rows.filter(row => row[1] === 'Lưu trú');
    } else if (tabName === 'Khai báo tài sản') {
      rows = rows.filter(row => row[1] === 'Tài sản');
    } else if (tabName === 'Báo cáo định kỳ') {
      rows = rows.filter(row => row[1] === 'Báo cáo định kỳ');
    } else if (tabName === 'Nộp muộn') {
      rows = rows.filter(row => normalize(row[6]).includes('muon') || normalize(row[4]).includes('muon'));
    } else if (tabName === 'Có cảnh báo') {
      rows = rows.filter(row => normalize(row[6]).includes('canh bao') || normalize(row[4]).includes('canh bao'));
    } else if (tabName === 'Chờ xử lý') {
      rows = rows.filter(row => normalize(row[6]).includes('cho duyet') || normalize(row[6]).includes('dang xu ly') || normalize(row[6]).includes('cho xu ly'));
    }
  }
  let filteredRows = rows.filter((row) => !state.query || normalize(row.join(' ')).includes(normalize(state.query)));
  if (state.sortIndex !== null) {
    filteredRows = [...filteredRows].sort((a, b) => String(a[state.sortIndex]).localeCompare(String(b[state.sortIndex]), 'vi') * state.sortDir);
  }
  const total = filteredRows.length;
  const start = (state.page - 1) * state.pageSize;
  const visibleRows = filteredRows.slice(start, start + state.pageSize);
  if (!visibleRows.length) {
    body.innerHTML = `<tr><td class="empty-state" colspan="${config.columns.length + 3}">Không có dữ liệu phù hợp. Hãy đổi bộ lọc hoặc tạo bản ghi mới.</td></tr>`;
  } else {
    body.innerHTML = visibleRows.map((row, index) => `<tr>
      <td class="text-center"><input type="checkbox" aria-label="Chọn dòng ${start + index + 1}" /></td>
      <td class="text-center">${start + index + 1}</td>
      ${row.map((cell, cellIndex) => `<td class="${cellIndex === 0 ? 'font-semibold text-[#ff0000]' : 'text-center'}">${cellIndex >= row.length - 3 || /trạng thái|kết quả|mức độ/i.test(config.columns[cellIndex]) ? `<span class="status ${statusClass(cell)}">${esc(cell)}</span>` : esc(cell)}</td>`).join('')}
      <td class="text-center"><div class="flex justify-center gap-2"><button class="grid h-9 w-9 place-items-center rounded-md border border-[#dfe5ed] bg-white shadow-sm" type="button" data-open-modal aria-label="Xem chi tiết"><i data-lucide="eye" class="h-4 w-4"></i></button><button class="grid h-9 w-9 place-items-center rounded-md border border-[#dfe5ed] bg-white shadow-sm" type="button" data-toast="Đã mô phỏng thao tác xử lý" aria-label="Xử lý"><i data-lucide="more-horizontal" class="h-4 w-4"></i></button></div></td>
    </tr>`).join('');
  }
  const summary = document.querySelector('#resultSummary');
  if (summary) summary.textContent = `Hiển thị ${total ? start + 1 : 0} - ${Math.min(start + state.pageSize, total)} trong tổng số ${total} bản ghi`;
  renderPagination(total);
  lucide.createIcons();
}

function renderPagination(total) {
  const pagination = document.querySelector('#pagination');
  if (!pagination) return;
  const totalPages = Math.max(1, Math.ceil(total / state.pageSize));
  state.page = Math.min(state.page, totalPages);

  const pages = [];
  for (let page = 1; page <= totalPages; page += 1) {
    if (page === 1 || page === totalPages || Math.abs(page - state.page) <= 1) {
      pages.push(page);
    } else if (pages[pages.length - 1] !== '...') {
      pages.push('...');
    }
  }

  pagination.innerHTML = `
    <button class="pager-btn" type="button" data-page="${state.page - 1}" ${state.page === 1 ? 'disabled' : ''}><i data-lucide="chevron-left" class="h-5 w-5"></i></button>
    ${pages.map((page) => page === '...'
      ? '<span class="pager-btn wide">...</span>'
      : `<button class="pager-btn${page === state.page ? ' active' : ''}" type="button" data-page="${page}">${page}</button>`
    ).join('')}
    <button class="pager-btn" type="button" data-page="${state.page + 1}" ${state.page === totalPages ? 'disabled' : ''}><i data-lucide="chevron-right" class="h-5 w-5"></i></button>
  `;
}

function formTemplate() {
  if (!config.formSections) return '';
  return `<section class="content-panel"><div class="panel-head"><div><h2>Thông tin chi tiết</h2><div class="panel-subtitle">Các trường có dấu * là bắt buộc, lỗi hiển thị ngay dưới trường.</div></div><span class="status st-blue">Form nghiệp vụ</span></div><div class="panel-body">
    ${config.formSections.map((sec) => `<div class="form-section">
      <div class="form-section-title"><i data-lucide="${esc(sec.icon)}" class="h-4 w-4 text-[#c50000]"></i>${esc(sec.title)}</div>
      <div class="${sec.mode === 'textarea' ? '' : 'form-row'}">${sec.fields.map((field) => fieldTemplate(field, sec.mode)).join('')}</div>
    </div>`).join('')}
    <div class="mt-4 flex flex-wrap justify-end gap-3"><button class="btn btn-secondary" type="button" data-toast="Đã lưu nháp"><i data-lucide="save"></i>Lưu nháp</button><button class="btn btn-primary" type="button" data-open-modal><i data-lucide="${esc(config.icon)}"></i>${esc(config.action)}</button></div>
  </div></section>`;
}

function fieldTemplate(field, mode) {
  const label = field[0];
  const value = field[1];
  const isRequired = label.includes('*');
  const cleanLabel = label.replace('*', '').trim();
  if (mode === 'textarea' || value.length > 80) {
    return `<label class="block"><span class="form-label">${esc(cleanLabel)} ${isRequired ? '<b class="required">*</b>' : ''}</span><textarea class="field textarea-field">${esc(value)}</textarea>${isRequired ? '<div class="field-error">Trường này bắt buộc khi gửi duyệt.</div>' : ''}</label>`;
  }
  return `<label><span class="form-label">${esc(cleanLabel)} ${isRequired ? '<b class="required">*</b>' : ''}</span><input class="field" value="${esc(value)}" />${isRequired ? '<div class="field-error">Trường này bắt buộc khi gửi duyệt.</div>' : ''}</label>`;
}

function permissionTemplate() {
  if (config.variant !== 'permission') return '';
  const modules = ['Hồ sơ CSKD', 'Khai báo từ cơ sở', 'Kiểm tra cơ sở', 'Vi phạm', 'Báo cáo', 'Danh mục', 'Người dùng'];
  const actions = ['Xem', 'Thêm', 'Sửa', 'Xóa mềm', 'Duyệt', 'Xuất dữ liệu', 'Quản trị'];
  return `<section class="content-panel"><div class="panel-head"><div><h2>Ma trận quyền</h2><div class="panel-subtitle">Chọn tất cả theo hàng/cột, cảnh báo khi bật quyền quản trị.</div></div><select class="field h-10 w-[220px]">${roleOptions.map((role) => `<option>${esc(role)}</option>`).join('')}</select></div><div class="panel-body"><div class="permission-grid"><table><thead><tr><th>Module / chức năng</th>${actions.map((action) => `<th>${esc(action)}</th>`).join('')}</tr></thead><tbody>${modules.map((name, rowIndex) => `<tr><td><b>${esc(name)}</b></td>${actions.map((_, colIndex) => `<td><button class="check-cell ${rowIndex + colIndex > 8 ? 'off' : ''}" type="button" data-toggle-check><i data-lucide="${rowIndex + colIndex > 8 ? 'minus' : 'check'}" class="h-4 w-4"></i></button></td>`).join('')}</tr>`).join('')}</tbody></table></div></div></section>`;
}

function sidePanelsTemplate() {
  return `<div class="module-side-stack">
    ${detailPanel()}
    ${workflowPanel()}
    ${docsPanel()}
    ${statePanel()}
  </div>`;
}

function detailPanel() {
  return `<section class="content-panel"><div class="panel-head"><div><h2>Thông tin liên quan</h2><div class="panel-subtitle">Tóm tắt theo plan nghiệp vụ.</div></div></div><div class="panel-body detail-list">${(config.details || []).map((item) => `<div class="detail-row"><span class="detail-label">${esc(item[0])}</span><span class="detail-value">${esc(item[1])}</span></div>`).join('')}</div></section>`;
}

function workflowPanel() {
  return `<section class="content-panel"><div class="panel-head"><div><h2>Luồng xử lý</h2><div class="panel-subtitle">Các bước chính khi thao tác.</div></div></div><div class="panel-body wizard-steps">${(config.workflow || []).map((item, index) => `<div class="wizard-step"><span class="step-index">${index + 1}</span><div><div class="mini-title">${esc(item)}</div><div class="mini-text">${index === 0 ? 'Bắt đầu' : index === (config.workflow || []).length - 1 ? 'Hoàn tất' : 'Đang xử lý'} - ghi ActivityLog khi phát sinh thao tác.</div></div></div>`).join('')}</div></section>`;
}

function docsPanel() {
  return `<section class="content-panel"><div class="panel-head"><div><h2>Tài liệu / đính kèm</h2><div class="panel-subtitle">Tệp liên quan theo nghiệp vụ.</div></div></div><div class="panel-body doc-list">${(config.docs || []).map((doc) => `<div class="doc-item"><span><i data-lucide="paperclip" class="mr-2 inline h-4 w-4 text-[#c50000]"></i>${esc(doc)}</span><button class="text-[#c50000]" type="button" data-toast="Đã mô phỏng mở tài liệu">Mở</button></div>`).join('')}<div class="upload-zone"><div><i data-lucide="upload-cloud"></i><div class="mini-title">Kéo thả hoặc chọn tệp đính kèm</div><div class="mini-text">Hỗ trợ pdf, docx, xlsx, jpg, png. Giới hạn theo cấu hình hệ thống.</div></div></div></div></section>`;
}

function statePanel() {
  return `<section class="content-panel"><div class="panel-head"><div><h2>Trạng thái màn hình</h2><div class="panel-subtitle">Áp dụng cho loading, empty và error.</div></div></div><div class="panel-body state-rail">
    <div class="state-box"><strong><i data-lucide="loader-circle"></i>Loading</strong><p>Hiển thị skeleton khi đang tải danh sách hoặc chi tiết.</p></div>
    <div class="state-box"><strong><i data-lucide="inbox"></i>Empty</strong><p>Hướng dẫn tạo mới hoặc đổi bộ lọc khi không có dữ liệu.</p></div>
    <div class="state-box"><strong><i data-lucide="triangle-alert"></i>Error</strong><p>Thông báo lỗi cụ thể và cho phép thử lại thao tác.</p></div>
  </div></section>`;
}

function contentTemplate() {
  const showStats = config.stats && !modulesWithoutStats.has(currentModule);
  const mainContent = [showStats ? statsTemplate(config.stats) : '', tableTemplate(), formTemplate(), permissionTemplate()].filter(Boolean).join('');
  const pageBody = noSidePanelModules.has(currentModule)
    ? `<div class="module-main-stack">${mainContent}</div>`
    : `<div class="module-layout"><div class="module-main-stack">${mainContent}</div>${sidePanelsTemplate()}</div>`;

  return `
    <main class="content min-h-screen pt-[80px]">
      <div class="module-page px-6 pb-8 pt-6 lg:px-7">
        <section class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-5">
          <div class="flex items-center gap-2 text-[13px] font-medium text-[#6b7280]">
            <i data-lucide="house" class="h-4 w-4 text-[#9098a5]"></i>
            <span>Trang chủ</span>
            <i data-lucide="chevron-right" class="h-4 w-4 text-[#9aa3af]"></i>
            <span>${esc(config.section)}</span>
          </div>
          <div class="flex flex-wrap gap-3">
            <button class="btn btn-primary" type="button" data-open-modal><i data-lucide="${esc(config.icon)}"></i>${esc(config.action)}</button>
          </div>
        </section>
        ${pageBody}
      </div>
    </main>`;
}

function modalBodyTemplate() {
  if (currentModule === 'accounts') {
    const accountConfig = moduleConfigs['account-form'];
    return `<div class="form-section"><div class="form-section-title"><i data-lucide="user-plus" class="h-4 w-4 text-[#c50000]"></i>Thêm / sửa tài khoản</div>
      <div class="panel-subtitle mb-3">Màn này được refactor thành modal trong danh sách tài khoản, không còn route HTML riêng.</div>
    </div>${accountConfig.formSections.map((sec) => `<div class="form-section"><div class="form-section-title"><i data-lucide="${esc(sec.icon)}" class="h-4 w-4 text-[#c50000]"></i>${esc(sec.title)}</div><div class="${sec.mode === 'textarea' ? '' : 'form-row'}">${sec.fields.map((field) => fieldTemplate(field, sec.mode)).join('')}</div></div>`).join('')}`;
  }

  if (currentModule === 'declaration-admin') {
    const selectedId = state.selectedDeclarationId || 'KB-2026-0188';
    const row = declarationRows.find(r => r[0] === selectedId) || declarationRows[0];
    const code = row[0];
    const type = row[1];
    const businessName = row[2];
    const ward = row[3];
    const summary = row[4];
    const date = row[5];
    const status = row[6];
    const officer = row[7];

    let detailFieldsHTML = '';
    let crossCheckHTML = '';
    let filesHTML = '';
    let historyHTML = '';

    if (type === 'Lưu trú') {
      detailFieldsHTML = `
        <div class="grid grid-cols-2 gap-4">
          <div>
            <span class="text-xs text-slate-500 font-bold block">LOẠI KHAI BÁO</span>
            <span class="text-sm font-semibold text-slate-800">Khai báo lưu trú</span>
          </div>
          <div>
            <span class="text-xs text-slate-500 font-bold block">SỐ LƯỢNG KHÁCH</span>
            <span class="text-sm font-semibold text-slate-800">03 khách</span>
          </div>
          <div class="col-span-2">
            <span class="text-xs text-slate-500 font-bold block mb-1">DANH SÁCH KHÁCH LƯU TRÚ</span>
            <div class="border border-slate-200 rounded-md overflow-hidden text-xs">
              <table class="w-full text-left border-collapse">
                <thead>
                  <tr class="bg-slate-50 border-b border-slate-200 text-slate-600 font-semibold">
                    <th class="p-2">Họ và tên</th>
                    <th class="p-2">CCCD/Hộ chiếu</th>
                    <th class="p-2">Phòng</th>
                    <th class="p-2">Thời gian</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-slate-100 text-slate-700">
                  <tr>
                    <td class="p-2 font-medium">Nguyễn Minh Quân</td>
                    <td class="p-2">035092012345</td>
                    <td class="p-2">305</td>
                    <td class="p-2">15/06 - 16/06</td>
                  </tr>
                  <tr>
                    <td class="p-2 font-medium">Phạm Thanh Hải</td>
                    <td class="p-2">037095001234</td>
                    <td class="p-2">305</td>
                    <td class="p-2">15/06 - 16/06</td>
                  </tr>
                  <tr>
                    <td class="p-2 font-medium">Vũ Thị Mai</td>
                    <td class="p-2">038096005678</td>
                    <td class="p-2">306</td>
                    <td class="p-2">15/06 - 17/06</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      `;

      filesHTML = `
        <div class="grid grid-cols-1 md:grid-cols-2 gap-2 mt-2">
          <div class="flex items-center justify-between p-2.5 border border-slate-200 rounded-lg bg-slate-50 hover:bg-slate-100 transition cursor-pointer" type="button" data-toast="Đang tải tệp danh_sach_khach.xlsx...">
            <span class="flex items-center gap-2 text-xs font-semibold text-slate-700">
              <i data-lucide="file-spreadsheet" class="w-4 h-4 text-emerald-600"></i> danh_sach_khach.xlsx
            </span>
            <span class="text-xs font-bold text-[#c50000]">Tải</span>
          </div>
          <div class="flex items-center justify-between p-2.5 border border-slate-200 rounded-lg bg-slate-50 hover:bg-slate-100 transition cursor-pointer" type="button" data-toast="Đang xem ảnh CCCD...">
            <span class="flex items-center gap-2 text-xs font-semibold text-slate-700">
              <i data-lucide="image" class="w-4 h-4 text-blue-600"></i> anh_cccd_nguyenminhquan.jpg
            </span>
            <span class="text-xs font-bold text-[#c50000]">Xem</span>
          </div>
        </div>
      `;

      let alertBadge = '<span class="px-2 py-0.5 text-xs font-semibold rounded bg-green-100 text-green-800 border border-green-200">Đã khớp thông tin</span>';
      let detailsText = 'Họ tên và số định danh trùng khớp 100% với Cơ sở dữ liệu quốc gia về dân cư. Không phát hiện yếu tố nghi vấn hoặc tiền sự.';
      if (status === 'Có cảnh báo') {
        alertBadge = '<span class="px-2 py-0.5 text-xs font-semibold rounded bg-red-100 text-red-800 border border-red-200">Có cảnh báo</span>';
        detailsText = 'Thông tin đối soát phát hiện người nộp khai báo thuộc diện cần xác minh tạm trú theo quy định phòng chống dịch/ANTT.';
      } else if (status === 'Nộp muộn') {
        alertBadge = '<span class="px-2 py-0.5 text-xs font-semibold rounded bg-amber-100 text-amber-800 border border-amber-200">Nộp muộn</span>';
        detailsText = 'Thông tin đối soát phát hiện cơ sở nộp khai báo trễ hơn 24 giờ kể từ khi khách nhận phòng.';
      }

      crossCheckHTML = `
        <div class="p-3 border border-slate-200 rounded-lg bg-slate-50">
          <div class="flex items-center justify-between mb-2">
            <span class="text-xs font-bold text-slate-500">KẾT QUẢ ĐỐI SOÁT TỰ ĐỘNG</span>
            ${alertBadge}
          </div>
          <p class="text-xs text-slate-700 leading-relaxed font-semibold">
            ${detailsText}
          </p>
        </div>
      `;

      historyHTML = `
        <div class="timeline text-xs font-semibold text-slate-700">
          <div class="timeline-item">
            <div class="timeline-dot"></div>
            <div>
              <div class="text-[12px] font-bold text-slate-800">${date}</div>
              <div class="text-[11px] text-slate-500">Cơ sở gửi khai báo thành công (Người thực hiện: Lê Văn D)</div>
            </div>
          </div>
          <div class="timeline-item">
            <div class="timeline-dot bg-blue-500 border-blue-200"></div>
            <div>
              <div class="text-[12px] font-bold text-slate-800">${date.split(' ')[0]} 07:32</div>
              <div class="text-[11px] text-slate-500">Hệ thống thực hiện đối soát tự động (Kết quả: OK)</div>
            </div>
          </div>
          <div class="timeline-item">
            <div class="timeline-dot bg-amber-500 border-amber-200"></div>
            <div>
              <div class="text-[12px] font-bold text-slate-800">${date.split(' ')[0]} 08:00</div>
              <div class="text-[11px] text-slate-500">Cán bộ ${officer} mở tiếp nhận hồ sơ và rà soát</div>
            </div>
          </div>
        </div>
      `;

    } else if (type === 'Tài sản') {
      detailFieldsHTML = `
        <div class="grid grid-cols-2 gap-4">
          <div>
            <span class="text-xs text-slate-500 font-bold block">LOẠI GIAO DỊCH</span>
            <span class="text-sm font-semibold text-slate-800">Cầm cố tài sản</span>
          </div>
          <div>
            <span class="text-xs text-slate-500 font-bold block">GIÁ TRỊ GIAO DỊCH</span>
            <span class="text-sm font-semibold text-slate-800">${summary.includes('SH') ? '45.000.000 VNĐ' : '15.000.000 VNĐ'}</span>
          </div>
          <div class="col-span-2">
            <span class="text-xs text-slate-500 font-bold block">TÊN VÀ CHI TIẾT TÀI SẢN</span>
            <span class="text-sm font-semibold text-slate-800 block">${summary}</span>
            <span class="text-xs text-slate-500 block mt-1">Biển số: 35B1-123.45 | Số khung: RLH51-99214 | Số máy: JF51E-01254</span>
          </div>
        </div>
      `;

      filesHTML = `
        <div class="grid grid-cols-1 md:grid-cols-2 gap-2 mt-2">
          <div class="flex items-center justify-between p-2.5 border border-slate-200 rounded-lg bg-slate-50 hover:bg-slate-100 transition cursor-pointer" type="button" data-toast="Mở PDF hợp đồng...">
            <span class="flex items-center gap-2 text-xs font-semibold text-slate-700">
              <i data-lucide="file-text" class="w-4 h-4 text-red-600"></i> hop_dong_cam_co.pdf
            </span>
            <span class="text-xs font-bold text-[#c50000]">Xem</span>
          </div>
          <div class="flex items-center justify-between p-2.5 border border-slate-200 rounded-lg bg-slate-50 hover:bg-slate-100 transition cursor-pointer" type="button" data-toast="Xem hình ảnh xe máy...">
            <span class="flex items-center gap-2 text-xs font-semibold text-slate-700">
              <i data-lucide="image" class="w-4 h-4 text-blue-600"></i> anh_xe_giao_dich.jpg
            </span>
            <span class="text-xs font-bold text-[#c50000]">Xem</span>
          </div>
        </div>
      `;

      let alertBadge = '<span class="px-2 py-0.5 text-xs font-semibold rounded bg-red-100 text-red-800 border border-red-200">Có cảnh báo</span>';
      let detailsText = 'Phát hiện biển kiểm soát 35B1-123.45 được đăng ký dưới tên Nguyễn Văn X, không phải người giao dịch Trần Quốc Bảo. Số khung RLH51... trùng khớp với danh sách xe đang bị truy tìm trong vụ án trộm cắp tài sản ngày 10/06/2026 tại CA Huyện Gia Viễn.';
      
      if (status === 'Đã hoàn thành') {
        alertBadge = '<span class="px-2 py-0.5 text-xs font-semibold rounded bg-green-100 text-green-800 border border-green-200">Đã khớp / Xác minh xong</span>';
        detailsText = 'Đã liên hệ chủ cũ xác nhận giao dịch ủy quyền hợp pháp. Tài sản được chấp nhận phê duyệt.';
      } else if (status === 'Cần bổ sung') {
        alertBadge = '<span class="px-2 py-0.5 text-xs font-semibold rounded bg-amber-100 text-amber-800 border border-amber-200">Cần bổ sung</span>';
        detailsText = 'Cán bộ yêu cầu bổ sung giấy ủy quyền hoặc chứng từ chứng minh nguồn gốc tài sản giao dịch.';
      }

      crossCheckHTML = `
        <div class="p-3 border border-red-200 rounded-lg bg-red-50/50">
          <div class="flex items-center justify-between mb-2">
            <span class="text-xs font-bold text-red-600">KẾT QUẢ ĐỐI SOÁT TỰ ĐỘNG</span>
            ${alertBadge}
          </div>
          <p class="text-xs text-red-800 leading-relaxed font-semibold">
            ${detailsText}
          </p>
        </div>
      `;

      historyHTML = `
        <div class="timeline text-xs font-semibold text-slate-700">
          <div class="timeline-item">
            <div class="timeline-dot bg-red-500 border-red-200"></div>
            <div>
              <div class="text-[12px] font-bold text-slate-800">${date}</div>
              <div class="text-[11px] text-slate-500">Cơ sở đăng tải khai báo giao dịch tài sản (Người thực hiện: Trần Văn K)</div>
            </div>
          </div>
          <div class="timeline-item">
            <div class="timeline-dot bg-red-600 border-red-300"></div>
            <div>
              <div class="text-[12px] font-bold text-red-600">${date.split(' ')[0]} 20:12</div>
              <div class="text-[11px] text-red-500">Hệ thống kích hoạt cảnh báo đối soát danh mục tang vật trộm cắp</div>
            </div>
          </div>
        </div>
      `;

    } else {
      // Báo cáo định kỳ
      detailFieldsHTML = `
        <div class="grid grid-cols-2 gap-4">
          <div>
            <span class="text-xs text-slate-500 font-bold block">LOẠI BÁO CÁO</span>
            <span class="text-sm font-semibold text-slate-800">Báo cáo định kỳ ANTT</span>
          </div>
          <div>
            <span class="text-xs text-slate-500 font-bold block">KỲ BÁO CÁO</span>
            <span class="text-sm font-semibold text-slate-800">${summary}</span>
          </div>
          <div class="col-span-2">
            <span class="text-xs text-slate-500 font-bold block mb-1">CHỈ TIÊU VÀ SỐ LIỆU PHÁT SINH TRONG KỲ</span>
            <div class="grid grid-cols-3 gap-2 text-center text-xs">
              <div class="p-2 border border-slate-200 rounded bg-slate-50">
                <span class="text-slate-500 block font-semibold">Lượt khách</span>
                <span class="text-sm font-bold text-slate-800">326</span>
              </div>
              <div class="p-2 border border-slate-200 rounded bg-slate-50">
                <span class="text-slate-500 block font-semibold">Sự cố ANTT</span>
                <span class="text-sm font-bold text-slate-800">0</span>
              </div>
              <div class="p-2 border border-slate-200 rounded bg-slate-50">
                <span class="text-slate-500 block font-semibold">Nghỉ việc/Mới</span>
                <span class="text-sm font-bold text-slate-800">03 nv mới</span>
              </div>
            </div>
          </div>
        </div>
      `;

      filesHTML = `
        <div class="grid grid-cols-1 gap-2 mt-2">
          <div class="flex items-center justify-between p-2.5 border border-slate-200 rounded-lg bg-slate-50 hover:bg-slate-100 transition cursor-pointer" type="button" data-toast="Mở báo cáo PDF...">
            <span class="flex items-center gap-2 text-xs font-semibold text-slate-700">
              <i data-lucide="file-text" class="w-4 h-4 text-indigo-600"></i> bao_cao_dinh_ky_thang_6.pdf
            </span>
            <span class="text-xs font-bold text-[#c50000]">Xem</span>
          </div>
        </div>
      `;

      crossCheckHTML = `
        <div class="p-3 border border-slate-200 rounded-lg bg-slate-50">
          <div class="flex items-center justify-between mb-2">
            <span class="text-xs font-bold text-slate-500">KẾT QUẢ ĐỐI SOÁT TỰ ĐỘNG</span>
            <span class="px-2 py-0.5 text-xs font-semibold rounded bg-green-100 text-green-800 border border-green-200">Đúng hạn</span>
          </div>
          <p class="text-xs text-slate-700 leading-relaxed font-semibold">
            Báo cáo được nộp đúng hạn định kỳ trước ngày 15 hàng tháng. Số liệu đầy đủ, các thông tin nhân sự trùng khớp với khai báo lưu trú.
          </p>
        </div>
      `;

      historyHTML = `
        <div class="timeline text-xs font-semibold text-slate-700">
          <div class="timeline-item">
            <div class="timeline-dot"></div>
            <div>
              <div class="text-[12px] font-bold text-slate-800">${date}</div>
              <div class="text-[11px] text-slate-500">Cơ sở hoàn tất nộp báo cáo định kỳ (Người thực hiện: Nguyễn Văn A)</div>
            </div>
          </div>
        </div>
      `;
    }

    return `
      <!-- Thông tin cơ sở & Người khai -->
      <div class="form-section">
        <div class="form-section-title">
          <i data-lucide="store" class="h-4 w-4 text-[#c50000]"></i>Thông tin cơ sở & Người khai
        </div>
        <div class="grid grid-cols-2 gap-y-2.5 gap-x-4 text-xs font-semibold text-slate-700">
          <div>
            <span class="text-slate-400 block font-bold text-[11px]">TÊN CƠ SỞ</span>
            <span class="text-slate-800 font-bold">${esc(businessName)}</span>
          </div>
          <div>
            <span class="text-slate-400 block font-bold text-[11px]">ĐỊA BÀN PHÂN CẤP</span>
            <span class="text-slate-800">${esc(ward)}, Ninh Bình</span>
          </div>
          <div>
            <span class="text-slate-400 block font-bold text-[11px]">NGƯỜI GỬI KHAI BÁO</span>
            <span class="text-slate-800">${type === 'Lưu trú' ? 'Lê Văn D (Chủ cơ sở)' : type === 'Tài sản' ? 'Trần Quốc Bảo (Khách hàng)' : 'Lê Văn D (Quản lý)'}</span>
          </div>
          <div>
            <span class="text-slate-400 block font-bold text-[11px]">CCCD NGƯỜI GỬI</span>
            <span class="text-slate-800 font-mono">035092004812</span>
          </div>
        </div>
      </div>

      <!-- Toàn bộ nội dung khai báo -->
      <div class="form-section">
        <div class="form-section-title">
          <i data-lucide="file-text" class="h-4 w-4 text-[#c50000]"></i>Chi tiết nội dung khai báo (${esc(code)})
        </div>
        ${detailFieldsHTML}
      </div>

      <!-- Kết quả đối soát -->
      <div class="form-section">
        <div class="form-section-title">
          <i data-lucide="scan-search" class="h-4 w-4 text-[#c50000]"></i>Kết quả đối soát hệ thống
        </div>
        ${crossCheckHTML}
      </div>

      <!-- File đính kèm -->
      <div class="form-section">
        <div class="form-section-title">
          <i data-lucide="paperclip" class="h-4 w-4 text-[#c50000]"></i>Tài liệu & File đính kèm
        </div>
        ${filesHTML}
      </div>

      <!-- Lịch sử xử lý -->
      <div class="form-section">
        <div class="form-section-title">
          <i data-lucide="history" class="h-4 w-4 text-[#c50000]"></i>Lịch sử và tiến trình xử lý
        </div>
        ${historyHTML}
      </div>
    `;
  }

  return `<div class="form-section"><div class="form-section-title"><i data-lucide="clipboard-check" class="h-4 w-4 text-[#c50000]"></i>Xác nhận thao tác</div>
    <div class="form-row"><label><span class="form-label">Màn hình</span><input class="field" value="${esc(config.title)}" /></label><label><span class="form-label">Trạng thái sau thao tác</span><input class="field" value="Đang xử lý" /></label></div>
    <label class="mt-3 block"><span class="form-label">Ghi chú xử lý</span><textarea class="field textarea-field">Thao tác mô phỏng nhưng có phản hồi UI, validation, modal xác nhận và ghi nhận luồng xử lý theo plan.</textarea></label>
  </div>`;
}

function modalFooterTemplate() {
  if (currentModule === 'declaration-admin') {
    return `
      <button class="btn btn-secondary mr-auto" type="button" data-close-modal>Đóng</button>
      <button class="btn bg-orange-500 hover:bg-orange-600 text-white font-bold px-4 py-2 rounded-md shadow-sm flex items-center gap-1.5 transition text-xs" type="button" data-declaration-action="supplement">
        <i data-lucide="edit-3" class="w-4 h-4"></i> Yêu cầu bổ sung
      </button>
      <button class="btn bg-blue-600 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded-md shadow-sm flex items-center gap-1.5 transition text-xs" type="button" data-declaration-action="verify">
        <i data-lucide="shield-alert" class="w-4 h-4"></i> Cần xác minh
      </button>
      <button class="btn bg-green-600 hover:bg-green-700 text-white font-bold px-4 py-2 rounded-md shadow-sm flex items-center gap-1.5 transition text-xs" type="button" data-declaration-action="approve">
        <i data-lucide="check-circle" class="w-4 h-4"></i> Chấp nhận
      </button>
    `;
  }
  return `<button class="btn btn-secondary" type="button" data-close-modal>Hủy bỏ</button><button class="btn btn-primary" type="button" data-confirm-action><i data-lucide="check"></i>Xác nhận</button>`;
}

function modalTemplate() {
  const modalTitle = currentModule === 'accounts' ? 'Thêm / sửa tài khoản'
    : currentModule === 'declaration-admin' ? 'Chi tiết khai báo'
      : config.action;
  return `<div id="moduleModal" class="modal-backdrop" hidden>
    <section class="module-modal" role="dialog" aria-modal="true" aria-labelledby="moduleModalTitle">
      <div class="module-modal-head"><h2 id="moduleModalTitle" class="module-modal-title">${esc(modalTitle)}</h2><button class="close-icon-btn" type="button" data-close-modal aria-label="Đóng"><i data-lucide="x" class="h-5 w-5"></i></button></div>
      <div class="module-modal-body">${modalBodyTemplate()}</div>
      <div class="module-modal-foot">${modalFooterTemplate()}</div>
    </section>
  </div><div id="toast" class="toast"></div>`;
}

function renderApp() {
  const app = document.querySelector('#moduleApp');
  app.className = 'desktop-shell module-page-shell min-h-screen';
  app.innerHTML = headerTemplate() + sidebarTemplate() + contentTemplate() + modalTemplate();
  document.title = `${config.title} - CSKD ANTT Ninh Bình`;
  bindInteractions();
  renderRows();
  lucide.createIcons();
}

function showToast(message) {
  const toast = document.querySelector('#toast');
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add('is-visible');
  window.setTimeout(() => toast.classList.remove('is-visible'), 2200);
}

function setDemoState(type) {
  const body = document.querySelector('#moduleTableBody');
  if (!body || !config.columns) return;
  const colspan = config.columns.length + 3;
  if (type === 'loading') body.innerHTML = `<tr><td class="empty-state" colspan="${colspan}">Đang tải dữ liệu ${esc(config.title)}...</td></tr>`;
  if (type === 'empty') body.innerHTML = `<tr><td class="empty-state" colspan="${colspan}">Không có dữ liệu. Có thể tạo mới hoặc điều chỉnh bộ lọc.</td></tr>`;
  if (type === 'error') body.innerHTML = `<tr><td class="empty-state text-[#c50000]" colspan="${colspan}">Không tải được dữ liệu. Vui lòng thử lại hoặc kiểm tra quyền truy cập.</td></tr>`;
}

function bindInteractions() {
  const shell = document.querySelector('.desktop-shell');
  const sidebarToggle = document.querySelector('#sidebarToggle');
  const notificationToggle = document.querySelector('#notificationToggle');
  const notificationMenu = document.querySelector('#notificationMenu');
  const userMenuToggle = document.querySelector('#userMenuToggle');
  const userMenu = document.querySelector('#userMenu');
  const modal = document.querySelector('#moduleModal');
  const badge = document.querySelector('#notificationBadge');
  const notificationList = document.querySelector('#notificationList');
  const globalSearchInput = document.querySelector('#globalSearchInput');

  notificationList.innerHTML = ['Hồ sơ mới cần tiếp nhận', 'Khai báo lưu trú chờ duyệt', 'Giấy phép sắp hết hạn', 'Có nhật ký bảo mật mới'].map((item) => `<button class="notification-item" type="button"><span class="notification-dot"><i data-lucide="bell" class="h-4 w-4"></i></span><span><span class="notification-title">${esc(item)}</span><span class="notification-text">Click để mở đối tượng liên quan theo quyền.</span><span class="notification-time">15/06/2026</span></span></button>`).join('');

  sidebarToggle?.addEventListener('click', () => {
    const collapsed = shell.classList.toggle('is-collapsed');
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
    const open = notificationMenu.hidden;
    closeMenus();
    setOpen(notificationToggle, notificationMenu, open);
  });
  userMenuToggle?.addEventListener('click', (event) => {
    event.stopPropagation();
    const open = userMenu.hidden;
    closeMenus();
    setOpen(userMenuToggle, userMenu, open);
  });
  document.querySelector('#markAllReadBtn')?.addEventListener('click', () => {
    notificationList.innerHTML = '<div class="empty-state">Không còn thông báo chưa đọc.</div>';
    badge.hidden = true;
  });

  document.addEventListener('click', (event) => {
    if (!event.target.closest('.topbar-menu-wrap')) closeMenus();
    const openModal = event.target.closest('[data-open-modal]');
    const closeModal = event.target.closest('[data-close-modal]');
    const confirmAction = event.target.closest('[data-confirm-action]');
    const toastButton = event.target.closest('[data-toast]');
    const stateButton = event.target.closest('[data-state]');
    const tab = event.target.closest('[data-tab]');
    const page = event.target.closest('[data-page]');
    const sort = event.target.closest('[data-sort]');
    const toggleCheck = event.target.closest('[data-toggle-check]');
    const declAction = event.target.closest('[data-declaration-action]');

    if (openModal) {
      const tr = openModal.closest('tr');
      if (tr && currentModule === 'declaration-admin') {
        const idCell = tr.querySelector('td:nth-child(3)');
        if (idCell) {
          state.selectedDeclarationId = idCell.textContent.trim();
        }
      }
      if (currentModule === 'declaration-admin') {
        const modalBody = document.querySelector('.module-modal-body');
        if (modalBody) {
          modalBody.innerHTML = modalBodyTemplate();
        }
        const modalFoot = document.querySelector('.module-modal-foot');
        if (modalFoot) {
          modalFoot.innerHTML = modalFooterTemplate();
        }
      }
      modal.hidden = false;
      lucide.createIcons();
    }
    if (closeModal) modal.hidden = true;
    if (confirmAction) {
      modal.hidden = true;
      showToast('Đã xác nhận thao tác và ghi nhận vào luồng xử lý.');
    }
    if (declAction) {
      const actionType = declAction.dataset.declarationAction;
      modal.hidden = true;
      let msg = '';
      if (actionType === 'approve') msg = 'Đã phê duyệt chấp nhận khai báo thành công.';
      if (actionType === 'supplement') msg = 'Đã gửi yêu cầu bổ sung thông tin tới cơ sở.';
      if (actionType === 'verify') msg = 'Đã đánh dấu khai báo cần xác minh bổ sung.';
      showToast(msg);
      if (state.selectedDeclarationId) {
        const row = declarationRows.find(r => r[0] === state.selectedDeclarationId);
        if (row) {
          if (actionType === 'approve') row[6] = 'Đã hoàn thành';
          if (actionType === 'supplement') row[6] = 'Cần bổ sung';
          if (actionType === 'verify') row[6] = 'Có cảnh báo';
          renderRows();
        }
      }
    }
    if (toastButton) showToast(toastButton.dataset.toast || 'Đã thực hiện thao tác mô phỏng.');
    if (stateButton) setDemoState(stateButton.dataset.state);
    if (tab) {
      state.activeTab = Number(tab.dataset.tab);
      document.querySelectorAll('[data-tab]').forEach((button) => button.classList.toggle('active', button === tab));
      const tabText = tab.childNodes[0].textContent.trim();
      showToast(`Đã chuyển tab ${tabText}`);
      renderRows();
    }
    if (page && !page.disabled) {
      state.page = Number(page.dataset.page);
      renderRows();
    }
    if (sort) {
      const index = Number(sort.dataset.sort);
      state.sortDir = state.sortIndex === index ? state.sortDir * -1 : 1;
      state.sortIndex = index;
      renderRows();
    }
    if (toggleCheck) {
      toggleCheck.classList.toggle('off');
      toggleCheck.innerHTML = `<i data-lucide="${toggleCheck.classList.contains('off') ? 'minus' : 'check'}" class="h-4 w-4"></i>`;
      lucide.createIcons();
    }
  });

  document.querySelector('[data-search]')?.addEventListener('click', () => {
    state.query = document.querySelector('#keywordInput')?.value || '';
    state.page = 1;
    renderRows();
  });
  document.querySelector('[data-reset]')?.addEventListener('click', () => {
    state.query = '';
    state.page = 1;
    document.querySelectorAll('.field').forEach((field) => {
      if (field.id === 'keywordInput') field.value = '';
    });
    renderRows();
  });
  document.querySelector('#keywordInput')?.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      state.query = event.target.value;
      state.page = 1;
      renderRows();
    }
  });
  document.querySelector('#pageSizeSelect')?.addEventListener('change', (event) => {
    state.pageSize = Number(event.target.value);
    state.page = 1;
    renderRows();
  });
  globalSearchInput?.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' && event.currentTarget.value.trim()) {
      showToast(`Tìm kiếm toàn hệ thống: ${event.currentTarget.value.trim()}`);
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeMenus();
      modal.hidden = true;
    }
  });
}

renderApp();
