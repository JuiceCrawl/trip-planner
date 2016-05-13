var map;

function initialize_gmaps() {
    // initialize new google maps LatLng object
    var myLatlng = new google.maps.LatLng(40.705189,-74.009209);
    
    // set the map options hash
    var mapOptions = {
        center: myLatlng,
        zoom: 16,
        mapTypeId: google.maps.MapTypeId.ROADMAP,

    };

var styles = [
  {
    stylers: [
      { hue: "#00ffe6" },
      { saturation: -20 }
    ]
  },{
    featureType: "road",
    elementType: "geometry",
    stylers: [
      { lightness: 100 },
      { visibility: "simplified" }
    ]
  },{
    featureType: "road",
    elementType: "labels",
    stylers: [
      { visibility: "off" }
    ]
  }
];

    // get the maps div's HTML obj
    var map_canvas_obj = document.getElementById("map-canvas");
    // initialize a new Google Map with the options
    map = new google.maps.Map(map_canvas_obj, mapOptions);
    // Add the marker to the map
    var marker = new google.maps.Marker({
        position: myLatlng,
        title:"Hello World!"
    });
    
    map.setOptions({styles: styles});
    // Add the marker to the map by calling setMap()
    //marker.setMap(map);

}

function addMarker(lat,lng,name) {
  var marker2 = new google.maps.Marker({
        position: {lat: lat, lng: lng},
        map: map,
        draggable: true,
        title: name
    });

  marker2.setMap(map);
  return marker2;
}

function removeMarker(marker) {
  marker.setMap(null);
}

$(document).ready(function() {
    initialize_gmaps();
});