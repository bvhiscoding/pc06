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
    position: { lat: 20.2538, lng: 105.9742 }
  },
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
    position: { lat: 20.2487, lng: 105.9691 }
  },
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
    position: { lat: 20.2629, lng: 105.9912 }
  },
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
    position: { lat: 20.2418, lng: 105.9847 }
  },
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
    position: { lat: 20.2348, lng: 105.9634 }
  },
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
    position: { lat: 20.2268, lng: 105.9797 }
  },
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
    position: { lat: 20.2479, lng: 105.9747 }
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
    position: { lat: 20.2534, lng: 105.9741 }
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
    position: { lat: 20.2481, lng: 105.9750 }
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
    position: { lat: 20.4388, lng: 106.1627 }
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
    position: { lat: 20.5414, lng: 105.9135 }
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
    position: { lat: 20.5846, lng: 105.8492 }
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
    position: { lat: 20.5563, lng: 105.8638 }
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
    position: { lat: 20.5034, lng: 105.9284 }
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
    position: { lat: 20.4852, lng: 106.0236 }
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
    position: { lat: 20.5147, lng: 105.9449 }
  }
];

const facilityPublicMedia = [
  {
    owner: 'Nguyễn Văn B',
    ratingAvg: 4.6,
    reviewCount: 128,
    photos: ['public/Kara/Kara1.jpg', 'public/Kara/Kara2.jpeg', 'public/Kara/Kara3.jpg', 'public/Kara/Kara1.jpg']
  },
  {
    owner: 'Trần Văn C',
    ratingAvg: 4.1,
    reviewCount: 76,
    photos: ['public/Nnghi/Nn1.jpg', 'public/Nnghi/Nn2.jpg', 'public/Nnghi/Nn3.jpg']
  },
  {
    owner: 'Phạm Thị D',
    ratingAvg: 4.8,
    reviewCount: 214,
    photos: ['public/Hotel/Ht1.jpg', 'public/Hotel/Ht2.jpg', 'public/Hotel/Ht3.jpg', 'public/Hotel/Ht1.jpg', 'public/Hotel/Ht2.jpg']
  },
  {
    owner: 'Lê Văn E',
    ratingAvg: 3.5,
    reviewCount: 49,
    photos: ['public/Bar/Bar1.jpg', 'public/Bar/Bar2.jpg', 'public/Bar/Bar3.jpg', 'public/Bar/Bar1.jpg']
  },
  {
    owner: 'Vũ Thị F',
    ratingAvg: 4.2,
    reviewCount: 63,
    photos: ['public/Ms/Ms1.jpg', 'public/Ms/Ms2.jpg', 'public/Ms/Ms3.jpg']
  },
  {
    owner: 'Hoàng Văn G',
    ratingAvg: 3.9,
    reviewCount: 31,
    photos: ['public/Bar/Bar1.jpg', 'public/Bar/Bar2.jpg', 'public/Bar/Bar3.jpg', 'public/Hotel/Ht1.jpg']
  },
  {
    photos: ['public/CANB/CANB1.jpg', 'public/CANB/CANB2.jpeg', 'public/CANB/CANB3.jpg']
  },
  {
    photos: ['public/CANBc/CANBc1.jpg', 'public/CANBc/CANBc2.jpg', 'public/CANBc/CANBc3.jpg']
  },
  {
    photos: ['public/CAHL/CAHL1.jpg', 'public/CAHL/CAHL2.jpg', 'public/CAHL/CAHL3.jpg']
  },
  {
    photos: ['public/CAND/CAND1.jpg', 'public/CAND/CAND2.jpg', 'public/CAND/CAND3.jpg']
  },
  {
    photos: ['public/CAHN/CAHN1.jpg', 'public/CAHN/CAHN2.jpg', 'public/CAHN/CAHN3.jpg']
  },
  {
    photos: ['public/CAHL/CAHL1.jpg', 'public/CAHL/CAHL2.jpg', 'public/CAHL/CAHL3.jpg']
  },
  {
    photos: ['public/CAHN/CAHN1.jpg', 'public/CAHN/CAHN2.jpg', 'public/CAHN/CAHN3.jpg']
  },
  {
    photos: ['public/CAND/CAND1.jpg', 'public/CAND/CAND2.jpg', 'public/CAND/CAND3.jpg']
  },
  {
    photos: ['public/CANBc/CANBc1.jpg', 'public/CANBc/CANBc2.jpg', 'public/CANBc/CANBc3.jpg']
  },
  {
    photos: ['public/CANB/CANB1.jpg', 'public/CANB/CANB2.jpeg', 'public/CANB/CANB3.jpg']
  }
];

facilities.forEach((facility, index) => Object.assign(facility, facilityPublicMedia[index] || {}));

const statusMeta = {
  green: { label: 'Đang hoạt động', color: '#22a447', icon: 'store' },
  yellow: { label: 'Tạm dừng', color: '#f4b400', icon: 'pause-circle' },
  gray: { label: 'Ngừng hoạt động', color: '#777d86', icon: 'store' },
  orange: { label: 'Sắp hết hạn', color: '#ff7a16', icon: 'clock-alert' },
  red: { label: 'Hết hạn / Bị thu hồi', color: '#e60012', icon: 'octagon-alert' },
  purple: { label: 'Có vi phạm / Rủi ro cao', color: '#8752dc', icon: 'triangle-alert' }
};

const typeIconUrl = {
  Karaoke: 'iconHKD/microphone.png',
  'Khách sạn': 'iconHKD/hotel.png',
  'Nhà nghỉ': 'iconHKD/hotel.png',
  Massage: 'iconHKD/facial-treatment.png',
  Bar: 'iconHKD/bar.png',
  'Cầm đồ': 'iconHKD/assets.png',
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
    water: false
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

function renderMapData() {
  const items = getFilteredFacilities();
  hideFacilityTooltip();
  renderNearbyList(items);
  renderStats(items);

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
      <a class="popup-detail" href="ChiTietHoSo.html?id=${encodeURIComponent(facility.id)}">Mở hồ sơ đầy đủ</a>
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

setTimeout(() => {
  if (!window.google || !map) {
    els.mapShell.classList.remove('map-loaded');
  }
}, 2500);

ensurePanelRestoreButton();
bindEvents();
renderNotifications();
renderNearbyList();
renderStats();
lucide.createIcons();
