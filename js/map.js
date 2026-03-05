let map;

async function initMap() {
    const {Map } = await google.maps.importLibrary("mapa");

    map = new Map(document.getElementById("mapa"), {
        center: {lat: 40.1871468, lng: -3.7777168},
        zoom: 8,
    });
}

initMap();