
let map = L.map('map').setView([40.187353,-3.777603],25);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png',{
    attribution: 'Alimentacion Rubio'
}).addTo(map);

let popup = L.popup().setLatLng([40.187353, -3.777603]).setContent('<a href="http://127.0.0.1:5501/views/productos.html"><img class="logo" src="/favicon.png" width="150" height="150">Alimentacion Rubio<a/a>'); 

let marker = L.marker([40.187353, -3.777603]).bindPopup(popup).openTooltip().addTo(map);