import L from "leaflet";
import * as $ from "jquery";

function createMap() {
  const position = [-2.177769, -79.903658];
  var mymap = L.map("map").setView([-2.177769, -79.903658], 15);
  L.tileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>',
    maxZoom: 18
  }).addTo(mymap);
  L.control.scale().addTo(mymap);
  const marker = L.marker(position, {
    draggable: true
  }).addTo(mymap);

  marker.on("dragend", function(e) {
    //console.log(marker.getLatLng().lat);
    //console.log(marker.getLatLng().lng);
    $("#longitud").text(marker.getLatLng().lng);
    $("#latitud").text(marker.getLatLng().lat);
  });
}

export default createMap;
