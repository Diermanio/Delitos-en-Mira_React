import L from "leaflet";

function CMap() {
  const position = [-2.177769, -79.903658];
  var mymap = L.map("map").setView([-2.177769, -79.903658], 15);
  L.tileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>',
    maxZoom: 18
  }).addTo(mymap);
  L.control.scale().addTo(mymap);
  L.marker(position, {
    draggable: true
  }).addTo(mymap);
}

export default CMap;
