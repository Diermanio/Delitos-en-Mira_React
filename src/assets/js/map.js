var features = null;
var delitos = null;
function loadJSON(url,callback) {
  var xobj = new XMLHttpRequest();
  xobj.overrideMimeType("application/json");
  xobj.open('GET', url, true);
  xobj.onreadystatechange = function () {
    if (xobj.readyState == 4 && xobj.status == "200") {
      callback(xobj.responseText);
    }
  }
  xobj.send(null);
};

loadJSON('assets/data/features.json',function(response) {
  features =  JSON.parse(response);
});
loadJSON('assets/data/delitos.json',function(response) {
  delitos =  JSON.parse(response);
});

mapboxgl.accessToken = 'pk.eyJ1IjoiamF2aWxsYW8iLCJhIjoiY2szcW5iaGp6MDNnZTNucHNpM3l5d2ZqcyJ9.mPBk3ZOVSp1N4yAIglYLpg';
var map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/mapbox/streets-v11',
center: [-79.90, -2.1894],
zoom: 11
});

map.on('load',function(){
  map.loadImage("assets/ico/position-map-icon.png",function(error, image){
    if(error) throw error;
    map.addImage('marker',image);
    map.addLayer({
      "id":"places",
      "type":"symbol",
      "source":{
        "type":"geojson",
        "data":{
          "type":"FeatureCollection",
          "features": features
        }
      },
      "layout":{
        "icon-image":"marker",
        "icon-size": 0.1,
        "icon-allow-overlap":true
      }
    });
    map.on('click','places',function(e){
      var coordinates = e.features[0].geometry.coordinates.slice();
      var description = e.features[0].properties.description;
      
      while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
      coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
      }
      
      new mapboxgl.Popup()
        .setLngLat(coordinates)
        .setHTML(description)
        .addTo(map);
    });
    map.on('mouseenter', 'places', function () {
      map.getCanvas().style.cursor = 'pointer';
    });
  
  // Change it back to a pointer when it leaves.
    map.on('mouseleave', 'places', function () {
      map.getCanvas().style.cursor = '';
    });
  });
});