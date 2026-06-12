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
  { name: 'Karaoke Hoa Sen', address: '123 Trần Hưng Đạo, P. Đông Thành', status: 'green', type: 'Karaoke', position: { lat: 20.2538, lng: 105.9742 } },
  { name: 'Nhà nghỉ Bình Minh', address: '45 Lê Thái Tổ, P. Nam Thành', status: 'yellow', type: 'Nhà nghỉ', position: { lat: 20.2487, lng: 105.9691 } },
  { name: 'Khách sạn Tràng An', address: '88 Trần Phú, P. Vân Giang', status: 'orange', type: 'Khách sạn', position: { lat: 20.2629, lng: 105.9912 } },
  { name: 'Quán Bar New Night', address: '12 Nguyễn Huệ, P. Đông Thành', status: 'red', type: 'Bar', position: { lat: 20.2418, lng: 105.9847 } },
  { name: 'Massage Hoàng Gia', address: '99 Đinh Tiên Hoàng, P. Nam Bình', status: 'gray', type: 'Massage', position: { lat: 20.2348, lng: 105.9634 } },
  { name: 'Cầm đồ Phát Lộc', address: '17 Lương Văn Tụy, P. Tân Thành', status: 'purple', type: 'Cầm đồ', position: { lat: 20.2268, lng: 105.9797 } }
];

const statusColor = {
  green: '#22a447',
  yellow: '#f4b400',
  gray: '#777d86',
  orange: '#ff7a16',
  red: '#e60012',
  purple: '#8752dc'
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
  mapShell: document.querySelector('.map-shell')
};

let map;
let markers = [];
let bounds;

const escapeHTML = (value) => String(value ?? '').replace(/[&<>"']/g, (char) => ({
  '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;'
}[char]));

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

function renderNearbyList(items = facilities) {
  els.nearbyList.innerHTML = items.map((item) => `
    <button class="nearby-item" type="button" data-facility="${escapeHTML(item.name)}">
      <span class="marker-dot ${escapeHTML(item.status)}"><i data-lucide="store" class="h-3.5 w-3.5"></i></span>
      <span>
        <strong>${escapeHTML(item.name)}</strong>
        <span>${escapeHTML(item.address)}</span>
      </span>
      <span class="nearby-status" style="background:${statusColor[item.status]}"></span>
    </button>
  `).join('');
}

function markerIcon(color) {
  return {
    path: 'M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z',
    fillColor: color,
    fillOpacity: 1,
    strokeColor: '#ffffff',
    strokeWeight: 2,
    scale: 1.45,
    anchor: new google.maps.Point(12, 22),
    labelOrigin: new google.maps.Point(12, 9)
  };
}

window.initMap = function initMap() {
  const center = { lat: 20.2506, lng: 105.9745 };
  map = new google.maps.Map(document.getElementById('gisMap'), {
    center,
    zoom: 12,
    mapTypeControl: false,
    streetViewControl: false,
    fullscreenControl: false,
    zoomControl: false,
    styles: [
      { featureType: 'poi.business', stylers: [{ visibility: 'off' }] },
      { featureType: 'water', stylers: [{ color: '#a7d5ff' }] },
      { featureType: 'road.highway', stylers: [{ color: '#f7c56b' }] }
    ]
  });

  els.mapShell.classList.add('map-loaded');
  bounds = new google.maps.LatLngBounds();
  markers = facilities.map((facility) => {
    const marker = new google.maps.Marker({
      map,
      position: facility.position,
      title: facility.name,
      icon: markerIcon(statusColor[facility.status]),
      label: { text: '■', color: '#ffffff', fontSize: '8px' }
    });
    bounds.extend(facility.position);
    marker.addListener('click', () => showFacility(facility));
    return marker;
  });

  map.fitBounds(bounds);
  positionFacilityPopup();
};

function showFacility(facility) {
  els.facilityPopup.querySelector('h2').textContent = facility.name;
  els.facilityPopup.hidden = false;
  positionFacilityPopup();
  if (map) {
    map.panTo(facility.position);
    map.setZoom(Math.max(map.getZoom(), 13));
  }
}

function positionFacilityPopup() {
  const shellRect = els.mapShell.getBoundingClientRect();
  const popupWidth = 345;
  const gap = 30;
  const centerX = shellRect.width / 2;
  const canOpenRight = centerX + gap + popupWidth <= shellRect.width - 16;
  const canOpenLeft = centerX - gap - popupWidth >= 16;

  els.facilityPopup.classList.remove('anchor-right', 'anchor-left', 'anchor-top');

  if (canOpenRight) {
    els.facilityPopup.classList.add('anchor-right');
    return;
  }

  if (canOpenLeft) {
    els.facilityPopup.classList.add('anchor-left');
    return;
  }

  els.facilityPopup.classList.add('anchor-top');
}

function findFacility(name) {
  return facilities.find((item) => item.name === name);
}

const shell = document.querySelector('.desktop-shell');
const sidebarToggle = document.querySelector('#sidebarToggle');
const collapseLabel = sidebarToggle?.querySelector('.collapse-label');

sidebarToggle?.addEventListener('click', () => {
  const isCollapsed = shell.classList.toggle('is-collapsed');
  sidebarToggle.setAttribute('aria-expanded', String(!isCollapsed));
  sidebarToggle.setAttribute('aria-label', isCollapsed ? 'Mở rộng menu' : 'Thu gọn menu');
  if (collapseLabel) collapseLabel.textContent = isCollapsed ? 'Mở rộng' : 'Thu gọn';
});

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

els.nearbyList.addEventListener('click', (event) => {
  const item = event.target.closest('[data-facility]');
  if (!item) return;
  const facility = findFacility(item.dataset.facility);
  if (facility) showFacility(facility);
});

document.querySelector('.popup-close')?.addEventListener('click', () => {
  els.facilityPopup.hidden = true;
});

window.addEventListener('resize', () => {
  if (!els.facilityPopup.hidden) {
    positionFacilityPopup();
  }
});

document.querySelector('#facilitySearch')?.addEventListener('input', (event) => {
  const query = event.target.value.trim().toLowerCase();
  const filtered = facilities.filter((item) => `${item.name} ${item.address}`.toLowerCase().includes(query));
  renderNearbyList(filtered);
  lucide.createIcons();
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
    if (control === 'layers') alert('Lớp bản đồ đã được bật/tắt theo tùy chọn bên phải.');
  });
});

document.querySelector('#advancedFilterBtn')?.addEventListener('click', () => {
  alert('Bộ lọc nâng cao sẽ mở thêm các điều kiện theo địa bàn, ngành nghề và mức rủi ro.');
});

document.querySelector('#refreshStatsBtn')?.addEventListener('click', () => {
  alert('Đã làm mới dữ liệu thống kê trên bản đồ.');
});

document.addEventListener('click', (event) => {
  if (!event.target.closest('.topbar-menu-wrap')) closeTopbarMenus();
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') closeTopbarMenus();
});

setTimeout(() => {
  if (!window.google || !map) {
    els.mapShell.classList.remove('map-loaded');
  }
}, 2500);

renderNotifications();
renderNearbyList();
lucide.createIcons();
