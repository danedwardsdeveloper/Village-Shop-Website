async function initMap() {
  let map;
  const position = { lat: 50.9690737, lng: -1.6360944 };
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");
  const mapName = "Landford Village Store &amp; Post Office";
  map = new Map(document.getElementById("map"), {
    zoom: 14.68,
    center: position,
    mapId: mapName,
    streetViewControl: false,
    mapTypeControl: false,
  });
}

export default initMap;
