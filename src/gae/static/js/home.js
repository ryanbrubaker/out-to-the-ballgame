// Generated by CoffeeScript 1.3.1
(function() {
  var displayGamesForDate, initMap;

  displayGamesForDate = function(date, map) {
    return $.ajax({
      url: 'appdata/games?date=' + date,
      success: function(games) {
        var game, _i, _len, _results;
        _results = [];
        for (_i = 0, _len = games.length; _i < _len; _i++) {
          game = games[_i];
          _results.push((function(game) {
            var marker;
            marker = new google.maps.Marker({
              position: new google.maps.LatLng(parseFloat(game.lat), parseFloat(game.lon)),
              title: game.away_team + ' vs. ' + game.home_team,
              map: map
            });
            return google.maps.event.addListener(marker, 'click', function() {
              var infoWindow;
              infoWindow = new google.maps.InfoWindow();
              infoWindow.setContent(marker.title);
              infoWindow.open(map, marker);
              return false;
            });
          })(game));
        }
        return _results;
      },
      error: function() {
        return alert('Error retrieving games for the selected date.');
      }
    });
  };

  initMap = function() {
    var map, options;
    options = {
      center: new google.maps.LatLng(39.8111444, -98.5569364),
      zoom: 4,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    map = new google.maps.Map(document.getElementById("schedule-map"), options);
    return displayGamesForDate(new Date().toJSON().slice(0, 10), map);
  };

  $(document).ready(initMap);

}).call(this);
