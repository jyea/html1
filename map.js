let map = L.map("map").setView([51.505, -0.09], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

L.marker([51.5, -0.09])
    .addTo(map)
    .bindPopup("<b>Hello world!</b><br>I am a popup.")
    .openPopup();

L.circle([51.508, -0.11], 500, {
    color: "red",
    fillColor: "#f03",
    fillOpacity: 0.5
}).addTo(map).bindPopup("I am a circle.");

L.polygon([
    [51.509, -0.08],
    [51.503, -0.06],
    [51.51, -0.047]
]).addTo(map).bindPopup("I am a polygon.");