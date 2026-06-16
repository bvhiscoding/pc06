(() => {
  const $ = (selector) => document.querySelector(selector);
  const createIcons = () => window.lucide?.createIcons();

  function setupCreateForm() {
    const form = $('#complaintForm');
    const modal = $('#successModal');
    if (!form) return;

    form.addEventListener('submit', (event) => {
      event.preventDefault();
      if (modal) modal.hidden = false;
    });

    $('[data-close-success]')?.addEventListener('click', () => {
      if (modal) modal.hidden = true;
      window.location.href = 'QuanLyPhanAnh.html';
    });

    $('[data-add-file]')?.addEventListener('click', () => {
      alert('Chức năng chọn tệp minh họa trong mockup.');
    });
  }

  setupCreateForm();
  window.addEventListener('load', createIcons);
  createIcons();
})();
