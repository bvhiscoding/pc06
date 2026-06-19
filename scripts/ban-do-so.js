const notifications = [
  { title: 'Cơ sở sắp hết hạn giấy phép', text: '96 cơ sở cần rà soát giấy phép trong tháng này.', time: '5 phút trước', icon: 'triangle-alert' },
  { title: 'Cơ sở mới cập nhật vị trí', text: 'Karaoke Hoa Sen đã cập nhật tọa độ trên bản đồ.', time: '12 phút trước', icon: 'map-pin' },
  { title: 'Có phản ánh kiến nghị', text: 'Phát sinh phản ánh liên quan đến 2 cơ sở kinh doanh.', time: '30 phút trước', icon: 'message-square-warning' },
  { title: 'Lớp dữ liệu đã đồng bộ', text: 'Dữ liệu địa bàn TP. Ninh Bình đã được làm mới.', time: '1 giờ trước', icon: 'refresh-cw' },
  { title: 'Cảnh báo rủi ro cao', text: '21 cơ sở đang nằm trong nhóm cần theo dõi.', time: '2 giờ trước', icon: 'shield-alert' },
  { title: 'Cập nhật thống kê GIS', text: 'Tổng quan bản đồ đã được cập nhật.', time: '3 giờ trước', icon: 'bar-chart-3' },
  { title: 'Có lịch kiểm tra mới', text: 'Đội QLHC số 1 có 4 điểm kiểm tra trong tuần.', time: '4 giờ trước', icon: 'calendar-check' },
  { title: 'Cơ sở tạm dừng hoạt động', text: 'Nhà nghỉ Bình Minh chuyển trạng thái tạm dừng.', time: 'Hôm qua', icon: 'pause-circle' }
];

const facilities = [
  // 1. Karaoke (3 facilities)
  {
    id: 'karaoke-hoa-sen',
    name: 'Karaoke Hoa Sen',
    address: '123 Trần Hưng Đạo, P. Đông Thành',
    ward: 'P. Đông Thành',
    status: 'green',
    licenseStatus: 'Còn hiệu lực',
    type: 'Karaoke',
    officer: 'Nguyễn Văn B',
    phone: '0912 345 678',
    riskScore: 18,
    lastInspection: '12/05/2026',
    history: ['12/05/2026: Kiểm tra định kỳ, không phát hiện vi phạm.', '02/03/2026: Cập nhật hồ sơ phòng cháy chữa cháy.'],
    position: { lat: 20.2538, lng: 105.9742 },
    owner: 'Nguyễn Văn B',
    ratingAvg: 4.6,
    reviewCount: 128,
    photos: ['public/Kara/Kara1.jpg', 'public/Kara/Kara2.jpeg', 'public/Kara/Kara3.jpg']
  },
  {
    id: 'karaoke-luxury',
    name: 'Karaoke Luxury',
    address: '45 Lê Hồng Phong, P. Nam Thành',
    ward: 'P. Nam Thành',
    status: 'green',
    licenseStatus: 'Còn hiệu lực',
    type: 'Karaoke',
    officer: 'Nguyễn Văn B',
    phone: '0987 654 321',
    riskScore: 22,
    lastInspection: '10/04/2026',
    history: ['10/04/2026: Kiểm tra an ninh trật tự định kỳ.'],
    position: { lat: 20.2450, lng: 105.9800 },
    owner: 'Trần Văn C',
    ratingAvg: 4.5,
    reviewCount: 85,
    photos: ['public/Kara/Kara2.jpeg', 'public/Kara/Kara3.jpg']
  },
  {
    id: 'karaoke-hoa-mai',
    name: 'Karaoke Hoa Mai',
    address: '78 Đinh Tiên Hoàng, P. Đông Thành',
    ward: 'P. Đông Thành',
    status: 'purple',
    licenseStatus: 'Còn hiệu lực',
    type: 'Karaoke',
    officer: 'Lê Văn E',
    phone: '0905 111 222',
    riskScore: 85,
    lastInspection: '01/06/2026',
    history: ['01/06/2026: Lập biên bản về tiếng ồn vượt mức cho phép.', '15/04/2026: Nhắc nhở về giờ giấc hoạt động.'],
    position: { lat: 20.2525, lng: 105.9815 },
    owner: 'Vũ Văn H',
    ratingAvg: 3.8,
    reviewCount: 42,
    photos: ['public/Kara/Kara3.jpg']
  },

  // 2. Khách sạn (3 facilities)
  {
    id: 'khach-san-trang-an',
    name: 'Khách sạn Tràng An',
    address: '88 Trần Phú, P. Vân Giang',
    ward: 'P. Vân Giang',
    status: 'orange',
    licenseStatus: 'Sắp hết hạn',
    type: 'Khách sạn',
    officer: 'Phạm Thị D',
    phone: '0911 222 333',
    riskScore: 52,
    lastInspection: '08/05/2026',
    history: ['08/05/2026: Giấy phép ANTT còn 25 ngày hiệu lực.', '15/02/2026: Kiểm tra hồ sơ lưu trú.'],
    position: { lat: 20.2629, lng: 105.9912 },
    owner: 'Phạm Thị D',
    ratingAvg: 4.8,
    reviewCount: 214,
    photos: ['public/Hotel/Ht1.jpg', 'public/Hotel/Ht2.jpg', 'public/Hotel/Ht3.jpg']
  },
  {
    id: 'khach-san-the-vissai',
    name: 'Khách sạn The Vissai',
    address: '84 Trần Hưng Đạo, P. Tân Thành',
    ward: 'P. Tân Thành',
    status: 'green',
    licenseStatus: 'Còn hiệu lực',
    type: 'Khách sạn',
    officer: 'Phạm Thị D',
    phone: '0229 3894 567',
    riskScore: 12,
    lastInspection: '22/05/2026',
    history: ['22/05/2026: Kiểm tra liên ngành, đạt tiêu chuẩn tốt.'],
    position: { lat: 20.2515, lng: 105.9718 },
    owner: 'Công ty Vissai',
    ratingAvg: 4.7,
    reviewCount: 310,
    photos: ['public/Hotel/Ht2.jpg', 'public/Hotel/Ht3.jpg']
  },
  {
    id: 'khach-san-legend',
    name: 'Khách sạn Legend Ninh Bình',
    address: '177 Lê Thái Tổ, P. Nam Bình',
    ward: 'P. Nam Bình',
    status: 'green',
    licenseStatus: 'Còn hiệu lực',
    type: 'Khách sạn',
    officer: 'Vũ Thị F',
    phone: '0229 3899 888',
    riskScore: 15,
    lastInspection: '19/05/2026',
    history: ['19/05/2026: Kiểm tra an ninh trật tự định kỳ.'],
    position: { lat: 20.2380, lng: 105.9760 },
    owner: 'Lê Văn L',
    ratingAvg: 4.6,
    reviewCount: 150,
    photos: ['public/Hotel/Ht3.jpg', 'public/Hotel/Ht1.jpg']
  },

  // 3. Nhà nghỉ (3 facilities)
  {
    id: 'nha-nghi-binh-minh',
    name: 'Nhà nghỉ Bình Minh',
    address: '45 Lê Thái Tổ, P. Nam Thành',
    ward: 'P. Nam Thành',
    status: 'yellow',
    licenseStatus: 'Còn hiệu lực',
    type: 'Nhà nghỉ',
    officer: 'Trần Văn C',
    phone: '0988 112 233',
    riskScore: 35,
    lastInspection: '21/04/2026',
    history: ['21/04/2026: Nhắc nhở bổ sung sổ lưu trú.', '19/01/2026: Kiểm tra an ninh trật tự.'],
    position: { lat: 20.2487, lng: 105.9691 },
    owner: 'Trần Văn C',
    ratingAvg: 4.1,
    reviewCount: 76,
    photos: ['public/Nnghi/Nn1.jpg', 'public/Nnghi/Nn2.jpg', 'public/Nnghi/Nn3.jpg']
  },
  {
    id: 'nha-nghi-phuong-nam',
    name: 'Nhà nghỉ Phương Nam',
    address: '12 Nguyễn Công Trứ, P. Nam Bình',
    ward: 'P. Nam Bình',
    status: 'green',
    licenseStatus: 'Còn hiệu lực',
    type: 'Nhà nghỉ',
    officer: 'Vũ Thị F',
    phone: '0915 678 901',
    riskScore: 25,
    lastInspection: '14/03/2026',
    history: ['14/03/2026: Kiểm tra hồ sơ phòng nghỉ, đạt yêu cầu.'],
    position: { lat: 20.2395, lng: 105.9622 },
    owner: 'Nguyễn Văn P',
    ratingAvg: 4.0,
    reviewCount: 35,
    photos: ['public/Nnghi/Nn2.jpg', 'public/Nnghi/Nn3.jpg']
  },
  {
    id: 'nha-nghi-thanh-binh',
    name: 'Nhà nghỉ bình dân Thanh Bình',
    address: '29 Lương Văn Thăng, P. Vân Giang',
    ward: 'P. Vân Giang',
    status: 'red',
    licenseStatus: 'Hết hạn / Bị thu hồi',
    type: 'Nhà nghỉ',
    officer: 'Phạm Thị D',
    phone: '0979 333 444',
    riskScore: 78,
    lastInspection: '05/06/2026',
    history: ['05/06/2026: Quyết định tạm đình chỉ do giấy phép hết hạn và không đủ điều kiện PCCC.'],
    position: { lat: 20.2600, lng: 105.9840 },
    owner: 'Phạm Thanh B',
    ratingAvg: 3.2,
    reviewCount: 18,
    photos: ['public/Nnghi/Nn3.jpg', 'public/Nnghi/Nn1.jpg']
  },

  // 4. Massage (3 facilities)
  {
    id: 'massage-hoang-gia',
    name: 'Massage Hoàng Gia',
    address: '99 Đinh Tiên Hoàng, P. Nam Bình',
    ward: 'P. Nam Bình',
    status: 'gray',
    licenseStatus: 'Còn hiệu lực',
    type: 'Massage',
    officer: 'Vũ Thị F',
    phone: '0977 123 456',
    riskScore: 28,
    lastInspection: '27/03/2026',
    history: ['27/03/2026: Cơ sở thông báo tạm ngừng hoạt động.', '10/01/2026: Kiểm tra điều kiện kinh doanh.'],
    position: { lat: 20.2348, lng: 105.9634 },
    owner: 'Vũ Thị F',
    ratingAvg: 4.2,
    reviewCount: 63,
    photos: ['public/Ms/Ms1.jpg', 'public/Ms/Ms2.jpg', 'public/Ms/Ms3.jpg']
  },
  {
    id: 'massage-hoa-mai',
    name: 'Massage Hoa Mai',
    address: '215 Trần Hưng Đạo, P. Đông Thành',
    ward: 'P. Đông Thành',
    status: 'green',
    licenseStatus: 'Còn hiệu lực',
    type: 'Massage',
    officer: 'Nguyễn Văn B',
    phone: '0912 777 888',
    riskScore: 24,
    lastInspection: '02/05/2026',
    history: ['02/05/2026: Kiểm tra đột xuất, các nhân viên có đầy đủ chứng chỉ hành nghề.'],
    position: { lat: 20.2570, lng: 105.9780 },
    owner: 'Lê Thị M',
    ratingAvg: 4.3,
    reviewCount: 52,
    photos: ['public/Ms/Ms2.jpg', 'public/Ms/Ms3.jpg']
  },
  {
    id: 'massage-dai-duong',
    name: 'Massage Đại Dương',
    address: '67 Nguyễn Trãi, P. Nam Thành',
    ward: 'P. Nam Thành',
    status: 'yellow',
    licenseStatus: 'Còn hiệu lực',
    type: 'Massage',
    officer: 'Trần Văn C',
    phone: '0904 999 000',
    riskScore: 45,
    lastInspection: '12/04/2026',
    history: ['12/04/2026: Nhắc nhở khai báo lưu trú cho khách nghỉ qua đêm.'],
    position: { lat: 20.2490, lng: 105.9770 },
    owner: 'Trần Văn D',
    ratingAvg: 4.0,
    reviewCount: 29,
    photos: ['public/Ms/Ms3.jpg', 'public/Ms/Ms1.jpg']
  },

  // 5. Bar (2 facilities)
  {
    id: 'bar-new-night',
    name: 'Quán Bar New Night',
    address: '12 Nguyễn Huệ, P. Đông Thành',
    ward: 'P. Đông Thành',
    status: 'red',
    licenseStatus: 'Hết hạn / Bị thu hồi',
    type: 'Bar',
    officer: 'Lê Văn E',
    phone: '0904 555 666',
    riskScore: 82,
    lastInspection: '03/06/2026',
    history: ['03/06/2026: Phát hiện hoạt động quá giờ quy định.', '18/05/2026: Lập biên bản vi phạm tiếng ồn.'],
    position: { lat: 20.2418, lng: 105.9847 },
    owner: 'Lê Văn E',
    ratingAvg: 3.5,
    reviewCount: 49,
    photos: ['public/Bar/Bar1.jpg', 'public/Bar/Bar2.jpg', 'public/Bar/Bar3.jpg']
  },
  {
    id: 'bar-club-999',
    name: 'Club 999',
    address: '52 Vân Giang, P. Vân Giang',
    ward: 'P. Vân Giang',
    status: 'green',
    licenseStatus: 'Còn hiệu lực',
    type: 'Bar',
    officer: 'Phạm Thị D',
    phone: '0914 999 999',
    riskScore: 30,
    lastInspection: '20/05/2026',
    history: ['20/05/2026: Kiểm tra phòng cháy chữa cháy đạt tiêu chuẩn.'],
    position: { lat: 20.2605, lng: 105.9880 },
    owner: 'Nguyễn Văn C',
    ratingAvg: 4.4,
    reviewCount: 96,
    photos: ['public/Bar/Bar2.jpg', 'public/Bar/Bar3.jpg']
  },

  // 6. Cầm đồ (3 facilities)
  {
    id: 'cam-do-phat-loc',
    name: 'Cầm đồ Phát Lộc',
    address: '17 Lương Văn Tụy, P. Tân Thành',
    ward: 'P. Tân Thành',
    status: 'purple',
    licenseStatus: 'Còn hiệu lực',
    type: 'Cầm đồ',
    officer: 'Hoàng Văn G',
    phone: '0966 888 999',
    riskScore: 91,
    lastInspection: '05/06/2026',
    history: ['05/06/2026: Đưa vào diện theo dõi rủi ro cao.', '29/05/2026: Có phản ánh liên quan tài sản cầm cố.'],
    position: { lat: 20.2268, lng: 105.9797 },
    owner: 'Hoàng Văn G',
    ratingAvg: 3.9,
    reviewCount: 31,
    photos: ['public/Bar/Bar1.jpg', 'public/Bar/Bar2.jpg', 'public/Bar/Bar3.jpg']
  },
  {
    id: 'cam-do-anh-thu',
    name: 'Cầm đồ Anh Thư',
    address: '124 Lê Hồng Phong, P. Nam Thành',
    ward: 'P. Nam Thành',
    status: 'green',
    licenseStatus: 'Còn hiệu lực',
    type: 'Cầm đồ',
    officer: 'Trần Văn C',
    phone: '0982 456 789',
    riskScore: 20,
    lastInspection: '18/04/2026',
    history: ['18/04/2026: Kiểm tra sổ sách ghi chép, không phát hiện sai phạm.'],
    position: { lat: 20.2470, lng: 105.9650 },
    owner: 'Phạm Anh T',
    ratingAvg: 4.2,
    reviewCount: 15,
    photos: ['public/Hotel/Ht1.jpg']
  },
  {
    id: 'cam-do-hung-thinh',
    name: 'Cầm đồ Hùng Thịnh',
    address: '22 Lương Văn Tụy, P. Tân Thành',
    ward: 'P. Tân Thành',
    status: 'yellow',
    licenseStatus: 'Còn hiệu lực',
    type: 'Cầm đồ',
    officer: 'Hoàng Văn G',
    phone: '0977 654 321',
    riskScore: 48,
    lastInspection: '11/05/2026',
    history: ['11/05/2026: Nhắc nhở lưu kho tài sản đúng quy định an toàn cháy nổ.'],
    position: { lat: 20.2305, lng: 105.9710 },
    owner: 'Lê Hùng T',
    ratingAvg: 3.8,
    reviewCount: 22,
    photos: ['public/Hotel/Ht2.jpg']
  },

  // 7. Khắc dấu (2 facilities)
  {
    id: 'khac-dau-minh-anh',
    name: 'Khắc dấu Minh Anh',
    address: '52 Trần Hưng Đạo, P. Đông Thành',
    ward: 'P. Đông Thành',
    status: 'green',
    licenseStatus: 'Còn hiệu lực',
    type: 'Khắc dấu',
    officer: 'Nguyễn Văn B',
    phone: '0915 222 333',
    riskScore: 10,
    lastInspection: '08/04/2026',
    history: ['08/04/2026: Kiểm tra định kỳ quy trình khắc dấu và quản lý phôi dấu.'],
    position: { lat: 20.2520, lng: 105.9760 },
    owner: 'Nguyễn Minh A',
    ratingAvg: 4.5,
    reviewCount: 19,
    photos: ['public/Hotel/Ht3.jpg']
  },
  {
    id: 'khac-dau-ninh-binh',
    name: 'Cơ sở Khắc dấu Ninh Bình',
    address: '110 Đinh Tiên Hoàng, P. Nam Bình',
    ward: 'P. Nam Bình',
    status: 'green',
    licenseStatus: 'Còn hiệu lực',
    type: 'Khắc dấu',
    officer: 'Vũ Thị F',
    phone: '0904 888 777',
    riskScore: 15,
    lastInspection: '22/03/2026',
    history: ['22/03/2026: Kiểm tra sổ sách khách hàng đặt khắc dấu.'],
    position: { lat: 20.2310, lng: 105.9680 },
    owner: 'Trần Khắc D',
    ratingAvg: 4.1,
    reviewCount: 12,
    photos: ['public/Hotel/Ht1.jpg']
  },

  // 8. Dịch vụ bảo vệ (3 facilities)
  {
    id: 'bao-ve-hoa-lu',
    name: 'Dịch vụ bảo vệ Hoa Lư',
    address: '45 Lương Văn Tụy, P. Tân Thành',
    ward: 'P. Tân Thành',
    status: 'green',
    licenseStatus: 'Còn hiệu lực',
    type: 'Dịch vụ bảo vệ',
    officer: 'Hoàng Văn G',
    phone: '0912 999 111',
    riskScore: 12,
    lastInspection: '15/05/2026',
    history: ['15/05/2026: Đạt chứng nhận đủ điều kiện an ninh trật tự.'],
    position: { lat: 20.2585, lng: 105.9702 },
    owner: 'Vũ Quốc H',
    ratingAvg: 4.8,
    reviewCount: 40,
    photos: ['public/Hotel/Ht2.jpg']
  },
  {
    id: 'bao-ve-thang-long',
    name: 'Bảo vệ Thăng Long',
    address: '89 Lê Hồng Phong, P. Nam Thành',
    ward: 'P. Nam Thành',
    status: 'green',
    licenseStatus: 'Còn hiệu lực',
    type: 'Dịch vụ bảo vệ',
    officer: 'Trần Văn C',
    phone: '0978 555 666',
    riskScore: 18,
    lastInspection: '12/04/2026',
    history: ['12/04/2026: Kiểm tra danh sách nhân viên bảo vệ có chứng chỉ nghiệp vụ.'],
    position: { lat: 20.2435, lng: 105.9790 },
    owner: 'Nguyễn Thăng L',
    ratingAvg: 4.5,
    reviewCount: 33,
    photos: ['public/Hotel/Ht3.jpg']
  },
  {
    id: 'bao-ve-hoang-gia',
    name: 'Bảo vệ Hoàng Gia',
    address: '223 Đinh Tiên Hoàng, P. Đông Thành',
    ward: 'P. Đông Thành',
    status: 'yellow',
    licenseStatus: 'Còn hiệu lực',
    type: 'Dịch vụ bảo vệ',
    officer: 'Nguyễn Văn B',
    phone: '0903 444 555',
    riskScore: 32,
    lastInspection: '19/05/2026',
    history: ['19/05/2026: Nhắc nhở cập nhật hồ sơ lý lịch nhân viên bảo vệ mới tuyển dụng.'],
    position: { lat: 20.2455, lng: 105.9830 },
    owner: 'Phạm Gia B',
    ratingAvg: 4.0,
    reviewCount: 14,
    photos: ['public/Hotel/Ht1.jpg']
  },

  // 9. In ấn (3 facilities)
  {
    id: 'nha-in-ninh-binh',
    name: 'Nhà in Ninh Bình',
    address: '14 Trần Phú, P. Vân Giang',
    ward: 'P. Vân Giang',
    status: 'green',
    licenseStatus: 'Còn hiệu lực',
    type: 'In ấn',
    officer: 'Phạm Thị D',
    phone: '0229 3872 111',
    riskScore: 10,
    lastInspection: '20/04/2026',
    history: ['20/04/2026: Cơ sở in ấn xuất bản phẩm chấp hành đúng luật.'],
    position: { lat: 20.2612, lng: 105.9825 },
    owner: 'Nhà nước',
    ratingAvg: 4.7,
    reviewCount: 26,
    photos: ['public/Hotel/Ht2.jpg']
  },
  {
    id: 'in-quang-cao-thanh-cong',
    name: 'In ấn quảng cáo Thành Công',
    address: '150 Trần Hưng Đạo, P. Đông Thành',
    ward: 'P. Đông Thành',
    status: 'green',
    licenseStatus: 'Còn hiệu lực',
    type: 'In ấn',
    officer: 'Nguyễn Văn B',
    phone: '0912 345 543',
    riskScore: 15,
    lastInspection: '02/05/2026',
    history: ['02/05/2026: Kiểm tra về điều kiện bảo vệ môi trường và PCCC.'],
    position: { lat: 20.2505, lng: 105.9755 },
    owner: 'Đỗ Thành C',
    ratingAvg: 4.4,
    reviewCount: 18,
    photos: ['public/Hotel/Ht3.jpg']
  },
  {
    id: 'in-gia-bao',
    name: 'In ấn nhanh Gia Bảo',
    address: '56 Lương Văn Tụy, P. Tân Thành',
    ward: 'P. Tân Thành',
    status: 'orange',
    licenseStatus: 'Sắp hết hạn',
    type: 'In ấn',
    officer: 'Hoàng Văn G',
    phone: '0988 888 777',
    riskScore: 40,
    lastInspection: '14/05/2026',
    history: ['14/05/2026: Nhắc nhở làm thủ tục gia hạn Giấy phép hoạt động ngành in.'],
    position: { lat: 20.2540, lng: 105.9690 },
    owner: 'Nguyễn Gia B',
    ratingAvg: 4.1,
    reviewCount: 9,
    photos: ['public/Hotel/Ht1.jpg']
  },

  // 10. Trò chơi điện tử (3 facilities)
  {
    id: 'net-gaming-center',
    name: 'Net Gaming Center',
    address: '77 Lương Văn Tụy, P. Tân Thành',
    ward: 'P. Tân Thành',
    status: 'green',
    licenseStatus: 'Còn hiệu lực',
    type: 'Trò chơi điện tử',
    officer: 'Hoàng Văn G',
    phone: '0944 555 666',
    riskScore: 20,
    lastInspection: '08/05/2026',
    history: ['08/05/2026: Kiểm tra giờ đóng cửa và quy định về khoảng cách trường học.'],
    position: { lat: 20.2555, lng: 105.9710 },
    owner: 'Trần Văn N',
    ratingAvg: 4.6,
    reviewCount: 75,
    photos: ['public/Hotel/Ht2.jpg']
  },
  {
    id: 'cyber-game-ninh-binh',
    name: 'Cyber Game Ninh Bình',
    address: '15 Lê Hồng Phong, P. Nam Thành',
    ward: 'P. Nam Thành',
    status: 'green',
    licenseStatus: 'Còn hiệu lực',
    type: 'Trò chơi điện tử',
    officer: 'Trần Văn C',
    phone: '0976 123 789',
    riskScore: 18,
    lastInspection: '21/04/2026',
    history: ['21/04/2026: Điểm game công cộng chấp hành tốt các quy định.'],
    position: { lat: 20.2425, lng: 105.9685 },
    owner: 'Nguyễn Hoài N',
    ratingAvg: 4.3,
    reviewCount: 54,
    photos: ['public/Hotel/Ht3.jpg']
  },
  {
    id: 'gaming-club-new-world',
    name: 'Gaming Club New World',
    address: '2 Lê Thái Tổ, P. Nam Thành',
    ward: 'P. Nam Thành',
    status: 'purple',
    licenseStatus: 'Còn hiệu lực',
    type: 'Trò chơi điện tử',
    officer: 'Trần Văn C',
    phone: '0909 888 888',
    riskScore: 88,
    lastInspection: '01/06/2026',
    history: ['01/06/2026: Phát hiện mở cửa quá 22h và có học sinh chơi game trong giờ học.'],
    position: { lat: 20.2415, lng: 105.9610 },
    owner: 'Vũ Thế W',
    ratingAvg: 3.5,
    reviewCount: 38,
    photos: ['public/Hotel/Ht1.jpg']
  },

  // 11. Casino (2 facilities)
  {
    id: 'casino-trang-an-resort',
    name: 'Casino Tràng An Resort',
    address: 'Khu du lịch sinh thái Tràng An, P. Vân Giang',
    ward: 'P. Vân Giang',
    status: 'green',
    licenseStatus: 'Còn hiệu lực',
    type: 'Casino',
    officer: 'Phạm Thị D',
    phone: '0229 3888 999',
    riskScore: 15,
    lastInspection: '28/05/2026',
    history: ['28/05/2026: Kiểm tra quản lý người nước ngoài vào chơi và đổi thưởng.'],
    position: { lat: 20.2660, lng: 105.9960 },
    owner: 'Tập đoàn Tràng An',
    ratingAvg: 4.9,
    reviewCount: 120,
    photos: ['public/Hotel/Ht2.jpg']
  },
  {
    id: 'club-vegas-ninh-binh',
    name: 'Club Vegas Ninh Bình',
    address: '15 Lê Hồng Phong, P. Tân Thành',
    ward: 'P. Tân Thành',
    status: 'yellow',
    licenseStatus: 'Còn hiệu lực',
    type: 'Casino',
    officer: 'Hoàng Văn G',
    phone: '0912 345 999',
    riskScore: 35,
    lastInspection: '05/05/2026',
    history: ['05/05/2026: Nhắc nhở lưu trữ lịch sử camera giám sát khu vực đổi thưởng đầy đủ.'],
    position: { lat: 20.2510, lng: 105.9730 },
    owner: 'Vương Đại K',
    ratingAvg: 4.2,
    reviewCount: 45,
    photos: ['public/Hotel/Ht3.jpg']
  },

  // 12. Phẫu thuật thẩm mỹ (2 facilities)
  {
    id: 'tham-my-ngoc-dung',
    name: 'Thẩm mỹ viện Ngọc Dung',
    address: '220 Đinh Tiên Hoàng, P. Đông Thành',
    ward: 'P. Đông Thành',
    status: 'green',
    licenseStatus: 'Còn hiệu lực',
    type: 'Phẫu thuật thẩm mỹ',
    officer: 'Nguyễn Văn B',
    phone: '0933 555 666',
    riskScore: 22,
    lastInspection: '12/05/2026',
    history: ['12/05/2026: Đầy đủ giấy phép hoạt động và chứng chỉ hành nghề của bác sĩ phẫu thuật.'],
    position: { lat: 20.2545, lng: 105.9795 },
    owner: 'Vũ Thị D',
    ratingAvg: 4.7,
    reviewCount: 88,
    photos: ['public/Hotel/Ht1.jpg']
  },
  {
    id: 'tham-my-kangnam',
    name: 'Viện thẩm mỹ Kangnam',
    address: '42 Trần Hưng Đạo, P. Nam Bình',
    ward: 'P. Nam Bình',
    status: 'orange',
    licenseStatus: 'Sắp hết hạn',
    type: 'Phẫu thuật thẩm mỹ',
    officer: 'Vũ Thị F',
    phone: '0915 999 123',
    riskScore: 45,
    lastInspection: '26/04/2026',
    history: ['26/04/2026: Kiểm tra trang thiết bị y tế và điều kiện khử trùng khép kín.'],
    position: { lat: 20.2330, lng: 105.9605 },
    owner: 'Nguyễn Kang N',
    ratingAvg: 4.4,
    reviewCount: 65,
    photos: ['public/Hotel/Ht2.jpg']
  },

  // 13. Chăm sóc da (2 facilities)
  {
    id: 'spa-thu-cuc',
    name: 'Spa Thu Cúc Ninh Bình',
    address: '89 Lương Văn Tụy, P. Đông Thành',
    ward: 'P. Đông Thành',
    status: 'green',
    licenseStatus: 'Còn hiệu lực',
    type: 'Chăm sóc da',
    officer: 'Nguyễn Văn B',
    phone: '0911 345 678',
    riskScore: 15,
    lastInspection: '10/05/2026',
    history: ['10/05/2026: Kiểm tra chất lượng sản phẩm mỹ phẩm sử dụng tại spa.'],
    position: { lat: 20.2562, lng: 105.9735 },
    owner: 'Nguyễn Thị C',
    ratingAvg: 4.8,
    reviewCount: 102,
    photos: ['public/Hotel/Ht3.jpg']
  },
  {
    id: 'seoul-spa-ninh-binh',
    name: 'Seoul Spa Ninh Bình',
    address: '14 Lê Thái Tổ, P. Nam Thành',
    ward: 'P. Nam Thành',
    status: 'green',
    licenseStatus: 'Còn hiệu lực',
    type: 'Chăm sóc da',
    officer: 'Trần Văn C',
    phone: '0966 555 444',
    riskScore: 18,
    lastInspection: '18/04/2026',
    history: ['18/04/2026: Đạt tiêu chuẩn chất lượng dịch vụ chăm sóc thẩm mỹ.'],
    position: { lat: 20.2465, lng: 105.9785 },
    owner: 'Seoul Spa Group',
    ratingAvg: 4.5,
    reviewCount: 74,
    photos: ['public/Hotel/Ht1.jpg']
  },

  // 14. Kinh doanh pháo hoa (2 facilities)
  {
    id: 'phao-hoa-z121-nb',
    name: 'Đại lý Pháo hoa Z121 Ninh Bình',
    address: '99 Lương Văn Tụy, P. Tân Thành',
    ward: 'P. Tân Thành',
    status: 'green',
    licenseStatus: 'Còn hiệu lực',
    type: 'Kinh doanh pháo hoa',
    officer: 'Hoàng Văn G',
    phone: '0912 121 121',
    riskScore: 25,
    lastInspection: '24/05/2026',
    history: ['24/05/2026: Kiểm tra đặc biệt về an toàn kho bãi và tủ bảo quản chống cháy nổ.'],
    position: { lat: 20.2502, lng: 105.9680 },
    owner: 'Bộ Quốc Phòng / Đỗ Văn Pháo',
    ratingAvg: 4.9,
    reviewCount: 200,
    photos: ['public/Hotel/Ht2.jpg']
  },
  {
    id: 'phao-hoa-nam-binh',
    name: 'Cửa hàng Pháo hoa Bộ Quốc Phòng',
    address: '42 Đinh Tiên Hoàng, P. Nam Bình',
    ward: 'P. Nam Bình',
    status: 'yellow',
    licenseStatus: 'Còn hiệu lực',
    type: 'Kinh doanh pháo hoa',
    officer: 'Vũ Thị F',
    phone: '0983 121 121',
    riskScore: 45,
    lastInspection: '10/05/2026',
    history: ['10/05/2026: Nhắc nhở bổ sung biển cảnh báo cấm lửa tại cửa hàng kinh doanh.'],
    position: { lat: 20.2360, lng: 105.9655 },
    owner: 'Nguyễn Văn Lửa',
    ratingAvg: 4.4,
    reviewCount: 55,
    photos: ['public/Hotel/Ht3.jpg']
  },

  // 15. Súng bắn sơn (2 facilities)
  {
    id: 'paintball-dong-thanh',
    name: 'CLB Súng bắn sơn Ninh Bình',
    address: 'Công viên Đông Thành, P. Đông Thành',
    ward: 'P. Đông Thành',
    status: 'green',
    licenseStatus: 'Còn hiệu lực',
    type: 'Súng bắn sơn',
    officer: 'Nguyễn Văn B',
    phone: '0904 123 321',
    riskScore: 28,
    lastInspection: '15/05/2026',
    history: ['15/05/2026: Kiểm tra quản lý lưu kho súng bắn sơn, đạn màu và đồ bảo hộ.'],
    position: { lat: 20.2680, lng: 105.9850 },
    owner: 'CLB Paintball',
    ratingAvg: 4.6,
    reviewCount: 38,
    photos: ['public/Hotel/Ht1.jpg']
  },
  {
    id: 'paintball-trang-an',
    name: 'Khu du lịch thể thao Paintball',
    address: 'Đường Tràng An, P. Tân Thành',
    ward: 'P. Tân Thành',
    status: 'gray',
    licenseStatus: 'Còn hiệu lực',
    type: 'Súng bắn sơn',
    officer: 'Hoàng Văn G',
    phone: '0915 456 654',
    riskScore: 30,
    lastInspection: '12/03/2026',
    history: ['12/03/2026: Cơ sở xin tạm dừng hoạt động sân bắn ngoài trời để cải tạo.'],
    position: { lat: 20.2280, lng: 105.9720 },
    owner: 'Trần Paint B',
    ratingAvg: 4.0,
    reviewCount: 22,
    photos: ['public/Hotel/Ht2.jpg']
  },

  // 16. Công cụ hỗ trợ (2 facilities)
  {
    id: 'ccht-a-dong',
    name: 'Thiết bị an ninh Á Đông',
    address: '152 Lương Văn Thăng, P. Đông Thành',
    ward: 'P. Đông Thành',
    status: 'green',
    licenseStatus: 'Còn hiệu lực',
    type: 'Công cụ hỗ trợ',
    officer: 'Nguyễn Văn B',
    phone: '0229 3888 123',
    riskScore: 20,
    lastInspection: '25/04/2026',
    history: ['25/04/2026: Kiểm tra định kỳ sổ đăng ký và giấy phép của các đơn vị mua dùi cui, còng số 8.'],
    position: { lat: 20.2590, lng: 105.9775 },
    owner: 'Công ty Cổ phần Á Đông',
    ratingAvg: 4.7,
    reviewCount: 15,
    photos: ['public/Hotel/Ht3.jpg']
  },
  {
    id: 'ccht-viet-nam',
    name: 'Cơ sở công cụ hỗ trợ Việt Nam',
    address: '88 Lê Hồng Phong, P. Nam Thành',
    ward: 'P. Nam Thành',
    status: 'yellow',
    licenseStatus: 'Còn hiệu lực',
    type: 'Công cụ hỗ trợ',
    officer: 'Trần Văn C',
    phone: '0983 222 111',
    riskScore: 35,
    lastInspection: '12/05/2026',
    history: ['12/05/2026: Nhắc nhở lưu trữ bản sao giấy phép mua của khách hàng trong thời gian 5 năm.'],
    position: { lat: 20.2400, lng: 105.9715 },
    owner: 'Lê Văn Khiên',
    ratingAvg: 4.1,
    reviewCount: 10,
    photos: ['public/Hotel/Ht1.jpg']
  },

  // 17. Vật liệu nổ công nghiệp (2 facilities)
  {
    id: 'vln-ninh-binh',
    name: 'Vật liệu nổ công nghiệp Ninh Bình',
    address: 'Phố Vân Giang, P. Vân Giang',
    ward: 'P. Vân Giang',
    status: 'green',
    licenseStatus: 'Còn hiệu lực',
    type: 'Vật liệu nổ công nghiệp',
    officer: 'Phạm Thị D',
    phone: '0229 3871 564',
    riskScore: 30,
    lastInspection: '04/06/2026',
    history: ['04/06/2026: Đánh giá cao công tác an toàn kỹ thuật phòng chống cháy nổ tại kho chứa thuốc nổ.'],
    position: { lat: 20.2640, lng: 105.9900 },
    owner: 'Tổng công ty Vật liệu nổ',
    ratingAvg: 4.8,
    reviewCount: 18,
    photos: ['public/Hotel/Ht2.jpg']
  },
  {
    id: 'kho-vln-so1',
    name: 'Kho vật liệu nổ công nghiệp số 1',
    address: 'Khu công nghiệp Khánh Phú, P. Tân Thành',
    ward: 'P. Tân Thành',
    status: 'yellow',
    licenseStatus: 'Còn hiệu lực',
    type: 'Vật liệu nổ công nghiệp',
    officer: 'Hoàng Văn G',
    phone: '0911 000 111',
    riskScore: 42,
    lastInspection: '18/05/2026',
    history: ['18/05/2026: Nhắc nhở việc niêm yết quy trình vận chuyển vật liệu nổ trên các xe chuyên dụng.'],
    position: { lat: 20.2230, lng: 105.9750 },
    owner: 'Công ty Khai khoáng Ninh Bình',
    ratingAvg: 4.3,
    reviewCount: 8,
    photos: ['public/Hotel/Ht3.jpg']
  },

  // 18. Tiền chất thuốc nổ (2 facilities)
  {
    id: 'hoa-chat-nb',
    name: 'Hóa chất công nghiệp Ninh Bình',
    address: 'Khu công nghiệp Phúc Sơn, P. Tân Thành',
    ward: 'P. Tân Thành',
    status: 'green',
    licenseStatus: 'Còn hiệu lực',
    type: 'Tiền chất thuốc nổ',
    officer: 'Hoàng Văn G',
    phone: '0229 3879 999',
    riskScore: 28,
    lastInspection: '22/05/2026',
    history: ['22/05/2026: Các tiền chất thuốc nổ (Amoni Nitrat) được bảo quản đúng tiêu chuẩn quy chuẩn kỹ thuật.'],
    position: { lat: 20.2550, lng: 105.9660 },
    owner: 'Cty Hóa chất Ninh Bình',
    ratingAvg: 4.5,
    reviewCount: 14,
    photos: ['public/Hotel/Ht1.jpg']
  },
  {
    id: 'hoa-chat-nam-binh',
    name: 'Cty hóa chất tiền chất nổ Nam Bình',
    address: '15 Nguyễn Huệ, P. Nam Bình',
    ward: 'P. Nam Bình',
    status: 'orange',
    licenseStatus: 'Sắp hết hạn',
    type: 'Tiền chất thuốc nổ',
    officer: 'Vũ Thị F',
    phone: '0974 555 444',
    riskScore: 50,
    lastInspection: '10/05/2026',
    history: ['10/05/2026: Đề nghị làm thủ tục cấp đổi giấy chứng nhận đủ điều kiện ANTT trước khi hết hạn.'],
    position: { lat: 20.2325, lng: 105.9640 },
    owner: 'Phạm Văn Acid',
    ratingAvg: 3.9,
    reviewCount: 7,
    photos: ['public/Hotel/Ht2.jpg']
  },

  // 19. Thiết bị gây nhiễu, phá sóng (2 facilities)
  {
    id: 'thiet-bi-tran-vu',
    name: 'Điện tử viễn thông Trấn Vũ',
    address: '88 Trần Hưng Đạo, P. Đông Thành',
    ward: 'P. Đông Thành',
    status: 'green',
    licenseStatus: 'Còn hiệu lực',
    type: 'Thiết bị gây nhiễu, phá sóng',
    officer: 'Nguyễn Văn B',
    phone: '0912 345 567',
    riskScore: 20,
    lastInspection: '02/06/2026',
    history: ['02/06/2026: Kiểm tra nguồn gốc nhập khẩu và mục đích bán thiết bị gây nhiễu cho các cơ quan chức năng.'],
    position: { lat: 20.2475, lng: 105.9810 },
    owner: 'Vũ Văn Trấn',
    ratingAvg: 4.6,
    reviewCount: 20,
    photos: ['public/Hotel/Ht3.jpg']
  },
  {
    id: 'thiet-bi-nam-thanh',
    name: 'Cơ sở thiết bị vô tuyến điện Nam Thành',
    address: '54 Lê Thái Tổ, P. Nam Thành',
    ward: 'P. Nam Thành',
    status: 'yellow',
    licenseStatus: 'Còn hiệu lực',
    type: 'Thiết bị gây nhiễu, phá sóng',
    officer: 'Trần Văn C',
    phone: '0983 555 111',
    riskScore: 38,
    lastInspection: '14/04/2026',
    history: ['14/04/2026: Nhắc nhở cập nhật danh mục máy phát vô tuyến và máy phá sóng lưu kho.'],
    position: { lat: 20.2445, lng: 105.9705 },
    owner: 'Trần Thanh Sóng',
    ratingAvg: 4.2,
    reviewCount: 9,
    photos: ['public/Hotel/Ht1.jpg']
  },

  // 20. Thiết bị định vị, phát tín hiệu (2 facilities)
  {
    id: 'gps-ninh-binh',
    name: 'Định vị GPS Ninh Bình',
    address: '33 Lương Văn Tụy, P. Tân Thành',
    ward: 'P. Tân Thành',
    status: 'green',
    licenseStatus: 'Còn hiệu lực',
    type: 'Thiết bị định vị, phát tín hiệu',
    officer: 'Hoàng Văn G',
    phone: '0904 999 888',
    riskScore: 12,
    lastInspection: '05/05/2026',
    history: ['05/05/2026: Cơ sở bán thiết bị giám sát hành trình cho xe vận tải đạt chuẩn quy định.'],
    position: { lat: 20.2512, lng: 105.9740 },
    owner: 'Nguyễn Định Vị',
    ratingAvg: 4.7,
    reviewCount: 52,
    photos: ['public/Hotel/Ht2.jpg']
  },
  {
    id: 'thiet-bi-tin-hieu-bien',
    name: 'Thiết bị hàng hải tín hiệu biển',
    address: '22 Vân Giang, P. Vân Giang',
    ward: 'P. Vân Giang',
    status: 'green',
    licenseStatus: 'Còn hiệu lực',
    type: 'Thiết bị định vị, phát tín hiệu',
    officer: 'Phạm Thị D',
    phone: '0912 666 555',
    riskScore: 18,
    lastInspection: '12/04/2026',
    history: ['12/04/2026: Kiểm tra định kỳ, đạt tiêu chuẩn kỹ thuật thiết bị định vị hàng hải.'],
    position: { lat: 20.2618, lng: 105.9930 },
    owner: 'Phạm Văn Phao',
    ratingAvg: 4.4,
    reviewCount: 16,
    photos: ['public/Hotel/Ht3.jpg']
  },

  // 21. Cho thuê tài chính (2 facilities)
  {
    id: 'finance-acb',
    name: 'Cho thuê tài chính ACB',
    address: '15 Trần Hưng Đạo, P. Tân Thành',
    ward: 'P. Tân Thành',
    status: 'green',
    licenseStatus: 'Còn hiệu lực',
    type: 'Cho thuê tài chính',
    officer: 'Hoàng Văn G',
    phone: '0229 3888 777',
    riskScore: 10,
    lastInspection: '20/05/2026',
    history: ['20/05/2026: Đạt tiêu chuẩn đủ điều kiện ANTT cho hoạt động cho thuê tài chính.'],
    position: { lat: 20.2530, lng: 105.9700 },
    owner: 'Ngân hàng ACB',
    ratingAvg: 4.8,
    reviewCount: 48,
    photos: ['public/Hotel/Ht1.jpg']
  },
  {
    id: 'finance-vietinbank',
    name: 'Công ty tài chính Vietinbank',
    address: '56 Lê Hồng Phong, P. Nam Thành',
    ward: 'P. Nam Thành',
    status: 'green',
    licenseStatus: 'Còn hiệu lực',
    type: 'Cho thuê tài chính',
    officer: 'Trần Văn C',
    phone: '0229 3899 999',
    riskScore: 15,
    lastInspection: '15/04/2026',
    history: ['15/04/2026: Kiểm tra định kỳ, không phát hiện vi phạm hành chính.'],
    position: { lat: 20.2460, lng: 105.9750 },
    owner: 'Ngân hàng Vietinbank',
    ratingAvg: 4.6,
    reviewCount: 60,
    photos: ['public/Hotel/Ht2.jpg']
  },

  // 22. Trụ sở Công an (10 facilities)
  {
    id: 'ca-tinh-ninh-binh',
    name: 'Công an tỉnh Ninh Bình',
    address: 'Đường Đinh Tất Miễn, Hoa Lư',
    ward: 'Hoa Lư',
    status: 'green',
    licenseStatus: 'Còn hiệu lực',
    type: 'Trụ sở Công an',
    officer: 'Trực chỉ huy',
    phone: '113',
    riskScore: 0,
    lastInspection: 'N/A',
    history: ['Trụ sở Công an tỉnh Ninh Bình.'],
    position: { lat: 20.2479, lng: 105.9747 },
    photos: ['public/CANB/CANB1.jpg', 'public/CANB/CANB2.jpeg', 'public/CANB/CANB3.jpg']
  },
  {
    id: 'ca-tp-ninh-binh-cu',
    name: 'Công an TP Ninh Bình cũ',
    address: '12 Trần Nguyên Đán',
    ward: 'P. Đông Thành',
    status: 'green',
    licenseStatus: 'Còn hiệu lực',
    type: 'Trụ sở Công an',
    officer: 'Trực ban',
    phone: '0229 3871 092',
    riskScore: 0,
    lastInspection: 'N/A',
    history: ['Trụ sở Công an TP Ninh Bình (cơ sở cũ).'],
    position: { lat: 20.2534, lng: 105.9741 },
    photos: ['public/CANBc/CANBc1.jpg', 'public/CANBc/CANBc2.jpg', 'public/CANBc/CANBc3.jpg']
  },
  {
    id: 'ca-p-hoa-lu',
    name: 'Công an phường Hoa Lư',
    address: 'Phường Hoa Lư',
    ward: 'P. Hoa Lư',
    status: 'green',
    licenseStatus: 'Còn hiệu lực',
    type: 'Trụ sở Công an',
    officer: 'Trực ban',
    phone: '0229 3871 113',
    riskScore: 0,
    lastInspection: 'N/A',
    history: ['Công an phường Hoa Lư.'],
    position: { lat: 20.2481, lng: 105.9750 },
    photos: ['public/CAHL/CAHL1.jpg', 'public/CAHL/CAHL2.jpg', 'public/CAHL/CAHL3.jpg']
  },
  {
    id: 'ca-p-nam-dinh',
    name: 'Công an phường Nam Định',
    address: 'Phường Nam Định',
    ward: 'P. Nam Định',
    status: 'green',
    licenseStatus: 'Còn hiệu lực',
    type: 'Trụ sở Công an',
    officer: 'Trực ban',
    phone: '113',
    riskScore: 0,
    lastInspection: 'N/A',
    history: ['Trụ sở Công an phường Nam Định.'],
    position: { lat: 20.4388, lng: 106.1627 },
    photos: ['public/CAND/CAND1.jpg', 'public/CAND/CAND2.jpg', 'public/CAND/CAND3.jpg']
  },
  {
    id: 'ca-p-ha-nam',
    name: 'Công an phường Hà Nam',
    address: 'Phường Hà Nam',
    ward: 'P. Hà Nam',
    status: 'green',
    licenseStatus: 'Còn hiệu lực',
    type: 'Trụ sở Công an',
    officer: 'Trực ban',
    phone: '113',
    riskScore: 0,
    lastInspection: 'N/A',
    history: ['Trụ sở Công an phường Hà Nam.'],
    position: { lat: 20.5414, lng: 105.9135 },
    photos: ['public/CAHN/CAHN1.jpg', 'public/CAHN/CAHN2.jpg', 'public/CAHN/CAHN3.jpg']
  },
  {
    id: 'ca-p-kim-bang',
    name: 'Công an phường Kim Bảng',
    address: 'Phường Kim Bảng',
    ward: 'P. Kim Bảng',
    status: 'green',
    licenseStatus: 'Còn hiệu lực',
    type: 'Trụ sở Công an',
    officer: 'Trực ban',
    phone: '113',
    riskScore: 0,
    lastInspection: 'N/A',
    history: ['Trụ sở Công an phường Kim Bảng.'],
    position: { lat: 20.5846, lng: 105.8492 },
    photos: ['public/CAHL/CAHL1.jpg', 'public/CAHL/CAHL2.jpg', 'public/CAHL/CAHL3.jpg']
  },
  {
    id: 'ca-p-nguyen-uy',
    name: 'Công an phường Nguyễn Úy',
    address: 'Phường Nguyễn Úy',
    ward: 'P. Nguyễn Úy',
    status: 'green',
    licenseStatus: 'Còn hiệu lực',
    type: 'Trụ sở Công an',
    officer: 'Trực ban',
    phone: '113',
    riskScore: 0,
    lastInspection: 'N/A',
    history: ['Trụ sở Công an phường Nguyễn Úy.'],
    position: { lat: 20.5563, lng: 105.8638 },
    photos: ['public/CAHN/CAHN1.jpg', 'public/CAHN/CAHN2.jpg', 'public/CAHN/CAHN3.jpg']
  },
  {
    id: 'ca-x-thanh-binh',
    name: 'Công an xã Thanh Bình',
    address: 'Xã Thanh Bình',
    ward: 'X. Thanh Bình',
    status: 'green',
    licenseStatus: 'Còn hiệu lực',
    type: 'Trụ sở Công an',
    officer: 'Trực ban',
    phone: '113',
    riskScore: 0,
    lastInspection: 'N/A',
    history: ['Trụ sở Công an xã Thanh Bình.'],
    position: { lat: 20.5034, lng: 105.9284 },
    photos: ['public/CAND/CAND1.jpg', 'public/CAND/CAND2.jpg', 'public/CAND/CAND3.jpg']
  },
  {
    id: 'ca-x-nam-ly',
    name: 'Công an xã Nam Lý',
    address: 'Xã Nam Lý',
    ward: 'X. Nam Lý',
    status: 'green',
    licenseStatus: 'Còn hiệu lực',
    type: 'Trụ sở Công an',
    officer: 'Trực ban',
    phone: '113',
    riskScore: 0,
    lastInspection: 'N/A',
    history: ['Trụ sở Công an xã Nam Lý.'],
    position: { lat: 20.4852, lng: 106.0236 },
    photos: ['public/CANBc/CANBc1.jpg', 'public/CANBc/CANBc2.jpg', 'public/CANBc/CANBc3.jpg']
  },
  {
    id: 'ca-x-binh-an',
    name: 'Công an xã Bình An',
    address: 'Xã Bình An',
    ward: 'X. Bình An',
    status: 'green',
    licenseStatus: 'Còn hiệu lực',
    type: 'Trụ sở Công an',
    officer: 'Trực ban',
    phone: '113',
    riskScore: 0,
    lastInspection: 'N/A',
    history: ['Trụ sở Công an xã Bình An.'],
    position: { lat: 20.5147, lng: 105.9449 },
    photos: ['public/CANB/CANB1.jpg', 'public/CANB/CANB2.jpeg', 'public/CANB/CANB3.jpg']
  }
];

const statusMeta = {
  green: { label: 'Đang hoạt động', color: '#22a447', icon: 'store' },
  yellow: { label: 'Tạm dừng', color: '#f4b400', icon: 'pause-circle' },
  gray: { label: 'Ngừng hoạt động', color: '#777d86', icon: 'store' },
  orange: { label: 'Sắp hết hạn', color: '#ff7a16', icon: 'clock-alert' },
  red: { label: 'Hết hạn / Bị thu hồi', color: '#e60012', icon: 'octagon-alert' },
  purple: { label: 'Có vi phạm / Rủi ro cao', color: '#8752dc', icon: 'triangle-alert' }
};

const typeIconUrl = {
  'Karaoke': 'iconHKD/microphone.png',
  'Khách sạn': 'iconHKD/hotel.png',
  'Nhà nghỉ': 'iconHKD/hotel.png',
  'Massage': 'iconHKD/Massage.png',
  'Bar': 'iconHKD/bar.png',
  'Cầm đồ': 'iconHKD/Pawnshop.png',
  'Khắc dấu': 'iconHKD/Stamp.png',
  'Dịch vụ bảo vệ': 'iconHKD/security.png',
  'In ấn': 'iconHKD/printer.png',
  'Trò chơi điện tử': 'iconHKD/game.png',
  'Casino': 'iconHKD/casino-chip.png',
  'Phẫu thuật thẩm mỹ': 'iconHKD/surgery.png',
  'Chăm sóc da': 'iconHKD/facial-treatment.png',
  'Kinh doanh pháo hoa': 'iconHKD/firecracker.png',
  'Súng bắn sơn': 'iconHKD/gun.png',
  'Công cụ hỗ trợ': 'iconHKD/baton.png',
  'Vật liệu nổ công nghiệp': 'iconHKD/blasting.png',
  'Tiền chất thuốc nổ': 'iconHKD/material.png',
  'Thiết bị gây nhiễu, phá sóng': 'iconHKD/jammer.png',
  'Thiết bị định vị, phát tín hiệu': 'iconHKD/signal.png',
  'Cho thuê tài chính': 'iconHKD/assets.png',
  'Trụ sở Công an': 'iconHKD/LogoCongAn-Map.png'
};

const els = {
  notificationToggle: document.querySelector('#notificationToggle'),
  notificationMenu: document.querySelector('#notificationMenu'),
  notificationList: document.querySelector('#notificationList'),
  notificationBadge: document.querySelector('#notificationBadge'),
  markAllReadBtn: document.querySelector('#markAllReadBtn'),
  userMenuToggle: document.querySelector('#userMenuToggle'),
  userMenu: document.querySelector('#userMenu'),
  nearbyList: document.querySelector('#nearbyList'),
  facilityPopup: document.querySelector('#facilityPopup'),
  openFacilitySheetBtn: document.querySelector('#openFacilitySheetBtn'),
  facilityDetailSheet: document.querySelector('#facilityDetailSheet'),
  facilityDetailContent: document.querySelector('#facilityDetailContent'),
  sheetFacilityName: document.querySelector('#sheetFacilityName'),
  closeFacilitySheetBtn: document.querySelector('#closeFacilitySheetBtn'),
  mapShell: document.querySelector('.map-shell'),
  gisLayout: document.querySelector('.gis-layout'),
  gisSide: document.querySelector('.gis-side'),
  floatingPanelToggle: document.querySelector('#floatingPanelToggle'),
  sideStats: document.querySelector('.gis-side-card .stat-grid'),
  searchFloating: document.querySelector('#facilitySearchFloating'),
  legacySearch: document.querySelector('#facilitySearch'),
  openFilterDrawerBtn: document.querySelector('#openFilterDrawerBtn'),
  advancedFilterBtn: document.querySelector('#advancedFilterBtn'),
  closeFilterDrawerBtn: document.querySelector('#closeFilterDrawerBtn'),
  filterDrawer: document.querySelector('#filterDrawer'),
  overlayBackdrop: document.querySelector('#mapOverlayBackdrop'),
  applyFilterBtn: document.querySelector('#applyFilterBtn'),
  resetFilterBtn: document.querySelector('#resetFilterBtn'),
  filterWard: document.querySelector('#filterWard'),
  filterType: document.querySelector('#filterType'),
  filterStatus: document.querySelector('#filterStatus'),
  filterLicense: document.querySelector('#filterLicense'),
  riskHeatmapToggle: document.querySelector('#riskHeatmapToggle'),
  legendToggle: document.querySelector('#legendToggle'),
  mapLegend: document.querySelector('.map-legend'),
  mapLayerToggle: document.querySelector('#mapLayerToggle'),
  mapLayerPanel: document.querySelector('#mapLayerPanel'),
  layerToggles: document.querySelectorAll('[data-map-layer]')
};

const state = {
  searchQuery: '',
  filters: { ward: '', type: '', status: '', license: '' },
  layers: {
    facilityLabels: false,
    administrative: true,
    roads: true,
    water: true
  },
  selectedFacilityId: null,
  isHeatmapEnabled: false,
  isPanelCollapsed: false,
  drawingMode: null,
  activeRegion: null,
  lockToCenter: false
};

let map;
let bounds;
let markers = [];
let markerById = new Map();
let markerCluster;
let heatmapOverlay;
let projectionOverlay;
let ProjectionOverlayClass;
let RiskPingOverlayClass;
let activeShape;
let drawingShape;
let riskPingOverlays = [];
let drawingListeners = [];
let panelRestoreButton;

// State variables for OSRM Routing and Emergency Alerts
let selectedPoints = [];
let isRouting = false;
let isRoutingMode = false;       // 2-point routing mode toggle
let currentPolyline = null;
let activeRouteFacilityId = null;
let alertCircles = {};
let currentAlertPhones = new Set();
let speechQueue = [];
let isSpeaking = false;
let currentMsg = null;

const baseMapStyles = [
  { featureType: 'poi.business', stylers: [{ visibility: 'off' }] },
  { featureType: 'water', stylers: [{ color: '#a7d5ff' }] },
  { featureType: 'road.highway', stylers: [{ color: '#f7c56b' }] }
];

const escapeHTML = (value) => String(value ?? '').replace(/[&<>"']/g, (char) => ({
  '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;'
}[char]));

function normalizeText(value) {
  return String(value ?? '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

function cssEscape(value) {
  if (window.CSS?.escape) {
    return CSS.escape(value);
  }
  return String(value).replace(/["\\]/g, '\\$&');
}

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
  if (!els.notificationList || !els.notificationBadge) return;
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

function markerIcon(facility, highlighted = false) {
  const size = highlighted ? 48 : 40;
  if (facility.type === 'Trụ sở Công an') {
    const width = Math.round(size * 213 / 165);
    return {
      url: typeIconUrl[facility.type] || 'iconHKD/LogoCongAn-Map.png',
      scaledSize: new google.maps.Size(width, size),
      anchor: new google.maps.Point(width / 2, size),
      labelOrigin: new google.maps.Point(width / 2, 6)
    };
  }
  return {
    url: typeIconUrl[facility.type] || 'iconHKD/assets.png',
    scaledSize: new google.maps.Size(size, size),
    anchor: new google.maps.Point(size / 2, size),
    labelOrigin: new google.maps.Point(size / 2, 6)
  };
}

function markerLabel(facility) {
  if (!state.layers.facilityLabels) return null;
  return {
    text: facility.name.length > 18 ? `${facility.name.slice(0, 17)}...` : facility.name,
    color: '#111827',
    fontSize: '11px',
    fontWeight: '700'
  };
}

function getMapStyles() {
  const styles = [...baseMapStyles];

  styles.push({
    featureType: 'administrative',
    elementType: 'geometry',
    stylers: [{ visibility: state.layers.administrative ? 'on' : 'off' }]
  });

  styles.push({
    featureType: 'administrative.locality',
    elementType: 'labels',
    stylers: [{ visibility: state.layers.administrative ? 'on' : 'off' }]
  });

  styles.push({
    featureType: 'road',
    elementType: 'geometry',
    stylers: [{ visibility: state.layers.roads ? 'on' : 'off' }]
  });

  styles.push({
    featureType: 'road',
    elementType: 'labels',
    stylers: [{ visibility: state.layers.roads ? 'on' : 'off' }]
  });

  styles.push({
    featureType: 'water',
    elementType: 'geometry',
    stylers: [{ visibility: state.layers.water ? 'on' : 'off' }, { color: '#8fd0ff' }]
  });

  styles.push({
    featureType: 'water',
    elementType: 'labels',
    stylers: [{ visibility: state.layers.water ? 'on' : 'off' }]
  });

  return styles;
}

function applyLayerSettings() {
  if (map) {
    map.setOptions({ styles: getMapStyles() });
  }

  const gisMap = document.getElementById('gisMap');
  if (gisMap) {
    gisMap.classList.toggle('hide-water', !state.layers.water);
    gisMap.classList.toggle('hide-roads', !state.layers.roads);
    gisMap.classList.toggle('hide-admin', !state.layers.administrative);
  }

  markers.forEach((marker) => {
    const facility = findFacility(marker.facilityId);
    if (facility) {
      marker.setLabel(markerLabel(facility));
    }
  });
}

function getFilteredFacilities() {
  const query = normalizeText(state.searchQuery);

  return facilities.filter((facility) => {
    const haystack = normalizeText(`${facility.name} ${facility.address} ${facility.type} ${facility.ward}`);
    if (query && !haystack.includes(query)) return false;
    if (state.filters.ward && facility.ward !== state.filters.ward) return false;
    if (state.filters.type && facility.type !== state.filters.type) return false;
    if (state.filters.status && facility.status !== state.filters.status) return false;
    if (state.filters.license && facility.licenseStatus !== state.filters.license) return false;
    if (state.activeRegion && !isFacilityInActiveRegion(facility)) return false;
    return true;
  });
}

function isFacilityInActiveRegion(facility) {
  if (!state.activeRegion || !window.google?.maps?.geometry) return true;
  const point = new google.maps.LatLng(facility.position.lat, facility.position.lng);

  if (state.activeRegion.type === 'radius') {
    const center = new google.maps.LatLng(state.activeRegion.center.lat, state.activeRegion.center.lng);
    const distance = google.maps.geometry.spherical.computeDistanceBetween(center, point);
    return distance <= state.activeRegion.radius;
  }

  if (state.activeRegion.type === 'polygon' && activeShape) {
    return google.maps.geometry.poly.containsLocation(point, activeShape);
  }

  return true;
}

function clearMarkers() {
  if (markerCluster?.clearMarkers) {
    markerCluster.clearMarkers();
  }

  markers.forEach((marker) => marker.setMap(null));
  markers = [];
  markerById = new Map();
  clearRiskPings();
}

function renderMarkers(items) {
  clearMarkers();
  bounds = new google.maps.LatLngBounds();

  markers = items.map((facility) => {
    const marker = new google.maps.Marker({
      map,
      position: facility.position,
      title: facility.name,
      icon: markerIcon(facility),
      label: markerLabel(facility),
      optimized: facility.status !== 'purple',
      zIndex: facility.status === 'purple' ? 20 : 10
    });

    marker.facilityId = facility.id;
    markerById.set(facility.id, marker);
    bounds.extend(facility.position);
    marker.addListener('click', () => openFacilityTooltip(facility));
    marker.addListener('mouseover', () => highlightFacility(facility.id, true, false));
    marker.addListener('mouseout', () => highlightFacility(facility.id, false, false));

    if (facility.status === 'purple') {
      riskPingOverlays.push(new RiskPingOverlayClass(facility.position));
    }

    return marker;
  });

  riskPingOverlays.forEach((overlay) => overlay.setMap(map));

  if (window.markerClusterer?.MarkerClusterer && markers.length > 0) {
    markerCluster = new markerClusterer.MarkerClusterer({ markers, map });
  }

  if (items.length === 1) {
    map.panTo(items[0].position);
    map.setZoom(Math.max(map.getZoom(), 14));
  } else if (items.length > 1) {
    map.fitBounds(bounds);
  }
}

function clearRiskPings() {
  riskPingOverlays.forEach((overlay) => overlay.setMap(null));
  riskPingOverlays = [];
}

function renderNearbyList(items = getFilteredFacilities()) {
  if (!els.nearbyList) return;
  const displayedItems = items.slice(0, 6);
  els.nearbyList.innerHTML = displayedItems.map((item) => {
    const meta = statusMeta[item.status] || statusMeta.green;
    return `
      <button class="nearby-item" type="button" data-facility-id="${escapeHTML(item.id)}">
        <span class="marker-dot ${escapeHTML(item.status)}"><i data-lucide="${escapeHTML(meta.icon)}" class="h-3.5 w-3.5"></i></span>
        <span>
          <strong>${escapeHTML(item.name)}</strong>
          <span>${escapeHTML(item.address)}</span>
        </span>
        <span class="nearby-status" style="background:${meta.color}"></span>
      </button>
    `;
  }).join('');
}

function renderStats(items = getFilteredFacilities()) {
  if (!els.sideStats) return;
  const stats = Object.keys(statusMeta).map((status) => ({
    status,
    ...statusMeta[status],
    count: items.filter((item) => item.status === status).length
  })).filter((item) => item.count > 0 || ['green', 'yellow', 'red', 'purple'].includes(item.status));

  els.sideStats.innerHTML = stats.map((item) => `
    <div>
      <span class="marker-dot ${escapeHTML(item.status)}"><i data-lucide="${escapeHTML(item.icon)}" class="h-4 w-4"></i></span>
      <strong>${item.count}</strong>
      <em>${escapeHTML(item.label)}</em>
    </div>
  `).join('');
}

function renderTypeStatsLegend(items = getFilteredFacilities()) {
  const legendList = document.getElementById('mapLegendList');
  if (!legendList) return;

  const counts = {};
  items.forEach((item) => {
    counts[item.type] = (counts[item.type] || 0) + 1;
  });

  const sortedTypes = Object.entries(counts)
    .map(([type, count]) => ({ type, count }))
    .sort((a, b) => b.count - a.count);

  if (sortedTypes.length === 0) {
    legendList.innerHTML = '<div style="color: #6b7280; font-size: 13px; padding: 4px 0;">Không có dữ liệu</div>';
    return;
  }

  legendList.innerHTML = sortedTypes.map((item) => {
    const iconUrl = typeIconUrl[item.type] || '../iconHKD/assets.png';
    return `
      <div style="display: flex; align-items: center; justify-content: space-between; font-size: 13px; font-weight: 500; color: #374151; padding: 2px 0;">
        <span style="display: flex; align-items: center; gap: 8px;">
          <img src="${escapeHTML(iconUrl)}" style="width: 18px; height: 18px; object-fit: contain;" alt="${escapeHTML(item.type)}">
          <span>${escapeHTML(item.type)}</span>
        </span>
        <strong style="color: #b40000; font-size: 13px;">${item.count}</strong>
      </div>
    `;
  }).join('');
}

function renderMapData() {
  const items = getFilteredFacilities();
  hideFacilityTooltip();
  renderNearbyList(items);
  renderStats(items);
  renderTypeStatsLegend(items);

  if (!map) {
    lucide.createIcons();
    return;
  }

  if (state.isHeatmapEnabled) {
    clearMarkers();
    renderHeatmap(items);
  } else {
    hideHeatmap();
    renderMarkers(items);
  }

  lucide.createIcons();
}

function renderHeatmap(items) {
  if (!window.deck?.GoogleMapsOverlay || !window.deck?.HeatmapLayer) {
    alert('Không tải được thư viện bản đồ nhiệt. Vui lòng kiểm tra kết nối CDN deck.gl.');
    state.isHeatmapEnabled = false;
    if (els.riskHeatmapToggle) els.riskHeatmapToggle.checked = false;
    renderMarkers(items);
    return;
  }

  const heatData = items
    .filter((item) => ['purple', 'red', 'orange'].includes(item.status))
    .map((item) => ({
      position: [item.position.lng, item.position.lat],
      weight: item.status === 'purple' ? 5 : item.status === 'red' ? 4 : 2
    }));

  const layer = new deck.HeatmapLayer({
    id: 'risk-heatmap',
    data: heatData,
    getPosition: (item) => item.position,
    getWeight: (item) => item.weight,
    radiusPixels: 55,
    intensity: 1.2,
    threshold: 0.03
  });

  if (!heatmapOverlay) {
    heatmapOverlay = new deck.GoogleMapsOverlay({ layers: [layer] });
    heatmapOverlay.setMap(map);
  } else {
    heatmapOverlay.setProps({ layers: [layer] });
  }
}

function hideHeatmap() {
  if (heatmapOverlay) {
    heatmapOverlay.setProps({ layers: [] });
  }
}

function renderStars(rating) {
  const value = Math.max(0, Math.min(5, Number(rating) || 0));
  return Array.from({ length: 5 }, (_, index) => {
    const starValue = index + 1;
    const className = value >= starValue ? 'filled' : value >= starValue - 0.5 ? 'half' : '';
    return `<span class="${className}" aria-hidden="true">&#9733;</span>`;
  }).join('');
}

function renderFacilityPhotos(facility) {
  const photos = facility.photos || [];
  const visiblePhotos = photos.slice(0, 3);
  const remaining = Math.max(0, photos.length - 3);

  if (!visiblePhotos.length) return '';

  return `
    <div class="popup-photo-grid" aria-label="Ảnh cơ sở kinh doanh">
      ${visiblePhotos.map((photo, index) => `
        <button class="popup-photo-cell" type="button" data-popup-photo-index="${index}" aria-label="Xem ảnh ${index + 1}">
          <img src="${escapeHTML(photo)}" alt="${escapeHTML(`${facility.name} - ảnh ${index + 1}`)}" loading="lazy">
          ${remaining > 0 && index === visiblePhotos.length - 1 ? `<span class="popup-photo-more">+${remaining}</span>` : ''}
        </button>
      `).join('')}
    </div>
  `;
}

function renderRatingForm(facility) {
  const selectedRating = facility.userRating || 0;

  return `
    <form class="popup-review-form" data-review-form>
      <label>Đánh giá của bạn</label>
      <div class="popup-review-stars" role="radiogroup" aria-label="Chọn số sao đánh giá">
        ${Array.from({ length: 5 }, (_, index) => {
          const value = index + 1;
          const selectedClass = selectedRating >= value ? 'is-selected' : '';
          return `<button class="${selectedClass}" type="button" data-user-rating="${value}" aria-label="${value} sao">&#9733;</button>`;
        }).join('')}
      </div>
      <textarea name="reviewNote" rows="2" placeholder="Nhập nhận xét ngắn..."></textarea>
      <button class="popup-review-submit" type="submit">Gửi đánh giá</button>
    </form>
  `;
}

function renderFacilityPopup(facility) {
  const meta = statusMeta[facility.status] || statusMeta.green;
  const rating = Number(facility.ratingAvg || 0).toFixed(1);
  const isPolice = facility.type === 'Trụ sở Công an';

  els.facilityPopup.innerHTML = `
    <button class="popup-close" type="button" aria-label="Đóng"><i data-lucide="x" class="h-5 w-5"></i></button>
    <h2>${escapeHTML(facility.name)}</h2>
    <span class="popup-status" style="background:${meta.color}22;color:${meta.color}">${escapeHTML(meta.label)}</span>
    ${renderFacilityPhotos(facility)}
    ${isPolice ? '' : `
    <section class="popup-rating" aria-label="Đánh giá cơ sở">
      <div class="popup-stars" aria-label="${rating} trên 5 sao">${renderStars(facility.ratingAvg)}</div>
      <strong>${rating}</strong>
      <span>${escapeHTML(facility.reviewCount)} đánh giá</span>
    </section>
    `}
    <dl>
      <div>
        <dt><i data-lucide="briefcase-business" class="h-4 w-4"></i>Loại hình:</dt>
        <dd>${escapeHTML(facility.type)}</dd>
      </div>
      <div>
        <dt><i data-lucide="map-pin" class="h-4 w-4"></i>Địa chỉ:</dt>
        <dd>${escapeHTML(facility.address)}</dd>
      </div>
      ${isPolice ? '' : `
      <div>
        <dt><i data-lucide="shield-check" class="h-4 w-4"></i>Giấy phép ANTT:</dt>
        <dd class="green-text">${escapeHTML(facility.licenseStatus)}</dd>
      </div>
      `}
      <div>
        <dt><i data-lucide="user-round" class="h-4 w-4"></i>${isPolice ? 'Cán bộ phụ trách' : 'Chủ cơ sở'}:</dt>
        <dd>${escapeHTML(facility.owner || facility.officer)}</dd>
      </div>
      <div>
        <dt><i data-lucide="phone" class="h-4 w-4"></i>SĐT:</dt>
        <dd>${escapeHTML(facility.phone)}</dd>
      </div>
    </dl>
    <div class="mt-4 flex flex-col gap-2">
      <button id="btnRoutePopup" class="w-full py-2 bg-[#bd0000] hover:bg-[#a00000] text-white rounded font-bold text-sm transition flex items-center justify-center gap-2" style="display: ${(currentPolyline && activeRouteFacilityId === facility.id) ? 'none' : 'flex'};" onclick="routeToFacility('${facility.id}')">
        <i data-lucide="navigation" class="h-4 w-4"></i> Chỉ đường
      </button>
      <button id="btnCancelRoutePopup" class="w-full py-2 bg-gray-500 hover:bg-gray-600 text-white rounded font-bold text-sm transition flex items-center justify-center gap-2" style="display: ${(currentPolyline && activeRouteFacilityId === facility.id) ? 'flex' : 'none'};" onclick="clearRouteFromDetail()">
        <i data-lucide="trash-2" class="h-4 w-4"></i> Xóa chỉ đường
      </button>
    </div>
    ${isPolice ? '' : renderRatingForm(facility)}
  `;
}

function setReviewStars(form, rating) {
  form.querySelectorAll('[data-user-rating]').forEach((button) => {
    button.classList.toggle('is-selected', Number(button.dataset.userRating) <= rating);
  });
}

let activeLightboxFacility = null;
let activeLightboxIndex = 0;

function ensurePhotoLightbox() {
  let lightbox = document.querySelector('#facilityPhotoLightbox');
  if (lightbox) return lightbox;

  lightbox = document.createElement('div');
  lightbox.id = 'facilityPhotoLightbox';
  lightbox.className = 'facility-photo-lightbox';
  lightbox.hidden = true;
  lightbox.innerHTML = `
    <div class="facility-photo-lightbox-backdrop" data-close-photo-lightbox></div>
    <section class="facility-photo-lightbox-panel" aria-modal="true" role="dialog" aria-label="Xem ảnh cơ sở">
      <button class="photo-lightbox-close" type="button" aria-label="Đóng" data-close-photo-lightbox><i data-lucide="x" class="h-5 w-5"></i></button>
      <button class="photo-lightbox-nav prev" type="button" aria-label="Ảnh trước" data-photo-lightbox-prev><i data-lucide="chevron-left" class="h-6 w-6"></i></button>
      <img alt="Ảnh cơ sở kinh doanh" data-photo-lightbox-img>
      <button class="photo-lightbox-nav next" type="button" aria-label="Ảnh tiếp theo" data-photo-lightbox-next><i data-lucide="chevron-right" class="h-6 w-6"></i></button>
      <div class="photo-lightbox-count" data-photo-lightbox-count></div>
    </section>
  `;

  document.body.appendChild(lightbox);
  lightbox.querySelectorAll('[data-close-photo-lightbox]').forEach((button) => button.addEventListener('click', closePhotoLightbox));
  lightbox.querySelector('[data-photo-lightbox-prev]')?.addEventListener('click', () => movePhotoLightbox(-1));
  lightbox.querySelector('[data-photo-lightbox-next]')?.addEventListener('click', () => movePhotoLightbox(1));
  return lightbox;
}

function renderPhotoLightbox() {
  const photos = activeLightboxFacility?.photos || [];
  const lightbox = ensurePhotoLightbox();
  const image = lightbox.querySelector('[data-photo-lightbox-img]');
  const count = lightbox.querySelector('[data-photo-lightbox-count]');

  if (!photos.length || !image || !count) return;

  image.src = photos[activeLightboxIndex];
  image.alt = `${activeLightboxFacility.name} - ảnh ${activeLightboxIndex + 1}`;
  count.textContent = `${activeLightboxIndex + 1} / ${photos.length}`;
}

function openPhotoLightbox(facility, index) {
  const photos = facility.photos || [];
  if (!photos.length) return;

  activeLightboxFacility = facility;
  activeLightboxIndex = Math.max(0, Math.min(index, photos.length - 1));
  const lightbox = ensurePhotoLightbox();
  renderPhotoLightbox();
  lightbox.hidden = false;
  document.body.classList.add('photo-lightbox-open');
  lucide.createIcons();
}

function closePhotoLightbox() {
  const lightbox = document.querySelector('#facilityPhotoLightbox');
  if (!lightbox) return;
  lightbox.hidden = true;
  document.body.classList.remove('photo-lightbox-open');
}

function movePhotoLightbox(step) {
  const photos = activeLightboxFacility?.photos || [];
  if (!photos.length) return;
  activeLightboxIndex = (activeLightboxIndex + step + photos.length) % photos.length;
  renderPhotoLightbox();
}

function bindPublicPopupActions(facility) {
  els.facilityPopup.querySelector('.popup-close')?.addEventListener('click', hideFacilityTooltip);
  els.facilityPopup.querySelectorAll('[data-popup-photo-index]').forEach((button) => {
    button.addEventListener('click', () => openPhotoLightbox(facility, Number(button.dataset.popupPhotoIndex) || 0));
  });

  const form = els.facilityPopup.querySelector('[data-review-form]');
  if (!form) return;

  let selectedRating = facility.userRating || 0;
  form.querySelectorAll('[data-user-rating]').forEach((button) => {
    button.addEventListener('click', () => {
      selectedRating = Number(button.dataset.userRating);
      setReviewStars(form, selectedRating);
    });
  });

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!selectedRating) {
      alert('Vui lòng chọn số sao trước khi gửi đánh giá.');
      return;
    }

    const currentTotal = (Number(facility.ratingAvg) || 0) * (Number(facility.reviewCount) || 0);
    facility.reviewCount = (Number(facility.reviewCount) || 0) + 1;
    facility.ratingAvg = (currentTotal + selectedRating) / facility.reviewCount;
    facility.userRating = selectedRating;
    renderFacilityPopup(facility);
    bindPublicPopupActions(facility);
    lucide.createIcons();
  });
}

function openFacilityTooltip(facility) {
  state.selectedFacilityId = facility.id;
  renderFacilityPopup(facility);
  els.facilityPopup.hidden = false;
  state.lockToCenter = true;
  positionFacilityPopup(facility.position);
  bindPublicPopupActions(facility);
  highlightFacility(facility.id, true, true);

  if (map) {
    map.panTo(facility.position);
  }

  lucide.createIcons();
}

function hideFacilityTooltip() {
  els.facilityPopup.hidden = true;
  if (state.selectedFacilityId) {
    highlightFacility(state.selectedFacilityId, false, false);
  }
}

function positionFacilityPopup(position) {
  const shellRect = els.mapShell.getBoundingClientRect();

  els.facilityPopup.classList.add('anchor-right');
  els.facilityPopup.classList.remove('anchor-left');

  if (state.lockToCenter) {
    els.facilityPopup.style.left = `${shellRect.width / 2 + 20}px`;
    els.facilityPopup.style.top = `${shellRect.height / 2}px`;
  } else {
    if (!projectionOverlay?.getProjection || !map) return;
    const projection = projectionOverlay.getProjection();
    if (!projection) return;

    const point = projection.fromLatLngToContainerPixel(new google.maps.LatLng(position.lat, position.lng));
    els.facilityPopup.style.left = `${point.x + 20}px`;
    els.facilityPopup.style.top = `${point.y}px`;
  }

  els.facilityPopup.style.right = 'auto';
  els.facilityPopup.style.transform = 'translateY(-50%)';
}

function openFacilitySheet(facility) {
  const meta = statusMeta[facility.status] || statusMeta.green;
  els.sheetFacilityName.textContent = facility.name;
  els.facilityDetailContent.innerHTML = `
    <section class="detail-section">
      <h3>Thông tin chung</h3>
      <div class="detail-row"><span>Loại hình</span><strong>${escapeHTML(facility.type)}</strong></div>
      <div class="detail-row"><span>Địa bàn</span><strong>${escapeHTML(facility.ward)}</strong></div>
      <div class="detail-row"><span>Địa chỉ</span><strong>${escapeHTML(facility.address)}</strong></div>
      <div class="detail-row"><span>Trạng thái</span><strong style="color:${meta.color}">${escapeHTML(meta.label)}</strong></div>
    </section>
    <section class="detail-section">
      <h3>Giấy phép và phụ trách</h3>
      <div class="detail-row"><span>Giấy phép ANTT</span><strong>${escapeHTML(facility.licenseStatus)}</strong></div>
      <div class="detail-row"><span>Cán bộ phụ trách</span><strong>${escapeHTML(facility.officer)}</strong></div>
      <div class="detail-row"><span>Số điện thoại</span><strong>${escapeHTML(facility.phone)}</strong></div>
      <div class="detail-row"><span>Điểm rủi ro</span><strong>${facility.riskScore}/100</strong></div>
    </section>
    <section class="detail-section">
      <h3>Lịch sử kiểm tra</h3>
      ${facility.history.map((item) => `<div class="detail-row"><span>${escapeHTML(item.split(':')[0])}</span><strong>${escapeHTML(item.substring(item.indexOf(':') + 1).trim())}</strong></div>`).join('')}
    </section>
    <section class="detail-section">
      <h3>Thao tác</h3>
      <div class="flex flex-col gap-2">
        <a class="popup-detail w-full flex items-center justify-center" href="ChiTietHoSo.html?id=${encodeURIComponent(facility.id)}">Mở hồ sơ đầy đủ</a>
        <button id="btnRouteDetail" class="popup-detail w-full flex items-center justify-center gap-2 bg-[#bd0000] hover:bg-[#a00000] text-white font-bold py-2 px-4 rounded text-sm transition" style="display: ${(currentPolyline && activeRouteFacilityId === facility.id) ? 'none' : 'inline-flex'};" onclick="routeToFacility('${facility.id}')">
          <i data-lucide="navigation" class="h-4 w-4"></i> Chỉ đường
        </button>
        <button id="btnCancelRouteDetail" class="popup-detail w-full flex items-center justify-center gap-2 bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded text-sm transition" style="display: ${(currentPolyline && activeRouteFacilityId === facility.id) ? 'inline-flex' : 'none'};" onclick="clearRouteFromDetail()">
          <i data-lucide="trash-2" class="h-4 w-4"></i> Xóa chỉ đường
        </button>
      </div>
    </section>
  `;
  openOverlay(els.facilityDetailSheet);
  els.facilityDetailSheet.setAttribute('aria-hidden', 'false');
}

function closeFacilitySheet() {
  closeOverlay(els.facilityDetailSheet);
  els.facilityDetailSheet.setAttribute('aria-hidden', 'true');
}

function openFilterDrawer() {
  els.filterWard.value = state.filters.ward;
  els.filterType.value = state.filters.type;
  els.filterStatus.value = state.filters.status;
  els.filterLicense.value = state.filters.license;
  openOverlay(els.filterDrawer);
  els.filterDrawer.setAttribute('aria-hidden', 'false');
}

function closeFilterDrawer() {
  closeOverlay(els.filterDrawer);
  els.filterDrawer.setAttribute('aria-hidden', 'true');
}

function openOverlay(panel) {
  panel.classList.add('is-open');
  els.overlayBackdrop.hidden = false;
}

function closeOverlay(panel) {
  panel.classList.remove('is-open');
  if (!els.filterDrawer.classList.contains('is-open') && !els.facilityDetailSheet.classList.contains('is-open')) {
    els.overlayBackdrop.hidden = true;
  }
}

function applyFiltersFromDrawer() {
  state.filters = {
    ward: els.filterWard.value,
    type: els.filterType.value,
    status: els.filterStatus.value,
    license: els.filterLicense.value
  };
  closeFilterDrawer();
  renderMapData();
}

function resetFilters() {
  state.filters = { ward: '', type: '', status: '', license: '' };
  state.searchQuery = '';
  if (els.searchFloating) els.searchFloating.value = '';
  if (els.legacySearch) els.legacySearch.value = '';
  [els.filterWard, els.filterType, els.filterStatus, els.filterLicense].forEach((select) => {
    if (select) select.value = '';
  });
  clearRegionFilter();
  closeFilterDrawer();
  renderMapData();
}

function highlightFacility(id, highlighted, scrollList) {
  const facility = facilities.find((item) => item.id === id);
  const marker = markerById.get(id);
  if (marker && facility && !state.isHeatmapEnabled) {
    marker.setIcon(markerIcon(facility, highlighted));
    marker.setZIndex(highlighted ? 100 : facility.status === 'purple' ? 20 : 10);
    marker.setAnimation(highlighted ? google.maps.Animation.BOUNCE : null);
    if (highlighted) {
      window.setTimeout(() => marker.setAnimation(null), 900);
    }
  }

  const item = els.nearbyList?.querySelector(`[data-facility-id="${cssEscape(id)}"]`);
  if (item) {
    item.classList.toggle('is-highlighted', highlighted);
    if (highlighted && scrollList) {
      item.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
    }
  }
}

function findFacility(id) {
  return facilities.find((item) => item.id === id);
}

function setPanelCollapsed(collapsed) {
  state.isPanelCollapsed = collapsed;
  els.gisSide.classList.toggle('is-collapsed', collapsed);
  els.gisLayout.classList.toggle('panel-collapsed', collapsed);
  if (els.floatingPanelToggle) {
    els.floatingPanelToggle.setAttribute('aria-expanded', String(!collapsed));
    els.floatingPanelToggle.innerHTML = collapsed
      ? '<i data-lucide="panel-right-open" class="h-5 w-5"></i><span>Mở rộng</span>'
      : '<i data-lucide="panel-right-close" class="h-5 w-5"></i><span>Thu gọn</span>';
  }
  lucide.createIcons();
}

function ensurePanelRestoreButton() {
  panelRestoreButton = document.createElement('button');
  panelRestoreButton.className = 'floating-panel-restore';
  panelRestoreButton.type = 'button';
  panelRestoreButton.setAttribute('aria-label', 'Mở panel thông tin');
  panelRestoreButton.innerHTML = '<i data-lucide="panel-right-open" class="h-5 w-5"></i>';
  panelRestoreButton.addEventListener('click', () => setPanelCollapsed(false));
  els.gisLayout.appendChild(panelRestoreButton);
}

function setDrawingMode(mode) {
  if (!map) {
    alert('Bản đồ thật sẽ hoạt động sau khi Google Maps API tải xong.');
    return;
  }

  clearDrawingDraft();
  state.drawingMode = state.drawingMode === mode ? null : mode;
  map.setOptions({ draggableCursor: state.drawingMode ? 'crosshair' : null, disableDoubleClickZoom: state.drawingMode === 'polygon' });

  if (state.drawingMode === 'radius') {
    alert('Bấm một điểm làm tâm, sau đó bấm điểm thứ hai để xác định bán kính.');
  }

  if (state.drawingMode === 'polygon') {
    alert('Bấm từng điểm để vẽ vùng, bấm đúp để hoàn tất.');
  }
}

function handleMapClick(event) {
  // 2-point routing mode
  if (isRoutingMode) {
    const latLng = { lat: event.latLng.lat(), lng: event.latLng.lng() };
    if (selectedPoints.length === 2) selectedPoints = [];
    selectedPoints.push(latLng);

    const isFirst = selectedPoints.length === 1;
    const marker = new google.maps.Marker({
      map,
      position: latLng,
      label: { text: isFirst ? 'A' : 'B', color: '#fff', fontWeight: 'bold', fontSize: '13px' },
      icon: {
        path: google.maps.SymbolPath.CIRCLE,
        scale: 14,
        fillColor: isFirst ? '#22c55e' : '#bd0000',
        fillOpacity: 1,
        strokeColor: '#fff',
        strokeWeight: 2
      },
      zIndex: 500
    });
    routeMarkersList.push(marker);

    if (selectedPoints.length === 2) {
      drawRoute(selectedPoints[0], selectedPoints[1]);
      isRoutingMode = false;
      map.setOptions({ draggableCursor: null });
      const btn = document.getElementById('btnToggleRoute');
      if (btn) {
        btn.style.background = '';
        btn.style.color = '';
        btn.innerHTML = '<i data-lucide="navigation" class="h-5 w-5"></i>';
        if (window.lucide) window.lucide.createIcons();
      }
      updateRoutingStatus('done');
    } else {
      updateRoutingStatus('end');
    }
    return;
  }

  if (!state.drawingMode) return;

  if (state.drawingMode === 'radius') {
    handleRadiusClick(event.latLng);
    return;
  }

  if (state.drawingMode === 'polygon') {
    handlePolygonClick(event.latLng);
  }
}

function handleRadiusClick(latLng) {
  if (!state.radiusCenter) {
    state.radiusCenter = latLng;
    clearActiveShape();
    drawingShape = new google.maps.Circle({
      map,
      center: latLng,
      radius: 600,
      strokeColor: '#d00000',
      strokeOpacity: 0.9,
      strokeWeight: 2,
      fillColor: '#d00000',
      fillOpacity: 0.1
    });

    drawingListeners.push(map.addListener('mousemove', (event) => {
      const radius = google.maps.geometry.spherical.computeDistanceBetween(state.radiusCenter, event.latLng);
      drawingShape.setRadius(radius);
    }));
    return;
  }

  const radius = google.maps.geometry.spherical.computeDistanceBetween(state.radiusCenter, latLng);
  activeShape = drawingShape;
  drawingShape = null;
  state.activeRegion = {
    type: 'radius',
    center: { lat: state.radiusCenter.lat(), lng: state.radiusCenter.lng() },
    radius
  };
  clearDrawingListeners();
  state.radiusCenter = null;
  state.drawingMode = null;
  map.setOptions({ draggableCursor: null });
  renderMapData();
}

function handlePolygonClick(latLng) {
  state.polygonPath.push(latLng);
  clearActiveShape();
  if (drawingShape) {
    drawingShape.setMap(null);
  }
  drawingShape = new google.maps.Polygon({
    map,
    paths: state.polygonPath,
    strokeColor: '#d00000',
    strokeOpacity: 0.9,
    strokeWeight: 2,
    fillColor: '#d00000',
    fillOpacity: 0.1
  });
}

function finishPolygon() {
  if (state.drawingMode !== 'polygon' || state.polygonPath.length < 3 || !drawingShape) return;
  activeShape = drawingShape;
  drawingShape = null;
  state.activeRegion = { type: 'polygon' };
  state.polygonPath = [];
  state.drawingMode = null;
  map.setOptions({ draggableCursor: null, disableDoubleClickZoom: false });
  renderMapData();
}

function clearDrawingDraft() {
  clearDrawingListeners();
  state.radiusCenter = null;
  state.polygonPath = [];
  if (drawingShape) {
    drawingShape.setMap(null);
    drawingShape = null;
  }
}

function clearDrawingListeners() {
  drawingListeners.forEach((listener) => google.maps.event.removeListener(listener));
  drawingListeners = [];
}

function clearActiveShape() {
  if (activeShape) {
    activeShape.setMap(null);
    activeShape = null;
  }
  state.activeRegion = null;
}

function clearRegionFilter() {
  clearDrawingDraft();
  clearActiveShape();
  state.drawingMode = null;
  if (map) {
    map.setOptions({ draggableCursor: null, disableDoubleClickZoom: false });
  }
}

function ensureOverlayClasses() {
  if (ProjectionOverlayClass && RiskPingOverlayClass) return;

  ProjectionOverlayClass = class ProjectionOverlay extends google.maps.OverlayView {
    onAdd() {}
    draw() {}
    onRemove() {}
  };

  RiskPingOverlayClass = class RiskPingOverlay extends google.maps.OverlayView {
    constructor(position) {
      super();
      this.position = new google.maps.LatLng(position.lat, position.lng);
      this.div = null;
    }

    onAdd() {
      this.div = document.createElement('div');
      this.div.className = 'risk-ping';
      this.getPanes().overlayMouseTarget.appendChild(this.div);
    }

    draw() {
      if (!this.div) return;
      const point = this.getProjection().fromLatLngToDivPixel(this.position);
      this.div.style.left = `${point.x}px`;
      this.div.style.top = `${point.y}px`;
    }

    onRemove() {
      if (this.div) {
        this.div.remove();
        this.div = null;
      }
    }
  };
}


window.initPublicMap = function initPublicMap() {
  ensureOverlayClasses();
  const center = { lat: 20.2506, lng: 105.9745 };
  map = new google.maps.Map(document.getElementById('gisMap'), {
    center,
    zoom: 12,
    mapTypeControl: false,
    streetViewControl: false,
    fullscreenControl: false,
    zoomControl: false,
    gestureHandling: 'greedy',
    styles: getMapStyles()
  });

  projectionOverlay = new ProjectionOverlayClass();
  projectionOverlay.setMap(map);
  els.mapShell.classList.add('map-loaded');
  map.addListener('click', handleMapClick);
  map.addListener('dblclick', finishPolygon);
  map.addListener('bounds_changed', () => {
    const facility = findFacility(state.selectedFacilityId);
    if (facility && !els.facilityPopup.hidden) {
      positionFacilityPopup(facility.position);
    }
  });
  map.addListener('idle', () => {
    if (state.lockToCenter) {
      state.lockToCenter = false;
      const facility = findFacility(state.selectedFacilityId);
      if (facility && !els.facilityPopup.hidden) {
        positionFacilityPopup(facility.position);
      }
    }
  });
  map.addListener('dragstart', () => {
    state.lockToCenter = false;
  });
  map.addListener('zoom_changed', () => {
    state.lockToCenter = false;
  });

  renderMapData();
};

function bindEvents() {
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

  els.markAllReadBtn?.addEventListener('click', (event) => {
    event.stopPropagation();
    notifications.length = 0;
    renderNotifications();
    closeTopbarMenus();
    lucide.createIcons();
  });

  els.notificationMenu?.addEventListener('click', (event) => {
    event.stopPropagation();
    const item = event.target.closest('[data-notification-title]');
    if (item) alert(`Thông báo: ${item.dataset.notificationTitle}`);
  });

  els.userMenu?.addEventListener('click', (event) => {
    event.stopPropagation();
    const action = event.target.closest('[data-user-action]');
    if (!action) return;
    alert(action.dataset.userAction === 'profile' ? 'Mở thông tin tài khoản Nguyễn Văn A' : 'Mở cài đặt hiển thị');
    closeTopbarMenus();
  });

  els.nearbyList?.addEventListener('click', (event) => {
    const item = event.target.closest('[data-facility-id]');
    if (!item) return;
    const facility = findFacility(item.dataset.facilityId);
    if (facility) openFacilityTooltip(facility);
  });

  els.nearbyList?.addEventListener('mouseover', (event) => {
    const item = event.target.closest('[data-facility-id]');
    if (item) highlightFacility(item.dataset.facilityId, true, false);
  });

  els.nearbyList?.addEventListener('mouseout', (event) => {
    const item = event.target.closest('[data-facility-id]');
    if (item) highlightFacility(item.dataset.facilityId, false, false);
  });

  document.querySelector('.popup-close')?.addEventListener('click', hideFacilityTooltip);

  els.openFacilitySheetBtn?.addEventListener('click', () => {
    const facility = findFacility(state.selectedFacilityId);
    if (facility) openFacilitySheet(facility);
  });

  els.closeFacilitySheetBtn?.addEventListener('click', closeFacilitySheet);
  els.openFilterDrawerBtn?.addEventListener('click', openFilterDrawer);
  els.advancedFilterBtn?.addEventListener('click', openFilterDrawer);
  els.closeFilterDrawerBtn?.addEventListener('click', closeFilterDrawer);
  els.applyFilterBtn?.addEventListener('click', applyFiltersFromDrawer);
  els.resetFilterBtn?.addEventListener('click', resetFilters);
  els.overlayBackdrop?.addEventListener('click', () => {
    closeFilterDrawer();
    closeFacilitySheet();
  });

  els.floatingPanelToggle?.addEventListener('click', () => setPanelCollapsed(!state.isPanelCollapsed));
  panelRestoreButton?.addEventListener('click', () => setPanelCollapsed(false));

  els.legendToggle?.addEventListener('click', () => {
    const isOpen = els.mapLegend.classList.toggle('is-open');
    els.legendToggle.setAttribute('aria-expanded', String(isOpen));
  });

  const onSearch = (event) => {
    state.searchQuery = event.target.value.trim();
    if (event.target !== els.searchFloating && els.searchFloating) els.searchFloating.value = event.target.value;
    if (event.target !== els.legacySearch && els.legacySearch) els.legacySearch.value = event.target.value;
    renderMapData();
  };

  els.searchFloating?.addEventListener('input', onSearch);
  els.legacySearch?.addEventListener('input', onSearch);

  els.riskHeatmapToggle?.addEventListener('change', (event) => {
    state.isHeatmapEnabled = event.target.checked;
    renderMapData();
  });

  const onTopBarFilterChange = () => {
    state.filters = {
      ward: els.filterWard ? els.filterWard.value : '',
      type: els.filterType ? els.filterType.value : '',
      status: els.filterStatus ? els.filterStatus.value : '',
      license: els.filterLicense ? els.filterLicense.value : ''
    };
    renderMapData();
  };

  els.filterWard?.addEventListener('change', onTopBarFilterChange);
  els.filterType?.addEventListener('change', onTopBarFilterChange);
  els.filterStatus?.addEventListener('change', onTopBarFilterChange);
  els.filterLicense?.addEventListener('change', onTopBarFilterChange);

  document.querySelector('#resetFilterBtnPublic')?.addEventListener('click', () => {
    resetFilters();
  });

  els.layerToggles.forEach((toggle) => {
    toggle.addEventListener('change', (event) => {
      const layer = event.target.dataset.mapLayer;
      state.layers[layer] = event.target.checked;
      applyLayerSettings();
    });
  });

  document.querySelectorAll('[data-map-control]').forEach((button) => {
    button.addEventListener('click', () => {
      const control = button.dataset.mapControl;
      if (control === 'toggle-route') {
        toggleRouteMode();
        return;
      }
      if (control === 'clear-route') {
        clearRoute();
        clearRouteMarkers();
        selectedPoints = [];
        return;
      }
      if (!map) {
        alert('Bản đồ thật sẽ hoạt động sau khi bạn thêm Google Maps API key.');
        return;
      }
      if (control === 'zoom-in') map.setZoom(map.getZoom() + 1);
      if (control === 'zoom-out') map.setZoom(map.getZoom() - 1);
      if (control === 'fit' && bounds) map.fitBounds(bounds);
      if (control === 'locate') map.panTo({ lat: 20.2506, lng: 105.9745 });
      if (control === 'radius') setDrawingMode('radius');
      if (control === 'polygon') setDrawingMode('polygon');
      if (control === 'clear-region') {
        clearRegionFilter();
        renderMapData();
      }
    });
  });

  document.querySelector('#refreshStatsBtn')?.addEventListener('click', () => {
    renderMapData();
    alert('Đã làm mới dữ liệu thống kê trên bản đồ.');
  });

  const shell = document.querySelector('.desktop-shell');
  const sidebarToggle = document.querySelector('#sidebarToggle');
  const collapseLabel = sidebarToggle?.querySelector('.collapse-label');

  sidebarToggle?.addEventListener('click', () => {
    const isCollapsed = shell.classList.toggle('is-collapsed');
    sidebarToggle.setAttribute('aria-expanded', String(!isCollapsed));
    sidebarToggle.setAttribute('aria-label', isCollapsed ? 'Mở rộng menu' : 'Thu gọn menu');
    if (collapseLabel) collapseLabel.textContent = isCollapsed ? 'Mở rộng' : 'Thu gọn';
  });

  window.addEventListener('resize', () => {
    const facility = findFacility(state.selectedFacilityId);
    if (facility && !els.facilityPopup.hidden) {
      positionFacilityPopup(facility.position);
    }
  });

  function setLayerPanelOpen(isOpen) {
    if (!els.mapLayerToggle || !els.mapLayerPanel) return;
    els.mapLayerPanel.hidden = !isOpen;
    els.mapLayerToggle.setAttribute('aria-expanded', String(isOpen));
  }

  els.mapLayerToggle?.addEventListener('click', (event) => {
    event.stopPropagation();
    setLayerPanelOpen(els.mapLayerPanel.hidden);
  });

  els.mapLayerPanel?.addEventListener('click', (event) => {
    event.stopPropagation();
  });

  document.addEventListener('click', (event) => {
    if (!event.target.closest('.topbar-menu-wrap')) closeTopbarMenus();
    setLayerPanelOpen(false);
  });

  document.addEventListener('keydown', (event) => {
    const lightbox = document.querySelector('#facilityPhotoLightbox');
    const isLightboxOpen = lightbox && !lightbox.hidden;

    if (event.key === 'Escape') {
      closeTopbarMenus();
      closeFilterDrawer();
      closeFacilitySheet();
      hideFacilityTooltip();
      closePhotoLightbox();
      setLayerPanelOpen(false);
      if (state.drawingMode) {
        clearDrawingDraft();
        state.drawingMode = null;
        map?.setOptions({ draggableCursor: null, disableDoubleClickZoom: false });
      }
    }

    if (!isLightboxOpen) return;
    if (event.key === 'ArrowLeft') movePhotoLightbox(-1);
    if (event.key === 'ArrowRight') movePhotoLightbox(1);
  });
}

// ── OSRM ROUTING FUNCTIONS ───────────────────────────────────
let routeMarkersList = [];

function toggleRouteMode() {
  if (!map) { alert('Bản đồ chưa sẵn sàng.'); return; }
  isRoutingMode = !isRoutingMode;
  const btn = document.getElementById('btnToggleRoute');
  if (isRoutingMode) {
    selectedPoints = [];
    clearRouteMarkers();
    clearRoute();
    map.setOptions({ draggableCursor: 'crosshair' });
    if (btn) {
      btn.style.background = 'rgba(37,99,235,0.85)';
      btn.style.color = '#fff';
      btn.innerHTML = '<i data-lucide="navigation" class="h-5 w-5"></i>';
      if (window.lucide) window.lucide.createIcons();
    }
    updateRoutingStatus('start');
  } else {
    map.setOptions({ draggableCursor: null });
    if (btn) {
      btn.style.background = '';
      btn.style.color = '';
      btn.innerHTML = '<i data-lucide="navigation" class="h-5 w-5"></i>';
      if (window.lucide) window.lucide.createIcons();
    }
    const status = document.getElementById('routingStatus');
    if (status && selectedPoints.length < 2) status.style.display = 'none';
  }
}
window.toggleRouteMode = toggleRouteMode;

function updateRoutingStatus(step) {
  let statusEl = document.getElementById('routingStatus');
  if (!statusEl) {
    statusEl = document.createElement('div');
    statusEl.id = 'routingStatus';
    statusEl.style.cssText = 'position:absolute;bottom:14px;left:50%;transform:translateX(-50%);z-index:50;background:#fff;border:1.5px solid #bd0000;border-radius:8px;padding:7px 16px;font-size:12px;font-weight:600;color:#bd0000;box-shadow:0 2px 8px rgba(0,0,0,0.15);white-space:nowrap;pointer-events:none;';
    document.querySelector('.map-shell, .public-map-shell')?.appendChild(statusEl);
  }
  if (step === 'start') {
    statusEl.style.display = 'block';
    statusEl.innerHTML = '📍 Bấm điểm <strong>xuất phát (A)</strong> trên bản đồ';
  } else if (step === 'end') {
    statusEl.style.display = 'block';
    statusEl.innerHTML = '🏁 Bấm điểm <strong>đích (B)</strong> trên bản đồ';
  } else if (step === 'done') {
    statusEl.style.display = 'none';
  }
}

function clearRouteMarkers() {
  routeMarkersList.forEach(m => m.setMap(null));
  routeMarkersList = [];
}

function routeToFacility(facilityId) {
  // Giữ tương thích ngược – kích hoạt chế độ chỉ đường
  toggleRouteMode();
}
window.routeToFacility = routeToFacility;

function clearRouteFromDetail() {
  isRoutingMode = false;
  selectedPoints = [];
  clearRouteMarkers();
  clearRoute();
  if (map) map.setOptions({ draggableCursor: null });
  const btn = document.getElementById('btnToggleRoute');
  if (btn) { btn.style.background = ''; btn.style.color = ''; }
  updateRoutingStatus('done');
}
window.clearRouteFromDetail = clearRouteFromDetail;

function drawRoute(start, end) {
  if (currentPolyline) {
    currentPolyline.setMap(null);
    currentPolyline = null;
  }
  const url = `https://router.project-osrm.org/route/v1/driving/${start.lng},${start.lat};${end.lng},${end.lat}?overview=full&geometries=geojson`;
  fetch(url)
    .then(response => response.json())
    .then(data => {
      if (data.code !== 'Ok') {
        console.error('OSRM routing error:', data);
        updateRoutingStatus('done');
        return;
      }
      const route = data.routes[0];
      const path = route.geometry.coordinates.map(coord => ({ lat: coord[1], lng: coord[0] }));
      currentPolyline = new google.maps.Polyline({
        path, geodesic: true,
        strokeColor: '#bd0000', strokeOpacity: 0.85, strokeWeight: 5
      });
      currentPolyline.setMap(map);
      const routeBounds = new google.maps.LatLngBounds();
      path.forEach(p => routeBounds.extend(p));
      map.fitBounds(routeBounds, { top: 80, right: 40, bottom: 60, left: 40 });
    })
    .catch(error => console.error('Fetch OSRM error:', error));
}

function clearRoute() {
  if (currentPolyline) {
    currentPolyline.setMap(null);
    currentPolyline = null;
  }
}

// ── VOICE SEARCH FUNCTIONS ───────────────────────────────────
function initVoiceSearch() {
  const btnVoice = document.getElementById('btnVoice');
  const btnVoiceFloating = document.getElementById('btnVoiceFloating');
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

  if (!SpeechRecognition) {
    if (btnVoice) {
      btnVoice.disabled = true;
      btnVoice.title = "Trình duyệt không hỗ trợ nhận dạng giọng nói.";
    }
    if (btnVoiceFloating) {
      btnVoiceFloating.disabled = true;
      btnVoiceFloating.title = "Trình duyệt không hỗ trợ nhận dạng giọng nói.";
    }
    return;
  }

  const recognition = new SpeechRecognition();
  recognition.lang = "vi-VN";

  const setupMicButton = (btn, searchInput) => {
    if (!btn || !searchInput) return;
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      try {
        recognition.start();
        btn.innerHTML = '<i data-lucide="loader-2" class="h-4 w-4 animate-spin text-red-600"></i>';
        if (window.lucide) window.lucide.createIcons();
      } catch (e) {
        console.error(e);
      }
    });
  };

  setupMicButton(btnVoice, els.legacySearch);
  setupMicButton(btnVoiceFloating, els.searchFloating);

  recognition.onresult = function (event) {
    let transcript = event.results[0][0].transcript;
    transcript = transcript.replace(/[.,!?;:]/g, '').trim().toLowerCase();
    
    if (els.legacySearch) els.legacySearch.value = transcript;
    if (els.searchFloating) els.searchFloating.value = transcript;
    
    state.searchQuery = transcript;
    renderMapData();
  };

  recognition.onerror = function () {
    resetIcons();
  };

  recognition.onend = function () {
    resetIcons();
  };

  function resetIcons() {
    if (btnVoice) {
      btnVoice.innerHTML = '<i data-lucide="mic" class="h-4 w-4"></i>';
    }
    if (btnVoiceFloating) {
      btnVoiceFloating.innerHTML = '<i data-lucide="mic" class="h-4 w-4"></i>';
    }
    if (window.lucide) window.lucide.createIcons();
  }
}

// ── EMERGENCY ALERTS SIMULATOR ───────────────────────────────
function runAlertSimulator() {
  // Simulate alert after 5 seconds
  setTimeout(() => {
    triggerMockAlert('karaoke-hoa-sen', "Đang có báo động tại Karaoke Hoa Sen! Địa chỉ: 123 Trần Hưng Đạo, P. Đông Thành");
  }, 5000);

  // Simulate another alert after 25 seconds
  setTimeout(() => {
    triggerMockAlert('cam-do-phat-loc', "Đang có báo động tại Cầm đồ Phát Lộc! Địa chỉ: 17 Lương Văn Tụy, P. Tân Thành");
  }, 25000);
}

function triggerMockAlert(facilityId, message) {
  const facility = findFacility(facilityId);
  if (!facility) return;

  facility.status = 'purple'; // "Có vi phạm/Rủi ro cao", shows pulsing red dot
  facility.hasAlert = true;
  facility.alertMessage = message;

  if (map && !alertCircles[facilityId]) {
    const circle = new google.maps.Circle({
      strokeColor: "#FF0000",
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: "#FF0000",
      fillOpacity: 0.15,
      map: map,
      center: facility.position,
      radius: 500
    });
    alertCircles[facilityId] = circle;
  }

  currentAlertPhones.add(facility.phone);
  updateAlertPanel();
  playAlertSound();
  enqueueSpeech(message, facility.phone);

  renderMapData();
}

function updateAlertPanel() {
  const panel = document.getElementById('alert-panel');
  const content = document.getElementById('alert-content');
  if (!panel || !content) return;

  const alertingFacilities = facilities.filter(f => f.hasAlert);

  if (alertingFacilities.length === 0) {
    panel.style.opacity = '0';
    panel.style.transform = 'scale(0.95)';
    panel.style.pointerEvents = 'none';
    content.innerHTML = '';
    return;
  }

  content.innerHTML = alertingFacilities.map(f => `
    <article class="p-3 bg-red-50 border border-red-200 rounded-lg space-y-1 relative" data-phone="${f.phone}">
      <h4 class="font-bold text-red-800 text-sm">${escapeHTML(f.name)}</h4>
      <p class="text-xs text-red-700 flex items-center gap-1">
        <i data-lucide="phone" class="h-3 w-3"></i> ${escapeHTML(f.phone)}
      </p>
      <p class="text-xs text-red-600 flex items-center gap-1">
        <i data-lucide="map-pin" class="h-3 w-3"></i> ${escapeHTML(f.address)}
      </p>
      <button class="mt-2 w-full py-1 bg-red-600 hover:bg-red-700 text-white rounded text-xs font-bold transition-colors" onclick="acknowledgeAlert('${f.id}')">
        Đã tiếp nhận
      </button>
    </article>
  `).join('');

  panel.style.opacity = '1';
  panel.style.transform = 'scale(1)';
  panel.style.pointerEvents = 'auto';

  if (window.lucide) window.lucide.createIcons();
}

function playAlertSound() {
  const audio = document.getElementById('myAudio');
  if (audio) {
    audio.play().catch(e => {
      console.log("Audio play blocked by browser. Synthesizing alert tone instead.");
      synthesizeBeep();
    });
  } else {
    synthesizeBeep();
  }
}

function synthesizeBeep() {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);
    
    osc.type = 'sine';
    osc.frequency.setValueAtTime(880, ctx.currentTime);
    gain.gain.setValueAtTime(0.5, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.5);
    
    osc.start();
    osc.stop(ctx.currentTime + 0.5);
  } catch (e) {
    console.error(e);
  }
}

function enqueueSpeech(text, phone) {
  const SpeechSynthesisUtterance = window.SpeechSynthesisUtterance;
  if (!SpeechSynthesisUtterance) return;

  const isPhoneKnown = speechQueue.some(msg => msg.phone === phone);
  if (!isPhoneKnown) {
    const oldPhones = [...new Set(speechQueue.map(msg => msg.phone))];
    const oldMsgs = [];
    for (const p of oldPhones) {
      const firstMsg = speechQueue.find(msg => msg.phone === p);
      if (firstMsg) oldMsgs.push(firstMsg);
    }

    speechQueue = [];
    if (currentMsg && currentMsg.phone !== phone) {
      window.speechSynthesis.cancel();
      currentMsg = null;
      isSpeaking = false;
    }

    const newMsg = new SpeechSynthesisUtterance(text);
    newMsg.textToSpeak = text;
    newMsg.lang = 'vi-VN';
    newMsg.phone = phone;
    newMsg.onend = () => {
      isSpeaking = false;
      currentMsg = null;
      playNextSpeech();
    };
    speechQueue.push(newMsg);

    for (const oldMsg of oldMsgs) {
      if (oldMsg.phone !== phone) {
        const replayMsg = new SpeechSynthesisUtterance(oldMsg.textToSpeak);
        replayMsg.lang = 'vi-VN';
        replayMsg.phone = oldMsg.phone;
        replayMsg.onend = () => {
          isSpeaking = false;
          currentMsg = null;
          playNextSpeech();
        };
        speechQueue.push(replayMsg);
      }
    }
  } else {
    const msg = new SpeechSynthesisUtterance(text);
    msg.textToSpeak = text;
    msg.lang = 'vi-VN';
    msg.phone = phone;
    msg.onend = () => {
      isSpeaking = false;
      currentMsg = null;
      playNextSpeech();
    };
    speechQueue.push(msg);
  }

  if (!isSpeaking) {
    playNextSpeech();
  }
}

function playNextSpeech() {
  if (speechQueue.length > 0) {
    isSpeaking = true;
    currentMsg = speechQueue.shift();
    window.speechSynthesis.speak(currentMsg);
  } else {
    isSpeaking = false;
    currentMsg = null;
  }
}

function clearSpeechQueueByPhone(phone) {
  speechQueue = speechQueue.filter(msg => msg.phone !== phone);
}

function acknowledgeAlert(facilityId) {
  const facility = findFacility(facilityId);
  if (!facility) return;

  facility.status = 'green';
  facility.hasAlert = false;
  
  if (alertCircles[facilityId]) {
    alertCircles[facilityId].setMap(null);
    delete alertCircles[facilityId];
  }

  currentAlertPhones.delete(facility.phone);
  clearSpeechQueueByPhone(facility.phone);

  updateAlertPanel();
  renderMapData();
}
window.acknowledgeAlert = acknowledgeAlert;



setTimeout(() => {
  if (!window.google || !map) {
    els.mapShell.classList.remove('map-loaded');
  }
}, 2500);

ensurePanelRestoreButton();
bindEvents();
applyLayerSettings();
renderNotifications();
renderNearbyList();
renderStats();
lucide.createIcons();

// Initialize voice search
initVoiceSearch();

