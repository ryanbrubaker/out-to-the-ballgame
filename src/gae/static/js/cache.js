// Generated by CoffeeScript 1.3.1
(function() {

  ottb.Cache = (function() {

    Cache.name = 'Cache';

    function Cache() {
      this.gameCache = new Object;
      this.tripsCache = new Object;
    }

    Cache.prototype.addGames = function(games) {
      var game, _i, _len, _results;
      _results = [];
      for (_i = 0, _len = games.length; _i < _len; _i++) {
        game = games[_i];
        _results.push(this.gameCache[game.id] = game);
      }
      return _results;
    };

    Cache.prototype.getGame = function(gameId) {
      return this.gameCache[gameId];
    };

    Cache.prototype.addTrips = function(trips) {
      var destTeam, origTeam, trip, _i, _len, _results;
      _results = [];
      for (_i = 0, _len = trips.length; _i < _len; _i++) {
        trip = trips[_i];
        origTeam = this.tripsCache[trip.orig_team_id];
        if (!(origTeam != null)) {
          origTeam = new Object;
        }
        destTeam = origTeam[trip.dest_team_id];
        if (!(destTeam != null)) {
          destTeam = new Object;
        }
        destTeam["distance"] = parseInt(trip.distance);
        destTeam["distance_desc"] = trip.distance_desc;
        destTeam["duration"] = parseInt(trip.duration);
        destTeam["duration_desc"] = trip.duration_desc;
        origTeam[trip.dest_team_id] = destTeam;
        _results.push(this.tripsCache[trip.orig_team_id] = origTeam);
      }
      return _results;
    };

    Cache.prototype.getTripDistance = function(origTeamId, destTeamId) {
      return this.tripsCache[origTeamId][destTeamId]["distance"];
    };

    Cache.prototype.getTripDuration = function(origTeamId, destTeamId) {
      return this.tripsCache[origTeamId][destTeamId]["duration"];
    };

    return Cache;

  })();

}).call(this);
