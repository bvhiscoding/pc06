(function () {
  const GOOGLE_MAPS_LIBRARIES = ['places', 'geometry'];
  let loadPromise;

  function showMissingKeyMessage() {
    const fallbackNotes = document.querySelectorAll('.map-fallback-note');

    fallbackNotes.forEach((note) => {
      note.innerHTML = `
        <strong>Google Maps API</strong>
        <span>Thiếu <code>GOOGLE_MAPS_API_KEY</code> trong <code>scripts/env.js</code>.</span>
      `;
    });
  }

  window.loadGoogleMapsApi = function loadGoogleMapsApi(callbackName) {
    if (loadPromise) {
      return loadPromise;
    }

    const apiKey = window.APP_ENV && window.APP_ENV.GOOGLE_MAPS_API_KEY;

    if (!apiKey) {
      showMissingKeyMessage();
      loadPromise = Promise.reject(new Error('Missing GOOGLE_MAPS_API_KEY in scripts/env.js'));
      return loadPromise;
    }

    loadPromise = new Promise((resolve, reject) => {
      const script = document.createElement('script');
      const query = new URLSearchParams({
        key: apiKey,
        callback: callbackName,
        libraries: GOOGLE_MAPS_LIBRARIES.join(',')
      });

      script.src = `https://maps.googleapis.com/maps/api/js?${query.toString()}`;
      script.async = true;
      script.defer = true;
      script.onload = () => resolve();
      script.onerror = () => reject(new Error('Failed to load Google Maps API.'));

      document.head.appendChild(script);
    });

    return loadPromise;
  };
})();
