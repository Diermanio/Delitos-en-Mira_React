import L from "leaflet";
import * as $ from "jquery";

function showMap() {
  var mymap = L.map("map").setView([-2.177769, -79.903658], 15);
  L.tileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>',
    maxZoom: 18
  }).addTo(mymap);
  L.control.scale().addTo(mymap);

  $.getJSON("./delitos.json", function(delitos) {
    var longitud = delitos.length;
    for (var i = 0; i < longitud; i++) {
      const del = delitos[i];
      const marker = L.marker([delitos[i].latitud, delitos[i].longitud]).addTo(
        mymap
      );
      marker.on("click", function(e) {
        console.log(e);
        console.log(del.usuario);
        $("#usuario").text(del.usuario);
        $("#tipodelito").text(del.tipoDelito);
        $("#sector").text(del.sector);
        $("#datetime").text(del.datetime);
        $("#comentario").text(del.comentario);
        if (e.target && e.target.id === "NewClass") {
          console.log("2");
        }
      });
    }
  });
}

export default showMap;
