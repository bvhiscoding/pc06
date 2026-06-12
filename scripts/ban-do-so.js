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

window.initPublicMap = function initPublicMap() {
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

setTimeout(() => {
  if (!window.google || !map) {
    els.mapShell.classList.remove('map-loaded');
  }
}, 2500);

renderNearbyList();
lucide.createIcons();
