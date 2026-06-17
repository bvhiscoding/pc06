/**
 * app-data.js — PC06 Central Data Layer
 * Nguồn dữ liệu dùng chung cho toàn bộ hệ thống.
 * Dữ liệu: Tỉnh Ninh Bình — 2 phường: Đông Thành & Nam Thành
 * Phân quyền: Công an tỉnh thấy toàn bộ; Công an phường chỉ thấy địa bàn mình.
 *
 * Phụ thuộc: auth.js (phải load trước)
 */

(function () {

  // ─────────────────────────────────────────────────────────────────────────
  // MASTER DATA — co_so_kinh_doanh (10 cơ sở, 2 phường)
  // ─────────────────────────────────────────────────────────────────────────
  const ALL_BUSINESSES = [
    // ── Phường Đông Thành ──
    {
      ma_co_so: 'CS-NB-DT-001',
      ten_co_so: 'Karaoke Hoa Sen',
      ma_loai_hinh: 'KARAOKE',
      ten_loai_hinh: 'Kinh doanh karaoke',
      chu_co_so: 'Nguyễn Văn B',
      so_giay_chung_nhan_antt: 'NB-ANTT-0256',
      trang_thai_hoat_dong: 'Đang hoạt động',
      muc_do_rui_ro: 'Cao',
      phuong_xa: 'Phường Đông Thành',
      quan_huyen: 'Thành phố Ninh Bình',
      dia_chi_day_du: 'Số 12 Trần Hưng Đạo, Phường Đông Thành, TP. Ninh Bình',
      don_vi_quan_ly: 'NB-DT',
      ngay_cap_nhat: '2026-06-15',
      phone: '0912 001 256',
      email: 'karaoke.hoasen@demo.gov.vn',
      lat: '20.2540',
      lng: '105.9750',
    },
    {
      ma_co_so: 'CS-NB-DT-002',
      ten_co_so: 'Khách sạn Tràng An View',
      ma_loai_hinh: 'LUU_TRU',
      ten_loai_hinh: 'Kinh doanh lưu trú',
      chu_co_so: 'Lê Thị C',
      so_giay_chung_nhan_antt: 'NB-ANTT-0311',
      trang_thai_hoat_dong: 'Đang hoạt động',
      muc_do_rui_ro: 'Trung bình',
      phuong_xa: 'Phường Đông Thành',
      quan_huyen: 'Thành phố Ninh Bình',
      dia_chi_day_du: 'Số 45 Lê Thái Tổ, Phường Đông Thành, TP. Ninh Bình',
      don_vi_quan_ly: 'NB-DT',
      ngay_cap_nhat: '2026-06-14',
      phone: '0912 001 311',
      email: 'ks.tranganview@demo.gov.vn',
      lat: '20.2535',
      lng: '105.9745',
    },
    {
      ma_co_so: 'CS-NB-DT-003',
      ten_co_so: 'Nhà nghỉ Sen Vàng',
      ma_loai_hinh: 'LUU_TRU',
      ten_loai_hinh: 'Kinh doanh lưu trú',
      chu_co_so: 'Hà Thị Q',
      so_giay_chung_nhan_antt: 'NB-ANTT-0224',
      trang_thai_hoat_dong: 'Đang hoạt động',
      muc_do_rui_ro: 'Trung bình',
      phuong_xa: 'Phường Đông Thành',
      quan_huyen: 'Thành phố Ninh Bình',
      dia_chi_day_du: 'Số 17 Nguyễn Huệ, Phường Đông Thành, TP. Ninh Bình',
      don_vi_quan_ly: 'NB-DT',
      ngay_cap_nhat: '2026-06-12',
      phone: '0912 001 224',
      email: 'nnghi.senvang@demo.gov.vn',
      lat: '20.2530',
      lng: '105.9760',
    },
    {
      ma_co_so: 'CS-NB-DT-004',
      ten_co_so: 'Cầm đồ Minh Quân',
      ma_loai_hinh: 'CAM_DO',
      ten_loai_hinh: 'Kinh doanh cầm đồ',
      chu_co_so: 'Tạ Quốc P',
      so_giay_chung_nhan_antt: 'NB-ANTT-0451',
      trang_thai_hoat_dong: 'Đang hoạt động',
      muc_do_rui_ro: 'Cao',
      phuong_xa: 'Phường Đông Thành',
      quan_huyen: 'Thành phố Ninh Bình',
      dia_chi_day_du: 'Số 22 Lương Văn Tụy, Phường Đông Thành, TP. Ninh Bình',
      don_vi_quan_ly: 'NB-DT',
      ngay_cap_nhat: '2026-06-11',
      phone: '0912 001 451',
      email: 'camdo.minhquan@demo.gov.vn',
      lat: '20.2520',
      lng: '105.9755',
    },
    {
      ma_co_so: 'CS-NB-DT-005',
      ten_co_so: 'Karaoke Thiên Thanh',
      ma_loai_hinh: 'KARAOKE',
      ten_loai_hinh: 'Kinh doanh karaoke',
      chu_co_so: 'Nguyễn Hoàng Z',
      so_giay_chung_nhan_antt: 'NB-ANTT-0288',
      trang_thai_hoat_dong: 'Tạm ngừng',
      muc_do_rui_ro: 'Cao',
      phuong_xa: 'Phường Đông Thành',
      quan_huyen: 'Thành phố Ninh Bình',
      dia_chi_day_du: 'Số 68 Phan Bội Châu, Phường Đông Thành, TP. Ninh Bình',
      don_vi_quan_ly: 'NB-DT',
      ngay_cap_nhat: '2026-06-09',
      phone: '0912 001 288',
      email: 'karaoke.thienthanh@demo.gov.vn',
      lat: '20.2545',
      lng: '105.9740',
    },

    // ── Phường Nam Thành ──
    {
      ma_co_so: 'CS-NB-NT-001',
      ten_co_so: 'Nhà nghỉ Bình Minh',
      ma_loai_hinh: 'LUU_TRU',
      ten_loai_hinh: 'Kinh doanh lưu trú',
      chu_co_so: 'Trần Thị C',
      so_giay_chung_nhan_antt: 'NB-ANTT-0188',
      trang_thai_hoat_dong: 'Đang hoạt động',
      muc_do_rui_ro: 'Trung bình',
      phuong_xa: 'Phường Nam Thành',
      quan_huyen: 'Thành phố Ninh Bình',
      dia_chi_day_du: 'Số 88 Đinh Tiên Hoàng, Phường Nam Thành, TP. Ninh Bình',
      don_vi_quan_ly: 'NB-NT',
      ngay_cap_nhat: '2026-06-15',
      phone: '0912 002 188',
      email: 'nnghi.binhminh@demo.gov.vn',
      lat: '20.2480',
      lng: '105.9720',
    },
    {
      ma_co_so: 'CS-NB-NT-002',
      ten_co_so: 'Cầm đồ Phát Lộc',
      ma_loai_hinh: 'CAM_DO',
      ten_loai_hinh: 'Kinh doanh cầm đồ',
      chu_co_so: 'Đinh Văn H',
      so_giay_chung_nhan_antt: 'NB-ANTT-0402',
      trang_thai_hoat_dong: 'Tạm ngừng',
      muc_do_rui_ro: 'Cao',
      phuong_xa: 'Phường Nam Thành',
      quan_huyen: 'Thành phố Ninh Bình',
      dia_chi_day_du: 'Số 16 Lương Văn Tụy, Phường Nam Thành, TP. Ninh Bình',
      don_vi_quan_ly: 'NB-NT',
      ngay_cap_nhat: '2026-06-13',
      phone: '0912 002 402',
      email: 'camdo.phatlo@demo.gov.vn',
      lat: '20.2475',
      lng: '105.9715',
    },
    {
      ma_co_so: 'CS-NB-NT-003',
      ten_co_so: 'Khách sạn Cố Đô',
      ma_loai_hinh: 'LUU_TRU',
      ten_loai_hinh: 'Kinh doanh lưu trú',
      chu_co_so: 'Tô Thị S',
      so_giay_chung_nhan_antt: 'NB-ANTT-0336',
      trang_thai_hoat_dong: 'Đang hoạt động',
      muc_do_rui_ro: 'Trung bình',
      phuong_xa: 'Phường Nam Thành',
      quan_huyen: 'Thành phố Ninh Bình',
      dia_chi_day_du: 'Số 29 Lê Đại Hành, Phường Nam Thành, TP. Ninh Bình',
      don_vi_quan_ly: 'NB-NT',
      ngay_cap_nhat: '2026-06-12',
      phone: '0912 002 336',
      email: 'ks.codo@demo.gov.vn',
      lat: '20.2470',
      lng: '105.9725',
    },
    {
      ma_co_so: 'CS-NB-NT-004',
      ten_co_so: 'Massage Đại Dương',
      ma_loai_hinh: 'KARAOKE',
      ten_loai_hinh: 'Kinh doanh karaoke',
      chu_co_so: 'Lý Thị U',
      so_giay_chung_nhan_antt: 'NB-ANTT-0299',
      trang_thai_hoat_dong: 'Đang hoạt động',
      muc_do_rui_ro: 'Cao',
      phuong_xa: 'Phường Nam Thành',
      quan_huyen: 'Thành phố Ninh Bình',
      dia_chi_day_du: 'Số 41 Tràng An, Phường Nam Thành, TP. Ninh Bình',
      don_vi_quan_ly: 'NB-NT',
      ngay_cap_nhat: '2026-06-10',
      phone: '0912 002 299',
      email: 'massage.daiduong@demo.gov.vn',
      lat: '20.2465',
      lng: '105.9730',
    },
    {
      ma_co_so: 'CS-NB-NT-005',
      ten_co_so: 'Nhà nghỉ Trúc Xanh',
      ma_loai_hinh: 'LUU_TRU',
      ten_loai_hinh: 'Kinh doanh lưu trú',
      chu_co_so: 'Vũ Văn C',
      so_giay_chung_nhan_antt: 'NB-ANTT-0176',
      trang_thai_hoat_dong: 'Ngừng hoạt động',
      muc_do_rui_ro: 'Trung bình',
      phuong_xa: 'Phường Nam Thành',
      quan_huyen: 'Thành phố Ninh Bình',
      dia_chi_day_du: 'Số 09 Ngô Gia Tự, Phường Nam Thành, TP. Ninh Bình',
      don_vi_quan_ly: 'NB-NT',
      ngay_cap_nhat: '2026-06-08',
      phone: '0912 002 176',
      email: 'nnghi.trucxanh@demo.gov.vn',
      lat: '20.2460',
      lng: '105.9735',
    },
  ];

  // ─────────────────────────────────────────────────────────────────────────
  // MASTER DATA — quan_ly_ho_so (10 bản ghi)
  // ─────────────────────────────────────────────────────────────────────────
  const ALL_HO_SO = [
    // ── Phường Đông Thành ──
    { id: 'HS-2026-00121', procedure: 'Cấp mới giấy chứng nhận đủ ĐK ANTT', business: 'Karaoke Hoa Sen', owner: 'Nguyễn Văn B', phone: '0912 345 678', area: 'P. Đông Thành, TP. Ninh Bình', phuong_xa: 'Phường Đông Thành', submittedAt: '2026-05-18T08:20:00', deadline: '2026-06-18', status: 'Chờ tiếp nhận', officer: '-', unit: 'Công an phường Đông Thành' },
    { id: 'HS-2026-00122', procedure: 'Cấp lại giấy chứng nhận đủ ĐK ANTT', business: 'Khách sạn Tràng An View', owner: 'Lê Thị C', phone: '0912 001 311', area: 'P. Đông Thành, TP. Ninh Bình', phuong_xa: 'Phường Đông Thành', submittedAt: '2026-05-18T15:40:00', deadline: '2026-06-18', status: 'Đã tiếp nhận', officer: 'Trần Văn K', unit: 'Công an phường Đông Thành' },
    { id: 'HS-2026-00123', procedure: 'Cấp đổi giấy chứng nhận đủ ĐK ANTT', business: 'Nhà nghỉ Sen Vàng', owner: 'Hà Thị Q', phone: '0912 001 224', area: 'P. Đông Thành, TP. Ninh Bình', phuong_xa: 'Phường Đông Thành', submittedAt: '2026-05-19T16:28:00', deadline: '2026-06-19', status: 'Cần bổ sung', officer: 'Trần Văn K', unit: 'Công an phường Đông Thành' },
    { id: 'HS-2026-00124', procedure: 'Khai báo thay đổi thông tin cơ sở', business: 'Cầm đồ Minh Quân', owner: 'Tạ Quốc P', phone: '0912 001 451', area: 'P. Đông Thành, TP. Ninh Bình', phuong_xa: 'Phường Đông Thành', submittedAt: '2026-05-20T09:10:00', deadline: '2026-06-20', status: 'Đang xử lý', officer: 'Trần Văn K', unit: 'Công an phường Đông Thành' },
    { id: 'HS-2026-00125', procedure: 'Tạm dừng hoạt động', business: 'Karaoke Thiên Thanh', owner: 'Nguyễn Hoàng Z', phone: '0912 001 288', area: 'P. Đông Thành, TP. Ninh Bình', phuong_xa: 'Phường Đông Thành', submittedAt: '2026-05-21T11:30:00', deadline: '2026-06-21', status: 'Đã hoàn thành', officer: 'Trần Văn K', unit: 'Công an phường Đông Thành' },

    // ── Phường Nam Thành ──
    { id: 'HS-2026-00126', procedure: 'Cấp giấy chứng nhận đủ ĐK ANTT', business: 'Nhà nghỉ Bình Minh', owner: 'Trần Thị C', phone: '0912 002 188', area: 'P. Nam Thành, TP. Ninh Bình', phuong_xa: 'Phường Nam Thành', submittedAt: '2026-05-20T08:42:00', deadline: '2026-06-20', status: 'Đang xử lý', officer: 'Phạm Thị H', unit: 'Công an phường Nam Thành' },
    { id: 'HS-2026-00127', procedure: 'Cấp mới giấy chứng nhận đủ ĐK ANTT', business: 'Cầm đồ Phát Lộc', owner: 'Đinh Văn H', phone: '0912 002 402', area: 'P. Nam Thành, TP. Ninh Bình', phuong_xa: 'Phường Nam Thành', submittedAt: '2026-05-22T13:45:00', deadline: '2026-06-22', status: 'Từ chối', officer: 'Phạm Thị H', unit: 'Công an phường Nam Thành' },
    { id: 'HS-2026-00128', procedure: 'Cấp đổi giấy chứng nhận đủ ĐK ANTT', business: 'Khách sạn Cố Đô', owner: 'Tô Thị S', phone: '0912 002 336', area: 'P. Nam Thành, TP. Ninh Bình', phuong_xa: 'Phường Nam Thành', submittedAt: '2026-05-23T10:05:00', deadline: '2026-06-23', status: 'Quá hạn', officer: 'Phạm Thị H', unit: 'Công an phường Nam Thành' },
    { id: 'HS-2026-00129', procedure: 'Khai báo thay đổi thông tin cơ sở', business: 'Massage Đại Dương', owner: 'Lý Thị U', phone: '0912 002 299', area: 'P. Nam Thành, TP. Ninh Bình', phuong_xa: 'Phường Nam Thành', submittedAt: '2026-05-24T09:55:00', deadline: '2026-06-24', status: 'Đã tiếp nhận', officer: 'Phạm Thị H', unit: 'Công an phường Nam Thành' },
    { id: 'HS-2026-00130', procedure: 'Ngừng hoạt động', business: 'Nhà nghỉ Trúc Xanh', owner: 'Vũ Văn C', phone: '0912 002 176', area: 'P. Nam Thành, TP. Ninh Bình', phuong_xa: 'Phường Nam Thành', submittedAt: '2026-05-25T14:20:00', deadline: '2026-06-25', status: 'Chờ tiếp nhận', officer: '-', unit: 'Công an phường Nam Thành' },
  ];

  // ─────────────────────────────────────────────────────────────────────────
  // MASTER DATA — kiem_tra_co_so (10 bản ghi)
  // ─────────────────────────────────────────────────────────────────────────
  const ALL_KIEM_TRA = [
    // ── Phường Đông Thành ──
    { id: 'KT-2026-0031', code: 'KT-2026-0031', establishment: 'Karaoke Hoa Sen', type: 'Kế hoạch', unit: 'Công an phường Đông Thành', inspector: 'Trần Văn K', date: '11/06/2026', dateIso: '2026-06-11', status: 'Kế hoạch', phuong_xa: 'Phường Đông Thành', ket_qua: 'Đã lập kế hoạch kiểm tra điều kiện PCCC và ANTT.', de_xuat: 'Chuẩn bị đoàn kiểm tra liên ngành.' },
    { id: 'KT-2026-0032', code: 'KT-2026-0032', establishment: 'Karaoke Hoa Sen', type: 'Định kỳ', unit: 'Công an phường Đông Thành', inspector: 'Trần Văn K', date: '12/06/2026', dateIso: '2026-06-12', status: 'Đã kiểm tra', phuong_xa: 'Phường Đông Thành', ket_qua: 'Phát hiện thiếu sổ theo dõi nhân viên trực đêm.', de_xuat: 'Yêu cầu cơ sở bổ sung hồ sơ quản lý nhân sự trực đêm.' },
    { id: 'KT-2026-0033', code: 'KT-2026-0033', establishment: 'Khách sạn Tràng An View', type: 'Định kỳ', unit: 'Công an phường Đông Thành', inspector: 'Trần Văn K', date: '09/06/2026', dateIso: '2026-06-09', status: 'Đã kiểm tra', phuong_xa: 'Phường Đông Thành', ket_qua: 'Hồ sơ lưu trú đầy đủ, đề nghị duy trì chế độ báo cáo đúng hạn.', de_xuat: 'Không.' },
    { id: 'KT-2026-0034', code: 'KT-2026-0034', establishment: 'Nhà nghỉ Sen Vàng', type: 'Đột xuất', unit: 'Công an phường Đông Thành', inspector: 'Trần Văn K', date: '08/06/2026', dateIso: '2026-06-08', status: 'Cần tái kiểm tra', phuong_xa: 'Phường Đông Thành', ket_qua: 'Thiếu bản sao giấy chứng nhận PCCC còn hiệu lực tại hồ sơ lưu.', de_xuat: 'Tái kiểm tra sau khi cơ sở bổ sung.' },
    { id: 'KT-2026-0035', code: 'KT-2026-0035', establishment: 'Cầm đồ Minh Quân', type: 'Định kỳ', unit: 'Công an phường Đông Thành', inspector: 'Trần Văn K', date: '07/06/2026', dateIso: '2026-06-07', status: 'Đã kiểm tra', phuong_xa: 'Phường Đông Thành', ket_qua: 'Sổ theo dõi tài sản cầm cố cập nhật chưa đồng đều.', de_xuat: 'Nhắc nhở cập nhật mẫu biểu chuẩn.' },

    // ── Phường Nam Thành ──
    { id: 'KT-2026-0041', code: 'KT-2026-0041', establishment: 'Cầm đồ Phát Lộc', type: 'Đột xuất', unit: 'Công an phường Nam Thành', inspector: 'Phạm Thị H', date: '10/06/2026', dateIso: '2026-06-10', status: 'Cần tái kiểm tra', phuong_xa: 'Phường Nam Thành', ket_qua: 'Cơ sở tạm ngừng hoạt động nhưng chưa hoàn tất cập nhật biến động giấy phép.', de_xuat: 'Tái kiểm tra sau khi cơ sở nộp hồ sơ cập nhật.' },
    { id: 'KT-2026-0042', code: 'KT-2026-0042', establishment: 'Nhà nghỉ Bình Minh', type: 'Định kỳ', unit: 'Công an phường Nam Thành', inspector: 'Phạm Thị H', date: '06/06/2026', dateIso: '2026-06-06', status: 'Đã kiểm tra', phuong_xa: 'Phường Nam Thành', ket_qua: 'Cơ sở đáp ứng đủ điều kiện ANTT và khai báo lưu trú.', de_xuat: 'Không.' },
    { id: 'KT-2026-0043', code: 'KT-2026-0043', establishment: 'Khách sạn Cố Đô', type: 'Kế hoạch', unit: 'Công an phường Nam Thành', inspector: 'Phạm Thị H', date: '14/06/2026', dateIso: '2026-06-14', status: 'Kế hoạch', phuong_xa: 'Phường Nam Thành', ket_qua: 'Lên lịch kiểm tra chuyên đề lưu trú và PCCC.', de_xuat: 'Thông báo cơ sở chuẩn bị hồ sơ.' },
    { id: 'KT-2026-0044', code: 'KT-2026-0044', establishment: 'Massage Đại Dương', type: 'Đột xuất', unit: 'Công an phường Nam Thành', inspector: 'Phạm Thị H', date: '05/06/2026', dateIso: '2026-06-05', status: 'Đã kiểm tra', phuong_xa: 'Phường Nam Thành', ket_qua: 'Phát hiện hoạt động quá giờ trong hai ngày cuối tuần.', de_xuat: 'Lập hồ sơ vi phạm hành chính.' },
    { id: 'KT-2026-0045', code: 'KT-2026-0045', establishment: 'Nhà nghỉ Trúc Xanh', type: 'Định kỳ', unit: 'Công an phường Nam Thành', inspector: 'Phạm Thị H', date: '04/06/2026', dateIso: '2026-06-04', status: 'Đã kiểm tra', phuong_xa: 'Phường Nam Thành', ket_qua: 'Đã ngừng hoạt động, biển hiệu chưa tháo gỡ hoàn toàn.', de_xuat: 'Yêu cầu hoàn tất thủ tục ngừng kinh doanh.' },
  ];

  // ─────────────────────────────────────────────────────────────────────────
  // MASTER DATA — xu_ly_vi_pham (10 bản ghi)
  // ─────────────────────────────────────────────────────────────────────────
  const ALL_VI_PHAM = [
    // ── Phường Đông Thành ──
    { id: 'VP-2026-0011', code: 'VP-2026-0011', ma_kiem_tra: 'KT-2026-0032', establishment: 'Karaoke Hoa Sen', violation: 'Không cập nhật đầy đủ danh sách nhân viên trực đêm', handling: 'Cảnh báo và yêu cầu khắc phục trước ngày 25/06/2026', status: 'Đang thi hành', unit: 'Công an phường Đông Thành', date: '12/06/2026', dateIso: '2026-06-12', phuong_xa: 'Phường Đông Thành', officer: 'Trần Văn K' },
    { id: 'VP-2026-0012', code: 'VP-2026-0012', ma_kiem_tra: 'KT-2026-0034', establishment: 'Nhà nghỉ Sen Vàng', violation: 'Thiếu hồ sơ PCCC còn hiệu lực tại nơi lưu trữ', handling: 'Yêu cầu bổ sung hồ sơ trong 07 ngày', status: 'Chưa thi hành', unit: 'Công an phường Đông Thành', date: '08/06/2026', dateIso: '2026-06-08', phuong_xa: 'Phường Đông Thành', officer: 'Trần Văn K' },
    { id: 'VP-2026-0013', code: 'VP-2026-0013', ma_kiem_tra: 'KT-2026-0035', establishment: 'Cầm đồ Minh Quân', violation: 'Ghi chép sổ theo dõi tài sản cầm cố chưa đầy đủ', handling: 'Phạt tiền 2.500.000 đồng', status: 'Đã thi hành', unit: 'Công an phường Đông Thành', date: '07/06/2026', dateIso: '2026-06-07', phuong_xa: 'Phường Đông Thành', officer: 'Trần Văn K' },
    { id: 'VP-2026-0014', code: 'VP-2026-0014', ma_kiem_tra: 'KT-2026-0031', establishment: 'Karaoke Hoa Sen', violation: 'Chưa niêm yết đầy đủ nội quy phòng cháy chữa cháy', handling: 'Nhắc nhở bằng văn bản', status: 'Đã thi hành', unit: 'Công an phường Đông Thành', date: '11/06/2026', dateIso: '2026-06-11', phuong_xa: 'Phường Đông Thành', officer: 'Trần Văn K' },
    { id: 'VP-2026-0015', code: 'VP-2026-0015', ma_kiem_tra: 'KT-2026-0033', establishment: 'Khách sạn Tràng An View', violation: 'Nộp báo cáo định kỳ chậm 01 kỳ', handling: 'Cảnh báo và yêu cầu cam kết', status: 'Đang thi hành', unit: 'Phòng CS QLHC về TTXH', date: '09/06/2026', dateIso: '2026-06-09', phuong_xa: 'Phường Đông Thành', officer: 'Nguyễn Văn A' },

    // ── Phường Nam Thành ──
    { id: 'VP-2026-0016', code: 'VP-2026-0016', ma_kiem_tra: 'KT-2026-0041', establishment: 'Cầm đồ Phát Lộc', violation: 'Chậm thông báo biến động tình trạng kinh doanh', handling: 'Phạt tiền 3.000.000 đồng', status: 'Chưa thi hành', unit: 'Phòng CS QLHC về TTXH', date: '10/06/2026', dateIso: '2026-06-10', phuong_xa: 'Phường Nam Thành', officer: 'Nguyễn Văn A' },
    { id: 'VP-2026-0017', code: 'VP-2026-0017', ma_kiem_tra: 'KT-2026-0044', establishment: 'Massage Đại Dương', violation: 'Hoạt động quá giờ quy định', handling: 'Phạt tiền 8.000.000 đồng', status: 'Đang thi hành', unit: 'Công an phường Nam Thành', date: '05/06/2026', dateIso: '2026-06-05', phuong_xa: 'Phường Nam Thành', officer: 'Phạm Thị H' },
    { id: 'VP-2026-0018', code: 'VP-2026-0018', ma_kiem_tra: 'KT-2026-0045', establishment: 'Nhà nghỉ Trúc Xanh', violation: 'Chưa hoàn tất thủ tục ngừng hoạt động theo quy định', handling: 'Yêu cầu hoàn thiện hồ sơ trong 05 ngày', status: 'Chưa thi hành', unit: 'Công an phường Nam Thành', date: '04/06/2026', dateIso: '2026-06-04', phuong_xa: 'Phường Nam Thành', officer: 'Phạm Thị H' },
    { id: 'VP-2026-0019', code: 'VP-2026-0019', ma_kiem_tra: 'KT-2026-0042', establishment: 'Nhà nghỉ Bình Minh', violation: 'Thiếu biên bản huấn luyện PCCC nội bộ quý II', handling: 'Nhắc nhở và bổ sung hồ sơ', status: 'Đã thi hành', unit: 'Công an phường Nam Thành', date: '06/06/2026', dateIso: '2026-06-06', phuong_xa: 'Phường Nam Thành', officer: 'Phạm Thị H' },
    { id: 'VP-2026-0020', code: 'VP-2026-0020', ma_kiem_tra: 'KT-2026-0043', establishment: 'Khách sạn Cố Đô', violation: 'Chưa chuẩn bị đầy đủ sổ quản lý lưu trú theo mẫu mới', handling: 'Yêu cầu khắc phục trước đợt kiểm tra chính thức', status: 'Đang thi hành', unit: 'Phòng CS QLHC về TTXH', date: '14/06/2026', dateIso: '2026-06-14', phuong_xa: 'Phường Nam Thành', officer: 'Nguyễn Văn A' },
  ];

  // ─────────────────────────────────────────────────────────────────────────
  // PHÂN QUYỀN — lọc dữ liệu theo phạm vi địa bàn
  // ─────────────────────────────────────────────────────────────────────────

  /**
   * Lấy danh sách phường/xã được phép xem của session hiện tại.
   * @returns {string[] | null} null = xem tất cả; array = danh sách phường được phép
   */
  function getAllowedPhuongXa() {
    if (!window.Auth) return null;
    const session = window.Auth.getSession();
    if (!session) return null;

    // Công an tỉnh → xem tất cả
    if (session.ma_vai_tro === 'CONG_AN_TINH') return null;

    // Công an xã/phường → lọc theo địa bàn
    if (session.pham_vi_quan_ly && Array.isArray(session.pham_vi_quan_ly.phuong_xa)) {
      return session.pham_vi_quan_ly.phuong_xa;
    }

    // Mặc định: không giới hạn
    return null;
  }

  /**
   * Lọc dataset theo trường phuong_xa của session.
   * @param {Array} dataset - mảng records có field `phuong_xa`
   * @returns {Array}
   */
  function filterByScope(dataset) {
    const allowed = getAllowedPhuongXa();
    if (!allowed) return dataset;
    return dataset.filter((item) => allowed.includes(item.phuong_xa));
  }

  // ─────────────────────────────────────────────────────────────────────────
  // PUBLIC API
  // ─────────────────────────────────────────────────────────────────────────

  /**
   * Trả về danh sách cơ sở kinh doanh đã map sang format cho co-so-du-lieu-cskd.js
   */
  function getBusinesses() {
    const scoped = filterByScope(ALL_BUSINESSES);
    return scoped.map((b, i) => ({
      code: b.ma_co_so,
      name: b.ten_co_so,
      type: b.ten_loai_hinh,
      address: b.dia_chi_day_du,
      owner: b.chu_co_so,
      status: b.trang_thai_hoat_dong,
      license: b.so_giay_chung_nhan_antt ? 'Đã cấp' : 'Chưa cấp',
      phone: b.phone,
      email: b.email,
      taxCode: `27008${10000 + i}`,
      regNo: `27008${10000 + i}-001`,
      estDate: '01/01/2020',
      risk: b.muc_do_rui_ro,
      officer: 'Theo phân công địa bàn',
      rooms: b.ma_loai_hinh === 'LUU_TRU' ? '12' : '-',
      capacity: '50',
      lat: b.lat,
      lng: b.lng,
      ownerId: `03708${800000 + i}`,
      phuong_xa: b.phuong_xa,
      don_vi_quan_ly: b.don_vi_quan_ly,
      // Raw fields
      ma_co_so: b.ma_co_so,
      so_giay_chung_nhan_antt: b.so_giay_chung_nhan_antt,
      muc_do_rui_ro: b.muc_do_rui_ro,
    }));
  }

  /**
   * Trả về danh sách hồ sơ đã được scope theo địa bàn
   */
  function getHoSo() {
    return filterByScope(ALL_HO_SO);
  }

  /**
   * Trả về danh sách kiểm tra cơ sở đã được scope theo địa bàn
   */
  function getKiemTra() {
    return filterByScope(ALL_KIEM_TRA);
  }

  /**
   * Trả về danh sách vi phạm đã được scope theo địa bàn
   */
  function getViPham() {
    return filterByScope(ALL_VI_PHAM);
  }

  /**
   * Trả về thông tin phạm vi địa bàn của session hiện tại (dùng hiển thị badge UI)
   */
  function getScopeLabel() {
    if (!window.Auth) return '';
    const session = window.Auth.getSession();
    if (!session) return '';
    if (session.ma_vai_tro === 'CONG_AN_TINH') return 'Toàn tỉnh Ninh Bình';
    const phuong = session.pham_vi_quan_ly && session.pham_vi_quan_ly.phuong_xa;
    if (phuong && phuong.length) return phuong.join(', ');
    return session.unit || '';
  }

  /**
   * Kiểm tra xem session hiện tại có phải Công an tỉnh không
   */
  function isTinhLevel() {
    if (!window.Auth) return false;
    const session = window.Auth.getSession();
    return session && session.ma_vai_tro === 'CONG_AN_TINH';
  }

  // Expose global
  window.AppData = {
    getBusinesses,
    getHoSo,
    getKiemTra,
    getViPham,
    getScopeLabel,
    isTinhLevel,
    getAllowedPhuongXa,
  };

})();
