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
  Karaoke: '../iconHKD/microphone.png',
  'Khách sạn': '../iconHKD/hotel.png',
  'Nhà nghỉ': '../iconHKD/hotel.png',
  Massage: '../iconHKD/facial-treatment.png',
  Bar: '../iconHKD/bar.png',
  'Cầm đồ': '../iconHKD/assets.png'
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
  footerStats: document.querySelector('#gisFooterStats'),
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
  layerToggles: document.querySelectorAll('[data-map-layer]')
};

const state = {
  searchQuery: '',
  filters: { ward: '', type: '', status: '', license: '' },
  layers: {
    facilityLabels: true,
    administrative: true,
    roads: true,
    water: false
  },
  selectedFacilityId: null,
  isHeatmapEnabled: false,
  isPanelCollapsed: false,
  drawingMode: null,
  radiusCenter: null,
  polygonPath: [],
  activeRegion: null
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
  if (!els.notificationList) return;
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
    url: typeIconUrl[facility.type] || '../iconHKD/assets.png',
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
  els.nearbyList.innerHTML = items.map((item) => {
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
  if (!els.footerStats) return;
  const stats = Object.keys(statusMeta).map((status) => ({
    status,
    ...statusMeta[status],
    count: items.filter((item) => item.status === status).length
  })).filter((item) => item.count > 0 || ['green', 'yellow', 'red', 'purple'].includes(item.status));

  els.footerStats.innerHTML = stats.map((item) => `
    <span class="footer-stat-item">
      <span class="marker-dot ${escapeHTML(item.status)}"><i data-lucide="${escapeHTML(item.icon)}" class="h-3.5 w-3.5"></i></span>
      ${escapeHTML(item.label)}: <strong>${item.count}</strong>
    </span>
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

function openFacilityTooltip(facility) {
  state.selectedFacilityId = facility.id;
  const meta = statusMeta[facility.status] || statusMeta.green;

  els.facilityPopup.querySelector('h2').textContent = facility.name;
  els.facilityPopup.querySelector('.popup-status').textContent = meta.label;
  els.facilityPopup.querySelector('.popup-status').style.background = `${meta.color}22`;
  els.facilityPopup.querySelector('.popup-status').style.color = meta.color;
  els.facilityPopup.querySelector('.tooltip-type').textContent = `${facility.type} - ${facility.licenseStatus}`;
  els.facilityPopup.hidden = false;
  positionFacilityPopup(facility.position);
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
  if (!projectionOverlay?.getProjection || !map) return;
  const projection = projectionOverlay.getProjection();
  if (!projection) return;

  const point = projection.fromLatLngToContainerPixel(new google.maps.LatLng(position.lat, position.lng));
  const shellRect = els.mapShell.getBoundingClientRect();
  const width = 260;
  const height = 132;
  const left = Math.max(16, Math.min(shellRect.width - width - 16, point.x - width / 2));
  const top = Math.max(70, Math.min(shellRect.height - height - 74, point.y - height - 16));

  els.facilityPopup.style.left = `${left}px`;
  els.facilityPopup.style.top = `${top}px`;
  els.facilityPopup.style.transform = 'none';
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
  els.floatingPanelToggle.setAttribute('aria-expanded', String(!collapsed));
  els.floatingPanelToggle.innerHTML = collapsed
    ? '<i data-lucide="panel-right-open" class="h-5 w-5"></i><span>Mở rộng</span>'
    : '<i data-lucide="panel-right-close" class="h-5 w-5"></i><span>Thu gọn</span>';
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


window.initMap = function initMap() {
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

  document.addEventListener('click', (event) => {
    if (!event.target.closest('.topbar-menu-wrap')) closeTopbarMenus();
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeTopbarMenus();
      closeFilterDrawer();
      closeFacilitySheet();
      hideFacilityTooltip();
      if (state.drawingMode) {
        clearDrawingDraft();
        state.drawingMode = null;
        map?.setOptions({ draggableCursor: null, disableDoubleClickZoom: false });
      }
    }
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
