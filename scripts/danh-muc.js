// Collapsible Sidebar logic
document.querySelector('#sidebarToggle')?.addEventListener('click', () => {
  document.querySelector('.desktop-shell')?.classList.toggle('is-collapsed');
});

// Topbar Dropdown toggling
const initMenuToggle = (btnId, menuId) => {
  const btn = document.getElementById(btnId);
  const menu = document.getElementById(menuId);
  if (!btn || !menu) return;
  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    const opened = btn.classList.toggle('is-open');
    menu.hidden = !opened;
  });
};
initMenuToggle('notificationToggle', 'notificationMenu');
initMenuToggle('userMenuToggle', 'userMenu');
document.addEventListener('click', () => {
  document.getElementById('notificationMenu').hidden = true;
  document.getElementById('userMenu').hidden = true;
  document.getElementById('notificationToggle')?.classList.remove('is-open');
  document.getElementById('userMenuToggle')?.classList.remove('is-open');
});

// Category Mock Data Mapping (Matches mockup exactly)
const categoriesData = {
  // 1. Địa bàn hành chính
  'db_tpnb': [
    { code: 'P_VAN_GIANG', name: 'Phường Vân Giang', desc: 'Phường Vân Giang, TP. Ninh Bình', status: 'Đang hoạt động' },
    { code: 'P_DONG_THANH', name: 'Phường Đông Thành', desc: 'Phường Đông Thành, TP. Ninh Bình', status: 'Đang hoạt động' },
    { code: 'P_THANH_BINH', name: 'Phường Thanh Bình', desc: 'Phường Thanh Bình, TP. Ninh Bình', status: 'Đang hoạt động' }
  ],
  'db_tptd': [
    { code: 'P_TRUNG_SON', name: 'Phường Trung Sơn', desc: 'Phường Trung Sơn, TP. Tam Điệp', status: 'Đang hoạt động' },
    { code: 'P_BAC_SON', name: 'Phường Bắc Sơn', desc: 'Phường Bắc Sơn, TP. Tam Điệp', status: 'Đang hoạt động' }
  ],
  'db_hhl': [
    { code: 'TT_THIEN_TON', name: 'Thị trấn Thiên Tôn', desc: 'Thị trấn Thiên Tôn, Huyện Hoa Lư', status: 'Đang hoạt động' },
    { code: 'X_TRUONG_YEN', name: 'Xã Trường Yên', desc: 'Xã Trường Yên, Huyện Hoa Lư', status: 'Đang hoạt động' }
  ],
  'db_hgv': [
    { code: 'TT_ME', name: 'Thị trấn Me', desc: 'Thị trấn Me, Huyện Gia Viễn', status: 'Đang hoạt động' },
    { code: 'X_GIA_VAN', name: 'Xã Gia Vân', desc: 'Xã Gia Vân, Huyện Gia Viễn', status: 'Đang hoạt động' }
  ],
  'db_hyk': [
    { code: 'TT_YEN_NINH', name: 'Thị trấn Yên Ninh', desc: 'Thị trấn Yên Ninh, Huyện Yên Khánh', status: 'Đang hoạt động' }
  ],
  'db_hym': [
    { code: 'TT_YEN_THINH', name: 'Thị trấn Yên Thịnh', desc: 'Thị trấn Yên Thịnh, Huyện Yên Mô', status: 'Đang hoạt động' }
  ],
  'db_hks': [
    { code: 'TT_PHAT_DIEM', name: 'Thị trấn Phát Diệm', desc: 'Thị trấn Phát Diệm, Huyện Kim Sơn', status: 'Đang hoạt động' }
  ],
  'db_hnq': [
    { code: 'TT_NHO_QUAN', name: 'Thị trấn Nho Quan', desc: 'Thị trấn Nho Quan, Huyện Nho Quan', status: 'Đang hoạt động' }
  ],

  // 2. Loại hình kinh doanh
  'lh_tat_ca': [
    { code: 'LH_LUU_TRU', name: 'Dịch vụ lưu trú', desc: 'Khách sạn, nhà nghỉ, căn hộ cho thuê, nhà trọ...', status: 'Đang hoạt động' },
    { code: 'LH_KARAOKE', name: 'Dịch vụ karaoke', desc: 'Phòng hát karaoke, vũ trường, quán bar...', status: 'Đang hoạt động' },
    { code: 'LH_MASSAGE', name: 'Dịch vụ massage', desc: 'Cơ sở massage, xông hơi, vật lý trị liệu...', status: 'Đang hoạt động' },
    { code: 'LH_CAM_DO', name: 'Kinh doanh cầm đồ', desc: 'Dịch vụ cầm cố tài sản, thế chấp...', status: 'Đang hoạt động' },
    { code: 'LH_BAO_VE', name: 'Dịch vụ bảo vệ', desc: 'Dịch vụ bảo vệ chuyên nghiệp, vệ sĩ...', status: 'Đang hoạt động' },
    { code: 'LH_GAS', name: 'Kinh doanh khí (gas)', desc: 'Kinh doanh gas LPG, chiết nạp gas...', status: 'Đang hoạt động' },
    { code: 'LH_GAME', name: 'Dịch vụ trò chơi điện tử', desc: 'Điểm cung cấp dịch vụ trò chơi điện tử công cộng', status: 'Đang hoạt động' },
    { code: 'LH_TAI_CHINH', name: 'Dịch vụ cho thuê tài chính', desc: 'Dịch vụ cho thuê tài chính có điều kiện', status: 'Đang hoạt động' }
  ],
  'lh_luu_tru': [
    { code: 'LH_KS_5S', name: 'Khách sạn 5 sao', desc: 'Khách sạn đạt chuẩn cao cấp 5 sao quốc tế', status: 'Đang hoạt động' },
    { code: 'LH_KS_3S', name: 'Khách sạn 3 sao', desc: 'Khách sạn đạt chuẩn trung cấp 3 sao', status: 'Đang hoạt động' },
    { code: 'LH_NHA_NGHI', name: 'Nhà nghỉ bình dân', desc: 'Cơ sở lưu trú quy mô nhỏ, phòng nghỉ ngắn ngày', status: 'Đang hoạt động' }
  ],
  'lh_karaoke': [
    { code: 'KR_PHONG_VIP', name: 'Phòng hát VIP', desc: 'Phòng karaoke diện tích lớn, âm thanh cao cấp', status: 'Đang hoạt động' },
    { code: 'KR_BINH_DAN', name: 'Phòng hát thường', desc: 'Phòng karaoke diện tích trung bình phục vụ phổ thông', status: 'Đang hoạt động' }
  ],
  'lh_massage': [
    { code: 'MS_VIP', name: 'Massage cao cấp', desc: 'Dịch vụ xông hơi, massage trị liệu tiêu chuẩn VIP', status: 'Đang hoạt động' },
    { code: 'MS_FOOT', name: 'Massage chân', desc: 'Cơ sở massage chuyên về bấm huyệt chân', status: 'Đang hoạt động' }
  ],
  'lh_cam_do': [
    { code: 'CD_XE_MAY', name: 'Cầm đồ xe máy', desc: 'Dịch vụ cầm cố các phương tiện mô tô, xe máy', status: 'Đang hoạt động' },
    { code: 'CD_OTO', name: 'Cầm đồ ô tô', desc: 'Dịch vụ cầm cố xe ô tô, xe bán tải', status: 'Đang hoạt động' }
  ],
  'lh_bao_ve': [
    { code: 'BV_MUC_TIEU', name: 'Bảo vệ mục tiêu cố định', desc: 'Dịch vụ bảo vệ tòa nhà, nhà máy, văn phòng', status: 'Đang hoạt động' },
    { code: 'BV_AP_TAI', name: 'Bảo vệ áp tải hàng hóa', desc: 'Bảo vệ vận chuyển tiền, vàng, tài sản quý', status: 'Đang hoạt động' }
  ],
  'lh_gas': [
    { code: 'GS_CUA_HANG', name: 'Cửa hàng bán lẻ gas', desc: 'Điểm kinh doanh, bán lẻ chai LPG chai', status: 'Đang hoạt động' },
    { code: 'GS_TRAM_NAP', name: 'Trạm chiết nạp gas', desc: 'Trạm nạp LPG vào chai hoặc xe bồn', status: 'Đang hoạt động' }
  ],
  'lh_game': [
    { code: 'GM_NET_NET', name: 'Tiệm Net công cộng', desc: 'Điểm kinh doanh máy vi tính chơi game công cộng', status: 'Đang hoạt động' }
  ],
  'lh_tai_chinh': [
    { code: 'TC_CHO_THUE', name: 'Cho thuê tài chính doanh nghiệp', desc: 'Cho thuê máy móc, thiết bị sản xuất', status: 'Đang hoạt động' }
  ],
  'lh_khac': [
    { code: 'KH_IN_AN', name: 'Dịch vụ in ấn', desc: 'Cơ sở photocopy, in ấn bao bì nhãn mác', status: 'Đang hoạt động' }
  ],

  // 3. Nhóm ngành nghề kinh doanh
  'nn_nhay_cam': [
    { code: 'NN_KARAOKE', name: 'Karaoke & Vũ trường', desc: 'Hoạt động giải trí nhạy cảm về tiếng ồn và tệ nạn', status: 'Đang hoạt động' }
  ],
  'nn_han_che': [
    { code: 'NN_CAM_DO', name: 'Cho vay cầm đồ', desc: 'Hạn chế trần lãi suất và kiểm soát nguồn gốc tài sản', status: 'Đang hoạt động' }
  ],

  // 4. Thủ tục hành chính
  'tt_cap_moi': [
    { code: 'TT_CM_01', name: 'Cấp mới ANTT lần đầu', desc: 'Thủ tục đề nghị cấp mới Giấy chứng nhận đủ điều kiện về ANTT', status: 'Đang hoạt động' }
  ],
  'tt_cap_doi': [
    { code: 'TT_CD_TEN', name: 'Cấp đổi do đổi tên cơ sở', desc: 'Thủ tục thay đổi tên gọi đăng ký kinh doanh', status: 'Đang hoạt động' }
  ],
  'tt_thu_hoi': [
    { code: 'TT_TH_CO_TH', name: 'Thu hồi có thời hạn', desc: 'Thu hồi Giấy chứng nhận ANTT từ 1 đến 6 tháng do vi phạm', status: 'Đang hoạt động' }
  ],

  // 5. Thành phần hồ sơ
  'hs_ca_nhan': [
    { code: 'GT_CCCD', name: 'Căn cước công dân', desc: 'Bản sao hợp lệ thẻ CCCD/Hộ chiếu người đứng đầu', status: 'Đang hoạt động' },
    { code: 'GT_LLTP', name: 'Phiếu lý lịch tư pháp', desc: 'Phiếu lý lịch tư pháp số 1 của người chịu trách nhiệm ANTT', status: 'Đang hoạt động' }
  ],
  'hs_doanh_nghiep': [
    { code: 'GP_DKKD', name: 'Giấy ĐKKD', desc: 'Bản sao Giấy chứng nhận đăng ký doanh nghiệp/hộ kinh doanh', status: 'Đang hoạt động' }
  ],

  // 6. Biểu mẫu
  'bm_bao_cao': [
    { code: 'BM_BC_THANG', name: 'Mẫu báo cáo tháng', desc: 'Báo cáo tình hình ANTT định kỳ hàng tháng của cơ sở', status: 'Đang hoạt động' }
  ],
  'bm_kiem_tra': [
    { code: 'BM_BB_KT', name: 'Biên bản kiểm tra ANTT', desc: 'Mẫu biên bản ghi nhận kết quả kiểm tra điều kiện ANTT', status: 'Đang hoạt động' }
  ],

  // 7. Mẫu checklist kiểm tra
  'cl_dinh_ky': [
    { code: 'CL_DK_LUTR', name: 'Checklist cơ sở lưu trú', desc: 'Các nội dung kiểm tra định kỳ đối với khách sạn, nhà nghỉ', status: 'Đang hoạt động' }
  ],
  'cl_dot_xuat': [
    { code: 'CL_DX_TIN_PA', name: 'Checklist theo tin phản ánh', desc: 'Nội dung kiểm tra đột xuất dựa trên thông tin tố giác', status: 'Đang hoạt động' }
  ],

  // 8. Loại giấy phép
  'gp_antt': [
    { code: 'GP_ANTT_GCN', name: 'Giấy chứng nhận ANTT', desc: 'Giấy chứng nhận đủ điều kiện về ANTT do Công an cấp', status: 'Đang hoạt động' }
  ],
  'gp_pccc': [
    { code: 'GP_PCCC_TD', name: 'Giấy thẩm duyệt PCCC', desc: 'Văn bản thẩm duyệt thiết kế và nghiệm thu PCCC', status: 'Đang hoạt động' }
  ],

  // 9. Loại vi phạm
  'vp_hanh_chinh': [
    { code: 'VP_HC_GIO', name: 'Vi phạm giờ hoạt động', desc: 'Phạt hành chính lỗi hoạt động quá giờ quy định', status: 'Đang hoạt động' },
    { code: 'VP_HC_KHAI_BAO', name: 'Vi phạm khai báo lưu trú', desc: 'Lỗi không đăng ký tạm trú cho khách lưu trú qua đêm', status: 'Đang hoạt động' }
  ],
  'vp_hinh_su': [
    { code: 'VP_HS_MA_TUY', name: 'Tổ chức sử dụng ma túy', desc: 'Chứa chấp, tổ chức sử dụng trái phép chất ma túy tại cơ sở', status: 'Đang hoạt động' }
  ],

  // 10. Chủ đề phản ánh kiến nghị
  'pa_co_so': [
    { code: 'PA_CS_ON_AO', name: 'Phản ánh cơ sở gây ồn ào', desc: 'Người dân phản ánh tiếng ồn karaoke lớn về đêm', status: 'Đang hoạt động' }
  ],
  'pa_dia_ban': [
    { code: 'PA_DB_LAN_CHIEM', name: 'Lấn chiếm lòng lề đường', desc: 'Phản ánh cơ sở đỗ xe, bày biện chiếm vỉa hè', status: 'Đang hoạt động' }
  ],

  // 11. Trạng thái hồ sơ
  'tths_chinh': [
    { code: 'HS_CHO_XL', name: 'Chờ xử lý', desc: 'Hồ sơ mới nộp đang xếp hàng chờ duyệt', status: 'Đang hoạt động' }
  ],
  'tths_bo_sung': [
    { code: 'HS_BS_TAI_LIEU', name: 'Chờ bổ sung tài liệu', desc: 'Hồ sơ thiếu giấy tờ, yêu cầu chủ cơ sở nộp thêm', status: 'Đang hoạt động' }
  ],

  // 12. Trạng thái cơ sở
  'ttcs_hoat_dong': [
    { code: 'CS_ACTIVE', name: 'Đang hoạt động', desc: 'Cơ sở đang kinh doanh bình thường', status: 'Đang hoạt động' }
  ],
  'ttcs_thanh_tra': [
    { code: 'CS_TT_OK', name: 'Đủ điều kiện', desc: 'Đã kiểm tra và kết luận cơ sở đủ điều kiện ANTT', status: 'Đang hoạt động' }
  ],

  // 13. Đơn vị tiếp nhận / xử lý
  'dv_tinh': [
    { code: 'DV_T_PC06', name: 'Phòng CS QLHC về TTXH', desc: 'Phòng nghiệp vụ QLHC thuộc Công an Tỉnh Ninh Bình', status: 'Đang hoạt động' }
  ],
  'dv_huyen': [
    { code: 'DV_H_CANB', name: 'Công an TP. Ninh Bình', desc: 'Cơ quan Công an cấp Thành phố Ninh Bình', status: 'Đang hoạt động' }
  ]
};

const groupTitles = {
  'db_tpnb': 'Thành phố Ninh Bình',
  'db_tptd': 'Thành phố Tam Điệp',
  'db_hhl': 'Huyện Hoa Lư',
  'db_hgv': 'Huyện Gia Viễn',
  'db_hyk': 'Huyện Yên Khánh',
  'db_hym': 'Huyện Yên Mô',
  'db_hks': 'Huyện Kim Sơn',
  'db_hnq': 'Huyện Nho Quan',
  'lh_tat_ca': 'Tất cả loại hình',
  'lh_luu_tru': 'Dịch vụ lưu trú',
  'lh_karaoke': 'Dịch vụ karaoke',
  'lh_massage': 'Dịch vụ massage',
  'lh_cam_do': 'Kinh doanh cầm đồ',
  'lh_bao_ve': 'Dịch vụ bảo vệ',
  'lh_gas': 'Kinh doanh khí (gas)',
  'lh_game': 'Dịch vụ trò chơi điện tử',
  'lh_tai_chinh': 'Dịch vụ cho thuê tài chính',
  'lh_khac': 'Khác',
  'nn_nhay_cam': 'Ngành nghề đặc biệt nhạy cảm',
  'nn_han_che': 'Ngành nghề hạn chế kinh doanh',
  'tt_cap_moi': 'Thủ tục cấp mới',
  'tt_cap_doi': 'Thủ tục cấp đổi',
  'tt_thu_hoi': 'Thủ tục thu hồi',
  'hs_ca_nhan': 'Giấy tờ pháp lý cá nhân',
  'hs_doanh_nghiep': 'Giấy tờ pháp lý doanh nghiệp',
  'bm_bao_cao': 'Biểu mẫu báo cáo',
  'bm_kiem_tra': 'Biểu mẫu kiểm tra',
  'cl_dinh_ky': 'Checklist định kỳ',
  'cl_dot_xuat': 'Checklist đột xuất',
  'gp_antt': 'Giấy phép ANTT',
  'gp_pccc': 'Giấy phép PCCC',
  'vp_hanh_chinh': 'Vi phạm hành chính',
  'vp_hinh_su': 'Vi phạm hình sự',
  'pa_co_so': 'Phản ánh cơ sở kinh doanh',
  'pa_dia_ban': 'Phản ánh trật tự địa bàn',
  'tths_chinh': 'Trạng thái xử lý chính',
  'tths_bo_sung': 'Trạng thái bổ sung',
  'ttcs_hoat_dong': 'Trạng thái hoạt động',
  'ttcs_thanh_tra': 'Trạng thái thanh tra',
  'dv_tinh': 'Đơn vị cấp tỉnh',
  'dv_huyen': 'Đơn vị cấp huyện'
};

let activeGroup = 'lh_tat_ca';
let filteredRecords = [];

const tableBody = document.getElementById('tableBody');
const tableCardHeader = document.getElementById('tableCardHeader');
const searchInput = document.getElementById('searchKeyword');

// Populate Table function
function renderTable() {
  const records = categoriesData[activeGroup] || [];
  const keyword = searchInput ? searchInput.value.trim().toLowerCase() : '';
  
  filteredRecords = records.filter(r => 
    r.code.toLowerCase().includes(keyword) || 
    r.name.toLowerCase().includes(keyword) || 
    (r.desc && r.desc.toLowerCase().includes(keyword))
  );

  if (tableCardHeader) {
    tableCardHeader.innerHTML = `<i data-lucide="list" class="h-4.5 w-4.5 text-blue-600"></i> Danh mục: ${groupTitles[activeGroup] || activeGroup}`;
  }
  
  if (!tableBody) return;

  if (filteredRecords.length === 0) {
    tableBody.innerHTML = `<tr><td colspan="6" class="p-4 text-center text-gray-500 font-medium bg-gray-50">Không tìm thấy danh mục phù hợp.</td></tr>`;
    const summary = document.getElementById('paginationSummary');
    if (summary) summary.textContent = "Hiển thị 0 trên 0 kết quả";
    return;
  }

  tableBody.innerHTML = filteredRecords.map((item, index) => {
    const badgeClass = item.status === 'Đang hoạt động' ? 'badge-green' : 'badge-gray';
    return `
      <tr class="hover:bg-slate-50 transition-colors">
        <td class="p-3 text-center text-gray-600 font-semibold">${index + 1}</td>
        <td class="p-3"><span class="code-link font-bold">${item.code}</span></td>
        <td class="p-3 font-semibold text-gray-900">${item.name}</td>
        <td class="p-3 text-gray-600 leading-normal">${item.desc || ''}</td>
        <td class="p-3 text-center">
          <span class="module-badge ${badgeClass}">${item.status}</span>
        </td>
        <td class="p-3 text-center flex items-center justify-center gap-1.5">
          <button onclick="editItem('${item.code}')" class="p-1 hover:bg-gray-100 rounded text-blue-600 transition" title="Chỉnh sửa"><i data-lucide="square-pen" class="h-4 w-4"></i></button>
          <button onclick="deleteItem('${item.code}')" class="p-1 hover:bg-gray-100 rounded text-red-600 transition" title="Xóa"><i data-lucide="trash-2" class="h-4 w-4"></i></button>
        </td>
      </tr>
    `;
  }).join('');

  const summary = document.getElementById('paginationSummary');
  if (summary) {
    summary.textContent = `Hiển thị 1-${filteredRecords.length} trên ${filteredRecords.length} kết quả`;
  }
  
  if (window.lucide) window.lucide.createIcons();
}

// Search input event
if (searchInput) {
  searchInput.addEventListener('input', renderTable);
}

// Modal Control logic
const itemModal = document.getElementById('itemModal');
const modalTitle = document.getElementById('modalTitle');
const modalForm = document.getElementById('modalForm');
const btnAddNew = document.getElementById('btnAddNew');
const btnCancelModal = document.getElementById('btnCancelModal');

let isEditing = false;
let editTargetCode = '';

if (btnAddNew) {
  btnAddNew.addEventListener('click', () => {
    isEditing = false;
    if (modalTitle) {
      modalTitle.innerHTML = `<i data-lucide="plus-circle" class="h-5 w-5 text-blue-600"></i> Thêm mới danh mục`;
    }
    document.getElementById('itemCode').value = '';
    document.getElementById('itemCode').disabled = false;
    document.getElementById('itemName').value = '';
    document.getElementById('itemDesc').value = '';
    document.getElementById('itemStatus').value = 'Đang hoạt động';
    if (itemModal) itemModal.hidden = false;
    if (window.lucide) window.lucide.createIcons();
  });
}

if (btnCancelModal) {
  btnCancelModal.addEventListener('click', () => {
    if (itemModal) itemModal.hidden = true;
  });
}

if (modalForm) {
  modalForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const code = document.getElementById('itemCode').value.trim();
    const name = document.getElementById('itemName').value.trim();
    const desc = document.getElementById('itemDesc').value.trim();
    const status = document.getElementById('itemStatus').value;

    if (isEditing) {
      // Find and edit record in categoryData
      const list = categoriesData[activeGroup];
      const record = list ? list.find(r => r.code === editTargetCode) : null;
      if (record) {
        record.name = name;
        record.desc = desc;
        record.status = status;
      }
    } else {
      // Add new record
      const list = categoriesData[activeGroup] || [];
      // Check if code duplicate
      if (list.some(r => r.code === code)) {
        alert('Mã danh mục này đã tồn tại trong hệ thống.');
        return;
      }
      list.push({ code, name, desc, status });
      categoriesData[activeGroup] = list;
    }

    if (itemModal) itemModal.hidden = true;
    renderTable();
  });
}

window.editItem = function(code) {
  isEditing = true;
  editTargetCode = code;
  const list = categoriesData[activeGroup];
  const record = list ? list.find(r => r.code === code) : null;
  if (record) {
    if (modalTitle) {
      modalTitle.innerHTML = `<i data-lucide="edit-3" class="h-5 w-5 text-blue-600"></i> Chỉnh sửa danh mục`;
    }
    document.getElementById('itemCode').value = record.code;
    document.getElementById('itemCode').disabled = true; // cannot change code
    document.getElementById('itemName').value = record.name;
    document.getElementById('itemDesc').value = record.desc || '';
    document.getElementById('itemStatus').value = record.status;
    if (itemModal) itemModal.hidden = false;
    if (window.lucide) window.lucide.createIcons();
  }
};

window.deleteItem = function(code) {
  if (confirm(`Bạn có chắc chắn muốn xóa danh mục ${code}?`)) {
    const list = categoriesData[activeGroup];
    if (list) {
      categoriesData[activeGroup] = list.filter(r => r.code !== code);
    }
    renderTable();
  }
};

// Initialize jsTree and Initial render
$(document).ready(function() {
  $('#jstree_container').jstree({
    'core': {
      'data': [
        {
          'id': 'dia_ban',
          'text': 'Địa bàn hành chính',
          'state': { 'opened': false },
          'children': [
            { 'id': 'db_tpnb', 'text': 'Thành phố Ninh Bình', 'icon': 'jstree-file' },
            { 'id': 'db_tptd', 'text': 'Thành phố Tam Điệp', 'icon': 'jstree-file' },
            { 'id': 'db_hhl', 'text': 'Huyện Hoa Lư', 'icon': 'jstree-file' },
            { 'id': 'db_hgv', 'text': 'Huyện Gia Viễn', 'icon': 'jstree-file' },
            { 'id': 'db_hyk', 'text': 'Huyện Yên Khánh', 'icon': 'jstree-file' },
            { 'id': 'db_hym', 'text': 'Huyện Yên Mô', 'icon': 'jstree-file' },
            { 'id': 'db_hks', 'text': 'Huyện Kim Sơn', 'icon': 'jstree-file' },
            { 'id': 'db_hnq', 'text': 'Huyện Nho Quan', 'icon': 'jstree-file' }
          ]
        },
        {
          'id': 'loai_hinh',
          'text': 'Loại hình kinh doanh',
          'state': { 'opened': true },
          'children': [
            { 'id': 'lh_tat_ca', 'text': 'Tất cả loại hình', 'icon': 'jstree-file', 'state': { 'selected': true } },
            { 'id': 'lh_luu_tru', 'text': 'Dịch vụ lưu trú', 'icon': 'jstree-file' },
            { 'id': 'lh_karaoke', 'text': 'Dịch vụ karaoke', 'icon': 'jstree-file' },
            { 'id': 'lh_massage', 'text': 'Dịch vụ massage', 'icon': 'jstree-file' },
            { 'id': 'lh_cam_do', 'text': 'Kinh doanh cầm đồ', 'icon': 'jstree-file' },
            { 'id': 'lh_bao_ve', 'text': 'Dịch vụ bảo vệ', 'icon': 'jstree-file' },
            { 'id': 'lh_gas', 'text': 'Kinh doanh khí (gas)', 'icon': 'jstree-file' },
            { 'id': 'lh_game', 'text': 'Dịch vụ trò chơi điện tử', 'icon': 'jstree-file' },
            { 'id': 'lh_tai_chinh', 'text': 'Dịch vụ cho thuê tài chính', 'icon': 'jstree-file' },
            { 'id': 'lh_khac', 'text': 'Khác', 'icon': 'jstree-file' }
          ]
        },
        {
          'id': 'nhom_nganh',
          'text': 'Nhóm ngành nghề kinh doanh',
          'state': { 'opened': false },
          'children': [
            { 'id': 'nn_nhay_cam', 'text': 'Ngành nghề đặc biệt nhạy cảm', 'icon': 'jstree-file' },
            { 'id': 'nn_han_che', 'text': 'Ngành nghề hạn chế kinh doanh', 'icon': 'jstree-file' }
          ]
        },
        {
          'id': 'thu_tuc',
          'text': 'Thủ tục hành chính',
          'state': { 'opened': false },
          'children': [
            { 'id': 'tt_cap_moi', 'text': 'Thủ tục cấp mới', 'icon': 'jstree-file' },
            { 'id': 'tt_cap_doi', 'text': 'Thủ tục cấp đổi', 'icon': 'jstree-file' },
            { 'id': 'tt_thu_hoi', 'text': 'Thủ tục thu hồi', 'icon': 'jstree-file' }
          ]
        },
        {
          'id': 'ho_so',
          'text': 'Thành phần hồ sơ',
          'state': { 'opened': false },
          'children': [
            { 'id': 'hs_ca_nhan', 'text': 'Giấy tờ pháp lý cá nhân', 'icon': 'jstree-file' },
            { 'id': 'hs_doanh_nghiep', 'text': 'Giấy tờ pháp lý doanh nghiệp', 'icon': 'jstree-file' }
          ]
        },
        {
          'id': 'bieu_mau',
          'text': 'Biểu mẫu',
          'state': { 'opened': false },
          'children': [
            { 'id': 'bm_bao_cao', 'text': 'Biểu mẫu báo cáo', 'icon': 'jstree-file' },
            { 'id': 'bm_kiem_tra', 'text': 'Biểu mẫu kiểm tra', 'icon': 'jstree-file' }
          ]
        },
        {
          'id': 'checklist',
          'text': 'Mẫu checklist kiểm tra',
          'state': { 'opened': false },
          'children': [
            { 'id': 'cl_dinh_ky', 'text': 'Checklist định kỳ', 'icon': 'jstree-file' },
            { 'id': 'cl_dot_xuat', 'text': 'Checklist đột xuất', 'icon': 'jstree-file' }
          ]
        },
        {
          'id': 'giay_phep',
          'text': 'Loại giấy phép',
          'state': { 'opened': false },
          'children': [
            { 'id': 'gp_antt', 'text': 'Giấy phép ANTT', 'icon': 'jstree-file' },
            { 'id': 'gp_pccc', 'text': 'Giấy phép PCCC', 'icon': 'jstree-file' }
          ]
        },
        {
          'id': 'vi_pham',
          'text': 'Loại vi phạm',
          'state': { 'opened': false },
          'children': [
            { 'id': 'vp_hanh_chinh', 'text': 'Vi phạm hành chính', 'icon': 'jstree-file' },
            { 'id': 'vp_hinh_su', 'text': 'Vi phạm hình sự', 'icon': 'jstree-file' }
          ]
        },
        {
          'id': 'chu_de_pa',
          'text': 'Chủ đề phản ánh kiến nghị',
          'state': { 'opened': false },
          'children': [
            { 'id': 'pa_co_so', 'text': 'Phản ánh cơ sở kinh doanh', 'icon': 'jstree-file' },
            { 'id': 'pa_dia_ban', 'text': 'Phản ánh trật tự địa bàn', 'icon': 'jstree-file' }
          ]
        },
        {
          'id': 'tt_ho_so',
          'text': 'Trạng thái hồ sơ',
          'state': { 'opened': false },
          'children': [
            { 'id': 'tths_chinh', 'text': 'Trạng thái xử lý chính', 'icon': 'jstree-file' },
            { 'id': 'tths_bo_sung', 'text': 'Trạng thái bổ sung', 'icon': 'jstree-file' }
          ]
        },
        {
          'id': 'tt_co_so',
          'text': 'Trạng thái cơ sở',
          'state': { 'opened': false },
          'children': [
            { 'id': 'ttcs_hoat_dong', 'text': 'Trạng thái hoạt động', 'icon': 'jstree-file' },
            { 'id': 'ttcs_thanh_tra', 'text': 'Trạng thái thanh tra', 'icon': 'jstree-file' }
          ]
        },
        {
          'id': 'don_vi',
          'text': 'Đơn vị tiếp nhận / xử lý',
          'state': { 'opened': false },
          'children': [
            { 'id': 'dv_tinh', 'text': 'Đơn vị cấp tỉnh', 'icon': 'jstree-file' },
            { 'id': 'dv_huyen', 'text': 'Đơn vị cấp huyện', 'icon': 'jstree-file' }
          ]
        }
      ],
      'themes': {
        'dots': false,
        'icons': true
      }
    },
    'plugins': ['search', 'types']
  });

  // jsTree selection event handler
  $('#jstree_container').on("select_node.jstree", function (e, data) {
    if (data.node.children.length === 0) { // It is a leaf node
      activeGroup = data.node.id;
      if (searchInput) searchInput.value = '';
      renderTable();
    }
  });

  // jsTree Search
  var to = false;
  $('#treeSearch').keyup(function () {
    if (to) { clearTimeout(to); }
    to = setTimeout(function () {
      var v = $('#treeSearch').val();
      $('#jstree_container').jstree(true).search(v);
    }, 250);
  });

  // Initial table render
  renderTable();
});
