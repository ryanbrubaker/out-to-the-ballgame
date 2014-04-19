// Generated by CoffeeScript 1.3.1
(function() {
  var initMap;

  initMap = function() {
    var map, options;
    options = {
      center: new google.maps.LatLng(39.8111444, -98.5569364),
      zoom: 4,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    return map = new google.maps.Map(document.getElementById("schedule-map"), options);
  };

  $(document).ready(initMap);

}).call(this);
