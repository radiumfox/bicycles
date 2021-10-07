const DEFAULT_ZOOM = 16;
const DEFAULT_COORDS = {
  lat: 59.93879020329167,
  lng: 30.32306104365654
};

const mapWrapper = document.querySelector('.page-footer__map');

if (mapWrapper) {
  const map = L.map('map')
  .setView(DEFAULT_COORDS, DEFAULT_ZOOM);

  L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    },
  ).addTo(map);
};
